import { Router } from "express";
import CarController from "./CarController.js";

const router = new Router();

router.get("/Car/:id", CarController.getCars);
router.get("/Cars", CarController.getCars);
router.post("/addCar", CarController.postCars);
router.patch("/Car/:id", CarController.patchCars);
router.put("/Car/:id", CarController.putCars);
router.delete("/deleteCar/:id", CarController.deleteCars);

export default router;
