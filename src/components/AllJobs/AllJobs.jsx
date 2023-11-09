import React, { useEffect, useState } from 'react';
import AllJobsRow from './AllJobsRow';
import Search from '../Home/Search';
import Spinner from '../Spinner/Spinner';
import { Input } from "@material-tailwind/react";

const AllJobs = () => {
 
  const [allJobs, setAllJobs] = useState([]);
  useEffect(() => {
    fetch('https://career-hub-server-steel.vercel.app/jobs')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setAllJobs(data)
        setLoadJob(data)
      })
  }, [])
  console.log(allJobs.length);

  // const [searchResult, setSearchResult] = useState(null);
  const [loadJob, setLoadJob] = useState(null)
  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const search = form.search.value;

    // setSearchResult(search);
    // console.log(search, searchResult);
    
    const searchByTitle = allJobs.filter(result=>result.jobTitle == search);
    console.log(searchByTitle);
    setLoadJob(searchByTitle)

    console.log('loadJob: ', loadJob, 'allJobs :', allJobs );

   


  }



  return (

    allJobs.length > 0 ?
      <div>
        <div className='mt-2 ml-2'>
          {/* search */}
          <div>
            <div className="w-60 relative">
              <form onSubmit={handleSearch}>
                <Input name='search' label="Search by title"/>
                  <button className='absolute left-52 -mt-[29px]'><svg xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg></button>
              </form>
            </div>
          </div>
          {/* search */}
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
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
                loadJob.map((allJob, idx) => <AllJobsRow key={idx} allJob={allJob}></AllJobsRow>)
              }

            </tbody>


          </table>
        </div>
      </div>
      :
      <Spinner></Spinner>


  );
};

export default AllJobs;