import './styles.css'

import React from 'react'

import Input from '../../components/input'
import PageHeader from '../../components/page-header'
import TeacherItem from '../../components/TeacherItem'



function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the available Proffies" >
        <form id="search-teachers">
          <Input label='Discipline' name='subject' />
          <Input label='Day of the week' name='week_day' />
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