<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.button {
    width: 200px;
    height: 50px;
    background-color: white;
    color: lightseagreen;
    border: 2px solid lightseagreen;
    border-radius: 5px;
    font-size: 16px;
    font-family: 'Roboto Bold';
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    cursor: pointer;

    &:hover {
        background-color: lightseagreen;
        color: white;
    }
}
</style>