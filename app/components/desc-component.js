angular.module('comp')
	.component('detailDesc',{
		templateUrl:'partials/desc.html',
		controller:['$http','$stateParams','cartService','$scope', function($http,$stateParams,cartService,$scope){
			var self = this;
			self.$onInit = function(){
				self.setImage = function setImage(imageUrl) {
			      self.mainImageUrl = imageUrl;
			    };
				$http.get("phones/motorola-xoom-with-wi-fi.json").then(function(response){
					self.phonedetail = response.data;
					self.setImage(self.phonedetail.images[0]);
				})
			}
			//$scope.id = dataShare.shared;
			$scope.totalItems={id:"motorola-xoom-with-wi-fi"};
			  //subscribe items added callback
			cartService.onItemsAdded(function(items){
			    $scope.totalItems=items;
			    console.log($scope.totalItems.id);
				 
			    
			//console.log($scope.id);
				self.id=$stateParams.id
				self.setImage = function setImage(imageUrl) {
			      self.mainImageUrl = imageUrl;
			    };
				$http.get( ($scope.totalItems.id === undefined) ?"phones/motorola-xoom-with-wi-fi.json" : "phones/"+$scope.totalItems.id+".json").then(function(response){
					self.phonedetail = response.data;
					self.setImage(self.phonedetail.images[0]);
				})
			});
		}]
	})
	//'+self.id+'