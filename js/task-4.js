function getShippingCost(country) {
  let shippingCost;

  // Оператор switch для определения стоимости доставки
  switch (country.toLowerCase()) {
    case 'usa':
      shippingCost = 10;
      break;
    case 'canada':
      shippingCost = 15;
      break;
    case 'uk':
      shippingCost = 20;
      break;
    case 'australia':
      shippingCost = 25;
      break;
    default:
      shippingCost = 30; // Стоимость для других стран
  }

  return shippingCost;
}

// Проверка функции с разными странами
console.log(getShippingCost("USA")); // 10
console.log(getShippingCost("Canada")); // 15
console.log(getShippingCost("UK")); // 20
console.log(getShippingCost("Australia")); // 25
console.log(getShippingCost("Germany")); // 30
