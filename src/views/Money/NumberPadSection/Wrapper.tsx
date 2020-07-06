import styled from 'styled-components';

const Wrapper = styled.section`
  display:flex;
  flex-direction: column;
  >.output{
    background: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
  >.pad{
    >button{
      font-size: 18px;width: 20%;line-height:64px;border:none;
      float: left;
      &.ok{height: 128px;float: right;}
      &:nth-child(1){
        background: #f2f2f2;
      }
      &:nth-child(2),
      &:nth-child(6){
        background: #E0E0E0;
      }
      &:nth-child(3),
      &:nth-child(7),
      &:nth-child(11){
        background: #D3D3D3;
      }
      &:nth-child(4),
      &:nth-child(8),
      &:nth-child(12),
      &:nth-child(16){
        background: #C1C1C1;
      }
      &:nth-child(5),
      &:nth-child(9),
      &:nth-child(13),
      &:nth-child(17){
        background: #B7B7B8;
      }
      &:nth-child(10),
      &:nth-child(14),
      &:nth-child(18){
        background: #AAA8AA;
      }
      &:nth-child(19){
        background: #A9A9A9;

      }
      &:nth-child(15){
        background: #9A9A9A;
      }
    }
  }
`;
export {Wrapper}