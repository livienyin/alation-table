angular.module('alation-tables', []).directive(function() {
  return {
    scope: {
      columnNames: "=columnNames",
      
    }
  }
});

function TableCtrl($scope) {
  $scope.columns = ['Attributes', 'Entity Type', 'Physical Type', 'Data Type'];
  $scope.rows = ['Month', 'Days', 'Year', 'Customer ID', 'Product', 'Quantity', 'Channel', 'Cashier'];
  $scope.cells = {};
}

