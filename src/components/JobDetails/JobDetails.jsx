import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData();
  console.log(job);
  const {_id, employer, logo, jobTitle, postingDate, applicationDeadline, salaryRange, applicants, img, jobCategory, jobDescription} = job;

    console.log(_id, jobTitle);
    return (

<div className="relative flex w-full max-w-[48rem] flex-row mx-auto my-10 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
    <img
      src={img}
      alt="image"
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6">
    {/* <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
      startups
    </h6> */}
    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {'Post: '+jobTitle}
    </h4>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      {jobDescription}
    </p>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      {'Salary range: '+ salaryRange}
    </p>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
    {'Total applications: '+ applicants}
    </p>
    <img className='w-12 h-12 rounded-full right-10 absolute' src={logo} alt="" />
    
    <button className="inline-block">
    <a  target="_blank"
	className="group relative overflow-hidden bg-blue-600 focus:ring-4 focus:ring-blue-300 inline-flex items-center px-7 py-2.5 rounded-lg text-white justify-center">
	<span className="z-40">Apply</span>
	<svg className="z-40 ml-2 -mr-1 w-3 h-3 transition-all duration-300 group-hover:translate-x-1" fill="currentColor"
		viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		<path fillRule="evenodd"
			d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
			clipRule="evenodd"></path>
	</svg>
	<div
		className="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-100 bg-white/30 group-hover:translate-x-[50%] z-20 duration-1000">
	</div>
</a>
    </button>
  </div>
</div>
    );
};

export default JobDetails;