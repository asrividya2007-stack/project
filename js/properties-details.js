const properties = {

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


// Get property ID from URL

const params = new URLSearchParams(
    window.location.search
);

const id = params.get("id");

const property = properties[id];


// Display property

if (property) {

    document.getElementById("detailsImage").src =
        property.image;

    document.getElementById("detailsType").innerText =
        property.type;

    document.getElementById("detailsTitle").innerText =
        property.title;

    document.getElementById("detailsLocation").innerText =
        property.location;

    document.getElementById("detailsPrice").innerText =
        property.price;

    document.getElementById("detailsBeds").innerText =
        property.beds;

    document.getElementById("detailsBaths").innerText =
        property.baths;

    document.getElementById("detailsArea").innerText =
        property.area;

    document.getElementById("detailsDescription").innerText =
        property.description;

}