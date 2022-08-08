import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    Inputvalue : "",
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
<<<<<<< Updated upstream
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
<<<<<<< HEAD
=======
    commentshow : false

>>>>>>> Stashed changes
=======
>>>>>>> main
  })

})

