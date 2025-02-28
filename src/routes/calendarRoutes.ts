import express from "express";
import { addHolidaysToCalendarController } from '../controllers/calendarController';

const router = express.Router();

router.post('/users/:userId/calendar/holidays', addHolidaysToCalendarController);

export default router;
