'use strict';
angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $state, FilesService, $ionicLoading) {
    $scope.files = FilesService.all();
    $scope.onUpload = onUpload;
    $scope.localUpload = localUpload;

    function localUpload(value){
        if (!value){
            return;
        }
        // TODO - create directive
        $ionicLoading.show();
        filepicker.store(
            value,
            onUpload
        );
    }
    function onUpload(data){
        FilesService.add(data);
        $ionicLoading.hide();
        $state.go('tab.chats');
    }
})

.controller('ChatsCtrl', function($scope, FilesService) {
    /*
        With the new view caching in Ionic, Controllers are only called
        when they are recreated or on app start, instead of every page change.
        To listen for when this page is active (for example, to refresh data),
        listen for the $ionicView.enter event:

        $scope.$on('$ionicView.enter', function(e) {
        });
    */

    $scope.files = FilesService.all();
    $scope.remove = FilesService.remove;
})

.controller('ChatDetailCtrl', function($scope, $stateParams, FilesService) {
    $scope.file = FilesService.get(Number($stateParams.chatId));
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
