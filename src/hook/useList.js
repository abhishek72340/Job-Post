import { useState } from "react";
import { jobsData } from "./../constants/constants";
const useList = () => {
  const [jobs, setJobs] = useState(jobsData);
  const [selectedJob, setSelectedJob] = useState(null);

  // ***input field handle***
  const handleInputChange = (id, field, value) => {
    setJobs(
      jobs.map((job) => (job.id === id ? { ...job, [field]: value } : job))
    );
  };

  const handleCheckboxChange = (id) => {
    setJobs(
      jobs.map((job) =>
        job.id === id ? { ...job, checked: !job.checked } : job
      )
    );
  };

  // ***update/add job for preview***
  const addJob = () => {
    const updatedJobs = [
      ...jobs,
      {
        id: Date.now(),
        introduction: { value: "", checked: false },
        roles: "",
        minExperience: "",
        maxExperience: "",
        qualifications: "",
        salary: "",
        concludingStatement: "",
        company: "",
        jobLocation: "",
        jobTypes: "",
        labels: [],
        checked: false,
      },
    ];
    setJobs(updatedJobs);
  };

  // ***function for duplicate job list***
  const duplicateJob = (id) => {
    const jobToDuplicate = jobs.find((job) => job.id === id);
    setJobs([...jobs, { ...jobToDuplicate, id: Date.now() }]);
  };

  // ***function for delete job list***
  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const selectJob = (job) => {
    setSelectedJob(job);
  };

  return {
    jobs,
    handleInputChange,
    selectJob,
    deleteJob,
    duplicateJob,
    addJob,
    handleCheckboxChange,
    selectedJob,
  };
};

export default useList;
