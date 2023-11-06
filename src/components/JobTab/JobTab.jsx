import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobTabCard from './OnSiteCard';
import OnSiteCard from './OnSiteCard';
import RemoteCard from './RemoteCard';
import Hybrid from './HybridCard';
import HybridCard from './HybridCard';
import PartTimeCard from './PartTimeCard';
import AllJobsCard from './AllJobsCard';

const JobTab = ({jobs}) => {
    const onSite = jobs.filter(job=>job.jobCategory==="On Site");
    const remote = jobs.filter(job=>job.jobCategory==="Remote");
    const hybrid = jobs.filter(job=>job.jobCategory==="Hybrid");
    const partTime = jobs.filter(job=>job.jobCategory==="Part Time");
    console.log(onSite);
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
                        jobs.map((card, idx)=><AllJobsCard key={idx} card={card}></AllJobsCard>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-14 mb-10'>
                    {
                        onSite.map((card, idx)=><OnSiteCard key={idx} card={card}></OnSiteCard>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-14 mb-10'>
                    {
                        remote.map((card, idx)=><RemoteCard key={idx} card={card}></RemoteCard>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-14 mb-10'>
                    {
                        hybrid.map((card, idx)=><HybridCard key={idx} card={card}></HybridCard>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-14 mb-10'>
                    {
                        partTime.map((card, idx)=><PartTimeCard key={idx} card={card}></PartTimeCard>)
                    }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default JobTab;