import { Request, Response } from "express";
import { addHolidaysToCalendar as addHolidaysService } from "../services/calendarService";

export const addHolidaysToCalendarController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;
    const { countryCode, year, holidays } = req.body;

    if (!userId || !countryCode || !year || !holidays) {
      res.status(400).json({ error: "Missing required parameters" });
      return;
    }

    const result = await addHolidaysService(userId, countryCode, year, holidays);

    res.json(result);
  } catch (error) {
    console.error("Error adding holidays to calendar:", error);
    res.status(500).json({ error: 'Failed to add holidays' });
  }
};
