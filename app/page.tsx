
import { Session } from "inspector"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { FcGoogle } from "react-icons/fc"






export default function Home() {

const data=useSession()
const router=useRouter()
if(Session){
  router.replace('/homePage')
}



  return (
    <><h1>Login</h1>
    
    <h2>Login with Google</h2>
   <button onClick={()=>{
signIn("google")
   }}><FcGoogle/>g</button> 
    
    <a href ="/login">Login</a>
    </> 
  )
}

