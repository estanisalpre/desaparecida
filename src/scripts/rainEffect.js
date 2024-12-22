// The rainning effect of the background

// Exporting rainning effect
export function rainningEffect(){
    rain();
}

//Rainning function
const rain = () => {
    const mainContainer = document.getElementById('mainContainer')
    let i = 0;

    while(i <= 80){
        let gout = document.createElement('i')
        let x = innerWidth * Math.random()
        let time = 1 * Math.random()

        gout.style.animationDuration = time <= 0.4 ? (time + 0.8) + 's' : time + 's'
        gout.style.animationDelay = time + 's'
        gout.style.left = x + 'px'

        mainContainer.appendChild(gout)
        i++;
    }
}