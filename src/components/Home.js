import React, { useState } from "react";
import Search from "./Search";
import Jobs from "./Jobs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home = ({ allJobs }) => {
  const [allJobsData, setAllJobs] = useState(allJobs);
  const [filterJobs, setFilterJobs] = useState(allJobs);
  //   console.log(filterJobs);
  toast("Same category jobs are in same color");
  return (
    <div>
      <nav className="fixed-top bg-dark text-light p-2 mb-5">
        <h4> It Jobs Portal</h4>
        <ToastContainer />
      </nav>
      <Search />
      {allJobsData && <Jobs jobs={filterJobs} />}
    </div>
  );
};

export default Home;
