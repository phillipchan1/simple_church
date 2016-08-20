matchify.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	
	$urlRouterProvider.otherwise('/');

	$locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
	
	$stateProvider
		.state('dashboard', {
			url: '/',
			templateUrl: 'app/components/dashboard/dashboard.html'
		})

		.state('login', {
			url: '/login',
			templateUrl: 'app/components/authentication/login/login.html'
		})
});