
const countdown = document.getElementById("countdown");
const weddingDate = new Date("2025-07-10T10:30:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    countdown.innerHTML = "🎉 È il nostro grande giorno!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `Mancano ${days} giorni, ${hours} ore, ${minutes} minuti e ${seconds} secondi!`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
