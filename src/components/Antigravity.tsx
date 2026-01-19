"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AntigravityProps extends React.HTMLAttributes<HTMLDivElement> {}

const Antigravity: React.FC<AntigravityProps> = ({
  className,
  children,
  ...props
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 3,
      opacity: 0.5,
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      animate={isHovering ? "hover" : "default"}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Antigravity;