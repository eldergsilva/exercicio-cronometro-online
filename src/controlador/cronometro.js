let rodando = false;
let minutos = 0;
let segundos = 0;
let setIntervalDisparado = false;

const raiz = (req, res) => {
  const minutosFormatado = (minutos + segundos / 60).toFixed(1);
  const segundosFormatado = String(segundos).padStart(2, '0');
  return res.send(`tempo atual do cronômetro é de ${minutosFormatado.toString().padStart(2,"0")} minutos e ${segundosFormatado.toString().padStart(2,"0")} segundos`);
}

const iniciarCronometro = (req, res) => {
  rodando = true;
  if (!setIntervalDisparado) {
    setInterval(() => {
      if (rodando) {
        if (segundos === 59) {
          segundos = 0;
          minutos++;
        } else {
          segundos++;
        }
      }
    }, 1000)
    setIntervalDisparado = true;
  }
  return res.send('Cronometro iniciado!');
}

const pausarCronometro = (req, res) => {
  rodando = false;
  return res.send('Cronometro Pausado!');
}

const continuarCronometro = (req, res) => {
  rodando = true;
  return res.send('Cronometro continuado!');
}

const zerarCronometro = (req, res) => {
  minutos = 0;
  segundos = 0;
  return res.send('Cronometro zerado!');
}

module.exports = {
  raiz,
  iniciarCronometro,
  pausarCronometro,
  continuarCronometro,
  zerarCronometro
}