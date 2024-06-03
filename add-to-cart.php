<?php
session_start();

if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = [];
}

$itemId = $_POST['add_to_cart'];
$quantity = isset($_POST["quantity_$itemId"]) ? (int)$_POST["quantity_$itemId"] : 1;

$items = include 'items.php';

if (isset($items[$itemId])) {
    if (isset($_SESSION['cart'][$itemId])) {
        $_SESSION['cart'][$itemId]['quantity'] += $quantity;
    } else {
        $_SESSION['cart'][$itemId] = $items[$itemId];
        $_SESSION['cart'][$itemId]['quantity'] = $quantity;
    }
}

header("Location: basket.php");
exit();
?>