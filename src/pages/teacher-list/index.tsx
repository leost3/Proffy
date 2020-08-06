import './styles.css'

import React from 'react'

import Input from '../../components/input'
import PageHeader from '../../components/page-header'
import Select from '../../components/select'
import TeacherItem from '../../components/TeacherItem'




function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the available Proffies" >
        <form id="search-teachers">
          <Select
            options={[
              { value: 'Arts', label: 'Arts' },
              { value: 'Design', label: 'Design' },
              { value: 'Web Development', label: 'Web Development' },
              { value: 'Photograph', label: 'Photograph' },
              { value: 'Robotics', label: 'Robotics' },
              { value: 'Entrepeneurship', label: 'Entrepeneurship' },
            ]}
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
          />
          <Input type='time' label='Time' name='time' />

        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList