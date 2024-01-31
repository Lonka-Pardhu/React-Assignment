import axios from "axios";
import { useEffect, useState } from "react";

const MoviesPage = () => {
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
                    <div key={showInfo.show.id} className="show-container" >
                        <div className="show-img-container">
                            {showInfo.show.image && (
                                <img src={showInfo.show.image.original} alt="s" />
                            )}
                        </div>
                        <div className="show-details-container">
                            <p>{showInfo.show.name}</p>
                            <p>{showInfo.show.rating.average}/10</p>
                            <p>{showInfo.show.genres}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MoviesPage;