import React, { useState, useEffect } from 'react';
import { BodyContainer, BorderBox } from '../SharedComponents.jsx';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TvMazePeopleCast = ({ id }) => {
    const [castCredits, setCastCredits] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCastCredits = async () => {
            try {
                const response = await axios.get(`https://api.tvmaze.com/people/${id}/castcredits?embed=show`);
                setCastCredits(response.data); // Save the cast credits information
                setError('');
            } catch (err) {
                setError('Error fetching cast credits. Please try again later.');
            }
        };

        fetchCastCredits();
    }, [id]);

    // Group credits by show ID to prevent duplicates
    const groupedCredits = castCredits.reduce((acc, credit) => {
        const showId = credit._embedded.show.id;

        if (!acc[showId]) {
            acc[showId] = {
                show: credit._embedded.show,
                characters: [],
            };
        }

        // Add character name to the array (if not already included)
        const characterName = credit._links.character ? credit._links.character.name : 'Unknown';
        if (!acc[showId].characters.includes(characterName)) {
            acc[showId].characters.push(characterName);
        }

        return acc;
    }, {});

    const groupedShows = Object.values(groupedCredits).sort((a, b) => {
        const dateA = new Date(a.show.ended || a.show.premiered || 0); // Use ended date first, if available
        const dateB = new Date(b.show.ended || b.show.premiered || 0);
        return dateB - dateA; // Sort in descending order (most recent first)
    });

    // Show error if there's an issue fetching data
    if (error) {
        return <p style={{ color: 'red' }}>{ error }</p>;
    }

    // Show loading message while data is being fetched
    if (castCredits === null) {
        return <div className="loading-overlay"><p>Loading cast credits...</p></div>;
    }

    // Display a message if no cast credits are available
    if (castCredits.length === 0) {
        return (
            <div className="no-data-overlay">
                <p>No cast credits found for this person.</p>
            </div>
        );
    }

    return (
        <BodyContainer hasBackground={ true } className="cast-container">
            <h2 className="section-title">Cast Credits</h2>
            <div className="flex-wrap content-box-container">
                { groupedShows.map(({ show, characters }, index) => (
                    <BorderBox key={ index } className="cast-member">
                        <h3>{ show.name }</h3>
                        { show.image ? (
                            <img
                                src={ show.image.medium }
                                alt={ show.name }
                                loading="lazy"
                            />
                        ) : (
                            <p>No Image Available</p>
                        )}
                        <p><strong>Roles:</strong> { characters.join(', ') }</p>
                        <p><strong>Premiered:</strong> { show.premiered ? show.premiered : 'Unknown' }</p>
                        { show.summary && (
                            <p>
                                <span dangerouslySetInnerHTML={{ __html: 
                                    show.summary.length > 200 
                                        ? `${show.summary.substring(0, 200)}... ` 
                                        : show.summary 
                                }} />
                                <Link 
                                    to={`/show/${ show.id }`} 
                                    style={{ color: '#0078d4', textDecoration: 'none', fontWeight: 'bold', display: 'block', marginTop: '5px' }}
                                >
                                    Read More
                                </Link>
                            </p>
                        )}
                        { show.url && (
                            <a 
                                href={ show.url } 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{
                                    display: 'block', 
                                    marginTop: '5px', 
                                    fontSize: '0.9rem', 
                                    color: '#0078d4', 
                                    textDecoration: 'none'
                                }}
                            >
                                View on TVMaze
                            </a>
                        )}
                    </BorderBox>
                ))}
            </div>
        </BodyContainer>
    );
};

export default TvMazePeopleCast;




