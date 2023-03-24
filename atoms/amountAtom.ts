import { atomWithStorage } from "jotai/utils";

export type AmountAtom = {
  selectAmount: number;
};

export default atomWithStorage<AmountAtom | null>("amount", null);