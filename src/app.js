const PLAYERS = [
    "Spiderman", "Captain America", "Wonderwoman", "Popcorn", "Gemwoman",
    "Bolt", "Antwoman", "Mask", "Tiger", "Captain", "Catwoman", "Fish",
    "Hulk", "Ninja", "Black Cat", "Volverine", "Thor", "Slayer", "Vader", "Slingo"
];

const heroTeam = ["Spiderman", "Wonderwoman", "Gemwoman", "Antwoman", "Tiger", "Catwoman", "Hulk", "Black Cat", "Thor", "Vader"];

const initPlayers = (players) => {
    return players.map(player => {
        return {
            name: player,
            strength: getRandomStrength(),
            image: `images/super-${players.indexOf(player) + 1}.png`
        };
    });
}

const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

const buildPlayers = (players, type) => {
    const filteredPlayers = players.filter(player => {
        if (type === 'hero') {
            return heroTeam.includes(player.name);
        } else {
            return !heroTeam.includes(player.name);
        }
    });

    return filteredPlayers.map(player => {
        return `<div class="player">
                    <img src="${player.image}" alt="">
                    <div class="name">${player.name}</div>
                    <div class="strength">${player.strength}</div>
                </div>`;
    }).join('');
}

const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}
