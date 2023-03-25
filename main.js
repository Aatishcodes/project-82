mouseevent = "empty"

var last_position_x, last_position_y;

canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

color = "black";

width_of_line = 4;

canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e) {
    mouseevent = "mousedown"
    
}

canvas.addEventListener("mousemove", mymousemove);

function mymousemove(e) {
    console.log(mouseevent)
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;

    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    color = document.getElementById("color").value;

    width_of_line = document.getElementById("linew").value;

    if (mouseevent == "mousedown") {
        ctx.beginPath()
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        ctx.moveTo(last_position_x, last_position_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();

    }
    last_position_x = current_position_of_mouse_x
    last_position_y = current_position_of_mouse_y


}

canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e)
{
    mouseevent = "mouseup"
}
canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e)
{
    mouseevent = "mouseleave"
}


function Cleararea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)


}







