function getClientData() {
    nombreClient = document.getElementById("in_cliente").value;
    apellidoPClient = document.getElementById("in_apellido_paterno").value;
    apellidoMClient = document.getElementById("in_apellido_materno").value;

    dateClient = nombreClient + " " + apellidoPClient + " " + apellidoMClient;
    dateClient = dateClient.toUpperCase();
    document.getElementById("out_datos_cliente").value = dateClient;    

    //Metodo CharAt para obtener el valor de una posicion en especifico
    document.getElementById("out_valor_posicion_7").value = dateClient.charAt(7);
    document.getElementById("out_valor_posicion_10").value = dateClient.charAt(10);

    //Metodos para convertir a mayusculas y minusculas  
    document.getElementById("out_nombre_upper").value = dateClient.toUpperCase();
    document.getElementById("out_nombre_lower").value = dateClient.toLowerCase();

}


function getDateFormat() {  
    dia = document.getElementById("in_dia").value;
    mes = document.getElementById("in_mes").value;
    anio = document.getElementById("in_año").value;

    formatDate = dia + "/" + mes + "/" + anio;
    document.getElementById("out_fecha_formateada").value = formatDate;
}
    