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
    accShow: false,
    viewComp: false,
    general: false,
    advanced: false,
    theme: false,
    productivity: false,
    remin: false,
    todayMain: true,
    day: new Date().getDate(),
    inboxTitle: false,
    labelTitle: false,
    priorityTitle: false,
    remindersTitle: false,
    showTask: false,
    upcomingTasks:[],
    taskDesc : [],
    taskItem: '',
    description: '',
  })

})

