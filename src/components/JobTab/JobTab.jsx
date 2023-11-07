import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OnSiteCard from './OnSiteCard';
import RemoteCard from './RemoteCard';
import HybridCard from './HybridCard';
import PartTimeCard from './PartTimeCard';
import AllJobsCard from './AllJobsCard';

const JobTab = ({ jobs }) => {
    const onSite = jobs.filter(job => job.jobCategory === "On Site");
    const remote = jobs.filter(job => job.jobCategory === "Remote");
    const hybrid = jobs.filter(job => job.jobCategory === "Hybrid");
    const partTime = jobs.filter(job => job.jobCategory === "Part Time");
    console.log(remote);

    const handleDetails = id => {
        console.log(id);
    }
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>All Jobs</Tab>
                    <Tab>On Site</Tab>
                    <Tab>Remote</Tab>
                    <Tab>Hybrid</Tab>
                    <Tab>Part Time</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-14 mb-10'>
                        {
                            jobs ? jobs?.map((card, idx) => <AllJobsCard key={idx} card={card} handleDetails={handleDetails}></AllJobsCard>)
                                :
                                <div className='flex space-x-2 justify-center items-center bg-white h-screen dark:invert'>
                                    <span className='sr-only'>Loading...</span>
                                    <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                                    <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                                    <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
                                </div>
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-14 mb-10'>
                        {
                            onSite?.map((card, idx) => <OnSiteCard key={idx} card={card} handleDetails={handleDetails}></OnSiteCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-14 mb-10'>
                        {
                            remote?.map((card, idx) => <RemoteCard key={idx} card={card} handleDetails={handleDetails}></RemoteCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-14 mb-10'>
                        {
                            hybrid?.map((card, idx) => <HybridCard key={idx} card={card} handleDetails={handleDetails}></HybridCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-14 mb-10'>
                        {
                            partTime.map((card, idx) => <PartTimeCard key={idx} card={card} handleDetails={handleDetails}></PartTimeCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default JobTab;