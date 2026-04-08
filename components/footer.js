import { useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {

  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      setMsg("Please enter email");
      return;
    }

    setMsg("Subscribed successfully!");
    setEmail("");
  };

  return (
    <footer style={{
      background: "#0b1a2c",
      color: "#fff",
      padding: "50px 20px",
      marginTop: "40px",
      overflow: "hidden" // Animation screen ke bahar na jaye isliye
    }}>

      {/* GRID */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} // Left side se aayega
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "auto"
        }}
      >

        {/* ABOUT */}
        <div>
          <h2>Dev Annant Hospital</h2>
          <p>
            Providing advanced healthcare services with expert doctors and modern facilities in Meerut.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3>Quick Links</h3>
          <ul style={list}>
            <li><a href="/" style={link}>home</a></li>
            <li><a href="/doctors" style={link}>doctors</a></li>
            <li><a href="/appointment" style={link}>appointment</a></li>
            <li><a href="/privacy-policy" style={link}>privacy policy</a></li>
            <li><a href="/terms" style={link}>terms & conditions</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3>Contact</h3>
          <p>📍 NP 3/1, Ganga Nagar, Meerut</p>
          <p>📞 098373 89977</p>
          <p>💬 WhatsApp Available</p>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3>Subscribe</h3>
          <p>Get updates and health tips</p>

          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              style={input}
            />

            <button style={btn}>Subscribe</button>
          </form>

          {msg && <p style={{marginTop:"10px", color: "#4ade80"}}>{msg}</p>}
        </div>

      </motion.div>

      {/* BOTTOM */}
      <div style={{
        textAlign: "center",
        marginTop: "40px",
        borderTop: "1px solid #333",
        paddingTop: "15px"
      }}>
        <p>© 2026 Dev Annant Hospital</p>
        <p>Created by A.S Tech Foundation</p>
      </div>

    </footer>
  );
}

/* STYLES */

const list = {
  listStyle: "none",
  padding: 0
};

const link = {
  color: "#ccc",
  textDecoration: "none",
  display: "block",
  margin: "5px 0"
};

const input = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "6px",
  border: "none",
  outline: "none"
};

const btn = {
  width: "100%",
  padding: "10px",
  background: "#0d6efd",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold"
};
