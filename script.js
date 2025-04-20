// Set target time to midnight (00:00)
const today = new Date();
// Establecer la fecha objetivo específica (20 de abril 2025)
const countDownDate = new Date(2025, 3, 20, 0, 0, 0).getTime();

// Fechas configurables manualmente
const startDate = new Date(2024, 3, 3, 17, 32, 0);  // Fecha y hora inicial
const endDate = new Date(2024, 3, 4, -5, -35, -14);     // Fecha y hora final
let elapsedTime = 0;

const countdownFunction = setInterval(function() {
    elapsedTime += 1000;
    const now = new Date(startDate.getTime() + elapsedTime);
    const distance = endDate.getTime() - now.getTime();
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("downloadBtn").style.display = "block";
    }
}, 1000);

function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'Feliz_Cumpleanos_Mi_Amor.pptx';
    link.download = 'Feliz_Cumpleanos_Mi_Amor.pptx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

