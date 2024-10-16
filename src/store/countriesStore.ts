import axios from "axios"
import { defineStore } from "pinia"
import { ref } from "vue"
import { Country, CountryInfo, PublicHoliday } from "../interfaces/interfaces"

export const useCountriesStore = defineStore('countriesStore', () => {

  const totalCountries = ref<number>(0)

  const getCountries = async (): Promise<Array<Country> | undefined> => {
    try { 
      const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries')
      totalCountries.value = response.data.length
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  const getCountryInfo = async (countryCode: string | number | string[]): Promise<CountryInfo | undefined> => {
    try { 
      const response = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  const getPublicHolidays = async (year: number, countryCode: string | string[]): Promise<Array<PublicHoliday> | undefined> => {
    try { 
      const response = await axios.get(`https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  const getNextHoliday = async (countryCode: string | undefined): Promise<PublicHoliday | undefined> => {
    try { 
      const response = await axios.get(`https://date.nager.at/api/v3/NextPublicHolidays/${countryCode}`)
      return response.data[0]
    } catch (error) {
      console.log(error)
    }
  }

  return { totalCountries, getCountries, getCountryInfo, getPublicHolidays, getNextHoliday }
})