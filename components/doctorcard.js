import { motion } from "framer-motion";

export default function DoctorCard({ name, spec, exp, image }) {
  return (
    <motion.div 
      style={card}
      initial={{ opacity: 0, x: 50 }} // Card right side se slide hokar aayega
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >

      {/* IMAGE */}
      <div style={imgBox}>
        <img
          src={image || "/doctor.jpg"}
          alt="doctor"
          style={img}
        />
      </div>

      {/* INFO */}
      <h3 style={nameStyle}>{name}</h3>

      <p style={specStyle}>{spec}</p>

      <p style={expStyle}>{exp}</p>

      {/* BUTTON */}
      <a href="/appointment">
        <button style={btn}>Book Appointment</button>
      </a>

    </motion.div>
  );
}

/* STYLES */

const card = {
  background: "white",
  padding: "20px",
  borderRadius: "15px",
  textAlign: "center",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  transition: "box-shadow 0.3s ease-in-out", // Hover effect ko smooth karne ke liye
  overflow: "hidden"
};

const imgBox = {
  marginBottom: "15px"
};

const img = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  borderRadius: "10px"
};

const nameStyle = {
  marginBottom: "5px"
};

const specStyle = {
  color: "#0d6efd",
  fontWeight: "bold",
  marginBottom: "5px"
};

const expStyle = {
  fontSize: "13px",
  color: "#555",
  marginBottom: "15px"
};

const btn = {
  padding: "10px 15px",
  background: "#0d6efd",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
  width: "100%" // Button ko thoda accha look dene ke liye width 100% ki hai
};
