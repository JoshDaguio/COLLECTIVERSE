<!DOCTYPE html>
<html lang="en" xml:lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="robots" content="index, follow">
    <title>Michael Jackson</title>
    
    <meta name="description" content="A Funko POP! Shop">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="icon" href="assets\img\collectiverse.ico" type="image/x-icon">

    <link rel="stylesheet" href="assets\css\style.css">
    <link rel="stylesheet" href="assets\css\jquery-ui.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.3.0/css/swiper.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

    <script src="assets\js\vendor\modernizr-2.6.2.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="assets\js\vendor\jquery-1.10.2.min.js"><\/script>')</script>
	<script async src="https://platform-api.sharethis.com/js/sharethis.js#property=5c3dbd82f8e3630010a0e3fe&product=sticky-share-buttons"></script>
    <script type="text/javascript" src="https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5c3dc0394ae39c77"></script>
    

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
    <?php include 'header.php'; ?>

    <div class="content-wrapper wrapper full-width">
        <!-- Main Content -->
        <div class="content" role="main" itemscope itemtype="https://schema.org/Product">

            <section class="row">
                <h1 class="hidden">Categories</h1>
                <div class="breadcrumb hidden">
                    <a href="index.php">Home</a>
                    <a href="shop.php">Shop</a> 
                    <a href="special-edition-fp.php">Special Edition</a>
                </div>
            </section>
            <div class="clearfix"></div>

            <section class="product-details">
                <div class="row">

                    <div class="product__images col--6">
                        <div class="images__zoom" style="position:absolute">
                            <span class="js-zoom-show"></span>
                            <span>
                                <span class="js-zoom-in zoom--in"></span>
                                <span class="js-zoom-out zoom--out"></span>
                                <!--<span class="js-reset zoom--reset"></span>--></span>
                        </div>
                        <div class="wrapper">
                            <div class="image-container" id="js-main-image-wrapper">
                                <img src="assets\img\funko-pops-outside-the-box\michael-jackson-otb.png" 
                                     class="js-main-image" title="POP! ALBUMS MICHAEL JACKSON - BAD" alt="POP! ALBUMS MICHAEL JACKSON - BAD" itemprop="image" />
                            </div>

                            <div class="images__thumbs clearfix">
                                <div id="thumb1" class="image-container thumb active">
                                    <img style="height:50px !important;width:50px !important;" 
                                         src="assets\img\funko-pops-outside-the-box\michael-jackson-otb.png" 
                                         alt="POP! ALBUMS MICHAEL JACKSON - BAD">
                                </div>
                                <div id="thumb2" class="image-container thumb">
                                    <img style="height:50px !important;width:50px !important;" 
                                         src="assets\img\funko-pops-inside-the-box\michael-jackson-itb.png" 
                                         alt="POP! ALBUMS MICHAEL JACKSON - BAD">
                                </div>
                            </div>

                            <link rel="stylesheet" href="assets\css\collorbox.css" />
                            <script src="assets\js\jquery.colorbox-min.js"></script>
                        </div>
                    </div>

                    <div id="BuyBoxArea" class="product__data col--6">
                        <div class="wrapper">
                            
                            <div class="row">
                                <input type="hidden" name="ID" id="ID" value="1" />
                                <h1 itemprop="name">POP! ALBUMS MICHAEL JACKSON - BAD</h1>
                                <div class="product__price" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">
                                    <span class="price" itemprop="price" content=""><span itemprop="priceCurrency" content="GBP">P</span>2,500.00</span>
                                </div>
                            </div>

                            <form method="post" action="add-to-cart.php">

                                <div class="product__qty">
                                    <label for="quantity" class="required">Qty</label>
                                    <input type="text" name="quantity_20" value="1" min="1"></label>
                                </div>

                                <div class="product__description funko-pop-text">
                                    The King of Pop is ready to take the stage in your music collection! Rock your Michael Jackson set with this Pop! Albums Cover of his Bad album, 
                                    featuring Pop! Michael Jackson in his black, leather ensemble! Who will this legendary, American singer-songwriter collaborate with in your Pop! 
                                    Rocks collection? Pop! figure is adhered to the base and backdrop to ensure display integrity.                            
                                </div>
                                
                                <hr>

                                <div class="product__mod">
                                    <div class="product__basket">
                                        <input type="hidden" id="Qty" value="1" name="Qty">

                                        <script>
                                            function qtyUpdate() {
                                                document.getElementById("Qty").value = document.getElementById("quantity_20").value;
                                            }
                                        </script>

                                        <div class="product__basket--no-select">
                                        </div>

                                        <button id="add-to-basket" type="submit" value="20" name="add_to_cart" class="button light full-width tooltip">
                                            <img class="add-to-basket-product" src="assets/img/basket.png" alt="Basket">
                                            <span class="add-to-basket-product-text">Add to Basket</span>
                                        </button>

                                        <script>
                                            // Function to update basket number and store in localStorage
                                            function updateBasketNumber() {
                                                var basketItemsElement = document.getElementById("BasketItems");
                                                var currentBasketItemCount = parseInt(basketItemsElement.innerText);
                                                var newBasketItemCount = currentBasketItemCount + 1;
                                                basketItemsElement.innerText = newBasketItemCount;

                                                localStorage.setItem('basketItemCount', newBasketItemCount);
                                            }

                                            // Function to be called when "Add to Basket" button is clicked
                                            function addToBasketClicked() {
                                                updateBasketNumber();
                                            }

                                            document.getElementById("add-to-basket").addEventListener("click", addToBasketClicked);
                                        </script>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <div class="clearfix"></div>

            <section class="product__related">
                <h2 class="title"><span>You</span> may also like...</h2>
                <div class="one-row grid--4">

                    <!-- All Might -->
                    <div class="grid__item item--product">
                        <div class="item-inner">
                            <div class="image-container">
                                <a href="all-might.php">
                                    <img src="assets\img\funko-pops-outside-the-box\all-might-otb.png" data-src="" class="lazy" alt="POP! ALL MIGHT (TEXAS SMASH)">
                                    <noscript>
                                        <img src="assets\img\funko-pops-outside-the-box\all-might-otb.png" alt="POP! ALL MIGHT (TEXAS SMASH)">
                                    </noscript>
                                </a>
                            </div>
                            <h2 class="title--product">
                                <a href="all-might.php">
                                    <span>POP! ALL MIGHT (TEXAS SMASH)</span>
                                </a>
                            </h2>
                            <div class="buy-wrapper row">
                                <div class="price-box">
                                    <span>P745.00</span>
                                </div>
                                <div class="basket-box">
                                    <form method="post" action="add-to-cart.php">
                                        <input type="hidden" name="quantity_13" value="1"/>
                                        <button id="add-to-basket" type="submit" name="add_to_cart" value="13" class="add-to-basket-button">
                                            <img class="add-to-basket-icon" src="assets/img/basket.png" alt="Basket">
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Loki -->
                    <div class="grid__item item--product">
                        <div class="item-inner">
                            <div class="image-container">
                                <a href="loki.php">
                                    <img src="assets\img\funko-pops-outside-the-box\loki-otb.png" data-src="" class="lazy" alt="POP! LOKI">
                                    <noscript>
                                        <img src="assets\img\funko-pops-outside-the-box\loki-otb.png" alt="POP! LOKI">
                                    </noscript>
                                </a>
                            </div>
                            <h2 class="title--product">
                                <a href="loki.php">
                                    <span>POP! LOKI</span>
                                </a>
                            </h2>
                            <div class="buy-wrapper row">
                                <div class="price-box">
                                    <span>P790.00</span>
                                </div>
                                <div class="basket-box">
                                    <form method="post" action="add-to-cart.php">
                                        <input type="hidden" name="quantity_14" value="1"/>
                                        <button id="add-to-basket" type="submit" name="add_to_cart" value="14" class="add-to-basket-button">
                                            <img class="add-to-basket-icon" src="assets/img/basket.png" alt="Basket">
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Goku -->
                    <div class="grid__item item--product">
                        <div class="item-inner">
                            <div class="image-container">
                                <a href="goku.php">
                                    <img src="assets\img\funko-pops-outside-the-box\goku-otb.png" data-src="" class="lazy" alt="POP! GOKU">
                                    <noscript>
                                        <img src="assets\img\funko-pops-outside-the-box\goku-otb.png" alt="POP! GOKU">
                                    </noscript>
                                </a>
                            </div>
                            <h2 class="title--product">
                                <a href="goku.php">
                                    <span>POP! GOKU</span>
                                </a>
                            </h2>
                            <div class="buy-wrapper row">
                                <div class="price-box">
                                    <span>P859.00</span>
                                </div>
                                <div class="basket-box">
                                    <form method="post" action="add-to-cart.php">
                                        <input type="hidden" name="quantity_15" value="1"/>
                                        <button id="add-to-basket" type="submit" name="add_to_cart" value="15" class="add-to-basket-button">
                                            <img class="add-to-basket-icon" src="assets/img/basket.png" alt="Basket">
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Lebron -->
                    <div class="grid__item item--product">
                        <div class="item-inner">
                            <div class="image-container">
                                <a href="lebron-james.php">
                                    <img src="assets\img\funko-pops-outside-the-box\lebron-james-otb.png" data-src="" class="lazy" alt="POP! LEBRON JAMES POINTING (PURPLE JERSEY)">
                                    <noscript>
                                        <img src="assets\img\funko-pops-outside-the-box\lebron-james-otb.png" alt="POP! LEBRON JAMES POINTING (PURPLE JERSEY)">
                                    </noscript>
                                </a>
                            </div>
                            <h2 class="title--product">
                                <a href="lebron-james.php">
                                    <span>POP! LEBRON JAMES POINTING (PURPLE JERSEY)</span>
                                </a>
                            </h2>
                            <div class="buy-wrapper row">
                                <div class="price-box">
                                    <span>P800.00</span>
                                </div>
                                <div class="basket-box">
                                    <form method="post" action="add-to-cart.php">
                                        <input type="hidden" name="quantity_16" value="1"/>
                                        <button id="add-to-basket" type="submit" name="add_to_cart" value="16" class="add-to-basket-button">
                                            <img class="add-to-basket-icon" src="assets/img/basket.png" alt="Basket">
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>

            <?php include 'w-shipping-g-express.php';?>

            <div class="clearfix"></div>
        </div> 
        <!-- /content -->
    </div> 
    <!-- /content wrapper -->

    <!-- FUNKO BUCKS and Newsletter -->
    <?php include 'funkobucks-newsletter.php';?>

    <!-- Footer -->
    <?php include 'footer.php';?>

	<!-- Swiper JS -->
    <script data-cfasync="false" src="https://minifigures.com/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
    <script src="assets\js\swiper.min.js"></script>

    <!-- Initialize Swiper -->
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
        });
    </script>

    <script type="text/javascript">
        function buildParams(e) {
            var t = 0;
            var n = "";
            for (var r in e) {
                if (t > 0) {
                    n += "&"
                }
                n += r + "=" + encodeURIComponent(e[r]);
                t++
            }
            return n
        }

        function rand() {
            var e = Math.random();
            var t = e.toString();
            return t.replace(".", "0")
        }

        $(function() {
            $("#newsletter-subscribe-button").click(function(e) {
                e.preventDefault();
                var n = new XMLHttpRequest;
                obj = {};
                $("#newsletter-subscribe input").each(function() {
                    obj[$(this).attr("name")] = $(this).val();
                });
                var r = buildParams(obj);
                n.open("POST", "/Newsletter-Subscribe/", true);
                n.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                n.setRequestHeader("Content-length", r.length);
                n.setRequestHeader("Connection", "close");
                n.onreadystatechange = function() {
                    if (n.readyState == 4 && n.status == 200) {
                        x = $.parseJSON(n.responseText);
                        if (x.Result == "ok") {
                            //alert(x.Result);
                            $("#newsletter-subscribe").html("<span style=\"color:#eee;\">You have successfully subscribed to our newsletter</span>");
                        }
                    }
                };
                n.send(r)
            });
        });
    </script>

    <script type="text/javascript">
        (function(w, e, b, g, a, i, n, s) {
            w['ITCLKOBJ'] = a;
            w[a] = w[a] || function() {
                (w[a].q = w[a].q || []).push(arguments)
            }, w[a].l = 1 * new Date();
            i = e.createElement(b), n = e.getElementsByTagName(b)[0];
            i.async = 1;
            i.src = g;
            n.parentNode.insertBefore(i, n)
        })(window, document, 'script', 'https://analytics.webgains.io/clk.min.js', 'ITCLKQ');
        ITCLKQ('set', 'internal.api', true);
        ITCLKQ('set', 'internal.cookie', true);
        ITCLKQ('click');
    </script>

    <script src="assets\js\jquery.panzoom.min.js"></script>
    <script src="assets\js\jquery.mousewheel.js"></script>

</body>
</html>