import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { jsPDF } from "jspdf";
import "@fortawesome/fontawesome-free/css/all.css";
import "../css/PaymentPage.css"; // Ensure to have the updated styles

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { courseId, courseName, coursePrice } = location.state || {};

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Debit Card");
  const [couponCode, setCouponCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [saveMethod, setSaveMethod] = useState(false);

  const handlePayment = () => {
    if (cardNumber && expiryDate && cvv && cardholderName && email) {
      setLoading(true);
      // Simulate a payment delay
      setTimeout(() => {
        setLoading(false);
        alert("Payment Successful!");
        generatePDF();
        navigate(`/course/${courseId}`, { state: { enrolled: true } });
      }, 1000);
    } else {
      alert("Please fill in all the fields.");
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Payment Receipt", 20, 20);
    doc.text(`Course Name: ${courseName}`, 20, 30);
    doc.text(`Course Price: $${coursePrice}`, 20, 40);
    doc.text(`Payment Method: ${paymentMethod}`, 20, 50);
    doc.text(`Cardholder's Name: ${cardholderName}`, 20, 60);
    doc.text(`Email: ${email}`, 20, 70);
    doc.save("receipt.pdf");
  };

  const applyCoupon = () => {
    if (couponCode === "DIS10") {
      alert("Coupon applied! You get a 10% discount.");
      // Apply discount logic here
    } else {
      alert("Invalid coupon code.");
    }
  };

  return (
    <div className="payment-container">
      <div className="progress-bar">
        <div className="step completed">1</div>
        <div className="step completed">2</div>
        <div className="step completed">3</div>
        <div className="step completed">4</div>
        <div className="step active">5</div>
        <div className="step">6</div>
        <div className="step">7</div>
      </div>
      <h2>Payment Details</h2>
      <div className="payment-methods">
        <i
          className={`fas fa-credit-card ${paymentMethod === "Debit Card" ? "selected" : ""}`}
          onClick={() => setPaymentMethod("Debit Card")}
          title="Pay with Debit Card"
        ></i>
        <i
          className={`fab fa-google-pay ${paymentMethod === "Google Pay" ? "selected" : ""}`}
          onClick={() => setPaymentMethod("Google Pay")}
          title="Pay with Google Pay"
        ></i>
        <i
          className={`fas fa-mobile-alt ${paymentMethod === "Paytm" ? "selected" : ""}`}
          onClick={() => setPaymentMethod("Paytm")}
          title="Pay with Paytm"
        ></i>
      </div>
      <div className="payment-form">
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Card Number</label>
          <input
            type="text"
            className="form-control"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Expiry Date</label>
          <input
            type="text"
            className="form-control"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>CVV</label>
          <input
            type="text"
            className="form-control"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Cardholder's Name</label>
          <input
            type="text"
            className="form-control"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Coupon Code</label>
          <input
            type="text"
            className="form-control"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button type="button" className="coupon-button" onClick={applyCoupon}>
            Apply Coupon
          </button>
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            checked={saveMethod}
            onChange={(e) => setSaveMethod(e.target.checked)}
          />
          <label>Save this payment method for future use</label>
        </div>
        <button
          type="button"
          className="pay-button"
          onClick={handlePayment}
          disabled={loading}
        >
          {loading ? "Processing..." : `Pay Rs ${coursePrice || 5000.0}`}
        </button>
      </div>
      <div className="payment-summary">
        <h4>Payment Method</h4>
        <p>Your Selected Program: {courseName || "Artificial Intelligence course"}</p>
        <p>Your Selected Shift: Evening Shift</p>
        <p>Your Selected Shift: Rs {coursePrice || 5000.0}</p>
      </div>
    </div>
  );
};

export default PaymentPage;
