import React from 'react';

const Blog3 = () => {
    return (
        <div>
            <h3 className='text-2xl font-bold'>Code Explanation:</h3>
            <br />
            <br />
            <h3 className='text-xl'>Overall Structure</h3>
            <br />
            <br />
            <p className='text-md'>The website is built using React and Tailwind CSS. Firebase is used for authentication, and MongoDB is used for managing the backend data. The project has a well-defined folder structure to keep the code organized.</p>
            <br />
            <h3 className='text-xl'>User Authentication</h3>
            <br />
            <p className='text-md'>Users can log in or register to create an account. They can also sign in using Google. JWT (JSON Web Token) is implemented for secure authentication.</p>
            <br />
            <h3 className='text-xl'>Private Routes</h3>
            <br />
            <p className='text-md'>Certain routes, such as the job details page and the applied jobs section, are only accessible to logged-in users. If a user is not logged in, they are redirected to the login page.</p>
            <br />
            <h3 className='text-xl'>Homepage</h3>
            <br />
            <p className='text-md'>The homepage has a banner, a search bar, and a tabbed system that showcases all the jobs. Each tab corresponds to a different job category (on-site, remote, hybrid, part-time, all categories). Minimal information is displayed in each job card, including title, company, location, and job type.</p>
            <br />
            <h3 className='text-xl'>Job Details Page</h3>
            <br />
            <p className='text-md'>Clicking on the "View Details" button in a job card takes the user to the job details page. This page is a private route, accessible only to logged-in users. It displays detailed information about the job, including posting date, application deadline, description, and requirements.</p>
            <br />
            <h3 className='text-xl'>Applying for Jobs</h3>
            <br />
            <p className='text-md'>Logged-in users can apply for jobs that they are interested in. They cannot apply to their own posted jobs. When applying for a job, users must submit a resume link. The application is stored in MongoDB.</p>
            <br />
            <h3 className='text-xl'>Applied Jobs Section</h3>
            <br />
            <p className='text-md'>The applied jobs section shows the list of jobs that a user has applied for. This section is also a private route, accessible only to the logged-in user. Users can filter the applied jobs by job category.</p>
            <br />
            <h3 className='text-xl'>Posting a Job</h3>
            <br />
            <p className='text-md'>Logged-in users can post new jobs. They cannot apply to their own posted jobs. The posted jobs are stored in MongoDB.</p>
            <br />
            <h3 className='text-xl'>My Jobs Section</h3>
            <br />
            <p className='text-md'>The my jobs section shows the list of jobs that a user has posted. This section is also a private route, accessible only to the logged-in user. Users can delete or update their posted jobs from this section.</p>
            <br />
            <h3 className='text-xl'>All Jobs Section</h3>
            <br />
            <p className='text-md'>The all jobs section shows all the jobs posted by all users. This section is not a private route, and it is accessible to everyone. Users can search for jobs by title in this section.</p>
            <br />
            <h3 className='text-xl'>Applicant Number</h3>
            <br />
            <p className='text-md'>When a user applies for a job, the 'applicant number' for that job is incremented. This number is used to keep track of the number of applicants for each job.</p>
            <br />
            <h3 className='text-xl'>Blogs Section</h3>
            <br />
            <p className='text-md'>The blogs section shows a list of blog posts. This section is an open route, accessible to everyone.</p>
            <br />
            <h3 className='text-xl'>Auto-Detected Posting Date</h3>
            <br />
            <p className='text-md'>When a user posts a job, the current date is automatically detected and set as the posting date. This date cannot be changed using the react date picker.</p>
            <br />
            <h3 className='text-xl'>Application Confirmation Email</h3>
            <br />
            <p className='text-md'>When a user successfully applies for a job, a confirmation email is sent to their email address. The application summary is also automatically downloaded to their computer.</p>
            <br />
            <h3 className='text-xl'>Loading Spinner</h3>
            <br />
            <p className='text-md'>A loading spinner or similar approach is used to handle situations where data is loading for a page. This provides a better user experience by indicating that the page is still loading.</p>
            <br />
            <h3 className='text-xl'>JWT Implementation</h3>
            <br />
            <p className='text-md'>JWTs are implemented for secure authentication and authorization throughout the website.</p>
            <br />
            <h3 className='text-xl'>Folder Structure</h3>
            <br />
            <p className='text-md'>The project maintains a well-defined folder structure to organize the code, making it easier to maintain and scale the application.</p>
            <br />
            <h3 className='text-xl'>Error Handling</h3>
            <br />
            <p className='text-md'>An error page is implemented with a "Back to Home" button. This page provides a clear error message and helps users navigate back to the main page.</p>
            <br />
           
        </div>
    );
};

export default Blog3;