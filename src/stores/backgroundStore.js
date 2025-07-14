import { create } from 'zustand';

export const useQueryStore = create(set => ({
  queryResult: null,

  setQueryResult: result => set({ queryResult: result }),
}));
