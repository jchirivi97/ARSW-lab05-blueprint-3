var moduleprinc = ( function () {

    var funcion = function (planes) {
        var total = 0;
        if(planes != null) {
            var objetos = planes.map(function (bp) {
                return {key: bp.name, value: bp.points.length}
            });
            $("table tbody").empty();
            objetos.map(function (bp) {
                var columna = '<tr><td>'+bp.key+'</td><td>'+bp.value+'</td><td> <button type="button" class="btn btn-primary" onclick="moduleprinc.getblueprintsAuthor()"> Open </button>  </td></tr>';
                total = total + bp.value;
                $("table tbody").append(columna);
                document.getElementById("sumapoints").innerHTML = "Total user points: "+ total;
                
             });

            document.getElementById("nomauthor").innerHTML = nameauthor + "'s blueprints";

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