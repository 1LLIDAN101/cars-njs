
import Car from './models/Car.js';

class CarController {
  
  async getCar(req, res){
    try {
      const { id } = req.params;
      const Car = await Car.findById(id);
      res.json(Car);
  
      if (!updatedCar) {
        return res.status(404).send("Такого автомобиля не существует!");
      }
    } catch (error) {
      console.log("ОШИБКА ПРИ ПОЛУЧЕНИИ 1 автомобиля ---" + error);
    }
  };

  async getCars(req, res) {
    try {
      const сars = await Car.find();
      res.json(сars);
      console.log(сars);
    } catch (error) {
      console.log("ОШИБКА ПРИ ПОЛУЧЕНИИ автомобилей ---" + error);
      res.status(500).send("Ошибка сервера");
    }
  }

  async postCars(req, res) {
    try {
      const { mark, model, year, color } = req.body;
      const newCar = await Car.create({
      mark,
      model,
      year,
      color,
    });
      res.send("- автомобили ОТПРАВЛЕНЫ УСПЕШНО -");
    } catch (error) {
      console.log("Ошибка при добавлении ---" + error);
      res.status(500).send("Ошибка сервера");
    }
  }

  async patchCars(req, res) {
    try {
      const { id } = req.params;
      const { mark, model, year, color } = req.body;
      console.log( mark, model, year, color );

      const updatedCar = await Car.findByIdAndUpdate(
        id,
        { mark, model, year, color },
        { new: true },
      );

      if (!updatedCar) {
        return res.status(404).send("Такого автомобиля не существует!");
      }

      res.send("Данные успешно изменены!");
    } catch (error) {
      console.log("Ошибка, не удалось выполнить команду --" + error);
      res.status(500).send("Ошибка сервера");
    }
  }

  async putCars(req, res) {
    try {
      const { id } = req.params;
      const { mark, model, year, color } = req.body;
      const updatedCar = await Car.findByIdAndUpdate(
        id,
        { mark, model, year, color },
        { new: true },
      );

      if (!updatedCar) {
        return res.status(404).send("Такого автомобиля не существует!");
      }

      res.send("Данные успешно обновлены!");
    } catch (error) {
      console.log("Ошибка при PUT запросе --" + error);
      res.status(500).send("Ошибка сервера");
    }
  }
  async deleteCars(req, res) {
    try {
      const { id } = req.params;
      console.log(id);

      const car = await Car.findByIdAndDelete(id, { mark, model, year, color });

      if (!car) {
        return res.status(404).send("Такого автомобиля не найден");
      }

      res.send("автомобиль успешно удален!!");
    } catch (error) {
      console.log("ОШИБКА ПРИ УДАЛЕНИИ автомобиля ---- " + error);
      res.status(500).send("Ошибка сервера");
    }
  }
}

export default new CarController();
