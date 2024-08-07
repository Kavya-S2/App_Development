// src/pages/Courses.js
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EnrolledCoursesContext } from "./EnrolledCoursesContext";

const courses = [
  { id: 1, name: "Artificial Intelligence", description: "Dive into the world of AI and learn how to build intelligent systems that can understand, learn, and adapt. Perfect for aspiring data scientists and AI enthusiasts!", price: "Rs.4000", img: "assets/img/course-1.jpg" },
  { id: 2, name: "Cloud Computing", description: "Unlock the power of the cloud! Master the infrastructure and services that drive modern businesses. Gain hands-on experience with AWS, Azure, and Google Cloud.", price: "Rs.4500", img: "assets/img/course-2.jpg" },
  { id: 3, name: "Web Development", description: "Create stunning websites and dynamic web applications. From HTML and CSS to advanced JavaScript frameworks, this course covers everything you need to become a web development pro.", price: "Rs.6000", img: "assets/img/course-3.jpg" },
  { id: 4, name: "Data Science", description: "Transform raw data into actionable insights. Learn data analysis, visualization, and machine learning techniques to solve real-world problems and make data-driven decisions.", price: "Rs.5000", img: "assets/img/course-4.jpg" },
  { id: 5, name: "Cyber Security", description: "Protect digital assets and secure your organization's data. This course covers essential cybersecurity concepts, including threat analysis, encryption, and network security.", price: "Rs.5500", img: "assets/img/course-5.jpg" },
  { id: 6, name: "Machine Learning", description: "Discover the magic of machine learning. Understand algorithms and models to build predictive systems. Ideal for those who want to delve deeper into AI and data science.", price: "Rs.6000", img: "assets/img/course-6.jpg" },
];

export default function Courses() {
  const navigate = useNavigate();
  const { enrollCourse } = useContext(EnrolledCoursesContext);

  const handleEnroll = (course) => {
    enrollCourse(course);
    navigate(`/course/${course.id}`, { state: { enrolled: true } });
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <h1 className="mb-4">Our Courses</h1>
        <div className="row g-4">
          {courses.map((course) => (
            <div className="col-lg-4 col-md-6" key={course.id}>
              <div className="course-item shadow rounded overflow-hidden">
                <img className="img-fluid" src={course.img} alt={course.name} />
                <div className="p-4">
                  <h5 className="mb-0">{course.name}</h5>
                  <p className="mb-3">{course.description}</p>
                  <p className="text-body mb-3">{course.price}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEnroll(course)}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
