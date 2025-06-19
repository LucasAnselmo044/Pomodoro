const botaoStart = document.getElementById("start");
const display = document.getElementById("timer");

let tempo = 25 * 60;
let intervaloId = null;

function formatarTempo(segundos) {
  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = segundos % 60;
  return `${String(minutos).padStart(2, "0")}:${String(
    segundosRestantes
  ).padStart(2, "0")}`;
}

function atualizarDisplay() {
  display.textContent = formatarTempo(tempo);
}

function comecarCronometro() {
  if (intervaloId !== null) return;

  intervaloId = setInterval(() => {
    if (tempo > 0) {
      tempo--;
      atualizarDisplay();
    } else {
      clearInterval(intervaloId);
      intervaloId = null;
      alert("Pomodoro finalizado!");
    }
  }, 1000);
}

atualizarDisplay();
botaoStart.addEventListener("click", comecarCronometro);
