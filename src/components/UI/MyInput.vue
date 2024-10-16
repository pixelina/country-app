<template>
  <div class="myInput">
    <input class="myInput__input" :placeholder="myPlaceholder" v-model="inputValue" @input="change" />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['input']);
const inputValue = defineModel('value');

const props = defineProps({
  isValid: {
    type: Boolean,
    default: true
  },
  myPlaceholder: {
    type: String,
    default: ''
  }
})

const change = (event): void => {
  emit('input', event.target.value);
}
</script>

<style lang="scss" scoped>
.myInput {
  width: 100%;
  display: flex;
  flex-flow: column;
  position: relative;

  &__input {
    width: 100%;
    color: $main-color;
    border: 2px solid $main-color;
    outline: none;
    border-radius: 5px;
    height: 40px;
    padding: 0 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  }
}
</style>