import { atomWithStorage } from "jotai/utils";

export type AmountAtom = number

export default atomWithStorage<AmountAtom | null>("amount", null);