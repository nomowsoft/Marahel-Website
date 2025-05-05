import React from 'react'
import Hero from './home/hero/page'
import WhyMurshed from './home/why_murshed/page'
import Features from './home/features/page'
import Work from './home/work/page'

const murshed = () => {
  return (
    <section>
      <Hero /> 
      <WhyMurshed />
      <Features />
      <Work />
    </section>
  )
}

export default murshed