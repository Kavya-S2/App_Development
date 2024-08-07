// src/App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import {
  Home,
  Booking,
  AboutUs,
  Contact,
  PageNotFound,
  Room,
  Services,
  Team,
  Testimonial,
  UserManagement,
  CourseManagement,
  UserProgress,
  UserActivity,
  ReportDashboard,
  CourseDetail,
  Courses,
  DiscussionForum,
  StudentDashboard,
  MaterialPage,
  AdminSettings // Import AdminSettings component
} from "./pages/index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import Profile from "./pages/Profile"; // Import UserProfile component
import PaymentPage from "./pages/PaymentPage"; // Import PaymentPage component
import { EnrolledCoursesProvider } from "./pages/EnrolledCoursesContext";
import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/animate.min.css";
import "./App.css";

function AppContent() {
  const location = useLocation();
  const isSpecialRoute = location.pathname.startsWith('/admin') || location.pathname === '/login' || location.pathname === '/';

  return (
    <>
      {!isSpecialRoute && <Header />}
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/rooms" element={<Room />} />
        <Route path="/services" element={<Services />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:courseId" element={<CourseDetail />} />
        <Route path="/course/:courseId/materials" element={<MaterialPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/courses" element={<CourseManagement />} />
        <Route path="/admin/progress" element={<UserProgress />} />
        <Route path="/admin/activity" element={<UserActivity />} />
        <Route path="/admin/reports" element={<ReportDashboard />} />
        <Route path="/admin/settings" element={<AdminSettings />} /> {/* Add AdminSettings route */}
        <Route path="/forum" element={<DiscussionForum />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/profile" element={<Profile />} /> {/* Add UserProfile route */}
        <Route path="/payment" element={<PaymentPage />} /> {/* Add PaymentPage route */}
      </Routes>
      {!isSpecialRoute && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <EnrolledCoursesProvider>
      <Router>
        <AppContent />
      </Router>
    </EnrolledCoursesProvider>
  );
}
