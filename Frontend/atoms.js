import { atom } from "recoil";

export const admin = atom({
	key: "admin",
	default: false,
});

export const user = atom({ key: "user", default: false });
