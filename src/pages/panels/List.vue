<template>
  <v-container fluid="">
    <draggable
      :list="items"
      :disabled="!enabled"
      ghost-class="ghost"
      :move="checkMove"
      @start="dragging = true"
      @end="dragging = false"
      :options="{ group: 'panels-group' }"
    >
      <transition-group class="row" type="transition" name="flip-list">
        <v-col v-for="item in items" :key="item.id" cols="3">
          <v-card color="white" class="list-group-item">
            <v-card-title class="headline">{{ item.title }}</v-card-title>

            <v-card-subtitle style="height:50px !important">{{ item.description }}</v-card-subtitle>

            <v-card-actions>
              <v-btn text>Remove</v-btn>
              <v-btn text>Edit</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </transition-group>
    </draggable>
  </v-container>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'transition-example',
  display: 'Transition',
  order: 6,

  components: {
    draggable
  },
  data: () => ({
    enabled: true,
    list: [
      { name: 'John', id: 0 },
      { name: 'Joao', id: 1 },
      { name: 'Jean', id: 2 }
    ],
    dragging: false,
    items: [
      { id: 0, title: ' Panel 1', description: 'Listen to your favorite artists and albums whenever and wherever, online and offline.' },
      { id: 1, title: ' Panel 2', description: 'Listen to your favorite artists and albums whenever and wherever' },
      { id: 2, title: ' Panel 3', description: 'Listen to your favorite artists and albums whenever and wherever' },
      { id: 3, title: ' Panel 4', description: 'Listen to your favorite artists and albums whenever and wherever' },
      { id: 4, title: ' Panel 5', description: 'Listen to your favorite artists and albums whenever and wherever' }
    ]
  }),

  methods: {
    checkMove: function (e) {
      window.console.log('Future index: ' + e.draggedContext.futureIndex)
    }
  }
}
</script>
<style>
</style>
