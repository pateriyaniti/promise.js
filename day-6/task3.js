function randomPromise(){
    return new Promise((resolve, reject) => {
        const success = Mth.random() > 0.5;
        setTimeout(() => {
            if (success) {
                resolve('Operation succeeded');
            }
        }, 500);
    });
}

randomPromise()
    .then((message) => {
        console.log('Success:', message);
    })
    .catch((error) => {
        console.log('Success:', message);
    })
    .catch((error) => {
        console.error('Error:', error);
    });