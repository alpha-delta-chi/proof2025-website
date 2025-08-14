---
---

{% include js/conference.js %}

window.conference.awaitReady().then(() => {
    const map = window.conference.map.getMap();

    if (typeof map !== 'undefined') {
        let marker_sint_baafshuis = L.marker([51.05352383222492, 3.7266187087516283], {
            icon: L.divIcon({
                className: 'map-marker-sint-baafshuis',
                html: '<center><span style="font-size: 24px; color: red"><span class="fas fa-map-marker-alt"></span></span></center>',
                iconSize: [40, 40],
                iconAnchor: [21, 30],
                tooltipAnchor: [0, 0]
            })
        }).addTo(map);

        marker_sint_baafshuis.bindTooltip("Sint-Baafshuis", {
            permanent: false,
            direction: 'bottom',
        }).on('click', function (e) {
            this.openTooltip();
        });

        let marker_entrance = L.marker([51.05345886295873, 3.726542559077271], {
            icon: L.divIcon({
                className: 'map-marker-entrance',
                html: '<center><span style="font-size: 12px; color: maroon"><span class="fas fa-door-open"></span></span></center>',
                iconSize: [20, 20],
                iconAnchor: [10, 15],
                tooltipAnchor: [0, 0]
            })
        }).addTo(map);

        marker_entrance.bindTooltip("<center>Main Entrance<br>(Biezekapelstraat 2)</center>", {
            permanent: false,
            direction: 'bottom',
        }).on('click', function (e) {
            this.openTooltip();
        });

        let marker_sintbaafs = L.marker([51.053088652460715, 3.7264682192806013], {
            icon: L.divIcon({
                className: '',
                html: '<center><span style="font-size: 12px; color: brown"><span class="fas fa-church"></span></span></center>',
                iconSize: [20, 20],
                iconAnchor: [10, 15]
            })
        }).addTo(map);

        marker_sintbaafs.bindTooltip("Saint Bavo's Cathedral", {
            permanent: false,
            direction: 'bottom',
        }).on('click', function (e) {
            this.openTooltip();
        });
    }
});
