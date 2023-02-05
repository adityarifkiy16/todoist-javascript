// fungsi untuk tombol close 
function closeTask(){
    var close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    this.parentElement.remove();
}
}
}

// fungsi saat tombol add di tekan maka akan menambahkan konten
document.querySelector('.addBtn').onclick = function() {
    
    // membuat daftar task yang di input 
    var inputValue = document.querySelector('#myInput').value;
    var li = document.createElement('li');
    var t = document.createTextNode(inputValue);
    li.classList.add('card');
    li.appendChild(t);

    if (inputValue.length == 0){
        alert ("please input text")
    }
    else {
        document.getElementById('myList').appendChild(li);
    }

    document.getElementById('myInput').value = "";

    // membuat tombol X
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    closeTask();
}
