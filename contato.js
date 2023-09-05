const form = document.getElementById("orderForm");

form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  const name = document.querySelector('input[name="nome"]').value;
  const address = document.querySelector('input[name="endereco"]').value;
  const tipo = document.querySelector('select[name="tipoPao"]').value;
  const main = document.querySelector("input[name=principal]").value;
  const observations = document.querySelector(
    'textarea[name="observacoes"]'
  ).value;

  let salad = "";
  document
    .querySelectorAll('input[name="salada"]:checked')
    .forEach(function (item) {
      salad += " - " + item.value + "\n";
    });

  console.log({ name, address, tipo, main, observations, salad });

  alert(
    "Pedido: " +
      "\nNome: " +
      name +
      "\nAddress: " +
      address +
      "\nTipo do Pão: " +
      tipo +
      "\nRecheio principal: " +
      main +
      "\nSalada: " +
      salad +
      "\nObservações: " +
      observations
  );
});
