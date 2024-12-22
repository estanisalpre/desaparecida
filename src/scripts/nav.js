// All nav functionality
// Capturing buttons from the DOM (nav)
const navButton = document.querySelectorAll('.gameUi')

// Capturing the modals from the DOM
const modalManual = document.getElementById('modalManual')
const modalNotepad = document.getElementById('modalNotepad')
const modalClues = document.getElementById('modalClues')
const modalMusic = document.getElementById('modalMusic')
const modalLogout = document.getElementById('modalLogout')

// Open modal
export function openModal(){
    if(navButton){
        navButton.forEach(function(btn){
            const btnValue = btn.dataset.id 

            if(btnValue === '1'){
                btn.addEventListener('click', () => {
                    closeAllModals();
                    modalManual.style.display = 'flex'
                })
            } else if (btnValue === '2'){
                btn.addEventListener('click', () => {
                    closeAllModals();
                    modalNotepad.style.display = 'flex'
                })
            } else if (btnValue === '3'){
                btn.addEventListener('click', () => {
                    closeAllModals();
                    modalClues.style.display = 'flex'
                })
            } else if (btnValue === '4'){
                btn.addEventListener('click', () => {
                    closeAllModals();
                    modalMusic.style.display = 'flex'
                })
            } else if (btnValue === '5'){
                btn.addEventListener('click', () => {
                    closeAllModals();
                    modalLogout.style.display = 'flex'
                })
            }
        })
    }
}

// Close modal
export function closeModal() {
    // Capturing the DOM
    const closeModal = document.querySelectorAll('.closeModal')

    if(closeModal){
        closeModal.forEach(function(close){
            close.addEventListener('click', () => {
                modalManual.style.display = 'none'
                modalNotepad.style.display = 'none'
                modalClues.style.display = 'none'
                modalMusic.style.display = 'none'
                modalLogout.style.display = 'none'
            })
        })
    }
}

// Close all modals
function closeAllModals(){
    modalManual.style.display = 'none'
    modalNotepad.style.display = 'none'
    modalClues.style.display = 'none'
    modalMusic.style.display = 'none'
    modalLogout.style.display = 'none'
}