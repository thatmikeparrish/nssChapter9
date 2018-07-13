let i = 0;

function counter() {
    i++;
    return i;
}

function cont(bandName,incrementer) {
    const currentCount = incrementer()
    console.log(`${currentCount}: ${bandName}`)
}

cont("test",counter)
cont("test1",counter)
cont("test3",counter)