import { useMutation } from "@tanstack/react-query";
import { instance } from "../instance"

export default function usecreatbooking() {
  return useMutation({
    mutationFn: async ({ name, email, type }) => {
      const res = await instance.post("/booking", {
        name,
        email,
        type,
      });
      return res.data;
    },
  });
}
