import { create } from "zustand";

export type ModalType = "createServer";

interface ModalStore {
    type: ModalType | null,
    isOpen: boolean,
    onOpen: (type: ModalType) => void,
    onCLose: () => void;
}

export const useModal = create<ModalStore>((set)=> ({
    type: null,
    isOpen: false,
    onOpen: (type) => set({isOpen: true, type}),
    onCLose: () => set({type: null, isOpen: false})
}))