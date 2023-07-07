class CEmpleado {
    constructor(nombre, anioingreso, salario, direccion) {
      this.nombre = nombre;
      this.anioingreso = anioingreso;
      this.salario = salario;
      this.direccion = direccion;
    }
  
    calcularAntiguedad() {
      let FA = new Date().getFullYear();
      return FA - this.anioingreso;
    }
  
    viveEnWallStreet() {
      return this.direccion.includes('WallStreet');
    }
  }
  
  const formulario = document.getElementById('formulario');
  
  formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const anioingreso = parseInt(document.getElementById('anioingreso').value);
    const salario = parseFloat(document.getElementById('salario').value);
    const direccion = document.getElementById('direccion').value;
    const empleado = new CEmpleado(nombre, anioingreso, salario, direccion);
    document.getElementById('datonombre').textContent = empleado.nombre;
    document.getElementById('datoanio').textContent = empleado.anioingreso;
    document.getElementById('datodireccion').textContent = empleado.direccion;
    document.getElementById('datoanios').textContent = empleado.calcularAntiguedad();
    if(empleado.viveEnWallStreet()){
        document.getElementById('datowall').textContent = 'Si';
    }
    else {
        document.getElementById('datowall').textContent = 'No';
    }
});