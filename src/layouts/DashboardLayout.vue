<template>
  <div>
    <v-app-bar color="deep-purple" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-spacer><p class="text-center ">Personal Board</p></v-spacer>
      <v-btn icon background>
        WM
      </v-btn>
    </v-app-bar>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'DashboardLayout',
  data: () => ({
    menu: false,
    item: 5
  })
}
</script>
<style scoped>
.height-subtitle {
  -webkit-line-clamp: 6 !important;
}
</style>
