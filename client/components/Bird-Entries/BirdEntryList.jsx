import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EntryItem from './EntryItem.jsx';

const BirdEntryList = ({ birdEntries, handleCardClick }) => {

  const [displayArr, setDisplayArr] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setDisplayArr(birdEntries.slice(0, 3));
  }, [birdEntries]);

  var handleRightClick = () => {
    if (birdEntries[birdEntries.length - 1] !== displayArr[displayArr.length - 1]) {
      setDisplayArr(birdEntries.slice(counter + 1, counter + 4));
      setCounter(counter + 1);
    }
  }


  var handleLeftClick = () => {
    if (birdEntries[0] !== displayArr[0]) {
      setDisplayArr(birdEntries.slice(counter - 1, counter + 2));
      setCounter(counter - 1);
    }
  }

  return (
    <div className="bird-list d-flex justify-content-around flex-row">
      {
        birdEntries.length > 3 &&
        <button className="paddle-button" onClick={handleLeftClick}>&#9664;</button>
      }
      {birdEntries &&
        displayArr.map(function (item, index) {
          return <EntryItem key={index} photo={item.birdpic_url} notes={item.notes} city={item.city_sighted} state={item.state_sighted} name={item.bird} handleCardClick={handleCardClick} />
        })
      }
      {
        birdEntries.length > 3 &&
        <button className="paddle-button" onClick={handleRightClick}>&#9654;</button>
      }
    </div>
  )
}

export default BirdEntryList;