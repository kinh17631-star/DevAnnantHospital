import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section style={container}>

      <div style={overlay}></div>

      <div style={content}>
        <motion.h1 
          style={heading}
          initial={{ opacity: 0, x: -100 }} // Left se aayega
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Welcome to <br /> Dev Annant Hospital
        </motion.h1>

        <motion.p 
          style={text}
          initial={{ opacity: 0, x: 100 }} // Right se aayega
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Your Health Is Our Top Priority <br />
          Advanced healthcare with expert doctors | 📞 098373 89977
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }} // Neeche se upar aayega
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <a href="/appointment">
            <button style={btn}>Book Appointment</button>
          </a>
        </motion.div>
      </div>

    </section>
  );
}

/* STYLES */

const container = {
  position: "relative",
  width: "100%",
  height: "90vh",
  backgroundImage: "url('/IMG_4532.jpeg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden" // Animation bahar na nikle isliye
};

const overlay = {
  position: "absolute",
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.6)" // Text clear dikhe isliye thoda dark kiya hai
};

const content = {
  position: "relative",
  color: "white",
  textAlign: "center",
  zIndex: 2,
  padding: "0 20px"
};

const heading = {
  fontSize: "48px",
  marginBottom: "15px",
  fontWeight: "bold",
  textShadow: "2px 2px 4px rgba(0,0,0,0.5)" // Text ko aur clear karne ke liye
};

const text = {
  fontSize: "18px",
  marginBottom: "30px",
  lineHeight: "1.6",
  textShadow: "1px 1px 3px rgba(0,0,0,0.5)"
};

const btn = {
  padding: "14px 30px",
  borderRadius: "8px",
  border: "none",
  background: "#0d6efd",
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "0 4px 15px rgba(13, 110, 253, 0.4)", // Button thoda highlight ho
  transition: "0.3s"
};
