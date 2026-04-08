import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";

export default function Staff() {

  const staff = [
    { name: "Dr. Amit Sharma", role: "Senior Cardiologist" },
    { name: "Dr. Neha Verma", role: "Neurologist" },
    { name: "Rahul Singh", role: "Nursing Head" },
    { name: "Pooja Mehta", role: "Senior Nurse" },
    { name: "Ankit Kumar", role: "Receptionist" },
    { name: "Sonia Gupta", role: "Admin Manager" }
  ];

  const values = [
    "Patient First Approach",
    "Professional Ethics",
    "Advanced Healthcare",
    "Team Collaboration",
    "24/7 Support"
  ];

  return (
    <>
      <Head>
        <title>Our Staff - Dev Annant Hospital</title>
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
          <h1 style={{ fontSize: "38px" }}>Meet Our Dedicated Team</h1>
          <p>Experienced professionals committed to your care</p>
        </motion.div>
      </section>

      {/* STAFF CARDS */}
      <section style={{
        padding: "60px 20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        gap: "20px",
        overflow: "hidden"
      }}>
        {staff.map((member, i) => (
          <motion.div 
            key={i} 
            style={card}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
            whileHover={{ y: -5, boxShadow: "0 15px 35px rgba(0,0,0,0.1)" }}
          >
            <div style={{
              height: "150px",
              background: "#eaeaea",
              borderRadius: "10px",
              marginBottom: "15px"
            }}></div>

            <h3 style={{ marginBottom: "5px" }}>{member.name}</h3>
            <p style={{ color: "#0d6efd", fontWeight: "bold" }}>
              {member.role}
            </p>

            <p style={{ color: "#555", fontSize: "14px", marginTop: "10px" }}>
              Dedicated and experienced professional ensuring high quality service.
            </p>
          </motion.div>
        ))}
      </section>

      {/* CORE VALUES */}
      <section style={{
        padding: "60px 20px",
        background: "#f9fbff",
        overflow: "hidden"
      }}>
        <motion.h2 
          style={title}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Core Values
        </motion.h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          {values.map((val, i) => (
            <motion.div 
              key={i} 
              style={card}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            >
              <h3 style={{ marginBottom: "10px", color: "#333" }}>{val}</h3>
              <p style={{ color: "#666", fontSize: "14px" }}>
                We strongly believe in {val.toLowerCase()} to provide better healthcare services.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
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
          <h2 style={{ marginBottom: "10px" }}>Want to Join Our Team?</h2>
          <p style={{ marginBottom: "20px" }}>Contact us for career opportunities at <strong>098373 89977</strong></p>

          <a href="tel:09837389977">
            <button style={btnLight}>
              Contact Now
            </button>
          </a>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}

/* STYLES */

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
