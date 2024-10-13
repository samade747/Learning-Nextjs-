import { NextResponse } from "next/server"; 
import { comments as commentsData } from "./data"; 

let comments = [...commentsData]; 
export async function GET() {
  // Return the current list of comments as JSON
  return NextResponse.json(comments);
}

export async function POST(request: Request) {
  try {
    const body = await request.json(); 

    const newComment = {
      id: comments.length + 1, 
      body: body.text, 
      postId: body.postId,
    };

    comments.push(newComment); 

    return new NextResponse(JSON.stringify(newComment), {
      headers: {
        "content-type": "application/json",
      },
      status: 201, 
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: "Failed to add comment" }), {
      headers: {
        "content-type": "application/json",
      },
      status: 500, 
    });
  }
}
