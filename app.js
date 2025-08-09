// function change_color(headerID, RPS_new_color) {
//   document.getElementById(headerID).style.color = RPS_new_color;
// }

function play_game(player_option) {
  let choices = ["Rock", "Paper", "Scissors"];
  let win_lose_tie = ["Win", "Lose", "Tie"];

  const computer_choice = choices[Math.floor(Math.random() * 3)];

  if (player_option === "Paper" && computer_choice === "Rock") {
    win_lose_tie = win_lose_tie[0];
    console.log(`The computer got: ${computer_choice}`);
    console.log(win_lose_tie);
  } else if (player_option === "Paper" && computer_choice === "Scissors") {
    win_lose_tie = win_lose_tie[1];
    console.log(`The computer got: ${computer_choice}`);
    console.log(win_lose_tie);
  } else if (player_option === "Scissors" && computer_choice === "Paper") {
    win_lose_tie = win_lose_tie[0];
    console.log(`The computer got: ${computer_choice}`);
    console.log(win_lose_tie);
  } else if (player_option === "Scissors" && computer_choice === "Rock") {
    win_lose_tie = win_lose_tie[1];
    console.log(`The computer got: ${computer_choice}`);
    console.log(win_lose_tie);
  } else if (player_option === "Rock" && computer_choice === "Scissors") {
    win_lose_tie = win_lose_tie[0];
    console.log(`The computer got: ${computer_choice}`);
    console.log(win_lose_tie);
  } else if (player_option === "Scissors" && computer_choice === "Paper") {
    win_lose_tie = win_lose_tie[1];
    console.log(`The computer got: ${computer_choice}`);
    console.log(win_lose_tie);
  } else if (player_option === "Scissors" && computer_choice === "Scissors") {
    win_lose_tie = win_lose_tie[2];
    console.log(`The computer got: ${computer_choice}`);
    console.log(win_lose_tie);
  } else if (player_option === "Paper" && computer_choice === "Paper") {
    win_lose_tie = win_lose_tie[2];
    console.log(`The computer got: ${computer_choice}`);
    console.log(win_lose_tie);
  } else if (player_option === "Rock" && computer_choice === "Rock") {
    win_lose_tie = win_lose_tie[2];
    console.log(`The computer got: ${computer_choice}`);
    console.log(win_lose_tie);
  }

  // console.log(player_option);
  // add counter for score and display results on html file
}
