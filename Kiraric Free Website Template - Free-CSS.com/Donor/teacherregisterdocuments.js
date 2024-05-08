function chooseFile() {
    document.getElementById('file-upload').click();
}

document.getElementById('file-upload').addEventListener('change', function() {
    var fileListContainer = document.getElementById('file-list');
    var continueBtn = document.getElementById('continue-btn');

    fileListContainer.innerHTML = ''; // Clear previous list
    
    for (var i = 0; i < this.files.length; i++) {
        var file = this.files[i];
        var listItem = document.createElement('div');
        listItem.textContent = file.name;
        fileListContainer.appendChild(listItem);
    }

    if (this.files.length > 0) {
        continueBtn.classList.add('active');
    } else {
        continueBtn.classList.remove('active');
    }
});

function continueToPage7() {
    window.location.href = 'teacherafterregister.html';
}
