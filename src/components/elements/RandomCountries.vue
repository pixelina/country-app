<template>
    <div class="randomCountries">
        <h2 class="randomCountries__title">Random Countries Widget</h2>
        <div class="randomCountries__list">
            <RandomCountry :key="country" v-for="country in 3" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import RandomCountry from './RandomCountry.vue';
</script>

<style lang="scss" scoped>
.randomCountries {
    &__title {
        margin-bottom: 15px;
    }

    &__list {
        border: 2px solid $main-color;
        border-radius: 5px;
        padding: 10px;
        display: flex;
        flex-flow: column;
        gap: 15px;
    }
}
</style>