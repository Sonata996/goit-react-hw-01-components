import React from 'react';
import transactions from './transactions.json'
import { TheadTr,TdElem } from './historiTran.styled';

export const RenderTypeHistori= () =>{
    return transactions.map(elem => 
    <TheadTr key={elem.id}>
      <TdElem>{elem.type}</TdElem>
      <TdElem>{elem.amount}</TdElem>
      <TdElem>{elem.currency}</TdElem>
    </TheadTr>
    )
}