"use strict";
var Mutate = window.Mutate || {};

Mutate.Actions = {
	JetEngine: {
		name: 'Jet engine research',
		desc: 'Have you ever wondered what the inside looks like?',
		img: 'airportJetEngine',
		results: []
	},

	Fukushima: {
		name: '',
		desc: '',
		img: 'airportFukushima',
		results: []
	},

	Sunbath: {
		name: 'Enjoy yourself',
		desc: 'Who needs sunscreen anyway?',
		img: 'homeSunbath',
		results:
		[
			{
				prop: 100,
				name: 'Cancertime!',
				desc: 'You know what they say about sunburn, right?',
				mod:
				[
					{
						'stat': Mutate.Stats.MUTATION,
						'value': 10
					},
					{
						'stat': Mutate.Stats.LIFE,
						'value': -5
					}
				]
			}
		]
	},

	Microwave: {
		name: 'Make popcorn',
		desc: 'Oops! How did your hand get in there?',
		img: 'homeMicrowave',
		results:
		[
			{
				prop: 80,
				name: 'Cancertime!',
				desc: 'Those extra fingers will come in handy...',
				mod:
				[
					{
						'stat': Mutate.Stats.MUTATION,
						'value': 15
					},
					{
						'stat': Mutate.Stats.LIFE,
						'value': -15
					}
				]
			},
			{
				prop: 20,
				name: 'Fuck 600 Watts',
				desc: 'Looks like this was your last rodeo, cowboy.',
				mod:
				[
					{
						'stat': Mutate.Stats.LIFE,
						'value': -100
					}
				]
			}
		]
	},

	XRay: {
		name: '',
		desc: '',
		img: 'hospitalXRay',
		results: []
	},

	Heal: {
		name: '',
		desc: '',
		img: 'hospitalHeal',
		results: []
	},

	Vaccine: {
		name: '',
		desc: '',
		img: 'hospitalVaccine',
		results: []
	},

	Study: {
		name: 'Study',
		desc: 'You study hard to increase your IQ.',
		img: 'libraryStudy',
		results:
		[
			{
				prop: 100,
				name: 'Great success!',
				desc: 'Thank god for Nietzsche...',
				mod:
				[
					{
						'stat': Mutate.Stats.IQ,
						'value': 10
					}
				]
			}
		]
	},

	Play: {
		name: '',
		desc: '',
		img: 'powerplantPlay',
		results: []
	},

	Visit: {
		name: '',
		desc: '',
		img: 'powerplantVisit',
		results: []
	},

	Buy: {
		name: '',
		desc: '',
		img: 'powerplantBuy',
		results: []
	},

	Find: {
		name: '',
		desc: '',
		img: 'sewerFind',
		results: []
	},

	Castor: {
		name: '',
		desc: '',
		img: 'tracksCastor',
		results: []
	},

	Bite: {
		name: '',
		desc: '',
		img: 'zooBite',
		results: []
	},
};