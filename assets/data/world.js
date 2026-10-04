/* Places, lore, extended media, and the writer's room. */
window.HL = window.HL || {};

HL.timelines = {
  A:{ name:"Thorn", films:["h1978","h1981","h4","h5","h6"],
      blurb:"The original six, minus III. Laurie is Michael's sister and dies offscreen in 1987. Her daughter Jamie inherits the target. Ends with an ancient druidic curse as the engine. Loomis is present throughout." },
  B:{ name:"H20", films:["h1978","h1981","h20","res"],
      blurb:"Skips 4, 5, and 6. Jamie, Thorn, and the Man in Black never happened. Laurie faked her death and lives under another name. Loomis is dead. Ends with Michael waking in a morgue." },
  C:{ name:"Zombie", films:["rz2007","rz2009"],
      blurb:"A closed system. Michael has a documented abusive childhood and a clinical etiology. Loomis is a self-promoting author. The supernatural comes back as hallucinated maternal visitation." },
  D:{ name:"Green", films:["h1978","g2018","kills","ends"],
      blurb:"Deletes everything after 1978, including the sibling relationship, which a character dismisses as a rumor. Michael was caught that night. Laurie kills him in front of the town in 2022." },
  E:{ name:"Witch", films:["h3"],
      blurb:"Standalone. No Michael. In this world Halloween (1978) is a movie on TV, so Michael Myers is fiction. The anthology door, still open." }
};

