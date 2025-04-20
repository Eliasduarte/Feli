

function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'Feliz_Cumpleanos_Mi_Amor.pptx';
    link.download = 'Feliz_Cumpleanos_Mi_Amor.pptx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

