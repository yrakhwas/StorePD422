


const tableBody = document.getElementById("table-body");

const createBtn = document.getElementById("create-btn");
const deleteBtn = document.getElementById("delete-btn");

const themeBtn = document.getElementById("theme-btn");

const nav = document.getElementById("navbar");

const buttons = document.getElementsByClassName("btn");



let products = [];

themeBtn.onclick = (event) =>{
    event.preventDefault();
    console.log("Theme button clicked");
    nav.getAttributeNames("data-bs-theme") === "dark" ? "light" : "dark";
   if(themeBtn.innerHTML == "Light") 
   {
    themeBtn.innerHTML = "Dark";
    nav.classList.remove("bg-light");

    nav.classList.add("bg-dark");

    

   }
   else
   {
    themeBtn.innerHTML = "Light";
    nav.classList.remove("bg-dark");
    nav.classList.add("bg-light");
   }
    
}




deleteBtn.onclick = ()=>
{
    products = [];
    tableBody.innerHTML = "";

    // for (let i = 0; i < buttons.length; i++) {
    //     buttons[i].classList.remove("btn-primary");
    //     buttons[i].classList.add("btn-danger");
    //     buttons[i].innerHTML = "Clicked";
    // }

}

function addProductToTable(product)
{
    tableBody.innerHTML += `<tr class="table-light">
                            <th scope="row">${product.id}</th>
                            <td>${product.model}</td>
                            <td>${product.description}</td>
                            <td>${product.price}$</td>
                        </tr>`;
}

function getProductFromForm(){
    const modelInput =  document.getElementById("modelInput");
    const descInput =  document.getElementById("descriptionInput");
    const priceInput =  document.getElementById("priceInput");

    return {
        id: products.length + 1,
        model: modelInput.value,
        description: descInput.value,
        price: +priceInput.value
    }

}
createBtn.onclick = (event) =>{
    event.preventDefault();
    console.log("Create button clicked");
    const newProduct = getProductFromForm();

    products.push(newProduct);


    addProductToTable(newProduct);
    console.log("products", products);
}




