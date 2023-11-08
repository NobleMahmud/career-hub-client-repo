import React from 'react';
import Swal from 'sweetalert2';

const AppliedJob = ({job}) => {
    const {_id, jobTitle, jobCategory, jobDescription,postingDate, applicationDeadline, salaryRange, applicants, img, logo} = job;


   
    return (
        <div className="relative flex w-full max-w-[48rem] flex-row mx-auto my-10 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                <img
                    src={img}
                    alt="image"
                    className="object-cover opacity-80 w-full h-full"
                />
                <img className='absolute w-16 h-16 rounded-full top-4' src={logo} alt="" />
            </div>
            <div className="p-6">
                {/* <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
      startups
    </h6> */}
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {'Post: ' + jobTitle}
                </h4>
                <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                    {jobDescription}
                </p>
                <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                    {'Salary range: ' + salaryRange}
                </p>
                <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                    {'Total applications: ' + applicants}
                </p>

            </div>
        </div>

        
    );
};

export default AppliedJob;