const changeColor = e => {
    const random = Math.floor(Math.random() * 5)
    switch (random){
        case '1':
            e.classList.add('blue');
            break;
        case '2':
            e.classList.add('mint');
            break;
        case '3':
            e.classList.add('gold');
            break;
        case '4':
            e.classList.add('green');
            break;
    }
}

export default changeColor;