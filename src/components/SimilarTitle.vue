<template>

    <div class=" w-56 rounded-md flex flex-wrap flex-col justify-start bg-netflix-mid-gray"> 
            <img class="w-full aspect-video rounded-t-md" :src="'./src/assets/imgs/thumbnails/' + thumbnail" alt="thumbnail" />

            <div class="flex flex-col m-2">
                <span class="font-medium">{{ title }}</span>
                <span class="text-xs text-netflix-light-gray">{{ description }}</span>
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
        year: {
            type: Number,
            required: false
        },
        ageRating: {
            type: Number,
            required: true

        },
    },
}
</script>
