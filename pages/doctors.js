import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";

export default function Doctors() {

  const [search, setSearch] = useState("");

  const doctors = [
    { name: "Dr. Amit Sharma", spec: "Cardiologist", exp: "10 Years Experience" },
    { name: "Dr. Neha Verma", spec: "Neurologist", exp: "8 Years Experience" },
    { name: "Dr. Raj Singh", spec: "Orthopedic Specialist", exp: "12 Years Experience" },
    { name: "Dr. Pooja Mehta", spec: "Pediatrician", exp: "7 Years Experience" },
    { name: "Dr. Arjun Patel", spec: "Dentist", exp: "9 Years Experience" },
    { name: "Dr. Ravi Kumar", spec: "General Physician", exp: "15 Years Experience" }
  ];

  const filteredDoctors = doctors.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase()) ||
    doc.spec.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Our Doctors - Dev Annant Hospital</title>
      </Head>

      <Navbar />
      <Sidebar />

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
          <h1 style={{ fontSize: "38px" }}>Meet Our Expert Doctors</h1>
          <p>Highly qualified specialists for your care</p>
        </motion.div>
      </section>

      <section style={{
        padding: "40px 20px",
        textAlign: "center"
      }}>
        <motion.input
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          type="text"
          placeholder="Search doctor or specialty..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "12px",
            width: "300px",
            maxWidth: "90%",
            borderRadius: "10px",
            border: "1px solid #ccc",
            outline: "none"
          }}
        />
      </section>

      <section style={{
        padding: "20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        gap: "20px",
        overflow: "hidden"
      }}>
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doc, i) => (
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

              <h3>{doc.name}</h3>
              <p style={{ color: "#0d6efd", fontWeight: "bold" }}>
                {doc.spec}
              </p>
              <p>{doc.exp}</p>

              <a href="/appointment">
                <button style={btn}>
                  Book Appointment
                </button>
              </a>
            </motion.div>
          ))
        ) : (
          <p style={{ textAlign: "center", width: "100%" }}>
            No doctors found
          </p>
        )}
      </section>

      <section style={{
        background: "#0d6efd",
        color: "white",
        textAlign: "center",
        padding: "60px 20px",
        overflow: "hidden"
      }}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2>Need Help Choosing a Doctor?</h2>
          <p>Contact us for guidance at <strong>098373 89977</strong></p>
          <a href="/appointment">
            <button style={btnLight}>Book Appointment</button>
          </a>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}

const card = {
  background: "white",
  padding: "20px",
  borderRadius: "15px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  transition: "0.3s"
};

const btn = {
  marginTop: "10px",
  padding: "10px",
  width: "100%",
  background: "#0d6efd",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold"
};

const btnLight = {
  padding: "12px 25px",
  background: "white",
  color: "#0d6efd",
  borderRadius: "10px",
  border: "none",
  marginTop: "15px",
  fontWeight: "bold",
  cursor: "pointer"
};
