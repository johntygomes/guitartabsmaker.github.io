i=0
x_pos= ["one_zero","one_one","one_two","one_three","one_four","one_five","one_six","one_seven"]
x_pos2=["two_zero","two_one","two_two","two_three","two_four","two_five","two_six","two_seven"]

function myFunction10() {
    document.getElementById(x_pos[i]).style.left="0px"
    document.getElementById(x_pos[i]).innerHTML="0"
}
function myFunction11() {
    document.getElementById(x_pos[i]).style.left="0px"
    document.getElementById(x_pos[i]).innerHTML="1"
}
function myFunction12() {
    document.getElementById(x_pos[i]).innerHTML="2"
}
function myFunction13() {
    document.getElementById(x_pos[i]).innerHTML="3"
}
function myFunction14() {
    document.getElementById(x_pos[i]).innerHTML="4"
}
function myFunction15() {
    document.getElementById(x_pos[i]).innerHTML="5"
}
function myFunction16() {
    document.getElementById(x_pos[i]).innerHTML="6"
}
function myFunction17() {
    document.getElementById(x_pos[i]).innerHTML="7"
}
function myFunction18() {
    document.getElementById(x_pos[i]).innerHTML="8"
}
function myFunction19() {
    document.getElementById(x_pos[i]).innerHTML="9"
}
function myFunction110() {
    document.getElementById(x_pos[i]).innerHTML="10"
}
function myFunction111() {
    document.getElementById(x_pos[i]).innerHTML="11"
}
function myFunction112() {
    document.getElementById(x_pos[i]).innerHTML="12"

}


function myFunction20() {
    document.getElementById(x_pos2[i]).innerHTML="0"
}
function myFunction21() {
    document.getElementById(x_pos2[i]).innerHTML="1"
}
function myFunction22() {
    document.getElementById(x_pos2[i]).innerHTML="2"
}
function myFunction23() {
    document.getElementById(x_pos2[i]).innerHTML="3"
}
function myFunction24() {
    document.getElementById(x_pos2[i]).innerHTML="4"
}
function myFunction25() {
    document.getElementById(x_pos2[i]).innerHTML="5"
}
function myFunction26() {
    document.getElementById(x_pos2[i]).innerHTML="6"
}
function myFunction27() {
    document.getElementById(x_pos2[i]).innerHTML="7"
}



function strum_1(){
    document.getElementById(x_pos[i]).innerHTML="|"
    document.getElementById(x_pos[i]).style.left="20px"
}
function strum_2(){
    document.getElementById(x_pos2[i]).innerHTML="|"
    document.getElementById(x_pos2[i]).style.left="20px"
}

function strum_down_1(){
    document.getElementById(x_pos[i]).innerHTML="^"
    document.getElementById(x_pos[i]).style.left="20px"
    document.getElementById(x_pos[i]).style.top="10px"
}
function strum_down_2(){
    document.getElementById(x_pos2[i]).innerHTML="^"
    document.getElementById(x_pos2[i]).style.left="20px"
    document.getElementById(x_pos2[i]).style.top="10px"
}

function the_next(){
    i=i+1
    var marker=document.getElementById("marker")
    marker.style.marginLeft=i*44+".px";
}
function the_prev(){
    i=i-1
    var marker=document.getElementById("marker")
    marker.style.marginLeft=i*44+".px";
}