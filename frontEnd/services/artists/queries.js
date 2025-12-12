

import { useQuery } from "@tanstack/react-query"
import { instance } from "../instance"

export  function useGetArtists(){
   return useQuery({
      queryKey:["artist"],
      queryFn:()=> instance.get("/artists").then(res=>res.data).catch(error=>{
        console.log(error);
        throw new Error(error.message)
    })
      
    })
}
export  function useGetArtist(id){
   return useQuery({
      queryKey:["artist"],
      queryFn:()=> instance.get("/artists/"+id).then(res=>res.data).catch(error=>{
        console.log(error);
        throw new Error(error.message)
    })
      
    })
}