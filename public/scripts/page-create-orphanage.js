//create map
const map = L.map("mapid").setView([-8.0471525, -34.9285895], 15);

//create and add tilelayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
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

  //remove marker
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//addd photo field

function AddPhotoField() {
  //pegar o container de fotos
  const container = document.querySelector("#images");
  //pegar o container pra duplicar a imagem adicionada
  const fieldsContainer = document.querySelectorAll(".new-upload");
  //realizar o clone da ultima imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  //verificar se o container está vazio, se sim, não adicionar ao container de imagens
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }
  // limpar o campo antes de adicionar ao container de imagens
  input.value = "";

  //adicionar o clone ao container de imagens
  container.appendChild(newFieldContainer);
}

function deletarField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    //limpar valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  // deletar campo
  span.parentNode.remove();
}

// troca do sim e não
function toggleSelect(event) {
  //retirar a classe .active dos botoes
  document.querySelectorAll(".button-select button").forEach(function (button) {
    button.classList.remove("active");
  });

  //colocar a class .active nos botoes
  const button = event.currentTarget;
  button.classList.add("active");

  //atualizar o input hidden com o valor selecionado
  const input = document.querySelector('[name="opne_on_weekends"]');

  input.value = button.dataset.value;
}
