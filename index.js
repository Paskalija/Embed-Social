var take = 4;
var pageNumber = 1

function LoadCards() {
    var divToLoadCards = document.getElementById("cardsToLoad");

    var loadCards = cardsData.slice((pageNumber - 1) * take, pageNumber * take);

    if (loadCards.length == 0) {
        document.getElementById("buttonDiv").style.display = "none";
    }

    for (var i = 0; i < loadCards.length; i++) {
        var card = '';
        card += '<div class="card">';
        card += '<div class="top">';
        card += '<div class="userDetails">';
        card += '<div class="profile_img">';
        card += '<img src="' + loadCards[i].profile_image + '" class="cover">';
        card += '</div>';
        card += '<h3>' + loadCards[i].name + '<br><span>' + loadCards[i].date + '</span></h3>';
        card += '</div>';
        card += '<div>';
        card += '<img  src="instagram-logo%20(1).svg" class="dot">';
        card += '</div>';
        card += '</div>';
        card += '<div class="imgBx">';
        card += '<img class="imageSize" src="' + loadCards[i].image + '"/>'
        card += '</div>';
        card += '<div class="description">';
        card += '<p>' + loadCards[i].caption + '</p>';
        card += '</div>';
        card += '<hr>';
        card += '<span class="inline">';
        card += '<div class="inline" onClick=LikePost(this)>';
        card += '<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">';
        card += '<path d="M14.7617 3.26543C14.3999 2.90347 13.9703 2.61634 13.4976 2.42045C13.0248 2.22455 12.518 2.12372 12.0063 2.12372C11.4945 2.12372 10.9878 2.22455 10.515 2.42045C10.0422 2.61634 9.61263 2.90347 9.25085 3.26543L8.50001 4.01626L7.74918 3.26543C7.0184 2.53465 6.02725 2.1241 4.99376 2.1241C3.96028 2.1241 2.96913 2.53465 2.23835 3.26543C1.50756 3.99621 1.09702 4.98736 1.09702 6.02084C1.09702 7.05433 1.50756 8.04548 2.23835 8.77626L2.98918 9.52709L8.50001 15.0379L14.0108 9.52709L14.7617 8.77626C15.1236 8.41448 15.4108 7.98492 15.6067 7.51214C15.8026 7.03935 15.9034 6.53261 15.9034 6.02084C15.9034 5.50908 15.8026 5.00233 15.6067 4.52955C15.4108 4.05677 15.1236 3.62721 14.7617 3.26543V3.26543Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>';
        card += '</svg>';
        card += '<h4 class="likes">' + loadCards[i].likes + '</h4>';
        card += '</div>';
        card += '</span>';
        card += '</div>';

        divToLoadCards.innerHTML += card;
    }
    pageNumber++;
    window.scrollTo(0, document.body.scrollHeight);

}

function LikePost(e) {
    if (e.firstChild.getAttribute("fill") == 'red') {
        e.firstChild.setAttribute("fill", "none");
        var likesElement = e.lastElementChild;
        var likes = parseInt(e.lastElementChild.innerHTML);
        likes--;
        likesElement.innerHTML = likes;

    }else {
        e.firstChild.setAttribute("fill", "red");
        var likesElement = e.lastElementChild;
        var likes = parseInt(e.lastElementChild.innerHTML);
        likes++;
        likesElement.innerHTML = likes;
    }
}

LoadCards();