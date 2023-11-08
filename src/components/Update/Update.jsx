import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import Swal from 'sweetalert2';

const Update = () => {
    
    const job = useLoaderData();
    const {_id, employer, logo, jobTitle, postingDate, applicationDeadline, salaryRange, applicants, img, jobCategory, jobDescription } = job;
    console.log(salaryRange);
    const min = salaryRange.split(" ")[0].split("$")[1]
    const max = salaryRange.split(" ")[2].split("$")[1]
    console.log(min);
    console.log(max);

    // 
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);

    const {user} = useContext(AuthContext);
    const email = user?.email;

    const handleUpdate = (e) =>{
        e.preventDefault();
        const form = e.target;
        const img = form.photo.value;
        const logo = form.logo.value;
        const jobTitle = form.title.value;
        // const employer = form.name.value;
        const jobCategory = form.category.value;
        const salaryMin = form.salaryMin.value;
        const salaryMax = form.salaryMax.value;
        const applicants = form.applicants.value;

        const salaryRange = `$${salaryMin} - $${salaryMax}`
        const jobDescription = form.description.value;

        const dateS = {
            month: ""
        }

        const start = startDate.toString();
        console.log(start.split(" "));
        const dayNumber = start.split(" ")[1];
        if (dayNumber.includes("Jan")) {
            dateS.month = '01'
            console.log(dateS);
        }
        if (dayNumber.includes("Feb")) {
            dateS.month = '02'
            console.log(dateS);
        }
        if (dayNumber.includes("Mar")) {
            dateS.month = '03'
            console.log(dateS);
        }
        if (dayNumber.includes("Apr")) {
            dateS.month = '04'
            console.log(dateS);
        }
        if (dayNumber.includes("May")) {
            dateS.month = '05'
            console.log(dateS);
        }
        if (dayNumber.includes("Jun")) {
            dateS.month = '06'
            console.log(dateS);
        }
        if (dayNumber.includes("Jul")) {
            dateS.month = '07'
            console.log(dateS);
        }
        if (dayNumber.includes("Aug")) {
            dateS.month = '08'
            console.log(dateS);
        }
        if (dayNumber.includes("Sep")) {
            dateS.month = '09'
            console.log(dateS);
        }
        if (dayNumber.includes("Oct")) {
            dateS.month = '10'
            console.log(dateS);
        }
        if (dayNumber.includes("Nov")) {
            dateS.month = '11'
            console.log(dateS);
        }
        if (dayNumber.includes("Dec")) {
            dateS.month = '12'
            console.log(dateS);
        }

        const day = start.split(" ")[2]
        const year = start.split(" ")[3]
        console.log(year);
        const finalDateS = year + "-" + dateS.month.toString() + "-" + day;
        console.log(finalDateS);

        const dateE = {
            month: ""
        }

        const end = endDate.toString();

        const dayNumberE = end.split(" ")[1];
        if (dayNumberE.includes("Jan")) {
            dateE.month = '01'
            console.log(dateE);
        }
        if (dayNumberE.includes("Feb")) {
            dateE.month = '02'
            console.log(dateE);
        }
        if (dayNumberE.includes("Mar")) {
            dateE.month = '03'
            console.log(dateE);
        }
        if (dayNumberE.includes("Apr")) {
            dateE.month = '04'
            console.log(dateE);
        }
        if (dayNumberE.includes("May")) {
            dateE.month = '05'
            console.log(dateE);
        }
        if (dayNumberE.includes("Jun")) {
            dateE.month = '06'
            console.log(dateE);
        }
        if (dayNumberE.includes("Jul")) {
            dateE.month = '07'
            console.log(dateE);
        }
        if (dayNumberE.includes("Aug")) {
            dateE.month = '08'
            console.log(dateE);
        }
        if (dayNumberE.includes("Sep")) {
            dateE.month = '09'
            console.log(dateE);
        }
        if (dayNumberE.includes("Oct")) {
            dateE.month = '10'
            console.log(dateE);
        }
        if (dayNumberE.includes("Nov")) {
            dateE.month = '11'
            console.log(dateE);
        }
        if (dayNumberE.includes("Dec")) {
            dateE.month = '12'
            console.log(dateE);
        }

        const dayE = end.split(" ")[2]
        const yearE = end.split(" ")[3]
        console.log(yearE);
        const finalDateE = yearE + "-" + dateE.month.toString() + "-" + dayE;
        console.log(finalDateE);

        const updatedJob = {_id, postingDate: finalDateS, applicationDeadline: finalDateE, img, logo, jobTitle, jobCategory, jobDescription, salaryRange, applicants }
        console.log(updatedJob);

        fetch(`http://localhost:5000/jobs/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedJob)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Update Successful!',
                  })
            }
        })
        
    }

    return (
        <div>
        <div>
            <section style={{ backgroundImage: 'url("https://i.ibb.co/PZ31VZQ/7041.jpg")' }} className="bg-cover">
                <div className="w-full">

                    <div className="flex items-center justify-center px-4 py-10 bg-transparent  backdrop-blur-sm sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                        <div className="w-8/12">
                            <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-5xl">Update Form</h2>

                            <form onSubmit={handleUpdate} method="POST" className="mt-8">
                                <div className="space-y-5">

                                    {/*  */}
                                    <div className="sm:col-span-3">
                                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-800">Category
                                        </label>
                                        <div className="mt-2">
                                            <select id="country" name="category" defaultValue={jobCategory} autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                                <option>On Site</option>
                                                <option>Remote</option>
                                                <option>Hybrid</option>
                                                <option>Part Time</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* <div className="sm:col-span-3">
                                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-800">User Name
                                        </label>
                                        <div className="mt-2">
                                            <select id="country" name="name" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                                <option>{user?.displayName}</option>
                                            </select>
                                        </div>
                                    </div> */}

                                    {/*  */}
                                    <div>
                                        <label className="text-base font-medium text-gray-800"> Job Title</label>
                                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">

                                            <input
                                                required
                                                defaultValue={jobTitle}
                                                type="text"
                                                name="title"
                                                placeholder="Enter job title"
                                                className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-base font-medium text-gray-800"> Banner Photo </label>
                                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">

                                            <input
                                                required
                                                defaultValue={img}
                                                type="text"
                                                name="photo"
                                                placeholder="Enter job banner photo url"
                                                className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-base font-medium text-gray-800"> Logo </label>
                                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">

                                            <input
                                                required
                                                defaultValue={logo}
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
                                        <label className="text-base font-medium text-gray-800"> Salary Range </label>
                                        {/* min */}
                                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">

                                            <input
                                                required
                                                defaultValue={+min}
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
                                                defaultValue={+max}
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
                                        <label className="text-base font-medium text-gray-800"> Description </label>
                                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">

                                            <input
                                                required
                                                defaultValue={jobDescription}
                                                type="text"
                                                name="description"
                                                placeholder="Enter job description"
                                                className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-base font-medium text-gray-800"> Applicants </label>
                                        <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">

                                            <input
                                            defaultValue={applicants}
                                                required
                                                type="number"
                                                name="applicants"
                                                placeholder="Enter job applicant number"
                                                className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                min="0"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-base font-medium text-gray-800"> Posting Date </label>
                                        <div className="mt-2.5 w-56 rounded bg-white outline relative text-gray-400 focus-within:text-gray-600">

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
                                        <label className="text-base font-medium text-gray-800"> Deadline </label>
                                        <div className="mt-2.5 w-56 rounded bg-white outline relative text-gray-400 focus-within:text-gray-600">

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
                                            className="relative outline inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-gray-900 focus:text-black focus:outline-none"
                                        >
                                            Update
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

export default Update;