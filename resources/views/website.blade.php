<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}" />

        <title>Ecommerce</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <!-- Favicon -->
        <link rel="shortcut icon" type="image/x-icon" href="{{ asset('contents/website') }}/img/favicon.png" />

        <!-- All css files are included here. -->
        <!-- animate css -->
        <link rel="stylesheet" href="{{ asset('contents/website') }}/css/animate.min.css" />
        <!-- Bootstrap fremwork main css -->
        <link rel="stylesheet" href="{{ asset('contents/website') }}/css/bootstrap.min.css" />
        <!-- font-awesome css -->
        <link rel="stylesheet" href="{{ asset('contents/website') }}/css/font-awesome.min.css" />
        <!-- nivo-slider css -->
        <link rel="stylesheet" href="{{ asset('contents/website') }}/css/nivo-slider.css" />
        <!-- owl carousel css -->
        <link rel="stylesheet" href="{{ asset('contents/website') }}/css/owl.carousel.min.css" />
        <!-- icofont css -->
        <link rel="stylesheet" href="{{ asset('contents/website') }}/css/icofont.css" />
        <!-- meanmenu css -->
        <link rel="stylesheet" href="{{ asset('contents/website') }}/css/meanmenu.css" />
        <!-- jquery-ui css -->
        <link rel="stylesheet" href="{{ asset('contents/website') }}/css/jquery-ui.min.css" />
        <!-- magnific-popup css -->
        <link rel="stylesheet" href="{{ asset('contents/website') }}/css/magnific-popup.css" />
        <!-- percircle css -->
        <link rel="stylesheet" href="{{ asset('contents/website') }}/css/percircle.css" />
        <!-- Theme main style -->
        <link rel="stylesheet" href="{{ asset('contents/website') }}/style.css" />
        <!-- Responsive css -->
        <link rel="stylesheet" href="{{ asset('contents/website') }}/css/responsive.css" />

        <!-- Modernizr JS -->
        <script src="{{ asset('contents/website') }}/js/vendor/modernizr-2.8.3.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
        <script>
            function toaster(icon, message){
                Toast.fire({
                    icon: icon,
                    title: message,
                })
            }
        </script>
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- header start -->
<h1>Website</h1>

        <!-- Placed js at the end of the document so the pages load faster -->
        <!-- jquery latest version -->
        <script src="/js/app.js"></script>

        <script src="{{ asset('contents/website') }}/js/vendor/jquery-1.12.4.min.js"></script>
        <!-- Popper js -->
        <script src="{{ asset('contents/website') }}/js/popper.js"></script>
        <!-- Bootstrap framework js -->
        <script src="{{ asset('contents/website') }}/js/bootstrap.min.js"></script>
        <!-- magnific popup js -->
        <script src="{{ asset('contents/website') }}/js/jquery.magnific-popup.min.js"></script>
        <!-- mixitup js -->
        <script src="{{ asset('contents/website') }}/js/jquery.mixitup.min.js"></script>
        <!-- jquery-ui price-->
        <script src="{{ asset('contents/website') }}/js/jquery-ui.min.js"></script>
        <!-- ScrollUp Js -->
        <script src="{{ asset('contents/website') }}/js/jquery.scrollUp.min.js"></script>
        <!-- countDown Js -->
        <script src="{{ asset('contents/website') }}/js/jquery.countdown.min.js"></script>
        <!-- nivo slider js -->
        <script src="{{ asset('contents/website') }}/js/jquery.nivo.slider.pack.js"></script>
        <!-- mobail menu js -->
        <script src="{{ asset('contents/website') }}/js/jquery.meanmenu.js"></script>
        <!-- owl carousel js -->
        <script src="{{ asset('contents/website') }}/js/owl.carousel.min.js"></script>
        <!-- All js plugins included in this file. -->
        <script src="{{ asset('contents/website') }}/js/plugins.js"></script>
        <!-- Main js file that contents all jQuery plugins activation. -->
        <script src="{{ asset('contents/website') }}/js/main.js"></script>

        {{-- <script src="{{ asset('contents/website') }}/js/vue.js"></script> --}}


    </body>

</html>
