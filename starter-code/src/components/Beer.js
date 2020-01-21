import React from 'react'
import { Link } from 'react-router-dom'


const Beer = ({ image_url, name, tagline, contributed_by, _id, description, detail }) => {
  return(
    <div className='Beer card mb-3'>
      <Link to={`/beers/${_id}`}>
        <div className='row no-gutters'>
          <div className='col-md-1 text-center p-3'>
            <img src={image_url} className='card-img' alt='beer'/>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Beer