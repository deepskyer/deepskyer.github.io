var request = new XMLHttpRequest();

request.open('POST', 'https://api.spontit.com/v3/push');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('X-Authorization', 'UWGOPBHFU5SC0NJPI9PUQID0RE95B27DQ35PRZ43KXN8N11S6HPEGPS6539JQRZVC7ACARPCBHZYALZS7FWUPFNTNCI3GDS1I80R');
request.setRequestHeader('X-UserId', 'bing_microsoft6298');


request.onreadystatechange = function () {
    if (this.readyState === 4) {
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
    }
};

var body = {
    'content': 'Your kid is checking blocked content.'
};

request.send(JSON.stringify(body));
