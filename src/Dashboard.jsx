import './dashboard/Dashboard.css';
import { Provider } from 'react-redux'; // Import Provider
import store from './store.js'; // Adjust the path to your store file
import Graph from './dashboard/Graph.jsx';
import SecondGraph from './dashboard/Graph2.jsx'; // Import your new graph component
import ThirdGraph from './dashboard/Graph3.jsx'; // Import your new graph component
import CSVdata from './dashboard/CSVdata.jsx'; // Import your new graph component
import PowerpointViewer from './dashboard/powerpoint.jsx';
import { DividerLine, IntroSection, BodyContainer, BorderBox } from './SharedComponents.jsx';


const TextSection = ({ children }) => {
    return (
        <div className="box-style text-section">
            { children }
        </div>
    );
};


function Dashboard() {
    return (
        // Wrap the App component with Provider for Redoux functions
        <Provider store={ store }> 
            <div className="Dashboard">
                <IntroSection title="Dashboard Overview">
                    <p><strong className="shadow">Purpose:</strong>&nbsp;&nbsp;This dashboard visualizes four years of activity data from a single organization, 
                        highlighting how job focus and time allocation evolved over time. It translates complex CSV data into clear, interactive visuals that reveal 
                        how different activities contribute to overall performance. Designed for clarity and exploration, it features responsive graphs, pagination, 
                        and customizable filters — making data easy to navigate and insights immediately accessible.
                    </p>
                    <DividerLine width="30%" />
                    <p><strong className="shadow">Description:</strong>&nbsp;&nbsp;The first section visualizes how my work focus evolved over time — showing the shift 
                        from operations to analytics and how tools like Google Sheets and Mode drove that change. Monthly trends highlight total hours, analytics growth, 
                        and changing priorities across key activity types.
                    </p>
                    <p>
                        The second section adds interactivity, letting users explore the underlying CSV data. Filters for activity type, month, and year dynamically 
                        update donut and bar charts to reveal where time was spent and which tools dominated. A live data table below supports deeper exploration.
                    </p>
                    <DividerLine width="30%" />
                    <p className="data-source ">Data insights in this dashboard were made possible through the use of <a href="https://www.rescuetime.com" target="_blank" rel="noopener noreferrer">RescueTime.com</a>, 
                        a powerful productivity and time management tool.
                    </p>
                </IntroSection>
                <DividerLine />
                <PowerpointViewer />
                <DividerLine />
                <BodyContainer hasBackground = { true } className=" graph-flexbox base-max-width">
                    <BorderBox className="flex-wrap standard-margin graph-container">
                        <Graph />
                        <TextSection>
                            <p>
                                This graph shows monthly usage time across key applications, highlighting a shift in job focus around June 2022 — from operational work to SME-level analytics.
                            </p>
                            <p>
                                Before the change, Google Sheets supported customer lifecycle tracking. Afterward, it became a tool for deeper operational analysis and audits.
                            </p>
                            <p>
                                Look for changes in app usage that reflect evolving responsibilities and role transitions.
                            </p>
                        </TextSection>
                    </BorderBox>
                    <BorderBox className="flex-wrap standard-margin graph-container">
                        <SecondGraph />
                        <TextSection>
                            <p>
                                This graph breaks down application usage over time by activity subtype, highlighting a shift in job focus around June 2022 — from customer-facing tasks to analytics-driven work.
                            </p>
                            <p>
                                It reveals how tool usage evolved in response to changing responsibilities, with clear trends tied to the job title transition.
                            </p>
                        </TextSection>
                    </BorderBox>
                    <BorderBox className="flex-wrap standard-margin graph-container">
                        <ThirdGraph />
                        <TextSection>
                            <p>
                                This graph highlights how time was allocated across job activities each year, with a focus on analytics. It compares total hours worked to hours spent specifically on analytics tasks.
                            </p>
                            <p>
                                Each bar shows total annual work time, with an overlay indicating the percentage dedicated to analytics — revealing how its role grew over time.
                            </p>
                            <p>
                                This dual view makes it easy to spot shifts in workload and the rising importance of analytics in overall job responsibilities.
                            </p>
                        </TextSection>
                    </BorderBox>
                </BodyContainer>
                <CSVdata />
            </div>
        </Provider>
    );
}

export default Dashboard;
