import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <motion.nav 
      style={nav}
      initial={{ opacity: 0, y: -50 }} // Upar se aayega
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >

      <div style={logo}>DEV ANNANT HOSPITAL</div>

      <div style={menu}>
        <a href="/" style={link}>home</a>
        <a href="/doctors" style={link}>doctors</a>
        <a href="/patients" style={link}>patients</a>
        <a href="/staff" style={link}>staff</a>
        <a href="/appointment" style={link}>appointment</a>
      </div>

      <div style={btn} onClick={() => setOpen(!open)}>☰</div>

    </motion.nav>
  );
}

/* STYLES */

const nav = {
  width: "100%",          
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 20px",
  background: "linear-gradient(90deg,#0d6efd,#4facfe)",
  color: "white",
  boxSizing: "border-box", // Width issue fix karne ke liye
  position: "sticky", // Scroll karne par navbar upar ruka rahe (optional, par acha lagta hai)
  top: 0,
  zIndex: 100
};

const logo = {
  fontWeight: "bold",
  fontSize: "22px",
  letterSpacing: "1px"
};

const menu = {
  display: "flex",
  gap: "15px",
  alignItems: "center"
};

const link = {
  color: "white",
  textDecoration: "none",
  textTransform: "capitalize",
  fontWeight: "500",
  transition: "0.3s"
};

const btn = {
  fontSize: "22px",
  cursor: "pointer"
};
