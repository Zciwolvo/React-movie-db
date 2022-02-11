import React, {useEffect, useState} from "react";
import { atom, useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import movieStore from "../store/movie";

const empty_heart = require('../images/empty_heart.png')
const full_heart = require('../images/full_heart.png')

const Heart = styled.img`
  width: 3em;
  height: 3em;
`;


const FavoriteList = (props) => {

    const favoriteList = useRecoilValue(FavoriteState);
    const {details} = movieStore

    useEffect(()=> {
      const StateList = favoriteList.map((List) => details.id == List.id)
      if (StateList.indexOf(true) > -1){
        props.setinFavorite(true)
      }
      console.log("List1 ", favoriteList)
      console.log("inFavorite ", props.inFavorite)
      
  }, [])


    return (
      <>
        <FavoriteCreator setinFavorite={props.setinFavorite} inFavorite={props.inFavorite} favoriteList={favoriteList}/>
      </>
    );
  }

  const localStorageEffect = key => ({setSelf, onSet}) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }
  
    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

  const FavoriteCreator = (props) => {
    const setFavoriteList = useSetRecoilState(FavoriteState);
    const {details} = movieStore

    const deleteItem = () => {
      props.setinFavorite(!props.inFavorite)
      const newList = [...props.favoriteList];
      const index = newList.findIndex(List => List.id == details.id)
      console.log("index ", index)
      newList.splice(index, 1);
      setFavoriteList(newList)
    }

    
  
    const addItem = () => {
      props.setinFavorite(!props.props.inFavorite)

      setFavoriteList((oldFavoriteList) => [
        ...oldFavoriteList,
        {
          id: details.id,
          poster_path: details.poster_path,
          release_date: details.release_date,
          original_title: details.title,
          vote_average: details.vote_average,
          isComplete: false,
        },
      ]);
    };
    return (
      <div>
        <Heart onClick={props.inFavorite === false ? addItem : deleteItem} src={props.inFavorite === false ? empty_heart : full_heart}/>
      </div>
    );
  }
  

  

  const removeItemAtIndex = (arr, index) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }

const FavoriteState = atom({
    key: 'FavoriteState',
    default: [],
    effects: [
        localStorageEffect('FavoriteList'),
      ]
  });


export default FavoriteList