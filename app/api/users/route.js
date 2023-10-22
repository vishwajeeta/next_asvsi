export async function GET(request){
    const users=[
        {id:1,name:'john'},
        {id:2,name:'jane'},
        {id:3,name:'bob'}
    ];
    return new Response(JSON.stringify(users))
}
// export async function GET(request){
//     return new Response("hii,Next.js")
// }