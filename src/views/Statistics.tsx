import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {useRecord} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';

const CategoryWrapper = styled.div`
  background: white;
`;
const Item = styled.div`
  display:flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  padding: 10px 16px;
  >.note{
    margin-right: auto;
    margin-left: 10px;
    color: #999;
  }
`;

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecord();
  const {getName} = useTags();
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category}
                         onChange={value => setCategory(value)}
        />
        <div>
          {records.map(r => {
            return (
              <Item>
                <div className="tags">
                  {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
                </div>
                {r.note && <div className="note">
                  {r.note}
                </div>}
                <div className="amount">
                  ￥{r.amount}
                </div>
                {/*{day(r.createdAt).format('YYYY年MM月DD日')}*/}
              </Item>
            );
          })}
        </div>
      </CategoryWrapper>
    </Layout>
  );
}

export default Statistics;