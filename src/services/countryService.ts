import axios from "axios";

const NAGER_API = process.env.NAGER_API || "https://date.nager.at/api/v3";
const COUNTRIES_API = process.env.COUNTRIES_API || "https://countriesnow.space/api/v0.1";

export const getAvailableCountries = async () => {
  try {
    const response = await axios.get(`${NAGER_API}/AvailableCountries`);
    return response.data;
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw new Error("Could not fetch available countries");
  }
};

export const getCountryInfo = async (countryCode: string) => {
  try {
    const bordersResponse = await axios.get(`${NAGER_API}/CountryInfo/${countryCode}`);
    const borders = bordersResponse.data.borders || [];

    const populationResponse = await axios.post(`${COUNTRIES_API}/countries/population`, {
      country: bordersResponse.data.commonName
    });
    const population = populationResponse.data.data.populationCounts || [];

    const flagResponse = await axios.post(`${COUNTRIES_API}/countries/flag/images`, {
      country: bordersResponse.data.commonName
    });
    const flagUrl = flagResponse.data.data.flag || "";

    return {
      name: bordersResponse.data.commonName,
      borders,
      population,
      flagUrl
    };
  } catch (error) {
    console.error("Error fetching country info:", error);
    throw new Error("Could not fetch country info");
  }
};
