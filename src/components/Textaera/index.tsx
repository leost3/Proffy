import './styles.css'

import React, { TextareaHTMLAttributes } from 'react'



interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

function Textarea({ label, name, ...restProps }: TextareaProps) {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...restProps} />
    </div>
  )
}

export default Textarea