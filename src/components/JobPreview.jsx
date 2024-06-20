import PropTypes from "prop-types";
const JobPreview = ({ selectedJob, jobs }) => {
  return (
    <div>
      {" "}
      <div>
        <h2 className="font-bold text-xl mb-4 ">Live Preview</h2>
        {selectedJob && (
          <div
            key={selectedJob.id}
            className="p-4 border border-gray-300 rounded my-2 flex flex-col gap-5"
          >
            <div className="flex gap-10">
              <h3 className="font-bold text-lg">{selectedJob.title}</h3>

              {selectedJob.labels.map((label, index) => (
                <p
                  key={index}
                  className="border-1-solid bg-blue-300 rounded-full p-2 flex justify-center items-center"
                >
                  {label}
                </p>
              ))}
            </div>
            <p className=" break-words overflow-hidden">
              <strong>Introduction:</strong> {selectedJob.introduction}
            </p>
            <p className=" break-words overflow-hidden">
              <strong>Roles and Responsibilities:</strong> {selectedJob.roles}
            </p>
            <div className="flex gap-1">
              <strong>Preferred Experience:</strong>
              <p>{selectedJob.minExperience} to</p>
              <p>{selectedJob.maxExperience}yrs</p>
            </div>
            <p className=" break-words overflow-hidden">
              <strong>Qualification: </strong>
              {selectedJob.qualifications}
            </p>
            <p>
              <strong>Salary: </strong>
              {selectedJob.salary}
            </p>
            <p className=" break-words overflow-hidden">
              <strong>Concluding Statement: </strong>
              {selectedJob.concludingStatement}
            </p>
            <p>
              <strong>Company:</strong>
              {selectedJob.company}
            </p>
            <p>
              <strong>Location: </strong>
              {selectedJob.jobLocation}
            </p>
            <p>
              <strong>Job type: </strong>
              {selectedJob.jobTypes}
            </p>
          </div>
        )}
        {jobs
          ?.filter((job) => job.checked)
          ?.map((job) => (
            <div
              key={job.id}
              className="p-4 border border-gray-300 rounded my-2 flex flex-col gap-5"
            >
              <div className="flex gap-10">
                <h3 className="font-bold text-lg">{job.title}</h3>

                {job.labels.map((label, index) => (
                  <p
                    key={index}
                    className="border-1-solid bg-blue-300 rounded-full p-2 flex justify-center items-center"
                  >
                    {label}
                  </p>
                ))}
              </div>
              <p className=" break-words overflow-hidden">
                <strong>Introduction:</strong> {job.introduction}
              </p>
              <p className=" break-words overflow-hidden">
                <strong>Roles and Responsibilities:</strong> {job.roles}
              </p>
              <div className="flex gap-1">
                <strong>Preferred Experience:</strong>
                <p>{job.minExperience} </p>to
                <p>{job.maxExperience}yrs</p>
              </div>
              <p className=" break-words overflow-hidden">
                <strong>Qualification: </strong>
                {job.qualifications}
              </p>
              <p>
                <strong>Salary: </strong>
                {job.salary}
              </p>
              <p className=" break-words overflow-hidden">
                <strong>Concluding Statement: </strong>
                {job.concludingStatement}
              </p>
              <p>
                <strong>Company:</strong>
                {job.company}
              </p>
              <p>
                <strong>Location: </strong>
                {job.jobLocation}
              </p>
              <p>
                <strong>Job Type: </strong>
                {job.jobTypes}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

// *************props-types define***********************
JobPreview.propTypes = {
  selectedJob: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    jobTypes: PropTypes.string,
    labels: PropTypes.arrayOf(PropTypes.string),
    introduction: PropTypes.string,
    roles: PropTypes.string,
    minExperience: PropTypes.number,
    maxExperience: PropTypes.number,
    qualifications: PropTypes.string,
    salary: PropTypes.string,
    concludingStatement: PropTypes.string,
    company: PropTypes.string,
    jobLocation: PropTypes.string,
  }),
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string,
      jobTypes: PropTypes.string,
      labels: PropTypes.arrayOf(PropTypes.string),
      introduction: PropTypes.string,
      roles: PropTypes.string,
      minExperience: PropTypes.number,
      maxExperience: PropTypes.number,
      qualifications: PropTypes.string,
      salary: PropTypes.string,
      concludingStatement: PropTypes.string,
      company: PropTypes.string,
      jobLocation: PropTypes.string,
      checked: PropTypes.bool,
    })
  ).isRequired,
};

export default JobPreview;
