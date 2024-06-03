<!DOCTYPE html>
<html lang="en" xml:lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="robots" content="index, follow">
    <title>Contact Us</title>
    
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
                <a href="contact-us.php">Contact Us</a>
            </div>

            <div class="cmscontent">
                <h2>Contact Us</h2>
                    <hr />
                    <form action="" method="POST"><input name="_subject" type="hidden" value="COLLECTIVERSE" />

                        <div class="field">
                            <label>Name:</label>
                            <input maxlength="150" name="Name" required="" type="text" />

                            <label>Email:</label>
                            <input class="required email text-box" maxlength="150" name="Email" required="" type="text" data-errmsg="Please enter a valid email address" />

                            <label>Contact No.:</label>
                            <input name="Tel" type="text" />

                            <label>Message:</label>
                            <input id="Comment" class="required text-box" name="Comment" required="" type="text" data-errmsg="Please enter a comment" />
                        </div>
                        <button type="submit" class="button light item-inner lrg contact-us-buttom">Submit</button>
                    </form>
                    <br />
                </div>
            </div>
        </div>
    </div>

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
</body>
</html>