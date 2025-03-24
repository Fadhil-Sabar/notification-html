const notifSection = document.getElementsByClassName('notification-section')
let globalNotifShow = [], showNotif = false

const onShowNotification = () => {
    // showNotif = !showNotif
    // if(showNotif){
    //     notifSection[0].classList.add('show')
    // }else{
    //     notifSection[0].classList.remove('show')
    // }

    changePosition()

    const elementNotif = document.createElement('div')
    elementNotif.className = 'notification-container neobrutalism-shadow'
    const notifText = document.createElement('h5')
    notifText.textContent = 'Heading Notification'
    elementNotif.appendChild(notifText)
    
    notifSection[0].prepend(
        elementNotif
    )
    
    setTimeout(() => {
        elementNotif.classList.add('show')
    }, 50)
    setTimeout(() => {
        elementNotif.classList.remove('show')
        setTimeout(() => {
            notifSection[0].removeChild(elementNotif)
        }, 1000)
    }, 3000)
}

const changePosition = () => {
    const allNotif = document.querySelectorAll('.notification-container')

    allNotif.forEach((el, idx) => {
        console.log(el)
        el.setAttribute("style", `transform: translate(0%, ${120 * (idx + 1)}%)`)
    })
    console.log("🚀 ~ changePosition ~ allNotif:", allNotif)
}