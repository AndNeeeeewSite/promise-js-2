console.log('1.')
const delay = ms => {
    return promise = new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve(ms)
        },ms)

    });
};

const logger = time => console.log(`Resolved after ${time}ms`);

delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms

