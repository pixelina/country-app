<template>
    <div class="holidaysList">
        <ul class="holidaysList__list">
            <li class="holidaysList__item" :key="index" v-for="(holiday, index) in holidaysSet">
                <div class="holidaysList__card">
                    <p class="holidaysList__name"><strong>{{ holiday.name }}</strong></p>
                    <p class="holidaysList__date">{{ holiday.date }}</p>
                    <p class="holidaysList__type">Types: 
                        <span :key="index" v-for="(type, index) in holiday.types">{{ type }}{{ index < holiday.types.length - 1 ? ', ' : '.' }}</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { PublicHoliday } from '../../interfaces/interfaces'

const props = defineProps({
    holidaysSet: {
        type: Array as PropType<PublicHoliday[]>,
    }
})

</script>

<style lang="scss" scoped>
.holidaysList {

    &__list {
        display: flex;
        flex-flow: column;
        gap: 15px;
    }

    &__card {
        width: 100%;
        border: 2px solid $dark-color;
        border-radius: 5px;
        padding: 15px 0;
        display: flex;
        flex-flow: column;
        gap: 5px;
        align-items: center;
        justify-content: center;
        color: $dark-color;
    }
}
</style>