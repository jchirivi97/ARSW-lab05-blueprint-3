var moduleprinc = ( function () {

    var funcion = function (planes) {
        var total = 0;
        if(planes != null) {
            var objetos = planes.map(function (bp) {
                return {key: bp.name, value: bp.points.length}
            });
            $("table tbody").empty();
            objetos.map(function (bp) {

                alert(bp.key);
                var columna = '<tr><td>'+bp.key+'</td><td>'+bp.value+'</td><td> <button type="button" class="btn btn-primary" onclick="moduleprinc.getblueprintsAuthorName(' +"\""+ bp.key +"\""+ ')"> Open </button>  </td></tr>';
                total = total + bp.value;
                $("table tbody").append(columna);
                document.getElementById("sumapoints").innerHTML = "Total user points: "+ total;
                
             });

            document.getElementById("nomauthor").innerHTML = nameauthor + "'s blueprints";


        }


    }

    var dibujar = function(bp){

            var puntos = bp.points[0];
            var canvas = document.getElementById("canv");
            var ctx = canvas.getContext("2d");
            ctx.moveTo(puntos.x,puntos.y);
            bd.points.map(function(punto){
             ctx.lineTo(punto.x,punto.y);
             });
            ctx.stroke();

     }

    return {

        getblueprintsAuthor : function () {
            nameauthor = document.getElementById("name").value;
            apimock.getBlueprintsByAuthor(nameauthor,funcion);
        },

        getblueprintsAuthorName : function (name) {
            console.log(name);
            nameauthor = document.getElementById("name").value;
            apimock.getBlueprintsByNameAndAuthor(name,nameauthor,dibujar);
         }

    }
}
)();


/*
var pintar = (function(){


    var dibujar = function(bp){

        var puntos = bp.points[0];
        var canvas = document.getElementById("canv");
        var ctx = canvas.getContext("2d");
        ctx.moveTo(puntos.x,puntos.y);
        bd.points.map(function(punto){
         ctx.lineTo(punto.x,punto.y);
         });
        ctx.stroke();

    }
}

    return{
       getblueprintsAuthorName : function (name) {
           nameauthor = document.getElementById("name").value;
           apimock.getBlueprintsByNameAndAuthor(name,nameauthor,dibujar);
       }
    }
)();
*/













