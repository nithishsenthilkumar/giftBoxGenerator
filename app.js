const but = document.getElementById("generatebutton");
const grid = document.getElementById("grid");
but.onclick =() =>
{
    const noofgb = document.getElementById("textBox").value;
    console.log(noofgb);
    let i;
    for(i=1;i<=noofgb;i++){
        const gb = document.createElement("div");
        grid.append(gb);
        gb.innerHTML = `NITHISH`;
        gb.style.height = `5vh`;
        gb.style.textAlign = `center`;
        gb.style.width = `5vw`;
        gb.style.margin = ` 20px 5px`;
        gb.style.border = `3px solid black`;
    }
}