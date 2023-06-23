import React, { useState } from "react";
import Search from "./Search";
import Jobs from "./Jobs";

const Home = ({ allJobs }) => {
  const [allJobsData, setAllJobs] = useState(allJobs);
  const [filterJobs, setFilterJobs] = useState(allJobs);
//   console.log(filterJobs);
  return (
    <div>
      <nav className="bg-primary text-light p-3">
        <h4> It Jobs Portal</h4>
      </nav>
      <Search />
      {allJobsData && <Jobs jobs={filterJobs} />}
    </div>
  );
};

export default Home;
