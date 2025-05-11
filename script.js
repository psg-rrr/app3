function showTab(id) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  var elementosSeleccionados = document.getElementsByClassName('selected');
  while (elementosSeleccionados.length > 0) {
    elementosSeleccionados[0].classList.remove('selected');
  }
  document.getElementById("button-"+id).classList.add('selected');
}
