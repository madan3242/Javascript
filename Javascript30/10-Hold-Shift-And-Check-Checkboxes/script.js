const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastChecked;

function handleClick(e){
    let inBetween = false;
    if(e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            // console.log(checkbox)
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
                // console.log("Statring to check");
            }
            if(inBetween){
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this;
    // console.log(e);
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleClick));