// National Parks Tracker
// This will be populated from Jekyll data file

const nationalParks = [
    { name: "Acadia", state: "Maine", visited: false },
    { name: "Arches", state: "Utah", visited: true },
    { name: "Badlands", state: "South Dakota", visited: false },
    { name: "Big Bend", state: "Texas", visited: false },
    { name: "Biscayne", state: "Florida", visited: false },
    { name: "Black Canyon of the Gunnison", state: "Colorado", visited: false },
    { name: "Bryce Canyon", state: "Utah", visited: true },
    { name: "Canyonlands", state: "Utah", visited: false },
    { name: "Capitol Reef", state: "Utah", visited: true },
    { name: "Carlsbad Caverns", state: "New Mexico", visited: false },
    { name: "Channel Islands", state: "California", visited: false },
    { name: "Congaree", state: "South Carolina", visited: false },
    { name: "Crater Lake", state: "Oregon", visited: true },
    { name: "Cuyahoga Valley", state: "Ohio", visited: false },
    { name: "Death Valley", state: "California/Nevada", visited: false },
    { name: "Denali", state: "Alaska", visited: true },
    { name: "Dry Tortugas", state: "Florida", visited: false },
    { name: "Everglades", state: "Florida", visited: false },
    { name: "Gates of the Arctic", state: "Alaska", visited: false },
    { name: "Gateway Arch", state: "Missouri", visited: false },
    { name: "Glacier", state: "Montana", visited: true },
    { name: "Glacier Bay", state: "Alaska", visited: false },
    { name: "Grand Canyon", state: "Arizona", visited: true },
    { name: "Grand Teton", state: "Wyoming", visited: true },
    { name: "Great Basin", state: "Nevada", visited: false },
    { name: "Great Sand Dunes", state: "Colorado", visited: false },
    { name: "Great Smoky Mountains", state: "Tennessee/North Carolina", visited: false },
    { name: "Guadalupe Mountains", state: "Texas", visited: false },
    { name: "Haleakalā", state: "Hawaii", visited: true },
    { name: "Hawaiʻi Volcanoes", state: "Hawaii", visited: false },
    { name: "Hot Springs", state: "Arkansas", visited: false },
    { name: "Indiana Dunes", state: "Indiana", visited: true },
    { name: "Isle Royale", state: "Michigan", visited: false },
    { name: "Joshua Tree", state: "California", visited: false },
    { name: "Katmai", state: "Alaska", visited: true },
    { name: "Kenai Fjords", state: "Alaska", visited: false },
    { name: "Kings Canyon", state: "California", visited: false },
    { name: "Kobuk Valley", state: "Alaska", visited: false },
    { name: "Lake Clark", state: "Alaska", visited: false },
    { name: "Lassen Volcanic", state: "California", visited: false },
    { name: "Mammoth Cave", state: "Kentucky", visited: false },
    { name: "Mesa Verde", state: "Colorado", visited: false },
    { name: "Mount Rainier", state: "Washington", visited: true },
    { name: "New River Gorge", state: "West Virginia", visited: false },
    { name: "North Cascades", state: "Washington", visited: true },
    { name: "Olympic", state: "Washington", visited: true },
    { name: "Petrified Forest", state: "Arizona", visited: false },
    { name: "Pinnacles", state: "California", visited: false },
    { name: "Redwood", state: "California", visited: true },
    { name: "Rocky Mountain", state: "Colorado", visited: false },
    { name: "Saguaro", state: "Arizona", visited: false },
    { name: "Sequoia", state: "California", visited: false },
    { name: "Shenandoah", state: "Virginia", visited: false },
    { name: "Theodore Roosevelt", state: "North Dakota", visited: false },
    { name: "Virgin Islands", state: "U.S. Virgin Islands", visited: false },
    { name: "Voyageurs", state: "Minnesota", visited: false },
    { name: "White Sands", state: "New Mexico", visited: false },
    { name: "Wind Cave", state: "South Dakota", visited: false },
    { name: "Wrangell-St. Elias", state: "Alaska", visited: false },
    { name: "Yellowstone", state: "Wyoming/Montana/Idaho", visited: true },
    { name: "Yosemite", state: "California", visited: true },
    { name: "Zion", state: "Utah", visited: true }
];

// Initialize parks visualization
document.addEventListener('DOMContentLoaded', function() {
    if (!document.querySelector('.national-parks-section')) return;

    const totalParks = nationalParks.length;
    const visitedParks = nationalParks.filter(p => p.visited).length;
    const percentage = Math.round((visitedParks / totalParks) * 100);

    // Update stats
    document.getElementById('parks-visited').textContent = visitedParks;
    document.getElementById('parks-remaining').textContent = totalParks - visitedParks;
    document.getElementById('parks-percentage').textContent = percentage + '%';
    document.getElementById('progress-fill').style.width = percentage + '%';

    // Render parks grid
    const parksGrid = document.querySelector('.parks-grid');
    nationalParks.sort((a, b) => a.name.localeCompare(b.name)).forEach(park => {
        const parkCard = document.createElement('div');
        parkCard.className = `park-card ${park.visited ? 'visited' : 'not-visited'}`;
        parkCard.setAttribute('data-status', park.visited ? 'visited' : 'wishlist');

        parkCard.innerHTML = `
            <div class="park-status">${park.visited ? '✓' : '○'}</div>
            <h4 class="park-name">${park.name}</h4>
            <p class="park-state">${park.state}</p>
        `;

        parksGrid.appendChild(parkCard);
    });

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filter parks
            const filter = this.getAttribute('data-filter');
            const parkCards = document.querySelectorAll('.park-card');

            parkCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else {
                    const status = card.getAttribute('data-status');
                    card.style.display = status === filter ? 'block' : 'none';
                }
            });
        });
    });
});
