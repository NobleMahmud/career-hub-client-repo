import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const AllJobsRow = ({allJob}) => {
    const {_id, employer, jobTitle, postingDate, applicationDeadline, salaryRange, jobCategory, jobDescription} = allJob;
    const {user} = useContext(AuthContext);

    const navigate = useNavigate();


  const handleJob = ()=>{
    {
      user ? navigate(`/jobs/${_id}`)
      :
      Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question"
      });
      navigate(`/jobs/${_id}`)
    }
   
    
  }
    return (
        <tr>
        <th>
        {/* <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button> */}
        </th>
        {/* <td>
            <div className="avatar">
              <div className=" rounded-full w-12 h-12">
                <img src={bannerImageUrl} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
        </td> */}
        <td>
         {employer}
        </td>
        <td>{jobTitle}</td>
        <td>{postingDate}</td>
        <td>{applicationDeadline}</td>
        <td>{salaryRange}</td>
        <th>
         {/* <Link to={`/jobs/${_id}`}><button>Details</button></Link> */}
         <button onClick={handleJob}>Details</button>
        </th>
      </tr>
    );
};

export default AllJobsRow;