import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import AppliedJob from './AppliedJob';

const AppliedJobs = () => {

    const [jobs, setJobs] = useState([]);
    const { user } = useContext(AuthContext);

    const email = user?.email;
    const url = `http://localhost:5000/applied?email=${email}`
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

            })
    }, [url])
    return (
       
        jobs.length>0 ?
        <div>
            {
                jobs.map((job, idx)=><AppliedJob key={idx} job={job}></AppliedJob>)
            }
        </div>
        :
         <img className='w-[60%] mx-auto' src='https://i.ibb.co/n0ZwyVD/5928293-2953962.jpg'></img>
    );
};

export default AppliedJobs;