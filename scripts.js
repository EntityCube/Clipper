UpdateBtn = document.getElementById("UpdateBtn");
DimUpdateBtn = document.getElementById("DimUpdateBtn")
NewTextInput = document.getElementById("NewTextInput");
CopyBtn = document.getElementById("CopyBtn");

UpdateBtn.addEventListener("click", UpdateBoard);
DimUpdateBtn.addEventListener("click", UpdateBoard);
CopyBtn.addEventListener("click", CopyCode);
NewTextInput.addEventListener("keyup", sendButtonColorChanger)

// Control Enter to send and send button dim color change caller
NewTextInput.addEventListener ("keydown", function (Event) {
    sendButtonColorChanger()
    if (Event.ctrlKey  &&  Event.key === "Enter") {  
        UpdateBoard()
    }
} );



// Update firebase value
function UpdateBoard() {
    newValue = document.getElementById("NewTextInput").value;
    console.log(newValue)
    if (newValue.trim().length == 0) {
    	alert("Enter something")
    }
    else {
        dbRef.set(newValue);
        NewTextInput.value = ""
        sendButtonColorChanger()
    }
}

function sendButtonColorChanger() {
    if (NewTextInput.value.trim().length){
        UpdateBtn.style.zIndex = 1
    }
    else {
        UpdateBtn.style.zIndex = -1
    }

}

// Copy to clipboard when user clicks copy button
function CopyCode() {
	if(Board.innerText.length==0){
		alert("Nothing found to copy...")
	}
	else {copyStringToClipboard(Board.innerText)}
    
}

// copy to clipboard function
function copyStringToClipboard(str) {
    // Create new element
    var el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = {
        position: 'absolute',
        left: '-9999px'
    };
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);

    alert("The content was copied to your clipboard!")
}
