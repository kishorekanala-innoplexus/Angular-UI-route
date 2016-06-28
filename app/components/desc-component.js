angular.module('comp')
	.component('detailDesc',{
		templateUrl:'partials/desc.html',
		controller:['$http','$stateParams','cartService','$scope','$state', function($http,$stateParams,cartService,$scope,$state){
			var self = this;
			self.$onInit = function(){
				self.setImage = function setImage(imageUrl) {
			      self.mainImageUrl = imageUrl;
			    };
				self.id=$stateParams.id
				$http.get(($stateParams.id ==='') ?"phones/motorola-xoom-with-wi-fi.json":"phones/"+$stateParams.id+".json").then(function(response){
					self.phonedetail = response.data;
					self.setImage(self.phonedetail.images[0]);
				})
			}
			//$scope.id = dataShare.shared;
			$scope.totalItems={id:"motorola-xoom-with-wi-fi"};
			  //subscribe items added callback
			cartService.onItemsAdded(function(items){
			    $scope.totalItems=items;
			    //console.log($scope.totalItems.id);
				 
				 $state.go('state',{
					company: $scope.totalItems.company,
					id: $scope.totalItems.id
				},{
					notify:false
				})
			    
			//console.log($scope.id);
				self.setImage = function setImage(imageUrl) {
			      self.mainImageUrl = imageUrl;
			    };
				$http.get("phones/"+$scope.totalItems.id+".json").then(function(response){
					self.phonedetail = response.data;
					self.setImage(self.phonedetail.images[0]);
				})
			});
		}]
	})
	//'+self.id+'