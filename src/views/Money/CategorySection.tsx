import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
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
const CategorySection:React.FC = () => {
  const [category,setCategory] = useState('-')
  const [categoryList] = useState<('-' | '+')[]>(['-','+'])
  const categoryMap = {'-':'支出','+':'收入'}
  return(
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li key={c}
            className={category === c ? 'selected' : ''}
              onClick={()=>{setCategory(c)}}
          >{categoryMap[c]}</li>
        )}
      </ul>
    </Wrapper>
  )
}

export {CategorySection}