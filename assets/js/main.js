---
---

{% include js/conference.js %}

window.conference.awaitReady().then(() => {
    const map = window.conference.map.getMap();

    if (typeof map !== 'undefined') {
        let main_entrance = L.marker([51.05350121390813, 3.726539493169336], {
            icon: L.divIcon({
                className: '',
                html: '<center><span class="bg-light p-1 rounded-pill"><span class="fas fa-door-open"></span><br>Sint-Baafshuis</span></center>',
                iconSize: [0, 0]
            })
        }).addTo(map);
        let cathedral = L.marker([51.053002820821646, 3.7270904242024625], {
            icon: L.divIcon({
                className: '',
                html: '<center><span class="bg-light p-1 rounded-pill"><span class="fas fa-church"></span><br>Saint Bavo\'s Cathedral </span></center>',
                iconSize: [0, 0]
            })
        }).addTo(map);
    }
});
