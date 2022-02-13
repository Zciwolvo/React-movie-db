import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import store from "../store/home"



const nullw500 = require('../images/nullw500.png')

const DisplayWatchlist = (props) => {


    const {loaded} = store
    const {scrollTop} = props
    const watchList = JSON.parse(localStorage.getItem('WatchList')) 
    const [empty, setEmpty] = useState(true)

    useEffect((error, info) => {
        console.log(watchList)
        try{
        if (watchList.hasOwnProperty(0)) {
            setEmpty(false)
        }}
        catch{setEmpty(true)}
    })



        return (
            <section>
                {empty ? <div className="loading">Jeszcze nie masz żadnych filmów do obejrzenia...</div> :
                <div>
                {loaded ? <div className="movies-grid">
                        {watchList.map(({id, 
                        poster_path, 
                        original_title, 
                        release_date, 
                        vote_average}) => (
                                <div 
                                className="movie-item infos-container" 
                                key={id}>
                                    <Link to={`/React-movie-db/movie/${id}`} onClick={scrollTop}>       
                                        <img src={poster_path ? 
                                        `https://image.tmdb.org/t/p/w500${poster_path}` :
                                            `${nullw500}`} 
                                            alt={`Movie Poster`}/>
                                        <div className="infos-box">
                                            <div className="infos-one">{release_date}</div>
                                            <div className="infos-two">{original_title}</div>
                                            <div className="infos-three">{vote_average}</div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        )} 
                    </div> 
                    : <div className="loading">Loading...</div>
                }
                </div>
                }
            </section>
        )
    
}

export default DisplayWatchlist