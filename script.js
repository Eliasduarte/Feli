// Establecer la fecha objetivo correctamente
const countDownDate = new Date(2025, 3, 21, 0, 0, 0).getTime();

// Actualiza el contador cada segundo
const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    
    // Cálculos de tiempo ajustados
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    
    // Si el contador llega a 0, mostrar el botón de descarga
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("downloadBtn").style.display = "block";
    }
}, 1000);

// Función para descargar el PDF (se puede personalizar más tarde)
function downloadPDF() {
    // Crear un enlace para descargar el PDF
    const link = document.createElement('a');
    link.href = 'Feliz_Cumpleanos_Mi_Amor.pptx'; // Asegúrate de que tu PDF esté en la misma carpeta y se llame "carta.pdf"
    link.download = 'Feliz_Cumpleanos_Mi_Amor.pptx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
