
// Define your property data as an array of objects

const properties = [
  { //misty springs
    id: 1,
    image: '/images/Moon-Valley-400x284.png',
    type: "sale",
    address: "Westlands",
    price: "8,000,000",
    description: "This is a high end 1 and 2 bedroom apartments for sale! Located in Westlands along Westlands road NEAR GTC! On 23 floors with fantastic views. Offering high return on investment. Has flexible payment options up to 30 months after placing a 30% deposit to reserve."
    
  },
  { // Skynest
    id: 2,
    image: 
    type: "rent",
    address: "Westlands",
    rent: "Kes 200,000",
    description: " ",
  },
  { //Upperhill Laurell Hill
    id: 3,
    image: 
    type: "sale",
    address: "Upperhill",
    price: 1500,
    description: " ",
  },
  { //sale Royal Gardens apartments
    id: 4,
    image: 
    type: "rent",
    address: "Upperhill",
    rent: 1500,
    description: " ",
  },
  { //gitanga duplex lavington
    id: 5,
    image:
    type: "rent",
    address: "Lavington",
    price: 1500,
    description: "Gitanga duplexes are a modern development located in the heart of Lavington off Gitanga Road. Privileged by its exquisite design and opulent finishes, this elegant residence offers 36, 4 bedroom ensuite duplexes plus DSQ on 12 levels. ",
  },
  { // 
    id: 6,
    image:
    type: "rent",
    address: "Lavington",
    rent: 1500,
    description: " ",
  },
  { // 
    id: 7,
    Image :
    type: "Sale",
    address: "Kileleshwa",
    Price: "From Kes. 12.5M" ,
    description: "Moon Valley Dubai style Apartments on Mandera road, Kileleshwa are sophisticated and luxurious apartments inspired by the glorious sand-castle designs in Dubai. The stunning spaces offer a variety of lifestyle with options of 1,2 & 3 bed units. The blissful serenity welcomes you to a bright & airy aura with incredible panoramic views encompassing Lavington and Riverside. Mesmerize yourself with state of the art facilities by enjoying a warm swim at the heated pool, rejuvenation at the world class gym, convenience of a fully back-up generator & so much more. The residences are situated in a serene locale with easy access to Schools, Hotels & Restaurants, Sports Park, Transportation Services & Shopping malls. ",
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
      <p> ${property.description} </p>
    </div>
      `;

    list.appendChild(item);
  });
}

// Call the display function after the page loads
window.addEventListener("DOMContentLoaded", displayProperties);

