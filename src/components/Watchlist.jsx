import React, {useState, useEffect} from "react";
import { atom, useSetRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import movieStore from "../store/movie";

const empty_heart = require('../images/tv_empty.png')
const full_heart = require('../images/tv_full.png')

const TV = styled.img`
  width: 3em;
  height: 3em;
`;


const WatchList = (props) => {

    const watchList = useRecoilValue(WatchlistState);
    const [inWatchList, setinWatchList] = useState(false)
    const {details} = movieStore
    

    useEffect(()=> {
      const StateList = watchList.map((List) => details.id === List.id)
      if (StateList.indexOf(true) > -1){
        setinWatchList(true)
      }
      console.log("List1 ", watchList)
      console.log("List2 ", watchList.map((text) => (watchList.findIndex((listItem) => listItem === text))))
  }, [])

    return (
      <>
        <WatchlistCreator watchList={watchList} inWatchList={inWatchList} setinWatchList={setinWatchList}/>
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

  const WatchlistCreator = (props) => {
    const setWatchList = useSetRecoilState(WatchlistState);
    const {details} = movieStore

    const deleteItem = () => {
      props.setinWatchList(!props.inWatchList)
      const newList = [...props.watchList];
      const index = newList.findIndex(List => List.id === details.id)
      console.log("index ", index)
      newList.splice(index, 1);
      setWatchList(newList)
    }

    
  
    const addItem = () => {
      props.setinWatchList(!props.inWatchList)

      setWatchList((oldWatchList) => [
        ...oldWatchList,
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
        <TV onClick={props.inWatchList === false ? addItem : deleteItem} src={props.inWatchList === false ? empty_heart : full_heart}/>
      </div>
    );
  }
  
  

const WatchlistState = atom({
    key: 'WatchlistState',
    default: [],
    effects: [
        localStorageEffect('WatchList'),
      ]
  });


export default WatchList