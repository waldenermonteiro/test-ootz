<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-spacer><p class="text-center ">Personal Board</p></v-spacer>

      <v-menu v-model="menu" :close-on-content-click="true" :nudge-width="200" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon dark v-bind="attrs" v-on="on">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-card class="mx-auto" max-width="400" tile>
          <v-list :dense="true" :three-line="true" :shaped="true" :flat="true">
            <v-subheader><p class="text-center">Create</p></v-subheader>
            <v-list-item-group color="primary">
              <v-list-item>
                <v-list-item-content @click="openCreatePanel">
                  <v-list-item-title><v-icon>mdi-monitor-dashboard</v-icon>Create Panel</v-list-item-title>
                  <v-list-item-subtitle
                  ><p class="height-subtitle">
                    Um quadro é feito de cartões ordenados em listas. Use-o para gerenciar projetos, controlar informações e organizar qualquer coisa.
                  </p></v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-menu>
      <v-btn icon background>
        WM
      </v-btn>
    </v-app-bar>
    <create-panel ref="CreatePanel"></create-panel>
    <router-view></router-view>
  </div>
</template>
<script>
import CreatePanel from '../pages/panels/Create'
export default {
  name: 'DashboardLayout',
  components: {
    CreatePanel
  },
  data: () => ({
    menu: false,
    item: 5
  }),
  methods: {
    openCreatePanel () {
      this.$refs.CreatePanel.openModal()
    }
  }
}
</script>
<style scoped>
.height-subtitle {
  -webkit-line-clamp: 6 !important;
}
</style>
