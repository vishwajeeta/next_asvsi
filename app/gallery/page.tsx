import React from 'react'
import './styles.css';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata={
title:"My Gallery",
description:"This is My gallery",
keywords:"gallery, My gallery, ASVSI, digital gallery"
}

function page() {
  return (
    <div>

      <div className="container">
        <div className="gallery">
            <Image src="/gallery/hgh.webp" alt='No image found'width={500} height={500} />
            <Image src="/gallery/humayub.jpg" alt='No image found'width={500} height={500} />
            <Image src="/gallery/IMG-20190629-WA0012.jpg" alt='No image found'width={500} height={500} />
            <Image src="/gallery/IMG-20200101-WA0000.jpg" alt='No image found'width={500} height={500} />
            <Image src="/gallery/jamamasjid.jpg" alt='No image found'width={500} height={500} />
            <Image src="/gallery/jantar.jpg" alt='No image found'width={500} height={500} />
            <Image src="/gallery/pp.jfif" alt='No image found'width={500} height={500} />
            <Image src="/gallery/qutab.jpg" alt='No image found'width={500} height={500} />
        </div>
    </div>
    </div>
  )
}

export default page
