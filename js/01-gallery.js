import { galleryItems } from './gallery-items.js';  

const gallery = document.querySelector(".gallery");
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
gallery.insertAdjacentHTML("beforeend", markup);

//nasłuchowanie kliknięcia i wywołanie funkcji
gallery.addEventListener("click", onGalleryClick)

//utworzenie okna modalnego z wybranym ze zdjeciem
const instance = basicLightbox.create(
	`<img src="">`,
	//opcje okna modalnego zgodnie z dokumentacją
	{
		onShow: () => window.addEventListener("keydown", onEscape),
		onClose: () => window.removeEventListener("keydown", onEscape),
	});


function onGalleryClick(event) {
	//zblokowanie zdarzeń
	event.preventDefault()
	// wyszukiwanie źródła zdjęcia (liku)
	const dataSource = event.target.dataset.source 

	if (!dataSource) return;
	//zwrócenie elementu instance, następnie wyszukanie w nim pierwszego elementu img i przypisanie do src w tym elemencie dataSource
	instance.element().querySelector('img').src = dataSource;
	//wyswietlenie instance (okna modalnego)
	instance.show()
}

// funkcja reagująca na na wcisniecie przyscisku esc	
function onEscape(event) {
	if (event.key === "Escape") 
        instance.close();
}





	

