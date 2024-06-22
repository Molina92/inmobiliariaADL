const venta_container = document.querySelector('#venta_container')

let ventaTemplate = ''

for (itemVenta in PropiedadesEnVenta) {
    const venta = PropiedadesEnVenta[itemVenta]

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