import { useEffect, useState, useContext } from "react";
import { TiStar } from "react-icons/ti";
import axios from "axios";
import { ShowMainWrapperStyled, ShowContainerStyled, ShowImgContainerStyled, ShowDetailsContainerStyled, KnowMoreBtnStyled, TextStyled, ImgStyled } from './Shows-Page-Styled';
import { Link } from 'react-router-dom';
import ThemeContext from "../Context/Theme-Context";

const ShowsPage = () => {

    const { currentTheme } = useContext(ThemeContext)

    const [showsData, setShowsData] = useState([]);

    useEffect(() => {
        axios.get('https://api.tvmaze.com/search/shows?q=all')
            .then(response => setShowsData(response.data))
            .catch(error => console.log('Error fetching data:', error));
    }, [])

    return (
        <ShowMainWrapperStyled>
            {showsData.map(showInfo => (

                <ShowContainerStyled theme={currentTheme} key={showInfo.show.id} >
                    <ShowImgContainerStyled theme={currentTheme}>
                        {showInfo.show.image ?
                            <ImgStyled src={showInfo.show.image.original} alt={`${showInfo.show.name} image`} />
                            :
                            <TextStyled>Image not provided</TextStyled>
                        }
                    </ShowImgContainerStyled>
                    <ShowDetailsContainerStyled theme={currentTheme}>
                        <TextStyled>{showInfo.show.name}</TextStyled>
                        <TextStyled><TiStar />{showInfo.show.rating.average}/10</TextStyled>
                        <TextStyled>{showInfo.show.genres.join('/ ')}</TextStyled>
                    </ShowDetailsContainerStyled>
                    <Link to={`/${showInfo.show.id}`}>
                        <KnowMoreBtnStyled>Know more</KnowMoreBtnStyled>
                    </Link>
                </ShowContainerStyled>
            ))}
        </ShowMainWrapperStyled>
    )
}

export default ShowsPage;