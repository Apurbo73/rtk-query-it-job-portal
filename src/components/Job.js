import React from "react";

const Job = ({ job }) => {
  const { title, type, salary, deadline, id } = job;

  return (
    <div>
      <div className="card m-2" style={{ width: "18rem" }}>
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">
            {title}
          </h5>
          <p className="card-text mb-2">
            Type: {type}
          </p>
          <p className="card-text mb-2">
            Salary: {salary}
          </p>
          <p className="card-text mb-5">
            Deadline: {deadline}
          </p>
          <a href="#" className="btn btn-success w-100">
            See more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Job;
