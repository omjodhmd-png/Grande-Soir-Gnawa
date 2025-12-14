import   { useMutation } from   "@tanstack/react-query";
import { instance } from "../instance";
 


export  function useCreatbooking() {
    return useMutation({
      mutationFn: async ({ name, email, type , artistId }) => {
        const res = await instance.post("/booking", {
          name,
          email,
          type,
          artistId
        });
        return res.data;
      },
    });
  }