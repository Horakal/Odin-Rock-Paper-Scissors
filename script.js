function computerPlay(){
	const computerPlays = ['Rock', 'Paper', 'Scissors'];
	const randomElement = computerPlays[Math.floor(Math.random() * computerPlays.length)];

	return randomElement;
}

function playerPlay(){
	const playerMove = prompt("Make your move (Rock, Paper or Scissors): ");
	const upperr = playerMove.toUpperCase();

	if (upperr != 'ROCK' && upperr != 'PAPER' && upperr != 'SCISSORS'){
		alert("Insert a valid value Rock, paper or scissors")
		playerPlay();
	}

	return upperr;
}

function gameDecider(pMv, cpuMv){
	if (pMv === 'ROCK' && cpuMv === 'Scissors' || pMv === 'SCISSORS' && cpuMv == 'Paper' || pMv === 'PAPER' && cpuMv === 'Rock')
		return 'player'
	else if (cpuMv === 'Rock' && pMv === 'SCISSORS' || cpuMv === 'Scissors' && pMv == 'PAPER' || cpuMv === 'Paper' && pMv === 'ROCK')
		return 'cpu'
	else
		return ('Draw')
}

function game(){
	let plPoints = 0;
	let cpuPoints = 0;
	let draw = 0;
	let result;
	let pMv ;
	let cpuMv ;
	for (let i = 0; i < 5; i++){
		cpuMv = computerPlay();
		pMv = playerPlay();

		result = gameDecider(pMv, cpuMv);
		if (result == 'player'){
			alert(`You win this round! ${pMv} beat ${cpuMv}`)
			plPoints++;
		}
		else if (result == 'cpu'){
			alert(`You lose this round! ${cpuMv} beats ${pMv}`);
			cpuPoints++;
		}
		else
			alert("Draw");
			draw++;
	}
	if (plPoints > cpuPoints){
		console.log(`Congratulations you have won: P1 ${plPoints} x Cpu ${cpuPoints} : Draw ${draw}`)
	}
	else if (cpuPoints > plPoints){
		console.log(`Sorry but the computer won: Cpu ${cpuPoints} x P1 ${plPoints}: Draw ${draw}`)
	}
	else
		console.log("Draw")
}
