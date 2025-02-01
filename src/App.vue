<script setup>
import { ref } from 'vue';
import episodesData from './assets/data/episodes-data.json';
import similarTitlesData from './assets/data/similar-title-data.json';
import Episode from './components/Episode.vue';
import SimilarTitle from './components/SimilarTitle.vue';

const episodes = ref(episodesData);
const similarTitles = ref(similarTitlesData);
</script>

<template>

  <div class="relative">

    <div class="flex justify-center items-center w-screen my-6">

      <div class="min-h-screen lg:w-3/5 md:w-4/5 w-full bg-netflix-dark-gray rounded-lg flex flex-wrap justify-center">

        <!-- Trailer -->
        <video class=" w-full rounded-t-lg" poster="./assets/imgs/thumbnails/test-thumbnail.jpg" controls>
          <source src="./assets/videos/test.mp4" type="video/mp4">
        </video>

        <!-- Content below the trailer -->
        <div class=" w-11/12 mt-5 flex flex-wrap gap-10">

          <!-- left -->
          <div class="w-[calc(100%_*_0.75_-_1.25rem)]">
            <div class=" text-netflix-light-gray text-sm">2025 | 1 Staffel</div>

            <!-- line break -->
            <div class="basis-full h-0"></div>

            <div class=" text-white border border-netflix-light-gray px-2 text-sm w-min">16</div>

            <!-- line break -->
            <div class="basis-full h-0"></div>

            <div class=" text-white text-2xl font-bold mt-7">"Titel"</div>

            <!-- line break -->
            <div class="basis-full h-0"></div>

            <div class="text-sm text-netflix-light-gray">Beschreibung hier einfügen ... Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
              gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
              eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
              et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
              sit amet.</div>
          </div>

          <!-- right -->
          <div class="w-[calc(100%_*_0.25_-_1.25rem)]">
            <div class="ml-auto w-max-1/2 text-white text-sm">

              <div>
                <span class=" text-netflix-gray">Besetzung: </span>
                <span>
                  Anton Becker,
                  Tobias Hörhager, Kajetan Diez, Michael Sedlmeier, Lukas
                  Doll
                </span>
              </div>

              <!-- line break -->
              <div class="basis-full h-0"></div>

              <div class=" mt-3">
                <span class=" text-netflix-gray">Genres: </span><span>Thriller, Drama, Krimi</span>
              </div>
            </div>
          </div>

          <!-- center content -->
          <div class="w-full flex flex-wrap mt-2 text-white">
            <span class="text-lg font-semibold">Folgen</span>

            <!-- line break -->
            <div class="basis-full h-0"></div>


            <Episode class="w-full" v-for="episode in episodesData" :key="episode.episodeId" :title="episode.title"
              :description="episode.description" :thumbnail="episode.thumbnail" :duration="episode.duration"
              :id="episode.episodeId" />

            <span class="text-lg font-semibold mt-5">Ähnliche Titel</span>

            <div class="w-full flex flex-wrap my-5 gap-3 justify-center">
              <SimilarTitle class="" v-for="similarTitle in similarTitles" :key="similarTitle.title"
                :title="similarTitle.title" :description="similarTitle.description" :thumbnail="similarTitle.thumbnail"
                :year="similarTitle.year" :ageRating="similarTitle.ageRating" />
            </div>








          </div>
        </div>
      </div>
    </div>
  </div>
</template>
