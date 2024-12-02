import JobCard from "./JobCard";

const JobList = ({ jobs, filters }) => {
  const filteredJobs = jobs.filter((job) => {
    const matchesRemoteOption =
      !filters.remoteOption || job.remote.includes(filters.remoteOption);
    const matchesSalary =
      job.salary >= filters.minSalary && job.salary <= filters.maxSalary;
    return matchesRemoteOption && matchesSalary;
  });

  return (
    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
