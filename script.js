    const letrasDNI = 'TRWAGMYFPDXBNJZSQVHLCKET';
        
        function verificarDNI() {
            const dni = document.getElementById('dniInput').value.trim().toUpperCase();
            const resultado = document.getElementById('resultado');

            // Validar formato del DNI
            const regex = /^\d{8}[A-Z]$/;
            if (!regex.test(dni)) {
                resultado.textContent = "Formato inválido. Debe ser 8 cifras y 1 letra.";
                return;
            }

            const numero = parseInt(dni.slice(0, 8));
            const letraIngresada = dni.charAt(8);
            const letraCorrecta = letrasDNI[numero % 23];

            if (letraIngresada === letraCorrecta) {
                resultado.textContent = `La letra ${letraIngresada} es correcta.`;
            } else {
                resultado.textContent = `La letra ${letraIngresada} es incorrecta. La letra correcta es ${letraCorrecta}.`;
            }
        }