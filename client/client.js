const publicVapidKey = 'BMzWqaICUr2FBV-xcb11yYKBufwWUePRAxWPFJhhkljodPepN_oy92ax9fDqkViYei29DRQT5vGStjCeGXTY3g8';

//check for server workers

// if('serviceWorker' in navigator){
//     send().catch(err => console.log(err))
// }

//register sw, register push, send notification
async function send(){
    //register
    console.log('Registering Service worker...');
    const register = await navigator.serviceWorker.register('/worker.js',{
        scope:'/'
    });
    console.log('Service worker registered...');

    //register push
    console.log("registering push!...");
    const subscription = await register.pushManager.subscribe({
        userVisibleOnly:true,
        applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    })

    console.log("push registered!");

    //send push notification
    console.log("Sending push...");
    await fetch('/subscribe',{
        method:'POST',
        body:JSON.stringify(subscription),
        headers:{
            'content-type':'application/json',
        }
    })

    console.log("Push sent!");
}

// Web-Push
// Public base64 to Uint
function urlBase64ToUint8Array(base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}