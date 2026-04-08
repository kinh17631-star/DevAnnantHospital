import { motion } from "framer-motion";

export default function Stats() {

  const data = [
    { number: "1000+", label: "Happy Patients" },
    { number: "50+", label: "Expert Doctors" },
    { number: "24/7", label: "Emergency Service" },
    { number: "10+", label: "Years Experience" }
  ];

  return (
    <section style={container}>

      {data.map((item, i) => (
        <motion.div 
          key={i} 
          style={card}
          initial={{ opacity: 0, x: 50 }} // Right side se slide hokar aayega
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }} // Har card ek chote delay ke baad aayega
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(0,0,0,0.1)" }} // Hover effect ko thoda aur smooth kiya
        >
          <h2 style={number}>{item.number}</h2>
          <p style={label}>{item.label}</p>
        </motion.div>
      ))}

    </section>
  );
}

/* STYLES */

const container = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
  gap: "20px",
  padding: "60px 20px",
  background: "#ffffff",
  overflow: "hidden" // Animation box se bahar na jaye
};

const card = {
  textAlign: "center",
  padding: "25px",
  borderRadius: "15px",
  background: "#f8fbff",
  boxShadow: "0 8px 25px rgba(0,0,0,0.05)",
  transition: "0.3s"
};

const number = {
  fontSize: "32px",
  color: "#0d6efd",
  marginBottom: "10px",
  fontWeight: "bold"
};

const label = {
  fontSize: "14px",
  color: "#555",
  fontWeight: "500"
};
