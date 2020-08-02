<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<style lang="scss">
html {
  overflow: auto !important;
}
.ghost {
  opacity: 0.2;
  background: #6200ea !important;
}

.flip-list-move {
  transition: transform 0.5s;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: pointer;
}
.list-custom .v-list-item {
  min-height: 30px !important;
  margin: 5px !important;
  padding: 0px 1px !important;
  margin-bottom: 10px !important;
  // VERIFICAR DE NOVO POIS ADICIONOU A BORDA ONDE NÃO DEVERIA
}
.list-item-title {
  padding: 0px 8px !important;
  margin: 0px !important;
}
</style>
