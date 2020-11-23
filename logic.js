var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Big circle
ctx.beginPath();
ctx.arc(180, 65, 60, 0, Math.PI*2, false);
ctx.fillStyle = "grey";
ctx.fill();
ctx.closePath();

// 2 hours
ctx.beginPath();
ctx.rect(25, 140, 70, 50);
ctx.fillStyle = "grey";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(105, 140, 70, 50);
ctx.fillStyle = "grey";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(185, 140, 70, 50);
ctx.fillStyle = "grey";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(265, 140, 70, 50);
ctx.fillStyle = "grey";
ctx.fill();
ctx.closePath();
//End 2 hours

// 1 hours
ctx.beginPath();
ctx.rect(25, 210, 70, 50);
ctx.fillStyle = "grey";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(105, 210, 70, 50);
ctx.fillStyle = "grey";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(185, 210, 70, 50);
ctx.fillStyle = "grey";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(265, 210, 70, 50);
ctx.fillStyle = "grey";
ctx.fill();
ctx.closePath();
//End 1 hours

// 5 minutes
ctx.beginPath();
ctx.rect(20, 280, 25, 50);
ctx.fillStyle = "#bbb8b8";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(50, 280, 25, 50);
ctx.fillStyle = "#bbb8b8";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(80, 280, 25, 50);
ctx.fillStyle = "grey";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(110, 280, 25, 50);
ctx.fillStyle = "#bbb8b8";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(140, 280, 25, 50);
ctx.fillStyle = "#bbb8b8";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(170, 280, 25, 50);
ctx.fillStyle = "grey";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(200, 280, 25, 50);
ctx.fillStyle = "#bbb8b8";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(230, 280, 25, 50);
ctx.fillStyle = "#bbb8b8";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(260, 280, 25, 50);
ctx.fillStyle = "grey";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(290, 280, 25, 50);
ctx.fillStyle = "#bbb8b8";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(320, 280, 25, 50);
ctx.fillStyle = "#bbb8b8";
ctx.fill();
ctx.closePath();
// End 5 minutes

// 1 minute
ctx.beginPath();
ctx.rect(25, 350, 70, 50);
ctx.fillStyle = "grey";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(105, 350, 70, 50);
ctx.fillStyle = "grey";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(185, 350, 70, 50);
ctx.fillStyle = "grey";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(265, 350, 70, 50);
ctx.fillStyle = "grey";
ctx.fill();
ctx.closePath();
//End 1 minute
