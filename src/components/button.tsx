import React from 'react'

type ButtonProps = {
    text: string;
    icon?: string;
}

function Button( {  text, icon }: ButtonProps) {
  return (
    <button className="px-4 py-2 flex gap-1 bg-blue-1 text-white rounded-lg">{icon && icon} {text}</button>
  )
}

export default Button