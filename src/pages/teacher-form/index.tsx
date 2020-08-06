import './styles.css'

import React, { useState } from 'react'

import warningIcon from '../../assets/icons/warning.svg'
import Input from '../../components/input'
import PageHeader from '../../components/page-header'
import Select from '../../components/select'
import Textarea from '../../components/Textaera'




function TeacherForm() {

  const [scheduledItems, setScheduledItems] = useState([
    { week_day: 0, from: '', to: '' },
  ])

  function onNewScheduleItem() {
    setScheduledItems([
      ...scheduledItems,
      { week_day: 3, from: '10:00 AM', to: '18:00 PM' },
    ])
  }

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
          <Textarea name='bio' label='Bio' />
        </fieldset>
        <fieldset>
          <legend>About the class</legend>
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
          <Input name='cost' label='Hourly cost' />
        </fieldset>
        <fieldset>
          <legend>
            Available time slots
          <button type='button' onClick={onNewScheduleItem}>+ New time slot</button>
          </legend>
          {scheduledItems.map(scheduledItem => {
            return (
              <div key={scheduledItem.week_day} className="schedule-item">
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
                  className='subject'
                />
                <Input
                  name='from'
                  label='From'
                  type='time'
                  className='from'
                />
                <Input
                  name='to'
                  label='To'
                  type='time'
                  className='to'
                />
              </div>
            )
          })}
        </fieldset>
        <footer>
          <p>
            <img src={warningIcon} alt="important warning" />
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