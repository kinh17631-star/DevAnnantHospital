import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Dev Annant Hospital</title>
      </Head>

      <Navbar />
      <Sidebar />

      {/* HEADER */}
      <section style={{
        background: "linear-gradient(135deg,#0d6efd,#4facfe)",
        color: "white",
        padding: "60px 20px",
        textAlign: "center",
        overflow: "hidden"
      }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 style={{ fontSize: "36px" }}>Privacy Policy</h1>
          <p>Your data safety is our priority</p>
        </motion.div>
      </section>

      {/* CONTENT */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{
          padding: "50px 20px",
          maxWidth: "900px",
          margin: "auto",
          lineHeight: "1.8",
          color: "#444"
        }}
      >

        <h2 style={heading}>1. Introduction</h2>
        <p style={text}>
          Dev Annant Hospital is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
        </p>

        <h2 style={heading}>2. Information We Collect</h2>
        <p style={text}>
          We may collect personal details such as your name, phone number, appointment details, and other information when you fill out forms on our website.
        </p>

        <h2 style={heading}>3. How We Use Your Information</h2>
        <p style={text}>
          The information collected is used to:
        </p>
        <ul style={list}>
          <li>Provide healthcare services</li>
          <li>Manage appointments</li>
          <li>Improve our website and services</li>
          <li>Contact you regarding your queries</li>
        </ul>

        <h2 style={heading}>4. Data Protection</h2>
        <p style={text}>
          We implement security measures to protect your personal data from unauthorized access or misuse.
        </p>

        <h2 style={heading}>5. Sharing of Information</h2>
        <p style={text}>
          We do not sell or share your personal information with third parties except when required by law or for medical services.
        </p>

        <h2 style={heading}>6. Cookies</h2>
        <p style={text}>
          Our website may use cookies to enhance user experience and analyze website traffic.
        </p>

        <h2 style={heading}>7. Your Rights</h2>
        <p style={text}>
          You have the right to request access, correction, or deletion of your personal data.
        </p>

        <h2 style={heading}>8. Contact Us</h2>
        <p style={text}>
          If you have any questions regarding this Privacy Policy, please contact Dev Annant Hospital at <strong>098373 89977</strong>.
        </p>

      </motion.section>

      <Footer />
    </>
  );
}

/* STYLES */

const heading = {
  color: "#0d6efd",
  marginTop: "30px",
  marginBottom: "10px",
  fontSize: "22px"
};

const text = {
  marginBottom: "15px",
  fontSize: "16px"
};

const list = {
  marginBottom: "15px",
  paddingLeft: "20px"
};
