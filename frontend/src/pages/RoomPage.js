import React from "react";
import { useNavigate } from "react-router-dom";
import { roomItems } from "../components/data/Data"; // Adjust the path if necessary

export default function Rooms() {
  const navigate = useNavigate();

  const handleEnroll = (courseName) => {
    // Navigate to the CourseDetail page with the course name in the URL
    navigate(`/course/${encodeURIComponent(courseName)}`, { state: { enrolled: true } });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {roomItems.map((course, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img src={course.img} className="card-img-top" alt={course.name} />
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text">{course.description}</p>
                <p className="card-text"><strong>Price:</strong> {course.price}</p>
                <p className="card-text"><strong>Instructor:</strong> {course.instructor}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEnroll(course.name)}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
