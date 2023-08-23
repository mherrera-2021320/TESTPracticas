import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import  TablaClientes  from "./usecontext/tables/tableClientes";
import  TablaClases  from "./usecontext/tables/tablaClases";
import TablaDirecciones from "./usecontext/tables/tableDireccion";
import  TablePagos  from "./usecontext/tables/TablePago";
import  TablaPersonal  from "./usecontext/tables/TablePersonal";
import  TablaServicios  from "./usecontext/tables/TableServicios";
import  TablaVehiculos  from "./usecontext/tables/TableVehiculos";

import  NotFound404  from "./usecontext/tables/tableClientes";



const AppRoutes = () => {
  return (
    <>
        <Routes>
            
            <Route path='/clientes' element={ <TablaClientes /> } />
            <Route path='/clases' element={ <TablaClases /> } />
            <Route path='/direcciones' element={ <TablaDirecciones /> } />
            <Route path='/pagos' element={ <TablePagos /> } />
            <Route path='/personal' element={ <TablaPersonal /> } />
            <Route path='/servicios' element={ <TablaServicios /> } />
            <Route path='/vehiculos' element={ <TablaVehiculos /> } />

        </Routes>
    </>
  )
}

export default AppRoutes