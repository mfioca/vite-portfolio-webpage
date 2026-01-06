import { useState } from 'react';
import './chess_dashboard/Chess.css';
import GameArchiveSection from './chess_dashboard/GameArchiveSection.jsx';
import OpponentDataSection from './chess_dashboard/OpponentDataSection.jsx';
import GameDataSection from './chess_dashboard/GameDataSection.jsx';
import MoveDataSection from './chess_dashboard/MoveDataSection.jsx';
import { IntroSection, DividerLine, BodyContainer } from './SharedComponents';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const ChessDashboard = () => {
  const [isBookmarkletOpen, setIsBookmarkletOpen] = useState(false);

  return (
    <div className="chess-body">
      <IntroSection title="Chess Analysis Dashboard">
        <p>
          This dashboard presents a multi-layered analysis of over 500 games played primarily against chess bots and coaches on <a href="https://www.chess.com" target="_blank" rel="noopener noreferrer" className="text-body">Chess.com</a>. The data was extracted using a custom-built bookmarklet, then processed and grouped by opponent rating to surface performance trends.
        </p>
        <p>
          Explore detailed metrics across three tabs: overall game stats, opponent-specific insights, and move quality breakdowns. Each section includes sortable tables and interactive charts for quick comparisons. Data visualizations update dynamically as new games are added to the tracking spreadsheet.
        </p>
        <p>
          Whether you're evaluating accuracy, win rates, or blunder frequency, this dashboard gives a structured look into play patterns over time — and the tools used to track them.
        </p>
        <p>
          All data shown here is dynamically pulled from a connected Google Sheets document using a custom script. This setup ensures the charts and tables stay up to date as new games are logged and processed.
        </p>
        <p>
          <strong>Note:</strong> This dashboard is still under construction. Features, layout, and visualizations may continue to evolve as more data and analysis tools are integrated.
        </p>
      </IntroSection>
      <DividerLine/>
      <div className="standard-padding-margin">
        <h2 
          className="toggle-gallery-title" 
          onClick={() => setIsBookmarkletOpen(prev => !prev)}
          style={{ cursor: "pointer" }}
        >
          { isBookmarkletOpen ? "▼ Bookmarklet Script" : "▶ Bookmarklet Script" }
        </h2>

        <p style={{ marginTop: '10px' }}>
          The following bookmarklet is used to extract game statistics directly from&nbsp;
          <a href="https://www.chess.com" className="text-body" target="_blank" rel="noopener noreferrer">Chess.com</a> directly from the game review page.
          It scrapes accuracy, move classifications, opponent rating, and game context, then copies a TSV row to the clipboard for logging into a spreadsheet.
        </p>
        {isBookmarkletOpen && (
          <pre className="bookmarklet-script-block">
            {`javascript:(function(){try{const pgn=window.chesscom?.analysis?.pgn||'',isWhite=pgn.includes('[White "franknmullet"]');const opponent=(pgn.match(isWhite?/$begin:math:display$Black \"\(\.\+\?\)\"$end:math:display$/:/$begin:math:display$White \"\(\.\+\?\)\"$end:math:display$/)?.[1])||'UNKNOWN';let rating=[...document.querySelectorAll('*')].map(e=>e.textContent.trim()).find(t=>t.includes(opponent)&&t.includes('(')&&t.includes(')'))?.match(/$begin:math:text$\(\\d\{3\,4\}\)$end:math:text$/)?.[1]||'';if(!rating){rating=pgn.match(isWhite?/$begin:math:display$BlackElo \"\(\\d\+\)\"$end:math:display$/:/$begin:math:display$WhiteElo \"\(\\d\+\)\"$end:math:display$/)?.[1]||''}const colorMine=isWhite?'White':'Black',colorBot=isWhite?'Black':'White';let spans=[...document.querySelectorAll('span')].map(e=>e.textContent.trim()).filter(t=>/^\d{1,3}\.\d$/.test(t));let accuracy=isWhite?spans[1]:spans[2];const allText=[...document.querySelectorAll('*')].map(e=>e.textContent.trim());const block=allText.find(t=>t.includes('Accuracy')&&t.includes('Brilliant'))||'';if(!accuracy){const accM=block.match(/Accuracy\s+(\d{1,3}\.\d)\s+(\d{1,3}\.\d)/);if(accM)accuracy=isWhite?accM[1]:accM[2]}const rx=/(Brilliant|Great|Best|Excellent|Good|Book|Inaccuracy|Mistake|Miss|Blunder)\s+(\d+)\s+(\d+)/g;const stats={};const pageText=document.body.innerText.replace(/\s+/g,' ');for(const[,lab,w,b]of pageText.matchAll(rx)){const v=parseInt(isWhite?w:b,10);stats[lab]=(stats[lab]||0)+v}if(stats.Miss==null){const body=document.body.innerText.replace(/\s+/g,' ');const pair=body.match(/Miss(?:\s|[^\d]){0,40}(\d+)(?:\s|[^\d]){0,40}(\d+)/);if(pair){stats.Miss=parseInt(isWhite?pair[1]:pair[2],10)}else{const singles=[...body.matchAll(/Miss\s+(\d+)/g)].map(m=>parseInt(m[1],10));stats.Miss=singles.length?Math.max(...singles):0}}const total=Object.values(stats).reduce((s,v)=>s+(v||0),0);const result=prompt('Enter result (Win / Loss / Draw):');const gameRating=prompt('Enter Game Rating (e.g. 1450):');const row=[opponent,rating,colorBot,colorMine,result,accuracy,total,gameRating,stats.Brilliant||0,stats.Great||0,stats.Best||0,stats.Excellent||0,stats.Good||0,stats.Book||0,stats.Inaccuracy||0,stats.Mistake||0,stats.Miss||0,stats.Blunder||0].join('\\t');navigator.clipboard.writeText(row).then(()=>alert('✅ TSV row copied to clipboard!'))}catch(e){alert('❌ Script failed. See console.');console.error(e);}})();`}
          </pre>
        )}
      </div>
      <DividerLine/>
      <div className="box-style-standard standard-padding-margin base-max-width">
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