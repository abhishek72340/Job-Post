import PropTypes from "prop-types";
const JobPreview = ({ jobs }) => {
  return (
    <div className="w-full md:w-1/2">
      <h2 className="font-bold mb-4">Live Preview</h2>
      {jobs.map((job) => (
        <div
          key={job.id}
          className="p-4 border border-gray-300 rounded my-2 flex flex-col gap-5"
        >
          <div className="flex justify-between">
            {job.title.checked && (
              <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
                <h3 className="font-bold text-lg">{job.title.value}</h3>
                <div className="flex flex-wrap gap-2">
                  {job.labels.checked &&
                    job.labels.value.map((label, index) => (
                      <p
                        key={index}
                        className="bg-blue-300 rounded-full p-2 text-sm"
                      >
                        {label}
                      </p>
                    ))}
                </div>
              </div>
            )}
          </div>
          {job.introduction.checked && (
            <p className="break-words overflow-hidden">
              <strong>Introduction:</strong> {job.introduction.value}
            </p>
          )}
          {job.roles.checked && (
            <p className="break-words overflow-hidden">
              <strong>Roles and Responsibilities:</strong> {job.roles.value}
            </p>
          )}
          {job.minExperience.checked && (
            <div className="flex flex-wrap gap-1">
              <strong>Preferred Experience:</strong>
              <p>{job.minExperience.value}</p>
              {job.minExperience.value && job.maxExperience.value && <p>to</p>}
              <p>{job.maxExperience.value} yrs</p>
            </div>
          )}
          {job.qualifications.checked && (
            <p className="break-words overflow-hidden">
              <strong>Qualification:</strong> {job.qualifications.value}
            </p>
          )}
          {job.salary.checked && (
            <p>
              <strong>Salary:</strong> {job.salary.value}
            </p>
          )}
          {job.concludingStatement.checked && (
            <p className="break-words overflow-hidden">
              <strong>Concluding Statement:</strong>{" "}
              {job.concludingStatement.value}
            </p>
          )}
          {job.company.checked && (
            <p>
              <strong>Company:</strong> {job.company.value}
            </p>
          )}
          {job.jobLocation.checked && (
            <p>
              <strong>Location:</strong> {job.jobLocation.value}
            </p>
          )}
          {job.jobTypes.checked && (
            <p>
              <strong>Job Type:</strong> {job.jobTypes.value}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

JobPreview.propTypes = {
  jobs: PropTypes.array.isRequired,
};

export default JobPreview;
