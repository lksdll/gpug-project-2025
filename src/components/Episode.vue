<template>
    <div>
       <div class="w-full h-36 flex flex-wrap items-center shadow-sm border-b border-netflix-gray">
        <span class="ml-7 text-2xl text-netflix-light-gray">{{ id }}</span>
        <img class="h-16 ml-5 rounded-sm" :src="'./src/assets/imgs/thumbnails/' + thumbnail" alt="thumbnail" />

        <div class="ml-3 flex flex-col">
            <span class="font-medium">{{ title }}</span>
            <span class="text-xs text-netflix-light-gray">{{ description }}</span>
        </div>
       </div>
    </div>
</template>

<script>
export default {
    name: 'Episode',
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: false
        },
        duration: {
            type: Number,
            required: false
        },
        id: {
            type: Number,
            required: true

        },
    },
    // Your component's JavaScript logic goes here
}
</script>
