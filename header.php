    <!-- Visual Content on New Server -->
    <div class="header-wrapper wrapper full-width">
        <!-- Header -->
        <header role="banner">
            <div class="row">
                <div class="header__links"></div>
            </div>
            <div class="clearfix"></div>
            <div class="row">
                <div class="header__bar full-width row">
                    <a class="header__logo col--3" href="index.php">
                        <span>
                            <img src="assets\img\collectiverse-logo.png" alt="COLLECTIVERSE">
                        </span>
                    </a>
                    <div class="header__nav col--9 row">
                        <nav class="col--8">
                            <ul class="main-nav horizontal-list full-width">
                                <li><a href="index.php">Home</a></li>
                                <li><a href="shop.php">Shop</a></li>
                                <li><a href="about-us.php">About Us</a></li>
                                <li><a href="contact-us.php">Contact Us</a></li>
                            </ul>
                        </nav>
                        <div class="header__basket col--3">
                            <a href="basket.php">
                                <img class="header__basket img" src="assets\img\basket.png" alt="Basket">
                                <span>Basket</span>
                                <span class="header__basket--items" id="BasketItems">0</span>
                                <script>
        // Function to retrieve basket count from localStorage and display it
        function displayBasketCount() {
            var basketItemsElement = document.getElementById("BasketItems");
            var basketItemCount = localStorage.getItem('basketItemCount');

            // Display the basket count if it exists in localStorage
            if (basketItemCount !== null) {
                basketItemsElement.innerText = basketItemCount;
            } else {
                basketItemsElement.innerText = 0; // Default to 0 if no count exists
            }
        }

        // Call the function to display basket count when the page loads
        window.onload = function() {
            displayBasketCount();
            
            // Check if the cart is cleared and clear basket count accordingly
            if (sessionStorage.getItem('cartCleared')) {
                clearBasketCount();
                sessionStorage.removeItem('cartCleared'); // Remove the flag after clearing the count
            }
        };

        // Function to clear basket count when cart is cleared
        function clearBasketCount() {
            localStorage.removeItem('basketItemCount'); // Remove the count from localStorage
            document.getElementById("BasketItems").innerText = 0; // Reset the display to 0
        }
    </script>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- /Header -->
    </div>