process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const fs = require('fs');
const path = require('path');
const os = require('os');

// Read token from ~/.supabase/access-token
const tokenPath = path.join(os.homedir(), '.supabase', 'access-token');
let token = '';
try {
  token = fs.readFileSync(tokenPath, 'utf8').trim();
} catch (e) {
  console.error("Could not read token from " + tokenPath + ". Make sure you are logged in.");
  process.exit(1);
}

const projectRef = "uoivazugnkfkkyyviuys";

async function deployFunction(slug, displayName) {
  const filePath = path.join(__dirname, 'supabase', 'functions', slug, 'index.ts');
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');

  // FormData API is built-in starting with Node.js 18
  const formData = new FormData();
  
  // Set metadata
  formData.append('metadata', JSON.stringify({
    entrypoint_path: "index.ts",
    name: displayName,
    verify_jwt: false
  }));

  // Create a Blob from the file content
  const blob = new Blob([fileContent], { type: 'text/plain' });
  formData.append('file', blob, 'index.ts');

  const url = `https://api.supabase.com/v1/projects/${projectRef}/functions/deploy?slug=${slug}`;
  
  console.log(`Deploying function: ${slug}...`);
  
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error(`Failed to deploy ${slug}:`, errText);
    } else {
      const data = await res.json();
      console.log(`Successfully deployed ${slug}!`, data);
    }
  } catch (error) {
    console.error(`Network error deploying ${slug}:`, error);
  }
}

async function run() {
  await deployFunction('send-contact-email', 'send-contact-email');
  await deployFunction('send-macro-results', 'send-macro-results');
}

run().catch(console.error);
