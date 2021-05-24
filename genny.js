// Okay This will be a culture generator
// Now lets turn the first five into a working thing!

// world html ids
const theWorld = document.getElementById('theWorld');
const theZones = document.getElementById('zones');
const theZoneDetails = document.getElementById('zoneDetails');
const theLandFeats = document.getElementById('landscapeFeats');
const theLocalScope = document.getElementById('localScope');
const thePlanet = document.getElementById('planet');
// the People html ids
const thePopulace = document.getElementById('populace');
const thePhysical = document.getElementById('physical');
const thePhysicalButtons = document.getElementById('physicalButtons');
const thePhysicalDetails = document.getElementById('physicalDetails');
const theExtra = document.getElementById('extra');
const theExtraButtons = document.getElementById('extraButtons');
const theExtraDetails = document.getElementById('extraDetails');
const theDrawBack =  document.getElementById('drawBacks');
// Culture and belief ids
const theTech = document.getElementById('technology');
const theIndust = document.getElementById('definingIndustries');
const theGovern = document.getElementById('government');
const theLeaderQ = document.getElementById('leaderQuirks');
const theMilQuirks = document.getElementById('milQuirks');
const theCultQuiks = document.getElementById('culQuirks');
const theSupersti = document.getElementById('supersti');
const theVice = document.getElementById('vAndV')

let userChoice = {

}

//Table 1: Climates 8
const climate = [
    "Standard",
    "Infernal",
    "Sweltering",
    "Frosty",
    "Fimbulfrost",
    "Molten",
    "Ice",
    "Custom Major",
    {
      0: "Ice_Cap Boreal Temperate Dry Tropical",
      1: "Temperate Dry Tropical Torrid Molten",
      2: "Boreal Temperate Dry Tropical Torrid",
      3: "Hyperborean Ice_Cap Boreal Temperate Dry",
      4: "Frozen Hyperborean Ice_Cap Boreal Temperate",
      5: "Torrid Molten Molten Molten Molten",
      6: "Frozen Frozen Frozen Frozen Hyperborean",
      7: "Choose as you see fit!"
    }
];

//For Table 1; there are nine zones
const zones = {
  Frozen: "Self explantory, absolutely frozen. The weather is rarely, if ever, above -200 and usually hovers around -250 to -300 though colder areas can reach -400F. This extreme climate zone cannot sustain life as we recognize it (outside of the tardigrade). The only landmarks are glaciers and ice.",
  Hyperborean: "This weather pattern is excessively cold, but not life here is not impossible though it does require effort, equipment and planning. In this unforgiving climate temperatures hover around -75F though it can dip down to around -150F, while the temperature can reach up to 60F rarely, it is in those 'oasis-like' areas that communities grow. Winds can reach supersonic speeds across the icy terrain and polar vortexes can be pointed to as the culprits of the steep climate drops.",
  Ice_Cap: "The ice caps of the north are surpringly more forgiving than the frigid south. Temperatures can drop to -50F, it hovers roughly around 32F. It is still cold but life can grow and find sustenance here. The growing seasons are short here and there are no trees on the tundra but grasses and moss grow, feeding the foundational herbivores of the life cycle.",
  Boreal: "The cold eases somewhat allowing for the growth of enduring evergreens, grass, large deers like the caribou roam in herds in temperatures that range from -50F in the coldest depths of winter to 77F in the heat of the summer. While not for the faint, this climate zone does provide sustenance and home for the hearty.",
  Temperate: "A wide range of temperatures and climates fit within this zone from dry summers with mild winters to hot summers that hoard the majority of rainfall with cold winters. There will be areas that have varying high and low temperature with rain and snow spread through the four seasons. Tornadoes, Thunderstorms, Monsoons; any of these phenomenon can be found in this climate zone with an equal variety of creatures. Agriculture is a big thing in this climate.",
  Dry: "The steppes and  plains. This climate zone is home to tall grass, shrubs and herbs with very few trees; the temperatures ranging from -4F in the deep winter to almost 90F in the summer. Bison, rattlesnakes, wolf packs and a number of rodents; these are a taste of the teeming life found in the dry climate zone.",
  Tropical: "Marked with a wet season and a dry season rather than summer and winter, the temperatures here are higher all year long on average hitting around 65F. While the temperature may not rise high, topping out usually just under 90F, these lands are humid and thick. It can make for uncomfortable living at times. The forests can be dense and hard to traverse or it can be more open with high amount of rain through the year but certain areas will be drought heavy with tall grass, shrubs and trees only growing near flowing water sources. Snakes, primates and large cats are found here with lions and zebras or crocodiles found in the drier regions.",
  Torrid: "A climate zone with hostile living conditions, little to no rainfall for long stretches of the year and land that has been worn down to sand by dry, searing winds. Only special plants and animals live in these conditions and growing food will require special planning and equipment but it is not impossible. The daily temperature is over 100F during the day, dropping to around 25F at night. Dunes of sand, rocks and occassional plant life adapted to this harsh climate identify the region.",
  Molten: "This climate zone is made of still molten, melted rock. Magma flows over itself churning and roiling as far as the eye can see. Occassional land pockets of active volcanos dot the region. It's not all smoke and ash though, there are sometimes storms of acid rain and volcanic smog to offer a change of pace. This region boasts temperatures over 150F and averages at 250F and is uteerly inhabitable by most organisms."
}

//Table 2: Ten populace
const populace = [
    "Nanoscopic", "Microscopic", "Tiny", "Miniature", "Medium", "Large", "Giant", "Huge", "Massive", "Titanic"
];

// For Table 2
const sizes = {
  Nanoscopic: "Under 20 microns.",
  Microscopic: "Up to 200 microns/0.2 millimeters",
  Tiny: "Up to 60 millimeters/2 inches",
  Miniature: "Up to 600 millimeters/2ft",
  Medium: "Up to 3 meters/10ft",
  Large: "Up to 10m/32ft",
  Giant: "Up to 50m/164ft",
  Huge: "Up to 500m/1640ft",
  Massive: "Up to 5km/3.1 miles",
  Titanic: "Up to 50km/31 miles"
}

//Table 3: Physical Characteristics 20
const physicalCharacteristics = [
    "Head Variants", "Arm Variants", "Leg Variants", "Eye Variants", "Ear Variants", "Tongue Variants", "Mouth Variants", "Skin Color Variants", "Skin Texture Variants", "Hand Variants", "Extra Organs", "Extreme Appearance", "Non-Solid Form", "Tail", "Wings", "Animal Forms", "Chynerid", "Proxy Sense", "Long Limbs", "Fins",
    {
      0: "Extra_Heads Cosmetic_Adornments Combat_Adornments",
      1: "Extra_Arms Tentacles Diarthrotic_Joints",
      2: "Extra_Legs Predatory_Legs Ungulate_Legs",
      3: "Insectoid Predatory_Cat Extra_Eyes",
      4: "Large Pointed Antennae",
      5: "Forked Frog Stinger",
      6: "Multiple_Mouths Rows_of_Teeth Disposable_Teeth",
      7: "Dotted_Patterns Primary_Color Translucent",
      8: "Bark Scale Smooth",
      9: "Extra_Digits Webbed_Digits Digging_Claws",
      10: "Brain Heart Stomach",
      11: "Ugly Beautiful Feranthrope",
      12: "Gaseous Energy Liquid",
      13: "Prehensile Club Balance",
      14: "Wings",
      15: "Animal_Forms",
      16: "Chymerid_Form",
      17: "Proxy_Sense",
      18: "Long_Limbs",
      19: "Fins"
    }
];

