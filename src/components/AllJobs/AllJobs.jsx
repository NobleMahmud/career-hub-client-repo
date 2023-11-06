import React, { useEffect, useState } from 'react';
import AllJobsRow from './AllJobsRow';

const AllJobs = () => {
    const [allJobs, setAllJobs] = useState([]);
    useEffect(()=>{
        fetch('/jobs.json')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        setAllJobs(data)

    })
    },[])
    console.log(allJobs.length);
    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Posted By</th>
              <th>Title</th>
              <th>Posting Date</th>
              <th>Deadline</th>
              <th>Salary Range</th>
            </tr>
          </thead>
          <tbody>
  
            {
              allJobs.map((allJob, idx) => <AllJobsRow  key={idx} allJob={allJob}></AllJobsRow>)
            }
  
          </tbody>
  
  
        </table>
      </div>
    );
};

export default AllJobs;