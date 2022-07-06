angular.module("seller_center", []).controller("catbot", function ($scope) {
    $scope.list = []
    $scope.productname = ""
    $scope.seller = ""
    $scope.country = ""
    $scope.price = ''
    $scope.quantity = ''

    $scope.check = false
    
    $scope.add = function () {
        if ($scope.productname!="" && $scope.seller!="" && $scope.country!="" && $scope.price!="" && $scope.quantity!="") {
            $scope.list.push({
                name: $scope.productname,
                seller: $scope.seller,
                country: $scope.country,
                quantity: $scope.quantity,
                price: $scope.price
            })
            $scope.productname = ""
            $scope.seller = ""
            $scope.country = ""
            $scope.price = ''
            $scope.quantity = ''
            console.log($scope.list)
    
            if ($scope.list) {
                $scope.check = true
            }
        }
        else{
            M.toast({
                html: "Item not added. Please fill out all the fields.",
                classes: "red rounded"
            })
        }
    }
})
document.addEventListener("DOMContentLoaded", function () {
    var a = document.querySelectorAll(".tabs");
    var b = M.Tabs.init(a);
})
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});