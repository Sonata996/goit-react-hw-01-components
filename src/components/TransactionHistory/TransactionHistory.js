import React from 'react';
import { RenderTypeHistori } from './RenderHistoriElem';
import { SectionHistori, TablrHistori,TheadTr } from './historiTran.styled';

export const RenderTransacHistory = () =>{
    return <TablrHistori>
  <thead>
    <TheadTr>
      <SectionHistori>Type</SectionHistori>
      <SectionHistori>Amount</SectionHistori>
      <SectionHistori>Currency</SectionHistori>
    </TheadTr>
  </thead>

  <tbody>
    <RenderTypeHistori />
    </tbody>
</TablrHistori>
}