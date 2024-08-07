import React from "react";

export default function Book() {
  return (
    <>
      <div
        className="container-fluid booking pb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="bg-white shadow" style={{ padding: "35px" }}>
            <div className="row g-2">
              <div className="col-md-10">
                <div className="row g-2">
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search by course name"
                    />
                  </div>
                  <div className="col-md-4">
                    <select className="form-select">
                      <option selected>Category</option>
                      <option value="AI">Artificial Intelligence</option>
                      <option value="Cloud">Cloud Computing</option>
                      <option value="WebDev">Web Development</option>
                      <option value="MobileDev">Mobile Development</option>
                      <option value="Cybersecurity">Cybersecurity</option>
                      <option value="VR">Virtual Reality</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <select className="form-select">
                      <option selected>Instructor</option>
                      <option value="JohnDoe">Dr. John Doe</option>
                      <option value="JaneSmith">Ms. Jane Smith</option>
                      <option value="AlanJohnson">Mr. Alan Johnson</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary w-100">Filter</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