// For Table 3
const physChara = {
  // Head Variant
Extra_Heads: "The creature has additional heads, each subsidiary head has enough intelligence to chew, speak and maintain any action it had already begun as well as look around (weakly). The creature can focus on any single head and make it the new primary head but without 'additional brain' the other heads are pretty much on auto pilot.",

Cosmetic_Adornments: "Horns, Barbs, Swirling lights that rise from the scalp. Anything that makes the head look nice, different but regardless of the choice, it will offer no combat advantage to the species. Horns may be more like nubs, barbs might be brittle, swirling lights aren't bright enough to blind anyone etc.",

Combat_Adornments: "Horns, Barbs, swirling lights that rise from the scalp. While these adornments may not be the prettiest, they are suitable for self-defense. Horns may be long and sharp or blunt, ram-like swirls. Barbs may be like a crocodiles back, boney and hard. The swirling lights may leave targets stunned or blinded etc. Combined with Cosmetic adornments, they are functional in combat AND they can be used as flair to impress or look damn good.",

// Arm Variants
Extra_Arms: "The species has extra extremities, a safe bet is one extra set of arms each time this characteristic is applied. Too many arms can get unwieldy though and it may become difficult for a single brain to allow for not only 'higher' brain function but controlling so many limbs simultaneously.",

Tentacles: "Instead of regular arms, the creature has tentacles which it can use to grip, swing from or otherwise interact with the world. Combined with extra arms, the creature can have both tentacles AND arms.",

Diarthrotic_Joints: "Every joint of the creature's arms possesses the ability to freely move in all directions.",

// Leg Variants
Extra_Legs: "The species has additional legs, the safe bet is to grant one extra set of legs each time this characteristic is selected. Too many legs can fall on themselves and it might become difficult for a single brain to be in charge of 'higher' brain functions an all limbs including any extra limbs and organs that species' already possesses.",

Predatory_Legs: "Members of the species can reach higher speeds when running than ungulates and other creatures but are less manueverable and require more effort to change momentum direction.",

Ungulate_Legs: "Members of the species can outpace many creatures but cannot match the speed, accelaration and deceleration of predators. They can, however, adjust with greater ease from one direction to another and outmaneuver chasers and obstacles.",

// Eye Variants
Insectoid: "The species is not able to see images with great clarity but can see a wide spectrum of light that the human eye does not pick up and can detect movement with almost unparalleled ease. In addition, the species can see in almost 300 degree vision, not quite a full circle, but close.",

Predatory_Cat: "The species has poor vision close up but with about a foot of distance between themselves and what they are looking at, vision will improve. In exchange the species can see as well at night or at times when lights are low or dim.",

Extra_Eyes: "These creatures have additional eyes beyond the standard human pair. While a number is not assigned, it's a safe bet to say that each time this characteristic is applied to a species that they gain up to one additional pair of eyes.",

// Ear Variants
Large: "These ears are noticeable and out there, whether flared out like an elephant or drooping like a bloodhound. They are structured to catch and filter sounds, allowing the species to hone in on particular sounds and protect them from sudden bursts of sound cases of those with sensitive hearing.",

Pointed: "The pinna of the ear comes to a pronounced point rather than rounding off. The restructuring grants the creature slightly enhanced hearing so they can pick up sounds from further away.",

Antennae: "The species boasts antennae that serve as a truple threat of sensory input. Hearing, seeing, smelling; all can be done through the antenna. This does not elimiinate the existence or use of other sensory organs, just because the species has antennae does not mean they lack eyes necessarily but the antennae serve as the primary organ for these senses and the other organs serve as supplemental, weaker backup.",

// Tongue Variants
Forked: "The forked tongue allows the creature to supplement efforts by their nose to pick up on finer, faint odors. While it doesn't make them bloodhounds or supertrackers, it does give them a superior sense of smell to play with.",

Frog: "The species has a retractable tongue that can extend 1/3rd the length of their body. Targets grabbed by this tongue have to resist being pulled at a speed that exerts 12Gs of force (meaning the target has to resist it's own weight multiplied by 12) and can possibly be knocked out from the force.",

Stinger: "The species tongue ends in a sharp stinger like a bee or scorpion's tail, it can even be a syringe to inject targets if the creature has a means of producing poisons or chemicals. The tongue isn't any longer than a human tongue however so stabing the target will require some thought on the creature's part.",

// Oral Variants
Multiple_Mouths: "The creature has more than one mouth, pretty self-explanatory. Each mouth has the ability to chew and bite and with practice and focus, more than one mouth can speak and act at the same time as another. Three or more mouths may require additional brains to control them and without an additional stomach, these mouths may not be able to digest anything it chews on.",

Rows_of_Teeth: "Like a shark, this creature has rows of teeth in their mouth. These rows make chewing easier and while they may have sharper points than most teeth they are not fangs so they won't be serrating or shearing through skin and muscle with any more ease than a human mouth.",

Disposable_Teeth: "Following the shark idea, the creature does not run out of teeth and can sacrifice or lose teeth with no concern for gaps in their maw. These teeth are not much sharper than a human tooth. If the creature also has rows of teeth this process is bloodless, as teeth from a back row move forward to fill the gaps. If the creature doesn't have rows of teeth, there is a small spurt of blood as the new tooth pops through the gums.",

// Skin Color Variants
Dotted_Patterns: "The creature's skin is colored by Ben-Day dot patterns of various shades.",

Primary_Color: "The creature's skin is colored in a single primary color (Red, Yellow, Blue) but has varying shades and hues.",

Translucent: "The creature has see through skin of varying clarity ranging from milky or foggy to crystal clear. In some cases a lesser layer exists under the skin to keep the internal organs of the creature from being visible but this is not a universal hard rule.",

// Skin Texture Variants
Bark: "The species has the coarse, rough texture of bark from a tree and carries the same properties. This skin provides a very small level of protection against bludgeoning attacks and impact damage but proves useless against blades and sufficient force. This bark-like skin protects from dehydration and offers a very small level of protection from temperature extremes.",

Scale: "The species has lizard-like scales from head to toe and may have ridges as well. These scales protect against dehydration and offers small levels of protection from cutting and stabbing attacks like the teeth and claws of predators.",

Smooth: "The species has the look and feel of an uncanny material, sculpted into a humanoid facsimilie. The material may offer moderate protection from crushing, stabbing or slashing attacks depending on what the material is. For example, marble skin may protect somewhat against efforts to slash but it does not offer the greatest protection against a club meanwhile steel body protects from a number of physical attacks but not elemental or energy threats. Once the skin has been pierced or broken, the creature's insides are still normal and they will bleed as normal.",

// Hand Variants
Extra_Digits: "The hands of this species has more than four fingers and a thumb. A six fingered hand to wield the sword that will kill someone's father perhaps or even more, though it is recommended that the species maintain less than 11 on a single hand.",

Webbed_Digits: "The fingers and thumbs of the creature are connected with an interdigital membrane. This helps the species interact with fluids, cupping it more efficently and moving through liquids easier.",

Digging_Claws: "The populace sport non-retractable, durable claws that are suited for digging through natural materials. The creature can move as fast as they can walk comfortably when digging but can go up to their running speed for bursting fits of digging that last for no more than six seconds at a time and require at least four seconds of break time between each burst.",

Animal_Form: "The creature does not start with a humanoid template but instead starts with an animal as the base form. This can be as innocuous as a sheep or as aggressive as a tiger. Keep in mind the base animal's height/length and how it fits on 'Table 2: Size'.",

// Extra Organs:
Brain: "The species has at least one additional brain, allowing the creature to multitask with ease. The other brains can control individal limbs or work on complex mental actions while the creature is immersed and engaged in other activities. If the creature has additional mouths, then the extra brain can communicate as a seperate entity.",

Heart: "The species has at least one additional heart and cardiovascular network. The heart functions in all ways like the primary heart does however the heart does not need to be active all the time. If more than one heart is active at the same time, the creature is more alert and able to react to situations faster. The danger this creature faces is an exorbitant strain on their lungs with multiple hearts to keep blood oxygenated.",

Stomach: "The creature's body has at least one additional stomach and digestive tract. If the creature has more than one mouth, those mouths can be connected to the supplemental digestive tract. Extra stomachs can be used in a number of ways by the daring and creative.",

// Extreme Appearance
Ugly: "The creature is hideous, not only horrid to look at but so offensive to the vision of others that they can shock, horrify or even temporarily blind those who view them.",

Beautiful: "The species is stunning in beauty, nearly perfect to behold. Their beauty transcends race or sexual preferencee, it may even surpass species. This is not a form of mind control however, while many are willing to bend and obey for the creature, most people will not simply do what the species says. They are more inclined to want to please the creature and certainly will not die for them (without some other incentive or reason).",

Feranthrope: "The species is anthromorphic, an animal imbued with humanoid traits. This species is physically superior to the average human but also must tend to stronger instinctual pulls and demands such as mating seasons, hibernations and even territorial demands.",

// Non-Solid Form
Gaseous: "The species can enter into and maintain a humanoid shape through discipline and focus but in their natural state the creatures are gas and vapor. If dispersed, they can reform in time, anywhere from a day to a week, though species with regeneration can reduce this time down to days or even seconds. The gas is not poisonous or chemical unless the creature can also generate such effects.",

Energy: "The creature can mold and shape intangible energies such as fire, ambient radiation, air or even light into a body but their natural state is sentient energy. The energies themselves can be harmful and while the creature can mold and shape these energies to coalesce into a form, this talent is not an offensive capability. The creature cannot increase or decrease the intensity of the energies either.",

Liquid: "The creature is made of liquid; mud, slime, water or even acid. The liquid's properties remain the same and can be used creatively to attack or defend. If the body is dispersed with suitable force, the creature can reform in a day or up to a week. If the species has regeneration, the time can be reduced to days or even seconds. The creature cannot manipulate the liquid further than minor tricks and forming a body, nor can the creature increase or decrease the volume of the liquid that makes up their body.",

// Tail
Prehensile: "The species has a long tail, capable of being used to grab and swat targets like an additonal hand. If used offensively, the tail is lackluster. It is capable of grabbing and pushing but lacks the quick release power of a punch. The greatest advantage of this tail is that it is very manueverable and flexible, able to strike from around the creature or even overhead. This tail can assist somewhat with balace but it can also get in the way in times of stress or danger.",

Club: "The creature has a tail that is rigid and thick, potentially ending with a large bulbous end. The whole tail is suitable for clubbing or bashing targets but mostly cannot be used for any other activity. If the creature has prehensile as well, then this tail is capable of attacks from a variety of angles with punishing power and can grapple with a respectable strength. The shortcoming of this tail is that it provides poor balance, potentially throwing off the creature if it attacks from a position of bad footing.",

Balance: "The creature has a wide tail that is not very flexible but provides an amazing supplemental effort to balance. The species has great balance on all but the most trecherous of terrain and with focus they can overcome even the worst footing. The tail does not grab anything but it can be used to slam but it will be an unwieldy weapon.",

Wings: "The creature has at least one pair of majestic wings that can lift the creature and keep it aloft. The flight speed is modest, equal to the creature's running speed, though additional wings will make the species a small bit faster.",

Chymerid_Form: "The creature is a mix of humanoid torso and animal legs. The legs do not have to be the 'classic' Centaur, it can be any animal's legs.",

Proxy_Sense: "The creature can extend the range of thier senses because one of their sensory organs has a supplemental, external assistant. A ring with eyes encircling it or an automated drone that picks up normally inaudible wavelengths are examples of what the species can utilize to augment their senses.",

Long_Limbs: "The creature has limbs that are at least half as long as a normal humanoid's limbs. Arms that drag knuckles on the ground or legs that have two knees because they are so long. Even the neck can be used in this case such as a giraffe neck on a humanoid frame.",

Fins: "The creature has fins that grow from their body to help them move swiftly and with greater agility when submerged. These fins allow the species to move at speeds comparable to an olympic runner when immersed in liquids. They need not be in water to gain this benefit though the fins grant them no protection if they are immersed in a fluid that they cannot normally withstand such as magma or acid.",


}

