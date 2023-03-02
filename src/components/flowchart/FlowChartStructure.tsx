import { flowChartEvent } from "./FlowChartPage"

const tempBlankPage = new flowChartEvent("Blank Temp", [])

const ForComfortAsk = new flowChartEvent(
  "I'm in a lot of pain right now and I'm really tired. If you have the capacity, could you just sit and cuddle with me for a bit until the pain meds start working and I get warmed up? If you can't do that right now, is today/tonight possible? If today/tonight is not possible, can I have a hug now? estimated time ~ 30 minutes, estimated effort ~ very low, just cuddles",
  []
)
const ForComfortActivity = new flowChartEvent(
  "Body relaxing activity - start a timer for 3 minutes. For this three minutes try again to focus on all of the places that pain (physical and emotional) are presenting themselves in your body. Do not try to make the pain go away. I know you're tired of it and you want to be done, but for three minutes you're going to try one more time to push past exhaustion to listen to you body not your mind. Take a deep breath and out. Is your head hurting? How is it hurting? Follow the pressure from one side of the pain to the end of it. Take another deep breath in and out. Is your throat closing? Don't try to turn it into tears, but don't stop it either. Can you feel the full circle of pressure around your throat? Another breath. Is your chest queasy? Can you feel how it changes as your breath in? Breathe. Does your lower back hurt? Do you have cramps? Can you still feel the wave pattern? Last breath. Are your feet cold? Can you feel where the cold starts and where it ends? When the timer goes off give the card to Aaron (or nearby close person) and if they need time, take a shower and watch a movie.",
  []
)
const ForComfort = new flowChartEvent("Comfort", [
  { label: "Ask", destination: ForComfortAsk },
  { label: "Activity", destination: ForComfortActivity },
])

const ForConfirmationAsk = new flowChartEvent(
  "I am struggling with the guilt of not being able to do enough right now. If you have the capacity, could we go over this problem I'm having one more time to make sure that there is nothing new? I'm mostly just looking for confirmation that I've done what I can and then some validation that the world it shit sometimes. If you can't do that right now, is today/tonight possible? If today/tonight is not possible, can I have a hug now? estimated time ~ 45 minutes, estimated effort ~ moderate, I need you to listen and tell me if you can think of something new",
  []
)
const ForConfirmationActivity = new flowChartEvent(
  "Visualization activity - start a timer for 3 minutes. You're trying to look for job. I know you can't find it right now and that you probabaly don't even want to, but for just the next three minutes we are going to exist in it, even if you can't feel it. Think of a place where nothing can be wrong - think of the warm sunshine, the warm wind on your face with your eyes close, the muted sound of water in your ears as you float on your back in warm water. Think of the people you are most familiar with and think of them smiling. They're talking about something they love, something they are proud of. They are feeling joy and you are near them. For a few moments, just be with them while they are happy. Go back to the warm wind and the water for a second. Try smiling. It will feel weird. Do it anyway and hold it for a bit. If you have the space, stretch out now onto your back and start over - find a place, feel that place, think of your people and think of their joy. When the timer goes off, giver the card to Aaron (or a nearby close person) and if they need time, take a shower and watch a movie.",
  []
)
const ForConfirmation = new flowChartEvent("Confirmation", [
  { label: "Ask", destination: ForConfirmationAsk },
  { label: "Activity", destination: ForConfirmationActivity },
])

const ForOrdersAsk = new flowChartEvent(
  "I'm feeling very stuck and I think I need to just start moving, but I can't figure out what to do. If you've got the capacity, can we go on a walk, play some frisbee, or go to Costco? If you can't do that right now, can you literally just give me something to do so I have a reason to start moving again (like adding days to your to-do list notepad) and then can we go on a walk later? If no walk today, can I have a hug now? estimated time ~ 20-60 minutes, estimated effort ~ low, a couple of laps outside will be sufficient",
  []
)
const ForOrdersActivity = new flowChartEvent(
  "Physical activity - Do this after asking for orders. If you have premade plans, the steps are as follows: 1) identify the very first step; 2) as a lifeless zombie, do that step and that step only, 3) keep going. You goal is move for at least a half hour and don't really stop moving until you've started to feel your head clear. You aren't able to motivate yourself to move at the moment, so you are going to break down every single movement into its own step: 1) as a lifeless zombie, put on pants, a shirt, socks, and running shoes; 2) Get your phone (and headphones) and go outside; 3) set a time for five minutes and start walking; 4) get in your car; 5) set up your bluetooth and start the 'Lighter' playlist; 6) drive to 100 Governor's Gate Ln; 7) go through the whole playlist; 8) return home The ultimate goal is to end with some kind of exercise - a run, a circuit, preferrably a run",
  []
)
const ForOrders = new flowChartEvent("Orders", [
  { label: "Ask", destination: ForOrdersAsk },
  { label: "Activity", destination: ForOrdersActivity },
])

