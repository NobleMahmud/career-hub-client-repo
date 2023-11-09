import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyJob from './MyJob';
import Swal from 'sweetalert2';

const MyJobs = () => {
    const [jobs, setJobs] = useState([]);
    const { user } = useContext(AuthContext);
    

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed){
        fetch( `https://career-hub-server-steel.vercel.app/jobs/${id}`, {
          method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.deletedCount>0){
            Swal.fire({
                title: "Deleted!",
                text: "The job has been removed.",
                icon: "success"
              })
          }
          const remaining = jobs.filter(job=>job._id !==id);
          setJobs(remaining)
        })
       }
      })
    }
    // const handleDelete = id => {
    //     const proceed = confirm ('are you sure?');
    //    if(proceed){
    //     fetch( `https://career-hub-server-steel.vercel.app/jobs/${id}`, {
    //       method: 'DELETE'
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    //       console.log(data);
    //       if(data.deletedCount>0){
    //         alert('delete successful')
    //       }
    //       const remaining = jobs.filter(job=>job._id !==id);
    //       setJobs(remaining)
    //     })
    //    }
    //   }

    const handleUpdate = id =>{
        console.log(id);
    }

    const email = user?.email;
    const url = `https://career-hub-server-steel.vercel.app/jobs?email=${email}`
    useEffect(() => {

        // axios.get(url, {withCredentials: true})
        // .then(res=>{
        //   setJobs(res.data);
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
            {jobs.length>0 ?   
            <div className = "overflow-x-auto">
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
            jobs.map((job, idx) => <MyJob key={idx} job={job} handleDelete={handleDelete} handleUpdate={handleUpdate}></MyJob>)
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