//Table 4: Extraordinary Abilities 20 0 - 13 multiple choices
const extraordinaryAbilities = [
    "Carrier: The creature is a host for a subspecies of much smaller proportions that live within them. The subspecies can be communicated but only with simple commands such as attack, guard, stay. When the host is injured, if it is a debilitating, crippling or grievous wound, the subspecies home takes damage and may evacuate or rebel against the host.", 
    "Enhanced Senses: The creature has honed senses that are capable of superhuman feats.", 
    "Environmental Adaptation: The species has the ability to survive in harsh or even antagonistic environments that would not support human life.", 
    "Expert Athlete: All members of the species are physically talented in one particular form of athletic practice or another.", 
    "Alternative Mobility: This ability is intended to be in addition to standard mobility options such as crawling or walking however this need not be the case. Perhaps this alternative option is the only means that a creature or species can move, such as a sentient rock or a living color.", 
    "Sight Variants: The species has not only the ability to see like a human but also has additional sight capabilities.", 
    "Claw Variants: The species may have nails like a human finger or may have different capabilities such as those below.", 
    "Gaze Variants: The creature can not only see but possess an offensive ability through their eyes as well with a variety of effects.", 
    "Bite Variants: The creature has not only the ability to bite but their bite is far more formidable because of one (or more) of the effects listed below.", 
    "Natural Defense: The species possesses an additional form of protection other than just greater endurance or pain tolerance and can lessen incoming damage from external sources.", 
    "Superior: In some fields, the species is greater than even the greatest human potential. Their capacities are superhuman and can only go higher from there.", 
    "Legendary Atavism: The species is descended from a creature of human myth and legend. Their ancestors genes, while recessive, are not buried and occasionally surface in members of the species even now.", 
    "Surge: The species has the ability to expend energy in a burst that will temporarily increase their abilities in a certain field. These surges last for minutes, never more than one hour.", 
    "Adept: The species have a natural inclination towards the comprehension and manipulation of paranormal energies and disciplines. The supraplane mentioned below is any alternative realm of realty where the arcane is prevalent such as a godly realm, the underworld or the spiritual plane.", 
    "Quills/Barbs: The species has quills similar to a porcupine that may or may not retract. These quills are safely detachable and will regrow in a few days though if the species is capable of quickly healing, this could reduce the regrowth time substantially.", 
    "Increased Speed: The species moves naturally with speeds comparable to a motorized vehicle, going tens of miles per hour. Some may even reach hundreds of miles per hour or faster.", 
    "Extended Lifespan: The species is gifted with a long life, possibly hundreds of years or even thousands of years before reaching the end of their natural lifespans. With good living, excercise and anti-anging medicines this might even extend this further.", 
    "Regeneration: The species is capable of healing faster and more completely than a human. They can reattach lost limbs or regrow them with nearly the same faculties as the lost one.", 
    "Naturebound: The species has the ability to communicate with and command the obedience of plants, animals and insects.", 
    "Elastic Form: The species has an extremely flexible and pliant physical form capable of stretching and other elastic deformation.",
    {
      0: "Plague Insects Harriers",
      1: "Hearing Taste Sight",
      2: "Underwater Subterranean Aerial",
      3: "Climbing Acrobatics Swimming",
      4: "Levitation Flight Swimming",
      5: "X_Ray Energy_Sight Dark_Sight",
      6: "Sharp_Nails Pincers Retractable",
      7: "Paralysis Petrification Energy Blast",
      8: "Fangs Poison Sleep",
      9: "Thick_Hide Carapace Exo_Skeleton",
      10: "Physical_Strength Social_Guile Intellect",
      11: "Dragon Fairy Giant",
      12: "Physical Healing Mental",
      13: "Arcane Psychic Ritual"
    }
];

