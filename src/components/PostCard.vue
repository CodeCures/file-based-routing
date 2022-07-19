<script>
    export default {
        props: ['post', 'image']
    }
</script>

<template>
    <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                <a href="#_" class="block">
                    <img class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" src="https://cdn.devdojo.com/images/may2021/fruit.jpg">
                </a>
                <div class="bg-purple-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white">
                    <span></span>
                </div>
                <h2 class="text-lg font-bold sm:text-xl md:text-2xl"><a href="#_">{{ post.title }}</a></h2>
                <p class="text-sm text-gray-500">{{ post.body }}</p>
                <p class="pt-2 text-xs font-medium"><a href="#_" class="mr-1 underline">Mary Jane</a> · <span class="mx-1">April 17, 2021</span> · <span class="mx-1 text-gray-600">3 min. read</span></p>
            </div>
</template>