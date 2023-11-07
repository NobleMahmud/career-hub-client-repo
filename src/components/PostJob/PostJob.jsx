import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const PostJob = () => {
    const {user} = useContext(AuthContext);
    const handlePostJob = e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const title = form.title.value;
        const userName = form.name.value;
        const category = form.category.value;
        const salaryMin = form.salaryMin.value;
        const salaryMax = form.salaryMax.value;

        const salary = `$${salaryMin}-$${salaryMax}`
        const description = form.description.value;
        // posting date
        // deadline date
        // job applicant number
        const applicants = form.applicants.value;
        

        const newProduct = { userName, photo, title, category, description, salary, applicants }
        console.log(newProduct);
        // fetch('https://brand-shop-server-kappa-hazel.vercel.app/PostJob', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newProduct)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         Swal.fire({
        //             icon: 'success',
        //             title: 'Success',
        //             text: 'Product added successfully!',
        //           })
        //         console.log(data);
        //     })
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
                                                    type="text"
                                                    name="photo"
                                                    placeholder="Enter job banner photo url"
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
                                                    type="number"
                                                    name="salaryMin"
                                                    placeholder="Enter minimum salary amount"
                                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                />
                                            </div>
                                            {/*  max*/}
                                            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">

                                                <input
                                                    type="number"
                                                    name="salaryMax"
                                                    placeholder="Enter maximum salary amount"
                                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                />
                                            </div>
                                            {/*  */}
                                        </div>
                                        <div>
                                            <label className="text-base font-medium text-gray-200"> Description </label>
                                            <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">

                                                <input
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
                                                    type="number"
                                                    name="applicants"
                                                    placeholder="Enter job applicant number"
                                                    defaultValue="0"
                                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                                />
                                            </div>
                                        </div>
                                     
                                        <div>
                                            <button
                                                type="submit"
                                                className="relative inline-flex duration-500 items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-gray-900 focus:text-black focus:outline-none"
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