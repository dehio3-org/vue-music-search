<template>
  <v-app>
    <v-app-bar app color="pink" dark>
      <v-spacer>MUSIC SEARCH</v-spacer>

      <v-btn test to="/">
        <span class="mr-2">HOME</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>
