import React from 'react'
import {Helmet} from 'react-helmet-async'
const Title = ({
  title = 'MERN Chat App',
  description = 'A MERN stack chat application'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
    </Helmet>
  )
}

export default Title
