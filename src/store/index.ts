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
    comments: [
      {
        imgSrc: "public/images/apps-illustrations.webp",
        userName: "jorayevazik486@gmail.com",
        date: new Date().toLocaleString(),
        commentValue: " nimadur",
          fileUrl: "https://yandex.ru/images/search?pos=7&from=tabbar&img_url=http%3A%2F%2Fi.pinimg.com%2Foriginals%2F83%2F1a%2F7c%2F831a7cf39e76484168b529d4486f97db.jpg&text=photo&rpt=simage&lr=10335",
          fileName: "123445.webp"
      }
    ]
  })
})

