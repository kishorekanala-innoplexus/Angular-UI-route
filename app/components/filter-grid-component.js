angular.module('comp')
	.component('filterGrid',{
		templateUrl:'partials/filter.html',
		controller: ['$http','cartService','$scope', function($http,cartService,$scope){
			var self= this;
			self.all="All";
			/*$scope.sendIdDetail= function(phone){
				shareData.setData(phone);
				dataShare.shared.data = shareData.getData();
				console.log(dataShare.shared);
			}*/
			$scope.cartItems=0;
			$scope.addToCart=cartService.addItemToCart;
  			//subscribe items added callback
  			cartService.onItemsAdded(function(items){
    			$scope.cartItems=items;
  			});
			
			$http.get('phones/phones.json').then(function(response){
				self.phones=response.data;
			//	console.log(self.phones.length);
			})

			this.comp= function(company){
				console.log(company);
				self.phoneList=[];

				if(company === 'All')
				{
					self.phoneList = self.phones;
					return;
				}

				for (var i = 0; i<self.phones.length; i++) {
					if(company === self.phones[i].company){
						self.phoneList.push(self.phones[i]);
					}
				}
				
			}
		}]
	});