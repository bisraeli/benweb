angular.module 'app', [
  'angular-meteor'
  'ngMaterial'
]

.controller 'Ctrl', ['$scope', '$mdDialog', ($scope, $mdDialog) ->
  $scope.isOpen = false

  $scope.toggleMobileNav = ->
    $scope.isOpen = !$scope.isOpen

  $scope.showContactDialog = ->
    $mdDialog.show
      templateUrl: 'client/templates/contact.html'
      parent: angular.element(document.body)
      clickOutsideToClose: true
    return


  $scope.goToSection = (section) ->
    console.log section
    $scope.activeSection = section
    console.log $scope.activeSection
    $scope.isOpen = false
    return

  initialize = ->
    $scope.activeSection = 'about'
    return

  initialize()

  return
]
