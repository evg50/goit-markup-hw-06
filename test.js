function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

  switch (
    type // Change this line
  ) {
    case 'starter': // Change this line
      price = 0; // Change this line
      break;

    case 'professional': // Change this line
      price = 20; // Change this line
      break;

    case 'organization': // Change this line
      price = 50; // Change this line
      break;
  }

  // Change code above this line
  return price;
}

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  // Change code below this line
  switch (password) {
    case null:
      message = 'Canceled by user!';
    case ADMIN_PASSWORD:
      message = 'Welcome!';
    default:
      message = 'Access denied, wrong password!';
  }

  // Change code above this line
  return message;
}
