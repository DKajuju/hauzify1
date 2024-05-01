
// Define your property data as an array of objects

const properties = [
  { //misty springs
    id: 1,
    image: 'images/frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg',
    type: "sale",
    address: "Westlands",
    price: "8,000,000",
    Description: "This is a This is a high end 1 and 2 bedroom apartments for sale! Located in Westlands along Westlands road NEAR GTC! On 23 floors with fantastic views. Offering high return on investment. Has flexible payment options up to 30 months after placing a 30% deposit to reserve."

  },
  { // Skynest
    id: 2,
    type: "rent",
    address: "Westlands",
    rent: "Kes 200,000",
    Description: " ",
  },
  { //Upperhill Laurell Hill
    id: 3,
    type: "sale",
    address: "Upperhill",
    price: 1500,
    Description: " ",
  },
  { //sale Royal Gardens apartments
    id: 4,
    type: "rent",
    address: "Upperhill",
    rent: 1500,
    Description: " ",
  },
  { //gitanga duplex lavington
    id: 5,
    type: "rent",
    address: "Lavington",
    price: 1500,
    Description: "Gitanga duplexes are a modern development located in the heart of Lavington off Gitanga Road. Privileged by its exquisite design and opulent finishes, this elegant residence offers 36, 4 bedroom ensuite duplexes plus DSQ on 12 levels. ",
  },
  { // 
    id: 6,
    type: "rent",
    address: "Lavington",
    rent: 1500,
    Description: " ",
  },
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

