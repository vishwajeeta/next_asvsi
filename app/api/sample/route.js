import { NextResponse } from "next/server";

export async function GET (request){
    return NextResponse.json({name:"vishwa",data:"hello world"})
}