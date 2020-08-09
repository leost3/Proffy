import './styles.css'

import React, { FormEvent, useState } from 'react'

import Input from '../../components/input'
import PageHeader from '../../components/page-header'
import Select from '../../components/select'
import TeacherItem, { TeacherType } from '../../components/TeacherItem'
import api from '../../services/api'



function TeacherList() {

  const [inputState, setInputState] = useState({
    subject: '',
    week_day: '',
    time: ''
  })

  const [teachers, setTeachers] = useState([])

  async function searchTeachers(e: FormEvent) {
    e.preventDefault()

    const response = await api.get('classes', {
      params: {
        ...inputState
      }
    })

    setTeachers(response.data)
  }

  const teacher = {
    id: 1,
    avatar: "https://avatars2.githubusercontent.com/u/36447683?s=400&u=493d7bacc1f21021efde8da04230c81f2a015f09&v=4",
    bio: "asdas",
    cost: 2,
    name: "leo",
    subject: "javascript",
    whatsapp: 2
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the available Proffies" >
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            options={[
              { value: 'Arts', label: 'Arts' },
              { value: 'Design', label: 'Design' },
              { value: 'Web Development', label: 'Web Development' },
              { value: 'Photograph', label: 'Photograph' },
              { value: 'Robotics', label: 'Robotics' },
              { value: 'Entrepeneurship', label: 'Entrepeneurship' },
            ]}
            onChange={e => setInputState({ ...inputState, [e.target.id]: e.target.value })}
            value={inputState.subject}
            name='subject'
            label='Subject'
          />
          <Select
            options={[
              { value: '0', label: 'Monday' },
              { value: '1', label: 'Tuesday' },
              { value: '2', label: 'Wednesday' },
              { value: '3', label: 'Thursday' },
              { value: '4', label: 'Friday' },
              { value: '5', label: 'Saturday' },
              { value: '6', label: 'Sunday' },
            ]}
            name='week_day'
            label='Day of the week'
            onChange={e => setInputState({ ...inputState, [e.target.id]: e.target.value })}
            value={inputState.week_day}
          />
          <Input
            type='time'
            label='Time'
            name='time'
            onChange={e => setInputState({ ...inputState, [e.target.id]: e.target.value })}
            value={inputState.time}
          />

          <button type='submit'>
            Search
          </button>
          {JSON.stringify(inputState)}
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: TeacherType) => {
          return <TeacherItem
            key={teacher.id}
            teacher={teacher}
          />
        })}
        <TeacherItem
          teacher={teacher}
        />
      </main>
    </div>
  )
}

export default TeacherList