import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';


const TagsSection = styled.section`
  background: white;padding: 12px 16px;
  >ol{
    margin-left: -12px;
    >li{
      background: #D9D9D9;display: inline-block;margin: 8px 12px;
      border-radius: 18px;padding: 3px 18px;font-size: 14px;
    }
  }
   >button{
    background: none;border: none;padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;margin-top: 8px;
  }
`
const NotesSection = styled.section`
  background: #f5f5f5;padding: 0 16px;font-size: 14px;
  >label{
    display: flex;align-items: center;
    >span{
      margin-right: 16px;white-space: nowrap;
    }
    >input{
      display: block;width:100%;height: 72px;
      background: none;border: none;
    }
  }
`
const CategorySection = styled.section`
  font-size: 24px;
  >ul{
    display: flex;background: #c4c4c4;
    >li{
    width: 50%;text-align: center;
    padding: 16px 0;position: relative;
    &.selected::after{
      content: '';display:block;background: #333;
      height: 3px;position: absolute;bottom: 0px;
      width: 100%;left: 0px;
      }
    }
  }
  
`
const NumberPadSection = styled.section`
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
`

function Money() {
  return (
    <Layout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增按钮</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="在这里添加备注"/>
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入 </li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div className="output">100</div>
        <div className="pad clearfix">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>x</button>
          <button className="ok">OK</button>
          <button>0</button>
          <button>.</button>
          <button>%</button>
          <button>/</button>
        </div>
      </NumberPadSection>
    </Layout>
  );
}
export default Money