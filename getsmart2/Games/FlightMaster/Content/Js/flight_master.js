// V.1.3 
$( document ).ready(function() {
var mod=4;	
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

if(mod==2){
	Questions[0]={Q:"A: Who's that? B: _______",A1:"It's my mother.",A2:"It's my father.",Pic:"NGS2_M02_1",Correct:"2",Sound:"YSA_M02_1_01",Markers:[0.259388,1.093333]};
	Questions[1]={Q:"A: Who's that? B: _______",A1:"It's my mother.",A2:"It's my sister.",Pic:"NGS2_M02_2",Correct:"1",Sound:"YSA_M02_1_02",Markers:[0.232381,1.031882]};
	Questions[2]={Q:"A: Is that your mother? B: _______",A1:"No, it isn't. It's my aunt.",A2:"Yes, it is. It's my mother.",Pic:"NGS2_M02_3",Correct:"1",Sound:"YSA_M02_1_03",Markers:[0.058095,1.254762]};
	Questions[3]={Q:"A: Who's that baby? B: _______",A1:"She's my cousin.",A2:"She's my grandmother.",Pic:"NGS2_M02_4",Correct:"1",Sound:"YSA_M02_1_04",Markers:[0.047415,1.065442]};
	Questions[4]={Q:"A: Where's the doll? B: _______",A1:"It's on the bed.",A2:"It's under the bed.",Pic:"NGS2_M02_5",Correct:"2",Sound:"YSA_M02_1_05",Markers:[0.039501,1.242766]};
	Questions[5]={Q:"A: Where's the puzzle? B: _______",A1:"It's in the bag.",A2:"It's on the bag.",Pic:"NGS2_M02_6",Correct:"1",Sound:"YSA_M02_1_06",Markers:[0.186735,1.288776]};
	Questions[6]={Q:"A: Where are the books? B: _______",A1:"They're in the closet.",A2:"They're next to the closet.",Pic:"NGS2_M02_7",Correct:"2",Sound:"YSA_M02_1_07",Markers:[0.029751,1.349932]};
	Questions[7]={Q:"A: Where's the window? B: _______",A1:"It's between the closet <br> and the couch.",A2:"It's between the desk <br> and the TV.",Pic:"NGS2_M02_8",Correct:"1",Sound:"YSA_M02_1_08",Markers:[0.000000,1.214694]};
	Questions[8]={Q:"A: Where are the dolls? B: _______",A1:"They're next to the TV.",A2:"They're on the TV.",Pic:"NGS2_M02_9",Correct:"2",Sound:"YSA_M02_1_09",Markers:[0.028776,1.250136]};
	Questions[9]={Q:"A: Is that your uncle? B: _______",A1:"Yes, it is. It's my uncle.",A2:"No, it isn't. It's my aunt.",Pic:"NGS2_M02_10",Correct:"1",Sound:"YSA_M02_1_10",Markers:[0.062245,1.195102]};
	Questions[10]={Q:"A: Where are the flowers? B: _______",A1:"They're on the table.",A2:"They're on the couch.",Pic:"NGS2_M02_11",Correct:"1",Sound:"YSA_M02_1_11",Markers:[0.039184,1.521633]};
	Questions[11]={Q:"A: Who's that? B: _______",A1:"It's my sister.",A2:"It's my brother.",Pic:"NGS2_M02_12",Correct:"2",Sound:"YSA_M02_1_12",Markers:[0.048685,0.799456]};
	Questions[12]={Q:"A: Where's the book? B: _______",A1:"It's on the desk.",A2:"It's under the desk.",Pic:"NGS2_M02_13",Correct:"1",Sound:"YSA_M02_1_13",Markers:[0.047528,1.173991]};
	Questions[13]={Q:"A: Where are the board games? B: _______",A1:"They're under the bed.",A2:"They're next to the bed.",Pic:"NGS2_M02_14",Correct:"1",Sound:"YSA_M02_1_14",Markers:[0.000000,1.450794]};
	Questions[14]={Q:"A: Who's that? B: _______",A1:"It's my sister.",A2:"It's my friend, Anna.",Pic:"NGS2_M02_15",Correct:"2",Sound:"YSA_M02_1_15",Markers:[0.111587,0.898730]};
	Questions[15]={Q:"A: Where is the teddy bear? B: _______",A1:"It's in the bag.",A2:"It's in the closet.",Pic:"NGS2_M02_16",Correct:"2",Sound:"YSA_M02_1_16",Markers:[0.000000,1.187120]};
	Questions[16]={Q:"A: Where's the couch? B: _______",A1:"It's next to the lamp.",A2:"It's between the bed and the closet.",Pic:"NGS2_M02_17",Correct:"2",Sound:"YSA_M02_1_17",Markers:[0.000000,1.160317]};
	Questions[17]={Q:"A: Where are the teddy bears? B: _______",A1:"They're on the couch.",A2:"They're in the closet.",Pic:"NGS2_M02_18",Correct:"1",Sound:"YSA_M02_1_18",Markers:[0.034467,1.488980]};
	Questions[18]={Q:"A: Where are the dolls? B: _______",A1:"They're on the couch.",A2:"They're in the closet.",Pic:"NGS2_M02_19",Correct:"2",Sound:"YSA_M02_1_19",Markers:[0.056327,1.314286]};
	Questions[19]={Q:"A: Is that your cousin on the couch? B: _______",A1:"Yes, it is.",A2:"No, it isn't.",Pic:"NGS2_M02_20",Correct:"1",Sound:"YSA_M02_1_20",Markers:[0.037415,1.971361]};
}
else if (mod==4) {
	Questions[0]={Q:"Its tail is long. _______",A1:"It's a monkey.",A2:"It's a penguin.",Pic:"NGS2_M04_1",Correct:"1",Sound:"YSA_M04_1_01",Markers:[]};
	Questions[1]={Q:"Its mouth is big. _______",A1:"It's a zebra.",A2:"It's a crocodile.",Pic:"NGS2_M04_2",Correct:"2",Sound:"YSA_M04_1_02",Markers:[]};
	Questions[2]={Q:"It _______ jump. ",A1:"can",A2:"can't",Pic:"NGS2_M04_3",Correct:"1",Sound:"YSA_M04_1_03",Markers:[]};
	Questions[3]={Q:"He _______ swim. ",A1:"can",A2:"can't",Pic:"NGS2_M04_4",Correct:"2",Sound:"YSA_M04_1_04",Markers:[]};
	Questions[4]={Q:"It has wings, but it _______ fly. ",A1:"can",A2:"can't",Pic:"NGS2_M04_5",Correct:"2",Sound:"YSA_M04_1_05",Markers:[]};
	Questions[5]={Q:"It _______ swim. ",A1:"can",A2:"can't",Pic:"NGS2_M04_6",Correct:"1",Sound:"YSA_M04_1_06",Markers:[]};
	Questions[6]={Q:"_______ teeth are big. ",A1:"Its",A2:"Their",Pic:"NGS2_M04_7",Correct:"1",Sound:"YSA_M04_1_07",Markers:[]};
	Questions[7]={Q:"_______ tails are long. ",A1:"Its ",A2:"Their",Pic:"NGS2_M04_8",Correct:"2",Sound:"YSA_M04_1_08",Markers:[]};
	Questions[8]={Q:"A: Can you run? B: _______",A1:"Yes, I can.",A2:"No, I can't.",Pic:"NGS2_M04_9",Correct:"1",Sound:"YSA_M04_1_09",Markers:[0.072857,0.968730]};
	Questions[9]={Q:"A: Can you jump? B: _______",A1:"Yes, I can.",A2:"No, I can't.",Pic:"NGS2_M04_10",Correct:"2",Sound:"YSA_M04_1_10",Markers:[0.049342,0.981043]};
	Questions[10]={Q:"Its tail is small. _______",A1:"It can run, but it can't jump.",A2:"It can jump, but it can't fly.",Pic:"NGS2_M04_11",Correct:"2",Sound:"YSA_M04_1_11",Markers:[]};
	Questions[11]={Q:"Its ears are small. _______",A1:"It can swim, but it can't talk.",A2:"It can run, but it can't jump.",Pic:"NGS2_M04_12",Correct:"1",Sound:"YSA_M04_1_12",Markers:[]};
	Questions[12]={Q:"Its wings are big. _______",A1:"It can talk and it can fly.",A2:"It can swim and it can talk.",Pic:"NGS2_M04_13",Correct:"1",Sound:"YSA_M04_1_13",Markers:[]};
	Questions[13]={Q:"It has a big mouth. _______",A1:"It can swim but it can't talk.",A2:"It can't swim and it can't talk.",Pic:"NGS2_M04_14",Correct:"1",Sound:"YSA_M04_1_14",Markers:[]};
	Questions[14]={Q:"Its tail is long. _______",A1:"It can run fast.",A2:"It can fly.",Pic:"NGS2_M04_15",Correct:"1",Sound:"YSA_M04_1_15",Markers:[]};
	Questions[15]={Q:"Can it fly? _______",A1:"Yes, it can.",A2:"No, it can't.",Pic:"NGS2_M04_16",Correct:"2",Sound:"YSA_M04_1_16",Markers:[]};
	Questions[16]={Q:"A: How many elephants can you see? B: _______",A1:"Two elephants.",A2:"Three elephants.",Pic:"NGS2_M04_17",Correct:"1",Sound:"YSA_M04_1_17",Markers:[0.033878,2.100408]};
	Questions[17]={Q:"A: How many monkeys can you see? B: _______",A1:"Five monkeys.",A2:"Four monkeys.",Pic:"NGS2_M04_18",Correct:"1",Sound:"YSA_M04_1_18",Markers:[0.059864,1.859524]};
	Questions[18]={Q:"A: Can you swim? B: _______",A1:"Yes, I can.",A2:"No, I can't.",Pic:"NGS2_M04_19",Correct:"1",Sound:"YSA_M04_1_19",Markers:[0.037823,1.096871]};
	Questions[19]={Q:"Its legs are short. _______",A1:"It can climb.",A2:"It can't climb. ",Pic:"NGS2_M04_20",Correct:"1",Sound:"YSA_M04_1_20",Markers:[]};
}


else if (mod==7) {
	Questions[0]={Q:"A: What day is it today? B: _______",A1:"It's 10 o'clock.",A2:"It's Friday.",Pic:"NGS2_M07_1",Correct:"2",Sound:"YSA_M07_1_01",Markers:[0.284558,1.694558]};
	Questions[1]={Q:"A: What's your favorite day? B: _______",A1:"It's Saturday.",A2:"It's June.",Pic:"NGS2_M07_2",Correct:"1",Sound:"YSA_M07_1_02",Markers:[0.000000,1.475556]};
	Questions[2]={Q:"A: What time do you get up in the morning? B: _______",A1:"At seven o'clock.",A2:"At ten o'clock.",Pic:"NGS2_M07_3",Correct:"1",Sound:"YSA_M07_1_03",Markers:[0.048050,1.933379]};
	Questions[3]={Q:"A: What time is it? B: _______",A1:"It's sunny in May.",A2:"It's nine o'clock.",Pic:"NGS2_M07_4",Correct:"2",Sound:"YSA_M07_1_04",Markers:[0.024308,1.160726]};
	Questions[4]={Q:"A: What time do you go to bed? B: _______",A1:"In August.",A2:"At nine o'clock.",Pic:"NGS2_M07_5",Correct:"2",Sound:"YSA_M07_1_05",Markers:[0.111066,2.028549]};
	Questions[5]={Q:"It has twenty-eight or twenty-nine days. ",A1:"February.",A2:"September.",Pic:"NGS2_M07_6",Correct:"1",Sound:"YSA_M07_1_06",Markers:[]};
	Questions[6]={Q:"A: It's after April. B: _______",A1:"March.",A2:"May.",Pic:"NGS2_M07_7",Correct:"2",Sound:"YSA_M07_1_07",Markers:[0.071429,1.261905]};
	Questions[7]={Q:"A: What's your favorite day? B: _______",A1:"It's twelve o'clock.",A2:"It's Wednesday.",Pic:"NGS2_M07_8",Correct:"2",Sound:"YSA_M07_1_08",Markers:[0.042857,1.488571]};
	Questions[8]={Q:"December is _______ November. ",A1:"before",A2:"after",Pic:"NGS2_M07_9",Correct:"2",Sound:"YSA_M07_1_09",Markers:[]};
	Questions[9]={Q:"A: What time do you go home after school? B: _______",A1:"At ten o'clock.",A2:"At two o'clock. ",Pic:"NGS2_M07_10",Correct:"2",Sound:"YSA_M07_1_10",Markers:[0.022222,2.438980]};
	Questions[10]={Q:"October is _______ November. ",A1:"after",A2:"before",Pic:"NGS2_M07_11",Correct:"2",Sound:"YSA_M07_1_11",Markers:[]};
	Questions[11]={Q:"I go to school at _______. ",A1:"one o'clock",A2:"seven o'clock",Pic:"NGS2_M07_12",Correct:"2",Sound:"YSA_M07_1_12",Markers:[]};
	Questions[12]={Q:"A: It's after Sunday. B:_______",A1:"Monday.",A2:"Saturday.",Pic:"NGS2_M07_13",Correct:"1",Sound:"YSA_M07_1_13",Markers:[0.029773,1.376440]};
	Questions[13]={Q:"A: What's your favorite month? B: _______",A1:"It's Tuesday.",A2:"It's June.",Pic:"NGS2_M07_14",Correct:"2",Sound:"YSA_M07_1_14",Markers:[0.027143,1.411542]};
	Questions[14]={Q:"A: It has thirty-one days. B: _______",A1:"March.",A2:"June.",Pic:"NGS2_M07_15",Correct:"1",Sound:"YSA_M07_1_15",Markers:[0.048639,2.013673]};
	Questions[15]={Q:"A: What time is it? B: _______",A1:"It's twelve o'clock.",A2:"It's six o'clock.",Pic:"NGS2_M07_16",Correct:"2",Sound:"YSA_M07_1_16",Markers:[0.000000,1.061429]};
	Questions[16]={Q:"_______ days has September, April, June and November. ",A1:"Twenty-nine",A2:"Thirty",Pic:"NGS2_M07_17",Correct:"2",Sound:"YSA_M07_1_17",Markers:[]};
	Questions[17]={Q:"Every four years, _______ has twenty-nine days. ",A1:"January",A2:"February",Pic:"NGS2_M07_18",Correct:"2",Sound:"YSA_M07_1_18",Markers:[]};
	Questions[18]={Q:"A: What time is it? B: _______",A1:"It's one o'clock. ",A2:"It's three o'clock.",Pic:"NGS2_M07_19",Correct:"1",Sound:"YSA_M07_1_19",Markers:[0.040000,0.971429]};
	Questions[19]={Q:"_______ is before Friday. ",A1:"Tuesday",A2:"Thursday",Pic:"NGS2_M07_20",Correct:"2",Sound:"YSA_M07_1_20",Markers:[]};
}


else if (mod==10) {
	Questions[0]={Q:"A: Where's Paul? B: _______",A1:"He's playing basketball.",A2:"He's riding a bike.",Pic:"NGS2_M10_1",Correct:"2",Sound:"YSA_M010_1_01",Markers:[0.280635,1.141429]};
	Questions[1]={Q:"A: Where's Anna? B: _______",A1:"She's eating a banana.",A2:"She's reading a book.",Pic:"NGS2_M10_2",Correct:"1",Sound:"YSA_M010_1_02",Markers:[0.026939,1.014694]};
	Questions[2]={Q:"A: Are they playing hide and seek? B: _______",A1:"Yes, they are.",A2:"No, they aren't.",Pic:"NGS2_M10_3",Correct:"2",Sound:"YSA_M010_1_03",Markers:[0.095238,1.815828]};
	Questions[3]={Q:"A: Is she jumping rope? B: _______",A1:"Yes, she is.",A2:"No, she isn't.",Pic:"NGS2_M10_4",Correct:"1",Sound:"YSA_M010_1_04",Markers:[0.038912,1.322993]};
	Questions[4]={Q:"A: Is he playing soccer? B: _______",A1:"Yes, he is.",A2:"No, he isn't.",Pic:"NGS2_M10_5",Correct:"1",Sound:"YSA_M010_1_05",Markers:[0.031066,1.338934]};
	Questions[5]={Q:"He _______ swimming. ",A1:"is",A2:"isn't",Pic:"NGS2_M10_6",Correct:"2",Sound:"YSA_M010_1_06",Markers:[]};
	Questions[6]={Q:"They _______ playing tag. ",A1:"are",A2:"aren't",Pic:"NGS2_M10_7",Correct:"2",Sound:"YSA_M010_1_07",Markers:[]};
	Questions[7]={Q:"She isn't playing basketball. _______",A1:"She's chasing a cat.",A2:"She's chasing a lion.",Pic:"NGS2_M10_8",Correct:"1",Sound:"YSA_M010_1_08",Markers:[]};
	Questions[8]={Q:"A: Are you watching TV? B: _______",A1:"Yes, I am.",A2:"No, I'm not.",Pic:"NGS2_M10_9",Correct:"2",Sound:"YSA_M010_1_09",Markers:[0.051270,1.489841]};
	Questions[9]={Q:"A: Is Mary wearing a dress? B: _______",A1:"Yes, she is.",A2:"No, she isn't.",Pic:"NGS2_M10_10",Correct:"2",Sound:"YSA_M010_1_10",Markers:[0.024898,1.791905]};
	Questions[10]={Q:"A: Is Jim playing soccer? B: _______",A1:"No, he isn't. ",A2:"Yes, he is.",Pic:"NGS2_M10_11",Correct:"1",Sound:"YSA_M010_1_11",Markers:[0.044082,1.606463]};
	Questions[11]={Q:"A: What is the girl doing? B: _______",A1:"She's sleeping.",A2:"She's sitting.",Pic:"NGS2_M10_12",Correct:"1",Sound:"YSA_M010_1_12",Markers:[0.055283,1.420544]};
	Questions[12]={Q:"A: What is Peter doing? B: _______",A1:"He's watching TV.",A2:"He's playing computer games.",Pic:"NGS2_M10_13",Correct:"2",Sound:"YSA_M010_1_13",Markers:[0.044626,1.227211]};
	Questions[13]={Q:"A: What is your father doing? B: _______",A1:"He's making a sandwich.",A2:"He's making a salad.",Pic:"NGS2_M10_14",Correct:"2",Sound:"YSA_M010_1_14",Markers:[0.000000,1.411587]};
	Questions[14]={Q:"A: What is your brother doing? B: _______",A1:"He's drinking milk.",A2:"He's eating lunch.",Pic:"NGS2_M10_15",Correct:"2",Sound:"YSA_M010_1_15",Markers:[0.027551,1.343878]};
	Questions[15]={Q:"A: Is Lenny sitting? B: _______",A1:"Yes, he is.",A2:"No, he isn't.",Pic:"NGS2_M10_16",Correct:"2",Sound:"YSA_M010_1_16",Markers:[0.030680,1.182585]};
	Questions[16]={Q:"A: Are you playing tag? B: _______",A1:"Yes, I am.",A2:"No, I'm not.",Pic:"NGS2_M10_17",Correct:"1",Sound:"YSA_M010_1_17",Markers:[0.025918,1.290159]};
	Questions[17]={Q:"A: Is she riding a bike? B: _______",A1:"Yes, she is.",A2:"No, she isn't.",Pic:"NGS2_M10_18",Correct:"1",Sound:"YSA_M010_1_18",Markers:[0.052812,1.460091]};
	Questions[18]={Q:"A: Is she drinking water? B: _______",A1:"Yes, she is.",A2:"No, she isn't.",Pic:"NGS2_M10_19",Correct:"2",Sound:"YSA_M010_1_19",Markers:[0.000000,1.381361]};
	Questions[19]={Q:"A: Is Tim catching the ball? B: _______ ",A1:"Yes, he is.",A2:"No, he isn't.",Pic:"NGS2_M10_20",Correct:"2",Sound:"YSA_M010_1_20",Markers:[0.060748,1.487710]};
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
$(".question").html(word.Q.replace("B:", "<br />B:"));
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















