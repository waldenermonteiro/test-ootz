<template>
  <div>
    <v-list color="#f6f6f4" three-line>
      <draggable :list="list" ghost-class="ghost" :move="checkMove" @start="dragging = true" @end="terminateMove" v-bind="{ group: 'tasks-group' }">
        <transition-group class="list-custom" type="transition" name="flip-list">
          <v-list-item v-for="task in list" :key="task.id" class="list-group-item">
            <v-card class="v-card-custom">
              <v-list-item-content>
                <v-list-item-subtitle class="list-item-title" v-text="task.title"></v-list-item-subtitle>
              </v-list-item-content>
            </v-card>
          </v-list-item>
        </transition-group>
      </draggable>
      <div class="input-task" v-if="enableCreate">
        <v-textarea v-model="form.title" class="pb-2" hide-details solo label="Enter a title for this task"></v-textarea>
        <v-btn @click="createTask(list)" color="success" small>Add task</v-btn>
        <v-btn @click="enableCreate = false" small icon><v-icon>mdi-close</v-icon></v-btn>
      </div>
    </v-list>
    <div @click="enableCreate = true" v-if="!enableCreate" class="div-new-task"><v-icon>mdi-plus</v-icon>Add a new task</div>
  </div>
</template>
<script>
import Draggable from 'vuedraggable'
export default {
  components: {
    Draggable
  },
  props: {
    list: {
      required: true
    },
    frame: {
      required: true
    },
    frames: {
      required: true
    }
  },
  data () {
    return {
      enableCreate: false,
      formCopy: {
        title: ''
      },
      form: { ...this.formCopy },
      pastFrame: {},
      presentFrame: {}
    }
  },
  methods: {
    createTask (list) {
      if (this.form.title !== '') {
        const task = { order: list.length, title: this.form.title, description: 'todo', frame_id: this.frame.id, open: true }
        this.$createOrUpdate({
          urlDispatch: 'Task/create',
          params: task,
          callback: () => {
            this.$list({ urlDispatch: 'Frame/list' })
            this.clearForm()
          }
        })
      }
    },
    clearForm () {
      this.form = {
        ...this.formCop
      }
    },
    checkMove (e) {
      this.pastFrame = e.draggedContext.element
      this.presentFrame = e.relatedContext.element
    },
    terminateMove () {
      const pastPresentFrames = this.frames.filter(frame => frame.id === this.pastFrame.frame_id || frame.id === this.presentFrame.frame_id)
      for (const frame of pastPresentFrames) {
        for (const [index, task] of frame.todos.entries()) {
          task.order = index
          if (task.frame_id !== frame.id) {
            task.frame_id = frame.id
          }
          this.updateFrame(task)
        }
      }
    },
    updateFrame (task) {
      this.$createOrUpdate({
        urlDispatch: 'Task/update',
        params: task
      })
    }
  }
}
</script>
<style scoped>
.v-card-custom {
  width: 100%;
}
.input-task {
  margin: 5px !important;
  padding: 0px 1px !important;
}
.div-new-task {
  background-color: rgb(246, 246, 244);
  padding: 5px !important;
}
.div-new-task:hover {
  background-color: rgba(9, 30, 66, 0.08);
  color: #172b4d;
}
</style>
