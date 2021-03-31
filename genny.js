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

//Table 7: Military Quirks
const nameName1 = []
//Table 8:
const nameName2 = []

//Table 9:
const nameName3 = []

//Table 10:
const nameName4 = []

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

  console.log("Your World is " + climate1 + ": " + climate[8][first])
  console.log("Your people are " + populace1 + ": " + sizes[populace1])
  console.log("They have a " + physChar)
  console.log("Their extra ordinary Ability is " + extraOrdAbil + ". But they have the " + drawBacks + " Drawback.")

}

generate()