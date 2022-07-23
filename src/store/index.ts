import {defineStore} from 'pinia'

export const useStore = defineStore('store',{
  state: ()=>({
    
    overlay: false,
    addbtn : false,
    firstTitle:false,
    secondTitle : false,
    thirdTitle : false
  })
}) 