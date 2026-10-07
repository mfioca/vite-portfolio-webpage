import React, { useState } from 'react';
import { DividerLine } from '../SharedComponents';
import './Chess.css';

const ChessSetupSection = () => {
    const [isBookmarkletOpen, setIsBookmarkletOpen] = useState(false);
    const [isSheetScriptOpen, setIsSheetScriptOpen] = useState(false);
    const [isTimedBookmarkletOpen, setIsTimedBookmarkletOpen] = useState(false);

    return (
        <>
            <div className="standard-padding-margin">
                <h2
                    className="toggle-gallery-title"
                    onClick={() => setIsBookmarkletOpen(prev => !prev)}
                    style={{ cursor: "pointer" }}
                >
                    {isBookmarkletOpen ? "▼ Bookmarklet Script" : "▶ Bookmarklet Script"}
                </h2>
                <p className="base-max-width center-margin">
                    The following bookmarklet is used to extract game statistics directly from&nbsp;
                    <a href="https://www.chess.com" className="text-body" target="_blank" rel="noopener noreferrer">Chess.com</a> from the game review page.
                    It scrapes accuracy, move classifications, opponent rating, and game context, then copies a TSV row to the clipboard for logging into a spreadsheet.
                </p>
                {isBookmarkletOpen && (
                    <pre className="box-Nobackground-standard standard-padding-margin script-container script-block">
                        {`javascript:(function(){
                            try{
                                const pgn=window.chesscom?.analysis?.pgn||'',
                                    isWhite=pgn.includes('[White "franknmullet"]');

                                const opponent=
                                    (pgn.match(
                                        isWhite
                                        ?/\$begin:math:display$Black \"\(\.\+\?\)\"\\$end:math:display$/
                                        :/\$begin:math:display$White \"\(\.\+\?\)\"\\$end:math:display$/
                                    )?.[1])||'UNKNOWN';

                                let rating=
                                    [...document.querySelectorAll('*')]
                                        .map(e=>e.textContent.trim())
                                        .find(t=>t.includes(opponent)&&t.includes('(')&&t.includes(')'))
                                        ?.match(/\$begin:math:text$\(\\\\d\{3\,4\}\)\\$end:math:text$/)?.[1]||'';

                                if(!rating){
                                    rating=pgn.match(
                                        isWhite
                                        ?/\$begin:math:display$BlackElo \"\(\\\\d\+\)\"\\$end:math:display$/
                                        :/\$begin:math:display$WhiteElo \"\(\\\\d\+\)\"\\$end:math:display$/
                                    )?.[1]||'';
                                }

                                const colorMine=isWhite?'White':'Black',
                                    colorBot=isWhite?'Black':'White';

                                let accuracy=
                                    document.querySelector(
                                        isWhite
                                        ?'.review-rating-white span'
                                        :'.review-rating-black span'
                                    )?.textContent.trim()||'';

                                const rx=
                                    /(Brilliant|Great|Best|Excellent|Good|Book|Inaccuracy|Mistake|Miss|Blunder)\\s+(\\d+)\\s+(\\d+)/g;

                                const stats={};
                                const pageText=document.body.innerText.replace(/\\s+/g,' ');

                                for(const[,lab,w,b]of pageText.matchAll(rx)){
                                    const v=parseInt(isWhite?w:b,10);
                                    stats[lab]=(stats[lab]||0)+v;
                                }

                                if(stats.Miss==null){
                                    const body=document.body.innerText.replace(/\\s+/g,' ');
                                    const pair=body.match(
                                        /Miss(?:\\s|[^\\d]){0,40}(\\d+)(?:\\s|[^\\d]){0,40}(\\d+)/
                                    );

                                    if(pair){
                                        stats.Miss=parseInt(isWhite?pair[1]:pair[2],10);
                                    }else{
                                        const singles=
                                            [...body.matchAll(/Miss\\s+(\\d+)/g)]
                                            .map(m=>parseInt(m[1],10));

                                        stats.Miss=singles.length?Math.max(...singles):0;
                                    }
                                }

                                const total=
                                    Object.values(stats).reduce((s,v)=>s+(v||0),0);

                                const result=prompt('Enter result (Win / Loss / Draw):');
                                const gameRating=prompt('Enter Game Rating (e.g. 1450):');

                                const row=[
                                    opponent,
                                    rating,
                                    colorBot,
                                    colorMine,
                                    result,
                                    accuracy,
                                    total,
                                    gameRating,
                                    stats.Brilliant||0,
                                    stats.Great||0,
                                    stats.Best||0,
                                    stats.Excellent||0,
                                    stats.Good||0,
                                    stats.Book||0,
                                    stats.Inaccuracy||0,
                                    stats.Mistake||0,
                                    stats.Miss||0,
                                    stats.Blunder||0
                                ].join('\\t');

                                navigator.clipboard
                                    .writeText(row)
                                    .then(()=>alert('✅ TSV row copied to clipboard!'));

                            }catch(e){
                                alert('❌ Script failed. See console.');
                                console.error(e);
                            }
                            })();`}
                    </pre>
                )}
            </div>
            <DividerLine />
            <div className="standard-padding-margin">
                <h2
                    className="toggle-gallery-title"
                    onClick={() => setIsTimedBookmarkletOpen(prev => !prev)}
                    style={{ cursor: "pointer" }}
                >
                    {isTimedBookmarkletOpen
                        ? "▼ Time Control Bookmarklet Script"
                        : "▶ Time Control Bookmarklet Script"}
                </h2>

                <p className="base-max-width center-margin">
                    This bookmarklet extracts game statistics, time control, and recorded
                    clock differences from the Chess.com game review page. It copies a TSV
                    row to the clipboard for logging into the time-control spreadsheet.
                </p>

                {isTimedBookmarkletOpen && (
                    <pre className="box-Nobackground-standard standard-padding-margin script-container script-block">
                        {String.raw`javascript:(function(){
    try {
        const pgn = window.chesscom?.analysis?.pgn || '';
        const isWhite = pgn.includes('[White "franknmullet"]');
        const timeControl = pgn.match(/\[TimeControl "(.+?)"\]/)?.[1] || '';

        const formatTimeControl = function(tc) {
            if (!tc) return '';
            if (tc.includes('+')) {
                const parts = tc.split('+').map(Number);
                return Math.floor(parts[0] / 60) + '+' + parts[1];
            }
            return Math.floor(Number(tc) / 60) + '+0';
        };

        const timeControlFormatted = formatTimeControl(timeControl);
        const clockMatches = [...pgn.matchAll(/\[%clk ([0-9:.]+)\]/g)];
        const clocks = clockMatches.map(function(m) {
            return m[1];
        });

        const toSeconds = function(t) {
            const parts = t.split(':').map(Number);
            if (parts.length === 3) {
                return parts[0] * 3600 + parts[1] * 60 + parts[2];
            } else if (parts.length === 2) {
                return parts[0] * 60 + parts[1];
            } else if (parts.length === 1) {
                return parts[0];
            }
            return 0;
        };

        const clockSeconds = clocks.map(toSeconds);
        const timeSpent = [];

        for (var i = 2; i < clockSeconds.length; i++) {
            timeSpent.push(clockSeconds[i - 2] - clockSeconds[i]);
        }

        const myTimes = [];

        for (var i = 0; i < timeSpent.length; i++) {
            if ((isWhite && i % 2 === 0) || (!isWhite && i % 2 === 1)) {
                myTimes.push(timeSpent[i]);
            }
        }

        var cleaned = myTimes.map(function(v) {
            return Math.round(v * 10) / 10;
        });

        var myMaxTime = 0;
        for (var i = 0; i < cleaned.length; i++) {
            if (cleaned[i] > myMaxTime) myMaxTime = cleaned[i];
        }

        var mySumTime = 0;
        for (var i = 0; i < cleaned.length; i++) {
            mySumTime += cleaned[i];
        }

        var myAvgTime = cleaned.length
            ? Math.round((mySumTime / cleaned.length) * 10) / 10
            : 0;

        var totalTimeUsed = 0;
        for (var i = 0; i < cleaned.length; i++) {
            totalTimeUsed += cleaned[i];
        }
        totalTimeUsed = Math.round(totalTimeUsed * 10) / 10;

        const opponent = (
            pgn.match(
                isWhite ? /\[Black "(.+?)"\]/ : /\[White "(.+?)"\]/
            )?.[1]
        ) || 'UNKNOWN';

        let rating = [...document.querySelectorAll('*')]
            .map(function(e) { return e.textContent.trim(); })
            .find(function(t) {
                return t.includes(opponent) && t.includes('(') && t.includes(')');
            })
            ?.match(/(\d{3,4})/)?.[1] || '';

        if (!rating) {
            rating = pgn.match(
                isWhite ? /\[BlackElo "(\d+)"\]/ : /\[WhiteElo "(\d+)"\]/
            )?.[1] || '';
        }

        const colorMine = isWhite ? 'White' : 'Black';
        const colorBot = isWhite ? 'Black' : 'White';

        let accuracy = document.querySelector(
            isWhite ? '.review-rating-white span' : '.review-rating-black span'
        )?.textContent.trim() || '';

        const rx = /(Brilliant|Great|Best|Excellent|Good|Book|Inaccuracy|Mistake|Miss|Blunder)\s+(\d+)\s+(\d+)/g;
        const stats = {};
        const pageText = document.body.innerText.replace(/\s+/g, ' ');

        for (const [, lab, w, b] of pageText.matchAll(rx)) {
            const v = parseInt(isWhite ? w : b, 10);
            stats[lab] = (stats[lab] || 0) + v;
        }

        if (stats.Miss == null) {
            const body = document.body.innerText.replace(/\s+/g, ' ');
            const pair = body.match(
                /Miss(?:\s|[^\d]){0,40}(\d+)(?:\s|[^\d]){0,40}(\d+)/
            );

            if (pair) {
                stats.Miss = parseInt(isWhite ? pair[1] : pair[2], 10);
            } else {
                const singles = [...body.matchAll(/Miss\s+(\d+)/g)]
                    .map(function(m) { return parseInt(m[1], 10); });
                stats.Miss = singles.length ? Math.max(...singles) : 0;
            }
        }

        const total = Object.values(stats).reduce(function(s, v) {
            return s + (v || 0);
        }, 0);

        const result = prompt('Enter result (Win / Loss / Draw):');
        const gameRating = prompt('Enter Game Rating (e.g. 1450):');

        const row = [
            opponent,
            rating,
            colorBot,
            colorMine,
            result,
            accuracy,
            total,
            gameRating,
            timeControlFormatted,
            totalTimeUsed,
            myAvgTime,
            myMaxTime,
            stats.Brilliant || 0,
            stats.Great || 0,
            stats.Best || 0,
            stats.Excellent || 0,
            stats.Good || 0,
            stats.Book || 0,
            stats.Inaccuracy || 0,
            stats.Mistake || 0,
            stats.Miss || 0,
            stats.Blunder || 0
        ].join('\t');

        navigator.clipboard.writeText(row).then(function() {
            alert('✅ TSV row copied to clipboard!');
        });
    } catch (e) {
        alert('❌ Script failed. See console.');
        console.error(e);
    }
})();`}
                    </pre>
                )}
            </div>

            <DividerLine />
            <div className="standard-padding-margin">
                <h2
                    className="toggle-gallery-title"
                    onClick={() => setIsSheetScriptOpen(prev => !prev)}
                    style={{ cursor: "pointer" }}
                >
                    {isSheetScriptOpen ? "▼ Google Sheets App Script" : "▶ Google Sheets App Script"}
                </h2>
                <p className="base-max-width center-margin">
                    This Google Apps Script exposes spreadsheet data as JSON via a simple
                    <code> doGet </code> endpoint. It allows the dashboard to dynamically
                    fetch structured game data directly from Google Sheets.
                </p>
                {isSheetScriptOpen && (
                    <pre className="box-Nobackground-standard standard-padding-margin script-container script-block">
                        {`function doGet(e) {
                            const sheetName = e.parameter.sheet;
                            if (!sheetName) {
                            return ContentService
                                .createTextOutput("Missing 'sheet' parameter")
                                .setMimeType(ContentService.MimeType.TEXT);
                            }

                            const sheet = SpreadsheetApp
                            .getActiveSpreadsheet()
                            .getSheetByName(sheetName);

                            if (!sheet) {
                            return ContentService
                                .createTextOutput("Sheet not found")
                                .setMimeType(ContentService.MimeType.TEXT);
                            }

                            const data = sheet.getDataRange().getValues();
                            const headers = data[0];
                            const rows = [];

                            for (let i = 1; i < data.length; i++) {
                            const row = data[i];

                            // Skip row if column A is blank
                            if (row[0] === "") continue;

                            const entry = {};
                            for (let j = 0; j < headers.length; j++) {
                                entry[headers[j]] = row[j];
                            }
                            rows.push(entry);
                            }

                            return ContentService
                            .createTextOutput(JSON.stringify(rows))
                            .setMimeType(ContentService.MimeType.JSON);
                        }`}
                    </pre>
                )}
            </div>
        </>
    )
};

export default ChessSetupSection