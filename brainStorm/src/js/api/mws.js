import axios from 'axios'

export default (() => {
  const getCountriesdetailsapi = () => {
   return  axios.get('https://restcountries.eu/rest/v1/all')
}

  return {
    getCountriesdetailsapi
  }
})()
