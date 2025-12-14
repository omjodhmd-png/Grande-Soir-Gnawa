import { useQuery } from "@tanstack/react-query";
import { instance } from "../instance"





export function useGetBookings() {
  return useQuery({
    queryKey: ["booking"], 
    queryFn: async () => {
      const res = await instance.get("/booking");
      return res.data; 
    },
  });
}

