function replay() {
    location.reload();
};

const replayButton = document.querySelectorAll('.btn');
replayButton.forEach(button => button.addEventListener('click', replay));
