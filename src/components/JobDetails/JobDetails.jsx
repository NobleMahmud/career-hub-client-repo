import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
  } from "@material-tailwind/react";
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const JobDetails = () => {
  
    const {user} = useContext(AuthContext);
    const job = useLoaderData();
  console.log(job);
  const {_id, employer, logo, jobTitle, postingDate, applicationDeadline, salaryRange, applicants, img, jobCategory, jobDescription} = job;

    console.log(_id, jobTitle);

    const now = Date.now();
    console.log(now);

    const deadline= new Date(applicationDeadline);
    if(now<deadline){
      console.log('now is greater, deadline ache');
    }
    if(now>deadline){
      console.log('deadline gone');
    }
    

    const handleApply = e =>{
        e.preventDefault();
        console.log('ok');
        const form = e.target;
        const name = form?.name?.value;
        const email = form?.email?.value;
        const resume = form?.resume?.value;
        const userInfo = {name, email, resume};
        console.log(userInfo);
        const apply ={
          application_id: _id,
          name:user?.displayName, 
          email:user?.email, 
          resume,
          jobTitle,
          jobCategory,
          jobDescription,
          logo,
          img,
          postingDate,
          applicationDeadline,
          salaryRange,
          applicants
        }

        fetch('https://career-hub-server-steel.vercel.app/applied',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(apply)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.insertedId){
        // alert('order confirmed')
      }
    })

    // 

    const updatedJob = {_id}
    console.log(updatedJob);
    fetch(`https://career-hub-server-steel.vercel.app/jobs/${_id}`,{
        method: 'PATCH',
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
                text: 'Apply Successful!',
              })
        }
    })


        handleOpen()
    }


    const [open, setOpen] = React.useState(false);
    const handleOpen = () =>{ 
        setOpen((cur) => !cur);
    }

    

    
    return (

<div className="relative flex w-full max-w-[48rem] flex-row mx-auto my-10 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
<div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                <img
                    src={img}
                    alt="image"
                    className="object-cover opacity-80 w-full h-full"
                />
                <img className='absolute w-20 h-20 rounded-full top-4' src={logo} alt="" />
            </div>
  <div className="p-6">
    {/* <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
      startups
    </h6> */}
    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {'Post: '+jobTitle}
    </h4>
    <p className="block mb-4 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      {'Posted By: '+employer}
    </p>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      {jobDescription}
    </p>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      {'Salary range: '+ salaryRange}
    </p>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      {'Posting Date: '+ postingDate}
    </p>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      {'Application Deadline: '+ applicationDeadline}
    </p>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
    {'Total applications: '+ applicants}
    </p>
    
    <button 
    disabled = {now>deadline}
    onClick={handleOpen} className="inline-block">
    <a  target="_blank"
	className="group relative overflow-hidden bg-blue-600 focus:ring-4 focus:ring-blue-300 inline-flex items-center px-7 py-2.5 rounded-lg text-white justify-center">
	<span className="z-40">Apply</span>
	<svg className="z-40 ml-2 -mr-1 w-3 h-3 transition-all duration-300 group-hover:translate-x-1" fill="currentColor"
		viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		<path fillRule="evenodd"
			d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
			clipRule="evenodd"></path>
	</svg>
	<div
		className="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-100 bg-white/30 group-hover:translate-x-[50%] z-20 duration-1000">
	</div>
</a>
    </button>
    <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        
        <Card className="mx-auto w-full max-w-[24rem]">
          <form onSubmit={handleApply}>
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Apply to job
            </Typography>
           
           {/* name */}
            <Typography className="-mb-2" variant="h6">
              User Name
            </Typography>
            <Input required name='name' label="Enter User Name" size="lg" type='text' defaultValue={user?.displayName}/>
            {/*  */}
            <Typography className="-mb-2" variant="h6">
              User Email
            </Typography>
            <Input required name='email' label="Enter User Email" size="lg" type='email' defaultValue={user?.email}/>
            {/*  */}
            <Typography className="-mb-2" variant="h6">
              Resume
            </Typography>
            <Input required name='resume' label="Enter Resume Link" size="lg" type='text'/>

            <Button 
            
            disabled={employer === user.displayName}
            variant="gradient" type='submit' fullWidth>
              Apply
            </Button>
          
          </CardBody>
            </form>
          {/* <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Apply
            </Button>
          </CardFooter> */}
        </Card>
        
      </Dialog>
  </div>
</div>
    );
};

export default JobDetails;