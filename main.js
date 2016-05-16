define(function(require) {
  require('pdfjs-dist/web/compatibility');
  require('pdfjs-dist/build/pdf');
  require('pdfjs-dist/web/pdf_viewer');

  document.write('PDFJS Global: ' + PDFJS);
  document.write('PDFJS Viewer: ' + PDFJS.PDFViewer);
});