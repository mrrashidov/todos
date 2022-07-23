import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
    state: () => ({
        account:true,
        subs: false,
        notif: false,
        backups: false,
        intag: false

    })
})