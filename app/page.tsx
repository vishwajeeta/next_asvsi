import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      
      hello world! <br />
      <Link href={"youtube"}> YouTube</Link> <br />
      <Link href={"window"}> Window</Link> <br />
      <Link href={"gallery"}> Gallery</Link> <br />

      <Link href={"hii/hello"}> hello</Link> <br />
      <Link href={"inputdata"}> inputdata</Link> <br />
      <Link href={"practice"}> Practice</Link> <br />
      <Link href={"AddScripts"}> Script</Link> <br />
      <Link href={"dynamic_route/hello"}> Dynamic Route</Link> <br />

      <a href="/Note.txt" target='_blank' download={true}>Download</a>
    </div>
  )
}

export default page
