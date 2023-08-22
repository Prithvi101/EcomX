import React from 'react'
import './css/dropdown.css'
import { Link } from 'react-router-dom'
function Dropdown({ elements }) {

  return (
    <div className=" grid grid-cols-6 ml-auto mr-auto w-[100%] ">
      {elements.map((e,index) => (
        <ul key={index} className="dropdown__submenue">
          <h1 className='dropdown__submenue__title' >{e.title}</h1>
          {e.items.map((i,index2) => (
            <li key={index2} className='dropdown__submenue__item'>
              <Link to={'/search'}>
                  <a>{i}</a>
              </Link>
            </li>
          ))}
        </ul>
      ))}
      </div>
  )
}

export default Dropdown