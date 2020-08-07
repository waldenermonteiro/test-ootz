<template>
  <v-container fluid="">
    <draggable
      :move="checkMove"
      :list="framesCustom"
      :disabled="disabled"
      ghost-class="ghost"
      @start="dragging = true"
      @end="dragging = false"
      v-bind="{ group: 'frames-group' }"
    >
      <transition-group class="row" type="transition" name="flip-list">
        <v-col @mouseover="disabledDraggable(false)" v-for="frame in framesCustom" :key="frame.order" xs="6" sm="4" md="3" class="list-group-item">
          <v-toolbar color="deep-purple" dark dense>
            <v-toolbar-title>{{ frame.title }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card class="list-group-item">
            <list-tasks :frames="framesCustom" :list="frame.todos" :frame="frame"></list-tasks>
          </v-card>
        </v-col>
        <v-col md="3" :key="1000" @mouseover="disabledDraggable(true)">
          <v-toolbar v-if="!inputVisible" dense class="toolbar-custom" @click="activateTextArea(true)">
            <v-toolbar-title> <v-icon>mdi-plus</v-icon>Add other list</v-toolbar-title>
          </v-toolbar>
          <div v-show="inputVisible" style="background-color:#f6f6f4;padding: 8px">
            <v-text-field
              v-model="form.title"
              ref="textFrame"
              class="pb-2"
              hide-details
              solo
              dense
              placeholder="Enter a title for this frame"
              outlined
            ></v-text-field>
            <v-btn color="success" small @click="createFrame(form)">Add frame</v-btn>
            <v-btn @click="inputVisible = false" small icon><v-icon>mdi-close</v-icon></v-btn>
          </div>
        </v-col>
      </transition-group>
    </draggable>
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
    framesCustom: [],
    disabled: false,
    inputVisible: false,
    form: {
      title: ''
    }
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
  },
  methods: {
    checkMove () {
      setTimeout(() => {
        this.updateFrames()
      }, 1000)
    },
    disabledDraggable (value) {
      this.disabled = value
    },
    activateTextArea (value) {
      this.inputVisible = value
    },
    createFrame (form) {
      const frame = { ...form, order: this.framesCustom.length }
      this.$createOrUpdate({
        urlDispatch: 'Frame/create',
        params: frame,
        callback: () => {
          this.$list({ urlDispatch: 'Frame/list' })
          this.clearForm()
          this.activateTextArea(false)
        }
      })
    },
    updateFrames () {
      for (let index = 0; index < this.framesCustom.length; index++) {
        const frame = { ...this.framesCustom[index], order: index }
        this.$createOrUpdate({
          urlDispatch: 'Frame/update',
          params: frame
        })
      }
    },
    clearForm () {
      this.form.title = ''
    }
  }
}
</script>
<style>
.toolbar-custom {
  cursor: pointer !important;
  background-color: rgba(0, 0, 0, 0.08) !important;
  box-shadow: none !important;
}
.toolbar-custom:hover {
  opacity: 0.7;
}
</style>
