<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">検索結果</h1>
        <p>検索キーワード：{{ $route.params.keyword }}</p>
      </v-col>

      <v-col cols="12">
        <v-card color="#385F73" dark>
          <v-card-title class="headline" v-text="title"></v-card-title>

          <v-card-subtitle v-text="artistName"></v-card-subtitle>

          <v-card-actions>
            <v-btn text>Listen Now</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col v-for="(item, i) in items" :key="i" cols="12">
        <v-card :color="item.color" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.title"></v-card-title>

              <v-card-subtitle v-text="item.artist"></v-card-subtitle>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="item.src"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "アルバムタイトル",
      artistName: "アーティスト名",
      image: ""
    };
  }
};
</script>
