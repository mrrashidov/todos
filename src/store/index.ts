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
    intag: false,
    showdatapicker: false,
    commentClick: true,
    activityClick: false,
    inputTypeFile: "",
    documents: [],
    comments: [],
    accShow: false,
    viewComp: false,
    general: false,
    advanced: false,
    theme: false,
    productivity: false,
    remin: false

  })
})

