import React, {Component} from "react"
import styled from "styled-components"
import {observer} from "mobx-react"
import movieStore from "../store/movie"
import "../styles/movie.scss"
import FavoriteList from "./Favorite"
import Watchlist from "./Watchlist"
import { RecoilRoot } from "recoil"

const nullw500 = require('../images/nullw500.png')

const Addto = styled.div`
    display: flex;
    flex-direction: row;
    width: 10em;
    justify-content: space-around;
`;

const Movie = observer(class extends Component {
    componentDidMount() {
        movieStore.fetchAll(this.props.id)
    }

    render() {
        const {loaded, details, credits, recommendations} = movieStore
        const director = credits.crew ? credits.crew.filter(i => i.job === 'Director') : null
        let direc = credits.crew ? director[0] : null
        let direcName = direc ? direc.name : null
        return <div className="relative">
            {loaded && (details.length !== 0 && credits.length !== 0) ? 
            <>
            <div className="movie-grid">
                <div className="movie-poster">
                    <img src={details.poster_path ? 
                        `https://image.tmdb.org/t/p/w500${details.poster_path}` : 
                        `${nullw500}`} 
                        alt="Movie poster" />
                </div>
                <div className="infos-grid">
                    <div className="movie-title relative">
                    {details.title}</div>
                    <div className="movie-infos">
                        <span className="movie-date">{details.release_date}</span>
                        <span className="movie-vote">{details.vote_average}</span>
                        <span className="movie-runtime">
                        {Math.floor(details.runtime / 60)}h {details.runtime % 60}m</span>
                    </div>
                    <div className="movie-genres">
                        {details.genres ? details.genres.map(({id, name}, i) => <span key={id}>
                        {i !== details.genres.length - 1 ? `${name}, ` :
                         ` ${name}`}
                        </span>) : null}
                    </div>
                    <div className="movie-tagline">{details.tagline ? 
                        details.tagline : null}</div>
                    
                    <div className="movie-overview">{details.overview}</div>
                    <div className="movie-director">
                        <span className="director-job">Reżyser</span>
                        <span className="director-name">{direcName}</span>
                    </div>
                    <div>
                        <span className="main-cast">Obsada</span>
                        {loaded ? credits.cast.map((cast, i) => (i < 11) ? 
                        <span key={cast.cast_id}>
                        {i !== 10 ? `${cast.name}, ` : 
                        `${cast.name}`}
                        </span> : null) : null}
                    </div>
                    <RecoilRoot>
                        <Addto>
                            <FavoriteList/>
                            <Watchlist/>
                        </Addto>
                    </RecoilRoot>
                </div>

            
            </div>
            </>
            : <div className="loading">Loading</div>}
        </div>
    }
})

export default Movie