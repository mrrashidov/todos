import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    overlay: false,
    addbtn: false,
    firstTitle: false,
    secondTitle: false,
    thirdTitle: false,
    asideMenu: true,
    account: true,
    subs: false,
    notif: false,
    backups: false,
    intag: false
  })
})

