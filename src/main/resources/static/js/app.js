var moduleprinc = ( function () {

    var funcion = function (planes) {
        if(planes != null) {
            var objetos = planes.map(function (bp) {
                return {key: bp.name, value: bp.points.length}
            });
            $("table tbody").empty();
            objetos.map(function (bp) {
                var columna = '<tr><td>'+bp.key+'</td><td>'+bp.value+'</td><td> <button type="button" class="btn btn-primary" onclick="moduleprinc.getblueprintsAuthor()"> Open </button>  </td></tr>';
                $("table tbody").append(columna);
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