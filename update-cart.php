<?php
session_start();

$response = ['success' => false];

if (isset($_POST['action']) && $_POST['action'] == 'update_quantity') {
    $id = $_POST['item_id'];
    $quantity = $_POST['quantity'];

    if ($quantity <= 0) {
        unset($_SESSION['cart'][$id]);
    } else {
        $_SESSION['cart'][$id]['quantity'] = $quantity;
    }

    // Calculate subtotal and total
    $subtotal = 0;
    if (isset($_SESSION['cart'][$id])) {
        $subtotal = number_format(($_SESSION['cart'][$id]['price'] * $_SESSION['cart'][$id]['quantity']) / 100, 2);
    }

    $total = 0;
    foreach ($_SESSION['cart'] as $item) {
        $total += $item['price'] * $item['quantity'];
    }
    $total = number_format($total / 100, 2);

    $totalItems = array_sum(array_column($_SESSION['cart'], 'quantity'));

    $response = [
        'success' => true,
        'subtotal' => $subtotal,
        'total' => $total,
        'totalItems' => $totalItems
    ];

    echo json_encode($response);
    exit();
}

if (isset($_POST['update_cart'])) {
    foreach ($_POST['quantities'] as $id => $quantity) {
        if ($quantity <= 0) {
            unset($_SESSION['cart'][$id]);
        } else {
            $_SESSION['cart'][$id]['quantity'] = $quantity;
        }
    }
}

if (isset($_POST['remove_item'])) {
    $id = $_POST['remove_item'];
    unset($_SESSION['cart'][$id]);
}

if (isset($_POST['clear_cart'])) {
    $_SESSION['cart'] = [];
}

$totalItems = array_sum(array_column($_SESSION['cart'], 'quantity'));

echo "
    <script>
        localStorage.setItem('basketItemCount', $totalItems);
        window.location.href = 'basket.php';
    </script>
";

exit();
?>
