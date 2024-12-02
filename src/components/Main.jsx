import { useState, useEffect } from "react";
import FilterPanel from "./FilterPanel";
import JobList from "./JobList";

const Main = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    datePosted: "",
    remoteOption: "",
    minSalary: 10000,
    maxSalary: 100000,
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:3000/proxy", {
          method: "GET",
          headers: {
            Authorization: `13331ac97b981071cfe248053b8d5b3daf1a3c5c716bb4964f8af90c3eca25ab`,
            "Content-Type": "application/json",
          },
        });
    
        if (!response.ok) {
          throw new Error(`Error fetching jobs: ${response.status} - ${response.statusText}`);
        }
    
        const data = await response.json();
        console.log("Jobs:", data);
        setJobs(data.results || []); // Adjust based on API response structure
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };
    
    
    fetchJobs();
  }, []);
  console.log(jobs)

  return (
    <div className="flex flex-col md:flex-row gap-4 p-6">

      <FilterPanel filters={filters} setFilters={setFilters} />
      <JobList jobs={jobs} filters={filters} />
    </div>
  );
};

export default Main;
