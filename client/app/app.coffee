angular.module 'app', [
  'angular-meteor'
  'ngMaterial'
]

.controller 'Ctrl', ['$scope', '$http', '$mdDialog', ($scope, $http, $mdDialog) ->
  $scope.isOpen = false
  $scope.contact = {}

  $scope.toggleMobileNav = ->
    $scope.isOpen = !$scope.isOpen

  $scope.showContactDialog = ->
    $scope.goToSection('contact')
    return


  $scope.goToSection = (section) ->
    console.log section
    $scope.activeSection = section
    console.log $scope.activeSection
    $scope.isOpen = false
    return

  $scope.submit = ->
    formData = $scope.contact;
    Meteor.call('saveFormData', formData);

  initialize = ->
    $scope.activeSection = 'about'
    return

  initialize()

  return
]
