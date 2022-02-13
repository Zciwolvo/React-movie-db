import React, {useState} from "react";
import styled from "styled-components";

import DropdownArrow from "../images/dropboxarrow.png"

const { innerWidth: windowWidth } = window;


const SelectboxboxAbove = styled.div`
  transition: all 0.5s;
  width: 220px;
  height: 48px;
  position: absolute;
  background-color: grey;
  z-index: 12;
  border-color: black;
  border-radius: 10px;
  p{
    padding: 10px 10px;
    background: transparent;
    border: 0;  
    color: #03ce76;
    font-size: 20px;
  }
  @media (max-width: 800px) {
      width: ${windowWidth*0.7}px;
      text-align: left;
    }
`;

const Selectboxbox = styled.div`
  transition: all 0.5s;  
  box-shadow: -4px 8px 6px #0000001f;
  width: 220px;
  height: 48px;
  border-radius: 10px;
  position: relative;
  z-index: 15;
  margin: 1em auto 0 auto;
  @media (max-width: 800px) {
      width: ${windowWidth*0.7}px;
      text-align: left;
      margin: 1em 0 0 0;
    }
`;

const Selectboxselecteditem = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background-color: grey;
  vertical-align: middle;
  font-family: Rubik;
  font-size: 1em;
  z-index: 6;
  transition: all 0.5s;
`;

const Selectboxitems = styled.div`
transition: all 0.3s ease-in;
display: block;
z-index: 1;
div {
  transition: all 0.5s;
  box-shadow: -4px 8px 6px #0000001f;
  z-index: 2;
  height: 50px;
  background-color: grey;
  padding: 0;
  padding-left: 20px;
  z-index: 5;
  p{
    padding: 3px 10px;
        background: transparent;
        border: 0;
        border-bottom: 1px solid #03ce76;
        color: #03ce76;
        font-size: 20px;
  }
  &:last-child {
    border-radius: 0 0 10px 10px;
  }
}
`;

const Selectboxarrow = styled.img`
  width: 24px;
  height: 24px;
  top: 10px;
  margin: 0;
  padding: 0;
  display: inline-block;
  position: absolute;
  right: 15px;
  transition: all 0.3s ease-in;
`;

const GenreDropdown = ({Select, setGenre}) => {

  const [dropdown, setDropdown] = useState(false)

  const dropdownstate = (dropdown) => {
    setDropdown(!dropdown)
  }
  
  const items=[
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
        name: "SciFi",
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
  ];

  const [selecteditem, setSelectedItem] = useState("Wybierz Gatunek")

  const setVariables = (name,id) => {
    setSelectedItem(name)
    setGenre(id)
  }

  const passText = (e) => {
    Select(selecteditem)
  }


  return(
  <Selectboxbox props={passText} onClick={() => dropdownstate(dropdown)} style={{borderRadius: dropdown ? "10px 10px 0 0" : "10px" }}>
      <SelectboxboxAbove onClick={() => dropdownstate(dropdown)} 
      style={{borderRadius: dropdown ? "10px 10px 0 0" : "10px" }}>
        <Selectboxarrow src={DropdownArrow} style={{transform: dropdown ? 'rotate(-180deg)' : 'rotate(0)'}}/>
        <p>{selecteditem}</p>
      </SelectboxboxAbove>
      
        <Selectboxselecteditem style={{borderRadius: dropdown ? "10px 10px 0 0" : "10px" }}>
          <p>{selecteditem}</p>
        </Selectboxselecteditem>
        
        <Selectboxitems 
        
        style={{transform: dropdown ? "translateY(0em)" : "translateY(-3em)", visibility: dropdown ? "visible" : "hidden"}}>
        {items.map((item) => (
                <div
                  style={{height: dropdown ? "48px" : "0"}}
                  key={item.id}
                  onClick={() => setVariables(item.name,item.id)}
                  
                >
                  <p style={{visibility: dropdown ? "visible" : "hidden"}}>{item.name}</p>
                </div>
              ))}
        </Selectboxitems>
      </Selectboxbox>
  )
}

export default GenreDropdown;