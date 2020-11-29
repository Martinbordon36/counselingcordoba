(function() {
    "use strict";

    console.log('aqui');

    document.addEventListener('DOMContentLoaded', function() {

        if (document.getElementById('calcular')) {


            var regalo = document.getElementById('regalo');

            // Campos Datos usuario
            var nombre = document.getElementById('nombre');
            var apellido = document.getElementById('apellido');
            var email = document.getElementById('email');

            // Campos pases
            var pase_dia = document.getElementById('pase_dia');
            var pase_dosdias = document.getElementById('pase_dosdias');
            var pase_completo = document.getElementById('pase_completo');

            // mostrar en editar
            var formulario_editar = document.getElementsByClassName('editar-registrado');
            if (formulario_editar.length > 0) {
                if (pase_dia.value || pase_dosdias.value || pase_completo) {
                    mostrarDias();
                }
            }


            //Botones y divs
            var calcular = document.getElementById('calcular');
            var errorDiv = document.getElementById('error');
            var botonRegistro = document.getElementById('btnRegistro');


            var lista_productos = document.getElementById('lista-productos');
            var suma = document.getElementById('suma-total');

            // Extras
            var camisas = document.getElementById('camisa_evento');
            var etiquetas = document.getElementById('etiquetas');

            botonRegistro.disabled = true;







            calcular.addEventListener('click', calcularMontos);

            pase_dia.addEventListener('input', mostrarDias);
            pase_dosdias.addEventListener('input', mostrarDias);
            pase_completo.addEventListener('input', mostrarDias);

            nombre.addEventListener('blur', validarCampos);
            apellido.addEventListener('blur', validarCampos);
            email.addEventListener('blur', validarCampos);
            email.addEventListener('blur', validarMail);

            function validarCampos() {
                if (this.value == '') {
                    errorDiv.style.display = 'block';
                    errorDiv.innerHTML = "este campo es obligatorio";
                    this.style.border = '1px solid red';
                    errorDiv.style.border = '1px solid red';
                } else {
                    errorDiv.style.display = 'none';
                    this.style.border = '1px solid #cccccc';
                }
            }

            function validarMail() {
                if (this.value.indexOf("@") > -1) {
                    errorDiv.style.display = 'none';
                    this.style.border = '1px solid #cccccc';
                } else {
                    errorDiv.style.display = 'block';
                    errorDiv.innerHTML = "debe tener al menos una @";
                    this.style.border = '1px solid red';
                    errorDiv.style.border = '1px solid red';
                }
            }



            function calcularMontos(event) {
                event.preventDefault();
                if (regalo.value === '') {
                    alert("Debes elegir un regalo");
                    regalo.focus();
                } else {
                    var boletoConferencia = parseInt(pase_dia.value, 10) || 0,
                        boletoSeminario = parseInt(pase_dosdias.value, 10) || 0,
                        boletoCurso = parseInt(pase_completo.value, 10) || 0,
                        cantCamisas = parseInt(camisas.value, 10) || 0,
                        cantEtiquetas = parseInt(etiquetas.value, 10) || 0;


                    var totalPagar = (boletoConferencia * 800) + (boletoSeminario * 1100) + (boletoCurso * 1499) + ((cantCamisas * 500) * .93) + (cantEtiquetas * 200);

                    var listadoProductos = [];

                    if (boletoConferencia >= 1) {
                        listadoProductos.push(boletoConferencia + ' Conferencia');
                    }
                    if (boletoSeminario >= 1) {
                        listadoProductos.push(boletoSeminario + ' Seminario');
                    }
                    if (boletoCurso >= 1) {
                        listadoProductos.push(boletoCurso + ' Curso');
                    }
                    if (cantCamisas >= 1) {
                        listadoProductos.push(cantCamisas + ' Camisas');
                    }
                    if (cantEtiquetas >= 1) {
                        listadoProductos.push(cantEtiquetas + ' Etiquetas');
                    }
                    lista_productos.style.display = "block";
                    lista_productos.innerHTML = '';
                    for (var i = 0; i < listadoProductos.length; i++) {
                        lista_productos.innerHTML += listadoProductos[i] + '<br/>';
                    }
                    suma.innerHTML = "$ " + totalPagar.toFixed(2);

                    botonRegistro.value = 'Comunicarse con 3515995502 para realizar el pago';
                    botonRegistro.disabled = true;
                    document.getElementById('total_pedido').value = totalPagar;

                }
            }

            function mostrarDias() {
                var boletosDia = parseInt(pase_dia.value, 10) || 0,
                    boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
                    boletoCompleto = parseInt(pase_completo.value, 10) || 0;
                var diasElegidos = [];

                if (boletosDia > 0) {
                    diasElegidos.push("viernes");
                }
                if (boletos2Dias > 0) {
                    diasElegidos.push("viernes", "sabado");
                }
                if (boletoCompleto > 0) {
                    diasElegidos.push("viernes", "sabado", "domingo");
                }
                for (var i = 0; i < diasElegidos.length; i++) {
                    document.getElementById(diasElegidos[i]).style.display = "block";
                }
            }

        }


    }); // DOM CONTENT LOADED
})();