const button = document.querySelector('.wrapper')

button.addEventListener('click', () => {
    let copyText = 'متن جدید کپی شده است'

    
    if (window.navigator.clipboard) {
        window.navigator.clipboard.writeText(copyText)
        alert('متن در کلیپ بورد شما کپی شد')
    } else {
        alert('لطفا از مرورگر کروم استفاده بکنید')
    }

})

// button.addEventListener('click', () => {
//     if (window.navigator.clipboard) {
//         window.navigator.clipboard.readText()
//             .then(res => console.log('Clipboard Text:', res))
//     }
// })