// Table for Table 4 Extraordinary stuff
const extraordinaryTable = {
  Plague: "Plague: The subspecies is viral in nature, a virulent disease that cooks and evolves and grows using the host body as a place to train and grow stronger. Creatures that have greater endurance or superior bodies may need to help the virus or their own anti-bodies will nearly annihilate the plague, preventing it from spreading far. This subspecies can exist for only a few yards, no more than ten, outside of a host or infected body but once it has infected someone else it does not need to return to the host.",
  Insects:"Insects: This subspecies is made up of drones that painlessly carve out parts of the host to create a hive. Within the hive the insects, often bees or hornets but not limited to them, make room for a queen and await the command of the host. These subspecies are unique and develop properties based on the host, gaining one of the hosts other extraordinary abilities or physical characteristics. They can exist up to one hundred yards from the host and nest alone but depending on the size of the nest, they can travel in groups out to further distances with larger groups traveling out to miles away from the nest. The queen of the hive is NOT a drone but will obey the host unless the host puts the hive itself into danger, then the queen can override the hosts hold on the hive and take up to half of them away.",
  Harriers: "Harriers: The subspecies is a super miniature but sentient species that has reached a level of technology that allows for ships to fly and fight outside of the host's body. The ships armaments are devastating...for their size, allowing them to at the least pester or at most do grievous harm to the host's targets. The larger the fleet and more advanced they are, the more of the host's body they require and if they are equal to or greater than the technological level of the host they take more than half of the body. The harriers have a maximum range of roughly fifty yards and need time to repair after conflicts.",
  Hearing: "Hearing: The species can hear long distances, pinpoint individual sound sources in the midst of a small crowd. If they focus the species can hear a heart pumping blood and the blood flowing in someone's veins from ten yards away; these are samples of what feats they can accomplish.",
  Taste: "Taste: A few examples of the species' superior taste are as follows: detecting ingredients by how fresh, in season they are, their land of origin or tasting a poison before from whisps before it is ingested. The species can even 'taste' things like color, light or time.",
  Sight: "Sight: The species possesses the ability to see more than a human can perceive. Whether being able to see in the full spectrum of light waves, see colors that the human eye cannot pick up, see at a microscopic level or extend their vision outside themselves and see in a third person view; this species boasts a superior visual acumen.",
  Underwater: "Underwater: The creature can breathe in fluid and move while fully immersed in fluid with ease. The pressure of being in the depths does not cause the same level of pain or discomfort as it would to a human, being in deeper depths make the fluid harder to filter breathable air making them lightheaded similar to the effects of being in high altitude for long dwellers. Being on land and out of the water may be second nature, may be like drowning for them or they may be able to stay on land for a short amount of time before the seperation from the water starts to enervate them.",
  Subterranean: "Subterranean: Members of this species are adapted to living beneath the surface. Their see best in the dark and need very little respiration or fresh air. Tight, confined spaces are comfortable for them and they can dig through dirt and mud with the same ease that a fish can move through water. Stone offers a bit more resistance but even rock will give way, allowing them to move through stone as a human swimmer moves through water. Their skin is harder than a human because they are so dense and to protect them as they tunnel, however they are often sensitive to sunlight. If they are, moon and starlight are at a comfortable level of illumination for them.",
  Aerial: "Aerial: The species has adapted to life in or above the clouds, higher than most mountains. They have a low density frame that allows them to remain buoyant in the clouds or capable of graceful flight. They can breathe in high altitudes, have sharp vision from adapting to see distant targets and can tolerate cold winds very well. Bring on land is difficult for most of them however and those who have this difficulty will fatigue faster when traveling on solid ground. Being in enclosed spaces will bother many of them as well, used to open space as they are. While being in bright, glaring lights do not blind them; being in even twilight will be too dark for some of them unless they are akin to hunting raptors who also have adapted to low light conditions.",
  Climbing: "Climbing: The species can move along vertical and horizontal surfaces with ease. If there are natural handholds, they can travel as quickly as they walk. They can go up and down, forward and back with equal ease. Even if the surface they are climbing is smooth with no handholds or depression to find leverage, the species can still manage to travel at a relatively quickly crawl if they want. Going up ropes or vines is even easier, allowing this species to travel at the same speed as they can run.",
  Acrobatics: "Acrobatics: The species is almost unparalleled in flexibility, grace and fluidity of motion. They can twist in upon themselves tightly, stretch their limbs, flip, roll and navigate over and around obstacles. Even the slowest of them could be freerunning and gymnastics experts with minimal effort.",
  Swimming: "Swimming: All members of this species can move through fluids with little difficulty, displaying gymnastic flair and respectable speeds equal to their running capabilities on solid land. They can swiftly make turns and adjust to avoid obstacles even fully submerged though they cannot breathe underwater and water pressure can be a terrible and lethal burden for them.",
  Levitation: "Levitation: The species can take off from the ground on the 'X-axis' only. They can up or back down but they cannot travel on the 'y-axis' to go forward or back while doing so, at least not of their own power. They can levitate and be carried or ride something else's momentum. While levitating, the creature weighs only one-tenth of their normal weight.",
  Flight: "Flight: Unlike levitation, which is only up or down, this ability is full range of motion. The species can take off, move forward, back and side to side. They may not be the most graceful beings in air, this ability is almost like swimming but through the sky. With practice and effort, a member can learn to move with grace and speed. Some creatures will have wings to supplement this while others species simply find that gravity stands as a poor shackle to their physical forms either way, the species with this ability can fly as quickly as most cars, reaching speeds of one hundred and twenty miles an hour. Low density creatures can increase this speed to over five hundred miles per hour while beings with wings can increase their speeds by an additional fifty percent.",
  Swimming_Alt: "Swimming: While the species may not be the most agile or the most graceful, they can swim in any fluid with equal ease, at incredible speeds and have an resistance to fluid pressure. This ability does not protect the species from any adverse effects of the liquid itself, so acid, lava, radioactive waste etc. would still possibly kill or hurt the species without some form of protection. Regardless of how viscous the fluid is though, the species moves through it with little to no resistance and can move through the deep levels of an",
  X_Ray: "X-Ray: The species can see through solid matter though denser materials are resistant to this, making it hard until an item is too dense to see through. Hiding in the standard manner is powerless against such vision is extremely difficult.",
  Energy_Sight: "Energy Sight: The species can see the radiation of elemental energies. From heat or radiation to light and gravity, the species can see the ebb and flow of these energies as easily as a human can see fire.",
  Dark_Sight: "Dark Sight: The species can see perfectly clear even in the deepest natural darkness. Supranatural darkness is less effective, shortening the species field of view as though they were out in a full moon with no additional lights.",
  Sharp_Nails: "Sharp nails: The species grow natural, reinforced stiletto nails that can be used in combat to slash and gouge.",
  Pincers: "Pincers: The creature does not have nails or claws but instead has crustacean-like pincers that replace their hands or grow over their hands and wrists.",
  Retractable: "Retractable: The species can hide and reveal their claws like a cat or other predator. These claws may come from the nailbed of the finger or from anywhere beneath the elbow.",
  Paralysis: "Paralysis: Beings that lock eyes with a member of this species can be paralyzed entirely or in part. This may be lethal if a target's heart or lungs are paralyzed but often it is only capable of removing physical movement from the target while the creature stares into their eyes.",
  Petrification: "Petrification: The species can look upon organic matter and turn it to stone, though how quickly this transformation takes place varies.",
  Energy_Blast: "Energy Blast: The species can gather and unleash a single form of either terrestrial or celestial elemental energy through their eyes, directing the blast through their vision. The smallest burst of this gaze can be equivalent to a punch but greater applications are possible rivaling the destructive power of a bomb. Eyesight does drop considerably while this is in use however, details are almost impossible to make out without some form of superior eyesight.",
  Fangs: "Fangs: The creature has sharp, predator's teeth and a jaw that can apply heavy force when biting making their mouths formidable weapons.",
  Poison: "Poison: The creature has a means of corrupting the natural systems of a target, if they can bite and break the skin. This poison can be treated with medicine and",
  Sleep: "Sleep: The species has a means, be in special saliva or toxins in their teeth, that will make a target sleepy if they can bite and break the skin.",
  Thick_Hide: "Thick Hide: The species has tough, thick skin that is hard to penetrate without firearms or respectable strength.",
  Carapace: "Carapace: The species has bone plates that protect the creature, unlike a hide it is hard to maneuver with but offers superior protection to a Hide.",
  Exo_Skeleton: "Exo-Skeleton: The species has a durable outer shell that helps the species maintain shape and protect their insides. The creature can move at a reasonable speed and with ample agility.",
  Physical_Strength: "Physical Strength: The species is at the pinnacle of human development even before puberty, full grown adults are about ten times stronger than a human and those who exercise can be over one hundred times mightier than a human.",
  Social_Guile: "Social Guile: The species has an unprecedented talent for understanding non-verbal social cues and behaviors to nudge (but not control) the actions of others they speak, they can also avert suspicion from all but those who have superior intellect or social skills themselves. They can be leaders, tricksters, counselors etc.",
  Intellect: "Intellect: This species are universally geniuses. They obtain and process information quickly and efficiently on a level that puts supercomputers to shame. They can be science masters, tactical prodigies etc.",
  Dragon: "Dragon: The species is related to the mythical dragon, they can grow in size, gain the ability to breath elemental blasts, develop scales, wings, rending claws and a tail. They may develop one, a few or all of these traits.",
  Fairy: "Fairy: The species is descended from the fae, they can weave and resist illusions or deceptions, touch or build with dreams and emotions as they were a substance, grow tall with pointed ears or shrink down and flit about on wings made of gossamer and fantasia. Members of the species may develop one, a few or all of these traits.",
  Giant: "Giant: The species is descended from Giants. They possess great height and amazing physical attributes; phenomenal strength, endurance and durability. They can exist in any terrestrial environment and can grasp elements and build with them as though they were steel or any other tangible substance. Members of the species may develop one, a few or all of these traits.",
  Physical: "Physical: For a short time, this species can surpass physical limitations and summon a great amount of strength and might. They become faster, stronger and become more durable while in this state. They do not improve their mental capacity, so they may still be surprised by traps or ambush, they may be physically capable of doing a task but not know how to do it or cannot think quickly enough to react.",
  Healing: "Healing: The species has the ability to summon forth a burst of healing energy from within. This healing is fast and strong but not overly powerful. It will not take someone from death's door to unscathed but it will pull someone grievously injured back to a stable condition. If multiple members of the species use this ability, it can bleed out from them to encourage the healing of those around them even alien species. The more healing surges, the greater the healing effect for all involved perhaps it can even undo the adverse effects of aging without giving a longer lifespan.",
  Mental: "Mental: The species can overcharge their minds and conceive, perceive and achieve 'impossible' things. Their physical forms become their only limiter, they can see tiny details but only as far as their eyes can see, they can conceive intricate plans and plots but their bodies may not be up to the task, they can dream up and start a project but may not be able to complete building the object in the time they can still understand the complex formulas required to complete it. This is a controllable 'Eureka!' moment, a flurry of insight that burns bright and fast.",
  Arcane: "Arcane: The species has the ability to channel and cast magical energy, craft or weave spells and artifacts, see into a supraplane, interact with spirits or raise the dead into undead.",
  Psychic: "Psychic: The species has the mental capacity to influence the world around them. Reading the thoughts of others, conjuring dreams and giving them form, sparking the reactions in molecules and matter to freeze, burn, lift, toss or pilot them. They can even separate their mental capacity from their physical forms and exist as pure thought.",
  Ritual: "Ritual: The species draws power from rituals and observances to greater powers than themselves. Whether it be good, evil, divine, infernal, nature, personal, light, darkness etc.; the species follows customary practices, prays and offers respect and due diligence to the greater power and they are rewarded for it. They can perform miracles and magics, including transmutation of objects, raising the dead to their living state, create new life from seemingly nothing or possibly interact with space and time. Greater effects can be accomplished as more of the species works together in a greater ritual.",
  Quills: "Quills: The species has quills similar to a porcupine that may or may not retract. These quills are safely detachable and will regrow in a few days though if the species is capable of quickly healing, this could reduce the regrowth time substantially.",
  Increased_Speed: "Increased Speed: The species moves naturally with speeds comparable to a motorized vehicle, going tens of miles per hour. Some may even reach hundreds of miles per hour or faster.",
  Extended_Lifespan: "Extended Lifespan: The species is gifted with a long life, possibly hundreds of years or even thousands of years before reaching the end of their natural lifespans. With good living, excercise and anti-anging medicines this might even extend this further.",
  Regeneration: "Regeneration: The species is capable of healing faster and more completely than a human. They can reattach lost limbs or regrow them with nearly the same faculties as the lost one.",
  Naturebound: "Naturebound: The species has the ability to communicate with and command the obedience of plants, animals and insects.",
  Elastic_Form: "Elastic Form: The species has an extremely flexible and pliant physical form capable of stretching and other elastic deformation."
}

