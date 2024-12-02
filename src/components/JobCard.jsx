
const JobCard = ({ job }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md hover:shadow-lg transition-shadow duration-200">
      <h3 className="text-lg font-semibold">{job.title}</h3>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-500">{job.location}</p>
      <p className="text-indigo-600 font-medium">{`€${job.salary}`}</p>
      <p className="text-sm text-gray-400">{job.remote ? "Remote" : "On-site"}</p>
    </div>
  );
};

export default JobCard;
