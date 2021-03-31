// Okay This will be a culture generator
// Now lets turn the first five into a working thing!


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
      0: "Ice Cap, Boreal, Temperate, Dry, Tropical",
      1: "Temperate, Dry, Tropical, Torrid, Molten",
      2: "Boreal, Temperate, Dry, Tropical, Torrid",
      3: "Hyperborean, Ice Cap, Boreal, Temperate, Dry",
      4: "Frozen, Hyperborean, Ice Cap, Boreal, Temperate",
      5: "Torrid, Molten, Molten, Molten, Molten",
      6: "Frozen, Frozen, Frozen, Frozen, Hyperborean",
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
    "Head Variants", "Arm Variants", "Leg Variants", "Eye Variants", "Ear Variants", "Tongue Variants", "Mouth Variants", "Skin Color Variants", "Skin Texture Variants", "Hand Variants", "Animal Forms", "Extra Organs", "Extreme Appearance", "Non-Solid Form", "Tail", "Wings", "Chynerid", "Proxy Sense", "Long Limbs", "Fins"
];

// For Table 3

//Table 4: Extraordinary Abilities 20
const extraordinaryAbilities = [
    "Carrier", "Enhanced Senses", "Environmental Adaptation", "Expert Athelte", "Alternative Mobility", "Sight Variants", "Claw Variants", "Gaze Variants", "Bite Variants", "Natural Defense", "Superior", "Legendary Atavism", "Surge", "Adept", "Quills/Barbs", "Increased Speed", "Extended Lifespan", "Regeneration", "Naturebound", "Elastic Form"
];

//Table 5: Populace Drawbacks 20
const populaceDrawbacks = [
    "Decreased Lifespan", "Missing Limbs", "Brittle Bones", "Impaired Endurance", "Failing Valor", "Debilitating Pain", "Allergy", "Environmental Sensitivity", "Plodding Pace", "Sluggish", "Light Sensitivity", "Enervated Form", "Infirm", "Stagnant Form", "Extraordinary Ability Condition", "Psychic Vulnerability", "Bio-Chemical Dissipation", "Elemental Suseptibility", "Impaired Sense", "Alternate Nutrtion"
];

//Table 6: Location Scope (Roll 1d6, match the result to the corresponding number)
const locationScope =  [
  "Hamlet (Two or Three Hamlets equal a Village)", "Village (Two or Three Villages equal a Town)", "Town (Two to Five Towns equal a City)", "City (Three to Five Cities equal a City-State)", "City-State (Two or Three City States equal a Region)", "Region (Three of more regions equal a Nation)"
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
const nameName2 = [
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
const nameName5 = []

//Table 12:
const nameName6 = []

//Table 13:
const nameName7 = []

//Table 14:
const nameName8 = []

//Table 15:
const nameName9 = []

let phys = {
  Head: ["Extra", "Cosmetic", "Combat"]
}

// ===================== Code SECTION =====================================

//console.log (populace[5])

const randN = (x) => {
    let min = 0,
        max = x,
        num = Math.floor(Math.random() * (max - min) + min);
        return num;
    // console.log(score);
};

const generate = () => {
  first = randN(8)
  climate1 = climate[first]
  populace1 = populace[randN(10)]
  physChar = physicalCharacteristics[randN(20)]
  extraOrdAbil = extraordinaryAbilities[randN(20)]
  drawBacks = populaceDrawbacks[randN(20)]
  scope = locationScope[randN(6)]

  console.log("Your World is " + climate1 + ": " + climate[8][first])
  console.log("Your people are " + populace1 + ": " + sizes[populace1])
  console.log("They have a " + physChar)
  console.log("Their extra ordinary Ability is " + extraOrdAbil + ". But they have the " + drawBacks + " Drawback.")
  console.log("These beings live in a " + scope)

}

generate()