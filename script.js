let plPoints = 0;
let cpuPoints = 0;
let tie = 0;
const attRound = document.querySelector('p.round');
const p1PointView = document.querySelector('p.p1Points');
const cpuPointView = document.querySelector('p.cpuPoints');
const tiePointView = document.querySelector('p.Draws');
const numRound = document.querySelector('p.numRounds');
const win = document.querySelector('p.win');

function computerPlay(){
	const computerPlays = ['Rock', 'Paper', 'Scissors'];
	let randomElement = computerPlays[Math.floor(Math.random() * computerPlays.length)];
	return randomElement;
}

function playRound(pMv, cpuMv){
	if (pMv === 'Rock' && cpuMv === 'Scissors' || pMv === 'Scissors' && cpuMv 		== 'Paper' || pMv === 'Paper' && cpuMv === 'Rock')
		return 'player'
	else if (cpuMv === 'Rock' && pMv === 'Scissors' || cpuMv === 'Scissors' && 		pMv == 'Paper' || cpuMv === 'Paper' && pMv === 'Rock')
		return 'cpu'
	else
		return ('Tie')
}

function game(id){

	let result;
	let cpuMv = computerPlay();
	let p1Play = id;

	result = playRound(p1Play, cpuMv);
	if (result == 'player'){
		attRound.textContent = `You win this round! ${p1Play} beats ${cpuMv}`;
		plPoints++;
		p1PointView.textContent = `P1 = ${plPoints}` ;
	}
	else if (result == 'cpu'){
		attRound.textContent = `You lose this round! ${cpuMv} beats ${p1Play}`;
		cpuPoints++;
		cpuPointView.textContent = `Cpu = ${cpuPoints}`;
	}
	else if (result == 'Tie'){
		attRound.textContent = ('Tie');
		tie++;
		tiePointView.textContent = `Draws = ${tie}`;
	}
	numRound.textContent = `Round ${plPoints + cpuPoints + tie}`;
	if (plPoints  == 5 || cpuPoints == 5)
		winner(plPoints, cpuPoints, tie)
}

function winner(p1Points, cpuPoints, tiePoints){
	if (p1Points > cpuPoints){
		win.textContent = `Congratulations you have won: P1 ${p1Points} x Cpu ${cpuPoints} : Tie ${tiePoints}`
	}
	else if (cpuPoints > p1Points){
		win.textContent = `Sorry but the computer won: Cpu ${cpuPoints} x P1 ${p1Points}: Tie ${tiePoints}`
	}
	disableButton();
}

function disableButton(){
	const btn = document.querySelectorAll('button');
	btn.forEach(elem =>{
		elem.disabled = true;
	})
	const resetBtn = document.querySelector("input[type='button']");
	resetBtn.classList.remove('hidden');
}

function reset(){
	location.reload();
}

function start(){
	addEventListener('click', (e) => {
		if(e.target.id == '') return;
		game(e.target.id);
	})
}

start()
