

import { useQuery } from "@tanstack/react-query"
import { instance } from "../instance"

export  function useGetEvents(){
   return useQuery({
      queryKey:["events"],
      queryFn:()=> instance.get("/eventinfo").then(res=>res.data).catch(error=>{
        console.log(error);
        throw new Error(error.message)
    })
      
    })
}