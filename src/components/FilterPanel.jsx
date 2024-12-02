
const FilterPanel = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full md:w-1/4 bg-white shadow-md p-4 rounded-md">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>

      {/* Date Posted Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Date Posted:</label>
        <select
          name="datePosted"
          value={filters.datePosted}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">All</option>
          <option value="last-week">Last Week</option>
          <option value="new">New Jobs</option>
        </select>
      </div>

      {/* Remote Option Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Remote Option:</label>
        <select
          name="remoteOption"
          value={filters.remoteOption}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">All</option>
          <option value="partially-remote">Partially Remote</option>
          <option value="fully-remote">Fully Remote</option>
        </select>
      </div>

      {/* Salary Range Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Salary Range:</label>
        <input
          type="range"
          name="minSalary"
          min="10000"
          max="100000"
          value={filters.minSalary}
          onChange={handleChange}
          className="mt-1 w-full"
        />
        <p className="text-sm text-gray-600">{`€${filters.minSalary} - €${filters.maxSalary}`}</p>
      </div>
    </div>
  );
};

export default FilterPanel;
