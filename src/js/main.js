// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import {  } from './alerts'
import { getUrlUsers } from './urlData';

// VARIABLES
const URL = getUrlUsers()
const formUsers =  document.querySelector("#formUsers");
const completeName =  document.querySelector("#completeName");
const email =  document.querySelector("#email");
const password =  document.querySelector("#password");
const table = document.querySelector("#spaceUsers")
const confirmPassword =  document.querySelector("#confirmPassword");

// SHOW USERS
await showUsers()

formUsers.addEventListener("submit", async (e) => {

    e.preventDefault()

    if (password.value === confirmPassword.value) {
        await createUser(completeName,email,password)
        await showUsers()
        formUsers.reset()
    }

})

// FUNCTIONS
async function createUser(completeName,email,password) {
    const data = {
        completeName: completeName.value,
        email: email.value,
        password: password.value
    }

    await fetch(`${URL}`,{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    })
}

async function showUsers() {
    
    const response = await fetch(`${URL}`)
    const data = await response.json()

    table.innerHTML = ``
    data.forEach((element,i) => {
        table.innerHTML += `
            <tr>
            <th scope="row">${i+1}</th>
                <td>${element.completeName}</td>
                <td>${element.email}</td>
                <td>${element.password}</td>
                <td scope="col">
                    <button type="button" data-id="${element.id}" class="btn btn-warning">Editar</button>
                    <button type="button" data-id="${element.id}" class="btn btn-danger">Eliminar</button>
                </td>
            </tr>
        `
    });
}

async function findUsers(id) {
    const user = await fetch(`${URL}/${id}`)
    const data = await user.json()
    return data
}

async function deleteUsers(id) {
    
}