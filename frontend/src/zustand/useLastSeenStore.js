import { create } from "zustand";

const useLastSeenStore = create((set) => ({
  lastSeenMap: {},

  setLastSeen: (userId, lastSeen) =>
    set((state) => ({
      lastSeenMap: {
        ...state.lastSeenMap,
        [userId]: lastSeen,
      },
    })),
}));

export default useLastSeenStore;
