var moduleprinc = ( function () {

    var funcion = function (planes) {
       alert(planes.length);
        if(planes != null) {
            var objetos = planes.map(function (blueprint) {
                return {key: blueprint.name, value: blueprint.points.length}
            });
            $("table tbody").empty();
            objetos.map(function () {
                var columna = '<tr> <td>${blueprint.key}</td><td>${bluprint.value}</td><td><p>boton open </p></td></tr>';
                $("#table tbody").append(columna);
                alert(columna);
             });
        }


    }

    return {

        getblueprintsAuthor : function () {
            nameauthor = document.getElementById("name").value;
            apimock.getBlueprintsByAuthor(nameauthor,funcion)
        }
    }
}


)();