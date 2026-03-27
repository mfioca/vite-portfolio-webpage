import React from 'react';
import './chess_dashboard/Chess.css';
import GameArchiveSection from './chess_dashboard/GameArchiveSection.jsx';
import OpponentDataSection from './chess_dashboard/OpponentDataSection.jsx';
import GameDataSection from './chess_dashboard/GameDataSection.jsx';
import MoveDataSection from './chess_dashboard/MoveDataSection.jsx';
import ChessSetupSection from './chess_dashboard/ChessSetupSection.jsx';
import { IntroSection, DividerLine } from './SharedComponents';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const ChessDashboard = () => {

  return (
    <div className="chess-body">
      <IntroSection title="Chess Analysis Dashboard">
        <p>
          This dashboard presents a multi-layered analysis of games played primarily against chess bots and coaches on&nbsp;
          <a
            href="https://www.chess.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body"
          >
            Chess.com
          </a>.
          All data shown here is dynamically pulled from a connected Google Sheets document using a custom script, ensuring charts and tables stay up to date as new games are logged and processed. Data is extracted into the spreadsheet using a custom-built bookmarklet, then processed and grouped by opponent rating to surface performance trends.
        </p>
        <p>
          Explore detailed metrics across three tabs—game stats, opponent insights, and move quality breakdowns—using sortable tables and interactive charts. Whether you're evaluating accuracy, win rates, or blunder frequency, the visualizations update automatically as new games are logged to the tracking spreadsheet.
        </p>
        <p>
          <strong>Data integrity note:</strong> For data validity, all games included here are played under strict conditions: no engine hints, no analysis assistance, and no intentional undo or takebacks used to improve a position.
        </p>
        <p className="under-construction-warning">
          <strong>Note:</strong> This dashboard is still under construction. Features, layout, and visualizations may continue to evolve as more data and analysis tools are integrated.
        </p>
      </IntroSection>
      <DividerLine/>
      <ChessSetupSection/>
      <DividerLine/>
      <div className="standard-padding-margin-center base-max-width">
        {/* forced render loads all data in each tab */}
        <Tabs className="standard-tabs" forceRenderTabPanel> 
          <TabList className="grid-tablist">
            <Tab>Game Data</Tab>
            <Tab>Opponent Data</Tab>
            <Tab>Move Data</Tab>
          </TabList>
          <TabPanel>
            <GameDataSection/>
          </TabPanel>
          <TabPanel>
            <OpponentDataSection/>
          </TabPanel>
          <TabPanel>
            <MoveDataSection/>
          </TabPanel>
        </Tabs>
      </div>
      <DividerLine/>     
      <GameArchiveSection/>
    </div>
  );
};

export default ChessDashboard;