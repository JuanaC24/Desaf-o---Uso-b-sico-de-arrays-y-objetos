
        // Estructura de datos mediante arreglos y objetos
        var radiologia = [
            { hora: "08:00", medico: "Rodrigo", paciente: "Angelo", rut: "1-k", prevision: "Isapre" },
            { hora: "08:05", medico: "Rodrigo", paciente: "Bianca", rut: "1-9", prevision: "Isapre" },
            { hora: "09:00", medico: "Piero", paciente: "Carlos", rut: "1-7", prevision: "Fonasa" }
        ];

        var traumatologia = [
            { hora: "08:00", medico: "Rodrigo", paciente: "Angelo", rut: "1-k", prevision: "Isapre" },
            { hora: "08:05", medico: "Rodrigo", paciente: "Bianca", rut: "1-9", prevision: "Isapre" },
            { hora: "09:00", medico: "Piero", paciente: "Carlos", rut: "1-7", prevision: "Fonasa" }
        ];

        var dental = [
            { hora: "08:00", medico: "Rodrigo", paciente: "Angelo", rut: "1-k", prevision: "Isapre" },
            { hora: "08:30", medico: "Rodrigo", paciente: "Bianca", rut: "1-9", prevision: "Isapre" },
            { hora: "09:00", medico: "Piero", paciente: "Carlos", rut: "1-7", prevision: "Fonasa" },
            { hora: "10:00", medico: "Piero", paciente: "Diego", rut: "1-5", prevision: "Fonasa" },
            { hora: "11:00", medico: "Piero", paciente: "Luis", rut: "1-3", prevision: "Fonasa" }
        ];

        // Función para mostrar la primera y última atención de cada listado
        function mostrarAtenciones(lista, nombreLista) {
            var primeraAtencion = lista[0].paciente + ' - ' + lista[0].prevision;
            var ultimaAtencion = lista[lista.length - 1].paciente + ' - ' + lista[lista.length - 1].prevision;
            document.write('<h2>' + nombreLista + '</h2>');
            document.write('<p>Primera atención: ' + primeraAtencion + ' | Última atención: ' + ultimaAtencion + '</p>');
        }

        // Mostrar las primeras y últimas atenciones de cada listado
         mostrarAtenciones(radiologia, 'Radiología');
         mostrarAtenciones(traumatologia, 'Traumatología');
         mostrarAtenciones(dental, 'Dental');

         function mostrarTabla(lista, nombreLista) {
            document.write('<h2>' + nombreLista + '</h2>');
            document.write('<table class="tabla-atenciones">'); // Agregar la clase "tabla-atenciones" aquí
            document.write('<tr><th>Hora</th><th>Médico</th><th>Paciente</th><th>Previsión</th></tr>');
        
            lista.forEach(function(atencion) {
                document.write('<tr><td>' + atencion.hora + '</td><td>' + atencion.medico + '</td><td>' +
                                atencion.paciente + '</td><td>' + atencion.prevision + '</td></tr>');
            });
        
            document.write('</table>');
        }
        
       

        // Mostrar solo la tabla para el listado dental
        mostrarTabla(dental, 'Dental');
  