HL.places = [
{ id:"haddonfield", name:"Haddonfield, Illinois", kind:"Town",
  desc:["Fictional small town in Illinois, named for Haddonfield, New Jersey, where Debra Hill grew up. One hospital, one sheriff, and everyone knows the house.",
        "Overcast, leaf-choked, gray. Decorations on every porch, so Michael is only ever slightly out of place. The design of the original is that the holiday camouflages him.",
        "By the Green trilogy the town has a 40-year relationship with its own legend: plaques, podcasts, survivors' toasts, and a mob that remembers."],
  real:"South Pasadena, CA (1978) · Salt Lake City, UT (4–6) · Charleston, SC (2018) · Wilmington, NC (Kills) · Savannah, GA (Ends)" },
{ id:"myers-house", name:"The Myers House", kind:"House", addr:"45 Lampkin Lane",
  desc:["Where Judith died. Derelict after 1963 in most timelines, and the franchise's true fixed point. More scenes happen here than anywhere else.",
        "Michael's hideout in 1978. The site of Jamie's unmasking in 1989. Bought by the Strodes in 1995. Wired for a webcast in 2002. Restored by Big John and Little John before 2018. Kills ends with Karen dead inside it."],
  real:"The 1978 house stood at 1000 Mission Street, South Pasadena. It was moved in 1987 to 707 Meridian Avenue and restored. Fans have built full-size replicas, including one in Hillsborough, North Carolina." },
{ id:"doyle-house", name:"The Doyle House", kind:"House",
  desc:["Where Laurie babysits Tommy on Halloween 1978, and where she fights Michael in the upstairs closet. Michael goes off its balcony."],
  real:"1530 N. Orange Grove Avenue, Hollywood." },
{ id:"wallace-house", name:"The Wallace House", kind:"House",
  desc:["Across the street. Annie babysits Lindsey here. Michael arranges the bodies of Annie, Bob, and Lynda upstairs, with Judith's headstone, for Laurie to find."],
  real:"1537 N. Orange Grove Avenue, Hollywood." },
{ id:"nichols-hardware", name:"Nichols Hardware", kind:"Shop",
  desc:["Robbed on Halloween 1978: a mask, rope, and knives. Mentioned on the radio."] },
{ id:"phelps-garage", name:"Phelps Garage", kind:"Shop",
  desc:["Michael leaves the stolen station wagon near here and takes coveralls from a driver. Loomis finds the abandoned truck."] },
{ id:"haddonfield-high", name:"Haddonfield High School", kind:"School",
  desc:["Laurie watches him from a classroom window in 1978. In 2018 Allyson's class discusses Laurie's story. In 1981 a nearby elementary school is where Loomis finds SAMHAIN in blood."] },
{ id:"haddonfield-cemetery", name:"Haddonfield Memorial Cemetery", kind:"Cemetery",
  desc:["Judith's grave. Her headstone is missing the day Loomis arrives."] },
{ id:"haddonfield-memorial", name:"Haddonfield Memorial Hospital", kind:"Hospital",
  desc:["Understaffed on a holiday night, and the half of the franchise's hospital-labyrinth sequences that don't happen at Smith's Grove. In Kills, the mob fills the corridors and turns on the wrong man."] },
{ id:"sheriff-station", name:"Haddonfield Sheriff's Station", kind:"Station",
  desc:["Shot up by Michael in 1988. Shot up again by the Man in Black in 1989."] },
{ id:"carruthers-house", name:"The Carruthers House", kind:"House",
  desc:["Jamie's foster home. The last scene of Part 4 happens in its upstairs bathroom."] },
{ id:"meeker-house", name:"The Meeker House", kind:"House",
  desc:["The sheriff fortifies it for Jamie. Kelly and Brady die inside."] },
{ id:"childrens-clinic", name:"Haddonfield Children's Clinic", kind:"Clinic",
  desc:["Where mute Jamie is treated in 1989, and where Michael comes looking."] },
{ id:"bus-station", name:"Haddonfield Bus Station", kind:"Station",
  desc:["Jamie hides her baby in a restroom here in 1995. Tommy finds him."] },
{ id:"storm-drain", name:"The Storm Drains", kind:"Tunnel",
  desc:["Under Haddonfield. Where Michael hides for 4 years, and where he lets Corey go."] },
{ id:"haddonfield-bridge", name:"The Bridge", kind:"Bridge",
  desc:["Where teenagers throw Corey into the drain."] },
{ id:"salvage-yard", name:"The Salvage Yard", kind:"Yard",
  desc:["Where the town ends Michael with an industrial shredder, in public, in 2022."] },
{ id:"laurie-compound", name:"Laurie's Compound", kind:"House",
  desc:["40 years of preparation outside town: floodlights, a gate, a gun room, mannequins for target practice, and a basement behind a kitchen island that locks from outside. A cage built on purpose. Burns on Halloween 2018."] },
{ id:"smiths-grove", name:"Smith's Grove–Warren County Sanitarium", kind:"Institution",
  desc:["Michael's home for 15 or 40 years, depending on timeline. Every version treats it as negligent at minimum: escapes during transfers, a cult in its administration, doctors who cross over into worship.",
        "In Timeline A, the Cult of Thorn runs experiments beneath it. In D, Dr. Sartain runs Michael's case. In no version of this story is the institution innocent."] },
{ id:"ridgemont", name:"Ridgemont Federal Sanitarium", kind:"Institution",
  desc:["Where comatose Michael is kept from 1978 to 1988."] },
{ id:"rabbit-in-red", name:"The Rabbit in Red Lounge", kind:"Club",
  desc:["The strip club where Deborah Myers works. Michael's red-rabbit matchbook travels with him."] },
{ id:"langdon", name:"Langdon, Illinois", kind:"Town",
  desc:["Where Marion Whittington lives in 1998, with Laurie's file."] },
{ id:"hillcrest-academy", name:"Hillcrest Academy", kind:"School", addr:"Summer Glen, California",
  desc:["The private boarding school Keri Tate runs. Gated, isolated, and empty for a Yosemite trip. The only time Michael leaves Illinois."] },
{ id:"grace-andersen", name:"Grace Andersen Sanitarium", kind:"Institution",
  desc:["Where Laurie waits for Michael from 1998 to 2001."] },
{ id:"santa-mira", name:"Santa Mira, California", kind:"Town",
  desc:["Silver Shamrock's company town. Cameras on the streets, a curfew, and townspeople who don't ask. Named for the town in Invasion of the Body Snatchers."] },
{ id:"silver-shamrock", name:"Silver Shamrock Novelties", kind:"Factory",
  desc:["Makes the pumpkin, skull, and witch masks. Its back room holds a stolen bluestone from Stonehenge and an android workforce."] }
];

