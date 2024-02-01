import { useEffect, useState } from "react";
import { TiStar } from "react-icons/ti";
import axios from "axios";
import { Link } from 'react-router-dom';
import './Shows-page.css'

const ShowsPage = () => {

    const [showsData, setShowsData] = useState([]);

    useEffect(() => {
        axios.get('https://api.tvmaze.com/search/shows?q=all')
            .then(response => setShowsData(response.data))
            .catch(error => console.log('Error fetching data:', error));
    }, [])

    return (
        <div className="shows-main-wrapper">
            {showsData.map(showInfo => (

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
                        <p><TiStar />{showInfo.show.rating.average}/10</p>
                        <p>{showInfo.show.genres.join('/ ')}</p>
                    </div>
                    <Link key={showInfo.show.id} to={`/${showInfo.show.id}`} className="link-wrapper">
                        <button className="openAboutBtn">Know more</button>
                    </Link>
                </div>
            ))
            }
        </div >
    )
}

export default ShowsPage;