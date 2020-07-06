import styled from 'styled-components';

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
export {CategorySection}