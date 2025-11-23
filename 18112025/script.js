function getClientData() {
    nombreClient = document.getElementById("in_cliente").value;
    apellidoPClient = document.getElementById("in_apellido_paterno").value;
    apellidoMClient = document.getElementById("in_apellido_materno").value;

    dateClient = toUpperCase(nombreClient) + " " + apellidoPClient + " " + apellidoMClient;
    document.getElementById("out_datos_cliente").value = dateClient;
    
}
