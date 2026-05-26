const reveals = document.querySelectorAll(".stat-card, .tournament-card, .how-card, .community-card");

reveals.forEach((el) => {
    el.classList.add("reveal");
});

function revealOnScroll(){
    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 120;

        if(elementTop < windowHeight - revealPoint){
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
function changeTheme(){
    document.body.classList.toggle("red-theme");
}function openModal(){
    document.getElementById("tournamentModal").classList.add("active");
}

function closeModal(){
    document.getElementById("tournamentModal").classList.remove("active");
}

function createTournament(){
    const name = document.getElementById("tournamentName").value;
    const game = document.getElementById("gameName").value;
    const prize = document.getElementById("prizePool").value;

    const result = document.getElementById("result");
    const grid = document.getElementById("tournamentGrid");

    if(name === "" || prize === ""){
        result.innerHTML = "Please fill in all fields.";
        return;
    }

    const card = document.createElement("div");
    card.classList.add("tournament-card", "reveal", "active");

    card.innerHTML = `
        <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80">

        <div class="card-content">
            <h3>${name}</h3>
            <p>${game} • Custom Tournament • $${prize} Prize Pool</p>
            <button>Join Now</button>
        </div>
    `;

    grid.prepend(card);

    result.innerHTML = `Tournament "${name}" created successfully!`;

    document.getElementById("tournamentName").value = "";
    document.getElementById("prizePool").value = "";

    setTimeout(() => {
        closeModal();
    }, 1200);
}