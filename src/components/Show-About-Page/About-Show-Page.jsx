import axios from "axios";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TiStar } from "react-icons/ti";
import BookingForm from '../Booking-Form/Booking-Form';
import { LoadingTextStyled, AboutShowContainerStyled, AboutShowWrapperStyled, ShowTitleContainerStyled, ShowTitleStyled, ShowGenresStyled, ShowImageContainer, ShowImgStyled, ImgErrStyled, ShowSummaryContainer, ShowSummaryTitleStyled, ShowSummaryStyled, BookTicketsBtnStyled, ShowRatingContainer, ShowRatingStyled, IconHolderStyled } from "./About-Show-Styled";

const AboutShow = () => {

    const [showData, setShowData] = useState(null);
    const [showBookingForm, setShowBookingForm] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://api.tvmaze.com/shows/${id}`)
            .then(response => setShowData(response.data))
            .catch(error => console.log('Error fetching show data:', error))
    })

    const handleBookButtonClick = () => {
        setShowBookingForm(true);
    }

    if (!showData) {
        return <LoadingTextStyled>Loading...</LoadingTextStyled>;
    }

    return (
        <>
            <AboutShowContainerStyled>
                <AboutShowWrapperStyled>
                    <ShowTitleContainerStyled>
                        <ShowTitleStyled>{showData.name}</ShowTitleStyled>
                        <ShowGenresStyled>{showData.genres.join('/ ')}</ShowGenresStyled>
                    </ShowTitleContainerStyled>
                    <ShowImageContainer>
                        {showData.image ?

                            <ShowImgStyled src={showData.image.original} alt={`${showData.name} image`} />
                            :
                            <ImgErrStyled>image not provided</ImgErrStyled>
                        }
                    </ShowImageContainer>
                    <ShowRatingContainer>
                        <IconHolderStyled><TiStar /></IconHolderStyled>
                        <ShowRatingStyled>{showData.rating.average ? showData.rating.average : '?'}/10</ShowRatingStyled>
                    </ShowRatingContainer>
                </AboutShowWrapperStyled>
                <ShowSummaryContainer>
                    <ShowSummaryTitleStyled>About the show</ShowSummaryTitleStyled>
                    <ShowSummaryStyled dangerouslySetInnerHTML={{ __html: showData.summary }}></ShowSummaryStyled>
                    <BookTicketsBtnStyled onClick={handleBookButtonClick}>Book Tickets</BookTicketsBtnStyled>
                </ShowSummaryContainer>
            </AboutShowContainerStyled>
            {showBookingForm &&
                <BookingForm movieName={showData.name}
                    showBookingForm={showBookingForm}
                    setShowBookingForm={setShowBookingForm} />}
        </>
    )
}

export default AboutShow;