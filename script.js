// Función para descargar la tarjeta como imagen
function downloadCard() {
    const card = document.getElementById('dniCard');
    
    // Usamos html2canvas (cargado desde CDN en el HTML)
    html2canvas(card, {
        scale: 3, // Alta resolución
        useCORS: true,
        backgroundColor: null
    }).then(canvas => {
        // Crear enlace de descarga
        const link = document.createElement('a');
        link.download = 'dni-mockup-educativo.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}

// Función para resetear los datos a los originales
function resetCard() {
    if(confirm("¿Estás seguro de resetear los datos editados?")) {
        location.reload(); // La forma más simple para este demo
    }
}

// Permitir edición solo en ciertos campos al hacer doble clic (opcional)
document.querySelectorAll('[contenteditable="true"]').forEach(el => {
    el.addEventListener('blur', function() {
        // Aquí podrías añadir validación de formato si quisieras
        console.log("Campo editado:", this.innerText);
    });
});
