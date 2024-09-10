import { cookies } from "next/headers"
import { NextResponse } from "next/server"

const user = false

// export const middleware = (request) => {
//     // return NextResponse.nexg()
//     return NextResponse.redirect(new URL('/contacts', request.url))
//     // return NextResponse.rewrite(new URL('/about/history', request.url))
// }

// export const middleware = (request) => {
//     if(request.nextUrl.pathname.startsWith('/about'))
//     return NextResponse.redirect(new URL('/contacts', request.url))
// }

// export const middleware = (request) => {
//     if(!user){
//         return NextResponse.redirect(new URL('/login', request.url))
//     }
//     return NextResponse.next()
// }

export const middleware = (request) => {
    const cookies = request.cookies.get('token')
    const coo = 'next-superHero'

    if(!cookies || cookies.value !== coo){
        return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next()
}

// export const config = {
//     matcher: '/about'
// }

export const config = {
    matcher: ['/about', '/servicess']
}