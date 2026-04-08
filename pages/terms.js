import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms & Conditions - Dev Annant Hospital</title>
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
          <h1 style={{ fontSize: "36px" }}>Terms & Conditions</h1>
          <p>Please read our terms carefully</p>
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

        <h2 style={heading}>1. Acceptance of Terms</h2>
        <p style={text}>
          By accessing and using the <strong>Dev Annant Hospital</strong> website, you agree to comply with these Terms & Conditions. If you do not agree, please do not use our website.
        </p>

        <h2 style={heading}>2. Medical Disclaimer</h2>
        <p style={text}>
          The information provided on this website is for general informational purposes only and should not be considered as medical advice. Always consult a qualified doctor for proper diagnosis and treatment.
        </p>

        <h2 style={heading}>3. Appointment Booking</h2>
        <p style={text}>
          Appointment requests submitted through this website are subject to confirmation. The hospital reserves the right to reschedule or cancel appointments when necessary.
        </p>

        <h2 style={heading}>4. User Responsibilities</h2>
        <ul style={list}>
          <li>Provide accurate and complete information</li>
          <li>Do not misuse the website</li>
          <li>Respect hospital staff and policies</li>
        </ul>

        <h2 style={heading}>5. Privacy Policy</h2>
        <p style={text}>
          Your use of this website is also governed by our Privacy Policy. Please review it to understand how we handle your data.
        </p>

        <h2 style={heading}>6. Limitation of Liability</h2>
        <p style={text}>
          <strong>Dev Annant Hospital</strong> is not responsible for any direct or indirect damages arising from the use of this website or services.
        </p>

        <h2 style={heading}>7. Changes to Terms</h2>
        <p style={text}>
          We may update these Terms & Conditions at any time without prior notice. Continued use of the website means you accept the updated terms.
        </p>

        <h2 style={heading}>8. Contact Information</h2>
        <p style={text}>
          For any queries regarding these Terms & Conditions, please contact <strong>Dev Annant Hospital</strong> at <strong>098373 89977</strong>.
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
  fontSize: "22px",
  fontWeight: "bold"
};

const text = {
  marginBottom: "15px",
  fontSize: "16px"
};

const list = {
  marginBottom: "15px",
  paddingLeft: "20px",
  fontSize: "16px",
  lineHeight: "2"
};
