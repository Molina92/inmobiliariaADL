const venta_container = document.querySelector('#venta_container')
const alquiler_container = document.querySelector('#alquiler_container')
let ventaTemplate = ''
let alquilerTemplate = ''


for (let i = 0; i < 3; i++) {
    const venta = PropiedadesEnVenta[i]

    ventaTemplate += /*html*/`
        <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${venta.image}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">${venta.title}</h5>
                <p class="card-text">${venta.description}</p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${venta.direction}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${venta.rooms} |
                  <i class="fas fa-bath"></i> ${venta.bathroom}
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${venta.price}</p>
                
                ${venta.smoke === true ? 
                    `<p class="text-success">
                      <i class="fas fa-smoking"></i> Permitido fumar
                    </p>` 
                    : 
                    `<p class="text-danger">
                      <i class="fas fa-smoking-ban"></i> No se permite fumar
                    </p>`
                }

                ${venta.pets === true ? 
                    `<p class="text-success">
                      <i class="fas fa-paw"></i> Mascotas permitidas
                    </p>` 
                    : 
                    `<p class="text-danger">
                      <i class="fas fa-ban"></i> No se permiten mascotas
                    </p>`
                }
            </div>
            </div>
          </div>
    `
}

venta_container.innerHTML = ventaTemplate

for (let i = 0; i < 3; i++) {
    const alquiler = PropiedadesEnAlquiler[i]

    alquilerTemplate += /*html*/`
        <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${alquiler.image}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">${alquiler.title}</h5>
                <p class="card-text">${alquiler.description}</p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${alquiler.direction}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${alquiler.rooms} |
                  <i class="fas fa-bath"></i> ${alquiler.bathroom}
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${alquiler.price}</p>
                
                ${alquiler.smoke === true ? 
                    `<p class="text-success">
                      <i class="fas fa-smoking"></i> Permitido fumar
                    </p>` 
                    : 
                    `<p class="text-danger">
                      <i class="fas fa-smoking-ban"></i> No se permite fumar
                    </p>`
                }

                ${alquiler.pets === true ? 
                    `<p class="text-success">
                      <i class="fas fa-paw"></i> Mascotas permitidas
                    </p>` 
                    : 
                    `<p class="text-danger">
                      <i class="fas fa-ban"></i> No se permiten mascotas
                    </p>`
                }
            </div>
            </div>
          </div>
    `
}

alquiler_container.innerHTML = alquilerTemplate