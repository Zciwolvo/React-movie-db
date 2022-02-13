import React from "react"
import styled from '@emotion/styled'
import { Switch, Route } from "react-router-dom"
import {Link} from "react-router-dom"
import "../styles/nav.scss"
import SearchBar from "./SearchBar"
import GenreDropdown from "./GenreDropdown"
import YearDropdown from "./YearDropdown"
import { ThemeProvider } from 'theme-ui'
import { theme } from "../styles/themes"



const Menu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

const ButtonContainer = styled.div`
    padding: 30px;
    text-align: center;
`;

const Button = styled.button`
    list-style: none;
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;
    color: #01d277;
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
    margin: auto;
    width: 40vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

const Search = styled.div``;
const Navi = styled.div`
display: flex;
flex-direction: row;
`;



const Navigation = ({setYear ,setGenreID ,showGenre, changePage, handleInput, term, scrollTop, clearSearch, showTopRated, showLatest, showFavorite, showWatchlist}) => {
    
    





    return <header>
      <ThemeProvider theme={theme}>
        <Menu >
          <Search>
              <Switch>
                  <Route exact path = "/React-movie-db" >
                      <SearchBar changePage = { changePage }
                          handleInput = { handleInput }
                          term = { term }
                          scrollTop = { scrollTop }/> 
                  </Route> 
              </Switch>
            </Search>
            <Navi>
              <ButtonContainer>
                  <Link to="/React-movie-db" onClick={clearSearch}><Button >Home</Button></Link>
              </ButtonContainer>
              <ButtonContainer>
                  <Link to="/React-movie-db" onClick={showWatchlist}><Button>Do obejrzenia</Button></Link>
              </ButtonContainer>
              <ButtonContainer>
                  <Link to="/React-movie-db" onClick={showFavorite}><Button>Ulubione</Button></Link>
              </ButtonContainer>
            </Navi>
        </Menu>
        <CustomizationMenu>
            <ButtonContainer>
                <Link to="/React-movie-db" onClick={clearSearch}><Button>Popularność</Button></Link>
            </ButtonContainer>
            <ButtonContainer>
                <Link to="/React-movie-db" onClick={showLatest}><Button>Najnowsze</Button></Link>
            </ButtonContainer>
            <ButtonContainer>
                <Link to="/React-movie-db" onClick={showTopRated}><Button>Najlepiej oceniane</Button></Link>
            </ButtonContainer>
        </CustomizationMenu>
        <GenresMenu>
            <GenreDropdown setGenre={setGenreID} showGenre={showGenre}/>
            <YearDropdown setYear={setYear}/>
            <ButtonContainer>
                <Link to="/React-movie-db" onClick={showGenre}><Button>Zaaplikuj filtry</Button></Link>
            </ButtonContainer>
        </GenresMenu>
        </ThemeProvider>
    </header>
}

export default Navigation