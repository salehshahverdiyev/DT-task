import express from "express";
import dotenv from "dotenv";
import countryRoutes from "./routes/countryRoutes";
import calendarRoutes from './routes/calendarRoutes'
import sequelize from './config/connectionToDB'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  console.log('Database connected!')
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
})

app.use(express.json());
app.use("/api", countryRoutes);
app.use('/api', calendarRoutes)

app.get("/", (req, res) => {
  res.send("Country Info API is running...");
});
