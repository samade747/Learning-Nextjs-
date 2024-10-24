// import { NextRequest } from "next/server";
// import { comments } from "../data";

// export async function GET(request: NextRequest){
//     const searchParams = request.nextUrl.searchParams;
//     const query = searchParams.get("query");

//     const filteredComments = query ?
//     comments.filter((comment) => comment.text.includes(query)) :
//     comments;


//     return Response.json(filteredComments);    
// }
    











 


// export async function PATCH(
//     request: Request,
//     { params }: { params: { id: string } }
// ){
//     const body = await request.json();
//     const { text } = body;
//     const index = comments.findIndex(
//     (comment) => comment.id === parseInt(params.id)
// );
//     comments[index].text = text;
//     return Response.json(comments[index]);
// }


// export async function DELETE(
//     request: Request,
//     { params }: { params: { id: string } }
// ){
//     const index = comments.findIndex(
//     (comment) => comment.id === parseInt(params.id)
// );
//     const deletedComment = comments[index]
//     comments.splice(index, 1);
//     return Response.json(deletedComment);

// }