import React from 'react';
import { Link } from 'react-router-dom';

const MyJob = ({job, handleDelete, handleUpdate}) => {
    const {_id, employer, jobTitle, img, logo, postingDate, applicationDeadline, salaryRange, jobCategory, jobDescription} = job;
   console.log(job);



    return (
        <tr>
            <th>
         {/* <Link to={`/jobs/${_id}`}><button>Details</button></Link> */}
         <div className='flex gap-4'>
         <button onClick={()=>handleDelete(_id)} className='btn'>Delete</button>
         <button onClick={()=>handleUpdate(_id)} className='btn'>update</button>
         </div>
        </th>
        
        {/* <td>
            <div className="avatar">
              <div className=" rounded-full w-12 h-12">
                <img src={bannerImageUrl} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
        </td> */}
        <td>{jobTitle}</td>
        <td>{jobCategory}</td>
        <td>{jobDescription.slice(0,20)+'...'}</td>
        <td>{salaryRange}</td>
        <td>{img.slice(0,20)+'...'}</td>
        <td>{logo.slice(0,20)+'...'}</td>
        <td>{postingDate}</td>
        <td>{applicationDeadline}</td>
        
      </tr>
    );
};

export default MyJob;