// Get password input and button
const passwordInput = document.getElementById('registerPassword');
const passwordlogin=document.getElementById("loginPassword")
const toggleButton = document.getElementById('togglePassword');
const toggleButton2 = document.getElementById('togglePassword2');

// Add event listener to button
toggleButton.addEventListener('click', function() {
    // Toggle password visibility
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.innerText = 'Hide';
    } else {
        passwordInput.type = 'password';
        toggleButton.innerText = 'Show';
    }
});
toggleButton2.addEventListener('click', function() {
    // Toggle password visibility
    if (passwordlogin.type === 'password') {
        passwordlogin.type = 'text';
        toggleButton2.innerText = 'Hide';
    } else {
        passwordlogin.type = 'password';
        toggleButton2.innerText = 'Show';
    }
});

// Function to save registration data in localStorage
function saveRegistrationData() {
    var registerData = {
        firstName: document.getElementById('registerFirstName').value,
        lastName: document.getElementById('registerLastName').value,
        email: document.getElementById('registerEmail').value,
        phone : document.getElementById('registerPhone').value,
        age: document.getElementById('registerAge').value,
        userID: document.getElementById('registerUserID').value,
        password: document.getElementById('registerPassword').value
    };
    localStorage.setItem('registerData', JSON.stringify(registerData));
}

// Function to handle signup button click event
function signupbtn() {
    // Get the values of input fields
    var firstName = document.getElementById('registerFirstName').value;
    var lastName = document.getElementById('registerLastName').value;
    var email = document.getElementById('registerEmail').value;
    var phone = document.getElementById('registerPhone').value;
    var age = document.getElementById('registerAge').value;
    var userID = document.getElementById('registerUserID').value;
    var password = document.getElementById('registerPassword').value;

    // Check if any input is empty
    if (firstName === '' || lastName === '' || email === '' || phone === '' || age === '' || userID === '' || password === '') {
        alert('Please fill in all fields.');
    } else {
        // Proceed with signup process
        var storedData = JSON.parse(localStorage.getItem('registerData'));
        if (storedData) {
            // Check if email or phone number matches any of the stored data
            if (email === storedData.email || phone === storedData.phone) {
                alert('You have logged in previously.');
            } else {
                saveRegistrationData(); // Save registration data before switching to login
                document.querySelector('.register').style.display = 'none';
                document.querySelector('.login').style.display = 'block';
                document.querySelector('.dashboard').style.display = 'none';
            }
        } else {
            saveRegistrationData(); // Save registration data before switching to login
            document.querySelector('.register').style.display = 'none';
            document.querySelector('.login').style.display = 'block';
            document.querySelector('.dashboard').style.display = 'none';
        }
    }
    document.getElementById('registerFirstName').value ="";
    document.getElementById('registerLastName').value ="";
   document.getElementById('registerEmail').value ="";
   document.getElementById('registerPhone').value ="";
    document.getElementById('registerAge').value ="";
    document.getElementById('registerUserID').value ="";
   document.getElementById('registerPassword').value ="";
}



// Function to handle login button click event
function login() {
    // Get the values of input fields
    var loginUserID = document.getElementById('loginUserID').value;
    var loginPassword = document.getElementById('loginPassword').value;

    // Check if any input is empty
    if (loginUserID === '' || loginPassword === '') {
        alert('Please enter both user ID and password.');
    } else {
        var storedData = JSON.parse(localStorage.getItem('registerData'));

        if (!storedData) {
            alert('You are not registered yet!');
            return;
        }

        // Assuming a simple validation where login is successful if userID and password match stored data
        if (loginUserID === storedData.userID && loginPassword === storedData.password) {
            document.querySelector('.register').style.display = 'none';
            document.querySelector('.login').style.display = 'none';
            document.querySelector('.dashboard').style.display = 'block';
        } else {
            alert('Please enter correct user ID and password.');
        }
    }
    document.getElementById('loginUserID').value ="";
    document.getElementById('loginPassword').value ="";
}


// Function to show login form and hide register form
function showLoginForm() {
    document.querySelector('.register').style.display = 'none';
    document.querySelector('.login').style.display = 'block';
    document.querySelector('.dashboard').style.display = 'none';
}

// Function to show register form and hide login form
function showRegisterForm() {
    document.querySelector('.register').style.display = 'block';
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.dashboard').style.display = 'none';
}
var storedataobj = JSON.parse(localStorage.getItem('registerData'))
// Set default page view
window.onload = function() {
    // Check if user is already registered, if yes, show login form
    var storedData = localStorage.getItem('registerData');

    if (storedData) {
        document.querySelector('.register').style.display = 'none';
        document.querySelector('.login').style.display = 'block';
        document.querySelector('.dashboard').style.display = 'none';
        document.getElementById('loginUserID').value= storedataobj.userID;
        document.getElementById('loginPassword').value = storedataobj.password;
    } else {
        // If user is not registered yet, show register form by default
        document.querySelector('.register').style.display = 'block';
        document.querySelector('.login').style.display = 'none';
        document.querySelector('.dashboard').style.display = 'none';
    }
}
// Function to handle signup button click event
function signupall() {
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.register').style.display = 'block';
    document.querySelector('.dashboard').style.display = 'none';
}


document.querySelector(".part2").innerHTML=`<h4>hello, ${storedataobj.firstName}</h4><h5>welcome to the page</h5>`;




