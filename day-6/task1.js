function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve , ms);
    });
}

//usage 
delay(100).then(() => console.log('Executed after 1 second'));