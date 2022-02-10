import React, {useState} from "react"
import styled from "styled-components"
import { Switch, Route } from "react-router-dom"
import {Link} from "react-router-dom"
import {observer} from "mobx-react"
import "../styles/nav.scss"
import SearchBar from "./SearchBar"


const Menu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const ButtonContainer = styled.div`
    padding: 30px;
    text-align: center;
`;

const Button = styled.button`
    list-style: none;
    text-decoration: none;
    color: #01d277;
    font-weight: 700;
    font-size: 18px;
    border: 1px solid #555;
    border-radius: 2px;
    background-color: #555;
    padding: 7px;
    transition: ease-in .2s;
    &:hover, &:focus {
        cursor: pointer;
    }
`;

const CustomizationMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const GenresMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;



const Navigation = ({ showByYear, setYear ,setGenreID ,showGenre, changePage, handleInput, term, scrollTop, clearSearch, showTopRated, showLatest, showFavorite, showWatchlist}) => {
    const genres = {
    genres: [
      {
        id: 28,
        name: "Akcja",
      },
      {
        id: 12,
        name: "Przygodowy",
      },
      {
        id: 16,
        name: "Animacja",
      },
      {
        id: 35,
        name: "Komedia",
      },
      {
        id: 80,
        name: "Kryminał",
      },
      {
        id: 99,
        name: "Dokumentalny",
      },
      {
        id: 18,
        name: "Dramat",
      },
      {
        id: 10751,
        name: "Familijny",
      },
      {
        id: 14,
        name: "Fantasy",
      },
      {
        id: 36,
        name: "Historyczny",
      },
      {
        id: 27,
        name: "Horror",
      },
      {
        id: 10402,
        name: "Muzyczny",
      },
  
      {
        id: 10749,
        name: "Romans",
      },
      {
        id: 878,
        name: "Sci-Fi",
      },
  
      {
        id: 53,
        name: "Thriller",
      },
      {
        id: 10752,
        name: "Wojenny",
      },
      {
        id: 37,
        name: "Western",
      },
    ],
}; 
    
const years = {
    years: [
            {
            year: "2022",
            },
            {
                year: "2021",
            },
            {
                year: "2020",
            },
            {
                year: "2019",
            },
            {
                year: "2018",
            },
            {
                year: "2017",
            },
            {
                year: "2016",
            },
            {
                year: "2015",
            },
            {
                year: "2014",
            },
            {
                year: "2013",
            },
            {
                year: "2012",
            },
            {
                year: "2011",
            },
            {
                year: "2010",
            },
            {
                year: "2009",
            },
        ]
}




    return <header>
        <Menu>
            <Switch>
                <Route exact path = "/" >
                    <SearchBar changePage = { changePage }
                        handleInput = { handleInput }
                        term = { term }
                        scrollTop = { scrollTop }/> 
                </Route> 
            </Switch>
            <ButtonContainer>
                <Link to="/" onClick={clearSearch}><Button>Home</Button></Link>
            </ButtonContainer>
            <ButtonContainer>
                <Link to="/" onClick={showWatchlist}><Button>Do obejrzenia</Button></Link>
            </ButtonContainer>
            <ButtonContainer>
                <Link to="/" onClick={showFavorite}><Button>Ulubione</Button></Link>
            </ButtonContainer>
        </Menu>
        <CustomizationMenu>
            <h1>Sortuj według:</h1>
            <ButtonContainer>
                <Link to="/" onClick={clearSearch}><Button>Popularność</Button></Link>
            </ButtonContainer>
            <ButtonContainer>
                <Link to="/" onClick={showLatest}><Button>Najnowsze</Button></Link>
            </ButtonContainer>
            <ButtonContainer>
                <Link to="/" onClick={showTopRated}><Button>Najlepiej oceniane</Button></Link>
            </ButtonContainer>
        </CustomizationMenu>
        <GenresMenu>
            <h1>Gatunek: </h1>
                {genres.genres.map((genre) => (
                <ButtonContainer onMouseEnter={() => setGenreID(genre.id)}>
                        <Link to="/" onClick={showGenre} ><Button>{genre.name}</Button></Link>
                </ButtonContainer>
                    ))}
            
        </GenresMenu>
        <GenresMenu>
            <h1>Rok: </h1>
                {years.years.map((year) => (
                <ButtonContainer onMouseEnter={() => setYear(year.year)}>
                        <Link to="/" onClick={showByYear} ><Button>{year.year}</Button></Link>
                </ButtonContainer>
                    ))}
            
        </GenresMenu>
    </header>
}

export default Navigation