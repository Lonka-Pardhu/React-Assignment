import './show-about.css'
import { TiStar } from "react-icons/ti";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import BookingForm from '../Booking-Form/Booking-Form';

const AboutShow = () => {
    const { id } = useParams();
    const [showData, setShowData] = useState(null);
    const [showBookingForm, setShowBookingForm] = useState(false);


    useEffect(() => {
        axios.get(`https://api.tvmaze.com/shows/${id}`)
            .then(response => setShowData(response.data))
            .catch(error => console.log('Error fetching show data:', error))
    })

    const handleBookButtonClick = () => {
        setShowBookingForm(true);
    }

    if (!showData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="show-about-details-container">
                <div className="show-about-wrapper-one">
                    <div className="show-title-container">
                        <h1>{showData.name}</h1>
                        <p>{showData.genres.join('/ ')}</p>
                    </div>
                    <div className="show-about-image-container">
                        {showData.image ?
                            <img src={showData.image.original} alt={`${showData.name} image`} />
                            :
                            <p>image  no provided</p>
                        }
                    </div>
                    <div className="show-about-rating-container">
                        <span className='react-icon'><TiStar /></span>
                        <p>{showData.rating.average ? showData.rating.average : '?'}/10</p>
                    </div>

                </div>
                <div className="show-about-summary-container">
                    <h3>About the movie</h3>
                    <p>{showData.summary}</p>
                    <button className='book-tickets-button' onClick={handleBookButtonClick}>Book Tickets</button>
                </div>
            </div>
            {showBookingForm && <BookingForm movieName={showData.name} />}
        </>
    )
}

export default AboutShow;