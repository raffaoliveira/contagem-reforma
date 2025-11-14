const dataInicial = new Date('2025-11-14T09:25:00')

const recorde = '1 Dia e 18:10:30 Horas'

function atualizarContador() {
  const agora = new Date()
  const diferenca = agora - dataInicial

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24))
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60))
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000)

  const horasFormatadas = String(horas).padStart(2, '0')
  const minutosFormatados = String(minutos).padStart(2, '0')
  const segundosFormatados = String(segundos).padStart(2, '0')

  if (dias !== 1) {
    document.getElementById('stringDays').textContent = 'Dias'
  } else {
    document.getElementById('stringDays').textContent = 'Dia'
  }

  document.getElementById('days').textContent = dias
  document.getElementById(
    'time'
  ).textContent = `${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`

  if (recorde === null || recorde === '') {
    document.getElementById(
      'record'
    ).textContent = `${dias} dias e ${horasFormatadas}:${minutosFormatados}:${segundosFormatados} horas`
  } else {
    document.getElementById('record').textContent = recorde
  }
}

atualizarContador()
setInterval(atualizarContador, 1000)
