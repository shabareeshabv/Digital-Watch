let updateIndianTime = () => {
    let options = { timeZone: 'Asia/Kolkata' };
    let currentdate = new Date().toLocaleDateString('en-US', options);
    let currenttime = new Date().toLocaleTimeString('en-US', options);

    document.querySelector('#indian-date').innerText = currentdate;
    document.querySelector('#indian-time').innerText = currenttime;
};

let updateAmericanTime = () => {
    let options = { timeZone: 'America/New_York' };
    let currentdate = new Date().toLocaleDateString('en-US', options);
    let currenttime = new Date().toLocaleTimeString('en-US', options);

    document.querySelector('#usa-date').innerText = currentdate;
    document.querySelector('#usa-time').innerText = currenttime;
};

let updateChinaTime = () => {
    let options = { timeZone: 'Asia/Shanghai' };
    let currentdate = new Date().toLocaleDateString('en-US', options);
    let currenttime = new Date().toLocaleTimeString('en-US', options);

    document.querySelector('#china-date').innerText = currentdate;
    document.querySelector('#china-time').innerText = currenttime;
};

setInterval(updateIndianTime, 1000);
setInterval(updateAmericanTime, 1000);
setInterval(updateChinaTime, 1000);