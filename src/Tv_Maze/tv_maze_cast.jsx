import React, { useState, useEffect } from 'react';
import { BodyContainer, BorderBox } from '../SharedComponents.jsx';
import axios from 'axios';
import { Link } from 'react-router-dom';



const TvMazeCast = ({ id }) => {
    const [cast, setCast] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCast = async () => {
            try {
                const response = await axios.get(`https://api.tvmaze.com/shows/${id}/cast`);
                setCast(response.data); // Save the cast information
                setError('');
            } catch (err) {
                setError('Error fetching cast information. Please try again later.');
            }
        };

        fetchCast();
    }, [id]);

    if (error) {
        return <p style={{ color: 'red' }}>{ error }</p>;
    }

    if (!cast.length) {
        return <div className="loading-overlay"><p>Loading cast information...</p></div>;
    }

    return (
        <BodyContainer hasBackground={ true } className="cast-container">
        {/*<div className="box-background border cast-container">  className="cast-container" */}
            <h2 className="section-title">Cast</h2>
            {/*<h2 className="section-title">Cast</h2>*/}
            <div className="flex-wrap content-box-container">
                {cast.map((person, index) => (
                    <BorderBox key={ index } className="cast-member">
                        <h3>{ person.person.name }</h3>
                        { person.person.image ? (
                            <img
                                src={person.person.image.medium}
                                alt={person.person.name}
                                loading="lazy"
                            />
                        ) : (
                            <p>No Image Available</p>
                        )}
                        <p>As: { person.character.name }</p>
                        { person.person.url && (
                            <Link 
                            to={ `/person/${ person.person.id }` }  // Navigate to the person details page
                            style={{
                                display: 'block', 
                                marginTop: '10px', 
                                fontSize: '0.9rem', 
                                color: '#0078d4', 
                                textDecoration: 'none'
                            }}
                            >
                                View More Details
                            </Link>
                        )}
                    </BorderBox>
                ))}
            </div>
        </BodyContainer>
    );
};

export default TvMazeCast;

