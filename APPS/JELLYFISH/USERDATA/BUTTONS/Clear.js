function Clear() {
    console.log("Clear Button Clicked");
    console.log("This button will clear the crumb pattern");

    const table = document.querySelector('jellyfish-tracker').shadowRoot.querySelectorAll('jellyfish-crumbbar')
    table.forEach(bar => {
        let cells = bar.shadowRoot.querySelectorAll('.cell')
        for (let index = 0; index < cells.length; index++) {
            if (cells[index].classList.contains('Selected')) {
                cells[index].classList.remove('Selected');
            }
            
        }
    })
}

export { Clear}