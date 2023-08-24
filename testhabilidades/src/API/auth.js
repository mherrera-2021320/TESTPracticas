import axios from "axios";

const API = "http://localhost:8080/api"

export const agregarVehiculos = (vehiculo) => axios.post(`${API}/vehiculos/agregar`, vehiculo)




