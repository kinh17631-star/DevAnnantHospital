import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";

export default function Patients() {

  const services = [
    "General Checkup",
    "Emergency Care",
    "Laboratory Tests",
    "Surgery",
    "X-Ray & Imaging",
    "Pharmacy"
  ];

  const facilities = [
    "24/7 Emergency Services",
    "Advanced ICU",
    "Modern Operation Theatre",
    "Ambulance Service",
    "Experienced Nursing Staff",
    "Online Appointment System"
  ];

  return (
    <>
      <Head>
        <title>Patient Services - Dev Annant Hospital</title>
      </Head>

      <Navbar />
      <Sidebar />

      {/* HEADER */}
      <section style={{
        background: "linear-gradient(135deg,#0d6efd,#4facfe)",
        color: "white",
        padding: "70px 20px",
        textAlign: "center",
        overflow: "hidden"
      }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 style={{ fontSize: "38px" }}>Patient Care & Services</h1>
          <p>Providing quality healthcare with compassion</p>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "60px 20px", overflow: "hidden" }}>
        <motion.h2 
          style={title}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <div style={grid}>
          {services.map((item, i) => (
            <motion.div 
              key={i} 
              style={card}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            >
              <h3 style={{ marginBottom: "10px", color: "#333" }}>{item}</h3>
              <p style={{ color: "#666", fontSize: "14px" }}>
                We provide reliable and advanced {item.toLowerCase()} services for our patients with high standards of care.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FACILITIES */}
      <section style={{ padding: "60px 20px", background: "#f9fbff", overflow: "hidden" }}>
        <motion.h2 
          style={title}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Hospital Facilities
        </motion.h2>

        <div style={grid}>
          {facilities.map((item, i) => (
            <motion.div 
              key={i} 
              style={card}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            >
              <h3 style={{ marginBottom: "10px", color: "#333" }}>{item}</h3>
              <p style={{ color: "#666", fontSize: "14px" }}>
                Equipped with modern technology and expert staff to ensure the best healthcare experience.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PATIENT INFORMATION */}
      <section style={{ padding: "60px 20px", overflow: "hidden" }}>
        <h2 style={title}>Patient Information</h2>

        <motion.div 
          style={{...card, maxWidth: "800px", margin: "0 auto"}}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p style={{ lineHeight: "1.6", color: "#555" }}>
            At <strong>Dev Annant Hospital</strong>, we focus on providing patient-centered care. Our team ensures comfort, safety, and personalized treatment for every patient.
          </p>

          <ul style={{ marginTop: "15px", color: "#555", lineHeight: "1.8", paddingLeft: "20px" }}>
            <li>Easy registration process</li>
            <li>Qualified doctors and staff</li>
            <li>Affordable treatment</li>
            <li>Clean and safe environment</li>
          </ul>
        </motion.div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "60px 20px", background: "#f9fbff", overflow: "hidden" }}>
        <h2 style={title}>Frequently Asked Questions</h2>

        <motion.div 
          style={{...card, maxWidth: "800px", margin: "0 auto"}}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#0d6efd", marginBottom: "5px" }}>How can I book an appointment?</h3>
            <p style={{ color: "#555" }}>You can book online or call our hospital directly.</p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#0d6efd", marginBottom: "5px" }}>Do you provide emergency services?</h3>
            <p style={{ color: "#555" }}>Yes, we are available 24/7 for emergency care.</p>
          </div>

          <div>
            <h3 style={{ color: "#0d6efd", marginBottom: "5px" }}>Are your doctors experienced?</h3>
            <p style={{ color: "#555" }}>All our doctors are highly qualified with years of experience.</p>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section style={{
        background: "#0d6efd",
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
          <h2 style={{ marginBottom: "10px" }}>Need Medical Help?</h2>
          <p style={{ marginBottom: "20px" }}>Contact us at <strong>098373 89977</strong> or book your appointment now</p>

          <a href="/appointment">
            <button style={btnLight}>Book Appointment</button>
          </a>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}

/* STYLES */

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
  gap: "20px",
  maxWidth: "1200px",
  margin: "0 auto"
};

const card = {
  background: "white",
  padding: "25px",
  borderRadius: "15px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  transition: "0.3s"
};

const title = {
  textAlign: "center",
  marginBottom: "40px",
  fontSize: "32px",
  color: "#0d6efd",
  fontWeight: "bold"
};

const btnLight = {
  padding: "14px 30px",
  background: "white",
  color: "#0d6efd",
  border: "none",
  borderRadius: "10px",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "0.3s"
};
