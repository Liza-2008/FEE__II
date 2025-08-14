// Example of non-functional buttons
document.getElementById("searchBtn").addEventListener("click", function() {
    alert("Search feature coming soon!");
});

// Navbar click messages
document.querySelectorAll("nav ul li").forEach(item => {
    item.addEventListener("click", () => {
        alert(item.innerText + " page is under construction!");
    });
});
