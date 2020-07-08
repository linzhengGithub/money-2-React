import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategorySection';
import {NotesSection} from './Money/NotesSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`

type Category = '-' | '+'
function Money() {
  const [selected,setSelected] = useState({
    tagIds : [] as number[],
    note : '',
    category : '-' as Category,
    amount: 0
  })
  const onChange = (obj : Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }
  return (
    <MyLayout>
      {selected.tagIds.join(',')}
      {/*<hr/>*/}
      {/*{selected.note}*/}
      {/*<hr/>*/}
      {/*{selected.category}*/}
      {/*<hr/>*/}
      {/*{selected.amount}*/}
      <TagsSection value={selected.tagIds}
                   onChange={(tagIds) => onChange({tagIds})}
      />
      <NotesSection value={selected.note}
                    onChange={(note) => onChange({note})}
      />
      <CategorySection value={selected.category}
                       onChange={(category) => onChange({category})}
      />
      <NumberPadSection value={selected.amount}
                        onChange={(amount) => onChange({amount})}
                        onOk={()=>{}}
      />
    </MyLayout>
  );
}
export default Money