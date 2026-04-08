import { useState } from "react";
import { motion } from "framer-motion";

export default function Sidebar() {

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Icon */}
      <div style={hamburger} onClick={() => setOpen(!open)}>
        {open ? "✖" : "☰"}
      </div>

      {/* Animated Sidebar Panel */}
      <motion.div 
        style={panel}
        initial={{ x: "100%" }}
        animate={{ x: open ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
      >
        
        <h3 style={title}>Dev Annant Hospital</h3>

        <a href="https://wa.me/919837389977" style={{ ...btn, background: "#25D366" }}>
          WhatsApp
        </a>

        <a href="tel:09837389977" style={{ ...btn, background: "#0d6efd" }}>
          Call
        </a>

        <a href="/appointment" style={{ ...btn, background: "#ff4d4d" }}>
          Appointment
        </a>

      </motion.div>
    </>
  );
}

/* STYLES */

const hamburger = {
  position: "fixed",
  top: "20px",
  right: "20px",
  fontSize: "22px",
  cursor: "pointer",
  zIndex: 2000,
  background: "#0d6efd",
  color: "white",
  padding: "8px 15px",
  borderRadius: "8px",
  userSelect: "none"
};

const panel = {
  position: "fixed",
  top: 0,
  right: 0,
  height: "100%",
  width: "250px",
  background: "white",
  boxShadow: "-5px 0 20px rgba(0,0,0,0.1)",
  padding: "20px",
  paddingTop: "80px", // Taki upar ka hamburger icon aur text overlap na ho
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  zIndex: 1999 
};

const title = {
  textAlign: "center",
  color: "#0b1a2c",
  marginBottom: "10px",
  fontSize: "18px",
  fontWeight: "bold"
};

const btn = {
  padding: "12px",
  color: "white",
  textDecoration: "none",
  borderRadius: "8px",
  textAlign: "center",
  transition: "0.3s",
  fontWeight: "bold"
};
