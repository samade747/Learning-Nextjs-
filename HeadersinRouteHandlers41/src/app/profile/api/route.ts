import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    console.log(requestHeaders.get("authorization"));
    return new Response("Profile Api data");
}