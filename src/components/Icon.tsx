import React from 'react';
// require('icons/money.svg');
// require('icons/chart.svg');
// require('icons/tag.svg');
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}
//用上面两行代码导入一个icons目录

type Props = {
  name ?: string
}

const Icon = (props:Props) => {
  return(
    <svg className="icon">
      {props.name && <use xlinkHref={'#' + props.name}/>}
    </svg>
  )
}
export default Icon