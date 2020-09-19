function Monster(name, location, image, entry) {
  this.name = name;
  this.location = location;
  this.image = image;
  this.entry = entry;
}

function getMonster(name) {
  return monsterList[name];
}

var aqrabuamelu = new Monster('Aqrabuamelu', 'Mesopotamia', './monster_images/aqrabuamelu.jpg',
  "These scorpion men have the head and torso of a man and the body of \
  a scorpion (giant, presumably deadly, stinger included). In the Epic of Gilgamesh \
  they guard the gates of the sun god.");

var baba_yaga = new Monster('Baba Yaga', 'Eastern Europe', './monster_images/baba_yaga.jpg',
  "Baba Yaga, often depicted as a ferocious old woman, lives in a hut on chicken legs \
  and flies around in a mortar while wielding a pestle. Depending on the story, she \
  may help you through the forest or eat your children, so if you go looking for her, \
  be ready for Russian roulette in the Russian wilderness.");

var banshee = new Monster('Banshee', 'Ireland', './monster_images/banshee.jpg',
  "A banshee's appearance may be frightening- deathly pale, cloaked, and red-eyed- \
  but her mournful wail is what really ups the fright factor. According to legend, \
  hearing a banshee's cry heralds the iminent death of a family member.");

var basilisk = new Monster('Basilisk', 'Europe', './monster_images/basilisk.jpg',
  "The first recorded mention of the basilisk, a venomous snake with a lethal gaze, \
  was written by Pliny the Elder in Greece in 79 AD. You might remember it better \
  as the massive evil snake living under Hogwarts in Harry Potter and the Chamber of Secrets. \
  To breed at home, simply hatch a toad egg under a rooster (ideally after getting any earthly \
  affairs in order).");

var bigfoot = new Monster('Bigfoot', 'North America, Himalayas', './monster_images/bigfoot.jpg',
  "Called Bigfoot or Sasquatch in North America and the Yeti or Abominable Snowman in the \
  Himalayas, this giant, hairy, bipedal ape is a favorite among cryptid enthusiasts.");

var black_shuck = new Monster('Black Shuck', 'East Anglia', './monster_images/black_shuck.jpg',
  "Sightings of a giant black dog with glowing red eyes in East Anglia led to the legend \
  of Black Shuck, a demonic omen of death often accompanied by thunder.");

var bogeyman = new Monster('Bogeyman', "Children's closets", './monster_images/bogeyman.jpg',
  "You might remember seeing a bogeyman out of the corner of your eye as a child. They take \
  many forms and are native to any home with children, where they enjoy scaring the living \
  !*$# out of said children as an incentive for eating vegetables and going to bed on time.");

var chimera = new Monster('Chimera', 'Greece', './monster_images/chimera.jpg',
  "According to the venerable Ancient Greeks, the chimera was a fire-breathing lioness with \
  a goat's head in the middle of her back and a snake's head for a tail. Biological improbability \
  aside, it terrorized Lycia before being shot down by the hero Bellerophon on Pegasus.");

var chupacabra = new Monster('Chupacabra', 'Central America', './monster_images/chupacabra.jpg',
  "The chupacabra is something of a rising star in the monster community. First reported in Puerto Rice \
  in 1995, it's since been sighted throughout Central America and the southern United States. The size of \
  a small bear with a row of spines down its back, the chupacabra drinks the blood of livestock.");

var dybbuk = new Monster('Dybbuk', 'Jewish', './monster_images/dybbuk.jpg',
  "In Jewish mythology, a dybbuk is the malicious displaced soul of a dead person that \
  possesses a living host to complete unfinished business.");

var goblin = new Monster('Goblin', 'Europe', './monster_images/goblin.jpg',
  "Goblins are common villains in European folklore. Generally small and grotesque, they like gold, \
  jewelry, and mischief and usually have magical powers similar to fairies or demons.");

var golem = new Monster('Golem', 'Prague', './monster_images/golem.jpg',
  "A dim and obedient automaton from Jewish mythology, golems are made of clay and typically \
  brought to life by a rabbi. They usually do chores and obey their maker, and only occasionally \
  go on a murderous rampage. The most famous example is the Golem of Prague, created in the 16th \
  century to protect the Jewish ghetto from anti-Semitic attacks.");

var gorgon = new Monster('Gorgon', 'Greece', './monster_images/gorgon.jpg',
  "'Gorgon' usually refers to one of three monster sisters: Stheno, Euryale, and Medusa. \
  Although Medusa is the most famous, all three have venomous live snakes for hair and can \
  turn people to stone with a glance.");

var gremlin = new Monster('Gremlin', 'England', './monster_images/gremlin.jpg',
  "First mentioned by pilots in the Royal Air Force in the 1920s, gremlins are goblin-like \
  critters blamed for inexplicable mechanical failures among aircraft. Stories of gremlins \
  were common throughout World War II, and they were the bane of the RAF during the Battle of Britain.");

