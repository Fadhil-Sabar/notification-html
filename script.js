const notifSection = document.getElementsByClassName('notification-section')
let globalNotifShow = [], showNotif = false

const onShowNotification = () => {
    // showNotif = !showNotif
    // if(showNotif){
    //     notifSection[0].classList.add('show')
    // }else{
    //     notifSection[0].classList.remove('show')
    // }

    const elementNotif = document.createElement('div')
    elementNotif.className = 'notification-container'
    elementNotif.textContent = 'Test append'
    
    notifSection[0].appendChild(
        elementNotif
    )
    
    setTimeout(() => {
        elementNotif.classList.add('show')
    }, 100)
    setTimeout(() => {
        elementNotif.classList.remove('show')
        // notifSection[0].removeChild(elementNotif)
    }, 2000)
}