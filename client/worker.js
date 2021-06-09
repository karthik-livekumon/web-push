console.log("Service worker loaded");

self.addEventListener('push', e => {
    const data = e.data.json();
    console.log("push recieved!");
    self.registration.showNotification(data.title,{
        body:'Notified by Karthik',
        icon:'https://firebasestorage.googleapis.com/v0/b/livesloka-93a02.appspot.com/o/LiveSlokaLogoFiles%2FOriginal%20on%20Transparent.png?alt=media&token=fc19ecef-e7d5-45aa-b7b8-ac49689eb008'
    });
})