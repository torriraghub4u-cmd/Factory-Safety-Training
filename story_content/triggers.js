function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5dM3M9YKc6V":
        Script1();
        break;
      case "5qhlsFkLBc4":
        Script2();
        break;
      case "67ovJXOws4k":
        Script3();
        break;
      case "5ciOhFpcI2U":
        Script4();
        break;
      case "5owk3Ar1xh9":
        Script5();
        break;
      case "5ooxnsxOfC7":
        Script6();
        break;
      case "6KsoC3GFTY8":
        Script7();
        break;
      case "5mnnWRmjiEE":
        Script8();
        break;
      case "5r5LSqxHwND":
        Script9();
        break;
      case "5xRg6POuQyc":
        Script10();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const target = object('6MWQjsF9Pgb');
const duration = 750;
const easing = 'ease-out';
const id = '6jdOrSruKQ0';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6ieZakWAMSn');
const duration = 750;
const easing = 'ease-out';
const id = '5bRjsrOuxum';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('6elEyk1775h');
const duration = 750;
const easing = 'ease-out';
const id = '6KMMEyRB61c';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6CGE8Ova9x7');
const duration = 750;
const easing = 'ease-out';
const id = '5wrMdxE8Zu9';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
