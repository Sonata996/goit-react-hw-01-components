import React from 'react';
import { ComteinerStatistics, ListElemStat,ListActiveStat } from './statistics.styled';

export const Statistics = (prop) => {
    return (<ComteinerStatistics>
      {prop.title ? <h2>Upload stats</h2> : ''}
  <ListActiveStat>
  {prop.stat.map(elem => (
    <ListElemStat key={elem.id} id={elem.id}>
    <span>{elem.label}</span>
    <span>{elem.percentage}</span>
  </ListElemStat>
  ))}
  </ListActiveStat>
</ComteinerStatistics>
    )
}
