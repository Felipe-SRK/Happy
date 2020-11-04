//create map
const map = L.map("mapid").setView([-23.8138853, -47.7210878], 15);

//create and add tilelayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

//create and add marker

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  //remove icon

  marker && map.removeLayer(marker);

  // add icon layer

  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// adicionar o campo de fotos
function addPhotoField() {
  // pegar container de fotos #id imagens
  const container = document.querySelector("#images");
  // pegar o con para duplicar new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");
  // realizar o clone da última imagem adicionar
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  // verificar campo
  const input = newFieldContainer.children[0];
  if (input.value == "") {
    return;
  }

  //Limpar o Campo onde vai adicionar as imagens
  input.value = "";
  //adicionar o clone ao container de imagens
  container.appendChild(newFieldContainer);
}

function deleteField() {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    //Limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  //Deletar o campo
  span.parentNode.remove();
}

// troca do sim e não
function toggleSelect(event) {
  //retirar a classe .active
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));
  //colocar a classe .active
  const button = event.currentTarget;
  button.classList.add("active");
  //Pegar o botao clicado
  //atualizar o input
  const input = document.querySelector('[name = "open_on_weekends"]');
  //Verificar se é sim ou nao se

  input.value = button.dataset.value;
}

/*function validate(event) {
  //validar dados
  const needsLatAndLng = true;
  if (needsLatAndLng) {
    event.preventDefault();
    alert("Selecione o local no Mapa");
  } else{
    needsLatAndLng = false;
  }
}*/
