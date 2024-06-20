const JobList = () => {
  return (
    <>
      <div>
        <input type="text" placeholder="job post title" className="border-2" />
        <div>
          <label>Introduction</label>

          <textarea
            className="border-2"
            placeholder="The ideal candidate is someone"
          />
        </div>
        <div>
          <label>Roles & Responsibilities</label>

          <textarea
            className="border-2"
            placeholder="Your job role will be include"
          />
        </div>
        <div>
          <label>Experience Range(yrs) </label>
          <select className="border-2">
            <option>Min</option>
            <option>0</option>
            <option>1</option>
            <option>2</option>
          </select>
          -
          <select className="border-2">
            <option>Max</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <inout type="text" placeholder="Qualifications" />
        <textarea className="border-2" placeholder="Concluding Statement" />
        <inout type="text" placeholder="Company" />
        <inout type="text" placeholder="job location " />
        <select className="border-2">
          <option>Full Time</option>
          <option> part Time</option>
          <option>Contract</option>
          <option>Internship</option>
        </select>
        <select className="border-2">
          <option>Labels</option>
          <option>Is Remote </option>
          <option>5 day </option>
        </select>
      </div>
    </>
  );
};

export default JobList;
