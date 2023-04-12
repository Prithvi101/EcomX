import React from 'react'

function Dropdown({ elements }) {

  return (
    <div className="dropDownContainer grid grid-cols-6">
      {elements.map(e => (
        <ul className="dropdown__submenue m-5">
          <h1 className='dropdown__submenue__title text-secondaryDark text-sm m-2' >{e.title}</h1>
          {e.items.map(i => (
            <li className='dropdown__submenue__item text-secondary text-xs font-light m-2'>
              <a>{i}</a>
            </li>
          ))}
        </ul>
      ))}
      </div>
  )
}

export default Dropdown