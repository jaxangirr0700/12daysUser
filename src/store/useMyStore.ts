import { create } from "zustand";

type useMyStoreType = {
  loading: boolean;
};

const useMyStore = create<useMyStoreType>(() => {
  return {
    loading: true,
  };
});
export default useMyStore;
