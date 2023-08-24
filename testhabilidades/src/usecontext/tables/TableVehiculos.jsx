import React, { useState, useEffect } from 'react'
import axios from "axios";

function TableVehiculos() {

  const [data, setData] = useState([]);
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [año, setAño] = useState('')
  const [fechaComrpa, setFechaCompra] = useState('')


  useEffect(() => {
    fetchItems();
  }, []);


  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/vehiculo/ver');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };


  const addItem = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/vehiculo/agregar', {
        marca,
        modelo,
        año,
        fechaComrpa
      });
      setData([...data, response.items]);
      setMarca('');
      setModelo('');
      setAño('');
      setFechaCompra('');
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };


  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/vehiculo/${id}`);
      fetchItems(); // Actualizar la lista de elementos después de la eliminación
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };



  return (
    <>
      <div>
        <h1>Datos</h1>
        <div>
          <h2> Agregar Nuevo Item</h2>
          <input
            type="text"
            placeholder="Marca"
            value={marca}
            onChange={e => setMarca(e.target.value)}
          />
          <input
            type="text"
            placeholder="Modelo"
            value={modelo}
            onChange={e => setModelo(e.target.value)}
          />
          <input
            type="text"
            placeholder="Año"
            value={año}
            onChange={e => setAño(e.target.value)}
          />
          <input
            type="date"
            placeholder="Fecha Compra"
            value={fechaComrpa}
            onChange={e => setFechaCompra(e.target.value)}
          />

          <button onClick={addItem}>Add Item</button>

        </div>
        <div>
          <table className="table">
            <thead>
              <tr >
                <th scope="col"> # </th>
                <th scope="col"> Marca</th>
                <th scope="col"> Modelo</th>
                <th scope="col"> Año </th>
                <th scope="col"> Fecha</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map(datos => (
                <tr key={datos._id}>
                  <td>{datos._id}</td>
                  <td>{datos.marca}</td>
                  <td>{datos.modelo}</td>
                  <td>{datos.año}</td>
                  <td>{datos.fecha}</td>
                  <td><button>Editar</button></td>
                  <td><button onClick={() => deleteItem(datos._id)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

      </div>
    </>
  )
}

export default TableVehiculos