import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../useTags';
import {createId} from '../../lib/createId';

const Wrapper = styled.section`
  background: white;padding: 12px 16px;
  display:flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: flex-start;
  >ol{
    margin-left: -12px;
    >li{
      background: #D9D9D9;display: inline-block;margin: 8px 12px;
      border-radius: 18px;padding: 3px 18px;font-size: 14px;
      &.selected{
      background: #F60;
      }
    }
  }
   >button{
    background: none;border: none;padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;margin-top: 8px;
  }
`

type Props = {
  value:number[];
  onChange:(value:number[])=>void
}

const TagsSection:React.FC<Props> = (props) => {
  const {tags,setTags} = useTags()
  const selectedTagIds = props.value
  const onAddTag = () =>{
    const tagName = window.prompt('新增的标签名是:')
    if(tagName!==null && tagName !== ''){
      setTags([...tags,{id:createId(),name:tagName}])
    }
  }
  const onToggleTag = (tagId:number) => {
    const index = selectedTagIds.indexOf(tagId)
    if(index>= 0){
      //如果 tag 已！被选中,那么就复制未被选中的 tag,作为新的selectedTags,使这个被选中的tag取消选中
      props.onChange(selectedTagIds.filter(t => t !== tagId))
    }else{
      //否则就选中这个tag
      props.onChange([...selectedTagIds,tagId])
    }
  }
  const getClass = (tagId:number) => {
    return selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : ''
  }
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag.id}
          onClick={()=>onToggleTag(tag.id)}
          className={getClass(tag.id)}
        >{tag.name}</li>)}
      </ol>
      <button onClick={onAddTag}>新增按钮</button>
    </Wrapper>
  )
}

export {TagsSection}