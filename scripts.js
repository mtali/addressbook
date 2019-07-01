function PeopleController($scope) {
    $scope.people = [
        {name: "Emmanuel S Mtali", phone: "255719526215", city: "Dar es Salaam"},
        {name: "Agatha Kikoti", phone: "255765585581", city: "Iringa"},
        {name: "Christopha Mtandala", phone: "25578689967", city: "Morogoro"}
    ];

    $scope.save = function() {
        $scope.people.push({
            name: $scope.newPerson.name,
            phone: $scope.newPerson.phone,
            city: $scope.newPerson.city
        });
    }
}
