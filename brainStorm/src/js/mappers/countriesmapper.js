import Countryapi from '../api/mws.js'

const CountryURL=Countryapi.getCountriesdetailsapi()

export default (() => {
const getCountryDetails = () => {
return CountryURL.then((json) => json.data)
      .catch((error) => {
     console.error(error);
        }
      )
  }
  return {
    getCountryDetails
  }
})()
