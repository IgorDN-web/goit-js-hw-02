function getShippingCost(country) {
  let message;

  // Приводим название страны к нижнему регистру для независимости от регистра
  const normalizedCountry = country.toLowerCase();

  // Используем switch для проверки стран и соответствующих цен
  switch (normalizedCountry) {
    case 'china':
      message = `Shipping to China will cost 100 credits`;
      break;
    case 'chile':
      message = `Shipping to Chile will cost 250 credits`;
      break;
    case 'australia':
      message = `Shipping to Australia will cost 170 credits`;
      break;
    case 'jamaica':
      message = `Shipping to Jamaica will cost 120 credits`;
      break;
    default:
      message = "Sorry, there is no delivery to your country";
  }

  return message;
}

// Проверка функции с разными странами
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
