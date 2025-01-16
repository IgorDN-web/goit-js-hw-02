// Оголошуємо функцію formatMessage
function formatMessage(message, maxLength) {
  // Перевірка: якщо довжина менша або дорівнює maxLength, повертаємо рядок без змін
  if (message.length <= maxLength) {
    return message;
  }

  // Інакше обрізаємо рядок до maxLength символів і додаємо трикрапку
  return message.slice(0, maxLength) + "...";
}

// Код для перевірки функціоналу
console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"
