---
---

{% include js/conference.js %}

window.conference.awaitReady().then(() => {
    const map = window.conference.map.getMap();

    if (typeof map !== 'undefined') {
        // let main_entrance = L.marker([51.05350121390813, 3.726539493169336]).addTo(map);
        let main_entrance = L.marker([51.05350121390813, 3.726539493169336], {
            icon: L.divIcon({
                className: 'map-marker-main-entrance',
                html: '<span style="font-size: 24px; color: red"><span class="fas fa-map-marker-alt"></span></span>',
                // html: '<center><span class="bg-light p-1 rounded-pill"><span class="fas fa-door-open"></span><br>Sint-Baafshuis</span></center>',
                iconSize: [24, 24],
                iconAnchor: [12, 24]
            })
        }).addTo(map);

        function on_main_entrance_click(e) {
            ;
        }
        main_entrance.on('click', on_main_entrance_click);

        let cathedral = L.marker([51.05310994556973, 3.7264174309183042], {
            icon: L.divIcon({
                className: '',
                html: '<span style="font-size: 16px; color: brown"><span class="fas fa-church"></span></span>',
                // html: '<center><span class="bg-light p-1 rounded-pill"><span class="fas fa-church"></span><br>Saint Bavo\'s Cathedral </span></center>',
                iconSize: [16, 16],
                iconAnchor: [0, 8]
            })
        }).addTo(map);
    }
});
