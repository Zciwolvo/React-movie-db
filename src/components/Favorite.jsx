import React, {createContext, useEffect} from "react";
import { atom, useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import movieStore from "../store/movie";



const FavoriteList = (props) => {

    const favoriteList = useRecoilValue(FavoriteState);
    

    useEffect(()=> {
      console.log("List1 ", favoriteList)
      console.log("List2 ", favoriteList.map((text) => (favoriteList.findIndex((listItem) => listItem === text))))
  }, [])

    return (
      <>
        <FavoriteCreator Value={props.Value} Poster={props.poster} Date={props.date} Title={props.title} Votes={props.votes} favoriteList={favoriteList}/>
        {favoriteList.map((favoriteItem) => (
          <FavoriteItem favoritelist={favoriteList} key={favoriteItem.id} item={favoriteItem} />
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

  const FavoriteCreator = (props) => {
    const setFavoriteList = useSetRecoilState(FavoriteState);
    const {details} = movieStore

  
    const addItem = () => {
      setFavoriteList((oldFavoriteList) => [
        ...oldFavoriteList,
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
  


  const FavoriteItem = ({item}) => {
    const [favoriteList, setFavoriteList] = useRecoilState(FavoriteState);
    const index = favoriteList.findIndex((listItem) => listItem === item);
  
  

  
    const deleteItem = (props) => {
      const newList = removeItemAtIndex(favoriteList, index);
  
      setFavoriteList(newList);

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

const FavoriteState = atom({
    key: 'FavoriteState',
    default: [],
    effects: [
        localStorageEffect('FavoriteList'),
      ]
  });


export default FavoriteList