//Table 5: Populace Drawbacks 20
const populaceDrawbacks = [
    "Decreased Lifespan", "Missing Limbs", "Brittle Bones", "Impaired Endurance", "Failing Valor", "Debilitating Pain", "Allergy", "Environmental Sensitivity", "Plodding Pace", "Sluggish", "Light Sensitivity", "Enervated Form", "Infirm", "Stagnant Form", "Extraordinary Ability Condition", "Psychic Vulnerability", "Bio-Chemical Dissipation", "Elemental Suseptibility", "Impaired Sense", "Alternate Nutrtion"
];

//Table 6: Location Scope (Roll 1d6, match the result to the corresponding number)
const locationScope =  [
  "Hamlet (Two or Three Hamlets equal a Village)", 
  "Village (Two or Three Villages equal a Town)", 
  "Town (Two to Five Towns equal a City)", 
  "City (Three to Five Cities equal a City-State)", 
  "City-State (Two or Three City States equal a Region)", 
  "Region (Three of more regions equal a Nation)"
];

//Table 7: Military Quirks 20 in all
const militaryQuirks = [
  "All fights between equals are assumed to be to the death. Surrendering places the loser and their immediate family in the service of the winner for two years.",
  "A warrior's favored weapon is in all legal aspects their first child. For any subsequent children or descendents to claim an inheritance, they must defeat the warrior or a chosen champion who wields the favored, elder weapon.",
  "All combat must be sanctified by a priest who serves as a referee. The church recieves a fee for this service and can claim the bodies of the dead. In some cases, the church will raise the dead and conscript them into the holy army, severing the raised from their old lives entirely.",
  "One day of the week is so sacred and revered that it is an unforgivable sin to take a life on this day. Combat is permitted but should a life be taken, the punishment is brutally severe, no matter the circumstance and without exception.",
  "Armor cannot be worn if it will hide a combatant's face.",
  "A soldier cannot take the life of an animal, it is a disgrace to themselves, their weapon, their unit and their training. Only a hunter may kill a beast.",
  "A single weapon, both deadly and exotic, is wielded by the military to take lives. Any other weapon they wield is to beat, humble or humiliate their opponent.", 
  "The military's forces take the field dressed in make-up and gaudy medals that adorn their armor and uniforms.",
  "The only protection that warriors wear are runes that tell their story and mark their glorious victories of the past.",
  "A soldier can be called back from training and even the frontlines by their mother.",
  "The military is trained in a 'less is more' philosophy; their numbers are few but each individual soldier is much tougher than the average soldier.",
  "There is no standing military, the military is made of foreign mercenaries.",
  "Killing on the battle field nourishes both the weapon and wielder's souls. Without it, one remains an empty vessel.",
  "Soldiers cannot go to war without an heir and at least one sibling.",
  "Soldiers are first class citizens, earning top compensation. They are also afforded benefits and rights that other civilians do not get.",
  "Soldiers that get the blood of their enemies on themselves must go through a purification ritual to be counted among their people once again.",
  "The military forces live in a seperate sub-city and must hide their faces from civilians when in public.",
  "The military is made of a select sub-section of society, such as orphans or bastards, and raised by the state to be soliders, advisors and guardians.",
  "When joining the military, recruits agree to sign their body, even after death, to the state for research and experiments.",
  "The entire nation recieves mandatory training from ages sixteen to twenty and anyone not among the elderly may be drafted to fight."
];

//Table 8: Cultural Quirks 20 quirks 
const culturalQuirks = [
  "People may not speak to one another directly, they must speak through a proxy. To knowingly misrepresent someone's message is a cardinal taboo akin to cannibalism.",
  "When emotionally overwhelmed, the people speak in a seperate language only used in those emotional moments. To outsiders it is gibberish.",
  "Leaders are selected to greater council positions from eight to twelve years of age, lesser council positions from thirteen to eighteen and local leader positions from nineteen to twenty-nine. From the ages of thirty onward they are barred from positions of leadership but may take advisory positions.",
  "Stories are a quantifiable and tradable form of currency among these people.",
  "Without a certificate of graduation from advanced studies (high school equivalent), a citizen cannot be wed or hired as anything more than a trainee.",
  "The laws of the society are revised every year according to the direction that a sacred animal travels during a ceremony celebrating justice.",
  "If someone is unmarried after the age of thiry-four, they are banished from society.",
  "Forcibly pouring honey on someone is a grave insult and will result in a duel. If the offended cannot defeat the offender in an honorable duel, they must remain in the service of the offender for one year and a day.",
  "Unmarried men are permitted to carry weapons in public but cannot shave or trim their facial hair. Unmarried women that take up the soldier's life must shave their heads bald and grow a new warrior's mane.",
  "The society refutes a commonly accepted event, phenomena, theory or persona; from denying the existence of wind to the death of a celebrity.",
  "Outside of the ruling class, anyone eating meat must water fast for a week after the meal.",
  "Constructs are afforded equal rights to bio-forms within the borders of this society though the rights of the living dead are still under debate.",
  "Pets are so bound to their owners that they share a special language, can share extraordinary abilities, senses and can be counted as one person.",
  "The people of this society share a universal vice that can be used to manipulate or ruin them, though they hide it well.",
  "Music, instrumental or lyrical, will evoke extreme versions of whatever emotion it attempts. Love makes them passionate, dirges may end lives.",
  "The people believe that the founder of their society still lives but is in a deep slumber hidden from them and judging their worth as citizens.",
  "Married men must walk in front of their wives and her immediate family out in public, during holidays they are forbidden to speak in public as well.",
  "Ingesting pollutants (drugs, alcohol etc.) in a recreational manner is a crime and can result in forced binging, banishment or execution by overdose.",
  "Ritual scarring indicates what caste a person is born into while temporary plant based tattoos indicate a person's current status wihtin the society.",
  "Visitors are given a wreath of fresh flowers when staying within the society. They are forgiven legal indiscretions and given patient explanations of the laws. If they have been poor guests, the visitor is held accountable for all legal infractions and can be banished once the flower wreath wilts. Good guests remain forgiven for infractions in the past but held accountable for new crimes if any."
];