var jorogumo = new Monster('Jorogumo', 'Japan', './monster_images/jorogumo.png',
  "The jorogumo is a monster or demon of Japanese folklore that takes the form of a beautiful \
  young woman to entice its victims. The honeymoon period ends abruptly when the creature reveals \
  its true form- a giant spider. Not-so-fun fact: the arachnophobic author of this guide will have \
  so many nightmares tonight.");

var kelpie = new Monster('Kelpie', 'Scotland', './monster_images/kelpie.jpg',
  "This Scottish water spirit looks like a black horse but can also take human form. It likes to \
  lure people onto its back and jump into its loch or river to drown them. Not to be confused with the \
  dog breed of the same name, which is probably a good boy.");

var loch_ness_monster = new Monster('Loch Ness Monster', 'Loch Ness, Scotland', './monster_images/nessie.jpg',
  "Affectionately nicknamed 'Nessie,' the Loch Ness Monster is a long-necked aquatic creature with a huge \
  fanbase. Not particularly dangerous despite her dinosaur-like appearance, Nessie is very shy, which explains \
  her lack of good pictures.");

var ogre = new Monster('Ogre', 'Worldwide', './monster_images/ogre.jpg',
  "Ogres are huge, ugly monsters with incredible strength and a taste for human flesh. They appear \
  in myths and folklore around the world and seem to prefer eating infants and children. One notable \
  exception to the child-eating lives in a Dreamworks swamp and sounds remarkably like Mike Myers.");

var oni = new Monster('Oni', 'Japan', './monster_images/oni.jpg',
  "Similar to ogres, oni are large, man-eating red monsters that carry iron clubs. They are common \
  villains in Japanese folklore, and people throw beans during a spring festival to ward them off.");

var pontianak = new Monster('Pontianak', 'Malaysia/Indonesia', './monster_images/pontianak.jpg',
  "Pontianak are evil vampire ghosts from Malay and Indonesian mythology that announce their presence \
  with the sound of a baby crying. Said to be the spirits of women who died while pregnant, they are \
  pale and red-eyed with long black hair and a white dress. Pro tip for pontianak-seekers: if the baby cries \
  are loud, the monster is far away; when the cries are soft, she's close.");

var vampire = new Monster('Vampire', 'Global', './monster_images/vampire.jpg',
  "Vampires of one sort or another pop up in most cultures around the world. The fanged, cloaked, coffin-sleeping \
  aristocrat version originated in Eastern Europe and the Balkans. And just so we're clear, vampires are NOT \
  romantic, angsty, and/or glittery; any attempts to portray them this way may or may not be, but definitely is, \
  vampire-backed propaganda. Defenses include garlic, crucifixes, holy water, Bibles, and wooden stakes.");

var wendigo = new Monster('Wendigo', 'Canada, Northern US', './monster_images/wendigo.jpg',
  "The wendigo is a monster from central Canada and the Great Lakes region usually associated with winter \
  and famine. They are emaciated creatures from Native American mythology created by humans resorting to \
  cannibalism. Wendigos crave human flesh, and in some versions of the legend they grow with each kill so that they are \
  never satisfied. A personal favorite of the Minnesota-based author staring down the barrel of winter.");

var werewolf = new Monster('Werewolf', 'Europe', './monster_images/werewolf.jpg',
  "Another familiar face (snout?), the werewolf originated in Europe but eventually went global. \
  The details vary, but the gist of it involves a normal person transforming into a wolf (or something \
  like a wolf). Much like the vampire, the werewolf's image has been rehabilitated in recent years into \
  a more romantic figure, although they always seem to be a blue-collar counterpart to the upper crust vamps. \
  Bourgeois or not, keep a few silver bullets handy if you ever meet one on a full moon.");

var zombie = new Monster('Zombie', 'Haiti', './monster_images/zombie.jpg',
  "A zombie is a mindless undead revenant made from a reanimated corpse. In their native Haiti they were \
  created and controlled by voodoo sorcerers, but since then the idea has been co-opted by countless rogue \
  scientists and questionable government agencies using more modern methods. These latter-day zombies \
  are notoriously slow walkers with a taste for human brains. Unlike their Haitian ancestors, they are \
  uncontrollable even by their makers and their bite will turn a human into one of them. Best defenses \
  include a solid head shot and a brisk walking pace.");

var monsterList = {
  aqrabuamelu: aqrabuamelu,
  babayaga: baba_yaga,
  banshee: banshee,
  basilisk: basilisk,
  bigfoot: bigfoot,
  blackshuck: black_shuck,
  bogeyman: bogeyman,
  chimera: chimera,
  chupacabra: chupacabra,
  dybbuk: dybbuk,
  goblin: goblin,
  golem: golem,
  gorgon: gorgon,
  gremlin: gremlin,
  jorogumo: jorogumo,
  kelpie: kelpie,
  lochnessmonster: loch_ness_monster,
  ogre: ogre,
  oni: oni,
  pontianak: pontianak,
  vampire: vampire,
  wendigo: wendigo,
  werewolf: werewolf,
  zombie: zombie
};
