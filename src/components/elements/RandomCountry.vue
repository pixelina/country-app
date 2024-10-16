<template>
    <div class="randomCountry">
        <p class="randomCountry__name"><strong>{{ country?.commonName }}</strong></p>
        <p class="randomCountry__holiday"><strong>Next Holiday: </strong>{{ country?.nextHoliday?.name ?  country?.nextHoliday.name : 'no holiday'}}</p>
        <p class="randomCountry__date"><strong>Date: </strong>{{ country?.nextHoliday?.date ?  country?.nextHoliday?.date : 'no date'}}</p>
    </div>
</template>

<script lang="ts" setup>
import { useCountriesStore } from '../../store/countriesStore';
import { ref, watch } from 'vue';
import { CountryInfo } from '../../interfaces/interfaces';

const countriesStore = useCountriesStore()

const country = ref<CountryInfo | undefined>({})

const random = (min: number, max: number): number => {  
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const run = async (): Promise<void> => {
    country.value = await countriesStore.getCountryInfo(random(0, countriesStore.totalCountries));
    const nextHoliday = await countriesStore.getNextHoliday(country.value?.countryCode);
    country.value = {
      ...country.value,
      nextHoliday: nextHoliday
      
    }
}

watch(
  () => countriesStore.totalCountries,
  async () => {
    run()
  }
)

//autorun
run();
</script>

<style lang="scss" scoped>
.randomCountry {
    border: 1px solid $dark-color;
    border-radius: 3px;
    padding: 5px;
    display: flex;
    flex-flow: column;
    gap: 3px;
}
</style>