<!DOCTYPE html>
<html lang="en" xml:lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="robots" content="index, follow">
    <title>Order Success!</title>
    
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
        <div class="content" role="main">

            <div class="breadcrumb">
                <a href="index.php">Home</a>
                <a href="about-us.php">Success!</a>
            </div>
        
            <div class="order-success-content">
                <div class="success-content">
                    <h1>Thank you for your purchase!</h1>
                    <div class="order-details">
                        <img src="assets\img\successful-order.png" alt="Successful Order Image">
                        <p>
                            Thank you for placing an order! <br />
                            Please check your email for your order details. <br />
                            <br />
                            <b>If you have any questions or queries then <br /> feel free to <a class="contact-us-sp" href="contact-us.php">contact us</a>.</b>
                        </p>
                        <img src="assets\img\collectiverse-logo.png" alt="Collectiverse Logo"><br /><br />
                        <a class="button checkout" href="shop.php">Continue Shopping</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
    
    <!-- FUNKO BUCKS and Newsletter -->
    <?php include 'funkobucks-newsletter.php';?>

    <!-- Footer -->
    <?php include 'footer.php';?>

    <script>
        localStorage.setItem('basketItemCount', 0);
    </script>

</body>
</html>