const answer = document.getElementsByClassName('box');

/* show answers */

for (i = 0; i < answer.length; i++) {

    answer[i].addEventListener('click', function() {
        this.classList.toggle('active')
    });

}