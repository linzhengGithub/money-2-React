import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategorySection';
import {NotesSection} from './Money/NotesSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {Simulate} from 'react-dom/test-utils';
import {useRecord} from '../hooks/useRecords';


const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`

type Category = '-' | '+'
const defaultFromDate = {
  tagIds : [] as number[],
  note : '',
  category : '-' as Category,
  amount: 0
}
function Money() {
  const [selected,setSelected] = useState(defaultFromDate)
  const onChange = (obj : Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    })
  }
  const {addRecord} = useRecord()
  const submit = () => {
    addRecord(selected)
    alert('保存成功')
    setSelected(defaultFromDate)
  }
  return (
    <MyLayout>
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
                        onOk={submit}
      />
    </MyLayout>
  );
}
export default Money