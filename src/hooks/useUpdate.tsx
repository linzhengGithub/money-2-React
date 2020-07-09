import {useEffect, useRef} from 'react';


const useUpdate = (fn : () => void,deps:any[]) => {
  const count = useRef(0)
  useEffect(() => {
    count.current += 1
  });//过滤掉一次setItem，防止set进去[]
  useEffect(()=>{
    if(count.current > 1){
      fn()
    }
  }, deps);
}
export {useUpdate}