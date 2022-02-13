import React, { useEffect, useState } from 'react';
import { observer } from "mobx-react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Movie from "./components/Movie";
import "./styles/main.scss";
import { ThemeProvider } from 'theme-ui'
import { theme } from './styles/themes';


const App = observer((props) => {


    useEffect(()=> {
        console.log("Pop", props.store.popular)
        props.store.fetchPopular("popular", props.store.currentPage)
        setCurrent("popular")
    }, [])

    const handleInput = (e) => {
        let term = props.store.term = e.target.value
        if (term === 0) {
            props.store.fetchPopular("popular", props.store.currentPage)
        } else {
            props.store.fetchSearch(term, props.store.currentPage)
        }
    }

    const changePage = (e) => {
        props.store.currentPage = e
        console.log("page", e)
        if (props.store.term.length === 0) {
            props.store.fetchPopular(current, props.store.currentPage)
        } else {
            props.store.fetchSearch(props.store.term, props.store.currentPage)
        }
        scrollTop()
    }

    const clearSearch = () => {
        props.store.term = ""
        setFavorite(false)
        setWatchlist(false)
        props.store.currentPage = 1
        props.store.fetchPopular("popular",props.store.currentPage)
        setCurrent("popular")
    }

    const showTopRated = () => {
        props.store.term = ""
        props.store.currentPage = 1
        props.store.fetchPopular("top_rated",props.store.currentPage)
        setFavorite(false)
        setWatchlist(false)
        setCurrent("top_rated")
    }

    const showLatest = () => {
        props.store.term = ""
        props.store.currentPage = 1
        props.store.fetchPopular("upcoming",props.store.currentPage)
        setFavorite(false)
        setWatchlist(false)
        setCurrent("latest")
    }

    const showFavorite = () => {
        props.store.term = ""
        props.store.currentPage = 1
        setFavorite(true)
        setWatchlist(false)
    }

    const showWatchlist = () => {
        props.store.term = ""
        props.store.currentPage = 1
        setWatchlist(true)
        setFavorite(false)
    }

    const showGenre = () => {
        props.store.term = ""
        props.store.currentPage = 1
        setWatchlist(false)
        setFavorite(false)
        props.store.fetchGenre(genreID, year, props.store.currentPage)
    }

    const showByYear = () => {
        props.store.term = ""
        props.store.currentPage = 1
        setWatchlist(false)
        setFavorite(false)
        props.store.fetchByYear(year, props.store.currentPage)
    }


    const scrollTop = () => {
        window.scrollTo(0, 0)
    }
    

        const [genreID, setGenreID] = useState("")
        const [year, setYear] = useState("")

        const { popular, searchResults, loaded, term } = props.store

        const [Favorite, setFavorite] = useState(false)
        const [Watchlist, setWatchlist] = useState(false)
        const [current, setCurrent] = useState("popular")

        return( 
        <div className = "relative" >
            <ThemeProvider theme={theme}>
                <Navigation setCurrent={setCurrent} showByYear={showByYear} setYear={setYear} setGenreID={setGenreID} showGenre={showGenre} showWatchlist={showWatchlist} showFavorite={showFavorite} handleInput = {handleInput} changePage = {changePage} term = {term} clearSearch = { clearSearch } showTopRated = {showTopRated} showLatest = {showLatest}/> 
            </ThemeProvider>
            <Switch>
                <Route exact path = "/React-movie-db" >
                    <Home changePage = { changePage }
                        handleInput = { handleInput }
                        term = { props.store.term }
                        scrollTop = { scrollTop }
                        Favorite = {Favorite}
                        Watchlist = {Watchlist}
                        /> 
                </Route> 
            </Switch>
            
            <Switch> {
                !loaded ? null : !term ?
                    popular.results.map(i => <Route path = {`/React-movie-db/movie/${i.id}`} key = { i.id } >
                        <Movie  id = { i.id } scrollTop = { scrollTop }/>
                        </Route> ) :
                    searchResults.results.map(i => < Route path = {`/React-movie-db/movie/${i.id}`}
                        key = { i.id } >
                        <Movie  id = { i.id } scrollTop = { scrollTop }/> 
                        </Route> )
            } 
            </Switch>
            </div>
        )
    }
)

export default App