//Table 9: Leadership Quirks 20 quirks
const leadershipQuirks = [
  "Once every seven years candidates for leadership gather together and in an olympic like competition of administrative duties prove themselves as capable leaders.",
  "The word of performers carry so much weight that an endorsement from a hot star can almost guarentee a position of power while a satrical piece can almost ensure removal from an office or throne.",
  "The leader must undertake a quest on behalf of the nation every three years. If they cannot complete the quest or are physically unable to undertake the quest, they must hand over power to their heir who must complete the quest to succeed the leader.",
  "While people believe that they know who their leaders are, it is actually a secret power that steers the leadership.",
  "Social programs have been set up that push funds from the top of society down to the bottom, making the rulers popular with the people but this is rapdily draining the society's coffers.",
  "Guests of the leaders of this society can make declerations that carry the same weight as their hosts.",
  "The ruling class are avid hunters and have placed limits and laws specifically to preserve animals they hunt and fit their hunting schedule.",
  "The ruling class has created a sub-ruling class made of body doubles and relatives to supplement their power, enhance their reach and defend them.",
  "The ruling class go out into public appearances only on holidays and the start of new seasons.",
  "At the start of the year a random member of the ruling class is stripped of their title and holdings and must live as a commoner for a full year. If they give up, they permanently lose thirty percent of their resources but regain their lost position. If they succeed, they are given all of their old resources plus an additional fifty percent added on and make a decleration that is usually passed into law.",
  "When meeting face to face, the ruling class must wear masks as no commoner may view their full majesty.",
  "The order of birth does not dictate inheritance. The Passing Cup, a tournament held by nobles, handles those matters.",
  "Members of the ruling class enter a familial tournament every decade of the current leader's reign. Five winners are selected from the competitors. The first place winner is the new heir and may immediately attempt to claim power in a special election. The other four are given positions of power while the other competitors are banished.",
  "The ruling class maintains three open seats on the ruling council at any given time that are available for purchase. Foreigners may purchase one seat per nation at thirty times the local price. Locals purchasing a seat may hold the seat for up to five years while foreigners must repurchase the seat every year.",
  "Only the ruling class is educated in mystical arts and mysteries. Any commoner caught wielding these forbidden techniques is adopted by a noble family while their birth family is punished harshly.",
  "The ruling class can only marry from within their society's populace. Any outside marriage and the offending noble must abdicate their position and will have to imbide a potent memory wiping potion.",
  "Each member of the ruling class is guarded and accompanied at all times by a dangerous creature that they raise from its birth. When the animal companion dies, an annual day of mourning is declared.",
  "When a member of the ruling class dies, any money in excess of what is spent on funerary ceremony is passed down to the commoners of their society.",
  "The ruling class always die at the age of sixty five. The age of sixty four is spent putting their affairs in order before honorably ending their lives before the end of their sixty fifth year.",
  "The ruling class has tied their lives to the health of the nation. As it grows strong and robust, so to does the noblitiy."
];

//Table 10: Superstitions 20 quirks
const superstitions = [
  "Never allow a parent that has lost their child to look your child in the eyes or they will steal the child's soul and use it to bring a cursed clone to life.",
  "A child cannot sleep away from their parents for the first three years of their life or an apparition will steal them and leave a shadow copy.",
  "When a marriage ends each party must marry an animal to clear any curses or lingering negative energy from their ex. During the honeymoon, they must sacrifice their new beastly partner to the family of their ex-spouse. This will purify them and allow to remarry clean of any ill-wishes.",
  "No one can be outside at midnight on the night of a new moon or they will disappear for one hundred years.",
  "Before undertaking any major project, all people and tools involved must bathe thoroughly in alcohol and purified, holy water to banish all evil spirts and gremlins.",
  "The firstborn of two firstborn parents will grow to be a criminal.",
  "Should any but the enlightened ones ingest the sacred, forbidden herbs and plants they will suffer visions that will drive them to insanity and death.",
  "An item held in the possession of a person for more than a year becomes a part of their essence and a part of them.",
  "If a person goes to bed three times with an empty stomach, on the third daym they will birth a famine spirit that breaks things and eats their essence. This ravenous spirit grows stronger if the being that gave them life dies of starvation.",
  "The twin headed rose is lucky when plucked in the summer but can bring it's owner death if accepted in the winter.",
  "If a threat is made against you, knock on bone to ward of bad luck and ill-intent.",
  "An owl seen during the day means that a predator in the shape of a person lingers near.",
  "A salamander tongue, removed from a male salamander by a pregnant woman, placed under the bed of a baby while it sleeps makes the child invisible to demons and protects them from nightmares until the tongue dries out.",
  "If a criminal asks for forgiveness and is denied nine times, they will come back from the dead as a Hangman's spectre.",
  "If a widow looks into her reflection within a fortnite of a spouses death, they may speak for one night with the departed but it will cost them one year of their life.",
  "The number nine is unlucky, a gathering of nine invites the dead to join to round the number to ten.",
  "Odd number groups are auspicious and blessed when bound together.",
  "No man can kiss a canine, to do so invites the wrath of a Bloodwolf-an insatiable and unerring hunter who will kill him and his family. Only a cat, blinded by its mother, released at high noon can defend against and chase off this otherwise implaccable foe.",
  "If you spill ground cinnamon, you must pour saltwater on it and sing a funeral dirge to avoid being cursed with bad luck.",
  "The frostsnare butterfly boasts luxurious crystal latics wings that sound like rapping tapping on a snare drum. If it lands on you and plays a 'solo', you have heard the Progenitor's medley and will be a parent soon. If it lands on you and is silent, it means death will touch your life very soon."
];

//Table 11:
const landscapeFeatures = ["The giant looming carved figure, shaped roughly like a beast of myth and legend, helps the local populace tell the passing of time and bleeds an ichor that serves as excellent albeit unstable fuel and fertilizer.",
"The heart of On-Ten, a giant caldera to an active undersea, that is just above the sea level and the size of an island.",
"Forest Trees are massive columns that have entire forests growing within their inner walls, beneath the bark.",
"Tic Tac Torrents are twin jetstreams that rise up, arc and cross over twin descending waterfalls that falls from a mountain that stretches as far as the eye can see.",
"Season sprouts; plants that create seperate and suitable environment for locals. From grasslands to trees, the larger the Season sprout the wider it's area of influence and the longer this generated enviorment will maintain.",
"Eastern continental twin landmass in the sky, caught in the orbit of a suspended meteor.",
"Man's Might Mountain range: Mountains formed not by tectonic plates and earthquakes but people.",
"Sanguine Sea: A sea where a maritime battle  was staged, the marines were taken by such bloodlust that no one survived and the sea has been blood tinged since.",
"Magma scabs: Craters where meteors hit with such impact that scars of open magma opened in the land but had a layer of oil and earth supercool quickly over it making magma pockets where torn earth can reveal active magma flow.",
"Tomb City: A specialized necropolis where only the chosen are allowed to be buried.",
"Lightning Gardens: Ionic disruption caused by minerals that are cultivated to craft particular discharges of electricity, such as a tree shaped St.Elmo's fire.",
"The Hollow Hearld: A massive arc that was mostly taken apart to serve as the foundation for the first local colony. The unused parts of the shell remain as an impressive feat of ancient ingenuity.",
"The Immortal's Ring: A colosseum where legendary battles once took place regularly, the ground itself can raise the bloodlust of even staunch pacifists. Sometimes the echoes of combat still resound from the 'ring' and new trophies will appear to line the wall.",
"Terran crown: A worldwide, circular mountain range made up of shifting elemental aspected crystals and minerals.",
"Daylight Woods: A forest where every tree, plant, fruit and beast emits a bioluminescent glow of varying intensity.",
"Yesterday's Graveyard: An island chain made of the calcified remains of long dead creatures.",
"Liquid Diamond Mines: Natural pools and lakes of liquid minerals, such as diamond or ruby, that lead down to cavern rivers and grottos. In larger pools, this liquid can evaporate and cause localized mineral rainstorms.",
"Shattering Sky: Due to aberrant gaseous dispersal in the atmosphere, or a curse, during the sunset the sky looks to crack and fracture like a broken glass pane until the sun goes down.",
"Enmity Growth: Plants that look like emasciated people until they absorb water and engorge. The plants then appear to emit vitality and look to the untrained eye like a person. They are brittle when dry but this material serves as excellent lumber when engorged and harvested. The engorged tree oozes a blood-like sap when being cut and the unprepared can walk away from the experience feeling like they have killed someone rather than harvested a plant.",
"The Choir: Pockets in the landscape of a windy but barren location that creates complex musical sounds as the wind passes through holes, pockets and divets."
]

