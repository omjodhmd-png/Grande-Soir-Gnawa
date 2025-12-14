import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useTicketStore = create(
  persist(
    (set, get) => ({
      tickets: [],

      addTicket: (ticket) => {
        const exists = get().tickets.find(
          (t) => t.number === ticket.number
        );

        if (exists) return;

        set((state) => ({
          tickets: [...state.tickets, ticket],
        }));
      },

      removeTicket: (number) =>
        set((state) => ({
          tickets: state.tickets.filter(
            (t) => t.number !== number
          ),
        })),

      clearTickets: () => set({ tickets: [] }),
    }),
    {
      name: "ticket-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
