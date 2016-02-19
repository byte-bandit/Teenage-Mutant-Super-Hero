"use strict";
var Mutate = window.Mutate || {};

Mutate.Actions = {
	Roll: function(stat, min, max) {
		var factor = stat == Mutate.Stats.MUTATION ? Mutate.game.rnd.realInRange(min, max) : Mutate.game.rnd.between(min, max);
		Mutate.Player[stat] += factor;
		return {factor: factor, stat: stat};
	},

	JetEngine: {
		name: "Jet engine research",
		desc: "Have you ever wondered what the inside looks like?",
		img: "airportJetEngine",
		iq: 80,
		results:
		[
			{
				prop: 88,
				name: "What a blaze!",
				desc: "Well, now you know.",
				mod: function() {
					return [
					Mutate.Actions.Roll(Mutate.Stats.LIFE, -20, -5), 
					Mutate.Actions.Roll(Mutate.Stats.IQ, -7, -3), 
					Mutate.Actions.Roll(Mutate.Stats.MUTATION, .9, 1.2)];
				}
			},
			{
				prop: 12,
				name: "Surprise!",
				desc: "Oh sweet summerchild...",
				mod: function() {
					return [
					Mutate.Actions.Roll(Mutate.Stats.LIFE, -100, -100)];
				}
			}
		]
	},

	Fukushima: {
		name: "Take a break",
		desc: "Why don't you enjoy your youth on a vacation?",
		img: "airportFukushima",
		iq: 110,
		results:
		[
			{
				prop: 85,
				name: "'Twas great!",
				desc: "A great addition to your family photo album.",
				mod: function() {
					return [
					Mutate.Actions.Roll(Mutate.Stats.LIFE, -10, 0), 
					Mutate.Actions.Roll(Mutate.Stats.IQ, -3, 0), 
					Mutate.Actions.Roll(Mutate.Stats.MUTATION, 1, 5)];
				}
			},
			{
				prop: 15,
				name: "Earthquake Alarm!",
				desc: "You just had to stay on the shitter, didn't ya?",
				mod: function() {
					return [
					Mutate.Actions.Roll(Mutate.Stats.LIFE, -100, -100)];
				}
			}
		]
	},

	Sunbath: {
		name: "Enjoy yourself",
		desc: "Who needs sunscreen anyway?",
		img: "homeSunbath",
		iq: 0,
		results:
		[
			{
				prop: 98,
				name: "Freckle time!",
				desc: "You know what they say about sunburns, right?",
				mod: function() {
					return [
					Mutate.Actions.Roll(Mutate.Stats.LIFE, -3, -1), 
					Mutate.Actions.Roll(Mutate.Stats.IQ, -2, -1), 
					Mutate.Actions.Roll(Mutate.Stats.MUTATION, .1, .2)];
				}
			},
			{
				prop: 2,
				name: "Nice crust, Jim!",
				desc: "You just had to fall asleep on alcohol and pain killers, didn't you?",
				mod: function() {
					return [
					Mutate.Actions.Roll(Mutate.Stats.LIFE, -100, -100)];
				}
			}
		]
	},

	Microwave: {
		name: "Make popcorn",
		desc: "Oops! How did your hand get in there?",
		img: "homeMicrowave",
		iq: 0,
		results:
		[
			{
				prop: 96,
				name: "Cancertime!",
				desc: "Those extra fingers will come in handy...",
				mod: function() {
					return [
					Mutate.Actions.Roll(Mutate.Stats.LIFE, -4, -2), 
					Mutate.Actions.Roll(Mutate.Stats.IQ, 0, 0), 
					Mutate.Actions.Roll(Mutate.Stats.MUTATION, .3, .5)];
				}
			},
			{
				prop: 4,
				name: "Fuck 600 Watts",
				desc: "Looks like this was your last rodeo, cowboy.",
				mod: function() {
					return [
					Mutate.Actions.Roll(Mutate.Stats.LIFE, -100, -100)];
				}
			}
		]
	},

	XRay: {
		name: "Broken again...",
		desc: "Time for your bi-weekly cancer checkup!",
		img: "hospitalXRay",
		iq: 90,
		results:
		[
			{
				prop: 96,
				name: "All clean.",
				desc: "Don't forget to grab your bonus sticker on the way out.",
				mod: function() {
					return [
					Mutate.Actions.Roll(Mutate.Stats.LIFE, -4, -1), 
					Mutate.Actions.Roll(Mutate.Stats.IQ, -3, -1), 
					Mutate.Actions.Roll(Mutate.Stats.MUTATION, .8, 1.1)];
				}
			},
			{
				prop: 4,
				name: "Thar be cancer!",
				desc: "Ironically caused by too much radiation... Who'd have known?",
				mod: function() {
					return [
					Mutate.Actions.Roll(Mutate.Stats.LIFE, -100, -100)];
				}
			}
		]
	},

	Heal: {
		name: "Patch me up, doc!",
		desc: "Have you secretly been eatin' plutonium again, son?",
		img: "hospitalHeal",
		results:
		[
			{
				prop: 99,
				name: "...aaaand we're done!",
				desc: "Please don't come back.",
				mod: function() {
					var life = Mutate.Actions.Roll(Mutate.Stats.LIFE, 5, 20);

					return [
					x, 
					Mutate.Actions.Roll(Mutate.Stats.IQ, 0, 1), 
					Mutate.Actions.Roll(Mutate.Stats.MUTATION, (x.factor / 10) * -1, (x.factor / 10) * -1)];
				}
			},
			{
				prop: 1,
				name: "Well, fuck...",
				desc: "I guess now you know what happens if you object to professional cyst treatment.",
				mod: function() {
					return [
					Mutate.Actions.Roll(Mutate.Stats.LIFE, -100, -100)];
				}
			}
		]
	},

	Vaccine: {
		name: "Candy shop",
		desc: "What's gonna be in the bag today?",
		img: "hospitalVaccine",
		iq: 90,
		results:
		[
			{
				prop: 90,
				name: "He's alive!",
				desc: "I'll be honest. I'm surprised.",
				mod: function() {
					return [
					Mutate.Actions.Roll(Mutate.Stats.LIFE, -10, 10), 
					Mutate.Actions.Roll(Mutate.Stats.IQ, -10, 10), 
					Mutate.Actions.Roll(Mutate.Stats.MUTATION, -1, 1.5)];
				}
			},
			{
				prop: 10,
				name: "Lol. no.",
				desc: "So much for glucose sirup injected directly into the heart...",
				mod: function() {
					return [
					Mutate.Actions.Roll(Mutate.Stats.LIFE, -100, -100)];
				}
			}
		]
	},

	Study: {
		name: "Study",
		desc: "You study hard to increase your IQ.",
		img: "libraryStudy",
		iq: 0,
		results:
		[
			{
				prop: 99,
				name: "Aleas jacta est",
				desc: "You don't know what that means. But you DO know how to unclog the toilet now.",
				mod: function() {
					return [
					Mutate.Actions.Roll(Mutate.Stats.IQ, 3, -7)];
				}
			},
			{
				prop: 1,
				name: "Another one found dead in local library!",
				desc: "Brain aneurysms are real.",
				mod: function() {
					return [
					Mutate.Actions.Roll(Mutate.Stats.LIFE, -100, -100)];
				}
			}
		]
	},

	Play: {
		name: "Find friends",
		desc: "It's just like Flubber(c)(tm)!!!",
		img: "powerplantPlay",
		iq: 80,
		results:
		[
			{
				prop: 85,
				name: "Seriously. You live?",
				desc: "You need to make some solid life decisions...",
				mod: function() {
					return [
					Mutate.Actions.Roll(Mutate.Stats.LIFE, -10, -3), 
					Mutate.Actions.Roll(Mutate.Stats.IQ, -6, -4), 
					Mutate.Actions.Roll(Mutate.Stats.MUTATION, 1, 1.5)];
				}
			},
			{
				prop: 15,
				name: "Flubber(c)(tm) hates you",
				desc: "This has always been a bad neighborhood.",
				mod: function() {
					return [
					Mutate.Actions.Roll(Mutate.Stats.LIFE, -100, -100)];
				}
			}
		]
	},

	Visit: {
		name: "Field trip",
		desc: "Nobody will notice if you go skinny dipping in the water.",
		img: "powerplantVisit",
		iq: 100,
		results:
		[
			{
				prop: 95,
				name: "Intardesting",
				desc: "Much science. Wow.",
				mod: function() {
					return [
					Mutate.Actions.Roll(Mutate.Stats.LIFE, -5, -1), 
					Mutate.Actions.Roll(Mutate.Stats.IQ, -2, 2), 
					Mutate.Actions.Roll(Mutate.Stats.MUTATION, 1, 1.5)];
				}
			},
			{
				prop: 5,
				name: "We'll need another Timmy...",
				desc: "Touching the powerlines is NOT part of the trip.",
				mod: function() {
					return [
					Mutate.Actions.Roll(Mutate.Stats.LIFE, -100, -100)];
				}
			}
		]
	},

	Buy: {
		name: "Serious Business",
		desc: "Let's face it. What could possibly go wrong?",
		img: "powerplantBuy",
		iq: 110,
		results:
		[
			{
				prop: 90,
				name: "See? Told ya!",
				desc: "Piece o' cake! Dig in, brother!",
				mod: function() {
					return [
					Mutate.Actions.Roll(Mutate.Stats.LIFE, -5, 0), 
					Mutate.Actions.Roll(Mutate.Stats.IQ, -5, 0), 
					Mutate.Actions.Roll(Mutate.Stats.MUTATION, 1.5, 3)];
				}
			},
			{
				prop: 10,
				name: "This",
				desc: "Oh. Yes. I guess this can possibly go wrong...",
				mod: function() {
					return [
					Mutate.Actions.Roll(Mutate.Stats.LIFE, -100, -100)];
				}
			}
		]
	},

	Find: {
		name: "A Quest!",
		desc: "Time to find your rat martial arts trainer!",
		img: "sewerFind",
		iq: 0,
		results:
		[
			{
				prop: 94,
				name: "Pizza party!",
				desc: "Lot's of rats but no trainer. Plenty of pizza though!",
				mod: function() {
					return [
					Mutate.Actions.Roll(Mutate.Stats.LIFE, -5, -1), 
					Mutate.Actions.Roll(Mutate.Stats.IQ, -7, -3), 
					Mutate.Actions.Roll(Mutate.Stats.MUTATION, .4, .6)];
				}
			},
			{
				prop: 6,
				name: "Great success!",
				desc: "Turns out your rat martial arts trainer hates you.",
				mod: function() {
					return [
					Mutate.Actions.Roll(Mutate.Stats.LIFE, -100, -100)];
				}
			}
		]
	},

	Castor: {
		name: "Demonstrate!",
		desc: "Signal your opposition. For peace - of course.",
		img: "tracksCastor",
		iq: 100,
		results:
		[
			{
				prop: 93,
				name: "For justice!",
				desc: "You really stood up to the man today!",
				mod: function() {
					return [
					Mutate.Actions.Roll(Mutate.Stats.LIFE, -10, -1), 
					Mutate.Actions.Roll(Mutate.Stats.IQ, -3, 0), 
					Mutate.Actions.Roll(Mutate.Stats.MUTATION, 1.2, 1.7)];
				}
			},
			{
				prop: 7,
				name: "Blind driver",
				desc: "Parent's didn't tell you to not go near the train tracks?",
				mod: function() {
					return [
					Mutate.Actions.Roll(Mutate.Stats.LIFE, -100, -100)];
				}
			}
		]
	},

	Bite: {
		name: "Spiderbite",
		desc: "Well ... it worked before?",
		img: "zooBite",
		iq: 80,
		results:
		[
			{
				prop: 90,
				name: "Looks infected",
				desc: "Just wait until tomorrow...",
				mod: function() {
					return [
					Mutate.Actions.Roll(Mutate.Stats.LIFE, -7, -1), 
					Mutate.Actions.Roll(Mutate.Stats.IQ, -4, -1), 
					Mutate.Actions.Roll(Mutate.Stats.MUTATION, .8, 1.1)];
				}
			},
			{
				prop: 10,
				name: "Cleanup on isle 6",
				desc: "Turns out lions are much more dangerous than spiders...",
				mod: function() {
					return [
					Mutate.Actions.Roll(Mutate.Stats.LIFE, -100, -100)];
				}
			}
		]
	},
};