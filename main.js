canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#222266";
ctx.lineWidth = 7;
ctx.arc(247, 215, 40, 0.44*Math.PI, 2.44*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 7;
ctx.arc(250, 210, 40, 0.44*Math.PI, 2.44*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#2b2b2b";
ctx.lineWidth = 7;
ctx.arc(347, 215, 40, Math.PI, 3*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 7;
ctx.arc(350, 210, 40, Math.PI, 3*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#612525";
ctx.lineWidth = 7;
ctx.arc(447, 215, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 7;
ctx.arc(450, 210, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#b87a1d";
ctx.lineWidth = 7;
ctx.arc(297, 255, 40, 1.47*Math.PI, 1.91*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#b87a1d";
ctx.lineWidth = 7;
ctx.arc(297, 255, 40, 0.02*Math.PI, 1.39*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.lineWidth = 7;
ctx.arc(300, 250, 40, 1.44*Math.PI, 1.96*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.lineWidth = 7;
ctx.arc(300, 250, 40, 0.05*Math.PI, 1.37*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#335533";
ctx.lineWidth = 7;
ctx.arc(397, 255, 40, 1.47*Math.PI, 1.91*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#335533";
ctx.lineWidth = 7;
ctx.arc(397, 255, 40, 0.02*Math.PI, 1.39*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 7;
ctx.arc(400, 250, 40, 1.44*Math.PI, 1.96*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 7;
ctx.arc(400, 250, 40, 0.05*Math.PI, 1.37*Math.PI);
ctx.stroke();