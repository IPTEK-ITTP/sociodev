<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link rel="stylesheet" type="text/css" href="{{ mix('/css/app.css')}}">
</head>
<body>
    <div id="app">
        @yield('main')
    </div>
    {{--<script src="{{ mix('js/jquery.js') }}"></script>--}}
    <script src="{{ asset('js/jQuery-2.1.4.min.js') }}"></script>
    {{--<script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>--}}
    <script src="{{ mix('js/popper.min.js') }}"></script>
    <script src="{{ mix('js/bootstrap.min.js') }}"></script>
    <script src="{{ mix('js/app.js') }}"></script>
    <script src="{{ mix('js/script.js') }}"></script>
</body>
</html>
