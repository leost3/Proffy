import './styles.css'

import React, { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'

import warningIcon from '../../assets/icons/warning.svg'
import Input from '../../components/input'
import PageHeader from '../../components/page-header'
import Select from '../../components/select'
import Textarea from '../../components/Textaera'
import api from '../../services/api'




function TeacherForm() {


  const history = useHistory()
  const [inputState, setInputState] = useState({
    name: '',
    avatar: '',
    whatsapp: '',
    bio: '',
    subject: '',
    cost: '',
  })

  const [scheduledItems, setScheduledItems] = useState([
    { week_day: 0, from: '', to: '' },
  ])

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduledItems.map((scheduledItem, index) => {
      if (index === position) {
        return { ...scheduledItem, [field]: value }
      }

      return scheduledItem
    })

    setScheduledItems(updatedScheduleItems);

  }

  function onHandleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    console.log(e.target)
    setInputState({
      ...inputState,
      [e.target.id]: e.target.value
    })
  }

  function onHandleCreateClass(e: FormEvent) {
    e.preventDefault()

    api.post('classes', {
      ...inputState,
      schedule: scheduledItems
    }).then(() => {
      alert('success')
      history.push('/')
    }).catch((err) => {
      alert(err)
    })
  }

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
        <form onSubmit={onHandleCreateClass}>
          <fieldset>
            <legend>Your data</legend>
            <Input name='name' label='name' value={inputState.name}
              onChange={(e) => onHandleChange(e)} />
            <Input name='avatar' label='Avatar' value={inputState.avatar}
              onChange={(e) => onHandleChange(e)} />
            <Input name='whatsapp' label='Whatsapp' value={inputState.whatsapp}
              onChange={(e) => onHandleChange(e)} />
            <Textarea name='bio' value={inputState.bio} label='Bio'
              onChange={(e) => onHandleChange(e)} />
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
              onChange={(e) => onHandleChange(e)}
              value={inputState.subject}
            />
            <Input
              name='cost'
              label='Hourly cost'
              onChange={(e) => onHandleChange(e)}
              value={inputState.cost}
            />
          </fieldset>
          <fieldset>
            <legend>
              Available time slots
              <button type='button' onClick={onNewScheduleItem}>+ New time slot</button>
            </legend>

            {scheduledItems.map((scheduledItem, index) => {
              return (
                <div key={`scheduledItem-${index}`} className="schedule-item">
                  <Select
                    options={[
                      { value: '0', label: 'Sunday' },
                      { value: '1', label: 'Monday' },
                      { value: '2', label: 'Tuesday' },
                      { value: '3', label: 'Wednesday' },
                      { value: '4', label: 'Thursday' },
                      { value: '5', label: 'Friday' },
                      { value: '6', label: 'Saturday' },
                    ]}
                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                    name='week_day'
                    label='Day of the week'
                    className='subject'
                    value={scheduledItem.week_day}
                  />
                  <Input
                    name='from'
                    label='From'
                    type='time'
                    value={scheduledItem.from}
                    className='from'
                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                  />
                  <Input
                    name='to'
                    label='To'
                    type='time'
                    value={scheduledItem.to}
                    className='to'
                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
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
            <button type='submit'>Save</button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm