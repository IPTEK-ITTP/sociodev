@extends('layouts/app')

@section('content')
<div class="jumbotron  bg-gradient text-center">
    <div class="container my-5">
        <img src="{{ asset('img/logo.png') }}" alt="LOGO" width="150px">
        <h1 class="display-4 text-white">IPTEK</h1>
        <p class="lead">Official Website Unit Kegiatan Mahasiswa IPTEK Institut Teknologi Telkom Purwokerto</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">About Us</a>
        </p>
    </div>
</div>
<div class="section light-bg" id="features">


    <div class="container">

        <div class="section-title">
            {{--<small>HIGHLIGHTS</small>--}}
            <h3>Divisi</h3>
        </div>


        <div class="row">
            <div class="col-12 col-lg-4">
                <div class="card features">
                    <div class="card-body">
                        <div class="media">
                            <span class="ti-face-smile gradient-fill ti-3x mr-3"></span>
                            <div class="media-body">
                                <h4 class="card-title">Multimedia</h4>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4">
                <div class="card features">
                    <div class="card-body">
                        <div class="media">
                            <span class="ti-settings gradient-fill ti-3x mr-3"></span>
                            <div class="media-body">
                                <h4 class="card-title">INet</h4>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4">
                <div class="card features">
                    <div class="card-body">
                        <div class="media">
                            <span class="ti-lock gradient-fill ti-3x mr-3"></span>
                            <div class="media-body">
                                <h4 class="card-title">Robotik</h4>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>



</div>
@endsection