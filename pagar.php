<?php
// SDK de Mercado Pago
require __DIR__ .  '/vendor/autoload.php';

// Agrega credenciales
MercadoPago\SDK::setAccessToken('TEST-5404431286139545-080618-5c751730bbb484c10e6e805945e27df5-179638860');

// Crea un objeto de preferencia
$preference = new MercadoPago\Preference();

// Crea un ítem en la preferencia



$item = new MercadoPago\Item();
$item->title = 'Pantalon';
$item->quantity = 1;
$item->unit_price = 75.56;
$preference->items = array($item);
$preference->save();



/* curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer TEST-5404431286139545-080618-5c751730bbb484c10e6e805945e27df5-179638860' \
"https://api.mercadopago.com/users/test_user" \
-d '{"site_id":"MLA"}'

// {"id":678602568,"nickname":"TETE7774953","password":"qatest1150","site_status":"active","email":"test_user_72722204@testuser.com"}
// {"id":678607995,"nickname":"TESTRWANMYZA","password":"qatest5420","site_status":"active","email":"test_user_61481580@testuser.com"}

*/
?>

<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Metodo de pago</title>
</head>
<body>
<script
  src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
  data-preference-id="<?php echo $preference->id; ?>">
</script>

</body>
</html>

