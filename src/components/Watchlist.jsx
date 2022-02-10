import React, {createContext, useEffect} from "react";
import { atom, useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import movieStore from "../store/movie";



const WatchList = (props) => {

    const watchList = useRecoilValue(WatchlistState);
    

    useEffect(()=> {
      console.log("List1 ", watchList)
      console.log("List2 ", watchList.map((text) => (watchList.findIndex((listItem) => listItem === text))))
  }, [])

    return (
      <>
        <WatchlistCreator Value={props.Value} Poster={props.poster} Date={props.date} Title={props.title} Votes={props.votes} watchList={watchList}/>
        {watchList.map((watchlistItem) => (
          <WatchlistItem favoritelist={watchList} key={watchlistItem.id} item={watchlistItem} />
        ))}
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

  
    const addItem = () => {
      setWatchList((oldWatchList) => [
        ...oldWatchList,
        {
          id: props.Value,
          poster: details.poster_path,
          release_date: details.release_date,
          original_title: details.title,
          vote_average: details.vote_average,
          isComplete: false,
        },
      ]);
    };

    return (
      <div>
        <button onClick={addItem} >Dodaj do ulubionych</button>
      </div>
    );
  }
  

  const WatchlistItem = ({item}) => {
    const [watchList, setWatchList] = useRecoilState(WatchlistState);
    const index = watchList.findIndex((listItem) => listItem === item);
  
  

  
    const deleteItem = (props) => {
      const newList = removeItemAtIndex(watchList, index);
  
      setWatchList(newList);

    };
  
    return (
      <div>
        <button onClick={deleteItem}>X</button>
      </div>
    );
  }
  

  const removeItemAtIndex = (arr, index) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }

const WatchlistState = atom({
    key: 'WatchlistState',
    default: [],
    effects: [
        localStorageEffect('WatchList'),
      ]
  });


export default WatchList