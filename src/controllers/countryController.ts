import { Request, Response } from "express";
import { getAvailableCountries } from "../services/countryService";
import { getCountryInfo } from "../services/countryService";

export const getCountries = async (req: Request, res: Response) => {
  try {
    const countries = await getAvailableCountries();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ message: "Error fetching countries" });
  }
};

export const getCountryDetails = async (req: Request, res: Response) => {
  try {
    const { code } = req.params;
    const countryInfo = await getCountryInfo(code.toUpperCase());
    res.json(countryInfo);
  } catch (error) {
    res.status(500).json({ message: "Error fetching country details" });
  }
};
