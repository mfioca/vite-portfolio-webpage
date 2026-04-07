import './dashboard/Dashboard.css';
import { Provider } from 'react-redux'; 
import store from './store.js'; 
import Graph from './dashboard/Graph.jsx';
import SecondGraph from './dashboard/Graph2.jsx'; 
import ThirdGraph from './dashboard/Graph3.jsx'; 
import CSVdata from './dashboard/CSVdata.jsx'; 
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
                    <p><strong className="shadow">Purpose:</strong>&nbsp;&nbsp;This dashboard visualizes four years of activity data, showing how job focus and time allocation evolved over time. 
                        It transforms raw CSV data into interactive visuals that highlight performance patterns and make insights easy to explore through filtering and responsive charts.
                    </p>
                    <DividerLine width="30%" />
                    <p><strong className="shadow">Description:</strong>&nbsp;&nbsp;The first section shows how my work focus shifted over time, from operations to analytics, 
                        along with changes in tools and priorities across key activities.
                    </p>
                    <p>
                        The second section adds interactivity, allowing users to explore the underlying data through filters for activity type, month, and year. 
                        Charts and a data table update dynamically to show how time was spent and where focus was concentrated.
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
