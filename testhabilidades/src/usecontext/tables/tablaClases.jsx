import React from 'react'

function tablaClases () {
    return (
        <>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Agregar Clase
            </button>


            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* //Formulario */}

                            <form className="row g-3">
                                <div className="col-md-4">
                                    <label htmlFor="validationDefault01" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="validationDefault01" defaultValue="Mark" required />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="validationDefault02" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="validationDefault02" defaultValue="Otto" required />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="validationDefaultUsername" className="form-label">Username</label>
                                    <div className="input-group">
                                        <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                        <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="validationDefault03" className="form-label">City</label>
                                    <input type="text" className="form-control" id="validationDefault03" required />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="validationDefault04" className="form-label">State</label>
                                    <select className="form-select" id="validationDefault04" required>
                                        <option >Choose...</option>
                                        <option> Activo </option>
                                        <option> Pasivo</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="validationDefault05" className="form-label">Zip</label>
                                    <input type="text" className="form-control" id="validationDefault05" required />
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" defaultValue="" id="invalidCheck2" required />
                                        <label className="form-check-label" htmlFor="invalidCheck2">
                                            Agree to terms and conditions
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary" type="submit">Submit form</button>
                                </div>
                            </form>


                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <br />


            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">fecha</th>
                            <th scope="col">Cliente</th>
                            <th scope="col">fecha Hora Inicio</th>
                            <th scope="col">Fecha Hora Final</th>
                            <th scope="col">Contrato</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>cosas</td>
                            <td>mas cosas</td>
                            <td>
                                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticUpdate">
                                    Editar
                                </button>
                                <div className="modal fade" id="staticUpdate" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">

                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                                <button type="button" className="btn btn-danger">Eliminar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticDelete">
                                    Eliminar
                                </button>
                                <div className="modal fade" id="staticDelete" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                Estas Seguro ?
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                                <button type="button" className="btn btn-danger">Eliminar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>




            </div>

        </>
    )
}

export default tablaClases