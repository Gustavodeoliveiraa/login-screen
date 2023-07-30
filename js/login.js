'use strict'

const loginContainer = document.getElementById('login-content')

const moveOverlay = () => loginContainer.classList.toggle('move')

document.getElementById('open-register').addEventListener('click', moveOverlay)
document.getElementById('open-login').addEventListener('click', moveOverlay)

document.getElementById('register-mobile').addEventListener('click', moveOverlay)
document.getElementById('login-mobile').addEventListener('click', moveOverlay)