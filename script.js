let container = document.querySelector('#gridbox');

function createDivs(divNum) {
    let dimension = 360/divNum;
    for (let i = 0; i < divNum*divNum; i ++) {
        let newDiv = document.createElement('div');
        console.log('loop is running');
        newDiv.classList.add('pixel');
        newDiv.style.height = dimension + "px";
        newDiv.style.width = dimension + "px";
        container.append(newDiv);
        
    }
}

 createDivs(16);

let pixels = document.querySelectorAll('pixel');

container.addEventListener('mouseover', event => {
    if (event.target.classList.contains('pixel')&& event.buttons == 1)
        {
            event.target.style.opacity = "50%";
        }  
    })