import './dashboard/Dashboard.css';
import { Provider } from 'react-redux'; // Import Provider
import store from './store.js'; // Adjust the path to your store file
import Graph from './dashboard/Graph.jsx';
import SecondGraph from './dashboard/Graph2.jsx'; // Import your new graph component
import ThirdGraph from './dashboard/Graph3.jsx'; // Import your new graph component
import CSVdata from './dashboard/CSVdata.jsx'; // Import your new graph component
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
            <div className="standard-padding-margin Dashboard">
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
                <DividerLine width="80%" />
                <h2 className="dashboard-section-title">Tableau Dashboard Screenshots</h2>
                <p className="dashboard-caption">
                    These screenshots represent dashboards I created in Tableau as part of a broader analysis of work activity data. Each one reflects a different lens on the evolving focus of time and tools, from operational metrics to analytics-driven insight.
                </p>
                <div className="flex-wrap-center standard-margin">
                    <div className="dashboard-image-row flex-wrap standard-margin">
                        <div className="dashboard-image-column">
                            <img
                                src={`${import.meta.env.BASE_URL}tableau_1.png`}
                                alt="Dashboard 1 overview"
                            />
                            <p className="default-list">
                                <strong>Dashboard 1</strong> – Four-year overview of application usage and focus areas, showing the transition
                                from operations to analytics and the growing role of tools like Google Sheets and Mode.
                                &nbsp;
                                <a
                                    href="https://public.tableau.com/app/profile/mark.fioca/viz/FocusWorkActivityTrendsMonthlySubtypesOver4Years/FocusandResponsibilityChangesOverTime"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="default-link"
                                >
                                    View Interactive Version
                                </a>
                            </p>
                        </div>
                        <div className="dashboard-image-column">
                            <img
                                src={`${import.meta.env.BASE_URL}tableau_2.png`}
                                alt="Dashboard 2 overview"
                            />
                            <p className="default-list">
                                <strong>Dashboard 2</strong> – Interactive breakdown of focus and non-focus work, highlighting time allocation
                                by category and key applications driving analytical productivity.
                                &nbsp;
                                <a
                                    href="https://public.tableau.com/app/profile/mark.fioca/viz/Focusworkactivityandprogramutilizationovera4yearworkhistory/FocusandNon-FocusWorkTrendsbyCategoryandApplication"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="default-link"
                                >
                                    View Interactive Version
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <DividerLine />
                <BodyContainer hasBackground = { true } className=" graph-flexbox">
                    <BorderBox className="flex-wrap standard-margin graph-container">
                        <Graph />
                        <TextSection>
                            <p>
                                The graph to the left displays the total usage time for selected applications, 
                                plotted by month. There was a shift in focus from daily operations to functioning 
                                like subject matter expertise in June of 2022.
                            </p>
                            <p>
                                Before the job title change, I used Google Sheets to help manage a pool of 
                                customers and process analytical data on their status in each phase of the 
                                life cycle funnel. After the job title change, I took on more of an analyst 
                                and auditor type of role. I used Google Sheets more to look at specific 
                                issues in our operations systems that needed to be fixed.
                            </p>
                            <p>
                                Key insights to look for in the graph include potential shifts in application 
                                usage corresponding to the job title change, as well as any notable trends in 
                                specific applications that reflect the evolving focus of the work.
                            </p>
                        </TextSection>
                    </BorderBox>
                    <BorderBox className="flex-wrap standard-margin graph-container">
                        <SecondGraph />
                        <TextSection>
                            <p>
                                In this section, we analyze the usage of different applications over time based on job focus. 
                                The goal is to identify trends and patterns in application usage based on the focus between 
                                customer relations and Analytics driven activities.
                            </p>
                            <p>
                                The graph to the left displays the total usage time for applications with different activity subtypes, 
                                plotted by month. As in the last graph, a change in focus occurred in June of 2022.
                            </p>
                            <p>
                                Key insights to look for in the graph include a very distinct shift in activities due to the job title change.
                            </p>
                        </TextSection>
                    </BorderBox>
                    <BorderBox className="flex-wrap standard-margin graph-container">
                        <ThirdGraph />
                        <TextSection>
                            <p>
                                In this section, we provide a comprehensive visual representation of the time allocated to various job activities over 
                                the years, specifically highlighting the focus on analytics. The graph displays two key datasets: the total hours 
                                worked each year and the specific hours dedicated to analytics tasks.
                            </p>
                            <p>
                                Each bar on the graph represents the total duration of work for that year, allowing for a clear comparison of overall productivity. 
                                Overlaying this, the percentage of time spent on analytics activities is also depicted, offering valuable insights into how analytics 
                                efforts evolve relative to total work hours.
                            </p>
                            <p>
                                By examining this graph, viewers can quickly grasp trends in workload and the significance of analytics within the broader context of job 
                                responsibilities. This dual representation not only illustrates raw data but also contextualizes the impact of analytics activities,
                                making it easier to identify shifts in focus and the growing importance of data-driven decision-making over time.
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
