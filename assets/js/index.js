const venta_container = document.querySelector('#venta_container')
let ventaTemplate = ''

//DEFINICION DEL HTML
venta_container.innerHTML = /*html*/`
    <h2>Propiedades en venta</h2>
    <div class="row">
`

for (let i = 0; i < 3; i++) {
    const venta = PropiedadesEnVenta[i]

    ventaTemplate += /*html*/`
        <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${PropiedadesEnVenta.image}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text"></p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> 123 Luxury Lane,
                  Prestige Suburb, CA 45678
                </p>
                <p>
                  <i class="fas fa-bed"></i> 4 Habitaciones |
                  <i class="fas fa-bath"></i> 4 Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> 5.000</p>
                <p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>
                <p class="text-danger">
                  <i class="fa-solid fa-ban"></i> No se permiten mascotas
                </p>
              </div>
            </div>
          </div>
    `
}