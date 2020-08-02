<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="deep-purple accent-4 white--text">
          Create Panel
        </v-card-title>

        <v-card-text>
          <v-text-field @keyup.enter="create()" label="Add title panel" v-model="form.text"></v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="closeModal()">
            Create Panel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      form: {
        text: ''
      }
    }
  },
  methods: {
    openModal () {
      this.dialog = true
    },
    closeModal () {
      this.dialog = false
    },
    create () {}
  }
}
</script>
