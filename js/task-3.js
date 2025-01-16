// Оголошуємо функцію checkForSpam
function checkForSpam(message) {
  // Перевірка на наявність слів 'spam' або 'sale' (у будь-якому регістрі)
  const normalizedMessage = message.toLowerCase(); // Перетворюємо текст у нижній регістр
  return normalizedMessage.includes("spam") || normalizedMessage.includes("sale");
}

// Код для перевірки функціоналу
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
