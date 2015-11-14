require.config({
    // base url relative to the index.html
    baseUrl: './',
    paths: {
        'angular': 'libraries/angular/angular.min',
        'angularRoute': 'libraries/angular/angular-route',
        'domReady': 'libraries/require/domReady',
        'app': 'classes'
    },
    // angular does not support async loading out of the box -> use the shim loader
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angularRoute': {
            deps: ['angular']
        }
    }
});

require(['angular','app/modules/lafete'], function (angular, lafete) {
    angular.element(document).ready(function(){
        return angular.bootstrap(document, [lafete.name]);
    });
});

require(['domReady'], function (domReady) {
    domReady(function () {
        var hamburgerButton = document.getElementById("hamburgerButton");
        var navbar = document.getElementById("navbar");

        var mobileMenuExpanded = false;

        hamburgerButton.onclick = function(){
            if(mobileMenuExpanded){
                hamburgerButton.setAttribute('class', "navbar-toggle collapsed");
                hamburgerButton.setAttribute('data-toggle', "collapse");
                hamburgerButton.setAttribute('aria-expanded', "false");
                navbar.setAttribute('class', "collapse navbar-collapse");
                navbar.setAttribute('aria-expanded', "false");
                mobileMenuExpanded = false;
            }else{
                hamburgerButton.setAttribute('class', "navbar-toggle");
                hamburgerButton.setAttribute('data-toggle', "collapse");
                hamburgerButton.setAttribute('aria-expanded', "true");
                navbar.setAttribute('class', "navbar-collapse collapse in");
                navbar.setAttribute('aria-expanded', "true");
                mobileMenuExpanded = true;
            }
        };
    });
});