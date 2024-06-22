var score = JSON.parse(localStorage.getItem('score'))
        
        if (score === null){
            score = { win: 0, lose: 0, tie: 0 }
        }

        function compchoice() {
            var randomnumber = Math.random();
            if (randomnumber <= 1/3) {
                return 'Rock';
            } else if (randomnumber <= 2/3) {
                return 'Paper';
            } else {
                return 'Scissor';
            }
        }

        function rps(playerchoice) {
            var result = '';
            var computerchoice = compchoice();

            if ((playerchoice === 'Rock' && computerchoice === 'Paper') || 
                (computerchoice === 'Scissor' && playerchoice === 'Paper') || 
                (computerchoice === 'Rock' && playerchoice === 'Scissor')) {

                result = ['Computer Won', computerchoice, playerchoice];
                score.lose += 1;

            } else if ((playerchoice === 'Paper' && computerchoice === 'Rock') || 
                       (computerchoice === 'Paper' && playerchoice === 'Scissor') || 
                       (computerchoice === 'Scissor' && playerchoice === 'Rock')) {

                result = ['You Won', computerchoice, playerchoice];
                score.win += 1;

            } else {

                result = ['Tie', computerchoice, playerchoice];
                score.tie += 1;
            }
            localStorage.setItem('score', JSON.stringify(score))

            return result;
        }

        function showscore() {
            return `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;
        }

        function showscoreonscreen(main){
            let pchoice = '';
            let cchoice = '';
            if (main[2] === "Rock" ) {
                pchoice = 'imgs/rock-emoji.png' 
            }
            else if (main[2] === "Paper") {
                pchoice = 'imgs/paper-emoji.png' 
            } 
            else if (main[2] === "Scissor") {
                pchoice = 'imgs/scissors-emoji.png' 
            }


            if (main[1] === "Rock") {
                cchoice = 'imgs/rock-emoji.png'}
            
            else if (main[1] === "Paper") {
                cchoice = 'imgs/paper-emoji.png'}

            else if (main[1] === "Scissor") {
                cchoice = 'imgs/scissors-emoji.png'}


            document.querySelector('.js-result').innerHTML = `${main[0]}`;
            document.querySelector('.js-choices').innerHTML = `You Chose <img style = "height = 20px; width = 20px" src="${pchoice}" alt="${main[2]}" class="emoji"> Computer Chose <img style = "height = 20px; width = 20px" src="${cchoice}" alt="${main[1]}" class="emoji">`;
            document.querySelector('.js-score').innerHTML =  showscore();


        }