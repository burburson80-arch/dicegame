const rollBtn = document.getElementById("rollBtn");
const result = document.getElementById("result");

rollBtn.addEventListener("click", async () => {
  result.textContent = "Бросаем кости...";

  try {
    const response = await fetch("/api/roll");
    if (!response.ok) {
      throw new Error("Ошибка API");
    }

    const data = await response.json();
    result.innerHTML = `Игрок: <b>${data.player}</b><br>API: <b>${data.api}</b><br>Победитель: <b>${data.winner}</b>`;
  } catch (_error) {
    result.textContent = "Не удалось выполнить бросок. Попробуйте еще раз.";
  }
});
