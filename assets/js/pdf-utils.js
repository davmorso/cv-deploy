function exportToPDF(elementId, fileName = 'cv.pdf') {
  // Asegúrate de tener jsPDF y html2canvas cargados globalmente si usas este método
  const element = document.getElementById(elementId);
  if (!element) return;
  html2canvas(element).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(fileName);
  });
}