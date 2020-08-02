<template>
  <v-list color="#f6f6f4">
    <draggable :list="list" ghost-class="ghost" @start="dragging = true" @end="dragging = false" v-bind="{ group: 'tasks-group' }">
      <transition-group class="list-custom" type="transition" name="flip-list">
        <v-list-item v-for="task in list" :key="task.id" class="list-group-item">
          <v-card style="width: 100%">
            <v-list-item-content>
              <p class="list-item-title">{{ task.title }}</p>
              <!-- <v-list-item-title v-text="task.title"></v-list-item-title> -->
            </v-list-item-content>
          </v-card>
        </v-list-item>
      </transition-group>
    </draggable>
  </v-list>
</template>
<script>
import Draggable from 'vuedraggable'
export default {
  components: {
    Draggable
  },
  props: {
    list: {
      required: false
    }
  }
}
</script>