//Table 12: 10 tech levels
const technology = [
  "Stone Age: A primitive, proto-society using beasts, muscle and fire to fuel them. There is no means of communicating past vocal range and tools are made of stone, bone and plants.", 
  "Bronze Age: In this age, nations and metalworking rise. Clay pots for storing food also serves as a source of art and passing on stories, worked soft metals like copper and bronze are made into tools and equipment. The people can settle in areas and take professions other than hunter or gatherer.", 
  "Imperial Roman Age: Sciences and intellectual pursuits have grown along with technology to allow for more sophisticated civilizations can cover an entire region and not just a single city, warfare has evolved with hard metals and strong defenses.", 
  "Middle Ages: With the collapse of the centralized power, new smaller kingdoms have taken root and begin to grow. The sophisticated, advanced ideas and technology of the fallen empire that was once at the center of the civilized world fades, new answers to old questions are discovered and old answers are to be rediscovered. The smaller kingdoms carve up their land holdings among lesser noblemen. Heavy armored soldiers with horse, sword and lance face off against heavily fortified locations and powerful bows and occasionally simple guns.", 
  "Steam Age: An age of rebirth and enlightenment seeing the birth of new schools of thought, new approaches to problems and daring experiments become the keys to unlocking new answers. It is not divine mysteries that hold truth but science and for the living to know the world they must explore it. Ships take to longer voyages, guilds rise into corporations, gunpowder weapons overtake bows and make armored forces obsolete.", 
  "Industrial Age: Science's reach has expanded to grasp hold of the energy found in nature. Steam and electricity break down barriers. Travel by railroad and communication by telegraph, then radio and telephone become possible. Steam powered ships make intercontinental travel more accessible for more common people allowing them to travel and settle in new lands. Metropoli return as urban living becomes more standardized, trade is good and bring with it jobs. Planes and seafaring ships as well as submarines allow for exploration and domination of land, sea and sky. Awful chemical weapons, sure fire rifles and pistols plus machine guns enter into the fray and change the face of war.", 
  "Atomic Age: Nuclear energy feeds the energy needs of cities and the infrastructures of regions, factories and manufacturing create jobs that financially empower the working class. Corporations grow in power and become sub-governments in their own right while jet-engine powered planes and the internet break down distance and borders between people. Space exploration becomes possible but in short distances to local satellites. War enters automation as well, drones and computer targeting programs make killing from a long distance easier and easier. The nuclear age brings the nuclear bomb and other weapons of mass destruction.", 
  "Colony Age (Solar System): Technological advancements in medicine, agriculture and other fields give longer lifespans and support denser and denser populace in the cities. In an effort to alleviate strain on the nations and the people, extraterrestrial colonies are built allowing the first generation to live off world. Virtual reality programs and systems are used to test theories for off-world sites and technologies, and other planets and satellites are being terraformed or have already begun colonization within the solar system. Mega-Corporations have risen to become recognized national entities and nations that have been long time allies combine to become World nations. Advanced robotics take to work sites and the battlefield making those fields proxies of large powerful entities.", 
  "Gateway Age (Intergalactic System): The species can now use a controlled means of traveling through portals or gates from one part of the known universe to another almost instantly. Entire planets are colonized and the reach of the species is now beyond their own solar system and into greater and further stars of their galaxy. Certain greater powers have control over the space faring colonial stations and planets of solar systems. Stars are tapped for energy, asteroids are mined for resources and off-shoots of the species may have never seen the seed world their ancestors sprung from. Major conflicts between powers are handled by star-fleets and space naval conflicts, most workers and combatants are still automated proxies but the occasional biological soldier that fights is routinely augmented to the task by either mechanical or biological means. Combustion weapons are relics, replaced by bulky elemental casters and laser-based technology. Armors are strange patterns of elemental refractory pieces to diffuse the brunt of incoming attacks and are available for civilian use. Gravity and other celestial energies have been harnessed to allow even local transports to move at incredible speeds and with equal precision. ", 
  "Energy Age (Hyperspace): Intergalactic travel is controlled and the reach of the greatest powers bleed through multiple solar systems and entire galaxies can fall under the protective dominion of a single flag. The gateways that connect star systems in the past have been refined, working on smaller scale and allowing for domestic travel gates on planets and in colonies. Teleportation phenomena have revolutionized transport between the furthest reaches of dominions. Conflicts between powers are negotiated when possible but planet devastating weapons make this the prefered method akin to the terrible force of the nuclear weapons of a bygone age. The members of the civilized areas are idealized either by genetic manipulation or technological means and peacekeepers or soldiers that are not proxy-soldiers are armed with personalized power that can be hailed as 'magical' in the ease that they can manipulate, generate or eliminate elemental, spatial, entropic, technological and biological phenomena. The only direction left for this civilization is down."
]

//Table 13: 20 kinds of govern
const government = [
  "Anarchy/None: There is no recognized authority.", 
  "Hive Mind: A unified consciousness in which each 'individual' shares thoughts and form a collective intelligence. One is all. All are one.",
  "Confederation: Individual organizations allied together under a treaty that give some of their power to a weaker central government that provides for all involved. The organizations maintain control of themselves however.",
  "Plutocracy/Megacorporation: Authority rests with the wealthiest members of society.",
  "Democracy: Authority is invested to elected officials by the populace.",
  "Colony/Puppet State: Authority flows from the parent nation that owns the colony to a local governor who runs the colony as they see fit.",
  "Feudal: Authority flows from a monarch down to nobility who gains land rights in exchange for military service to the throne.",
  "Criminal Empire: Authority is held by the head of a crime family with lieutenants serving governors in parts of the bosses territories.",
  "Technocracy: Authority is held by technological experts and backed by the advanced creations they can bring to bear.",
  "Tribe/Clan: Authority is held by a recognized patriarch or matriarch of a large system of family and extended family.",
  "Theocracy: Authority is held by the clergy who serve as the 'living instruments of their Divine patron's will'.",
  "Dictatorship: Absolute authority is held by a single individual or clique of people through which all power and decisions flow.",
  "Republic: The authority is held by representatives of the people",
  "Matriarchy: Women hold authority and wield the majority if not all political power.",
  "Patriarchy: Men hold authority and wield the majority if not all political power.",
  "Oligarchy: A small group of powerful exploiters hold all privilege and power.",
  "Monarchy: Power is invested by right to a single leader of a family line who may or may not choose to share power and privilege.",
  "Triumvirate: A political group in which three leaders share power and authority of the nation.",
  "Socialist State: Authority is held by the central government, as does ownership of all means of production for goods. Some occasional private forms of distribution or production are allowed with proper oversight but the government ultimately owns all things and provides for the people all services and goods they require.",
  "Regency: A selected stand in for a monarch while they cannot fulfill their obligations because of age or infirmary with power limited by law and often an oversight council."
]

//Table 14: 20 industries
const definingIndustries = [
  "Academic: Sources of knowledge are sold, scrolls and manuals. Teachers and tutors can sell of their skills as well, though sharing too many secrets can cut away at the intellectual advantage that these people hold.",
  "Agricultural: Whether using advanced farming techniques or blessed with amazing fertility in their harvest yield, the society grows an abundance of food that is sold to others. The society may comfortably feed itself as well as a society one size larger, 1d4 societies smaller or 1d8 societies that are two sizes smaller than itself.",
  "Exploration: These people are skilled at finding safe paths through the unknown and hire out their services as scouts and navigators.",
  "High End Craft: Goods and art that are unique, intricate and labor intensive. These works are almost universally masterpieces and fetch such a high price individually that enough money is pulled in from their sale and taxation that the society can thrive. They are patronized by one society larger or 1d4 x2 societies smaller than itself.",
  "Common Craft: Goods and art that are universally in demand but time consuming to make are mass produced. This society can provide goods that are simple or basic like rope, basic clothing or simple furniture for themselves and a society one size larger than them, 1d3 societies smaller or 1d6 areas two sizes smaller than itself.",
  "Transport: These daring folk will move good or people from one place to another safely and efficiently. Perhaps they are the only means of travel between landmasses or the only people willing to ferry certain goods (i.e smugglers).",
  "Advanced Technology: This society boasts a technological superiority to their contemporaries. They keep to themselves the secrets of how to make equipment, weapons or tools that are one technology level higher than those around them and they can sell 'old models' that are still high-end and hard for other societies to reverse engineer. ",
  "Common Technology: This society is a manufacturing hub for the technologies that people are using currently. They are not limited to one field, boasting deals with several guilds and their artisans to provide tools that people use daily.",
  "High End Trade: The merchants of this society cater to high end clients, such as nobility or the extremely wealthy. While they sell niche and unique goods, their clients pay so much for each deal that with sales, taxation and donations the society is able to thrive.",
  "Common Trade: This is a society of merchants and guilds, a market hub. They spread out to every place they can reach selling simple, basic goods and wares to as wide a consumer base as they can.",
  "Entertainment: Performers of song, stage; masters of athletic and martial prowess; the people of this society travel to certain places in troupes or teams to different locations to provide rousing shows to the joy of loyal fans.",
  "Leisure: An oasis or hub for weary or wounded travelers to recuperate and relax. The people of this society base their professions around targeting visitors with local goods and customs to buy and carry back to their homes in hopes of luring more visitors or returning customers.",
  "Medical: The medical sciences of these people get results. They can provide medical treatment one technology level higher than others and when healing can add a small bonus to how much is recovered.",
  "Military: The armed forces of this society serves as the standard that other mercenaries and fighting forces are judged. The mercenary companies that come from here do not fight one another in lethal combat but if fielded against each other may use non-lethal means such as negotiation or subdual weapons. They also make enough money that through sale, taxation and donations the society thrives.",
  "Intelligence: The field of espionage is where this society makes their money. Special agents are hired out to serve as intelligence officers, spy masters and cultural attaches for other places. This society protects its own secrets and has their own means of hiding the truth of their espionage guilds from others. A secret code is shared among their community to ensure that conflicting intelligence agents do not interfere with one another as a professional and civil courtesy or possibly because of the law.",
  "Raiding: It is not their own businesses that fund this society but their ability to raid others and take what they need. The raiders may be infamous and feared but they are successful during their raid seasons and continue to keep the society provided for.",
  "NoneNone: These people may be okay at a number of fields but not great at anything. They may be a self-sufficient society that does not engage in wider trade.",
  "Banditry: The people of this society make their money by attacking travelers, merchants and the unsuspecting on the roads and lands outside of their borders. It is not a crime in their eyes to take from others, it is a crime to inflict this behavior and tactic on neighbors within the community.",
  "Piracy: Like bandits on the sea, the people of this society prowl the waterways and open sea to plunder travelers, merchants and unsuspecting vessels for their goods and wares then sell them to others and fuel their homeland's economy by sending their profits back home.",
  "Research: This society is full of educated people who continue to push boundaries through research into any number of areas not limited to science, arcanedemia, theology and ritual fields. Their research uncovers new methodologies and makes current practices more efficient. Their research can improve a single field for another society by increasing their results or increasing the effects of magics."
]

