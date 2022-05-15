let div = document.createElement('div')
let grid = document.querySelector('.grid')

function makeGrid(num) {

    for (let i = 0; i < num; i++) {
        let collumDiv  = document.createElement('div')
        collumDiv.className = 'collum-div'
        grid.append(collumDiv)
    }

    // let collumDivs = document.querySelectorAll('.collum-div')

    // collumDivs.forEach(collum => { 
    //     let rowDiv = document.createElement('div')
    //     rowDiv.className = 'row-div'

    //     collum.append(rowDiv)
    //     collum.append(rowDiv)
    //     collum.append(rowDiv)
    //     collum.append(rowDiv)
        
    // });
}

makeGrid(10)

