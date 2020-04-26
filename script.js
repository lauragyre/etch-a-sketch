let container = document.querySelector('#gridbox');

function createDivs(divNum) {
    let dimension = 100/divNum;
    for (let i = 0; i < divNum*divNum; i ++) {
        let newDiv = document.createElement('div');
        console.log('loop is running');
        newDiv.classList.add('pixel');
        newDiv.style.height = dimension + "%";
        newDiv.style.width = dimension + "%";
        container.append(newDiv);
        
    }
}

 createDivs(8);

let pixels = document.querySelectorAll('pixel');
let button = document.querySelectorAll('#submit');

container.addEventListener('mouseover', event => {
    if (event.target.classList.contains('pixel')&& event.buttons == 1)
        {
            event.target.style.opacity = "50%";
        }  
    })
