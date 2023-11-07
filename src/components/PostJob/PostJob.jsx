import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

// import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';

const PostJob = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const handlePostJob = e => {
        e.preventDefault();
        const form = e.target;
        const img = form.photo.value;
        const logo = form.logo.value;
        const jobTitle = form.title.value;
        const employer = form.name.value;
        const jobCategory = form.category.value;
        const salaryMin = form.salaryMin.value;
        const salaryMax = form.salaryMax.value;

        const salaryRange = `$${salaryMin} - $${salaryMax}`
        const jobDescription = form.description.value;
        // posting date
        // const postingDate = startDate;
        // const applicationDeadline = endDate;
        
        // deadline date
        // job applicant number
        const applicants = form.applicants.value;

        const dateS = {
            month: ""
        }
       
        const start = startDate.toString();
        console.log(start.split(" "));
        const dayNumber= start.split(" ")[1];
        if (dayNumber.includes("Jan")){
            dateS.month='01'
            console.log(dateS);
        }
        if (dayNumber.includes("Feb")){
            dateS.month='02'
            console.log(dateS);
        }
        if (dayNumber.includes("Mar")){
            dateS.month='03'
            console.log(dateS);
        }
        if (dayNumber.includes("Apr")){
            dateS.month='04'
            console.log(dateS);
        }
        if (dayNumber.includes("May")){
            dateS.month='05'
            console.log(dateS);
        }
        if (dayNumber.includes("Jun")){
            dateS.month='06'
            console.log(dateS);
        }
        if (dayNumber.includes("Jul")){
            dateS.month='07'
            console.log(dateS);
        }
        if (dayNumber.includes("Aug")){
            dateS.month='08'
            console.log(dateS);
        }
        if (dayNumber.includes("Sep")){
            dateS.month='09'
            console.log(dateS);
        }
        if (dayNumber.includes("Oct")){
            dateS.month='10'
            console.log(dateS);
        }
        if (dayNumber.includes("Nov")){
            dateS.month='11'
            console.log(dateS);
        }
        if (dayNumber.includes("Dec")){
            dateS.month='12'
            console.log(dateS);
        }

        const day = start.split(" ")[2]
        const year = start.split(" ")[3]
        console.log(year);
        const finalDateS= year+"-"+dateS.month.toString()+"-"+day;
        console.log(finalDateS);
        
        const dateE = {
            month: ""
        }
       
        const end = endDate.toString();
    
        const dayNumberE= end.split(" ")[1];
        if (dayNumberE.includes("Jan")){
            dateE.month='01'
            console.log(dateE);
        }
        if (dayNumberE.includes("Feb")){
            dateE.month='02'
            console.log(dateE);
        }
        if (dayNumberE.includes("Mar")){
            dateE.month='03'
            console.log(dateE);
        }
        if (dayNumberE.includes("Apr")){
            dateE.month='04'
            console.log(dateE);
        }
        if (dayNumberE.includes("May")){
            dateE.month='05'
            console.log(dateE);
        }
        if (dayNumberE.includes("Jun")){
            dateE.month='06'
            console.log(dateE);
        }
        if (dayNumberE.includes("Jul")){
            dateE.month='07'
            console.log(dateE);
        }
        if (dayNumberE.includes("Aug")){
            dateE.month='08'
            console.log(dateE);
        }
        if (dayNumberE.includes("Sep")){
            dateE.month='09'
            console.log(dateE);
        }
        if (dayNumberE.includes("Oct")){
            dateE.month='10'
            console.log(dateE);
        }
        if (dayNumberE.includes("Nov")){
            dateE.month='11'
            console.log(dateE);
        }
        if (dayNumberE.includes("Dec")){
            dateE.month='12'
            console.log(dateE);
        }

        const dayE = end.split(" ")[2]
        const yearE = end.split(" ")[3]
        console.log(yearE);
        const finalDateE= yearE+"-"+dateE.month.toString()+"-"+dayE;
        console.log(finalDateE);

        // console.log(date.month.toString());
        
        const newJob = { employer, email, postingDate:finalDateS, applicationDeadline:finalDateE, img, logo, jobTitle, jobCategory, jobDescription, salaryRange, applicants }
        console.log(newJob);
        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Product added successfully!',
                  })
                console.log(data);
            })
    }
    return (
        <div>
            <div>
                <section className="  bg-cover bg-black">
                    <div className="w-full">

                        <div className="flex items-center justify-center px-4 py-10 bg-transparent  backdrop-blur-sm sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                            <div className="w-8/12">
                                <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-5xl">Post Job</h2>

                                <form onSubmit={handlePostJob} method="POST" className="mt-8">
                                    <div className="space-y-5">

                                        {/*  */}
                                        <div className="sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-200">Category
                                            </label>
                                            <div className="mt-2">
                                                <select id="country" name="category" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                                    <option>On Site</option>
                                                    <option>Remote</option>
                                                    <option>Hybrid</option>
                                                    <option>Part Time</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-200">User Name
                                            </label>
                                            <div className="mt-2">
                                                <select id="country" name="name" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                                    <option>{user?.displayName}</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/*  */}
                                        <div>
                                            <label className="text-base font-medium text-gray-200"> Job Title</label>
                                            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">

                                                <input
                                                    required
                                                    type="text"
                                                    name="title"
                                                    placeholder="Enter job title"
                                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-base font-medium text-gray-200"> Banner Photo </label>
                                            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">

                                                <input
                                                    required    
                                                    type="text"
                                                    name="photo"
                                                    placeholder="Enter job banner photo url"
                                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-base font-medium text-gray-200"> Logo </label>
                                            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">

                                                <input
                                                    required    
                                                    type="text"
                                                    name="logo"
                                                    placeholder="Enter company logo photo url"
                                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                />
                                            </div>
                                        </div>
                                        <div>

                                            {/*  */}
                                        </div>
                                        <div>
                                            <label className="text-base font-medium text-gray-200"> Salary Range </label>
                                            {/* min */}
                                            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">

                                                <input
                                                    required
                                                    type="number"
                                                    name="salaryMin"
                                                    placeholder="Enter minimum salary amount"
                                                    min="0"
                                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                />
                                            </div>
                                            {/*  max*/}
                                            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">

                                                <input
                                                    required
                                                    type="number"
                                                    name="salaryMax"
                                                    placeholder="Enter maximum salary amount"
                                                    min="0"
                                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                />
                                            </div>
                                            {/*  */}
                                        </div>
                                        <div>
                                            <label className="text-base font-medium text-gray-200"> Description </label>
                                            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">

                                                <input
                                                    required
                                                    type="text"
                                                    name="description"
                                                    placeholder="Enter job description"
                                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-base font-medium text-gray-200"> Applicants </label>
                                            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">

                                                <input
                                                    required
                                                    type="number"
                                                    name="applicants"
                                                    placeholder="Enter job applicant number"
                                                    defaultValue="0"
                                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                    min="0"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-base font-medium text-gray-200"> Posting Date </label>
                                            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">

                                                <DatePicker
                                                    required
                                                    selected={startDate}
                                                    onChange={(date) => setStartDate(date.now())}
                                                    selectsStart
                                                    placeholderText="Click to select a posting date"
                                                    startDate={startDate}
                                                    endDate={endDate}
                                                    dateFormat="yyyy/MM/dd"
                                                />

                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-base font-medium text-gray-200"> Deadline </label>
                                            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">

                                                <DatePicker
                                                    required
                                                    selected={endDate}
                                                    onChange={(date) => setEndDate(date)}
                                                    selectsEnd
                                                    placeholderText="Click to select end date"
                                                    startDate={startDate}
                                                    endDate={endDate}
                                                    minDate={startDate}
                                                    dateFormat="yyyy/MM/dd"
                                                />

                                            </div>
                                        </div>

                                        <div>
                                            <button
                                                type="submit"
                                                className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-gray-900 focus:text-black focus:outline-none"
                                            >
                                                Post Job
                                            </button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default PostJob;