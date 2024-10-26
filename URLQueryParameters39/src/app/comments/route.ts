import { type NextRequest } from "next/server";
import { comments as ab } from "./data"; 

// GET request handler
export async function GET(request: NextRequest) {
    // Extract the 'query' parameter from the URL's search parameters
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");

    // Filter comments based on the presence of 'query' in the comment text
    const filteredComments = query
        ? ab.filter((comment) => comment.text.includes(query))
        : ab;

    // Return the filtered or full list of comments as a JSON response
    return new Response(JSON.stringify(filteredComments), {
        headers: { "Content-Type": "application/json" },
    });
}

// // POST request handler
// export async function POST(request: NextRequest) {
//     const newComment = await request.json();
//     comments.push({ id: comments.length + 1, ...newComment });

//     return NextResponse.json({ message: "Comment added", comments });
// }

// // PUT request handler
// export async function PUT(request: NextRequest) {
//     const { id, text } = await request.json();
//     const commentIndex = comments.findIndex((comment) => comment.id === id);
    
//     if (commentIndex === -1) return NextResponse.json({ message: "Comment not found" }, { status: 404 });

//     comments[commentIndex].text = text;
//     return NextResponse.json({ message: "Comment updated", comments });
// }

// // DELETE request handler
// export async function DELETE(request: NextRequest) {
//     const { id } = await request.json();
//     const commentIndex = comments.findIndex((comment) => comment.id === id);
    
//     if (commentIndex === -1) return NextResponse.json({ message: "Comment not found" }, { status: 404 });

//     comments.splice(commentIndex, 1);
//     return NextResponse.json({ message: "Comment deleted", comments });
// }
