import './Shows-page.css'
import axios from "axios";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

const ShowsPage = () => {
    const [showsData, setShowsData] = useState([]);


    useEffect(() => {
        axios.get('https://api.tvmaze.com/search/shows?q=all')
            .then(response => setShowsData(response.data))
            .catch(error => console.log('Error fetching data:', error));
    }, [])
    return (
        <>
            <div className="shows-main-wrapper">
                {showsData.map(showInfo => (
                    <Link key={showInfo.show.id} to={`/${showInfo.show.id}`} style={{ textDecoration: 'none' }}>
                        <div className="show-container" >
                            <div className="show-img-container">
                                {showInfo.show.image ?
                                    <img src={showInfo.show.image.original} alt={`${showInfo.show.name} image`} />
                                    :
                                    <p>Image not provided</p>
                                }
                            </div>
                            <div className="show-details-container">
                                <p>{showInfo.show.name}</p>
                                <p>{showInfo.show.rating.average}/10</p>
                                <p>{showInfo.show.genres.join('/ ')}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div >
        </>
    )
}

export default ShowsPage;