const alquiler_container = document.querySelector('#alquiler_container')
let alquilerTemplate = ''

for (itemVenta in PropiedadesEnAlquiler) {
    const alquiler = PropiedadesEnAlquiler[itemVenta]

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