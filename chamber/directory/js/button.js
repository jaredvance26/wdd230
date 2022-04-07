const card = document.getElementById("card");
const list = document.getElementById("list");




list.onclick = () => {
    document.getElementById("switch").classList.remove('card')
    document.getElementById("switch").classList.toggle("list");
 
};
card.onclick = () => {
    document.getElementById("switch").classList.remove('list')
    document.getElementById("switch").classList.toggle("card");
}
