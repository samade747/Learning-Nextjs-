import { commentx } from "../data";



export async function GET(
    _request: Request,
    { params }: { params: { id: string } }

) {
    const comment = commentx.find(
    (comment) => comment.id === parseInt(params.id)
);
    return Response.json(comment);
}
