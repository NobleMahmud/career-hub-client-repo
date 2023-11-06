import React from 'react';

const OnSiteCard = ({ card }) => {
    const { employer, logo, jobTitle, postingDate, applicationDeadline, salaryRange, applicants, img, jobCategory, jobDescription } = card;
    console.log(card);

    return (

        <div>
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-48 md:w-48 md:rounded-none md:rounded-l-lg" src={img} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{jobTitle}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Posted on: {postingDate}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Deadline: {applicationDeadline}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Salary range: {salaryRange}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">No of applications: {applicants}</p>
                    <a href="#_" className="box-border ml-44 relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
                        <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                        <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                        <span className="relative z-20 flex items-center text-sm">
                            View Details
                        </span>
                    </a>
                    
                </div>
            </a>
        </div>

    );
};

export default OnSiteCard;