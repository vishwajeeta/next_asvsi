import { request } from 'http';
import React from 'react';
// 1.Static metadata
export const metadata={
  title:'api calling',
};

// 2.Dynamic metadata
// export async function name({params,searchParams}) {
//   const product=await getProduct(product.id);
//   return {title:product.title};
// }
const page = () => {
  
  return (
    <div id="demo">
      api call is maded
    </div>
  )
}

export default page
