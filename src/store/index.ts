import {defineStore} from 'pinia'

export const useStore = defineStore('store',{
  state: ()=>({
    
    overlay: true,
    addbtn : true,
  })
}) 