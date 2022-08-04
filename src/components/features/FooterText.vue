<script setup>
import Text from "../SlotText.vue"
import Slotlink from "../UI/SlotLink.vue"
import DateSlot from "../DateSlots.vue"
</script>


<template>
  <div class="md:grid md:grid-rows-4 md:grid-flow-col md:gap-4 md:mt-20 md:ml-20 md:w-72
             sm:grid sm:grid-rows-1 sm:w-96 sm:m-auto">
    
    <!-- 1-row-->
    
    <div class="w-72 md:-mt-0 | sm:mb-10 sm:mt-10">
        <h1 class="font-bold text-xl">Tweets</h1>
        <p class="text-xs text-gray-600">Follow <slotlink>@Todoist</slotlink> on Twitter</p>
    </div>
    <div class="md:-mt-20 md:w-72 | sm:mb-10">
        <text class="text-sm block text-gray-700 ">I should buy a lifetime subscription to @Todoist. It seriously runs my life. Work projects, groceries, birthday gift reminders. It’s essentially my personal assistant most of the time.</text>
        <slotlink link="https://twitter.com/hailleymari/status/978274150275010560">@hailleymari</slotlink>
    </div>
    <div class="md:-mt-20 md:w-72 | sm:mb-10">
        <text class="text-sm block text-gray-700">Todoist made my life drastically better, it helped me declutter my brain to focus on the important things. Because of Todoist, I was able to read 15 books in 2 months, learn iOS development and spend more time with my family</text>
        <slotlink link="https://twitter.com/eihab_khan/status/1009325989971841024">@eihab_khan</slotlink>
    </div>
    <div class="w-72 md:-mt-10 | sm:mb-10">
        <text class="text-sm block text-gray-700">By using Todoist every day I’ve become more productive tan anytime in my life. I can’t tell how much I love your software. It’s the first thing I look at in the AM and the last thing I do before bed, organize next days tasks. Truly love it!</text>
        <slotlink link="https://twitter.com/douglasabrown/status/1347321195620950026">@douglasabrown</slotlink>
    </div>

    <!-- 2-row-->

    <div class="md:w-72 md:ml-16">
        <h1 class="font-bold md:text-xl">App store</h1>
        <p class="text-xs text-gray-600 ">5 stars, 60K ratings</p>
        <p class="mt-7">★★★★★</p>
    </div>
    <div class="md:-mt-16 md:w-96  md:ml-16 | sm:mb-10">
        <text class="text-sm block text-gray-700 ">I have a side business. And I am always telling people that I will do something and then forget. Now, I make a rusult record in my Todoist so I can’t forget. My business is better because of it!</text>
        <date-slot>June 11, 2019 | Alavagirl</date-slot>
    </div>
    <div class="md:-mt-24 md:w-96  md:ml-16 | sm:mb-10">
        <p>★★★★★</p>
        <text class="text-sm block text-gray-700">Todoist has provided just the tool I need for managing work that can so easily fall through the cracks. I recommend it to managers of small businesses – it can keep you from missing deadlines and due dates.</text>
        <date-slot>June 14, 2019 | nlcqulter</date-slot>
    </div>
    <div class="md:w-96 md:-mt-24 md:ml-16 | sm:mb-10">
        <p>★★★★★</p>
        <text class="text-sm block text-gray-700">This app has been a fantastic tool in helping me stay organized and on track. Pro was a great decision and I am excited to have my work and personal life on track! Because of Todoist, I was able to read 15 books in 2 months</text>
        <date-slot>May 13, 2019 | HP</date-slot>
    </div>

    <!-- 3-row -->   

    <div class="md:w-72 md:ml-14">
        <h1 class="font-bold md:text-xl">Play Store</h1>
        <p class="text-xs text-gray-600 ">Editor’s Choice</p>
        <p class="mt-7">★★★★★</p>
    </div>
    <div class="md:-mt-16 md:w-96 md:ml-14 | sm:mb-10">
        <text class="text-sm block text-gray-700 ">Todoist has reduced my stress levels enormously. I’m doing a PhD and juggling several really challenging and unpredictable roles - Todoist is helping me stay on top of a really complex range of tasks.</text>
        <date-slot>May 27, 2019 | Sally Morgan</date-slot>
    </div>
    <div class="md:-mt-24 md:w-96  md:ml-14 | sm:mb-10">
        <p>★★★★★</p>
        <text class="text-sm block text-gray-700">Todoist is the most important app I use. It’s a tremendous way to keep track of professional and personal projects and tasks, make lists, collaborate at work, and keep track of my kids’ responsibilities.</text>
        <date-slot>May 18, 2019 | Eli Rothman</date-slot>
    </div>
    <div class="md:w-96 md:-mt-24 md:ml-14 | sm:mb-10">
        <p>★★★★★</p>
        <text class="text-sm block text-gray-700">This app helped me become more productive. I find it really helpful how Todoist does reviews of all the completed tasks, as it gives me an insight into my productivity pattern. Highly recommend!</text>
        <date-slot>February 11, 2019 | Lucy Gao</date-slot>
    </div>

</div>
  
</template>