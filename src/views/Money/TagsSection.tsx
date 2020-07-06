import styled from 'styled-components';
import React, {useState} from 'react';

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

const TagsSection:React.FC = (props) => {
  const [tags,setTags] = useState<string[]>(['衣','食','住','行'])
  const [selectedTags,setSelectedTags] = useState<string[]>([])
  const onAddTag = () =>{
    const tagName = window.prompt('新增的标签名是:')
    if(tagName!==null){
      setTags([...tags,tagName])
    }
  }
  const onToggleTag = (tag:string) => {
    const index = selectedTags.indexOf(tag)
    if(index>= 0){
      //如果 tag 已！被选中,那么就复制未被选中的 tag,作为新的selectedTags,使这个被选中的tag取消选中
      setSelectedTags(selectedTags.filter(t => t !== tag))
    }else{
      //否则就选中这个tag
      setSelectedTags([...selectedTags,tag])
    }
  }
  const getClass = (tag:string) => {
    return selectedTags.indexOf(tag) >= 0 ? 'selected' : ''
  }
  return (
    <Wrapper>
      <ol>
        {tags.map(tag => <li
          key={tag}
          onClick={()=>onToggleTag(tag)}
          className={getClass(tag)}
        >{tag}</li>)}
      </ol>
      <button onClick={onAddTag}>新增按钮</button>
    </Wrapper>
  )
}

export {TagsSection}