const API_URL = "http://localhost:3000";
let currentAnalysisId = null;
let currentFeedbackId = null;

// Cargar tabla
async function loadAnalysis() {
  const res = await fetch(`${API_URL}/analysis`);
  const data = await res.json();
  const tbody = document.querySelector("#analysisTable tbody");
  tbody.innerHTML = "";

  data.forEach(item => {
    tbody.innerHTML += `
      <tr>
        <td>${item.name_coder}</td>
        <td>${item.name_training}</td>
        <td>${item.ia_detected ? "Si" : "No"}</td>
        <td>
          <button class="btn btn-primary btn-sm" onclick="openModal(${item.analysis_id})">Ver</button>
        </td>
      </tr>
    `;
  });
}

// Abrir modal con info
async function openModal(analysisId) {
  currentAnalysisId = analysisId;

  const res = await fetch(`${API_URL}/analysis/${analysisId}`);
  const item = await res.json();

  // Rellenar modal
  document.getElementById("modalIaPercentage").innerText = `${item.ia_percentage}%`;
  document.getElementById("modalExplanation").innerText = item.explanation || "-";
  document.getElementById("modalFeedbackText").innerText = item.comment || "Sin feedback";

  // Resetear textarea
  document.getElementById("modalFeedbackInput").value = "";

  // Guardar feedback_id actual (si existe)
  currentFeedbackId = item.feedback_id || null;

  // Mostrar modal
  const modal = new bootstrap.Modal(document.getElementById("analysisModal"));
  modal.show();
}

// Guardar feedback
document.getElementById("btnSaveFeedback").addEventListener("click", async () => {
  const comment = document.getElementById("modalFeedbackInput").value.trim();
  if (!comment) {
    alert("⚠️ Escribe un feedback antes de guardar.");
    return;
  }

  const res = await fetch(`${API_URL}/feedback`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ analysis_id: currentAnalysisId, comment })
  });

  if (res.ok) {
    alert("✅ Feedback guardado");
    loadAnalysis();
    bootstrap.Modal.getInstance(document.getElementById("analysisModal")).hide();
  } else {
    alert("❌ Error guardando feedback");
  }
});

// Eliminar feedback
document.getElementById("btnDeleteFeedback").addEventListener("click", async () => {
  if (!currentFeedbackId) {
    alert("⚠️ Este análisis no tiene feedback para eliminar.");
    return;
  }

  if (!confirm("¿Seguro que deseas eliminar este feedback?")) return;

  const res = await fetch(`${API_URL}/feedback/${currentFeedbackId}`, { method: "DELETE" });

  if (res.ok) {
    alert("🗑 Feedback eliminado");
    loadAnalysis();
    bootstrap.Modal.getInstance(document.getElementById("analysisModal")).hide();
  } else {
    alert("❌ Error eliminando feedback");
  }
});

// Inicializar
loadAnalysis();
