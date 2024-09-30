var cuentas = [
    { nombre: "Mali", saldo: 200, password: "12345" },
    { nombre: "Gera", saldo: 290, password: "678910" },
    { nombre: "Maui", saldo: 67, password: "abcd123" }
];

var cuentaSeleccionada = null;

// Inicio de sesión
document.getElementById('loginButton').addEventListener('click', function () {
    var cuentaI = document.getElementById('cuenta').value;
    var passwordIngresada = document.getElementById('password').value;

    if (cuentas[cuentaI].password === passwordIngresada) {
        cuentaSeleccionada = cuentaI;
        mostrarAcciones(cuentaI);
    } else {
        document.getElementById('loginMessage').innerText = "Contraseña incorrecta. Por favor intenta nuevamente."
    }
});

function mostrarAcciones(cuentaI) {
    document.getElementById('login').style.display = 'none';
    document.getElementById('acciones').style.display = 'block';
    document.getElementById('userName').innerText = cuentas[cuentaI].nombre;
};

// Consultar saldo
document.getElementById('saldoButton').addEventListener('click', function () {
    var saldo = cuentas[cuentaSeleccionada].saldo;
    document.getElementById('message').innerText = 'Tu saldo actual es: $' + saldo;
});

// Ingresar monto
document.getElementById('ingresarButton').addEventListener('click', function () {
    document.getElementById('ingresarMonto').style.display = 'block';
    document.getElementById('retirarMonto').style.display = 'none';
});

document.getElementById('ingresarMonto').addEventListener('click', function () {
    var montoIngresar = parseFloat(document.getElementById('montoIngresar').value);
    var saldoActual = cuentas[cuentaSeleccionada].saldo;

    if (saldoActual + montoIngresar <= 990) {
        cuentas[cuentaSeleccionada].saldo += montoIngresar;
        document.getElementById('message').innerText = 'Ingresaste $' + montoIngresar + '. Tu saldo actual es: $' + cuentas[cuentaSeleccionada].saldo;
    } else {
        document.getElementById('message').innerText = 'No puedes tener más de $990 en tu cuenta.';
    }
    document.getElementById('ingresarMonto').style.display = 'none';
});

// Retirar monto
document.getElementById('retirarButton').addEventListener('click', function () {
    document.getElementById('retirarMonto').style.display = 'block';
    document.getElementById('ingresarMonto').style.display = 'none';
});

document.getElementById('confirmarRetiro').addEventListener('click', function () {
    var retirarMonto = parseFloat(document.getElementById('retirarMonto').value);
    var saldoActual = cuentas[cuentaSeleccionada].saldo;

    if (saldoActual - retirarMonto >= 10) {
        cuentas[cuentaSeleccionada].saldo -= retirarMonto;
        document.getElementById('message').innerText = 'Retiraste $' + retirarMonto + '. Tu saldo actual es: $' + cuentas[cuentaSeleccionada].saldo;
    } else {
        document.getElementById('message').innerText = 'No puedes tener menos de $10 en tu cuenta.';
    }
    document.getElementById('retirarMonto').style.display = 'none';
});

