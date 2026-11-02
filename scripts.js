// LIGHTBOX FUNCTIONALITY FOR SERVICES GALLERY

document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const galleryImages = document.querySelectorAll('.services-gallery img');

    // Open lightbox when a gallery image is clicked

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex'; // Shows the dark overlay
            lightboxImg.src = img.src;       // Sets the clicked image inside the lightbox
        });
    });

    // Close lightbox when the 'X' is clicked

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Close lightbox when clicking anywhere on the dark background
    
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = 'none';
        }
    });
});

// INTERACTIVE MAP FUNCTIONALITY (Leaflet.js)

document.addEventListener('DOMContentLoaded', () => {
    const mapContainer = document.getElementById('cafe-map');

    // Only run the map script if the map container exists on the current page

    if (mapContainer) {
        
        // Initialise the map and set its view to Cape Town coordinates

        // The '15' is the zoom level (higher number = closer zoom)

        const map = L.map('cafe-map').setView([-33.9249, 18.4241], 15);

        // Load the Esri World Street Map tiles 

        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri'
        }).addTo(map);

        // Add a custom pin marker for Fauna Cafe (Pty) Ltd

        const marker = L.marker([-33.9249, 18.4241]).addTo(map);
        
        // 4. Add a pop-up description to the marker

        marker.bindPopup("<b>Fauna Cafe (Pty) Ltd</b><br>Your biophilic digital workspace.").openPopup();
    }
});

// ENQUIRY FORM VALIDATION

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('enquiry-form');
    const errorContainer = document.getElementById('form-errors');

    // Only run this script if the form exists on the current page

    if (form) {
        form.addEventListener('submit', (e) => {

            // 1. Prevent the form from submitting immediately

            e.preventDefault(); 
            
            // 2. Clear out any old error messages

            errorContainer.innerHTML = '';
            let errors = [];

            // 3. Grab the values the user typed in

            const fname = document.getElementById('fname').value.trim();
            const lname = document.getElementById('lname').value.trim();
            const email = document.getElementById('email').value.trim();
            const request = document.getElementById('request').value.trim();

            // 4. Run the validation checks

            if (fname === '') {
                errors.push('First Name is required.');
            }
            if (lname === '') {
                errors.push('Last Name is required.');
            }
            if (email === '') {
                errors.push('Email Address is required.');
            } else if (!email.includes('@') || !email.includes('.')) {
                errors.push('Please enter a valid Email Address.');
            }
            if (request === '') {
                errors.push('Please provide details for your enquiry.');
            }

            // 5. Display errors or submit the form

            if (errors.length > 0) {

                // If there are errors, display them as a bulleted list

                errorContainer.innerHTML = '<ul><li>' + errors.join('</li><li>') + '</li></ul>';
            } else {

                // If there are no errors, show a success message (simulating a submission)

                errorContainer.style.color = '#5cb85c'; // Change text to green
                errorContainer.innerHTML = 'Thank you! Your enquiry has been submitted successfully.';
                form.reset(); // Clear the form fields
            }
        });
    }
});

// DYNAMIC CONTENT FILTER (Search Functionality)

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('menu-search');
    const tableRows = document.querySelectorAll('tbody tr'); // Point to all rows in the table body

    if (searchInput) {
        searchInput.addEventListener('keyup', () => {
            const filterValue = searchInput.value.toLowerCase();

            // Loop through all table rows

            tableRows.forEach(row => {

                // Grab all the text inside the current row

                const rowText = row.textContent.toLowerCase();

                // If the row text includes the search term, show it. Otherwise, hide it

                if (rowText.includes(filterValue)) {
                    row.style.display = ''; 
                } else {
                    row.style.display = 'none'; 
                }
            });
        });
    }
});

/* Cyle Simmons | ST10543695 | Fauna Cafe (Pty) Ltd 2026 */