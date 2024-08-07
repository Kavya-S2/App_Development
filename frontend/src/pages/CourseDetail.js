// src/pages/CourseDetail.js
import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { EnrolledCoursesContext } from "./EnrolledCoursesContext";

const courseDetails = {
  1: {
    name: "Artificial Intelligence",
    description: "Learn the fundamentals of AI, machine learning, and data science with practical projects.",
    seats: 20,
    materials: [
      { type: "Video", title: "Introduction to AI", link: "#" },
      { type: "Document", title: "AI Basics", link: "#" },
      { type: "Quiz", title: "AI Fundamentals Quiz", link: "#" },
    ],
  },
  2: {
    name: "Cloud Computing",
    description: "Master cloud infrastructure and services.",
    seats: 15,
    materials: [
      { type: "Video", title: "Introduction to Cloud Computing", link: "#" },
      { type: "Document", title: "Cloud Basics", link: "#" },
      { type: "Quiz", title: "Cloud Fundamentals Quiz", link: "#" },
    ],
  },
  3: {
    name: "Web Development",
    description: "Build dynamic websites with modern technologies.",
    seats: 30,
    materials: [
      { type: "Video", title: "Introduction to Web Development", link: "#" },
      { type: "Document", title: "HTML & CSS Basics", link: "#" },
      { type: "Quiz", title: "Web Development Quiz", link: "#" },
    ],
  },
  4: {
    name: "Data Science",
    description: "Analyze and visualize data with advanced tools.",
    seats: 25,
    materials: [
      { type: "Video", title: "Introduction to Data Science", link: "#" },
      { type: "Document", title: "Data Analysis Techniques", link: "#" },
      { type: "Quiz", title: "Data Science Quiz", link: "#" },
    ],
  },
  5: {
    name: "Cyber Security",
    description: "Protect systems and networks from cyber threats.",
    seats: 18,
    materials: [
      { type: "Video", title: "Introduction to Cyber Security", link: "#" },
      { type: "Document", title: "Cyber Security Basics", link: "#" },
      { type: "Quiz", title: "Cyber Security Quiz", link: "#" },
    ],
  },
  6: {
    name: "Mobile App Development",
    description: "Create mobile applications for Android and iOS.",
    seats: 22,
    materials: [
      { type: "Video", title: "Introduction to Mobile App Development", link: "#" },
      { type: "Document", title: "Mobile App Basics", link: "#" },
      { type: "Quiz", title: "Mobile App Development Quiz", link: "#" },
    ],
  },
};

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { enrollCourse } = useContext(EnrolledCoursesContext);

  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Fetch course details from the hardcoded object
    setCourse(courseDetails[courseId]);
  }, [courseId]);

  const handleEnroll = () => {
    navigate("/payment", { state: { courseId } });
  };

  if (!course) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{course.name}</h1>
      <p>{course.description}</p>
      <p>Seats Available: {course.seats}</p>
      <h2>Materials</h2>
      <ul>
        {course.materials.map((material, index) => (
          <li key={index}>
            <a href={material.link}>{material.title}</a> ({material.type})
          </li>
        ))}
      </ul>
      <button className="btn btn-primary mt-3" onClick={handleEnroll}>
        Enroll Now
      </button>
    </div>
  );
};

export default CourseDetail;
