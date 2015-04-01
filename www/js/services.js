angular.module('starter.services', ['backand'])
        
.service('DatabaseService', function($http, Backand){
	
	return {

	  readAll: function(tableName) {
	    var baseUrl = '/1/table/data/';
	    return $http({
	        method: 'GET',
	        url: Backand.configuration.apiUrl + baseUrl + tableName
	    }).then(function(response) {
	        return response.data.data;
	    });
  	},

  	readOne: function(tableName, id) {
      return $http({
          method: 'GET',
          url: Backand.configuration.apiUrl + baseUrl + self.tableName + '/' + id
      }).then(function(response) {
          return response.data;
      });
  	},

  	isLoggedIn: function(){
  		return Backand.configuration.tokenName;
  	}
  };
});