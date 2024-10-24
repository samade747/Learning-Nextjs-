import { NextRequest, NextResponse } from "next/server";
import { comments } from "@/data"; // Adjust path if needed

// GET request handler
export async function GET(request: NextRequest) {
    const query = request.nextUrl.searchParams.get("query");
    const filteredComments = query
        ? comments.filter((comment) => comment.text.includes(query))
        : comments;

    return NextResponse.json(filteredComments);
}

// POST request handler
export async function POST(request: NextRequest) {
    const newComment = await request.json();
    comments.push({ id: comments.length + 1, ...newComment });

    return NextResponse.json({ message: "Comment added", comments });
}

// PUT request handler
export async function PUT(request: NextRequest) {
    const { id, text } = await request.json();
    const commentIndex = comments.findIndex((comment) => comment.id === id);
    
    if (commentIndex === -1) return NextResponse.json({ message: "Comment not found" }, { status: 404 });

    comments[commentIndex].text = text;
    return NextResponse.json({ message: "Comment updated", comments });
}

// DELETE request handler
export async function DELETE(request: NextRequest) {
    const { id } = await request.json();
    const commentIndex = comments.findIndex((comment) => comment.id === id);
    
    if (commentIndex === -1) return NextResponse.json({ message: "Comment not found" }, { status: 404 });

    comments.splice(commentIndex, 1);
    return NextResponse.json({ message: "Comment deleted", comments });
}
