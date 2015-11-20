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
                $scope.disableMobileMenu();
            }else{
                $scope.enableMobileMenu();
            }
        };

        $scope.onLinkClick = function(){
            $scope.disableMobileMenu();
        };

        $scope.disableMobileMenu = function(){
            console.log("Aufruf");
            $scope.hamburgerClass = "navbar-toggle collapsed";
            $scope.hamburgerDataToggle = "collapse";
            $scope.hamburgerAriaExpanded = "false";
            $scope.navbarClass = "collapse navbar-collapse";
            $scope.navbarAriaExpanded = "false";
            isMobileExpanded = false;
        };

        $scope.enableMobileMenu = function(){
            $scope.hamburgerClass = "navbar-toggle";
            $scope.hamburgerDataToggle = "collapse";
            $scope.hamburgerAriaExpanded = "true";
            $scope.navbarClass = "navbar-collapse collapse in";
            $scope.navbarAriaExpanded = "true";
            isMobileExpanded = true;
        };
    }

    NavigationController.$inject = ['$scope'];

    return NavigationController;

});
