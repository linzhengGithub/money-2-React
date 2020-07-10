import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {useRecord} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';
const CategoryWrapper = styled.div`
  background: white;
`

function Statistics() {
  const [category,setCategory] = useState<'-' | '+'>('-')
  const {records} = useRecord()
  const {getName} = useTags()
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category}
                         onChange={value => setCategory(value)}
        />
        <div>
          {records.map(r =>{
            return(
              <div>
                {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
                <hr/>
                {r.amount}
                <hr/>
                {day(r.createdAt).format('YYYY年MM月DD日')}
              </div>
              )
          })}
        </div>
      </CategoryWrapper>
    </Layout>
  );
}
export default Statistics