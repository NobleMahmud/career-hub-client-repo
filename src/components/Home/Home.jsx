import React, { useEffect, useState } from 'react';
import animated from '../../../public/animated5.gif'
import Search from './Search';
import JobTab from '../JobTab/JobTab';

const Home = () => {
    const [ jobs, setJobs] = useState([]);
    
    useEffect(()=>{
        fetch('/jobs.json')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        setJobs(data)

    })
    },[])
    console.log(jobs.length);
    return (
        <div>
            <div className=' w-full bg-cover flex items-center'>
            <img className='w-8/12' src={animated} alt="" />
            <div className='w-4/12 space-y-3'>
                <h3  className='lg:text-6xl md:text-3xl text-md font-bold text-blue-600'>Welcome to</h3>
                <h3 className='md:text-4xl text-xl font-bold'><span className='text-[#545454] text-md'>CAREER-</span>HUB </h3>
                <p className='font-semibold text-xs md:text-xl lg:text-2xl'>YOUR GATEWAY TO SUCCESS!</p>
               
            </div>
        </div>
        <div className='container flex justify-center mt-8 mb-12'>
                <Search></Search> 
                </div>  
            <div className='mt-32'>
                <div className='flex flex-col lg:flex-row'>
                <h2 className='font-bold text-5xl lg:mt-28 justify-center text-center'><span className='text-blue-900'>Dive deep</span> into different types of <span className='text-[#545454]'>JOBS</span></h2>
                <img className='w-[300px] mx-auto lg:w-4/12 rounded-full justify-end items-end' src="https://i.ibb.co/jZVtFtD/animated8.gif" alt="" />
                </div>
            <JobTab jobs={jobs}></JobTab>
            </div>
        </div>
    );
};

export default Home;