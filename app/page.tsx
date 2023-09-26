import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      hello world!
      <Link href={"youtube"}> youtube</Link>
      <Link href={"window"}> window</Link>
      <Link href={"hii/hello"}> hello</Link>
      
    </div>
  )
}

export default page
