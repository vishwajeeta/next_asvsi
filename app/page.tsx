import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      hello world! <br />
      <Link href={"youtube"}> youtube</Link> <br />
      <Link href={"window"}> window</Link> <br />
      <Link href={"hii/hello"}> hello</Link> <br />
      <Link href={"inputdata"}> inputdata</Link>
      
    </div>
  )
}

export default page
