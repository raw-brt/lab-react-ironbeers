import React from 'react'
import Section from './misc/Section'

const Home = () => {
  return(
    <article className="Home">
      <Section to='/beers' title='All Beers' description='go to all beers'/>
      <Section to='/random-beer' title='Random Beer' description='go to random beers'/>
      <Section to='/new-beers' title='New beer' description='go to new beers'/>
    </article>
  )
}

export default Home