HL.lore = [
{ id:"samhain", title:"Samhain", tl:"",
  body:["Introduced in 1981 as a word in blood on a chalkboard, glossed onscreen as the Celtic festival of the dead and, loosely, its lord. The film's etymology is shaky: Samhain is a festival, not a deity. That inaccuracy is now franchise canon, repeated by characters who should know better.",
        "Functionally it means the night the boundary thins, and something crosses to collect. Season of the Witch takes the idea furthest: Cochran wants the holiday to remember what it was for."] },
{ id:"thorn", title:"The Curse of Thorn", tl:"A",
  body:["Laid out in 1995. Thorn is a druidic rune tied to a constellation that appears only on certain Halloweens. When it rises, one child of each tribe is marked and compelled to kill their entire bloodline on Samhain. In exchange, the tribe is spared famine, plague, and death. The film frames it as a fixed price, paid in the same currency every generation.",
        "The Cult of Thorn keeps the arrangement going across centuries, embedded in Smith's Grove, using its clinical authority as cover and its research budget as infrastructure. Dr. Wynn leads it. Michael's kills are compulsory. He can't stop at Laurie, at Jamie, at Steven, because the curse is working.",
        "Structurally useful: it turns Michael into an instrument and makes the institution complicit. Structurally dangerous: it makes him sympathetic, which drains him."] },
{ id:"novel-curse", title:"The Novelization Curse (1979)", tl:"",
  body:["Curtis Richards's tie-in novel predates Thorn by 16 years and offers a rival origin: Enda, a boy in ancient Ireland, kills at the Samhain rites and is cursed to be reborn across generations to do it again. Michael is the latest vessel. Not film canon, and the older, cleaner version of the idea. If you want lineage without the cult apparatus, mine this."] },
{ id:"mask", title:"The Mask", tl:"",
  body:["Latex, blank, sexless, an emptied white face. It changes in every film: it ages, chars, splits, and gets rebuilt, and fans catalogue every variation.",
        "It removes a face. That's the function. In Ends it works as a relic: someone else can wear it, and it works.",
        "Practical rule: the mask has to be found, not bought. Its acquisition is always a scene. Nichols Hardware (1978), the podcasters' bag (2018), the Myers house floor (Kills), the drain (Ends)."] },
{ id:"psychic-link", title:"The Psychic Link", tl:"A",
  body:["Part 5 gives Jamie seizures and visions when Michael kills, and lets her feel where he is. It's never explained. Part 6 implies it's Thorn's mark running through the bloodline. Danny Strode's voice is the same idea in another child."] },
{ id:"white-horse", title:"The White Horse", tl:"C",
  body:["Zombie's addition, quoted from a dream-symbolism text: the white horse represents purity and rage. It arrives with Michael's dead mother in his visions. The only mythology in the franchise drawn from psychiatric iconography rather than folklore, and a clean model for a story that wants inheritance without druids."] },
{ id:"silver-shamrock", title:"Silver Shamrock", tl:"E",
  body:["Corporate Samhain. A stolen piece of Stonehenge, mass production, and a national TV broadcast used to perform an ancient child sacrifice at scale. Happy happy Halloween, Halloween, Halloween.",
        "The idea that the holiday's marketing machinery is the ritual machinery is the most portable concept in the franchise, and almost nobody has used it since 1982."] },
{ id:"contagion", title:"Evil as Contagion", tl:"D",
  body:["Kills says it outright: the town feeds the thing. Ends acts on it. Michael's evil passes to Corey through a look in a drain, and he wears the mask and it works. Laurie's last move is to kill Michael where everyone can see the body, so the town can stop feeding it. Whether that works is the question the film leaves you."] },
{ id:"rules", title:"The Rules of the Shape", tl:"",
  body:["Not stated in any film. Derived from what he consistently does. Break them deliberately; contradict them by accident and readers will feel it.",
        "Movement: he walks. He never runs and still arrives first. He shows up behind people who just checked. He's out of focus in the background before anyone notices, the most imitated shot in the genre.",
        "Sound: breath through latex. The adult Michael speaks once in thirteen films. Any noise he makes is exertion, never expression.",
        "Sight: he watches for a full day before he acts. The 1978 film is largely about a man standing still in daylight while nobody reacts correctly.",
        "Competence: he drives after 15 years locked up (\"someone taught him\"). He cuts phone lines, kills power stations, and stages bodies. The Wallace house tableau with the headstone is composed for an audience of one.",
        "Durability: six gunshots and a two-story fall. Fire. A mine shaft. A decapitation (retconned). He's stopped for good only twice: by ritual (Curse, Producer's Cut) and by industrial machinery in front of witnesses (Ends).",
        "Selection: he goes home. Everything organizes around 45 Lampkin Lane and one woman he's decided on. People between him and her are incidental.",
        "Restraint: as an adult he doesn't kill young children. Tommy, Lindsey, Jamie, Danny, Julian are spared or ignored. It holds in every timeline and it's the closest thing he has to a rule of his own. (Exceptions: 10-year-old Michael kills a classmate in the Zombie remake, and in 2018 he kills Kevin, a teenage boy at the bus crash.)",
        "Failure: he loses when the survivor stops running and chooses the ground: the closet, the school, the fortified house, the kitchen. Fleeing prolongs it. Only staging works."] }
];

