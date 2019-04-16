function teachersCarusel () {
    let teachersArr = Array.from(window.getElementsByClassName("teacher-card"));
    teachersArr.forEach( (card, index) => card.id = index);
}

export default teachersCarusel;