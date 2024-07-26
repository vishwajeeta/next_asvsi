import React from "react";
import './header_menu.css'
import Body from "./Body";
import Image from "next/image"
import type { Metadata } from 'next'




export const metadata: Metadata = {
  title: 'Youtube clone',
  description: 'Youtube clone on Next.js',
  icons:'icons/cortana.png'
}
function page(){
    return(
        <>
    <div className="header">
    <div className="os">Youtube</div>
    <input type="text" placeholder="Search" />
    <div className="circle os">V</div>

    <div className="os right">Library</div>
    <div className="os">History</div>

    <Image src="/icons/chrome.png" alt="dp" width={25} height={38} />
  </div>
  <div className="menu">
    <br />
    <div className="om">Home</div>
    <div className="om">Shorts</div>
    <div className="om">Subscriptions</div>
    <hr />

    <div className="om">Library</div>
    <div className="om">History</div>
    <div className="om">Your Videos</div>
    <div className="om">Watch Later</div>
    <div className="om">Your clips</div>
    <div className="om">Show more</div>
    <hr />
    <div className="om">Subscriptions</div>
  </div>

  <div className="set">
    <div className="recent">
      <p>hj sdfghjk</p>
      <p>hj sdfghjk</p>
      <p>hj sdfghjk</p>
      <p>hj sdfghjk</p>
      <p>hj sdfghjk</p>
      <p>hj sdfghjk</p>
      <p>hj sdfghjk</p>
      <p>hj sdfghjk</p>
      <p>hj</p>
    </div>
    </div>
    <Body/>
    </>
    );
}

export default page;