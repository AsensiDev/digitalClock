function updateClock() {
    const now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
  
    // Formato de 2 dígitos para horas, minutos y segundos
    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
  
    // Mostrar la hora en el div con id 'clock'
    const timeString = `${hours}:${minutes}:${seconds}`
    document.getElementById('clock').textContent = timeString
  }
  
  // Actualizar el reloj cada segundo
  setInterval(updateClock, 1000)
  
  // Llamar la función al cargar la página para evitar el retraso inicial
  updateClock()
  








