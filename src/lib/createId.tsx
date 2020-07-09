let id = parseInt(window.localStorage.getItem('idMax') || '0');
  //把字符串转变成数字
const createId = () => {
  id += 1;
  window.localStorage.setItem('idMax',JSON.stringify(id))
  return id;
}
export {createId}