HL.media = [
{ group:"Novels", items:[
  ["Halloween (1979)","Curtis Richards","Expands Michael's childhood and adds the Enda curse from ancient Ireland."],
  ["Halloween II (1981)","Jack Martin (Dennis Etchison)","Novelizes the sequel with extra victims and backstory."],
  ["Halloween III: Season of the Witch (1982)","Jack Martin (Dennis Etchison)","Fills in Cochran and Santa Mira."],
  ["Halloween IV (1988)","Nicholas Grabowsky","Novelization of Part 4."],
  ["The Scream Factory · The Old Myers Place · The Mad House (1997)","Kelly O'Rourke","Berkley original paperbacks set around Thorn-era Haddonfield. Non-canon."],
  ["Halloween (2018)","John Passarella","Official novelization with expanded scenes."],
  ["Halloween Kills (2021)","Tim Waggoner","Official novelization."],
  ["Halloween Ends (2022)","Titan Books","Official tie-in novelization."]
]},
{ group:"Comics", items:[
  ["Halloween · Halloween II: The Blackest Eyes · Halloween III: The Devil's Eyes (2000–2001)","Chaos! Comics, with Phil Nutman and Daniel Farrands","Tommy Doyle's journals and Michael's childhood. Treated as a semi-sequel to H20."],
  ["Halloween: Nightdance (2008)","Devil's Due, Stefan Hutchinson","Michael as an uncanny presence instead of a slasher. A genuine attempt at the mythic version."],
  ["Halloween: 30 Years of Terror (2008)","Devil's Due","Anthology one-shot."],
  ["Halloween: The First Death of Laurie Strode (2008)","Devil's Due, Stefan Hutchinson","Bridges H2 and H20 from Laurie's side."],
  ["Halloween: Autopsis (2006)","Stefan Hutchinson","A photographer follows Loomis to document Michael."]
]},
{ group:"Games", items:[
  ["Halloween (1983)","Wizard Video, Atari 2600","Babysitter-rescue game. Famously crude, now a collector's item."],
  ["Dead by Daylight: The Shape (2016)","Behaviour Interactive","Michael as a playable killer. His Evil Within power grows by watching, not chasing: the best mechanical translation of the character anyone has made."],
  ["Call of Duty, Fortnite, and others","Various","Michael has appeared as a seasonal crossover skin in several shooters."]
]},
{ group:"Documentaries", items:[
  ["Halloween Unmasked 2000 (1999)","Documentary","Cast and crew retrospective."],
  ["Halloween: 25 Years of Terror (2006)","Documentary","The standard behind-the-scenes overview."],
  ["Halloween: The Inside Story (2010)","Documentary","Focused on the 1978 production."]
]},
{ group:"Music", items:[
  ["Halloween theme (1978)","John Carpenter","Piano in 5/4 over a low synth pulse."],
  ["H2 and H3 scores","John Carpenter & Alan Howarth","Synth-forward; Howarth continued solo through Part 6."],
  ["2018–2022 scores","John Carpenter, Cody Carpenter, Daniel Davies","Reworked themes and new material; also released on Carpenter's Sacred Bones label."]
]},
{ group:"Alternate cuts", items:[
  ["Halloween (1978) TV cut","1981","Adds Smith's Grove scenes and the SISTER door."],
  ["Halloween II TV cut","1981","Alternate kills, reordered scenes, Jimmy survives."],
  ["Curse of Michael Myers Producer's Cut","Officially released 2014","Different third act, runic stones, Loomis marked."],
  ["Halloween (2007) unrated","2007","Longer, different escape and ending."],
  ["Halloween II (2009) director's cut","2009","Different ending for Laurie."]
]},
{ group:"Rights and status (as of 2026)", items:[
  ["Film rights","Miramax and Trancas International (Malek Akkad)","Jointly held."],
  ["TV rights","Trancas International","Miramax won a 2023 bidding war to develop a TV series meant to launch a connected film-and-TV universe. Reports since suggest a feature-film reset instead. Nothing confirmed."],
  ["Universal / Blumhouse","Ended with Halloween Ends (2022)",""]
]}
];

