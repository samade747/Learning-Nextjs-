// 1st approach
// import { NextResponse, type NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL('/profile', request.url));
// }

// export default middleware;


// export const config = {
//     matcher: '/login',
// };
 
//  The  middleware  function is called with a  NextRequest  object, 
// which contains information about the incoming request.
//  The function should return a  NextResponse  object,
//  which can be used to modify the response. In this case,
// //  the middleware is redirecting the user to the  /profile  page. 
//  To use the middleware, add it to the  middleware  array in the  next.config.js  file:

// 2nd approrch 

// import { NextResponse, type NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//     if(request.nextUrl.pathname === '/profile') {
//     // return NextResponse.redirect(new URL('/login', request.url));
//     return NextResponse.rewrite(new URL('/login', request.url));
// }

// }

// export default middleware;

// export const config = {
//     matcher: '/profile',
// };

// The  middleware  function is called with a  NextRequest  object, 
// which contains information about the incoming request.
//  The function should return a  NextResponse  object,
//  which can be used to modify the response. In this case,
// //  the middleware is redirecting the user to the  /profile  page. 
//  To use the middleware, add it to the 
//  middleware  array in the  next.config.js  file:

// 3rd approach

import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {

    const response = NextResponse.next()

    const themePreference = request.cookies.get('theme')
    if(!themePreference) {
        response.cookies.set('theme', 'light')
    }

    response.headers.set('custom-header', 'custom-value')

    return response
        
}

