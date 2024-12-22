// The two buttons at the bottom of the cellphone functionality
// Getting the dom
const homePage = document.getElementById('homePage')
const secondPage = document.getElementById('secondPage')
const allAppsPage = document.getElementById('allAppsPage')

//Apps DOM
const app = document.querySelectorAll('.cellApp')
const appPage = document.querySelectorAll('.appPage')

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
                const appId = myapp.dataset.id 
                if(appId === '1'){
                    closeAllPages();
                    const pageToOpen = appPage[0]
                    pageToOpen.style.display = 'flex'
                } else if(appId === '2'){
                    closeAllPages();
                    const pageToOpen = appPage[1]
                    pageToOpen.style.display = 'flex'
                } else if(appId === '3'){
                    closeAllPages();
                    const pageToOpen = appPage[2]
                    pageToOpen.style.display = 'flex'
                } else if(appId === '4'){
                    closeAllPages();
                    const pageToOpen = appPage[3]
                    pageToOpen.style.display = 'flex'
                } else if(appId === '5'){
                    closeAllPages();
                    const pageToOpen = appPage[4]
                    pageToOpen.style.display = 'flex'
                } else if(appId === '6'){
                    closeAllPages();
                    const pageToOpen = appPage[5]
                    pageToOpen.style.display = 'flex'
                } else if(appId === '7'){
                    closeAllPages();
                    const pageToOpen = appPage[6]
                    pageToOpen.style.display = 'flex'
                } else if(appId === '8'){
                    closeAllPages();
                    const pageToOpen = appPage[7]
                    pageToOpen.style.display = 'flex'
                } else if(appId === '9'){
                    closeAllPages();
                    const pageToOpen = appPage[8]
                    pageToOpen.style.display = 'flex'
                } else if(appId === '10'){
                    closeAllPages();
                    const pageToOpen = appPage[9]
                    pageToOpen.style.display = 'flex'
                } else if(appId === '11'){
                    closeAllPages();
                    const pageToOpen = appPage[10]
                    pageToOpen.style.display = 'flex'
                } else if(appId === '12'){
                    closeAllPages();
                    const pageToOpen = appPage[11]
                    pageToOpen.style.display = 'flex'
                } else if(appId === '13'){
                    closeAllPages();
                    const pageToOpen = appPage[12]
                    pageToOpen.style.display = 'flex'
                } else if(appId === '14'){
                    closeAllPages();
                    const pageToOpen = appPage[13]
                    pageToOpen.style.display = 'flex'
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
    appPage[0].style.display = 'none'
    appPage[1].style.display = 'none'
    appPage[2].style.display = 'none'
    appPage[3].style.display = 'none'
    appPage[4].style.display = 'none'
    appPage[5].style.display = 'none'
    appPage[6].style.display = 'none'
    appPage[7].style.display = 'none'
    appPage[8].style.display = 'none'
    appPage[9].style.display = 'none'
    appPage[10].style.display = 'none'
    appPage[11].style.display = 'none'
    appPage[12].style.display = 'none'
    appPage[13].style.display = 'none'
}