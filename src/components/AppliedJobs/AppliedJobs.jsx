import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import AppliedJob from './AppliedJob';

const AppliedJobs = () => {
    
    const [jobs, setJobs] = useState([]);
    const { user } = useContext(AuthContext);
    
    const email = user?.email;
    const url = `https://career-hub-server-steel.vercel.app/applied?email=${email}`
    useEffect(() => {

        // axios.get(url, {withCredentials: true})
        // .then(res=>{
        //   setBookings(res.data);
        // })

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setJobs(data);
                setLoadedJobs(data);

            })
        }, [url])
        
        
        const [loadedJobs, setLoadedJobs] = useState([]);
        
    const handleCategory = (e) => {
        e.preventDefault();
        const form = e.target;
        const category = form.category.value;
        console.log(category);

        const filterByCategory = jobs.filter(result => result.jobCategory == category);
       
        setLoadedJobs(filterByCategory);

        console.log(jobs.length);

        console.log(loadedJobs);

       
    }

    return (

        jobs.length>0 ?
        <div>
            <form onSubmit={handleCategory}>
                <div className="sm:col-span-3 ml-4 mt-4">
                    <label htmlFor="country" className="block text-sm font-bold leading-6 text-gray-800">Filter by category
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
                <button className='absolute left-[254px] -mt-[64px] border-b-0 inline-flex px-2 py-1 rounded bg-white hover:bg-gray-100 text-gray-800 font-semibold items-center gap-2 border-2'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" /></svg>Filter</button>

            </form>
            <div>
                {
                    loadedJobs.map((job, idx) => <AppliedJob key={idx} job={job}></AppliedJob>)
                }
            </div>  
        </div>
            :
            <div className='min-h-screen'>
                <img src="https://i.ibb.co/C1SLHPj/5928293-2953962.jpg" alt="" />
            </div>
    );
};

export default AppliedJobs;