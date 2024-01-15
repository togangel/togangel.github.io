$(document).ready(function () {
    // Initialize signature pads
    var signaturePad1 = new SignaturePad(document.getElementById('sig-canvas1'));
    var signaturePad2 = new SignaturePad(document.getElementById('sig-canvas2'));

    // Open the first signature modal
    $("#openSignatureModal1").click(function () {
        $("#signatureModal1").modal("show");
        signaturePad1.clear();
    });

    // Open the second signature modal
    $("#openSignatureModal2").click(function () {
        $("#signatureModal2").modal("show");
        signaturePad2.clear();
    });

    // Handle the "Aceptar" button for the first signature
    $("#sig-submitBtn1").click(function () {
        var dataUrl = signaturePad1.toDataURL();
        $("#sig-dataUrl1").val(dataUrl);
        $("#signatureModal1").modal("hide");
        
        // Muestra la firma en el HTML principal
    $("#firmaImagen1").attr("src", dataUrl);
    });

    // Handle the "Borrar" button for the first signature
    $("#sig-clearBtn1").click(function () {
        signaturePad1.clear();
    });

    // Handle the "Aceptar" button for the second signature
    $("#sig-submitBtn2").click(function () {
        var dataUrl = signaturePad2.toDataURL();
        $("#sig-dataUrl2").val(dataUrl);
        $("#signatureModal2").modal("hide");
        
        // Muestra la firma en el HTML principal
    $("#firmaImagen2").attr("src", dataUrl);
    });

    // Handle the "Borrar" button for the second signature
    $("#sig-clearBtn2").click(function () {
        signaturePad2.clear();
    });
});

// Function to generate datalist for options
function generateDataList(options, id) {
    const datalist = document.createElement('datalist');
    datalist.id = id;

    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.textContent = option;
        datalist.appendChild(optionElement);
    });

    return datalist;
}

// Function to initialize Signature Pad for a given canvas
function initializeSignatureCanvas(canvasId) {
    var canvas = document.getElementById(canvasId);
    var signaturePad = new SignaturePad(canvas);
}

function imprimir(){
	window.print();
}

const options = {
    C0: ['S1', 'S2', 'ST2', 'S3', 'ST3', 'JP', 'Omega', 'Lumina', 'Ventura', 'Quadra'],
    C1: ['R01', 'R02', 'R03', 'R04', 'R05', 'R06', 'R07', 'R08', 'R09', 'R10', 'R11', 'R12', 'R13', 'R14', 'R15', 'R16', 'R17', 'R18', 'R19', 'R00', 'E20', 'E21', 'E22', 'E23', 'E24', 'E25', 'E26', 'E27', 'E00'],
    C2: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16'],
    C3: ['Cúpula', 'Bola', 'JP Controler', 'Pantallas', 'Luces', 'Llaves', 'Brackets', 'Sign', 'Ceniceros'],
    C4: ['R01', 'R02', 'R03', 'R04', 'R05', 'R06', 'R07', 'R08', 'R09', 'R10', 'R11', 'R12', 'R13', 'R14', 'R15', 'R16', 'R17', 'R18', 'R19', 'R00', 'E20', 'E21', 'E22', 'E23', 'E24', 'E25', 'E26', 'E27', 'E00']
};

