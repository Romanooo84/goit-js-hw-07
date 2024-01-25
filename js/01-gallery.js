import { galleryItems } from './gallery-items.js';  


const list = document.querySelector(".gallery");
//mapuje images i tworzę ciąg znaków z kodem html. Dla src i alt pobieram dane z tabllicy images. join łaczy tablice w ciąg znaków
const markup = galleryItems.map(image =>
	`<li class="gallery__item">
		<a class="gallery__link" href='${image.original}'>
			<img class="gallery__image"
				src='${image.preview}'
				data-source='${image.original}'
				alt='${image.description}'
			/>
  		</a>
	</li>`)
	.join('');
//tworzy elementy html wylistowane w markup
list.insertAdjacentHTML("beforeend", markup);
//sprawdza czy kliknieto w jakikolwiek element znajdujacy sie w ich przodku z klasą gallery 
document.querySelector('.gallery').onclick = (event) => {
	event.preventDefault()
	//sprawdza jaki element został klikinięty
	const imgElement = event.target;
	//wyswietla alt tego elementu alt="${image.description}
	const idElement = imgElement.alt;
	//wybiera link do duzego zdjęcia z galerii dla wybranego id
	const fidnLink = galleryItems.find(option => option.description === idElement).original;

	//tworzenie okna modalnego z linkiem
	const instance = basicLightbox.create(
		`<img src="${fidnLink}">`)
	// wyświetlenie okna modalnego
	instance.show()
	
	// nasłuchiwanie czy wcisniety jest przycisk esc i uruchomienie fukcji
	window.addEventListener('keydown', onEscape)
	
	// funckcja zamykająca okno modalne po wcisnięciu esc
	function onEscape(event) {
		if (event.key === 'Escape')
			instance.close()
			window.removeEventListener('keydown', onEscape)
		}
}




	

