import { motion } from "framer-motion";

export default function Services() {

  const services = [
    { title: "Cardiology", desc: "Heart related treatments with advanced technology." },
    { title: "Neurology", desc: "Brain and nerve system specialist doctors." },
    { title: "Orthopedics", desc: "Bone and joint care with expert surgeons." },
    { title: "Pediatrics", desc: "Complete healthcare for children." },
    { title: "Emergency Care", desc: "24/7 emergency support available." },
    { title: "Laboratory", desc: "Accurate and fast testing services." }
  ];

  return (
    <section style={container}>

      {/* Heading Animation */}
      <motion.h2 
        style={heading}
        initial={{ opacity: 0, x: -50 }} // Left se slide 
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Our Services
      </motion.h2>

      <div style={grid}>
        {services.map((item, i) => (
          /* Cards Animation with Stagger Delay */
          <motion.div 
            key={i} 
            style={card}
            initial={{ opacity: 0, x: -50 }} // Har card left se aayega
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }} // delay: i * 0.15 se cards ek-ek karke aayenge
            viewport={{ once: true, amount: 0.1 }}
            whileHover={{ y: -10, boxShadow: "0 15px 35px rgba(0,0,0,0.1)" }} // Hover karne par card thoda upar uthega
          >

            <div style={icon}>🏥</div>

            <h3 style={title}>{item.title}</h3>

            <p style={desc}>{item.desc}</p>

          </motion.div>
        ))}
      </div>

    </section>
  );
}

/* STYLES */

const container = {
  padding: "60px 20px",
  background: "#f5f9ff",
  overflow: "hidden" // Animation box se bahar na dikhe
};

const heading = {
  textAlign: "center",
  marginBottom: "40px",
  fontSize: "30px",
  color: "#0d6efd",
  fontWeight: "bold"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "20px",
  maxWidth: "1200px", // Content ko center mein rakhne ke liye
  margin: "0 auto"
};

const card = {
  background: "white",
  padding: "25px",
  borderRadius: "15px",
  textAlign: "center",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  transition: "0.3s" // Hover ke liye smooth transition
};

const icon = {
  fontSize: "35px", // Icon thoda bada kiya
  marginBottom: "15px"
};

const title = {
  marginBottom: "10px",
  color: "#333"
};

const desc = {
  fontSize: "14px",
  color: "#666", // Text color thoda soft kiya
  lineHeight: "1.5"
};
