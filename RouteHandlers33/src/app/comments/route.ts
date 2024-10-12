import { headers } from "next/headers";
import { comments } from "./data";


export async function GET() {

    return Response.json(comments)

}



export async function POST(request: Request) {      
    const comment = await request.json()
    const newcomment = {
        id: comments.length + 1,
        text: comment.text,
        
    } 
comments.push(newcomment);
    return new Response(JSON.stringify(newcomment), {
    headers: {
        "content-type": "application/json",
    },    
    status: 201,
});

}
