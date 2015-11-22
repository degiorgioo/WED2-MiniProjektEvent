//NavigationController
define([], function(){
    var NavigationController =  function($scope){

        var isMobileExpanded = false;

        $scope.hamburgerClass = "navbar-toggle collapsed";
        $scope.hamburgerDataToggle = "collapse";
        $scope.hamburgerAriaExpanded = "false";
        $scope.navbarClass = "collapse navbar-collapse";
        $scope.navbarAriaExpanded = "false";

        $scope.onHamburgerButtonClick = function(){
            if(isMobileExpanded){
                disableMobileMenu();
            }else{
                enableMobileMenu();
            }
        };

        $scope.onLinkClick = function(){
            disableMobileMenu();
        };

        function disableMobileMenu(){
            $scope.hamburgerClass = "navbar-toggle collapsed";
            $scope.hamburgerDataToggle = "collapse";
            $scope.hamburgerAriaExpanded = "false";
            $scope.navbarClass = "collapse navbar-collapse";
            $scope.navbarAriaExpanded = "false";
            isMobileExpanded = false;
        }

        function enableMobileMenu(){
            $scope.hamburgerClass = "navbar-toggle";
            $scope.hamburgerDataToggle = "collapse";
            $scope.hamburgerAriaExpanded = "true";
            $scope.navbarClass = "navbar-collapse collapse in";
            $scope.navbarAriaExpanded = "true";
            isMobileExpanded = true;
        }
    };

    NavigationController.$inject = ['$scope'];

    return NavigationController;

});
