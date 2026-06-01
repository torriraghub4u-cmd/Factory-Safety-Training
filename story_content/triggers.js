function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6KMmjldyUAP":
        Script1();
        break;
      case "5pXgOFpJxu4":
        Script2();
        break;
      case "5f1WnLxtAeN":
        Script3();
        break;
      case "60n6m1VHCbT":
        Script4();
        break;
      case "5YDSYjklBVj":
        Script5();
        break;
      case "6L758Z3pXku":
        Script6();
        break;
      case "5lUnMhfYYhb":
        Script7();
        break;
      case "6aRYpMRDTqx":
        Script8();
        break;
      case "5b46P0OnZIq":
        Script9();
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
