<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">検索結果</h1>
        <p>検索キーワード：{{ $route.params.keyword }}</p>
      </v-col>

      <v-col v-for="(album, i) in albums" :key="i" cols="12">
        <v-card color="#385F73" dark :href="album.collectionViewUrl">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="album.collectionName"></v-card-title>
              <v-card-subtitle v-text="album.artistName"></v-card-subtitle>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="album.artworkUrl100"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      albums: []
    };
  },
  created() {
    const vm = this;
    axios
      .get("https://itunes.apple.com/search", {
        withCredentials: true,
        params: {
          term: this.$route.params.keyword,
          entity: "album"
        }
      })
      .then(response => {
        console.log(response);
        vm.albums = response.data.results;
      });
  }
};
</script>
