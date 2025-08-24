const API_KEY = "eff007ed85548b18f4fa777927ed9809"; // pon la tuya
const BACKEND_URL = "http://localhost:5000"; // backend local

// Referencias DOM
const inputCiudad = document.getElementById("ciudadInput");
const btnBuscar = document.getElementById("buscarBtn");
const divResultado = document.getElementById("resultado");
const ulFavoritos = document.getElementById("favoritos");

// Buscar clima
btnBuscar.addEventListener("click", async () => {
  const ciudad = inputCiudad.value.trim();
  if (!ciudad) return alert("Escribe una ciudad!");

  try {
    // Llamada a OpenWeather
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`);
    const data = await res.json();

    if (data.cod !== 200) {
      divResultado.innerHTML = `<p>❌ No encontrada</p>`;
      return;
    }

    // Mostrar resultado
    divResultado.innerHTML = `
      <h3>${data.name} (${data.sys.country})</h3>
      <p>🌡️ Temp: ${data.main.temp} °C</p>
      <p>${data.weather[0].description}</p>
      <button onclick="guardarFavorito('${data.name}')">⭐ Guardar Favorito</button>
    `;
  } catch (error) {
    console.error(error);
    alert("Error al buscar clima");
  }
});

// Guardar ciudad en favoritos (backend + Mongo)
async function guardarFavorito(nombre) {
  try {
    const res = await fetch(`${BACKEND_URL}/favorites`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre })
    });
    const data = await res.json();

    if (data.error) {
      alert(data.error);
    } else {
      cargarFavoritos();
    }
  } catch (error) {
    console.error(error);
  }
}

// Cargar lista de favoritos
async function cargarFavoritos() {
  const res = await fetch(`${BACKEND_URL}/favorites`);
  const favoritos = await res.json();

  ulFavoritos.innerHTML = "";
  favoritos.forEach(c => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${c.nombre}
      <div>
        <button onclick="verClima('${c.nombre}')">🌤️</button>
        <button onclick="eliminarFavorito('${c._id}')">🗑️</button>
      </div>
    `;
    ulFavoritos.appendChild(li);
  });
}

// Ver clima desde favoritos
async function verClima(nombre) {
  inputCiudad.value = nombre;
  btnBuscar.click();
}

// Eliminar favorito
async function eliminarFavorito(id) {
  await fetch(`${BACKEND_URL}/favorites/${id}`, { method: "DELETE" });
  cargarFavoritos();
}

// Inicializar lista
cargarFavoritos();
