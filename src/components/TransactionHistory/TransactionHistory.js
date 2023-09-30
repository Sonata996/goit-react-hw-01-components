import React from 'react';
import { SectionHistori, TablrHistori,TheadTr } from './historiTran.styled';
import { TdElem } from './historiTran.styled';

export const RenderTransacHistory = (prop) =>{
    return <TablrHistori>
  <thead>
    <TheadTr>
      <SectionHistori>Type</SectionHistori>
      <SectionHistori>Amount</SectionHistori>
      <SectionHistori>Currency</SectionHistori>
    </TheadTr>
  </thead>

  <tbody>
    {
      prop.transac.map(elem => 
        <TheadTr key={elem.id}>
          <TdElem>{elem.type}</TdElem>
          <TdElem>{elem.amount}</TdElem>
          <TdElem>{elem.currency}</TdElem>
        </TheadTr>
        )
    }
    </tbody>
</TablrHistori>
}