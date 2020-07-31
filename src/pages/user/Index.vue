<template>
  <v-container>
    <v-row class="text-center" align="center" justify="center">
      <v-col class="mb-4" cols="12">
        <v-row align="center" justify="center">
          <v-col cols="12">
            <h1 class="display-2 font-weight-bold">
              Personal Board
            </h1>
          </v-col>
          <v-col cols="12">
            <p class="subheading font-weight-regular">
              For help and collaboration with other Vuetify developers,
              <br />please join our online
              <a href="https://community.vuetifyjs.com" target="_blank">Discord Community</a>
            </p>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="mb-1" sm="4" md="4" lg="4">
        <v-text-field @keyup.enter="redirectToDashbord()" label="Enter with your username" hide-details="auto" append-icon="user" v-model="test"></v-text-field>
        <v-btn class="mt-3" depressed color="primary" to="/dashboard">Save and Continue</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    test: ''
  }),
  methods: {
    redirectToDashbord () {
      this.$router.push('/dashboard')
    }
  }
}
</script>
