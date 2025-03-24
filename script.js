const notifSection = document.getElementsByClassName('notification-section')

const onShowNotification = () => {

    changePosition()

    const elementNotif = document.createElement('div')
    elementNotif.className = 'notification-container neobrutalism-shadow'
    const notifText = document.createElement('h4')
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
        el.setAttribute("style", `transform: translate(0%, ${120 * (idx + 1)}%)`)
    })
}