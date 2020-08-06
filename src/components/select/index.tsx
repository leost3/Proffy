import './styles.css'

import React, { SelectHTMLAttributes } from 'react'


interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value:string,
    label:string
  }>
}

function Select({ label, name, options,...restProps }: SelectProps) {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select defaultValue="" id={name} {...restProps}>
        <option value="" disabled hidden >Select an option</option>
        {options.map(({value, label}, index) => {
          return <option key={`label-${index}`} value={value}>{label}</option>
        })}
      </select>
    </div>
  )
}

export default Select