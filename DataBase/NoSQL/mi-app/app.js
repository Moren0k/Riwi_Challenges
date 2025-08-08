const API_URL = "http://localhost:3000/people"; // Cambia si tu endpoint es diferente

// Cargar tabla al iniciar
document.addEventListener("DOMContentLoaded", loadPeople);

function loadPeople() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            const tableBody = document.getElementById("peopleTable");
            tableBody.innerHTML = "";
            data.forEach(person => {
                tableBody.innerHTML += `
                    <tr>
                        <td>${person.name}</td>
                        <td>${person.lastname}</td>
                        <td>${person.lastname2 || ""}</td>
                        <td>${person.age}</td>
                        <td>${person.id}</td>
                        <td>${person.email}</td>
                        <td>${person.country || ""}</td>
                    </tr>
                `;
            });
        })
        .catch(err => console.error(err));
}

// Manejar envío del formulario
document.getElementById("personForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(() => {
        // Cerrar modal
        const modal = bootstrap.Modal.getInstance(document.getElementById("addPersonModal"));
        modal.hide();

        // Limpiar formulario
        this.reset();

        // Recargar tabla
        loadPeople();
    })
    .catch(err => console.error(err));
});
