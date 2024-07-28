function openModal(imgElement) {
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modal-img');
    var downloadLink = document.getElementById('download');
    
    modal.style.display = 'block';
    modalImg.src = imgElement.src;
    downloadLink.href = imgElement.src;
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}