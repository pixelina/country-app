<template>
    <div class="countriesList">
        <h2 class="countriesList__title">Countries List</h2>
        <ul class="countriesList__list">
            <li class="countriesList__item" :key="index" v-for="(country, index) in countriesSet">
                <router-link :to="'/country/' + country.countryCode" class="countriesList__card">
                    <p class="countriesList__name">{{ country.name }}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { Country } from '../../interfaces/interfaces'

const props = defineProps({
    countriesSet: {
        type: Array as PropType<Country[]>,
    }
})

</script>

<style lang="scss" scoped>
.countriesList {
    &__title {
        margin-bottom: 20px;
    }

    &__list {
        display: flex;
        flex-flow: column;
        gap: 15px;
    }

    &__card {
        width: 100%;
        background-color: $light-color;
        border: 2px solid $main-color;
        border-radius: 5px;
        padding: 15px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition-property: scale, background-color, color;
        transition-duration: 250ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        color: $main-color;

        &:hover,
        &:focus {
            background-color: $main-color;
            color: $light-color;
            scale: 1.05;
        }
    }
}
</style>