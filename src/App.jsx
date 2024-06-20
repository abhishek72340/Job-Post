import { RiDeleteBin5Line } from "react-icons/ri";
import { MdContentCopy } from "react-icons/md";
import Select from "react-select";
import JobPreview from "./components/JobPreview";
import { labelOptions } from "./constants/constants";
import { jobTypesOptions } from "./constants/constants";
import { maxExperienceOptions } from "./constants/constants";
import { minExperienceOptions } from "./constants/constants";
import useList from "./hook/useList";
const App = () => {
  const {
    jobs,
    handleInputChange,
    selectJob,
    deleteJob,
    duplicateJob,
    addJob,
    selectedJob,
    handleCheckboxChange,
  } = useList();

  // const introductionCheckedChange = () => {};
  return (
    <div className="flex p-4 gap-10">
      <div className="w-1/2 p-2 border-r border-gray-300">
        {jobs.map((job) => (
          <div key={job.id} className="mb-4 p-2 border border-gray-300 rounded">
            <div className="flex justify-between">
              <h3 className="font-bold text-lg"></h3>
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => duplicateJob(job.id)}
                  className="text-blue-500 mr-2 flex items-center gap-2"
                >
                  <MdContentCopy size={20} /> <p>Duplicate</p>
                </button>
                <button
                  onClick={() => deleteJob(job.id)}
                  className="text-red-500 flex items-center gap-2"
                >
                  <RiDeleteBin5Line size={20} />
                  <p>Delete</p>
                </button>
              </div>
            </div>
            <label className="flex gap-2">
              <input type="checkbox" />

              <input
                type="text"
                value={job.title}
                onChange={(e) =>
                  handleInputChange(job.id, "title", e.target.value)
                }
                placeholder="Job Post Title"
                className="block w-full p-2 my-2 border border-gray-300 rounded"
              />
            </label>
            <div>
              <div className="flex gap-2">
                <input type="checkbox" />

                <p className="underline">Introduction</p>
              </div>
              <textarea
                value={job.introduction.value}
                onChange={(e) =>
                  handleInputChange(job.id, "introduction", e.target.value)
                }
                placeholder="The ideal candidate is someone..."
                className="block w-full p-2 my-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <div className="flex gap-2">
                <input type="checkbox" />

                <p className="underline">Roles and Responsibilities</p>
              </div>
              <textarea
                value={job.roles}
                onChange={(e) =>
                  handleInputChange(job.id, "roles", e.target.value)
                }
                placeholder="Your job role will include"
                className="block w-full p-2 my-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <input type="checkbox" />

                <p> Experience Range (yrs)</p>
              </div>
              <select
                className="block w-md p-2 my-2 border border-gray-300 rounded"
                onChange={(e) =>
                  handleInputChange(job.id, "minExperience", e.target.value)
                }
              >
                {minExperienceOptions.map((option) => {
                  return (
                    <option value={option.value} key={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </select>
              <select
                className="block w-md p-2 my-2 border border-gray-300 rounded"
                onChange={(e) =>
                  handleInputChange(job.id, "maxExperience", e.target.value)
                }
              >
                {maxExperienceOptions.map((option) => {
                  return (
                    <option value={option.value} key={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />

              <input
                type="text"
                value={job.qualifications}
                onChange={(e) =>
                  handleInputChange(job.id, "qualifications", e.target.value)
                }
                placeholder="Qualifications"
                className="block w-full p-2 my-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />

              <input
                type="text"
                value={job.salary}
                onChange={(e) =>
                  handleInputChange(job.id, "salary", e.target.value)
                }
                placeholder="Salary Range"
                className="block w-full p-2 my-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <textarea
                value={job.concludingStatement}
                onChange={(e) =>
                  handleInputChange(
                    job.id,
                    "concludingStatement",
                    e.target.value
                  )
                }
                placeholder="concluding statement..."
                className="block w-full p-2 my-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />

              <input
                type="text"
                value={job.company}
                onChange={(e) =>
                  handleInputChange(job.id, "company", e.target.value)
                }
                placeholder="Company"
                className="block w-full p-2 my-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />

              <input
                type="text"
                value={job.jobLocation}
                onChange={(e) =>
                  handleInputChange(job.id, "jobLocation", e.target.value)
                }
                placeholder="Location"
                className="block w-full p-2 my-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <input type="checkbox" />

                <select
                  className="block w-md p-2  border border-gray-300 rounded"
                  onChange={(e) =>
                    handleInputChange(job.id, "jobTypes", e.target.value)
                  }
                >
                  {jobTypesOptions.map((option) => {
                    return (
                      <option value={option.value} key={option.value}>
                        {option.label}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex gap-2">
                <input type="checkbox" />

                <Select
                  isMulti
                  closeMenuOnSelect={false}
                  value={labelOptions.filter((option) =>
                    job.labels.includes(option.value)
                  )}
                  options={labelOptions}
                  onChange={(selectedOptions) =>
                    handleInputChange(
                      job.id,
                      "labels",
                      selectedOptions.map((option) => option.value)
                    )
                  }
                  placeholder="Labels"
                />
              </div>
            </div>

            <label className="block my-2">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(job.id)}
              />
              Show in preview
            </label>
            <button
              onClick={() => selectJob(job)}
              className="bg-green-500 text-white py-1 px-2 rounded"
            >
              Select
            </button>
          </div>
        ))}
        <button
          onClick={addJob}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add Job
        </button>
      </div>

      <JobPreview selectedJob={selectedJob} jobs={jobs} />
    </div>
  );
};

export default App;
