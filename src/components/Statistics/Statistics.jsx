import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { RenderLIElem } from './StatisticElem';
import data from "./data.json"
import { ComteinerStatistics, ListElemStat,ListActiveStat } from './statistics.styled';

export const Statistics = () => {
    return (<ComteinerStatistics>
  <h2>Upload stats</h2>
  <ListActiveStat>
  {data.map(elem => (
    <ListElemStat key={elem.id} id={elem.id}>
    <span>{elem.label}</span>
    <span>{elem.percentage}</span>
  </ListElemStat>
  ))}
  </ListActiveStat>
</ComteinerStatistics>
    )
}
