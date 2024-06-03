<?php
require __DIR__ . "/vendor/autoload.php";
session_start();

if (!isset($_SESSION['cart']) || empty($_SESSION['cart'])) {
    header("Location: index.php");
    exit();
}

$stripe_secret_key = "sk_test_51PGkyBHKl98vlgXrqs4a37enMDUBZLjPUKSPeGdLZh88Em2kn4SnvOSBZ4k1y6NJyQorcRkdRwTvWuhVZgM6zJxN007VsDt0ip"; // change this with your own secret key

\Stripe\Stripe::setApiKey($stripe_secret_key);

$line_items = [];

foreach ($_SESSION['cart'] as $item) {
    $line_items[] = [
        "quantity" => $item['quantity'],
        "price_data" => [
            "currency" => "php",
            "unit_amount" => $item['price'],
            "product_data" => [
                "name" => $item['name']
            ]
        ]
    ];
}

$description = "";
foreach ($_SESSION['cart'] as $item) {
    $quantity = $item['quantity'];
    $price_per_quantity = $item['price'] / 100;
    $total_price = $quantity * $price_per_quantity;
    
    $description .= "<b>{$item['name']}</b> (<b>Price:</b> ₱{$price_per_quantity}, <b>Qty:</b> {$quantity}, <b>Total:</b> ₱{$total_price} php) <br>";
}

date_default_timezone_set('Asia/Manila');
$purchase_date = date_create()->format('M d, Y g:i a');
$description .= "<br><b>Order Date and Time:</b> {$purchase_date}<br>";

// Construct absolute URLs
$base_url = "http://" . $_SERVER['HTTP_HOST'] . rtrim(dirname($_SERVER['PHP_SELF']), '/\\') . "/";
$success_url = $base_url . 'success.php';
$cancel_url = $base_url . 'cancelled-payment.php';

$checkout_session = \Stripe\Checkout\Session::create([
    "mode" => "payment",
    "success_url" => $success_url,
    "cancel_url" => $cancel_url,
    "line_items" => $line_items,
    "shipping_address_collection" => [
        "allowed_countries" => ["PH"]
    ],
    "payment_intent_data" => [
        "description" => $description
    ]
]);

// Clear the cart after creating the Stripe checkout session
$_SESSION['cart'] = [];

// Update basket count to 0 and redirect to the Stripe checkout session URL
echo "
    <script>
        localStorage.setItem('basketItemCount', 0);
        window.location.href = '" . $checkout_session->url . "';
    </script>
";

// Redirect to the Stripe checkout session URL
header("Location: " . $checkout_session->url);
exit();
?>