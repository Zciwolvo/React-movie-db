import React, {useState} from "react"
import styled from "styled-components"
import { RecoilRoot } from "recoil"
import { Link } from "react-router-dom"
import store from "../store/home"
import Pagination from "rc-pagination"
import FavoriteList from "./Favorite"
import WatchList from "./Watchlist"

const nullw500 = require('../images/nullw500.png')

const Addto = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 5em;
    width: 100%;
`;


const DisplayFavorite = (props) => {


    const {popular, loaded} = store
    const {changePage, scrollTop} = props
    const favoriteList = JSON.parse(localStorage.getItem('FavoriteList')) 
    const [inFavorite, setinFavorite] = useState(false)




        return (
            <section>
                {loaded ? <div className="movies-grid">
                        {favoriteList.map(({id, 
                        poster_path, 
                        original_title, 
                        release_date, 
                        vote_average}) => (
                                <div 
                                className="movie-item infos-container" 
                                key={id}>
                                    <Link to={`/movie/${id}`} onClick={scrollTop}>       
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
                <div className="paginator">
                <Pagination
                total={favoriteList.total_results}
                pageSize={20}
                onChange={changePage}
                />
                </div>
            </section>
        )
    
}

export default DisplayFavorite