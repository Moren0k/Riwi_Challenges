const textInput = document.getElementById('textInput');
const resultsContainer = document.getElementById('resultsContainer');

document.getElementById('textForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = textInput.value;

    // Call your backend API for analysis
    const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
    });

    const result = await response.json();
    resultsContainer.textContent = JSON.stringify(result, null, 2);
});