var usersList = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        },
        "status": "active"
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        },
        "status": "active"
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        },
        "status": "active"
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        },
        "status": "active"
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        },
        "status": "inactive"
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        },
        "status": "active"
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        },
        "status": "inactive"
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        },
        "status": "active"
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        },
        "status": "inactive"
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        },
        "status": "active"
    }
]

var dataToUser = "";

function showAllUsers() {
    dataToUser = ""; // Reset dataToUser to an empty string
    for (let index = 0; index < usersList.length; ++index) {
        dataToUser += `<div id='card'><h4>${usersList[index].name}</h4>
                    <h6>${usersList[index].id}</h6>
                    <button id='btn${index}' onclick='deleteUser(${index})'>Delete</button>
                    <div class="notification"></div> <!-- Notification area -->
                    <button id="addtocart${index}" onclick="addtoCart(${index})">Add to Cart</button>
</div>`;
    }
    document.getElementById("cardsContainer").innerHTML = dataToUser; // Use '=' instead of '+=' to replace existing content
}

function deleteUser(index) {
    usersList.splice(index, 1);
    showAllUsers(); // Re-render the user list after deletion
}


function showAllCarts() {
    // Create an object to store the quantity of each item
    var itemQuantities = {};

// Initialize an object to store item quantities
var itemQuantities = {};

// Count the quantity of each item in the cart
cartItems.forEach(function(item) {
    var key = item.id + '_' + item.name; // Create a unique key using item id and name
    itemQuantities[key] = (itemQuantities[key] || 0) + 1; // Increment the quantity or set to 1 if not present
});


    // Generate HTML for the cart dropdown based on the item quantities
    var dataTocart = "";
    for (let key in itemQuantities) {
        var [itemId, itemName] = key.split('_');
        var quantity = itemQuantities[key];
        dataTocart += `<div id='card-cart'><h4>${itemName}</h4>
                        <h6>ID: ${itemId}</h6>
                        <p>Quantity: ${quantity}</p>
                        <button onclick='increaseQuantity("${itemId}", "${itemName}")'>+</button>
                        <button onclick='decreaseQuantity("${itemId}", "${itemName}")'>-</button>
                      </div>`;
    }

    // Update the cart dropdown with the generated HTML
    document.getElementById("cart-dropdown").innerHTML = dataTocart;
}

var cartItems=[]
// Function to add an item to the cart
function addtoCart(index) {
    var selectedItem = usersList[index];
    
    // Check if the item is already in the cart
    var alreadyAdded = cartItems.some(item => item.id === selectedItem.id);
    
    // If the item is already in the cart, show a notification
    if (alreadyAdded) {
        showNotification("You have already added this item to the cart.");
        document.getElementById("notificarion")
    } else {
        // Add the item to the cart if it's not already added
        cartItems.push(selectedItem);
        document.getElementById('cartnumber').innerText = cartItems.length;
        showAllCarts();
    }
}


// Function to show a notification
function showNotification(message) {
    // Create a notification element
    var notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;

    // Append the notification to the document body
    document.body.appendChild(notification);

    // Remove the notification after a certain time
    setTimeout(function() {
        notification.remove();
    }, 3000); // Remove after 3 seconds
}




function deleteCartItem(index) {
    // Remove the item from the cartItems array at the specified index
    cartItems.splice(index, 1);

    // Update the cart number
    document.getElementById('cartnumber').innerText = cartItems.length;

    // Update the cart dropdown to reflect the changes
    showAllCarts();
}


showAllUsers(); 

function toggleCart(){
    if(document.getElementById("cart-dropdown").style.display=="none"){
    document.getElementById("cart-dropdown").style.display="block"
    }else{
        document.getElementById("cart-dropdown").style.display="none"
    }

}

function clearCart() {
    cartItems = []; // Empty the cart array
    document.getElementById('cartnumber').innerText = cartItems.length;

    showAllCarts(); // Update the cart dropdown display
    
}
// Function to increase quantity of an item in the cart
function increaseQuantity(itemId, itemName) {
    cartItems.push({ id: itemId, name: itemName });
    document.getElementById('cartnumber').innerText = cartItems.length;
    showAllCarts();
}

// Function to decrease quantity of an item in the cart
function decreaseQuantity(itemId, itemName) {
    var index = cartItems.findIndex(item => item.id === itemId && item.name === itemName);
    if (index !== -1) {
        cartItems.splice(index, 1);
        document.getElementById('cartnumber').innerText = cartItems.length;
        showAllCarts();
    }
}
function searchSome() {
    var searchInput = document.getElementById('searchinput').value;
    if(document.getElementById('searchinput').value==""){
        document.getElementById("cardSearch").style.display="none"
    }
    var matchingItems = '';

    for (let index = 0; index < usersList.length; index++) {
        if (usersList[index].name.includes(searchInput)) {
            matchingItems += `<div id='cardSearch'><h4>Name: ${usersList[index].name}</h4><h6>ID: ${usersList[index].id}</h6><br/><button onclick='addtoCart(${index})'>Add to Cart</button></div>`;
        }
    }

    // Update the inner HTML of 'cardsContainer'
    document.getElementById('cardsContainer').innerHTML = matchingItems;

    // Display relevant sections
    document.getElementById("cardSearch").style.display = "block";
    document.getElementById('searchinput').value=""

}



 