const SincereApologyAsk = new flowChartEvent(
  "I can't pre-write this one - you need to think about what matters most to the person and how to genuinely present it at the right time. You should get out a pen and paper and break down the situation and the underlying need you have failed to meet.",
  []
)
const SincereApologyActivity = new flowChartEvent(
  "Self compassion activity - Start a 3 minute timer. So you received evidence that you are not perfect and you are capable of human error and someone else has suffered the consequences of that action. Even if you don't feel like you deserve it, you need to find it in your heart to forgive yourself. The end goal is to be truly focused on being better for the person you hurt, not absolving of your guilt. First, take yourself out of the scenario and imagine the person who made the mistake was someone else. Now reflect on the circumstance. Can you see how the actions you made were a combination of circumstances and your own personal traumas or misconceptions playing themselves out? When you're ready, focus on the affection you feel for the person you hurt and recognize them intentially as only human. Identify the underlying human need that you failed to meet even though the circumstances were such as they were. ",
  []
)
const SincereApology = new flowChartEvent("Sincere Apology", [
  { label: "Ask", destination: SincereApologyAsk },
  { label: "Activity", destination: SincereApologyActivity },
])

const CommunicateHurtingAsk = new flowChartEvent(
  "I can't pre-write this one",
  []
)
const CommunicateHurtingActivity = new flowChartEvent(
  "Identity reflection activity - take out a pen and paper (electronic or otherwise) and write down what was said that is bothering you. Did thiis attack your identity OR did was it that they didn't care? If they didn't care, it's probably because they were tired or distracted (because people do care about you and what you care about Rachel), so ask them if they could care at a different time. Ask them if they could care now - but also express that you were a bit hurt when they said they didn't care, though you do understand that they were tired. This will probably be enough to get you the enthusiasm you needed. If this attacked your identity - is it true (or do you feel like it is true)? Take some time to consider if there is any truth to what they said that you are intinctually against. Take the pieces that are important and then remember IF THEY SAY THEY JUST WANT YOU TO BE HAPPY AND SUCCESSFUL, THE MOST IMPORANT THING IS TO LIVE YOUR LIFE HAPPY. ",
  []
)
const CommunicateHurting = new flowChartEvent("Communicate Hurt", [
  { label: "Ask", destination: CommunicateHurtingAsk },
  { label: "Activity", destination: CommunicateHurtingActivity },
])

const FutureSelfAsk = new flowChartEvent(
  "I'm so overwhelmed with an emotion I do not want, but this is something you must do on your own because others are here to support you, not to absorb your disappointment or to regulate your emotions for you, but there is someone who can help you; Ask a gentler, more regulated Rachel to give you all the care and compassion you are so desparate to have from someone else.",
  []
)
const FutureSelfActivity = new flowChartEvent(
  "Future self activity - this one might take a few cycles, because there is no one but you and the you that you can conjure to lean on and also ultimately the goal is to weather a storm of emotions until they become less powerful. To start you won't want to feel better and that's fine. Act like a child - want something you can't have, demand that the world is unfair, hate yourself for being born. Each time you say these things you are looking for a response. A gentler, kinder, future Rachel will be that response. Have her remind you that you can want things, but you can't press that on other people. Have her rub your arms and remind you that the world is unfair, but you'll have more strength to face it if you can get some sleep. Have her dry your tears and remind you that you don't really want to die, you're just overwhemled. Do this again and again until you really can go to sleep. You might work out some details while you're here, but the only person you can cry to until after you get some sleep is this gentler future Rachel.",
  []
)
const FutureSelf = new flowChartEvent("Future Self", [
  { label: "Ask", destination: FutureSelfAsk },
  { label: "Activity", destination: FutureSelfActivity },
])

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

const guiltyAboutThePast4 = new flowChartEvent(
  "Do a self compassion activity and then reflect on whether the timing is good to make an apology. If it is, make a genuine apology, honesly recognizing the ways you were unkind",
  []
)
const guiltyAboutThePast3 = new flowChartEvent(
  "You know that begging for forgiveness and apologizing excessively and crying dramatically are all avoidance tactics. You don't want to face that you're not perfect, but you need to reflect",
  [{ label: "continue", destination: guiltyAboutThePast4 }]
)
const guiltyAboutThePast2 = new flowChartEvent(
  "You're scared that you may still have to face the consequences of your actions and that may come in the form of lost friends or owning up to scummy parts of yourself that you didn't know about before",
  [{ label: "continue", destination: guiltyAboutThePast3 }]
)

