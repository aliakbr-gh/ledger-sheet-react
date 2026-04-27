import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

const useSheetStore = create(
    devtools(
        persist(
            (set) => ({
                sheet: null,
                setSheet: (sheetData) => set({ sheet: sheetData }, false, "setSheet"),
            }),
            {
                name: "sheet",
                storage: createJSONStorage(() => localStorage),
            }
        ),
        { name: "sheetStore" }
    )
);

export { useSheetStore };
