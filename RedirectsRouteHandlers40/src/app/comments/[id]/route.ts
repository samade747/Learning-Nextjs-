import { redirect } from "next/navigation";
import { comments } from "../data";


export async function GET(_request: Request,
    { params }: { params: { id: string } }
) {

    const comment = comments.find(
        (comment) => comment.id === Number(params.id)
    );

    return Response.json(comment);
}