const disgustedAboutThePast6 = new flowChartEvent(
  "You need to complete the cycle. Ask for orders and do a physical activity",
  []
)
const disgustedAboutThePast5 = new flowChartEvent(
  "You can unstick yourself, but you're going to need to ask for help because you will not be able to start the process by yourself.",
  [{ label: "continue", destination: disgustedAboutThePast6 }]
)
const disgustedAboutThePast4 = new flowChartEvent(
  "You feel like you've been wronged, but now you aren't sure what to do because you got incredibly emotional before recognizing you were triggered. You are stuck and need to get out, but can't find the motivation",
  [{ label: "continue", destination: disgustedAboutThePast5 }]
)
const disgustedAboutThePast3 = new flowChartEvent(
  "You're triggered and are desparately seeking confirmation that what happened to you was unfair and not your fault",
  [{ label: "continue", destination: disgustedAboutThePast4 }]
)
const disgustedAboutThePast2 = new flowChartEvent(
  "You may have gotten here through a different conversation and didn't realize until halfway through the conversation that you don't care about the conversation anymore, you're just upset",
  [{ label: "continue", destination: disgustedAboutThePast3 }]
)

const youreRememberingThePast = new flowChartEvent(
  "You feel like you've made an irreparable mistake in the past and need to beg for forgiveness, which you don't deserve",
  [
    {
      label: "You're scared that you hurt someone in the past",
      destination: guiltyAboutThePast2,
    },
    {
      label: "You got here from another conversation",
      destination: disgustedAboutThePast2,
    },
  ]
)

const avoidance4 = new flowChartEvent(
  "Do a self compassion activity and then, make an honest and deeply sincere apology. Also, be strong in showing that you understand the weight of the matter.",
  []
)
const avoidance3 = new flowChartEvent(
  "This feeling of guilt is demanding for resolution, but it cannot resolve by seeking forgiveness. You may not ever feel a resolve, but what's most imporant is that you focus on truly being better, not feeling better",
  [{ label: "continue", destination: avoidance4 }]
)
const avoidance2 = new flowChartEvent(
  "You know that this is an avoidance tactic - you just don't want to really face that you aren't perfect and that you've actually done something selfish or mean and need to reflect on it",
  [{ label: "continue", destination: avoidance3 }]
)

const suffer5 = new flowChartEvent(
  "Do a self compassion activity and then, having made an honest and genuine apology, remind the person that you take this very seriously even if you aren't visibly broken up over it, you recognize that this is a big deal.",
  []
)
const suffer4 = new flowChartEvent(
  "This feeling of guilt is demanding for resolution, but it cannot resolve by seeking forgiveness. You may not ever feel a resolve, but what's most imporant is that you focus on truly better, not feeling better",
  [{ label: "continue", destination: suffer5 }]
)
const suffer3 = new flowChartEvent(
  "The other person who wants your hurt is actually hurting themselves and they really just want to know you care deeply about the ways you've hurt them. They may also still be angry, but your suffering is not sustainable",
  [{ label: "continue", destination: suffer4 }]
)
const suffer2 = new flowChartEvent(
  "You are afraid that the person you hurt may actually want you to suffer in exchange for your mistake and you don't know if you can keep it up or even if it's a good idea because it hurts so badly",
  [{ label: "continue", destination: suffer3 }]
)

const YouFeelGuilty2 = new flowChartEvent(
  "You want to do anything to aggressively make up for what you've done and apologize over and over until they see that you are eaten up inside",
  [
    { label: "You know this is an avoidance tactic", destination: avoidance2 },
    {
      label: "You're afraid the person actually wants you to suffer",
      destination: suffer2,
    },
  ]
)

// const  = new flowChartEvent("", [{label: , destination: }]);

export const rootFlowChartEvent = new flowChartEvent(
  "How are you feeling Sad, Anxious and Overwhelmed",
  [
    { label: "You want help", destination: youWantHelp2 },
    { label: "There's no way out", destination: theresNoWayOut2 },
    { label: "You feel guilty", destination: YouFeelGuilty2 },
    {
      label: "You are remembering past events",
      destination: youreRememberingThePast,
    },
    {
      label: "You want something you can't have",
      destination: youWantSomethingYouCantHave2,
    },
    { label: "You feel hurt", destination: youFeelHurt2 },
    { label: "You just feel wrong", destination: youJustFeelWrong2 },
  ]
)
