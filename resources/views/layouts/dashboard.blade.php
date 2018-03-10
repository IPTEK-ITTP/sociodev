@extends('layouts.master')

@section('main')
	<navbar></navbar>
	<div class="container my-2">
		<div class="row">
			<div class="col-md-3">
				<sidebar></sidebar>
			</div>	
			<div class="col-md-9">
				@yield('content')
			</div>
		</div>
	</div>

@endsection