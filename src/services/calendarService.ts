import UserCalendar from "../models/UserCalendar";

export const addHolidaysToCalendar = async (
  userId: string,
  countryCode: string,
  year: number,
  holidays: string[]
) => {
  try {
    let existingCalendar = await UserCalendar.findOne({ where: { userId, countryCode, year } });

    if (existingCalendar) {
      const updatedHolidays = Array.from(new Set([
        ...(Array.isArray(existingCalendar.holidays) ? existingCalendar.holidays : [existingCalendar.holidays]),
        ...holidays
      ]));

      await existingCalendar.update({ holidays: updatedHolidays });
      return existingCalendar;
    } else {
      const newCalendar = await UserCalendar.create({
        userId,
        countryCode,
        year,
        holidays,
      });
      return newCalendar;
    }
  } catch (error) {
    console.error("Error in addHolidaysToCalendar:", error);
    throw new Error("Failed to update calendar");
  }
};
