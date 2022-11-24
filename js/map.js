  $(document).ready(function () {

		//Open street  Map
		let coord = [47.161790, -1.537040]; // <--- coordonnées ici

		let map = L.map('map-canvas', { scrollWheelZoom:false}).setView(coord, 19);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 14,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(map);

		L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
		attribution: ''
		}).addTo(map);

		// icône personnalisée
		let customIcon = L.icon({
		iconUrl: 'img/mapmarker.WebP',
		iconSize:     [64, 64], // taille de l'icone
		iconAnchor:   [32, 63] // point de l'icône qui correspondra à l'emplacement du marqueur
		});

		// objet marqueur, passer l'icône personnalisée en option, ajouter à la carte       
		let marker = L.marker(coord, {icon: customIcon}).addTo(map);
});