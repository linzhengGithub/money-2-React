import React from 'react';
import {useTags} from '../useTags';
import {useParams} from 'react-router-dom'
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';

type Params = {
  id:string
}
const Topbar = styled.header`
  display:flex;
  justify-content: space-between;
  line-height: 20px;
  padding: 14px;
  background: white;
`
const InputWrapper = styled.div`
background: white;
padding: 0 16px;
margin-top: 8px;
`

const Tag:React.FC = () =>{
  const {findTag} = useTags()
  let {id} =  useParams<Params>()
  const tag = findTag(parseInt(id))
  return(
    <Layout>
      <Topbar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      <InputWrapper>
        <label>
          <Input type="text" label="标签名" placeholder={tag.name}/>
        </label>
      </InputWrapper>
      <div>
        <Button>删除标签</Button>
      </div>
    </Layout>
  )
}
export {Tag}