import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyJob from './MyJob';

const MyJobs = () => {
    const [jobs, setJobs] = useState([]);
    const { user } = useContext(AuthContext);

    const email = user?.email;
    const url = `http://localhost:5000/posted?email=${email}`
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
        
         <div>
            {jobs.length>0 ?   <div className = "overflow-x-auto">
            < table className = "table" >
        {/* head */ }
        <thead>
        <tr>
            <th>

            </th>
            <th>Title</th>
            <th>Category</th>
            <th>Description</th>
            <th>Salary Range</th>
            <th>Job Banner</th>
            <th>Company Logo</th>
            <th>Posting Date</th>
            <th>Deadline</th>
        </tr>
                </thead>
    <tbody>

        {
            jobs.map((job, idx) => <MyJob key={idx} job={job}></MyJob>)
        }

    </tbody>


            </table >
        </div >
        :
        <img className='w-[60%] mx-auto' src='https://i.ibb.co/n0ZwyVD/5928293-2953962.jpg'></img>}
         </div>
       
    );
};

export default MyJobs;