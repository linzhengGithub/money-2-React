import {useState} from 'react';
import {createId} from './lib/createId';

const defaultTags = [
  {id:createId(),name:'衣'},
  {id:createId(),name:'食'},
  {id:createId(),name:'住'},
  {id:createId(),name:'行'}
]
const useTags = () => {
  const [tags,setTags] = useState<{id:number;name:string}[]>(defaultTags)
  const findTag = (id:number) => tags.filter(tag => tag.id === id)[0]
  const findTagIndex = (id:number) => {
    let result = -1;
    for(let i = 0;i < tags.length;i++){
      if (tags[i].id === id){
        result = i;
        break;
      }
    }
    return result;
  }
  const updateTag = (id:number,obj:{name:string}) => {
    const index = findTagIndex(id)//找到对应id
    const tagsClone = JSON.parse(JSON.stringify(tags))//深拷贝tags得到tagsClone（先把tags变成字符，再把它变成对象）
    tagsClone.splice(index,1,{id:id,name:obj.name})
    //把 tagsClone 的 第index个删掉，换成id还是原来的id，name变成了新的obj.name
    setTags(tagsClone)
  }
  return {tags,setTags,findTag,updateTag,findTagIndex}
}

export {useTags}