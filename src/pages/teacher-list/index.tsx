import './styles.css'

import React from 'react'

import PageHeader from '../../components/page-header'







function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the available Proffies" >
        <form action="" id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Discipline</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week-day">Week day</label>
            <input type="text" id="week-day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Time</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>
    </div>
  )
}

export default TeacherList