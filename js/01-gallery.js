import { galleryItems } from './gallery-items.js';  


const images=galleryItems
const list = document.querySelector(".gallery");
//mapuje images i tworzę ciąg znaków z kodem html. Dla src i alt pobieram dane z tabllicy images. join łaczy tablice w ciąg znaków
const markup = images.map(image => `<li><img class="gallery__link gallery__image" src="${image.preview}" alt="${image.description}"></li>`).join('');
//tworzy elementy html wylistowane w markup
list.insertAdjacentHTML("beforeend", markup);
//sprawdza czy kliknieto w jakikolwiek element znajdujacy sie w ich przodku z klasą gallery 
document.querySelector('.gallery').onclick = (event) => {
	//sprawdza jaki element został klikinięty
	const imgElement = event.target;
	//wyswietla alt tego elementu alt="${image.description}
	const idElement = imgElement.alt;
	//wybiera link do duzego zdjęcia z galerii dla wybranego id
	const fidnLink = galleryItems.find(option => option.description === idElement).original;
	//tworzenie okna modalnego z linkiem
	basicLightbox.create(`
		<img class="gallery__image"src="${fidnLink}">
	`).show()
}
