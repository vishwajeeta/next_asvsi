import Script from "next/script";
import React from 'react'

function page() {
  return (
    <div>
      <Script src="./script.js" strategy="lazyOnload">

      </Script>
    </div>
  )
}

export default page
