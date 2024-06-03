<?php
session_start();
$cart = isset($_SESSION['cart']) ? $_SESSION['cart'] : [];
$total = 0; // Initialize total variable with default value

if (!empty($cart)) {
    foreach ($cart as $item) {
        $total += $item['price'] * $item['quantity'];
    }
}
?>

<!DOCTYPE html>
<html lang="en" xml:lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="robots" content="index, follow">
    <title>Your Basket</title>
    
    <meta name="description" content="A Funko POP! Shop">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="icon" href="assets\img\collectiverse.ico" type="image/x-icon">
    
    <link rel="stylesheet" href="assets\css\style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.3.0/css/swiper.min.css">

    <script src="assets\js\vendor\modernizr-2.6.2.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="assets\js\vendor\jquery-1.10.2.min.js"><\/script>')</script>
	<script async src="https://platform-api.sharethis.com/js/sharethis.js#property=5c3dbd82f8e3630010a0e3fe&product=sticky-share-buttons"></script>
 
	<script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        
        gtag('consent', 'default', {
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'wait_for_update': 500,
        });
                        
        gtag('js', new Date());

        gtag('config', 'G-E0GSYFWH1S', {'allow_enhanced_conversions':true});
    </script>
</head>

<body>
    <!-- Header -->
    <?php include 'header.php';?>

    <div class="content-wrapper wrapper full-width">
        <!-- Main Content -->
        <div class="content" role="main">
            <section class="basket">
                <?php if (!empty($cart)): ?>
                    <div class="row">
                        <div class="col--6">
                            <h1 class="roc-text">Review order and checkout</h1>
                        </div>
                    </div>
                    <form method="post" action="update-cart.php" id="basket-form">
                        <table class="basket-table">
                            <tr class="spacer-row"></tr>
                            <tr>
                                <th>Image</th>
                                <th class="item-column">Item</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Subtotal</th>
                                <th>Actions</th>
                            </tr>
                            <tr>
                                <th colspan="6">
                                    <hr class="hr-on-checkout">
                                </th>
                            </tr>
                            <?php foreach ($cart as $id => $item): ?>
                            <tr>
                                <td><img src="<?= $item['image'] ?>" alt="<?= $item['name'] ?>" style="width: 100px;"></td>
                                <td class="item-column"><?= htmlspecialchars($item['name']) ?></td>
                                <td><input type="number" name="quantities[<?= $id ?>]" value="<?= $item['quantity'] ?>" min="1" data-item-id="<?= $id ?>" class="quantity-width"></td>
                                <td>₱<?= number_format($item['price'] / 100, 2) ?></td>
                                <td id="subtotal-<?= $id ?>">₱<?= number_format(($item['price'] * $item['quantity']) / 100, 2) ?></td>
                                <td>
                                    <button type="submit" name="remove_item" value="<?= $id ?>">Remove</button>
                                </td>
                            </tr>
                            <?php endforeach; ?>
                        </table>
                        <div class="buttons-total-container">
                            <table class="basket-table">
                                <tr>
                                    <td style="width: 50%; padding-left: 20px;"><button type="submit" name="clear_cart">CLEAR CART</button></td>
                                    <td style="width: 50%;"><a class="button checkout regress" href="shop.php" style="display: block; width: 100%;">Continue Shopping</a></td>
                                </tr>
                            </table>
                            <div class="table-space"></div>
                            <table class="basket-table">
                                <tr>
                                    <td class="item-column" style="text-align: right;">TOTAL:</td>
                                    <td class="item-column" id="total-price">₱<?= number_format($total / 100, 2) ?></td>
                                </tr>
                            </table>
                        </div>
                    </form>
                    <form method="post" action="checkout.php">
                        <button class="button-group" type="submit" name="basket_checkout">CHECKOUT</button>
                    </form>
                <?php else: ?>
                    <div class="column">
                        <div class="row">
                            <div class="col--6">
                                <h1 class="roc-text">Review order and checkout</h1>
                            </div>
                            <div class="col--6">
                                <a class="button checkout regress f-right" href="shop.php">Continue Shopping</a>
                            </div>
                        </div>
                        <div>
                            <p>Your basket is empty.</p>
                        </div>
                    </div>
                <?php endif; ?>
            </section>
            <!-- /Basket -->
        </div>
        <!-- /Main Content -->
    </div>
    <!-- /Content Wrapper -->

    <div class="clearfix"></div>

    <link rel="stylesheet" href="assets\css\jquery-ui.css">

    <!-- FUNKO BUCKS and Newsletter -->
    <?php include 'funkobucks-newsletter.php';?>
        
    <!-- Footer -->
    <?php include 'footer.php';?>

    <!-- Swiper JS -->
    <script data-cfasync="false" src="https://minifigures.com/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
    <script src="assets\js\swiper.min.js"></script>
    <script src="assets\js\plugins-min.js"></script>
    <script src="assets\js\main-min.js"></script>
    <script src="https://www.google-analytics.com/ga.js" type="text/javascript"></script>
    <script type="text/javascript">
        (function(a) {
            var d = document,
                c = d.createElement("script");
            c.async = !0,
                c.defer = !0,
                c.src = a,
                d.getElementsByTagName("head")[0].appendChild(c)
        })
        ((iatDev = (window.location.href.indexOf("iatDev=1") > -1 || document.cookie.indexOf("iatDev=1") > -1), "//" + (window.location.protocol == "http:" && !iatDev ? "h" : "") + "fp.gdmdigital.com/426861.js?r=" + Math.random() * 1e16 + "&m=992&a=426861" + (iatDev ? "&d=1" : ""))) <
    </script>

    <script type="text/javascript">
        ! function() {
            var a = document.createElement("script");
            a.type = "text/javascript", a.async = !0, a.src = "https://config1.veinteractive.com/tags/999669EC/157D/479E/B735/4594731D4051/tag.js";
            var b = document.getElementsByTagName("head")[0];
            if (b) b.appendChild(a, b);
            else {
                var b = document.getElementsByTagName("script")[0];
                b.parentNode.insertBefore(a, b)
            }
        }();
    </script>

    <script type="text/javascript">
        (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://analytics.webgains.io/clk.min.js', 'ITCLKQ');
        ITCLKQ('set', 'internal.api', true);
        ITCLKQ('set', 'internal.cookie', true);
        ITCLKQ('click');
    </script>

    <script>
        document.querySelectorAll('input[type="number"]').forEach(input => {
            input.addEventListener('change', function() {
                const itemId = this.dataset.itemId;
                const newQuantity = this.value;
                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'update-cart.php', true);
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        const response = JSON.parse(xhr.responseText);
                        document.getElementById(`subtotal-${itemId}`).innerText = `₱${response.subtotal}`;
                        document.getElementById('total-price').innerText = `₱${response.total}`;
                        localStorage.setItem('basketItemCount', response.totalItems);
                        document.getElementById('BasketItems').innerText = response.totalItems;
                    }
                };
                xhr.send(`action=update_quantity&item_id=${itemId}&quantity=${newQuantity}`);
            });
        });
    </script>
</body>
</html>
