// V.1.3 
$( document ).ready(function() {
var mod=1;	
var cor=window.name.split(":");
if(cor[0]=="GameModule"){mod=cor[1]}

Questions=[];Original=[];


var scale;
if($(window).width()<1280 || $(window).height()<960){
	if($(window).height()/$(window).width()>0.75){
		scale=$(window).width()/1280;
	$('.gamesWrapper').css({'-webkit-transform': 'scale(' + scale + ')'});
	$('.gamesWrapper').css({'-ms-transform': 'scale(' + scale + ')'});
	$('.gamesWrapper').css({'transform': 'scale(' + scale + ')'});
	$('.gamesWrapper').css({'left': '0px'});
	$('.gamesWrapper').css({'top': ($(window).height()-(scale*960))/2+ 'px'});

	}
	else{
		scale=$(window).height()/960;
	$('.gamesWrapper').css({'-webkit-transform': 'scale(' + scale + ')'});
	$('.gamesWrapper').css({'-ms-transform': 'scale(' + scale + ')'});
	$('.gamesWrapper').css({'transform': 'scale(' + scale + ')'});
	$('.gamesWrapper').css({'left': ($(window).width()-(scale*1280))/2+ 'px'});
	$('.gamesWrapper').css({'top':'0px'});

		}
}

else{
$('.gamesWrapper').css({'left': ($(window).width()-1280)/2+ 'px'});
$('.gamesWrapper').css({'top': ($(window).height()-960)/2+ 'px'});
}



$(window).resize(function() {
	


  if($(window).width()<1280 || $(window).height()<960){
	if($(window).height()/$(window).width()>0.75){
		scale=$(window).width()/1280;
		
	$('.gamesWrapper').css({'-webkit-transform': 'scale(' + scale + ')'});
	$('.gamesWrapper').css({'-ms-transform': 'scale(' + scale + ')'});
	$('.gamesWrapper').css({'transform': 'scale(' + scale + ')'});
	$('.gamesWrapper').css({'left': '0px'});
	$('.gamesWrapper').css({'top': ($(window).height()-(scale*960))/2+ 'px'});

	}
	else{
		scale=$(window).height()/960;
	$('.gamesWrapper').css({'-webkit-transform': 'scale(' + scale + ')'});
	$('.gamesWrapper').css({'-ms-transform': 'scale(' + scale + ')'});
	$('.gamesWrapper').css({'transform': 'scale(' + scale + ')'});
	$('.gamesWrapper').css({'left': ($(window).width()-(scale*1280))/2+ 'px'});
	$('.gamesWrapper').css({'top':'0px'});

		}
}

else{
$('.gamesWrapper').css({'-webkit-transform': 'scale(1)'});
	$('.gamesWrapper').css({'-ms-transform': 'scale(1)'});
	$('.gamesWrapper').css({'transform': 'scale(1)'});	
$('.gamesWrapper').css({'left': ($(window).width()-1280)/2+ 'px'});
$('.gamesWrapper').css({'top': ($(window).height()-960)/2+ 'px'});
}
   
});

//content start

if(mod==1){
	Questions[0]={Q:"A: Hello! B: _______",A1:"Hi!",A2:"Bye!",Pic:"NGS1_M01_1",Correct:"1",Sound:"NGS1_1_01",Markers:[0.193878,0.725964]};
	Questions[1]={Q:"A: Goodbye! B: _______",A1:"Hello!",A2:"Bye!",Pic:"NGS1_M01_2",Correct:"2",Sound:"NGS1_1_02",Markers:[0.092540,0.749048]};
	Questions[2]={Q:"I'm _______.",A1:"Lisa",A2:"John",Pic:"NGS1_M01_3",Correct:"2",Sound:"NGS1_1_03",Markers:[]};
	Questions[3]={Q:"A: What's your name? B: _______",A1:"Sorry!",A2:"My name's Alice.",Pic:"NGS1_M01_4",Correct:"2",Sound:"NGS1_1_04",Markers:[0.056667,1.213333]};
	Questions[4]={Q:"One, two, _______ , five, six, seven.",A1:"nine, ten",A2:"three, four ",Pic:"NGS1_M01_5",Correct:"2",Sound:"NGS1_1_05",Markers:[]};
	Questions[5]={Q:"Oops! _______",A1:"Sorry! ",A2:"Hi!",Pic:"NGS1_M01_6",Correct:"1",Sound:"NGS1_1_06",Markers:[]};
	Questions[6]={Q:"I'm _______.",A1:"Lisa",A2:"John",Pic:"NGS1_M01_7",Correct:"1",Sound:"NGS1_1_07",Markers:[]};
	Questions[7]={Q:"A: What's your name? B: _______",A1:"Hi, Lisa!",A2:"My name's John.",Pic:"NGS1_M01_8",Correct:"2",Sound:"NGS1_1_08",Markers:[0.034172,1.124580]};
	Questions[8]={Q:"_______, three, four, five.",A1:"One, two",A2:"Six, seven",Pic:"NGS1_M01_9",Correct:"1",Sound:"NGS1_1_09",Markers:[]};
	Questions[9]={Q:"_______",A1:"four",A2:"five",Pic:"NGS1_M01_10",Correct:"1",Sound:"NGS1_1_10",Markers:[]};
	Questions[10]={Q:"Hello. _______",A1:"I'm Buzz the Bee.",A2:"I'm John.",Pic:"NGS1_M01_11",Correct:"1",Sound:"NGS1_1_11",Markers:[]};
	Questions[11]={Q:"_______",A1:"one ",A2:"ten",Pic:"NGS1_M01_12",Correct:"2",Sound:"NGS1_1_12",Markers:[]};
	Questions[12]={Q:"_______",A1:"five",A2:"six  ",Pic:"NGS1_M01_13",Correct:"1",Sound:"NGS1_1_13",Markers:[]};
	Questions[13]={Q:"_______, John!",A1:"Hello",A2:"Goodbye",Pic:"NGS1_M01_14",Correct:"2",Sound:"NGS1_1_14",Markers:[]};
	Questions[14]={Q:"_______",A1:"seven",A2:"eight",Pic:"NGS1_M01_15",Correct:"1",Sound:"NGS1_1_15",Markers:[]};
	Questions[15]={Q:"I'm _______.",A1:"Lisa",A2:"John",Pic:"NGS1_M01_16",Correct:"1",Sound:"NGS1_1_16",Markers:[]};
	Questions[16]={Q:"One, two, three, four, five, six, seven, eight, _______.",A1:"three, four",A2:"nine, ten",Pic:"NGS1_M01_17",Correct:"2",Sound:"NGS1_1_17",Markers:[]};
	Questions[17]={Q:"_______",A1:"three  ",A2:"four",Pic:"NGS1_M01_18",Correct:"1",Sound:"NGS1_1_18",Markers:[]};
	Questions[18]={Q:"Hello! _______",A1:"My name's John.",A2:"Goodbye!",Pic:"NGS1_M01_19",Correct:"1",Sound:"NGS1_1_19",Markers:[]};
	Questions[19]={Q:"_______",A1:"six",A2:"seven",Pic:"NGS1_M01_20",Correct:"1",Sound:"NGS1_1_20",Markers:[]};
}



else if (mod==3)
{
	Questions[0]={Q:"A: How are you? B: _______",A1:"Thank you.",A2:"Fine, thank you.",Pic:"NGS1_M03_1",Correct:"2",Sound:"NGS1_3_01",Markers:[0.136644,0.992154]};
	Questions[1]={Q:"This is my _______, Elsie.",A1:"brother",A2:"sister",Pic:"NGS1_M03_2",Correct:"2",Sound:"NGS1_3_02",Markers:[]};
	Questions[2]={Q:"A: Who's that? B: _______",A1:"That's my cat.",A2:"That's my friend.",Pic:"NGS1_M03_3",Correct:"2",Sound:"NGS1_3_03",Markers:[0.066236,0.941701]};
	Questions[3]={Q:"A: Who's that? B: _______",A1:"That's my grandma.",A2:"That's my grandpa.",Pic:"NGS1_M03_4",Correct:"2",Sound:"NGS1_3_04",Markers:[0.107619,0.776395]};
	Questions[4]={Q:"This is my _______, Bob.",A1:"dog",A2:"bird",Pic:"NGS1_M03_5",Correct:"1",Sound:"NGS1_3_05",Markers:[]};
	Questions[5]={Q:"This is my _______, Tina.",A1:"turtle",A2:"fish",Pic:"NGS1_M03_6",Correct:"1",Sound:"NGS1_3_06",Markers:[]};
	Questions[6]={Q:"A: Who's that? B: _______",A1:"That's my friend.",A2:"That's my dad.",Pic:"NGS1_M03_7",Correct:"1",Sound:"NGS1_3_07",Markers:[0.087891,0.772925]};
	Questions[7]={Q:"This is my _______, Rex.",A1:"dog",A2:"rabbit",Pic:"NGS1_M03_8",Correct:"2",Sound:"NGS1_3_08",Markers:[]};
	Questions[8]={Q:"This is my _______, Billy.",A1:"fish",A2:"bird",Pic:"NGS1_M03_9",Correct:"2",Sound:"NGS1_3_09",Markers:[]};
	Questions[9]={Q:"A: Is that your fish? B: _______",A1:"Yes, it is.",A2:"No, it isn't.",Pic:"NGS1_M03_10",Correct:"1",Sound:"NGS1_3_10",Markers:[0.045986,1.503401]};
	Questions[10]={Q:"This is my _______.",A1:"sister",A2:"mom",Pic:"NGS1_M03_11",Correct:"1",Sound:"NGS1_3_11",Markers:[]};
	Questions[11]={Q:"This is my _______.",A1:"dad",A2:"brother",Pic:"NGS1_M03_12",Correct:"1",Sound:"NGS1_3_12",Markers:[]};
	Questions[12]={Q:"A: Who's that? B: _______",A1:"It's my grandpa.",A2:"It's my grandma.",Pic:"NGS1_M03_13",Correct:"2",Sound:"NGS1_3_13",Markers:[0.083175,0.876304]};
	Questions[13]={Q:"That's _______.",A1:"my friend",A2:"me",Pic:"NGS1_M03_14",Correct:"2",Sound:"NGS1_3_14",Markers:[]};
	Questions[14]={Q:"A: Is that your teacher? B: _______",A1:"No, it isn't.",A2:"Yes, it is.",Pic:"NGS1_M03_15",Correct:"1",Sound:"NGS1_3_15",Markers:[0.080635,1.307438]};
	Questions[15]={Q:"A:  Is that your brother? B: _______",A1:"No, it isn't. ",A2:"Yes, it is.",Pic:"NGS1_M03_16",Correct:"2",Sound:"NGS1_3_16",Markers:[0.035102,1.190544]};
	Questions[16]={Q:"This is my _______.",A1:"fish",A2:"friend",Pic:"NGS1_M03_17",Correct:"1",Sound:"NGS1_3_17",Markers:[]};
	Questions[17]={Q:"This is my _______, Morris.",A1:"dog",A2:"rabbit",Pic:"NGS1_M03_18",Correct:"1",Sound:"NGS1_3_18",Markers:[]};
	Questions[18]={Q:"A: Is that your rabbit? B: _______",A1:"Yes, it is.",A2:"No, it isn't.",Pic:"NGS1_M03_19",Correct:"1",Sound:"NGS1_3_19",Markers:[0.087075,1.291610]};
	Questions[19]={Q:"A: Is that your sister? B: _______",A1:"Yes, it is.",A2:"No, it isn't. It's my friend.",Pic:"NGS1_M03_20",Correct:"2",Sound:"NGS1_3_20",Markers:[0.092132,1.430748]};																																					

}

else if(mod==6)
{
	Questions[0]={Q:"Come and _______ with me.",A1:"stand up",A2:"sit down",Pic:"NGS1_M06_1",Correct:"2",Sound:"NGS1_6_01",Markers:[]};
	Questions[1]={Q:"turn _______",A1:"down",A2:"around",Pic:"NGS1_M06_2",Correct:"2",Sound:"NGS1_6_02",Markers:[]};
	Questions[2]={Q:"Look! _______. ",A1:"I have a bike",A2:"I have a kite",Pic:"NGS1_M06_3",Correct:"1",Sound:"NGS1_6_03",Markers:[]};
	Questions[3]={Q:"I have a _______.",A1:"plane",A2:"kite",Pic:"NGS1_M06_4",Correct:"2",Sound:"NGS1_6_04",Markers:[]};
	Questions[4]={Q:"I _______ a computer game.",A1:"have",A2:"don't have",Pic:"NGS1_M06_5",Correct:"2",Sound:"NGS1_6_05",Markers:[]};
	Questions[5]={Q:"I _______ a robot.",A1:"have",A2:"don't have",Pic:"NGS1_M06_6",Correct:"1",Sound:"NGS1_6_06",Markers:[]};
	Questions[6]={Q:"A: Do you have a ball B: _______",A1:"Yes, I do.",A2:"No, I don't.",Pic:"NGS1_M06_7",Correct:"1",Sound:"NGS1_6_07",Markers:[0.052245,1.230658]};
	Questions[7]={Q:"A: Do you have a car? B: _______",A1:"Yes, I do.",A2:"No, I don't.",Pic:"NGS1_M06_8",Correct:"2",Sound:"NGS1_6_08",Markers:[0.037279,1.158753]};
	Questions[8]={Q:"_______ your hands",A1:"clap",A2:"stand",Pic:"NGS1_M06_9",Correct:"1",Sound:"NGS1_6_09",Markers:[]};
	Questions[9]={Q:"Mark, _______ please.",A1:"stand up",A2:"sit down",Pic:"NGS1_M06_10",Correct:"2",Sound:"NGS1_6_10",Markers:[]};
	Questions[10]={Q:"I have a _______.",A1:"robot",A2:"plane",Pic:"NGS1_M06_11",Correct:"1",Sound:"NGS1_6_11",Markers:[]};
	Questions[11]={Q:"I have a ball. _______. ",A1:"I don't have a doll",A2:"I have a doll",Pic:"NGS1_M06_12",Correct:"1",Sound:"NGS1_6_12",Markers:[]};
	Questions[12]={Q:"A:  Do you have a plane? B: _______",A1:"Yes, I do.",A2:"No, I don't.",Pic:"NGS1_M06_13",Correct:"2",Sound:"NGS1_6_13",Markers:[0.127347,1.234558]};
	Questions[13]={Q:"A:   Do you have a computer game? B: _______",A1:"Yes, I do.",A2:"No, I don't.",Pic:"NGS1_M06_14",Correct:"1",Sound:"NGS1_6_14",Markers:[0.040975,1.292290]};
	Questions[14]={Q:"I _______ a doll.",A1:"have",A2:"don't have",Pic:"NGS1_M06_15",Correct:"2",Sound:"NGS1_6_15",Markers:[]};
	Questions[15]={Q:"Clap your hands and _______.",A1:"turn around",A2:"stand up",Pic:"NGS1_M06_16",Correct:"2",Sound:"NGS1_6_16",Markers:[]};
	Questions[16]={Q:"_______ and sing a song with me.",A1:"Come",A2:"Sit down",Pic:"NGS1_M06_17",Correct:"1",Sound:"NGS1_6_17",Markers:[]};
	Questions[17]={Q:"I _______ a train.",A1:"have",A2:"don't have",Pic:"NGS1_M06_18",Correct:"1",Sound:"NGS1_6_18",Markers:[]};
	Questions[18]={Q:"A: Do you have a teddy bear? B: _______",A1:"Yes, I do.",A2:"No, I don't.",Pic:"NGS1_M06_19",Correct:"1",Sound:"NGS1_6_19",Markers:[0.005488,1.539252]};
	Questions[19]={Q:"Robot, _______.",A1:"turn around",A2:"clap your hands",Pic:"NGS1_M06_20",Correct:"2",Sound:"NGS1_6_20",Markers:[]};
}

else if(mod==9)
{
	Questions[0]={Q:"A: Where's my doll?  B: _______",A1:"In the bedroom.",A2:"In the living room.",Pic:"NGS1_M09_1",Correct:"2",Sound:"NGS1_9_01",Markers:[0.469637,1.453039]};
	Questions[1]={Q:"A: Where's Lulu?  B: _______",A1:"On the bed.",A2:"Under the bed.",Pic:"NGS1_M09_2",Correct:"2",Sound:"NGS1_9_02",Markers:[0.126712,1.097211]};
	Questions[2]={Q:"A: Where's the ball?  B: _______",A1:"On the box.",A2:"In the box.",Pic:"NGS1_M09_3",Correct:"1",Sound:"NGS1_9_03",Markers:[0.154422,1.307029]};
	Questions[3]={Q:"A: Where's the bird? B: _______",A1:"In the kitchen.",A2:"In the bathroom.",Pic:"NGS1_M09_4",Correct:"2",Sound:"NGS1_9_04",Markers:[0.074875,1.215283]};
	Questions[4]={Q:"A: Where's the train? B: _______",A1:"In the kitchen. ",A2:"In the bathroom.",Pic:"NGS1_M09_5",Correct:"1",Sound:"NGS1_9_05",Markers:[0.103968,1.214943]};
	Questions[5]={Q:"A: Where's the computer? B: _______",A1:"It's on the desk.",A2:"It's on the bed.",Pic:"NGS1_M09_6",Correct:"1",Sound:"NGS1_9_06",Markers:[0.133333,1.276667]};
	Questions[6]={Q:"A: Where's the book? B: _______",A1:"It's under the chair.",A2:"It's on the chair.",Pic:"NGS1_M09_7",Correct:"2",Sound:"NGS1_9_07",Markers:[0.099592,0.982086]};
	Questions[7]={Q:"A: Where are the shirts? B: _______",A1:"They're on the table.",A2:"They're on the chair.",Pic:"NGS1_M09_8",Correct:"2",Sound:"NGS1_9_08",Markers:[0.071429,1.207483]};
	Questions[8]={Q:"A: Where's the dress? B: _______",A1:"It's on the table.",A2:"It's under the table.",Pic:"NGS1_M09_9",Correct:"1",Sound:"NGS1_9_09",Markers:[0.103764,1.089524]};
	Questions[9]={Q:"A: Where are my pants? B: _______",A1:"Thery're on the table.",A2:"They're under the table.",Pic:"NGS1_M09_10",Correct:"2",Sound:"NGS1_9_10",Markers:[0.126689,1.321678]};
	Questions[10]={Q:"His _______ is big. ",A1:"shirt",A2:"dress",Pic:"NGS1_M09_11",Correct:"1",Sound:"NGS1_9_11",Markers:[]};
	Questions[11]={Q:"Her _______ are blue. ",A1:"shoes",A2:"pants",Pic:"NGS1_M09_12",Correct:"1",Sound:"NGS1_9_12",Markers:[]};
	Questions[12]={Q:"A: Where's Matt? B: _______",A1:"He's in the living room.",A2:"He's in the bathroom.",Pic:"NGS1_M09_13",Correct:"2",Sound:"NGS1_9_13",Markers:[0.098685,0.954921]};
	Questions[13]={Q:"_______ eyes are green. ",A1:"His",A2:"Her",Pic:"NGS1_M09_14",Correct:"1",Sound:"NGS1_9_14",Markers:[]};
	Questions[14]={Q:"_______ dress is red. ",A1:"His",A2:"Her",Pic:"NGS1_M09_15",Correct:"2",Sound:"NGS1_9_15",Markers:[]};
	Questions[15]={Q:"A: Where's my book? B: _______ ",A1:"It's on my head.",A2:"It's on the bed.",Pic:"NGS1_M09_16",Correct:"1",Sound:"NGS1_9_16",Markers:[0.016893,1.128481]};
	Questions[16]={Q:"A: Where are my shoes? B: _______",A1:"They're in the closet.",A2:"They're under the bed.",Pic:"NGS1_M09_17",Correct:"2",Sound:"NGS1_9_17",Markers:[0.017120,1.338798]};
	Questions[17]={Q:"A: Her dress is yellow. B: _______ ",A1:"It's Pam.",A2:"It's Maria.",Pic:"NGS1_M09_18",Correct:"1",Sound:"NGS1_9_18",Markers:[0.032426,1.464172]};
	Questions[18]={Q:"A: Her pants are white. B: _______ ",A1:"It's Lisa.",A2:"It's Sam.",Pic:"NGS1_M09_19",Correct:"1",Sound:"NGS1_9_19",Markers:[0.091293,1.737324]};
	Questions[19]={Q:"A: His shirt is red. B: _______  ",A1:"It's Tom.",A2:"It's John.",Pic:"NGS1_M09_20",Correct:"1",Sound:"NGS1_9_20",Markers:[0.220000,1.574286]};

}

//content end




$.each(Questions, function( index, value ) {
	Original[index]=value;
});

function refillArray(){
$.each(Original, function( index, value ) {
	Questions[index]=value;
});
}



var rand=0;
var word;
fetchWord();
var audioInterval;
var ready=0;
var points=0;
var lives=3;
var qNum=0;
var hitSInterval;
var hitBInterval;
var questionInterval;
var hitAInterval;
var extraInterval;
var controlInterval;

$(".play_btn").click(function() {
    $('.questionsPanel').show();
	$('.mainPanel').hide();
	
	$('.paused').removeClass('paused');
	extraInterval = setInterval(generateStars2, 46000);
	generateStars();
	hitSInterval=setInterval(hitStars,10);
	hitBInterval=setInterval(hitBar,10);
	//hitAInterval=setInterval(hitAnswer,10);
	questionInterval=setInterval(questions,30000);
	
	controlInterval=setInterval(main, 40);
	setTimeout(function () { $(".ixos")[0].play(); }, 150);
	
});

$(".instr_btn").click(function() {
    $('.instructionsPanel').show();
	$('.mainPanel').hide();
});

$(".back_btn").click(function() {
    $('.mainPanel').show();
	$('.questionsPanel').hide();
	$('.instructionsPanel').hide();

	location.reload();
});

$(document).on("click", ".exit_btn", function ()
{
    window.name = '{"Type":"GA"}';
    window.location.href = "../../MainMenu.html";
});	



/* $(document).on("click", ".questionAnswers>div", function () {
		$('.questionContent').fadeOut(0);

	$('.blockPanel').show();
	if($(this).attr("data-questioncorrect") == "true"){
		$(".score audio").attr("src","Content/Sounds/WindBlow.mp3");
		$(".score audio")[0].play();
		points+=100;		
		document.getElementById("pointsN").innerHTML=points;	


	}
	else{
		$(".score audio").attr("src","Content/Sounds/Ntoing.mp3");
		$(".score audio")[0].play();
		lives-=1;
		if(lives==2){$("[data-life=3]").addClass("nolife")}
		if(lives==1){$("[data-life=2]").addClass("nolife")}
		
	}



	rightAnswer();

	
});
 */


function fetchWord(){
if(Questions.length==0){refillArray();}
var rand=randomGenerator(0,Questions.length-1);

word=Questions[rand];
Questions.splice(rand,1);

$(".questionAnswers,.question,.questionSound,.questionImage").html("");	
$(".question").html(word.Q.replace("B: ", "<br />B: "));
if(word.Pic!=""){$(".questionImage").append("<img src='Images/"+word.Pic+".jpg'></img>");}
else{ $(".question").addClass("noImg");}
$(".questionAnswers").append("<div class='answerA answers'><span>"+word.A1+"</span></div>");
$(".questionAnswers").append("<div class='answerB answers'><span>"+word.A2+"</span></div>");
//if(word.A3!=null){$(".questionAnswers").append("<div class='answerC'><span>"+word.A3+"</span></div>");}
$(".questionAnswers>div").eq(word.Correct-1).attr("data-questioncorrect","true");
console.log($(".questionAnswers>div").eq(word.Correct-1).attr("data-questioncorrect","true"));
if(word.Sound!=null){
$(".questionSound").append("<audio src=''>"+word.Sound+"</audio>"); 
$(".questionSound audio").attr("src","Sounds/"+word.Sound+".mp3");
$(".questionSound audio")[0].load();
}

if(word.Markers!=null){

}

/* if(word.Pic==""){
	$(".question").css("margin-top", "159px !important");
} */

if($(".question").is(':contains("A:")')){
	$('.speaker').show();
	
	var sp=$(".question").html().split("<br>")[0];
	console.log(sp);
	if (sp.indexOf("_______") != -1){$('.speaker').css("top", "282px");}
}
else{$('.speaker').hide();}

}


$(document).on("click", ".speaker", function (e) {
$(".ixos")[0].pause();
$(".questionSound audio")[0].currentTime=word.Markers[0];
try{clearInterval(audioInterval);}catch(err){}
audioInterval=setInterval(checkAudioEnd, 30);
$(".questionSound audio")[0].play();
});

function checkAudioEnd(){
	if($(".questionSound audio")[0].currentTime>=word.Markers[1]){
		clearInterval(audioInterval);
		$(".questionSound audio")[0].pause();
	}
	//clearInterval(audioInterval);
}

$(document).on("click", ".speaker_answer", function (e) {
$(".questionSound audio")[0].currentTime=0;
$(".questionSound audio")[0].play();
});

var maxTop = 805;
var maxLeft = 1050;
//var maxTop = ($(window).height()-105)*scale;
//var maxLeft = ($(window).width()-220)*scale;
//var maxTop = 960;
//var maxLeft = 1280;
var Keys = {
        up: false,
        down: false,
        left: false,
        right: false
};

var hero = {
    x: 60,
    y: 375
};

var plane = document.getElementById("plane");

window.onkeydown = function(e){
         var kc = e.keyCode;
         e.preventDefault();

         if(kc === 37) Keys.left = true;
         if(kc === 38) Keys.up = true;
         if(kc === 39) Keys.right = true;
         if(kc === 40) Keys.down = true;
};

window.onkeyup = function(e){
         var kc = e.keyCode;
         e.preventDefault();

         if(kc === 37) Keys.left = false;
         if(kc === 38) Keys.up = false;
         if(kc === 39) Keys.right = false;
         if(kc === 40) Keys.down = false;
};

function main() {

        move();

};

function move(){

        if(Keys.up){
			if (hero.y > 5){
            hero.y -= 10;
            var p = hero.y;
            var t = p + 10;
            plane.style.top = p + "px";
            plane.style.bottom = t + "px";}
        }

        if(Keys.down){
			if (hero.y < maxTop){
            hero.y += 10;
            var g = hero.y;
            var q = g - 10;
            plane.style.bottom = g + "px";
            plane.style.top = q + "px";}
        }

        if(Keys.left) {
			if (hero.x > 0){
            hero.x -= 10;
            var z = hero.x;
            var q = z + 10;
            plane.style.left = z + "px";
            plane.style.right = q + "px";}
        }

        if(Keys.right){
			if (hero.x < maxLeft){
            hero.x += 10;
            var z = hero.x;
            var q = z - 10;
            plane.style.right = z + "px";
            plane.style.left = q + "px";}
        }
}


function digits(){
	if (points < 10){$(".pointsN").css("left", "80px")}
	else if (points < 100){$(".pointsN").css("left", "64px")}
	else if (points < 1000){$(".pointsN").css("left", "51px")}
	else{$(".pointsN").css("left", "29px")}
}
setInterval(digits, 10);

function hitStars(){
	var x1 = parseInt($(".plane").css("left"));
	var y1 = parseInt($(".plane").css("top"));
	var h1 = 80;
	var w1 = 185;
	var b1 = y1 + h1;
	var r1 = x1 + w1;	

	$(".extraStars").each(function( index, value ) {
		var x2 = parseInt($(this).css("left"));
		var y2 = parseInt($(this).css("top"));
		var h2 = $(this).height();
		var w2 = $(this).width();
		var b2 = y2 + h2;
		var r2 = x2 + w2;
			if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {

			}
			else{
				
				$(".bonus").css('top', parseInt($(this).css("top"))+"px");
				$(".bonus").css('left', parseInt($(this).css("left"))+"px");
				
				$(this).remove();
				if ($(this).hasClass("green")){
					points+=10;
					$(".bonus").addClass("bonusG");
					$(".score audio").attr("src","Content/Sounds/green.mp3");
					setTimeout(function () { $(".score audio")[0].play(); }, 150);
				}
				else{
					if (points > 0){points-=10;};
					$(".bonus").addClass("bonusO");
					$(".score audio").attr("src","Content/Sounds/black.mp3");
					setTimeout(function () { $(".score audio")[0].play(); }, 150);
				}
				
				document.getElementById("pointsN").innerHTML=points;
				setTimeout(function(){	$(".bonusO").removeClass("bonusO"); $(".bonusG").removeClass("bonusG"); }, 500);
			}
		
	}); 
}



function hitBar(){
	//console.log(parseInt($(".plane").offset().left));
	//console.log(parseInt($(".plane").offset().top));
	
	var x1 = parseInt($(".plane").css("left"));
	var y1 = parseInt($(".plane").css("top"));
	var h1 = 80;
	var w1 = 185;
	var b1 = y1 + h1;
	var r1 = x1 + w1;	

		var x2 = parseInt($(".bar").css("left"));
		var y2 = parseInt($(".bar").css("top"));
		var h2 = 960;
		var w2 = 65;
		var b2 = y2 + h2;
		var r2 = x2 + w2;
			if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {

			}
			else{
				setTimeout(function(){ hitAInterval=setInterval(hitAnswer,10); }, 2000);
				$('.bg1').addClass('paused');
				$('.bg2').addClass('paused');
				$('.bg3').addClass('paused');
				$(".questionContent").css("right", "40px");
				$(".bar").hide();
				clearInterval(controlInterval);
				$(".plane").addClass("fPos");
				$('.plane').removeAttr('style');
				hero = {x: 60,y: 375};
				setTimeout(function(){ 
					controlInterval=setInterval(main, 40); 
					$(".fPos").removeClass("fPos");
					
				}, 2000);
				
				//qNum+=1;
				clearInterval(hitSInterval);
				clearInterval(extraInterval);
				for(j=0;j<20;j++){
					$(".crossing"+[j+1]).removeClass("crossing"+[j+1])
				}
			}

}

function hitAnswer(){
	var x1 = parseInt($(".plane").css("left"));
	var y1 = parseInt($(".plane").css("top"));
	var h1 = 80;
	var w1 = 185;
	var b1 = y1 + h1;
	var r1 = x1 + w1;	

	$(".answers").each(function( index, value ) {
		var x2 = parseInt($(this).css("left"))+519;
		var y2 = parseInt($(this).css("top"));
		var h2 = $(this).height();
		var w2 = $(this).width();
		var b2 = y2 + h2;
		var r2 = x2 + w2;
		if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {

		}
		else{
					$('.questionContent').fadeOut(0);
						//$('.blockPanel').show();
						if($(this).attr("data-questioncorrect") == "true"){
							$(".score audio").attr("src","Content/Sounds/wahoo.mp3");
							setTimeout(function () { $(".score audio")[0].play(); }, 150);
							points+=100;		
							document.getElementById("pointsN").innerHTML=points;
							var y=qNum+1;
							$(".star"+y).addClass("right");
							

						}
						else{
							$(".score audio").attr("src","Content/Sounds/wrong.mp3");
							setTimeout(function () { $(".score audio")[0].play(); }, 150);
							lives-=1;
							if(lives==2){$("[data-life=3]").addClass("nolife")}
							if(lives==1){$("[data-life=2]").addClass("nolife")}
							
						}
						console.log(qNum,lives);
						rightAnswer();
						$(".solved").html($(".question").html());
						$(".solved").html($(".solved").html().replace("_______",$("[data-questioncorrect]").html()));
						$(".ixos")[0].pause();
						
		}
	});
}

$(document).on("click", ".continue_winner", function() {
		$('.mainPanel').show();
		$('.questionsPanel').hide();
		$('.afterPanel_winner').hide();
		$('.instructionsPanel').hide();
		$('.afterPanel_answer').hide();
		$('.afterPanel').hide();
		$(".afterContainer_winner").hide();
		location.reload();
});

function rightAnswer() {
	$(".questionContent").css("right", "-730px");
	clearInterval(questionInterval);
	clearInterval(hitAInterval);
	$(".afterPanel_answer").fadeIn(0);
	$(".afterContainer").fadeIn(500)
	
	clearInterval(controlInterval);
	$(".plane").addClass("fPos");
	$('.plane').removeAttr('style');
	
	//$(".img_solved").attr("src","images/"+word.Pic+".jpg");
}

function generateStars(){
	$(".extraP").html("<div class='green'></div><div class='black'></div><div class='green'></div><div class='black'></div><div class='green'></div><div class='black'></div><div class='green'></div><div class='black'></div><div class='green'></div><div class='black'></div><div class='green'></div><div class='black'></div><div class='green'></div><div class='black'></div><div class='green'></div><div class='black'></div><div class='green'></div><div class='black'></div><div class='green'></div><div class='black'></div>");

	var j=0;
	for(j=0;j<20;j++){
		var x=j+1;
		$(".extraP").find("div").eq(j).addClass("extraStars");
		$(".extraP").find("div").eq(j).addClass("crossing"+x);
		$(".extraP").find("div").eq(j).css("top", randomGenerator(100,700));
		
	}
}

function generateStars2(){
	$(".extraP").html("<div class='green'></div><div class='black'></div><div class='green'></div><div class='black'></div><div class='green'></div><div class='black'></div><div class='green'></div><div class='black'></div><div class='green'></div><div class='black'></div><div class='green'></div><div class='black'></div><div class='green'></div><div class='black'></div><div class='green'></div><div class='black'></div><div class='green'></div><div class='black'></div><div class='green'></div><div class='black'></div>");

	var j=0;
	for(j=0;j<20;j++){
		var x=j+1;
		$(".extraP").find("div").eq(j).addClass("extraStars");
		$(".extraP").find("div").eq(j).addClass("crossing"+x);
		$(".extraP").find("div").eq(j).css("top", randomGenerator(100,700));
		
	}
}

var mapInterval=setInterval(map,10);
var currentPosL;
var currentPosT;

function map(){
	currentPosL = (-parseInt($(".bg2").position().left))+200+parseInt($(".plane").offset().left);
	var posostoL = (currentPosL/4912);
	var dotL = (posostoL*370)+16;
	$(".dot").css("left", dotL+"px");

	currentPosT = 100+parseInt($(".plane").offset().top);
	var posostoT = (currentPosT/960);
	var dotT = (posostoT*76)+17;
	$(".dot").css("top", dotT+"px");
}



function questions(){
	$(".bar").addClass("barCross");
	
}

$(document).on("click", ".continue_answer", function (){
	$(".fPos").removeClass("fPos");
		if(lives==0 || qNum==7){
			if(lives==0){
				gameOver();
			}
			else{
				gameEnd();
			}
		}
		else{
			hero = {x: 60,y: 375};
			controlInterval=setInterval(main, 40); 
			
			hitSInterval=setInterval(hitStars,10);
			hitBInterval=setInterval(hitBar,10);
			//hitAInterval=setInterval(hitAnswer,10);
			questionInterval=setInterval(questions,30000);
			$('.questionContent').show();
			$(".bar").show();
			$('.paused').removeClass('paused');
			$(".barCross").removeClass("barCross");
			$('.afterPanel_answer').hide();
			$('.blockPanel').hide();
			generateStars();
			extraInterval = setInterval(generateStars2, 46000);
			fetchWord();
			qNum+=1;
			console.log("Q"+qNum);
			$(".ixos")[0].currentTime=0;
			$(".ixos")[0].play();
			$(".noImg").removeClass("noImg");
		}

	});

function randomGenerator(min,max){return Math.floor(Math.random() * (max - min + 1)) + min;}

function gameEnd(){

	$(".afterContainer").hide();
	$('.afterPanel_answer').hide();
	clearInterval(controlInterval);
	clearInterval(questionInterval);
	clearInterval(hitAInterval);
	clearInterval(hitBInterval);
	clearInterval(hitSInterval);
	clearInterval(extraInterval);
	$(".fPos").removeClass("fPos");
	$(".plane").addClass("landed");
	setTimeout(function(){

		$('.questionsPanel').hide();
		$('.afterPanel').hide();
		$(".afterContainer_winner").fadeIn(500);
		$(".afterPanel_winner").fadeIn(500);
		document.getElementById("fScore").innerHTML=points;
	}, 3500);
}

function gameOver(){
	$(".afterContainer").hide();
	$('.afterPanel_answer').hide();
	$('.questionsPanel').hide();
	$('.afterPanel').hide();
	$(".afterContainer_winner").fadeIn(500);
	$(".afterPanel_winner").fadeIn(500);
	document.getElementById("fScore").innerHTML=points;
	document.getElementById("gameover").innerHTML="Game Over!";
	clearInterval(controlInterval);
	clearInterval(questionInterval);
	clearInterval(hitAInterval);
	clearInterval(hitBInterval);
	clearInterval(hitSInterval);
	clearInterval(extraInterval);
}

});















