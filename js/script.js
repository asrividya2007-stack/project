
// ========================================
// MOBILE NAVIGATION
// ========================================

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {
        mainNav.classList.toggle("active");
    });

    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {
            mainNav.classList.remove("active");
        });

    });
}


// ========================================
// SCROLL REVEAL
// ========================================

const revealElements =
    document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach(function (element) {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (elementTop < windowHeight - 120) {

            element.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

const navbar =
    document.querySelector(".navbar");

if (navbar) {

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 50) {

                navbar.classList.add("scrolled");

            }

            else {

                navbar.classList.remove("scrolled");

            }

        }
    );

}


// ========================================
// CONTACT FORM
// ========================================

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const interest =
                document.getElementById("interest").value;

            const message =
                document.getElementById("message").value.trim();

            const formMessage =
                document.getElementById("formMessage");


            if (
                name === "" ||
                phone === "" ||
                email === "" ||
                interest === "" ||
                message === ""
            ) {

                formMessage.innerText =
                    "Please fill in all the fields.";

                formMessage.style.color = "#b33";

                return;

            }


            formMessage.innerText =
                "Thank you, " +
                name +
                "! Your enquiry has been received.";

            formMessage.style.color =
                "#a17b37";

            contactForm.reset();

        }
    );

}


// ========================================
// PROPERTY SEARCH
// ========================================

const searchButton =
    document.getElementById("searchProperties");

const locationFilter =
    document.getElementById("locationFilter");

const typeFilter =
    document.getElementById("typeFilter");

const priceFilter =
    document.getElementById("priceFilter");


if (
    searchButton &&
    locationFilter &&
    typeFilter &&
    priceFilter
) {

    searchButton.addEventListener(
        "click",
        function () {

            const selectedLocation =
                locationFilter.value;

            const selectedType =
                typeFilter.value;

            const selectedPrice =
                priceFilter.value;


            const properties =
                document.querySelectorAll(
                    ".property-grid .property-card"
                );


            let visibleCount = 0;


            properties.forEach(
                function (property) {

                    const location =
                        property.dataset.location || "";

                    const type =
                        property.dataset.type || "";

                    const price =
                        Number(
                            property.dataset.price || 0
                        );


                    const locationMatch =
                        selectedLocation === "all" ||
                        location === selectedLocation;


                    const typeMatch =
                        selectedType === "all" ||
                        type === selectedType;


                    const priceMatch =
                        selectedPrice === "all" ||
                        price <= Number(selectedPrice);


                    if (
                        locationMatch &&
                        typeMatch &&
                        priceMatch
                    ) {

                        property.style.display = "";

                        visibleCount++;

                    }

                    else {

                        property.style.display =
                            "none";

                    }

                }
            );


            const countElement =
    document.getElementById("propertyCount");

            if (countElement) {

                countElement.innerText =
                    visibleCount +
                    " Properties Available";

            }


            let noResults =
                document.querySelector(
                    ".no-results"
                );


            if (visibleCount === 0) {

                if (!noResults) {

                    noResults =
                        document.createElement("div");

                    noResults.className =
                        "no-results";

                    noResults.innerHTML = `
                        <h3>No Properties Found</h3>
                        <p>
                            We couldn't find a property
                            matching your requirements.
                        </p>
                    `;


                    const grid =
                        document.querySelector(
                            ".property-grid"
                        );


                    if (grid) {

                        grid.appendChild(noResults);

                    }

                }

            }

            else {

                if (noResults) {

                    noResults.remove();

                }

            }

        }
    );

}
// ========================================
// PROPERTY DETAILS
// ========================================

const propertyData = {

    "modern-serenity-villa": {
        type: "LUXURY VILLA",
        title: "Modern Serenity Villa",
        location: "📍 Tirupati, Andhra Pradesh",
        price: "₹1.85 Cr",
        beds: "4",
        baths: "4",
        area: "3,200 Sq.Ft",
        image: "images/villa1.jpg",
        description: "A beautiful luxury villa in Tirupati offering spacious rooms, modern interiors and a peaceful residential environment."
    },

    "skyline-residency": {
        type: "PREMIUM APARTMENT",
        title: "Skyline Residency",
        location: "📍 Hyderabad, Telangana",
        price: "₹95 Lakhs",
        beds: "3",
        baths: "3",
        area: "2,100 Sq.Ft",
        image: "images/apartment1.jpg",
        description: "A modern premium apartment in Hyderabad with comfortable living spaces and excellent connectivity."
    },

    "green-valley-residence": {
        type: "INDEPENDENT HOUSE",
        title: "Green Valley Residence",
        location: "📍 Bengaluru, Karnataka",
        price: "₹1.25 Cr",
        beds: "3",
        baths: "3",
        area: "2,500 Sq.Ft",
        image: "images/house1.jpg",
        description: "A spacious independent house in Bengaluru designed for comfortable family living."
    },

    "royal-garden-villa": {
        type: "PREMIUM VILLA",
        title: "Royal Garden Villa",
        location: "📍 Chennai, Tamil Nadu",
        price: "₹2.40 Cr",
        beds: "5",
        baths: "5",
        area: "4,100 Sq.Ft",
        image: "images/villa1.jpg",
        description: "A premium villa in Chennai featuring spacious interiors, elegant design and a peaceful environment."
    },

    "urban-heights": {
        type: "LUXURY APARTMENT",
        title: "Urban Heights",
        location: "📍 Bengaluru, Karnataka",
        price: "₹82 Lakhs",
        beds: "3",
        baths: "2",
        area: "1,850 Sq.Ft",
        image: "images/apartment1.jpg",
        description: "A stylish luxury apartment in Bengaluru offering modern amenities and convenient city living."
    },

    "harmony-residence": {
        type: "INDEPENDENT HOUSE",
        title: "Harmony Residence",
        location: "📍 Vijayawada, Andhra Pradesh",
        price: "₹1.10 Cr",
        beds: "4",
        baths: "3",
        area: "2,800 Sq.Ft",
        image: "images/house1.jpg",
        description: "A comfortable independent house in Vijayawada with spacious rooms suitable for a family."
    }

};


// Get ID from URL

const urlParams =
    new URLSearchParams(window.location.search);

const propertyId =
    urlParams.get("id");


// Find property

const selectedProperty =
    propertyData[propertyId];


// Display property

if (selectedProperty) {

    const image =
        document.getElementById("detailsImage");

    const type =
        document.getElementById("detailsType");

    const title =
        document.getElementById("detailsTitle");

    const location =
        document.getElementById("detailsLocation");

    const price =
        document.getElementById("detailsPrice");

    const beds =
        document.getElementById("detailsBeds");

    const baths =
        document.getElementById("detailsBaths");

    const area =
        document.getElementById("detailsArea");

    const description =
        document.getElementById("detailsDescription");


    if (image)
        image.src = selectedProperty.image;

    if (type)
        type.innerText = selectedProperty.type;

    if (title)
        title.innerText = selectedProperty.title;

    if (location)
        location.innerText = selectedProperty.location;

    if (price)
        price.innerText = selectedProperty.price;

    if (beds)
        beds.innerText = selectedProperty.beds;

    if (baths)
        baths.innerText = selectedProperty.baths;

    if (area)
        area.innerText = selectedProperty.area;

    if (description)
        description.innerText = selectedProperty.description;

}