import {useEffect, useState} from 'react';
import {createId} from './lib/createId';
import {useUpdate} from './hooks/useUpdate';



const useTags = () => { //封装一个自定义Hook
  const [tags,setTags] = useState<{id:number;name:string}[]>([])
  useEffect(()=>{
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]')
    //从一开始就渲染tags，但是浏览器里面的是字符串，我们却要的是对象，所以要把JSON.parse，把字符串转变成对象
    if (localTags.length === 0){
      localTags = [
        {id:createId(),name:'衣'},
        {id:createId(),name:'食'},
        {id:createId(),name:'住'},
        {id:createId(),name:'行'}
      ];
    }
    setTags(localTags)
  },[])//组件挂载执行时
  useUpdate(()=>{
    window.localStorage.setItem('tags',JSON.stringify(tags))
      //把tags转化成字符串保存到浏览器里面
  },[tags])
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
  const updateTag = (id:number,{name}:{name:string}) => {
    setTags(tags.map(tag => tag.id === id ? {id,name:name} : tag))
  }
  const deleteTag = (id:number) => {
    setTags(tags.filter(tag => tag.id !== id))
  }
  const addTag = () => {
    const tagName = window.prompt('需要新增的标签名为:')
    if(tagName !== null && tagName !== ''){
      setTags([...tags,{id:createId(),name:tagName}])
    }
  }
  return {tags,setTags,findTag,addTag,updateTag,findTagIndex,deleteTag}
}

export {useTags}