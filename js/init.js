
// Define your property data as an array of objects
const properties = [
  {
    id: 1, 
    image: 'images/frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg',
    type: "sale", 
    address: "Kileleshwa", 
    price: 250000 
  },
  { id: 2, type: "rent", address: "Westlands", rent: 1500 },
  { id: 3, type: "sale", address: "Parklands", price: 1500 },
  { id: 4, type: "rent", address: "Westlands", rent: 1500 },
  { id: 5, type: "sale", address: "Westlands", price: 1500 },
  { id: 6, type: "rent", address: "Kilimani", rent: 1500 },
];

function displayProperties() {
  const list = document.getElementById("properties_list");

  // Loop through each property object
  properties.forEach(property => {
    const item = document.createElement("div");
    item.classList.add("property-item");

    // Create HTML content for each property
    item.innerHTML = `
     <div class='properties_list'> 
     <img src=${property.image} width =  "300" alt="">
     <h3>${property.address}</h3>
     <p> ${property.type === "sale" ? "For Sale" : "For Rent"} - $${property.type === "sale" ?
     property.price : property.rent}</p>
    </div>
      `;

    list.appendChild(item);
  });
}

// Call the display function after the page loads
window.addEventListener("DOMContentLoaded", displayProperties);

