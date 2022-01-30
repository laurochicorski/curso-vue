<template>
  <div class="new-tasks">
      <input v-model="name" @keydowm.enter="add" type="text">
      <button @click="add">+</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: ''
        }
    },
    methods: {
        add() {
            this.$emit('taskAdded', {name: this.name})
            this.name = ''
        }
    }
}
</script>

<style>

</style>