import React from 'react';
import animated from '../../../public/animated5.gif'


const Home = () => {
    return (
        <div className=' w-full bg-cover flex items-center'>
            <img className='w-8/12' src={animated} alt="" />
            <div className='w-4/12 space-y-3'>
                <h3  className='lg:text-6xl md:text-3xl text-md font-bold text-blue-600'>Welcome to</h3>
                <h3 className='md:text-4xl text-xl font-bold'><span className='text-[#545454] text-md'>CAREER-</span>HUB </h3>
                <p className='font-semibold text-xs md:text-xl lg:text-2xl'>YOUR GATEWAY TO SUCCESS!</p>
                
            </div>
        </div>
    );
};

export default Home;