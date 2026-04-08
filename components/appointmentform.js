import { useState } from "react";
import { motion } from "framer-motion";

export default function AppointmentForm() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    department: "",
    message: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.date) {
      setError("Please fill all required fields");
      setSuccess("");
      return;
    }

    if (form.phone.length < 10) {
      setError("Enter valid phone number");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Appointment booked successfully!");

    setForm({
      name: "",
      phone: "",
      date: "",
      department: "",
      message: ""
    });
  };

  return (
    <div style={container}>
      {/* Animation wrapper */}
      <motion.div 
        style={formBox}
        initial={{ opacity: 0, x: -100 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <form onSubmit={handleSubmit}>

          <h2 style={heading}>Book Appointment</h2>
          <p style={subHeading}>Dev Annant Hospital | 📞 098373 89977</p>

          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={form.name}
            onChange={handleChange}
            style={input}
          />

          <input
            type="number"
            name="phone"
            placeholder="Phone Number *"
            value={form.phone}
            onChange={handleChange}
            style={input}
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            style={input}
          />

          <select
            name="department"
            value={form.department}
            onChange={handleChange}
            style={input}
          >
            <option value="">Select Department</option>
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Orthopedics</option>
            <option>Pediatrics</option>
          </select>

          <textarea
            name="message"
            placeholder="Message (optional)"
            value={form.message}
            onChange={handleChange}
            style={{ ...input, height: "80px" }}
          ></textarea>

          {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
          {success && <p style={{ color: "green", textAlign: "center" }}>{success}</p>}

          <button type="submit" style={btn}>
            Submit
          </button>

        </form>
      </motion.div>
    </div>
  );
}

/* STYLES */

const container = {
  display: "flex",
  justifyContent: "center",
  padding: "60px 20px",
  overflow: "hidden" // Animation bahar na jaye isliye add kiya
};

const formBox = {
  width: "400px",
  maxWidth: "100%",
  background: "white",
  padding: "25px",
  borderRadius: "15px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
};

const heading = {
  textAlign: "center",
  marginBottom: "5px" // Thoda space kam kiya subheading ke liye
};

const subHeading = {
  textAlign: "center",
  marginBottom: "20px",
  color: "#555",
  fontSize: "14px",
  fontWeight: "bold"
};

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  boxSizing: "border-box" // Width ko perfect rakhne ke liye add kiya
};

const btn = {
  width: "100%",
  padding: "12px",
  background: "#0d6efd",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold"
};
