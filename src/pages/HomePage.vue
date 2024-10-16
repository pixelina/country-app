<template>
    <MyContainer class="homePage">
        <div class="homePage__countries">
            <MyInput class="homePage__input" :myPlaceholder="'Search country...'" v-model:value="search" />
            <CountriesList :countriesSet="searchCountries" />
        </div>
        <RandomCountries class="homePage__widget" />
    </MyContainer>
</template>

<script lang="ts" setup>
import MyContainer from '@/components/UI/MyContainer.vue';
import MyInput from '@/components/UI/MyInput.vue';
import CountriesList from '@/components/elements/CountriesList.vue';
import RandomCountries from '@/components/elements/RandomCountries.vue';
import { Country } from '@/interfaces/interfaces';
import { useCountriesStore } from '@/store/countriesStore';
import { computed, ref } from 'vue';

const countriesStore = useCountriesStore()

const countries = ref<Array<Country> | undefined>([])

const search = ref<string>('')

const run = async (): Promise<void> => {
    countries.value = await countriesStore.getCountries();
}

const searchCountries = computed(() => {
    if (search.value === '') {
        return countries.value;
    }
    else {
        return countries.value?.filter((country) => country.name?.toLowerCase().startsWith(search.value.toLowerCase()) || country.countryCode?.toLowerCase() === search.value.toLowerCase())
    }
})


//autorun
run();
</script>

<style lang="scss" scoped>
.homePage {
    display: flex;
    flex-flow: column;

    &__countries {
        width: 100%;
        min-height: 100px;
    }

    &__widget {
        width: 100%;
        min-height: 100px;
    }

    &__input {
        margin-bottom: 20px;
    }

    @media screen and (min-width: 1200px) {
        flex-flow: row;
        gap: 40px;

        &__input {
            width: 50%;
        }

        &__countries,
        &__widget {
            flex: 1 1 0;
        }
    }

}
</style>