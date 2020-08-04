<template>
  <v-container fluid="">
    <v-row>
      <v-col cols="12">
        <v-btn small class="float-right" color="primary"><v-icon>mdi-plus</v-icon>New Frame</v-btn>
      </v-col>
    </v-row>
    <draggable :list="framesCustom" ghost-class="ghost" @start="dragging = true" @end="dragging = false" v-bind="{ group: 'frames-group' }">
      <transition-group class="row" type="transition" name="flip-list">
        <v-col v-for="frame in framesCustom" :key="frame.order" xs="6" sm="4" md="3" class="list-group-item">
          <v-toolbar color="deep-purple" dark dense>
            <v-toolbar-title>{{ frame.title }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card class="list-group-item">
            <list-tasks :list="frame.todos" :frame="frame"></list-tasks>
          </v-card>
        </v-col>
      </transition-group>
    </draggable>
    {{ framesCustom }}
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import Draggable from 'vuedraggable'
import ListTasks from '../tasks/List'
export default {
  name: 'IndexFrames',
  display: 'Transition',
  components: {
    Draggable,
    ListTasks
  },
  data: () => ({
    lists: [
      {
        id: 0,
        title: 'To do',
        items: [
          { id: 0, title: 'Jason Oner' },
          { id: 1, title: 'Travis Howard' },
          { id: 2, title: 'Ali Connors' },
          { id: 3, title: 'Cindy Baker' }
        ]
      },
      {
        id: 1,
        title: 'Doing',
        items: [
          { id: 4, title: 'Teste nome 1' },
          { id: 5, title: 'Teste nome 2' },
          { id: 6, title: 'Teste nome 3' },
          { id: 7, title: 'Teste nome 4' }
        ]
      },
      {
        id: 2,
        title: 'Done',
        items: [
          { id: 4, title: 'Teste nome 1' },
          { id: 5, title: 'Teste nome 2' },
          { id: 6, title: 'Teste nome 3' },
          { id: 7, title: 'Teste nome 4' }
        ]
      }
    ],
    framesCustom: []
  }),
  computed: {
    ...mapState('Frame', ['frames'])
  },
  watch: {
    frames: function () {
      this.framesCustom = JSON.parse(JSON.stringify(this.frames))
    }
  },
  mounted () {
    this.$list({
      urlDispatch: 'Frame/list',
      callback: () => {
        this.framesCustom = JSON.parse(JSON.stringify(this.frames))
      }
    })
  }
}
</script>
<style></style>
