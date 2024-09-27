import { atom, useAtom } from "jotai";

const modalState = atom(false);

export const useCreatWorkspaceModal = () => {
  return useAtom(modalState);
};
