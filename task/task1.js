var td = document.getElementsByTagName("td")
console.log(td);


function func1()
{
    td[0].style.backgroundColor = " red";
}
function func2()
{
    td[1].style.backgroundColor = " green";
}
function func3()
{
    td[2].style.backgroundColor = " blue";
}
function func4()
{
    td[3].style.backgroundColor = " orange";
}
function func5()
{
    td[4].style.backgroundColor = " purple";
}
function func6()
{
    td[5].style.backgroundColor = " cyan";
}
function func7()
{
    td[6].style.backgroundColor = " gray";
}
function func8()
{
    td[7].style.backgroundColor = " silver";
}
function func9()
{
    td[8].style.backgroundColor = " pink";
}
function func10()
{
    td[9].style.backgroundColor = " darkgreen";
}


function leave()
{
    for(let i=0;i<td.length;i++)
    {
        td[i].style.backgroundColor = "white"
    }
}