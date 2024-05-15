'use client'
import { SessionProvider } from 'next-auth/react'
const AuthProvider=({Children,Session})=>{
    return(
        <div>
        <SessionProvider session={session}>
        {Children}
        </SessionProvider>
        </div>
    )


    }

    export default AuthProvider