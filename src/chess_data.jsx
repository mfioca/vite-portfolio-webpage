import React from 'react';
import GameArchiveSection from './chess_dashboard/GameARchiveSection.jsx';
import OpponentDataSection from './chess_dashboard/OpponentDataSection.jsx';
import GameDataSection from './chess_dashboard/GameDataSection.jsx';
import MoveDataSection from './chess_dashboard/MoveDataSection.jsx';

const ChessDashboard = () => {
  return (
    <div className="center-margin base-max-width">
      <div className="box-style-standard standard-padding-margin">
        <h2 className="shadow">Chess Dashboard</h2>
        <p>This will be the base page for all your chess-related data and visualizations.</p>
      </div>
      <GameArchiveSection />
      <OpponentDataSection/>
      <GameDataSection/>
      <MoveDataSection/>
    </div>
  );
};

export default ChessDashboard;