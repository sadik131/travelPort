import React from 'react'

export default function Button({ title, varient, icon }) {
  return (
    <button className={`w-auto px-7 h-auto py-3 text-white justify-center font-medium flex items-center rounded-3xl cursor-pointer ${varient}`}>{title}</button>
  )
}
