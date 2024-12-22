// The two buttons at the bottom of the cellphone functionality
// Getting the dom
const homePage = document.getElementById('homePage')
const secondPage = document.getElementById('secondPage')
const allAppsPage = document.getElementById('allAppsPage')

//Apps DOM
const app = document.querySelectorAll('.cellApp')

export function cellphoneButtons(){
    // Getting the dom
    const homeBtn = document.getElementById('homeBtn')
    const allAppsBtn = document.getElementById('allAppsBtn')
    const firstPageBtn = document.querySelectorAll('#firstPageBtn')
    const secondPageBtn = document.getElementById('secondPageBtn')
   

    if(homeBtn || firstPageBtn || secondPageBtn || allAppsBtn){
        homeBtn.addEventListener('click', () => {
            closeAllPages();
            homePage.style.display = 'flex'
        })
        firstPageBtn.forEach(function(first){
            first.addEventListener('click', () => {
                closeAllPages();
                homePage.style.display = 'flex'
            })
        })
        secondPageBtn.addEventListener('click', () => {
            closeAllPages();
            secondPage.style.display = 'flex'
        })
        allAppsBtn.addEventListener('click', () => {
            closeAllPages();
            allAppsPage.style.display = 'flex'
        })
    }
}

//Open app
export function openApps(){
    if(app){
        app.forEach(function(myapp) {
            myapp.addEventListener('click', () => {
                console.log('entramos al boton')
                const appId = myapp.dataset.id 
                console.log(appId)
                if(appId === '1'){
                    closeAllPages();
                    myapp.style.display = 'flex'
                } 
            })
        })
    }
}

// Function to close all pages
function closeAllPages(){
    // Getting the dom
    homePage.style.display = 'none'
    secondPage.style.display = 'none'
    allAppsPage.style.display = 'none'

}