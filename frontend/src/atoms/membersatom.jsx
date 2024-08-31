import { atomFamily, atom } from "recoil";

let USERS = []

export const membersatom = atomFamily({
  key: 'membersatom',
  default: (id) => ({
    username: ''
  }) ,
});

export const numberOfUsers = atom({
    key: 'numberOfUsers',
    default: 0
})


