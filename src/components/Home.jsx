import React from "react"
import Popular from "./Popular"
import DisplayFavorite from "./FavoriteListDisplay"
import DisplayWatchlist from "./WatchlistDisplay"
import Search from "./Search"
import "../styles/homepage.scss"
import 'rc-pagination/assets/index.css'
import "../styles/pagination.scss"
const Home = (props) => {
    const {Watchlist, Favorite ,term, handleInput} = props
    return(Watchlist === false ? (Favorite === false ? 
        (<div className="relative">{term.length === 0 ? <Popular {...props} /> : <Search {...props} />}</div>)
         : 
        (<div className="relative">{term.length === 0 ? <DisplayFavorite {...props} /> : <Search {...props} />}</div>))
        : (<div className="relative">{term.length === 0 ? <DisplayWatchlist {...props} /> : <Search {...props} />}</div>))
}

export default Home