"use client"

import { TextInput } from "@repo/ui/text-input"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter();
  return(
    <div style={{
      height:"100vh",
      width:"100vw",
      background:"black",
      display:"flex",
      justifyContent:"center",
      justifyItems:"center"
    }}>
      <div style={{
      display:"flex",
      justifyContent:"center",
      flexDirection:"column"
    }}>
       <TextInput placeholder="Enter Room Number" size="big"></TextInput> 
        <button onClick={()=>{
            alert("hi");
            router.push("/chat/123");
        }
        }>Click to Enter Room</button>
      </div>
    </div>
  )
}
