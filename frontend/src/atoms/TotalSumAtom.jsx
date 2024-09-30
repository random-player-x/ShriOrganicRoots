import { atom, useRecoilValue } from "recoil";
import { spiceAtom } from "../assets/spices";
import { cartAtom } from "../atoms/CartAtom";


export const TotalSumAtom = atom({
    key: "TotalSumAtom",
    default: 0
})