function generateRow(rowNumber) {
    const tr = document.createElement('tr');

    // Número de fila
    const tdNumber = document.createElement('td');
    tdNumber.textContent = rowNumber;
    tr.appendChild(tdNumber);

    // Lógica para generar cada celda según tus necesidades
    // Aquí un ejemplo con C0
    const tdC0 = document.createElement('td');
    const inputC0 = document.createElement('input');
    inputC0.setAttribute('list', `C0`);
    inputC0.classList.add('input-group');
    const datalistC0 = document.createElement('datalist');
    datalistC0.id = `C0`;

    options.C0.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.textContent = option;
      datalistC0.appendChild(optionElement);
    });

    inputC0.appendChild(datalistC0);
    tdC0.appendChild(inputC0);
    tr.appendChild(tdC0);

    // Serie
    const tdSerie = document.createElement('td');
    const inputSerie = document.createElement('input');
    inputSerie.classList.add('input-group');
    inputSerie.type = 'tel';
    inputSerie.pattern = '\\d*';
    inputSerie.maxLength = '6';
    tdSerie.appendChild(inputSerie);
    tr.appendChild(tdSerie);

    // Wibu
    const tdWibu = document.createElement('td');
    const inputWibu = document.createElement('input');
    inputWibu.classList.add('input-group');
    inputWibu.type = 'tel';
    inputWibu.pattern = '\\d*';
    inputWibu.maxLength = '11';
    tdWibu.appendChild(inputWibu);
    tr.appendChild(tdWibu);

    // Codigo1
    const tdCode1 = document.createElement('td');
    const inputCode1 = document.createElement('input');
    inputCode1.setAttribute('list', `C1`);
    inputCode1.classList.add('input-group');
    const datalistCode1 = document.createElement('datalist');
    datalistCode1.id = `C1`;

    options.C1.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.textContent = option;
      datalistCode1.appendChild(optionElement);
    });

    inputCode1.appendChild(datalistCode1);
    tdCode1.appendChild(inputCode1);
    tr.appendChild(tdCode1);

    // Codigo2
    const tdCode2 = document.createElement('td');
    const inputCode2 = document.createElement('input');
    inputCode2.setAttribute('list', `C1`);
    inputCode2.classList.add('input-group');
    const datalistCode2 = document.createElement('datalist');
    datalistCode2.id = `C1`;

    options.C1.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.textContent = option;
      datalistCode2.appendChild(optionElement);
    });

    inputCode2.appendChild(datalistCode2);
    tdCode2.appendChild(inputCode2);
    tr.appendChild(tdCode2);

    // Cnt
    const tdCnt = document.createElement('td');
    const inputCnt = document.createElement('input');
    inputCnt.setAttribute('list', `C2`);
    inputCnt.classList.add('input-group');
    const datalistCnt = document.createElement('datalist');
    datalistCnt.id = `C2`;

    options.C2.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.textContent = option;
      datalistCnt.appendChild(optionElement);
    });

    inputCnt.appendChild(datalistCnt);
    tdCnt.appendChild(inputCnt);
    tr.appendChild(tdCnt);

    // Ruleta
    const tdRuleta = document.createElement('td');
    const inputRuleta = document.createElement('input');
    inputRuleta.setAttribute('list', `C3`);
    inputRuleta.classList.add('input-group');
    const datalistRuleta = document.createElement('datalist');
    datalistRuleta.id = `C3`;

    options.C3.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.textContent = option;
      datalistRuleta.appendChild(optionElement);
    });

    inputRuleta.appendChild(datalistRuleta);
    tdRuleta.appendChild(inputRuleta);
    tr.appendChild(tdRuleta);

    // Si
    const tdSi = document.createElement('td');
    const inputSi = document.createElement('input');
    inputSi.classList.add('input-group');
    inputSi.type = 'checkbox';
	inputSi.id = `checkbox_${rowNumber}`;
    tdSi.appendChild(inputSi);
    tr.appendChild(tdSi);

    // Codigo3
    const tdCode3 = document.createElement('td');
    const inputCode3 = document.createElement('input');
    inputCode3.setAttribute('list', `C1`);
    inputCode3.classList.add('input-group');
    const datalistCode3 = document.createElement('datalist');
    datalistCode3.id = `C1`;

    options.C1.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.textContent = option;
      datalistCode3.appendChild(optionElement);
    });

    inputCode3.appendChild(datalistCode3);
    tdCode3.appendChild(inputCode3);
    tr.appendChild(tdCode3);

    // Código, Código, #
    // Puedes continuar añadiendo lógica para el resto de las celdas

    return tr;
  }

  const numRows = 12;
const tableBody = document.getElementById('tableBody');

for (let i = 1; i <= numRows; i++) {
    tableBody.appendChild(generateRow(i));
}