//Table 15:
const virtuesVices = [
  "Courage: The people of this society are known for their ability to overcome fear and take action when it is necessary.",
  "Addiction: This society is known for a powerful addiction that grips them.",
  "Spiritual: The people of this society are known for their devotion to a higher power and pursuits of transcendental rather than material.",
  "Cowardice: As a whole, the people are viewed as unable to face danger, fear or adversity.",
  "Materialistic: The people of this society are concerned with the tangible and wealth, what they can have and hold rather than the ethereal.",
  "Temperate: The people are renowned as disciplined and even-tempered even in the face of terrible danger.",
  "Witty: Seen as clever and amusing people capable of quick, sharp retorts.",
  "Pacifistic: The people are seen as peaceful and opposed to bloody conflicts.",
  "Tyrannical: The people are renowned for being oppressive, calculating and controlling.",
  "Honest: The people are known for being open, sincere and forthcoming.",
  "Melancholy: The people have a reputation for being lost in sorrow and gloomy.",
  "Benevolent: The people of this society are known for kindness and well meaning charity.",
  "Xenophilic: The people are known for being open and receptive to dealing with foreigners, even attracted and enamored with their cultures and people.",
  "Deceptive: The people have a reputation for being untrustworthy and tricky.",
  "Decadent: The people are marked as suffering a decline in moral, mental and societal standards.",
  "Gentle: The people of this society are reputed to be merciful and lenient in their behavior with others.",
  "Confrontational: The people have a reputation of being aggressive and hostile with others.",
  "Xenophobic: The people are seen as closed off and prejudiced against foreigners, even directing violence and undue agression towards anyone they see a different.",
  "Industrious: The people are known for being hard-working and determined.",
  "Cruel: The people are reputed to willfully cause pain to others indifferently, engaging in vicious behavior to others."
]


// ===================== Code SECTION =====================================

//console.log (populace[5])

let setState = {
  zoneDetail: "",
  physicalDetail: "",
  extraDetial: ""
};

const randN = (x) => {
    let min = 0,
        max = x,
        num = Math.floor(Math.random() * (max - min) + min);
        return num;
    // console.log(score);
};

const zoneMagic = (z) => {
  if (z == setState.zoneDetail) {
    theZoneDetails.innerText = "";
  } else {
    setState.zoneDetail = z
    theZoneDetails.innerText = zones[z]
  }
};

const physicalMagic = (z) => {
  if (z == setState.physicalDetail) {
    thePhysicalDetails.innerText = "";
  } else {
    setState.physicalDetail = z
    thePhysicalDetails.innerText = physChara[z]
  }
};

const extraMagic = (z) => {
  if (z == setState.extraDetial) {
    theExtraDetails.innerText = "";
  } else {
    setState.extraDetial = z
    theExtraDetails.innerText = extraordinaryTable[z]
  }
};

const whereUFrom = (y) => {
  num = y // right now this does nothing but it will dictate how many featured locations there are. 
  first = randN(8)
  climate1 = climate[first]
  mainZones = []
  landFeats = landscapeFeatures[randN(20)]
  scope = locationScope[randN(6)]
  searcher = climate[8][first].trim().split(" ");

  theWorld.innerText = "Your World is a " + climate1 + " world. ";
  if (searcher[0] === "Choose") {
    mainZones.push("Choose as you see fit!")
  } else {
      theZones.innerHTML = searcher.map(zon => 
        '<button class="brick" onclick="zoneMagic(' + `'${zon}'` + ')">' + zon.replace(/_/g, ' ') + '</button>'
        ).join('');
      thePlanet.innerHTML = searcher.map(zon => 
        '<p class="planet">' + `${zon.replace(/_/g, ' ')}` + '</p>').join('');
  };
  // theZones.innerText = "The main Climate zones of your " + climate1 + " world are:"  + "\n" + climate[8][first].replace(/ /g, ', ') .replace(/_/g, ' ');
  theLandFeats.innerText = "A feature landscape of their " + scope + " is " + landFeats;
  theLocalScope.innerText  =  "Right now their civilization fits on a " + scope;
};

const whoBeHere = (a)=> {
  pop = a
  if (a == true) {
    populace1 = populace[randN(10)];
    thePopulace.innerText = "The people are " + populace1 + " in size \n" + "(" + sizes[populace1] + ")";
  }
  
  physicalNum = randN(20)
  extraordinaryNum = randN(20)
  physChar = physicalCharacteristics[physicalNum];
  physSearch = physicalCharacteristics[20][physicalNum].trim().split(" ");
  extraOrdAbil = extraordinaryAbilities[extraordinaryNum];
  extraSearch = extraordinaryAbilities[20][extraordinaryNum].trim().split(" ");
  drawBacks = populaceDrawbacks[randN(20)];

  thePhysical.innerText = "A interesting physical feature they possess are " + physChar;
  thePhysicalButtons.innerHTML = physSearch.map(fysical =>
    '<button class="brick" onclick="physicalMagic(' + `'${fysical}'` + ')">' + fysical.replace(/_/g, " ") + '</button>'
    ).join('');
  theExtra.innerText = "These people also possess " + extraOrdAbil;
  if (physicalNum < 14) {
    theExtraButtons.innerHTML = extraSearch.map(extra => 
      '<button class="brick" onclick="extraMagic(' + `'${extra}'` + ')">' + extra.replace(/_/g, " ") + '</button>'
    ).join('');
  }
  theDrawBack.innerText = "Unfortunitly they suffer from " + drawBacks;
};

const whatTheyBelieve = () => {
  techno = technology[randN(10)]
  industrial = definingIndustries[randN(20)]
  govern = government[randN(20)]
  leadership = leadershipQuirks[randN(20)]
  military = militaryQuirks[randN(20)]
  culture  = culturalQuirks[randN(20)]
  superstition = superstitions[randN(20)]
  viceOrVirts = virtuesVices[randN(20)]

  theTech.innerText  = "The peoples technological level is " + techno;
  theIndust.innerText = "Their definitive Industry is " + industrial;
  theGovern.innerText = "Their form of Government is " + govern;
  theLeaderQ.innerText = "The leaders of your people follow " + leadership;
  theMilQuirks.innerText = "Their military beliefs way heavy on " + military;
  theCultQuiks.innerText = "Their have adopted " + culture;
  theSupersti.innerText = "A odd belief has spread in this sociaty " + superstition;
  theVice.innerText = viceOrVirts;

}

const generate = () => {
  whereUFrom()
  whoBeHere(true)
  whatTheyBelieve()
};