HL.contradictions = [
  ["Is Laurie his sister?","No (1978) → Yes (1981–2009) → No, people made it up (2018)"],
  ["Why does he kill?","No reason (1978) → Family (1981) → An ancient curse (1995) → Abuse and neglect (2007) → No reason again (2018) → A transmissible appetite (2022)"],
  ["When does Laurie die?","1987, offscreen (A) · 2001 (B) · Institutionalized or shot (C) · She doesn't (D)"],
  ["What happens to Loomis?","Lives into 1995, possibly cursed (A) · Dead before 1998 (B) · Killed 2009 (C) · Dead offscreen (D)"],
  ["Was Michael caught in 1978?","No (A/B) · Yes, that night (D)"],
  ["Can he be killed?","Undetermined (A/B/C) · Yes, in front of witnesses (D)"],
  ["Who's the next vessel?","Jamie, then Steven or Danny (A) · Nobody (B) · Laurie (C) · Corey (D)"]
];

HL.seams = [
  ["1978–1988, Timeline A","Ten years of a comatose man in a federal facility, with a cult inside the system that owns him. Almost entirely unwritten."],
  ["Steven Lloyd","Michael's grand-nephew, born 1995, survives, never mentioned again. About 31 now. The cleanest untouched bloodline in the franchise."],
  ["1989–1995, Timeline A","Jamie's six years in cult custody. Referenced, never shown."],
  ["The Producer's Cut ending","Loomis carrying the Thorn mark. A whole film exists on the other side of that shot."],
  ["Timeline E","Season of the Witch was built as an anthology door and it's still open. Any Halloween-night story with no Michael is technically in continuity."],
  ["Anyone outside Haddonfield","Michael has left Illinois once (1998). Nothing stops the story from happening elsewhere, to someone unconnected."],
  ["Halloween as content","Resurrection raised streamed atrocity in 2002 and fumbled it. Twenty-four years of infrastructure have been built since."],
  ["Laurie's B-timeline years","1987–1998: building Keri Tate, raising John, hiring the security guard. A survivor's second identity, from the inside."],
  ["Allyson after 2022","She rode out of town with the mask's last host dead behind her. Where does a Strode go?"]
];

HL.craft = [
  { h:"The load-bearing question", p:["Every Halloween film is a wager on one question: should the evil be explained? 1978 says no and is the best of them. Curse says yes and buries a timeline. Ends says it's contagious and splits the audience. Decide your answer on page one and never wobble. The wobble killed most of these films."] },
  { h:"Structural options, with their costs", list:[
    "Motiveless: maximum dread, minimum character. Someone else has to carry interiority.",
    "Familial: instant stakes, instant shrinkage. The horror becomes a family matter.",
    "Cursed or ritual: rich worldbuilding, and every ounce of explanation costs a degree of fear. Tools aren't frightening.",
    "Etiological: sympathy, texture, and the risk of a sad case study in a mask.",
    "Contagious: modern, thematically alive, and structurally treacherous. Once anyone can be the killer, the specific one stops mattering."] },
  { h:"What's exhausted", p:["The mob. The hospital corridor. The legacy survivor in a fortified house. The podcast framing device. The he-was-here-the-whole-time reveal. All fine, all done to death."] },
  { h:"What's barely touched", p:["The institution as antagonist. The years between kills. Anyone who isn't a Strode. Halloween outside Illinois. Non-white, non-suburban, non-teenage victims. The economics of a town whose only cultural export is a murder house. What it costs to be the person who didn't die, 20 years later, in a support group, in an insurance claim, in a deposition."] },
  { h:"A frame you already have", p:["The 1978 film is a nearly perfect mortality-salience event. Loomis spent 15 years building a symbolic defense, diagnosis and terminology and a professional worldview, against a thing that refuses to be symbolized. When it escapes, his language collapses into theology. Laurie survives because she quits trying to make meaning and acts. The town in Kills is textbook worldview defense: find an out-group, chant a slogan, kill the wrong man. The franchise has circled that machinery for 48 years without naming it. You could name it."] },
  { h:"Practical constraints if you write in-universe", list:[
    "Michael doesn't talk. If your story needs an interior voice, it belongs to someone else.",
    "He doesn't kill young children. Breaking this reads as a different character.",
    "He goes home. If your story is set elsewhere, you need a reason strong enough to beat the house's gravity.",
    "The mask has to be found. Its acquisition is always a scene.",
    "The date is fixed: October 31, or an October 30 that spills over. You get a hard clock for free."] }
];
