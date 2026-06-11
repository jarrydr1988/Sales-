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

const secretName = process.argv[2];
const secretValue = process.argv[3];

if (!secretName || !secretValue) {
  console.error("Usage: node set-secrets.cjs <SECRET_NAME> <SECRET_VALUE>");
  process.exit(1);
}

async function setSecret() {
  const url = `https://api.supabase.com/v1/projects/${projectRef}/secrets`;
  
  console.log(`Setting secret ${secretName} in Supabase...`);
  
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([
        { name: secretName, value: secretValue }
      ])
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error(`Failed to set secret:`, errText);
    } else {
      console.log(`Successfully set secret ${secretName}!`);
    }
  } catch (error) {
    console.error(`Network error:`, error);
  }
}

setSecret().catch(console.error);
