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

let divNum = 8;
createDivs(divNum);


let pixels = document.querySelectorAll('.pixel');
let submit = document.querySelector('#submit');

container.addEventListener('mouseover', event => {
    if (event.target.classList.contains('pixel')&& event.buttons == 1)
        {
            event.target.style.opacity = "50%";
        }  
    })

    submit.addEventListener('click', () => {
        container.innerHTML = "";
        divNum = document.getElementById('entry').value;
        console.log(divNum);
        createDivs(divNum);
    });

    

    