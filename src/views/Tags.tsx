import Layout from '../components/Layout';
import React from 'react';
import {useTags} from '../useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';

const TagList = styled.ol`
  font-size: 16px;
  background: white;
  >li{
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;

    margin-left: 12px;
    >a{
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px 12px 0;
    }
  }
`
const Button = styled.button`
  border: none;
  font-size: 18px;
  padding: 8px 12px;
  background: #f60;
  border-radius: 4px;
  color: white;
`
const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Space = styled.div`
  height: 16px;
`
function Tags() {
  const {tags,setTags} = useTags()
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id} >
          <Link to={'/tags/' + tag}>
            <span className="onLine">{tag.name}</span>
            <Icon name="right"/>
          </Link>
        </li>)}
      </TagList>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button>新增按钮</Button>
      </Center>
    </Layout>
  );
}
export default Tags