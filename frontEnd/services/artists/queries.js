

import { useQuery } from "@tanstack/react-query"
import { instance } from "../instance"

export  function useGetArtists(){
   return useQuery({
      queryKey:["artist"],
      queryFn:()=> instance.get("/eventinfo").then(res=>res.data).catch(error=>{
        console.log(error);
        throw new Error(error.message)
    })
      
    })
}