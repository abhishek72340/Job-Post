export const jobsData = [
  {
    id: Date.now(),
    title: { value: "", checked: false },
    introduction: { value: "", checked: false },
    roles: { value: "", checked: false },
    minExperience: { value: null, checked: false },
    maxExperience: { value: null, checked: false },
    qualifications: { value: "", checked: false },
    salary: { value: "", checked: false },
    concludingStatement: { value: "", checked: false },
    company: { value: "", checked: false },
    jobLocation: { value: "", checked: false },
    jobTypes: { value: "", checked: false },
    labels: { value: [], checked: false },
    // checked: false,
  },
];

export const labelOptions = [
  { value: "Is remote", label: "Is Remote" },
  { value: "5 day week", label: "5 Day Week" },
];

export const jobTypesOptions = [
  { value: "full-time", label: "Full Time" },
  { value: "part-time", label: "Part Time" },
  { value: "contract", label: "Contract" },
  { value: "internship", label: "Internship" },
];
export const maxExperienceOptions = [
  { value: "", label: "Max" },
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
];
export const minExperienceOptions = [
  { value: "", label: "Min" },
  { value: 0, label: 0 },
  { value: 1, label: 1 },
  { value: 2, label: 2 },
];
