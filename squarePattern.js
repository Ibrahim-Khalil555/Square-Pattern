function showStars(rows) {
for (row = 1; row<=rows; row++) {
    let stars = '';
    for (i = 0; i < rows; i++) {
        stars += '*';
    }
 console.log(stars);
}

}

showStars(4);