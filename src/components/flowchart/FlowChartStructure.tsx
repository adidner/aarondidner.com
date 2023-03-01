import { flowChartEvent } from "./FlowChartPage"

const tempBlankPage = new flowChartEvent("Blank Temp", [])

const youFeelHurt3 = new flowChartEvent(
  "This things was said for some reason - do an identity reflection activity and during check ins (or at a later time) communicate how you felt",
  []
)
const youFeelHurt2 = new flowChartEvent(
  "Someone has said/done something that has upset you",
  [{ label: "continue", destination: youFeelHurt3 }]
)

const youJustFeelWrong4 = new flowChartEvent(
  "It's fine if it's just a lost day. Ask for a hug, take medication if you just can't shake it, watch a movie (try Disney or Dreamworks) and keep watching TV until you can do something else without falling apart. Gently ask if people will turn down their volumn for a bit (10 minutes) or eat later (10 minutes from now)",
  []
)
const youJustFeelWrong3 = new flowChartEvent(
  "Probably it's actually emotions causing thoughts and not a single core reason causing your problem. The most imporant things here is to try to stay fair. you're going to mad that people are being so loud or so something. Just keep your tone and impulses in check while you're in the process of sorting things out",
  [{ label: "continue", destination: youJustFeelWrong4 }]
)
const youJustFeelWrong2 = new flowChartEvent(
  "You can try and find a reason, in fact you most likely will identify a reason at some point, but you've tried to address the problem via tackling the core reason and still it won't work",
  [{ label: "continue", destination: youJustFeelWrong3 }]
)

const youWantHelp7 = new flowChartEvent(
  "Recognize that at the moment you just need to bide your time. You're exhausted, but this pain will lessen and get better. Take three minutes to do a body relaxing activity and then ask for comfort",
  []
)
const youWantHelp6 = new flowChartEvent(
  "But this is temporary. Think of all the ways in which this person has shown up for you and supported you. Try hard right now to draw on your affection for them and your understandning of them as only human",
  [{ label: "continue", destination: youWantHelp7 }]
)
const youWantHelp5 = new flowChartEvent(
  "You don't want to be in a relationship with anyone who can't take some time out of their day and life to care for you at all. You just want out so that you don't even have the option to be a burden anymore and so that you don't have to feel guiltly about being angry that they aren't giving you what you need right now",
  [{ label: "continue", destination: youWantHelp6 }]
)
const youWantHelp4 = new flowChartEvent(
  "You want so badly for people to understand that you are hurting and offer you comfort, but you know it will lead to them being exhausted and tired of you probably before you are recovered enough to take care of yourself",
  [{ label: "continue", destination: youWantHelp5 }]
)
const youWantHelp3 = new flowChartEvent(
  "This is probably true - in a short amount of time you've experienced and expressed a lot of saddness",
  [{ label: "continue", destination: youWantHelp4 }]
)
const youWantHelp2 = new flowChartEvent(
  "You're afraid that you've spent too much time being sad and now you are acculumating debt which you cannot recover from",
  [{ label: "continue", destination: youWantHelp3 }]
)

const theresNoWayOut8 = new flowChartEvent(
  "Recenter on joy as the motivation for life. You can't find it right now, but I promise that it is there. Do a visualization activity and ask for confirmation.",
  []
)
const theresNoWayOut7 = new flowChartEvent(
  "Remember that things do not change overnight and that sacrifice does not make for a better outcome if you all drown together. You do not want to give more, but that's okay. If you are wondering if there is a way for you to give more, the answer is not today and not tomorrow, but yes, in a little while. ",
  [{ label: "continue", destination: theresNoWayOut8 }]
)
const theresNoWayOut6 = new flowChartEvent(
  "But this feeling is temporary. You will feel stronger again. You will feel ready to give again in a few days. You know you don't really want to die, or at least you know that death would not provide the answer you are looking for.",
  [{ label: "continue", destination: theresNoWayOut7 }]
)
const theresNoWayOut5 = new flowChartEvent(
  "You don't want to live in a world that can never get better for people or where goodness is always uncertain. You want to just be done and leave and cry and scream and hate everything",
  [{ label: "continue", destination: theresNoWayOut6 }]
)
const theresNoWayOut4 = new flowChartEvent(
  "You desparately want things to go well for people. You're tired of keeping their plate spinning or don't have the capacity to add new ones and are terrified that you'll need to distance yourself in order to not get caught up in their misery.",
  [{ label: "continue", destination: theresNoWayOut5 }]
)
const theresNoWayOut3 = new flowChartEvent(
  "This may also be true - you can't think of anything new and things could get worse over time",
  [{ label: "continue", destination: theresNoWayOut4 }]
)
const theresNoWayOut2 = new flowChartEvent(
  "You don't know if there is a way out for people you care for or the people in the world in general",
  [{ label: "continue", destination: theresNoWayOut3 }]
)

const proximity3 = new flowChartEvent(
  "Remember, just because they said no, doesn't mean never (unless you get the feeling that they were uncomfortable with the ask), so just think forward to the next time and if you are having trouble calming down, getting frustrated with yourself for wanting something in the first place or angry with yourself for ruining a good thing with emotions you did not plan to have, do a Future Self Activity",
  []
)
const proximity2 = new flowChartEvent(
  "The other person is a person, and you need to demostrate that they can comfortably turn you down without experiencing emotional backlash. In other words, you need to say 'okay', and move on with your day",
  [{ label: "continue", destination: proximity3 }]
)

const NOTproximity3 = new flowChartEvent(
  "Most likely they will tell you that they are sorry you didn't get what you want (unless you seriously need a reality check) and at this point you should start looking forward the next time. If you are having trouble calming down, getting frustrated with yourself for wanting something in the first place or angry with yourself for ruining a good thing with emotions you did not plan to have, do a Future Self Activity",
  []
)
const NOTproximity2 = new flowChartEvent(
  "You can express to a nearby person that you are disappointed or sad about not getting what you wanted and just kind of see where it goes",
  [{ label: "continue", destination: NOTproximity3 }]
)

const youWantSomethingYouCantHave3 = new flowChartEvent(
  "You're going in circles trying to bargain for what you want, telling yourself that it's okay if you don't have it, but then ending up just overwhemlingly sad that you can't have it",
  [
    {
      label: "Is the person you want something from in proximity?",
      destination: proximity2,
    },
    {
      label: "Is the person you want something from NOT in proximity to you",
      destination: NOTproximity2,
    },
  ]
)
const youWantSomethingYouCantHave2 = new flowChartEvent(
  "You've probably missed your chance at something you really want and now no matter what you can't get your mind off of it",
  [{ label: "continue", destination: youWantSomethingYouCantHave3 }]
)

// const  = new flowChartEvent("", [{label: , destination: }]);
// Test thingy

export const rootFlowChartEvent = new flowChartEvent(
  "How are you feeling Sad, Anxious and Overwhelmed",
  [
    { label: "You want help", destination: youWantHelp2 },
    { label: "There's no way out", destination: theresNoWayOut2 },
    { label: "You feel guilty", destination: tempBlankPage },
    { label: "You feel guilty, but also hurt", destination: tempBlankPage },
    {
      label: "You feel guilty because of the past",
      destination: tempBlankPage,
    },
    { label: "You feel disgusted", destination: tempBlankPage },
    { label: "You've been rejected", destination: tempBlankPage },
    {
      label: "You want something you can't have",
      destination: youWantSomethingYouCantHave2,
    },
    { label: "You feel hurt", destination: youFeelHurt2 },
    { label: "You just feel wrong", destination: youJustFeelWrong2 },
  ]
)
