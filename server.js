import express from "express";
import mongoose from "mongoose";
import router from "./router.js";

const PORT = 5001;
const app = express();
app.use(express.json());
app.use( router);




// app.get("/Car", async (req, res) => {
//   try {
//     const Car = await Car.find();
//     res.json(Car);
//     console.log(Car);
//   } catch (error) {
//     console.log("ОШИБКА ПРИ ПОЛУЧЕНИИ ДАННЫХ МашенА ---" + error);
//     res.status(500).send("Ошибка сервера");
//   }
// });

// app.get("/Car/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const Car = await Car.findById(id);
//     res.json(Car);

//     if (!updatedCar) {
//       return res.status(404).send("Такого Машена не существует!");
//     }
//   } catch (error) {
//     console.log("ОШИБКА ПРИ ПОЛУЧЕНИИ 1 МашенА ---" + error);
//   }
// });

mongoose
  .connect("mongodb://localhost:27017/Cars")
  .then(() => {
    console.log("успешно подкл к БД");
  })
  .catch((error) => {
    console.log("ошибка" + error);
  });
app.listen(PORT, () => {
  console.log("Сервер успешно запущен на порту: " + PORT);
});
