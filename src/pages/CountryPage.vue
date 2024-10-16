<template>
    <MyContainer class="countryPage">
        <h1 class="countryPage__name">{{ country?.officialName }}</h1>
        <HolidaysList class="countryPage__list" :holidaysSet="publicHolidays"/>
        <div class="countryPage__buttons">
            <MyButton
                :class="selectedYear == (2019 + year) ? 'countryPage__button countryPage__button--active' : 'countryPage__button'"
                :key="year" v-for="year in 11" @click="setYear(2019 + year)">
                {{ 2019 + year }}
            </MyButton>
        </div>
    </MyContainer>
</template>

<script lang="ts" setup>
import MyContainer from '@/components/UI/MyContainer.vue';
import MyButton from '@/components/UI/MyButton.vue';
import HolidaysList from '@/components/elements/HolidaysList.vue';
import { useCountriesStore } from '@/store/countriesStore';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { CountryInfo, PublicHoliday } from '@/interfaces/interfaces';
const route = useRoute();

const countriesStore = useCountriesStore()

const country = ref<CountryInfo | undefined>({})

const selectedYear = ref<number>(2024)

const publicHolidays = ref<Array<PublicHoliday> | undefined>([])

const run = async (): Promise<void> => {
    country.value = await countriesStore.getCountryInfo(route.params.countryCode);
    publicHolidays.value = await countriesStore.getPublicHolidays(selectedYear.value, route.params.countryCode)
}

const setYear = async (year: number): Promise<void> => {
    selectedYear.value = year;
    publicHolidays.value = await countriesStore.getPublicHolidays(selectedYear.value, route.params.countryCode)
}

//autorun
run();
</script>

<style lang="scss" scoped>
.countryPage {
    &__list {
        margin: 15px auto;
    }
    &__buttons {
        display: flex;
        flex-flow: column;
        gap: 10px;
    }

    &__button {
        width: 100%;

        &--active {
            background-color: lightseagreen;
            color: white;
        }
    }

    @media screen and (min-width: 1200px) {
        &__buttons {
            flex-flow: row;
        }
    }
}
</style>