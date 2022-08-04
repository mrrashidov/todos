<script setup>
const showDiv = ref(false)
const check = ref(false)
import {ref} from 'vue'
import HomeButton from '../components/UI/HomeButton.vue'
import Label from "../components/UI/SlotForLabels.vue"

import {useStore} from '../store'
const store = useStore();
</script>


<template>
    <div v-show="store.general" class="w-3/5 bg-white rounded-tr-lg md:h-[80vh]  rounded-br-lg mb-96">
      <div class="flex justify-between  border-b-2 pb-3">
        <p class="font-bold text-xl ml-5 mt-3">General</p>
        <svg viewBox="0 0 24 24" class="icon_close mr-3 mt-3" width="24" height="24"><path fill="currentColor" fill-rule="nonzero" d="M5.146 5.146a.5.5 0 0 1 .708 0L12 11.293l6.146-6.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708L12.707 12l6.147 6.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0L12 12.707l-6.146 6.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708L11.293 12 5.146 5.854a.5.5 0 0 1-.057-.638z"></path></svg>
      </div>

    <div class="overflow-y-scroll md:h-[68vh]">
      <div class="mt-5">
        <Label class="block ml-5">Language</Label>
        <select class="mt-3 border ml-5 w-72 h-8 rounded" name="language" id="element-0 " aria-describedby="element-1">
        <option value="cs">Čeština</option>
        <option value="da">Dansk</option>
        <option value="en">English</option>
        <option value="de">Deutsch</option>
        <option value="es">Español</option>
        <option value="fi">Suomi</option>
        <option value="fr">Français</option>
        <option value="it">Italiano</option>
        <option value="nl">Nederlands</option>
        <option value="nb">Norsk</option>
        <option value="pl">Polski</option>
        <option value="pt_BR">Português (Brazil)</option>
        <option value="ru">Pусский (Russian)</option>
        <option value="tr">Türkçe</option>
        <option value="sv">Svenska</option>
        <option value="zh_TW">中文 (繁體)</option>
        <option value="zh_CN">中文 (简体)</option>
        <option value="ko">한국어</option>
        <option value="ja">日本語</option>
    </select>
    </div>

    <div class="mt-5  border-b-2 pb-5">
     <Label class="block ml-5">Home view</Label>
        <select class="mt-3 border w-72 ml-5 h-8 rounded" name="StartPage" id="">
            <option value="today">Today</option>
            <option value="upcoming">Upcoming</option>

            <optgroup label="Projects">
              <option value="inbox">Inbox</option>
            </optgroup>

            <optgroup label="Labels"></optgroup>
            
            <optgroup label="Filters">
              <option value="">Назначено мне</option>
              <option value="">Пиоритет 1</option>
            </optgroup>
        </select>
    </div>

        <Label class="mt-10 ml-5">Date & time</Label>
        <Label class="mt-7 ml-5">Time Zone</Label>
        <select class="ml-5 mt-3 border w-72 h-8 rounded" name="timezone" id="element-10" aria-describedby="element-11">
          <option value="Pacific/Midway">Pacific/Midway</option>
          <option value="Pacific/Samoa">Pacific/Samoa</option>
          <option value="US/Hawaii">US/Hawaii</option>
          <option value="US/Alaska">US/Alaska</option>
          <option value="US/Pacific">US/Pacific</option>
          <option value="America/Tijuana">America/Tijuana</option>
          <option value="US/Arizona">US/Arizona</option>
          <option value="America/Chihuahua">America/Chihuahua</option>
          <option value="America/Mazatlan">America/Mazatlan</option>
          <option value="US/Mountain">US/Mountain</option>
          <option value="Canada/Saskatchewan">Canada/Saskatchewan</option>
          <option value="US/Central">US/Central</option>
          <option value="Canada/Central">Canada/Central</option>
          <option value="Mexico/General">Mexico/General</option>
          <option value="America/Monterrey">America/Monterrey</option>
          <option value="America/Bogota">America/Bogota</option>
          <option value="America/Lima">America/Lima</option>
          <option value="America/Rio_Branco">America/Rio_Branco</option>
          <option value="Etc/GMT+5">Etc/GMT+5</option>
          <option value="US/Eastern">US/Eastern</option>
          <option value="US/East-Indiana">US/East-Indiana</option>
          <option value="America/Caracas">America/Caracas</option>
          <option value="Etc/GMT+4">Etc/GMT+4</option>
          <option value="America/Cuiaba">America/Cuiaba</option>
          <option value="America/Manaus">America/Manaus</option>
          <option value="America/Santiago">America/Santiago</option>
          <option value="America/Guyana">America/Guyana</option>
          <option value="Canada/Atlantic">Canada/Atlantic</option>
          <option value="America/Argentina/Buenos_Aires">America/Argentina/Buenos_Aires</option>
          <option value="America/Fortaleza">America/Fortaleza</option>
          <option value="America/Sao_Paulo">America/Sao_Paulo</option>
          <option value="America/Godthab">America/Godthab</option>
          <option value="America/Noronha">America/Noronha</option>
          <option value="Canada/Newfoundland">Canada/Newfoundland</option>
          <option value="Atlantic/Cape_Verde">Atlantic/Cape_Verde</option>
          <option value="Atlantic/Azores">Atlantic/Azores</option>
          <option value="Africa/Casablanca">Africa/Casablanca</option>
          <option value="Europe/Dublin">Europe/Dublin</option>
          <option value="Europe/London">Europe/London</option>
          <option value="Europe/Lisbon">Europe/Lisbon</option>
          <option value="Africa/Monrovia">Africa/Monrovia</option>
          <option value="UTC">UTC</option>
          <option value="Europe/Amsterdam">Europe/Amsterdam</option>
          <option value="Europe/Belgrade">Europe/Belgrade</option>
          <option value="Europe/Berlin">Europe/Berlin</option>
          <option value="Europe/Zurich">Europe/Zurich</option>
          <option value="Europe/Bratislava">Europe/Bratislava</option>
          <option value="Europe/Brussels">Europe/Brussels</option>
        </select>

        <div class="mt-10">
            <Label class="ml-5">Time format</Label>
              <select class="mt-3 ml-5 border w-72 h-8 rounded" name="time" id="">
                <option>13:00</option>
                <option>1:00 pm</option>
              </select>
        </div>

        <div class="mt-10">
            <Label class="ml-5">Date format</Label>
              <select class="mt-3 border w-72 h-8 rounded ml-5" name="time" id="">
                <option>DD-MM-YYYY</option>	
                <option>MM-DD-YYYY</option>
              </select>
        </div>

    <div class="mt-10">
            <Label class="ml-5">Week start </Label>
              <select class="mt-3 ml-5 border w-72 h-8 rounded" name="time" id="">
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
                <option>Sunday</option>
              </select>
    </div>

    <div class="mt-10">
      <Label class="ml-5">Next week </Label>
      <select class="mt-3 ml-5 border w-72 h-8 rounded" name="time" id="">
        <option>Monday</option>
        <option>Tuesday</option>
        <option>Wednesday</option>
        <option>Thursday</option>
        <option>Friday</option>
        <option>Saturday</option>
        <option>Sunday</option>
      </select>
        <p class="text-gray-600 ml-5 text-xs mt-3">Postpone tasks to this day when using “Weekend”.</p>
    </div>


    <div class="mt-5 border-b-2 pb-5">
      <Label class="ml-5">Smart date recognition</Label>
      <div class="flex">
        <input type="checkbox" @click="check = !check" id="check" class="mt-3 ml-5">       
        <label class="block mt-3 ml-3" for="check">{{check? 'On' : 'Off'}}</label>
      </div>
      <p class="text-gray-600 text-xs mt-3 ml-5">Automatically recognize due dates when typing a task.</p>
    </div>

    <div class="mt-5 mb-5">
      <Label class="ml-5">Sound & appearence</Label>
      <Label class="mt-5 ml-5 text-sm">Test complate tone</Label>
      
      <div>
        <input type="checkbox" v-model="showDiv" class="mt-3 mr-3 ml-5">
        <label id="webLabel inline" for="web">Desktop and Web</label>
      </div>

      <div>
        <input type="checkbox" id="mobile" class="mt-3 mr-3 ml-5">
        <label for="mobile">Mobile</label>
        <p class="text-gray-600 text-xs mt-3 ml-5">Play a sound when tasks are completed.</p>
      </div>

    </div>

    <div class="border-t-2 flex justify-end p-5" v-show="showDiv">
      <div class="mr-7">
        <button class="text-gray-600 rounded-lg hover:opacity-90 bg-gray-300 h-11 w-20">Cancel</button>
      </div>

      <div>
        <home-button class="">Update</home-button>
      </div>
    </div>
    
    </div>

</div>
</template>