import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";

export default function Home() {

  const services = [
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Dental Care",
    "Emergency Care"
  ];

  const doctors = [
    { name: "Dr. Amit Sharma", spec: "Cardiologist" },
    { name: "Dr. Neha Verma", spec: "Neurologist" },
    { name: "Dr. Raj Singh", spec: "Orthopedic Specialist" }
  ];

  return (
    <>
      <Head>
        <title>Dev Annant Hospital - Best Healthcare in Meerut</title>
      </Head>

      <Navbar />
      <Sidebar />

      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section style={{
        position: "relative",
        backgroundImage: "url('/IMG_4532.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: "120px 20px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
      }}>
        {/* Dark Overlay for better text visibility */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.6)", zIndex: 1 }}></div>
        
        <motion.div 
          style={{ position: "relative", zIndex: 2 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 style={{ fontSize: "42px", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
            Welcome to Dev Annant Hospital
          </h1>
          <p style={{ fontSize: "18px", marginBottom: "20px", textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
            Your Health Is Our Top Priority | Advanced healthcare with expert doctors
          </p>

          <a href="/appointment">
            <button style={btnPrimary}>Book Appointment</button>
          </a>
        </motion.div>
      </section>

      {/* STATS */}
      <section style={{
        padding: "60px 20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
        gap: "20px",
        overflow: "hidden"
      }}>
        {[
          { title: "1000+", sub: "Patients Treated" },
          { title: "85%", sub: "Recovery Rate" },
          { title: "24/7", sub: "Emergency" },
          { title: "15+", sub: "Doctors" }
        ].map((item, i) => (
          <motion.div 
            key={i} 
            style={card}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
          >
            <h2 style={{ color: "#0d6efd", fontSize: "32px" }}>{item.title}</h2>
            <p style={{ color: "#555", fontWeight: "bold" }}>{item.sub}</p>
          </motion.div>
        ))}
      </section>

      {/* SERVICES */}
      <section style={{ padding: "60px 20px", background: "#f8fbff", overflow: "hidden" }}>
        <h2 style={title}>Our Services</h2>

        <div style={grid}>
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              style={card}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            >
              <h3 style={{ marginBottom: "10px", color: "#333" }}>{s}</h3>
              <p style={{ color: "#666" }}>Advanced care for {s.toLowerCase()}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DOCTORS */}
      <section style={{ padding: "60px 20px", overflow: "hidden" }}>
        <h2 style={title}>Our Expert Doctors</h2>

        <div style={grid}>
          {doctors.map((doc, i) => (
            <motion.div 
              key={i} 
              style={card}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            >
              <h3 style={{ marginBottom: "5px" }}>{doc.name}</h3>
              <p style={{ color: "#0d6efd", fontWeight: "bold" }}>{doc.spec}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: "#0b1a2c", // Thoda dark professional background
        color: "white",
        textAlign: "center",
        padding: "60px 20px",
        overflow: "hidden"
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 style={{ marginBottom: "15px" }}>Book Appointment Today</h2>
          <p style={{ marginBottom: "20px" }}>Call us directly at <strong>08650921106</strong> or schedule online.</p>

          <a href="/appointment">
            <button style={btnLight}>Schedule Now</button>
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

/* STYLES */

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "20px",
  maxWidth: "1200px",
  margin: "0 auto"
};

const card = {
  background: "white",
  padding: "25px",
  borderRadius: "15px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  textAlign: "center",
  transition: "0.3s"
};

const title = {
  textAlign: "center",
  marginBottom: "40px",
  fontSize: "32px",
  color: "#0d6efd",
  fontWeight: "bold"
};

const btnPrimary = {
  padding: "14px 30px",
  background: "#0d6efd",
  color: "white",
  borderRadius: "10px",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
  boxShadow: "0 4px 15px rgba(13, 110, 253, 0.4)",
  transition: "0.3s"
};

const btnLight = {
  padding: "14px 30px",
  background: "#0d6efd", // CTA section ke dark background par blue button acha lagega
  color: "white",
  borderRadius: "10px",
  border: "none",
  marginTop: "10px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
  transition: "0.3s"
};
