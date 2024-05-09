//1º FUNÇÂO
function DataMaior(date1, date2) {
    return date1 > date2 ? date1 : date2;
}

//2º FUNÇÂO
function calcularIntervalo(dataAntiga, dataNova) {
    if (dataAntiga > dataNova) {
        return "A PRIMEIRA DATA DEVE SER MAIS ANTIGA QUE A SEGUNDA.";
    }
    
    const diff = dataNova.getTime() - dataAntiga.getTime();
    const umDiaEmMs = 1000 * 60 * 60 * 24;
    const diasDeIntervalo = Math.floor(diff / umDiaEmMs);

    return `Intervalo em dias: ${diasDeIntervalo}`;
}

//3º FUNÇÂO
function dataAtualFormatada() {
    const dataAtual = new Date();
    const hora = String(dataAtual.getHours()).padStart(2, '0');
    const minuto = String(dataAtual.getMinutes()).padStart(2, '0');
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Mês começa do zero, por isso o +1
    const ano = dataAtual.getFullYear();
    
    return `${hora}:${minuto} - ${dia}/${mes}/${ano}`;
}


const data1 = new Date(2023, 4, 1); 
const data2 = new Date(2023, 4, 10); 

console.log(maiorData(data1, data2)); // R
console.log(calcularIntervalo(data1, data2)); // Deve retornar o intervalo em dias
console.log(dataAtualFormatada()); // Deve retornar a data atual no formato especificado