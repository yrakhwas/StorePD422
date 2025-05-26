


const tableBody = document.getElementById("table-body");

const createBtn = document.getElementById("create-btn");
const deleteBtn = document.getElementById("delete-btn");

let products = [];

deleteBtn.onclick = ()=>
{
    products = [];
    tableBody.innerHTML = "";
}

createBtn.onclick = () =>{
    
    const newProduct = getProductFromForm();

    products.push(newProduct);


    addProductToTable(newProduct);
    
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

function addProductToTable(product)
{
    tableBody.innerHTML += `<tr class="table-light">
                            <th scope="row">${product.id}</th>
                            <td>${product.model}</td>
                            <td>${product.description}</td>
                            <td>${product.price}$</td>
                        </tr>`;
}
