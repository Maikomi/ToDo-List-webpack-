const changeColor = () => {
    const random = Math.floor(Math.random() * 5).toString()
    console.log(random);
    let x = '';
    switch (random){
        case '0':
            x = 'red'
            break;
        case '1':
            x = 'blue'
            break;
        case '2':
            x = 'mint'
            break;
        case '3':
            x = 'gold'
            break;
        case '4':
            x = 'green'
            break;
    }
    return x;
}

export default changeColor;