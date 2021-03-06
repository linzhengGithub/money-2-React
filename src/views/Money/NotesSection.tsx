import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from '../../components/Input';

const Wrapper = styled.section`
  background: #f5f5f5;padding: 14px 16px;font-size: 14px;
`

type Props = {
  value:string;
  onChange:(value:string)=>void
}
const NotesSection: React.FC<Props> = (props) => {
  const note = props.value
  const onChange:ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value)
  }
    return (
      <Wrapper>
        <Input type="text"
               label="备注"
               placeholder="在这里添加备注"
               value={note}
               onChange={onChange}>//从非受控组件变成受控组件
          {/*<span>备注</span>*/}
          {/*<input type="text" placeholder="在这里添加备注"*/}
          {/*       defaultValue={note}//非受控组件*/}
          {/*       ref={refInput}//获取当前的内容*/}
          {/*       onBlur={onBlur}//鼠标移开后再读取内容*/}
          {/*/>*/}
        </Input>
      </Wrapper>
    )
}

export {NotesSection}