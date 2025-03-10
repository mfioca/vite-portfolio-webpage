import React, { useState, useEffect } from 'react';
import { BodyContainer, BorderBox } from '../SharedComponents.jsx';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios';

const TvMazeEpisodes = ({ showId }) => {
    const [seasons, setSeasons] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchSeasonsAndEpisodes = async () => {
            try {
                // Fetch season and episode data
                const [seasonResponse, episodeResponse] = await Promise.all([
                    axios.get(`https://api.tvmaze.com/shows/${showId}/seasons`),
                    axios.get(`https://api.tvmaze.com/shows/${showId}/episodes`),
                ]);

                const seasonData = seasonResponse.data;
                const episodeData = episodeResponse.data;

                // Merge episodes into their respective seasons
                const mergedData = seasonData.map((season) => ({
                    ...season,
                    episodes: episodeData.filter((ep) => ep.season === season.number),
                }));

                setSeasons(mergedData);
                setError('');
            } catch (err) {
                setError('Error fetching season or episode data. Please try again later.');
            }
        };

        fetchSeasonsAndEpisodes();
    }, [showId]);

    if (error) {
        return <p style={ { color: 'red' } }>{ error }</p>;
    }

    if (!seasons.length) {
        return <p>Loading...</p>;
    }

    if (seasons.length === 0) {
        return (
            <div className="no-data-overlay">
                <p>No season data found for this show.</p>
            </div>
        );
    }

    return (
        <BodyContainer hasBackground={ false } className="tvmaze-episodes-container">
        {/*<div className="tvmaze-episodes-container">*/}
            <h2 className="section-title">Episodes by Season</h2>
            <Tabs className="standard-tabs">
                <TabList>
                    {seasons.map((season) => (
                        <Tab key={ season.id }>Season { season.number }</Tab>
                    ))}
                </TabList>
                {seasons.map((season) => (
                    <TabPanel key={season.id}>
                        <BodyContainer hasBackground={ true } className="flex-wrap episodes_zero-margin tvmaze-results">
                        {/*<div className="base-max-width box-background border flex-wrap tvmaze-season-intro">*/}
                            <div className="season-header">
                                {season.image ? (
                                    <img
                                        src={ season.image.original }
                                        alt={ `Season ${ season.number }` }
                                        loading="lazy"
                                        className="season-image"
                                    />
                                ) : (
                                    <p>No image available</p>
                                )}
                            </div>
                            <BorderBox className="standard-margin extra-details">
                                <p><strong>Season { season.number }</strong></p>
                                <p><strong>Premiere Date:</strong> { season.premiereDate || 'Unknown' }</p>
                                <p><strong>End Date:</strong> { season.endDate || 'Unknown' }</p>
                                <p><strong>Number of Episodes:</strong> { season.episodes.length || 0 }</p>
                                <p>
                                    <a href={ season.url } target="_blank" rel="noopener noreferrer">
                                        View Season on TVMaze
                                    </a>
                                </p>
                            </BorderBox>
                        </BodyContainer>
                        <table className="episodes-table">
                            <thead>
                                <tr>
                                    <th>Episode</th>
                                    <th>Number</th>
                                    <th>Air Date</th>
                                    <th>Summary</th>
                                    <th>Episode Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {season.episodes.map((episode) => (
                                    <tr key={ episode.id }>
                                        <td>{ episode.name }</td>
                                        <td>{ episode.number }</td>
                                        <td>{ episode.airdate || 'Unknown' }</td>
                                        <td
                                            dangerouslySetInnerHTML={{
                                                __html: episode.summary || 'No summary available.',
                                            }}
                                        />
                                        <td>
                                            <a href={ episode.url } target="_blank" rel="noopener noreferrer">
                                                View Episode on TVMaze
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </TabPanel>
                ))}
            </Tabs>
        </BodyContainer>
    );
};

export default TvMazeEpisodes;