const hii= async()=>{
  const res= await fetch(
    'http://localhost:3000/api/users',
    {cache:'no-store'}
  );
  const data=await res.json()
  
  
  return(
    <div>
      <h1>hii {data.id} {data.name}</h1>
    </div>
  )
}
export default hii;