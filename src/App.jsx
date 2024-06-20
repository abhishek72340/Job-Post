import { RiDeleteBin5Line } from "react-icons/ri";
import { MdContentCopy } from "react-icons/md";
import Select from "react-select";
import useList from "./hook/useList";
import JobPreview from "./components/JobPreview";
import {
  labelOptions,
  jobTypesOptions,
  maxExperienceOptions,
  minExperienceOptions,
} from "./constants/constants";

const App = () => {
  // ***custom hook data***
  const {
    jobs,
    handleInputChange,
    handleCheckboxChange,
    deleteJob,
    duplicateJob,
    addJob,
  } = useList();

  return (
    // <>
    //   <h2 className="text-2xl font-bold text-center p-2 shadow-md">Job Post</h2>
    //   <div className="flex flex-col md:flex-row p-4 gap-10">
    //     <div className="w-1/2 p-6 md:p-2 border-r border-gray-300">
    //       {jobs.map((job) => (
    //         <div
    //           key={job.id}
    //           className="mb-4 p-2 border border-gray-300 rounded"
    //         >
    //           <div className="flex justify-between">
    //             <h3 className="font-bold text-lg"></h3>
    //             <div className="flex-col  gap-3 p-1 md:flex ">
    //               <button
    //                 onClick={() => duplicateJob(job.id)}
    //                 className=" flex gap-2 bg-blue-500 text-white  px-5 p-1 rounded"
    //               >
    //                 <MdContentCopy size={20} /> <p>Duplicate</p>
    //               </button>
    //               <button
    //                 onClick={() => deleteJob(job.id)}
    //                 className=" flex gap-2 bg-blue-500  px-5 p-1 rounded"
    //               >
    //                 <RiDeleteBin5Line size={20} color="white" />
    //                 <p className="text-white">Delete</p>
    //               </button>
    //             </div>
    //           </div>
    //           <div className="flex gap-2">
    //             <input
    //               type="checkbox"
    //               checked={job.title.checked}
    //               onChange={() => handleCheckboxChange(job.id, "title")}
    //             />
    //             <input
    //               type="text"
    //               value={job.title.value}
    //               onChange={(e) =>
    //                 handleInputChange(job.id, "title", e.target.value)
    //               }
    //               placeholder="Job Post Title"
    //               className="block w-full p-2 my-2 border border-gray-300 rounded"
    //             />
    //           </div>
    //           <div>
    //             <div className="flex gap-2">
    //               <input
    //                 type="checkbox"
    //                 checked={job.introduction.checked}
    //                 onChange={() =>
    //                   handleCheckboxChange(job.id, "introduction")
    //                 }
    //               />
    //               <p className="underline">Introduction</p>
    //             </div>
    //             <textarea
    //               value={job.introduction.value}
    //               onChange={(e) =>
    //                 handleInputChange(job.id, "introduction", e.target.value)
    //               }
    //               placeholder="The ideal candidate is someone..."
    //               className="block w-full p-2 my-2 border border-gray-300 rounded"
    //             />
    //           </div>
    //           <div>
    //             <div className="flex gap-2">
    //               <input
    //                 type="checkbox"
    //                 checked={job.roles.checked}
    //                 onChange={() => handleCheckboxChange(job.id, "roles")}
    //               />
    //               <p className="underline">Roles and Responsibilities</p>
    //             </div>
    //             <textarea
    //               value={job.roles.value}
    //               onChange={(e) =>
    //                 handleInputChange(job.id, "roles", e.target.value)
    //               }
    //               placeholder="Your job role will include"
    //               className="block w-full p-2 my-2 border border-gray-300 rounded"
    //             />
    //           </div>
    //           <div className="flex justify-between items-center ">
    //             <div className="flex gap-2 ">
    //               <input
    //                 type="checkbox"
    //                 checked={job.minExperience.checked}
    //                 onChange={() =>
    //                   handleCheckboxChange(job.id, "minExperience")
    //                 }
    //               />
    //               <p> Experience Range (yrs)</p>
    //             </div>
    //             <select
    //               className="block w-md p-2 my-2 border border-gray-300 rounded"
    //               value={job.minExperience.value}
    //               onChange={(e) =>
    //                 handleInputChange(job.id, "minExperience", e.target.value)
    //               }
    //             >
    //               {minExperienceOptions.map((option) => (
    //                 <option value={option.value} key={option.value}>
    //                   {option.label}
    //                 </option>
    //               ))}
    //             </select>
    //             <select
    //               className="block w-md p-2 my-2 border border-gray-300 rounded"
    //               value={job.maxExperience.value}
    //               onChange={(e) =>
    //                 handleInputChange(job.id, "maxExperience", e.target.value)
    //               }
    //             >
    //               {maxExperienceOptions.map((option) => (
    //                 <option value={option.value} key={option.value}>
    //                   {option.label}
    //                 </option>
    //               ))}
    //             </select>
    //           </div>
    //           <div className="flex gap-2">
    //             <input
    //               type="checkbox"
    //               checked={job.qualifications.checked}
    //               onChange={() =>
    //                 handleCheckboxChange(job.id, "qualifications")
    //               }
    //             />
    //             <input
    //               type="text"
    //               value={job.qualifications.value}
    //               onChange={(e) =>
    //                 handleInputChange(job.id, "qualifications", e.target.value)
    //               }
    //               placeholder="Qualifications"
    //               className="block w-full p-2 my-2 border border-gray-300 rounded"
    //             />
    //           </div>
    //           <div className="flex gap-2">
    //             <input
    //               type="checkbox"
    //               checked={job.salary.checked}
    //               onChange={() => handleCheckboxChange(job.id, "salary")}
    //             />
    //             <input
    //               type="text"
    //               value={job.salary.value}
    //               onChange={(e) =>
    //                 handleInputChange(job.id, "salary", e.target.value)
    //               }
    //               placeholder="Salary Range"
    //               className="block w-full p-2 my-2 border border-gray-300 rounded"
    //             />
    //           </div>
    //           <div className="flex gap-2">
    //             <input
    //               type="checkbox"
    //               checked={job.concludingStatement.checked}
    //               onChange={() =>
    //                 handleCheckboxChange(job.id, "concludingStatement")
    //               }
    //             />
    //             <textarea
    //               value={job.concludingStatement.value}
    //               onChange={(e) =>
    //                 handleInputChange(
    //                   job.id,
    //                   "concludingStatement",
    //                   e.target.value
    //                 )
    //               }
    //               placeholder="concluding statement..."
    //               className="block w-full p-2 my-2 border border-gray-300 rounded"
    //             />
    //           </div>
    //           <div className="flex gap-2">
    //             <input
    //               type="checkbox"
    //               checked={job.company.checked}
    //               onChange={() => handleCheckboxChange(job.id, "company")}
    //             />
    //             <input
    //               type="text"
    //               value={job.company.value}
    //               onChange={(e) =>
    //                 handleInputChange(job.id, "company", e.target.value)
    //               }
    //               placeholder="Company"
    //               className="block w-full p-2 my-2 border border-gray-300 rounded"
    //             />
    //           </div>
    //           <div className="flex gap-2">
    //             <input
    //               type="checkbox"
    //               checked={job.jobLocation.checked}
    //               onChange={() => handleCheckboxChange(job.id, "jobLocation")}
    //             />
    //             <input
    //               type="text"
    //               value={job.jobLocation.value}
    //               onChange={(e) =>
    //                 handleInputChange(job.id, "jobLocation", e.target.value)
    //               }
    //               placeholder="Location"
    //               className="block w-full p-2 my-2 border border-gray-300 rounded"
    //             />
    //           </div>
    //           <div className="flex justify-between">
    //             <div className="flex gap-2">
    //               <input
    //                 type="checkbox"
    //                 checked={job.jobTypes.checked}
    //                 onChange={() => handleCheckboxChange(job.id, "jobTypes")}
    //               />
    //               <select
    //                 className="block w-md p-2 border border-gray-300 rounded"
    //                 value={job.jobTypes.value}
    //                 onChange={(e) =>
    //                   handleInputChange(job.id, "jobTypes", e.target.value)
    //                 }
    //               >
    //                 {jobTypesOptions.map((option) => (
    //                   <option value={option.value} key={option.value}>
    //                     {option.label}
    //                   </option>
    //                 ))}
    //               </select>
    //             </div>
    //             <div className="flex gap-2">
    //               <input
    //                 type="checkbox"
    //                 checked={job.labels.checked}
    //                 onChange={() => handleCheckboxChange(job.id, "labels")}
    //               />
    //               <Select
    //                 isMulti
    //                 closeMenuOnSelect={false}
    //                 value={labelOptions.filter((option) =>
    //                   job.labels.value.includes(option.value)
    //                 )}
    //                 options={labelOptions}
    //                 onChange={(selectedOptions) =>
    //                   handleInputChange(
    //                     job.id,
    //                     "labels",
    //                     selectedOptions.map((option) => option.value)
    //                   )
    //                 }
    //                 placeholder="Labels"
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //       <button
    //         onClick={addJob}
    //         className="bg-blue-500 text-white py-2 px-4 rounded "
    //       >
    //         Add Job
    //       </button>
    //     </div>

    //     <JobPreview jobs={jobs} />
    //   </div>
    // </>
    <>
      <h2 className="text-2xl font-bold text-center p-2 shadow-md">Job Post</h2>
      <div className="flex flex-col md:flex-row p-4 gap-10">
        <div className="w-full md:w-1/2 p-6 md:p-2 border-r border-gray-300">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="mb-4 p-2 border border-gray-300 rounded"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg"></h3>
                <div className="flex gap-2 md:flex-col md:gap-3">
                  <button
                    onClick={() => duplicateJob(job.id)}
                    className="flex  items-center gap-2 bg-blue-500 text-white px-5 p-1 rounded"
                  >
                    <MdContentCopy size={20} />
                    <p>Duplicate</p>
                  </button>
                  <button
                    onClick={() => deleteJob(job.id)}
                    className="flex items-center gap-2 bg-blue-500 px-5 p-1 rounded"
                  >
                    <RiDeleteBin5Line size={20} color="white" />
                    <p className="text-white">Delete</p>
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={job.title.checked}
                    onChange={() => handleCheckboxChange(job.id, "title")}
                  />
                  <input
                    type="text"
                    value={job.title.value}
                    onChange={(e) =>
                      handleInputChange(job.id, "title", e.target.value)
                    }
                    placeholder="Job Post Title"
                    className="block w-full p-2 my-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={job.introduction.checked}
                    onChange={() =>
                      handleCheckboxChange(job.id, "introduction")
                    }
                  />
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
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={job.roles.checked}
                    onChange={() => handleCheckboxChange(job.id, "roles")}
                  />
                  <p className="underline">Roles and Responsibilities</p>
                </div>
                <textarea
                  value={job.roles.value}
                  onChange={(e) =>
                    handleInputChange(job.id, "roles", e.target.value)
                  }
                  placeholder="Your job role will include"
                  className="block w-full p-2 my-2 border border-gray-300 rounded"
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={job.minExperience.checked}
                      onChange={() =>
                        handleCheckboxChange(job.id, "minExperience")
                      }
                    />
                    <p>Experience Range (yrs)</p>
                  </div>
                  <select
                    className="block w-full md:w-auto p-2 my-2 border border-gray-300 rounded"
                    value={job.minExperience.value}
                    onChange={(e) =>
                      handleInputChange(job.id, "minExperience", e.target.value)
                    }
                  >
                    {minExperienceOptions.map((option) => (
                      <option value={option.value} key={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <select
                    className="block w-full md:w-auto p-2 my-2 border border-gray-300 rounded"
                    value={job.maxExperience.value}
                    onChange={(e) =>
                      handleInputChange(job.id, "maxExperience", e.target.value)
                    }
                  >
                    {maxExperienceOptions.map((option) => (
                      <option value={option.value} key={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={job.qualifications.checked}
                    onChange={() =>
                      handleCheckboxChange(job.id, "qualifications")
                    }
                  />
                  <input
                    type="text"
                    value={job.qualifications.value}
                    onChange={(e) =>
                      handleInputChange(
                        job.id,
                        "qualifications",
                        e.target.value
                      )
                    }
                    placeholder="Qualifications"
                    className="block w-full p-2 my-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={job.salary.checked}
                    onChange={() => handleCheckboxChange(job.id, "salary")}
                  />
                  <input
                    type="text"
                    value={job.salary.value}
                    onChange={(e) =>
                      handleInputChange(job.id, "salary", e.target.value)
                    }
                    placeholder="Salary Range"
                    className="block w-full p-2 my-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={job.concludingStatement.checked}
                    onChange={() =>
                      handleCheckboxChange(job.id, "concludingStatement")
                    }
                  />
                  <textarea
                    value={job.concludingStatement.value}
                    onChange={(e) =>
                      handleInputChange(
                        job.id,
                        "concludingStatement",
                        e.target.value
                      )
                    }
                    placeholder="Concluding statement..."
                    className="block w-full p-2 my-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={job.company.checked}
                    onChange={() => handleCheckboxChange(job.id, "company")}
                  />
                  <input
                    type="text"
                    value={job.company.value}
                    onChange={(e) =>
                      handleInputChange(job.id, "company", e.target.value)
                    }
                    placeholder="Company"
                    className="block w-full p-2 my-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={job.jobLocation.checked}
                    onChange={() => handleCheckboxChange(job.id, "jobLocation")}
                  />
                  <input
                    type="text"
                    value={job.jobLocation.value}
                    onChange={(e) =>
                      handleInputChange(job.id, "jobLocation", e.target.value)
                    }
                    placeholder="Location"
                    className="block w-full p-2 my-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={job.jobTypes.checked}
                      onChange={() => handleCheckboxChange(job.id, "jobTypes")}
                    />
                    <select
                      className="block w-full md:w-auto p-2 border border-gray-300 rounded"
                      value={job.jobTypes.value}
                      onChange={(e) =>
                        handleInputChange(job.id, "jobTypes", e.target.value)
                      }
                    >
                      {jobTypesOptions.map((option) => (
                        <option value={option.value} key={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={job.labels.checked}
                      onChange={() => handleCheckboxChange(job.id, "labels")}
                    />
                    <Select
                      isMulti
                      closeMenuOnSelect={false}
                      value={labelOptions.filter((option) =>
                        job.labels.value.includes(option.value)
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
              </div>
            </div>
          ))}
          <button
            onClick={addJob}
            className="bg-blue-500 text-white py-2 px-4 rounded w-full md:w-auto"
          >
            Add Job
          </button>
        </div>

        <JobPreview jobs={jobs} />
      </div>
    </>
  );
};

export default App;
