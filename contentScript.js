if (typeof window.radioIndex === 'undefined') {
    window.radioIndex = 0; 
}

function clickNextRadioButton(index = 0) {
    const radioButtons = document.querySelectorAll('input[type="radio"]:not([disabled])');
    if (index >= radioButtons.length) {
        return; 
    }
    radioButtons[index].click();
    setTimeout(() => clickNextRadioButton(index + 1), 200); 
}

clickNextRadioButton(); 