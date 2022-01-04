import React from 'react'
import "./FilterFooter.css"
const FilterFooter = () => {
    return (
    <div className='FilterFooter'>
        <div className='FilterFooter_countItem'>
          2 items
        </div>
        <div className="FilterFooter_filters">
          <ul>
            <li>
              <button >All</button>
            </li>
            <li>
              <button >Active</button>
            </li>
            <li>
              <button >Completed</button>
            </li>
          </ul>
        </div>
    </div>
    )
}

export default FilterFooter
