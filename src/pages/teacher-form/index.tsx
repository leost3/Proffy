import './styles.css'

import React from 'react'

import warningIcon from '../../assets/icons/warning.svg'
import Input from '../../components/input'
import PageHeader from '../../components/page-header'



function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Teaching is always a wonderful idea!"
        description="The first step is to fulfill the forms"
      />
      <main>
        <fieldset>
          <legend>Your data</legend>
          <Input name='name' label='name' />
          <Input name='avatar' label='Avatar' />
          <Input name='whatsapp' label='Whatsapp' />
        </fieldset>
        <fieldset>
          <legend>About the class</legend>
          <Input name='subject' label='Subject' />
          <Input name='cost' label='Hourly cost' />
        </fieldset>
        <footer>
          <p>
            <img src={warningIcon} alt="important warning"/>
            Important! <br />
            Fill all the fields
          </p>
          <button type='button'>Save</button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm