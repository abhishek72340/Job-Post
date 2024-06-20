import { useState } from "react";
import { jobsData } from "./../constants/constants";
import toast from "react-hot-toast";
const useList = () => {
  const [jobs, setJobs] = useState(jobsData);

  // ***handle input field***
  const handleInputChange = (id, field, value) => {
    setJobs(
      jobs.map((job) =>
        job.id === id ? { ...job, [field]: { ...job[field], value } } : job
      )
    );
  };

  // **handle check box***
  const handleCheckboxChange = (id, field) => {
    setJobs(
      jobs.map((job) =>
        job.id === id
          ? { ...job, [field]: { ...job[field], checked: !job[field].checked } }
          : job
      )
    );
  };

  // ***add job-list function***
  const addJob = () => {
    const newJob = {
      id: Date.now(),
      title: { value: "", checked: false },
      introduction: { value: "", checked: false },
      roles: { value: "", checked: false },
      minExperience: { value: "", checked: false },
      maxExperience: { value: "", checked: false },
      qualifications: { value: "", checked: false },
      salary: { value: "", checked: false },
      concludingStatement: { value: "", checked: false },
      company: { value: "", checked: false },
      jobLocation: { value: "", checked: false },
      jobTypes: { value: "", checked: false },
      labels: { value: [], checked: false },
    };
    setJobs([...jobs, newJob]);
    toast.success("new job-list added successfully");
  };

  // ***duplicate job-list function***
  const duplicateJob = (id) => {
    const jobToDuplicate = jobs.find((job) => job.id === id);
    setJobs([...jobs, { ...jobToDuplicate, id: Date.now() }]);
    toast.success("duplicate job-list added successfully");
  };

  // ***delete job-list function***
  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
    toast.success(" job-list deleted successfully");
  };

  return {
    jobs,
    handleInputChange,
    handleCheckboxChange,
    deleteJob,
    duplicateJob,
    addJob,
  };
};

export default useList;
