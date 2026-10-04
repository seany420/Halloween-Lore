/* Film dossiers. One object per film, release order.
   cast: [characterId, actor]. Character ids resolve against characters.js.
   Numbers marked ≈ are contested between cuts or sources. */
window.HL = window.HL || {};
HL.films = [
{
  id: "h1978", n: 1, title: "Halloween", year: 1978, tl: ["A","B","D"],
  released: "October 25, 1978", runtime: "91 min",
  director: "John Carpenter", writers: "John Carpenter & Debra Hill",
  producers: "Debra Hill; Irwin Yablans (exec.); Moustapha Akkad (exec.)",
  music: "John Carpenter", budget: "≈$325,000", gross: "≈$70M worldwide",
  shape: "Nick Castle (most scenes) · Tony Moran (unmasked) · Will Sandin (age 6)",
  setting: "Haddonfield, Illinois · Oct 31, 1963 and Oct 30–31, 1978",
  shot: "South Pasadena and Hollywood, California, spring 1978",
  places: ["haddonfield","myers-house","smiths-grove","doyle-house","wallace-house","nichols-hardware","haddonfield-high","haddonfield-cemetery","phelps-garage"],
  logline: "A boy kills his sister on Halloween. Fifteen years later he comes home.",
  plot: [
    "Halloween night, 1963. A POV shot moves through the Myers house, up the stairs, through the eyeholes of a clown mask, and stabs 17-year-old Judith Myers. The camera pulls back to show a 6-year-old boy holding the knife.",
    "October 30, 1978. Michael escapes Smith's Grove during a transfer for a court hearing, stealing the car Dr. Loomis and Nurse Marion Chambers arrived in. He kills a truck driver for his coveralls, takes a mask, rope, and knives from Nichols Hardware, and steals Judith's headstone from the cemetery.",
    "Halloween day he watches. Laurie Strode drops a key at the derelict Myers house on her father's behalf, and from then on he's always at the edge of the frame: behind a hedge, across the schoolyard, beside a parked car. Loomis arrives in town, tells Sheriff Brackett what's coming, and nobody believes him enough.",
    "That night Laurie babysits Tommy Doyle across the street from Annie Brackett, who's babysitting Lindsey Wallace. Michael kills Annie in her car, Bob in the kitchen, and Lynda on the phone with Laurie. He arranges the bodies and the headstone upstairs in the Wallace house for Laurie to find.",
    "Laurie fights him off with a knitting needle, a coat hanger, and his own knife. Loomis shoots him six times and he falls off the second-floor balcony. When Loomis looks down, the lawn is empty."
  ],
  cast: [
    ["laurie-strode","Jamie Lee Curtis"],["sam-loomis","Donald Pleasence"],["michael-myers","Nick Castle"],
    ["annie-brackett","Nancy Kyes"],["lynda","P.J. Soles"],["leigh-brackett","Charles Cyphers"],
    ["tommy-doyle","Brian Andrews"],["lindsey-wallace","Kyle Richards"],["marion-chambers","Nancy Stephens"],
    ["judith-myers","Sandy Johnson"],["bob-simms","John Michael Graham"],["lonnie-elam","Brent Le Page"],
    ["terence-wynn","Robert Phalen"],["ben-tramer","(mentioned)"]
  ],
  production: [
    "The mask is a Don Post Captain Kirk mask bought for about $2. Production designer Tommy Lee Wallace widened the eyes, teased the hair, and sprayed the face flat white.",
    "Credited as \"The Shape,\" not Michael Myers.",
    "Working title: The Babysitter Murders. Producer Irwin Yablans pitched the holiday hook.",
    "Shot in about 20 days in spring. Palm trees sneak into the background and the crew re-scattered the same painted leaves between takes.",
    "Carpenter wrote the main theme in 5/4, which is why it never lets you settle.",
    "Debra Hill named Haddonfield after her hometown in New Jersey. Many character names come from Carpenter's life: Tommy Doyle, Lindsey Wallace (for Tommy Lee Wallace), and Sam Loomis (from Psycho).",
    "Added to the National Film Registry in 2006."
  ],
  cuts: "A 1981 network TV version adds footage Carpenter shot during Halloween II production, including a Smith's Grove scene with the word SISTER scratched on Michael's door.",
  matters: "There's no motive. Loomis gives a theological diagnosis instead of a psychological one. Everything the franchise does later is an attempt to fill that vacuum, and every attempt costs something."
},
{
  id: "h1981", n: 2, title: "Halloween II", year: 1981, tl: ["A","B"],
  released: "October 30, 1981", runtime: "92 min",
  director: "Rick Rosenthal", writers: "John Carpenter & Debra Hill",
  producers: "John Carpenter & Debra Hill",
  music: "John Carpenter & Alan Howarth", budget: "≈$2.5M", gross: "≈$25.5M domestic",
  shape: "Dick Warlock",
  setting: "Haddonfield, Illinois · Oct 31 – Nov 1, 1978",
  shot: "Pasadena, South Pasadena, and Morningside Hospital, Los Angeles",
  places: ["haddonfield","haddonfield-memorial","haddonfield-high","myers-house"],
  logline: "Same night. Laurie goes to the hospital. So does he.",
  plot: [
    "It picks up the second the first film ends. Michael walks off into the neighborhood, kills Alice Martin, and Loomis and Sheriff Brackett hunt the streets. A teenager in a similar mask, Ben Tramer, is hit by a squad car and burns.",
    "Laurie is taken to Haddonfield Memorial, understaffed on a holiday night. Michael follows and works through the staff one by one while Laurie, sedated, drifts through the corridors.",
    "At the elementary school Loomis finds SAMHAIN written in blood on a chalkboard. Then Marion Chambers arrives with a marshal and a file: Laurie is Michael's younger sister, adopted after their parents died, the records sealed.",
    "Loomis gets to the hospital. Laurie shoots Michael through both eyes. Blind, he slashes at the air. Loomis opens the gas lines in the operating room and ignites it, and Michael walks out of the fire burning before he falls."
  ],
  cast: [
    ["laurie-strode","Jamie Lee Curtis"],["sam-loomis","Donald Pleasence"],["michael-myers","Dick Warlock"],
    ["leigh-brackett","Charles Cyphers"],["marion-chambers","Nancy Stephens"],["jimmy-lloyd","Lance Guest"],
    ["jill-franco","Tawny Moyer"],["budd","Leo Rossi"],["karen-bailey","Pamela Susan Shoop"],["gary-hunt","Hunter von Leer"],
    ["ben-tramer","Jack Verbois"]
  ],
  production: [
    "Carpenter declined to direct but co-wrote and produced. Unhappy with the first cut, he shot additional violent inserts himself.",
    "Carpenter has said the sibling twist came from late-night writing under pressure, and he's not proud of it.",
    "Paramedic Jimmy's fate is left open in the theatrical cut. The TV cut has him survive."
  ],
  cuts: "The NBC TV version reorders scenes, swaps some kills for alternates, and lets Jimmy live.",
  introduces: ["The sibling retcon","SAMHAIN","The hospital as labyrinth"],
  matters: "It gives Michael a reason, and the reason is blood. Two later timelines exist mainly to escape that. It also plants Samhain, the first supernatural crack, which stays unexplained for 14 years."
},
{
  id: "h3", n: 3, title: "Halloween III: Season of the Witch", year: 1982, tl: ["E"],
  released: "October 22, 1982", runtime: "98 min",
  director: "Tommy Lee Wallace", writers: "Tommy Lee Wallace (Nigel Kneale's original draft, credit removed)",
  producers: "John Carpenter & Debra Hill",
  music: "John Carpenter & Alan Howarth", budget: "≈$2.5M", gross: "≈$14.4M domestic",
  shape: "None. No Michael Myers.",
  setting: "Northern California and Santa Mira, California · Oct 23–31, 1982",
  shot: "Loleta and Los Angeles, California",
  places: ["santa-mira","silver-shamrock"],
  logline: "A novelty company plans to kill America's children with masks and a jingle.",
  plot: [
    "Harry Grimbridge stumbles into a California hospital clutching a Silver Shamrock pumpkin mask, screaming that they're going to kill us all. A man in a suit kills him in his bed, then sets himself on fire in the parking lot.",
    "Dr. Dan Challis and Harry's daughter Ellie follow the mask to Santa Mira, a company town built around Silver Shamrock Novelties and its charming Irish owner, Conal Cochran. The town has a curfew, cameras, and men in suits who aren't men.",
    "Cochran has stolen a bluestone from Stonehenge and chipped fragments of it into the trademark seal on millions of masks: pumpkin, skull, witch. On Halloween night a televised Big Giveaway will play a signal, and every child wearing one will die, their heads collapsing into insects and snakes. It's a sacrifice restoring Samhain's old purpose.",
    "Challis escapes, discovers Ellie has been replaced by an android, and calls the networks to stop the broadcast. Two channels pull it. The third won't. The film ends on him screaming \"Stop it!\" into the phone."
  ],
  cast: [
    ["dan-challis","Tom Atkins"],["ellie-grimbridge","Stacey Nelkin"],["conal-cochran","Dan O'Herlihy"],["harry-grimbridge","Al Berry"]
  ],
  production: [
    "Carpenter and Hill wanted Halloween to become an anthology: a new, unrelated story every October. This was the first and last attempt.",
    "Nigel Kneale (Quatermass) wrote the original script and pulled his name after rewrites added gore.",
    "The original Halloween plays on a TV in the film, which makes Michael Myers fiction in this world.",
    "Jamie Lee Curtis voices the curfew announcer and the phone operator.",
    "Box-office failure on release, critical rehabilitation since. Now widely loved."
  ],
  matters: "The only entry where the holiday itself is the antagonist. Halloween is a domesticated ritual that still remembers what it was for. If you want lore that isn't Michael, this is the vein."
},
{
  id: "h4", n: 4, title: "Halloween 4: The Return of Michael Myers", year: 1988, tl: ["A"],
  released: "October 21, 1988", runtime: "88 min",
  director: "Dwight H. Little", writers: "Alan B. McElroy",
  producers: "Paul Freeman; Moustapha Akkad (exec.)",
  music: "Alan Howarth", budget: "≈$5M", gross: "≈$17.8M domestic",
  shape: "George P. Wilbur",
  setting: "Haddonfield, Illinois · Oct 30–31, 1988",
  shot: "Salt Lake City, Utah, spring 1988",
  places: ["haddonfield","ridgemont","carruthers-house","meeker-house","sheriff-station"],
  logline: "Ten years in a coma. He wakes up when he hears he has a niece.",
  plot: [
    "Michael has been comatose at Ridgemont Federal Sanitarium since 1978. During a night transfer, an attendant mentions he has a living niece. His hand closes. He kills the ambulance crew.",
    "Jamie Lloyd, 7, is Laurie's daughter. Laurie died in a car crash about a year ago. Jamie lives with the Carruthers family and her foster sister Rachel, and has nightmares about a man in a mask.",
    "Loomis, scarred from the fire, hitches a ride with a wandering preacher back to Haddonfield. Michael blacks out the town by killing the power station crew. Sheriff Ben Meeker fortifies his house with Jamie and Rachel inside, and a drunk vigilante posse goes hunting and shoots an innocent man.",
    "State police finally riddle Michael with bullets on a pickup truck and he falls down an abandoned mine shaft. At the Carruthers house, Jamie, in the same clown costume Michael wore in 1963, stabs her foster mother with scissors. Loomis raises a gun and screams."
  ],
  cast: [
    ["jamie-lloyd","Danielle Harris"],["rachel-carruthers","Ellie Cornell"],["sam-loomis","Donald Pleasence"],["michael-myers","George P. Wilbur"],
    ["ben-meeker","Beau Starr"],["kelly-meeker","Kathleen Kinmont"],["brady","Sasha Jenson"],["darlene-carruthers","Karen Alston"],["reverend-sayer","Carmen Filpi"]
  ],
  production: [
    "Moustapha Akkad brought Michael back after Season of the Witch flopped, promising audiences the original shape.",
    "Carpenter and Hill sold their stake before production. Carpenter's planned version, with writer Dennis Etchison, was rejected.",
    "The mask was an off-the-shelf variant with a different shape and blonde hair; the opening shots use a noticeably different one than the finale."
  ],
  introduces: ["Jamie Lloyd","The mob as a second monster","Evil as heritable"],
  matters: "The vigilante mob kills an innocent man, an idea Kills later rebuilds as its whole thesis. The final scene suggests the thing runs in the blood. Part 5 backs away from that ending."
},
{
  id: "h5", n: 5, title: "Halloween 5: The Revenge of Michael Myers", year: 1989, tl: ["A"],
  released: "October 13, 1989", runtime: "96 min",
  director: "Dominique Othenin-Girard", writers: "Michael Jacobs, Dominique Othenin-Girard, Shem Bitterman",
  producers: "Ramsey Thomas; Moustapha Akkad (exec.)",
  music: "Alan Howarth", budget: "≈$3M", gross: "≈$11.6M domestic",
  shape: "Don Shanks",
  setting: "Haddonfield, Illinois · Oct 31, 1988 and Oct 30–31, 1989",
  shot: "Salt Lake City, Utah",
  places: ["haddonfield","childrens-clinic","myers-house","sheriff-station"],
  logline: "Jamie can feel him. Loomis decides to use that.",
  plot: [
    "Picking up in 1988: Michael climbs out of the mine shaft downstream and collapses at a hermit's shack. The hermit cares for him for a full year. On October 31, 1989, Michael wakes and kills him.",
    "Jamie hasn't spoken since she stabbed her foster mother. She's at the Haddonfield Children's Clinic with seizures, and she can sense Michael. When he kills, she knows.",
    "Michael kills Rachel almost immediately and goes after Tina, the louder, braver friend, and her party at a farm. Loomis, near the end of himself, convinces Jamie to lure Michael to the Myers house.",
    "Jamie calls him uncle and asks him to take off the mask. He does. He's crying. She touches the tear. Then he tries to kill her again. Loomis traps him in a net and beats him unconscious, then collapses with a stroke.",
    "Michael is jailed. A man in black with a Thorn tattoo, seen all through the film, walks into the station, kills everyone, and frees him. Jamie finds the cell empty."
  ],
  cast: [
    ["jamie-lloyd","Danielle Harris"],["sam-loomis","Donald Pleasence"],["michael-myers","Don Shanks"],["rachel-carruthers","Ellie Cornell"],
    ["tina-williams","Wendy Kaplan"],["billy-hill","Jeffrey Landman"],["ben-meeker","Beau Starr"],["terence-wynn","Don Shanks (as the Man in Black)"]
  ],
  production: [
    "Rushed into production months after Part 4, with no finished script when shooting started.",
    "The Man in Black had no defined identity when filmed. The filmmakers have said they didn't know who he was. Part 6 had to decide.",
    "Don Shanks played both Michael and the Man in Black."
  ],
  introduces: ["The Man in Black","Thorn","Jamie's psychic link"],
  matters: "The unmasking at the Myers house is the only time the franchise lets the thing be a person, and it doesn't survive contact with itself."
},
{
  id: "h6", n: 6, title: "Halloween: The Curse of Michael Myers", year: 1995, tl: ["A"],
  released: "September 29, 1995", runtime: "88 min (theatrical) · 96 min (Producer's Cut)",
  director: "Joe Chappelle", writers: "Daniel Farrands",
  producers: "Paul Freeman; Moustapha Akkad (exec.)",
  music: "Alan Howarth", budget: "≈$5M", gross: "≈$15.1M domestic",
  shape: "George P. Wilbur (some reshoots by A. Michael Lerner)",
  setting: "Haddonfield, Illinois · Oct 30–31, 1995",
  shot: "Salt Lake City, Utah",
  places: ["haddonfield","myers-house","smiths-grove","bus-station","haddonfield-memorial"],
  logline: "The cult that freed him explains everything, and the explanation is the problem.",
  plot: [
    "Six years after Part 5, 15-year-old Jamie Lloyd gives birth in a cult compound beneath Smith's Grove. A midwife helps her escape with the baby. Michael hunts her through the night. She hides her son in a bus station restroom and calls a Haddonfield radio show for help. Michael kills her at a farm.",
    "Tommy Doyle, the boy Laurie babysat, is now an obsessed recluse living across the street from the Myers house. He finds the baby and names him Steven. The Myers house is occupied again, by the Strodes: Laurie's adoptive uncle John, his wife Debra, their daughter Kara, her son Danny, and her brother Tim. Danny has started hearing a voice.",
    "Tommy explains the curse to Loomis. Thorn is a druidic rune. One child per tribe is chosen to kill their own bloodline on Samhain so the rest of the tribe survives. Michael was chosen. Jamie's son is the last of the line, or the next vessel.",
    "Dr. Terence Wynn, Loomis's colleague, is the Man in Black and head of the cult. The finale moves to Smith's Grove, where cult doctors are running experiments. Michael kills the cult. Tommy beats him down with a lead pipe. Loomis goes back in alone. Only the mask is left on the floor."
  ],
  cast: [
    ["sam-loomis","Donald Pleasence"],["tommy-doyle","Paul Rudd"],["kara-strode","Marianne Hagan"],["jamie-lloyd","J.C. Brandy"],
    ["terence-wynn","Mitch Ryan"],["danny-strode","Devin Gardner"],["john-strode","Bradford English"],["debra-strode","Kim Darby"],
    ["tim-strode","Keith Bogart"],["mrs-blankenship","Janice Knickrehm"],["barry-simms","Leo Geter"],["steven-lloyd","(infant)"],["michael-myers","George P. Wilbur"]
  ],
  production: [
    "Donald Pleasence died in February 1995, before release. The film is dedicated to him.",
    "Danielle Harris didn't return as Jamie after a contract dispute.",
    "Bad test screenings led to extensive reshoots that rewrote the third act and much of the cult logic.",
    "The Producer's Cut circulated as a bootleg for nearly two decades and got an official release in 2014. Much of the fandom treats it as the real version."
  ],
  cuts: "Producer's Cut: Jamie survives longer and dies in the hospital. The finale uses runic stones and a ritual instead of a pipe, Wynn dies at Michael's hands, and the last shot shows the Thorn mark appearing on Loomis's wrist. The curse transfers to him.",
  matters: "The franchise's one full commitment to explaining Michael. It answers the question and, in answering, shows why nobody should. Read it as a cautionary document."
},
{
  id: "h20", n: 7, title: "Halloween H20: 20 Years Later", year: 1998, tl: ["B"],
  released: "August 5, 1998", runtime: "86 min",
  director: "Steve Miner", writers: "Robert Zappia & Matt Greenberg (Kevin Williamson, uncredited contributions)",
  producers: "Paul Freeman; Moustapha Akkad, Kevin Williamson, Bob & Harvey Weinstein (exec.)",
  music: "John Ottman (with tracked cues by Marco Beltrami)", budget: "≈$17M", gross: "≈$55M domestic",
  shape: "Chris Durand",
  setting: "Langdon, Illinois and Summer Glen, California · Oct 29–31, 1998",
  shot: "Los Angeles area, California",
  places: ["langdon","hillcrest-academy"],
  logline: "Laurie faked her death and changed her name. Twenty years later, she stops running.",
  plot: [
    "October 29, 1998. Michael breaks into the home of Marion Chambers Whittington, Loomis's old nurse, in Langdon, Illinois, and steals Laurie's file. He kills Marion and two neighborhood teenagers.",
    "Laurie faked her death in 1987 and is living as Keri Tate, headmistress of Hillcrest Academy, a private boarding school in Summer Glen, California. She's a functional alcoholic on prescription pills and overprotects her 17-year-old son John, who wants to go on the school's Yosemite trip.",
    "John stays behind with his girlfriend Molly and two friends for a secret party. The campus empties. Michael arrives.",
    "Laurie gets John and Molly out the gate, then locks herself back in with Michael and a fire axe. She stabs him, he goes over a balcony, and the coroner's van takes the body. Laurie steals the van, sees him sit up, crashes it, and pins him against a tree. He reaches toward her. She takes his head off."
  ],
  cast: [
    ["laurie-strode","Jamie Lee Curtis"],["john-tate","Josh Hartnett"],["molly-cartwell","Michelle Williams"],["will-brennan","Adam Arkin"],
    ["ronny-jones","LL Cool J"],["norma-watson","Janet Leigh"],["charlie-deveraux","Adam Hann-Byrd"],["sarah-wainthrope","Jodi Lyn O'Keefe"],
    ["marion-chambers","Nancy Stephens"],["jimmy-howell","Joseph Gordon-Levitt"],["michael-myers","Chris Durand"]
  ],
  production: [
    "Jamie Lee Curtis pushed for a 20th-anniversary return and wanted Carpenter to direct. He passed.",
    "Janet Leigh, Curtis's mother, plays Norma and drives a car styled after her Psycho sedan. The Psycho score cues when she gets in.",
    "The mask changed between shoot and release; some shots use a CGI-replaced face because the first mask tested badly.",
    "Ignores Parts 4–6 entirely. Loomis is dead offscreen; a newspaper clip and a sound-alike voice cover his absence."
  ],
  matters: "Survivorhood as a chronic condition. Twenty years of hypervigilance read as pathology by everyone around her, then vindicated. Every legacy sequel since copies this and none improves on it."
},
{
  id: "res", n: 8, title: "Halloween: Resurrection", year: 2002, tl: ["B"],
  released: "July 12, 2002", runtime: "94 min",
  director: "Rick Rosenthal", writers: "Larry Brand & Sean Hood",
  producers: "Paul Freeman & Michael Leahy; Moustapha Akkad (exec.)",
  music: "Danny Lux", budget: "≈$13M", gross: "≈$37.7M worldwide",
  shape: "Brad Loree",
  setting: "Grace Andersen Sanitarium and Haddonfield, Illinois · Oct 31, 2001–02",
  shot: "Vancouver, British Columbia",
  places: ["grace-andersen","myers-house","haddonfield"],
  logline: "Laurie dies in the prologue. Then a web show puts six students in the Myers house.",
  plot: [
    "The prologue explains H20: the man Laurie decapitated was a paramedic. Michael crushed his larynx, swapped clothes, and put the mask on him. Laurie, who knew it, has been committed to Grace Andersen Sanitarium, faking catatonia and waiting.",
    "Michael comes. Laurie traps him on the roof with a rope and a plan. She hesitates for a second to make sure it's really him and reaches for his mask. He stabs her. She kisses the mask, says \"see you in hell,\" and falls.",
    "A year later, Dangertainment, run by Freddie Harris and Nora Winston, broadcasts a live web event: six college students explore the Myers house with head-mounted cameras. Viewers watch from Halloween parties, including Myles, a high schooler texting with contestant Sara.",
    "Michael is home and kills his way through the cast while the audience assumes it's staged. Sara and Freddie survive; Freddie electrocutes Michael and the house burns. In the morgue, Michael's eyes open."
  ],
  cast: [
    ["sara-moyer","Bianca Kajlich"],["freddie-harris","Busta Rhymes"],["nora-winston","Tyra Banks"],["laurie-strode","Jamie Lee Curtis"],
    ["myles-barton","Ryan Merriman"],["jen-danzig","Katee Sackhoff"],["bill-woodlake","Thomas Ian Nicholas"],["michael-myers","Brad Loree"]
  ],
  production: [
    "Curtis agreed to appear only in the prologue, reportedly on the condition that Laurie die.",
    "Shot with an early-2000s internet-reality aesthetic; it predates YouTube by 3 years.",
    "Widely regarded as the franchise's low point. Its box office ended the Akkad-era continuity."
  ],
  matters: "Its one durable idea is Halloween as content: the house monetized, trauma streamed, an audience watching real deaths and assuming they're fake. That idea aged extremely well. Kills and Ends circle it without landing it."
},
{
  id: "rz2007", n: 9, title: "Halloween (2007)", year: 2007, tl: ["C"],
  released: "August 31, 2007", runtime: "109 min (theatrical) · 121 min (unrated)",
  director: "Rob Zombie", writers: "Rob Zombie",
  producers: "Malek Akkad, Andy Gould, Rob Zombie; Bob & Harvey Weinstein (exec.)",
  music: "Tyler Bates (with Carpenter's themes)", budget: "≈$15M", gross: "≈$80M worldwide",
  shape: "Tyler Mane (adult) · Daeg Faerch (age 10)",
  setting: "Haddonfield, Illinois · childhood, then 15 years later",
  shot: "Pasadena and Los Angeles, California",
  places: ["haddonfield","myers-house","smiths-grove","rabbit-in-red"],
  logline: "Michael's childhood, then the 1978 story, rebuilt around a cause.",
  plot: [
    "Michael Myers is 10, living in a filthy house with his mother Deborah, a stripper who loves him; her abusive boyfriend Ronnie; his sister Judith; and baby sister Boo. He kills animals and photographs them. Bullied at school, he wears a clown mask and beats a classmate to death in the woods.",
    "Halloween night, he kills Ronnie, Judith's boyfriend, and Judith, and sits on the porch holding the baby when his mother comes home.",
    "At Smith's Grove, under Dr. Loomis, he goes silent and makes papier-mâché masks obsessively. He kills a nurse. Deborah, unable to bear it, shoots herself.",
    "Fifteen years later, during a transfer, he escapes, kills his way out, and walks home. Boo is Laurie Strode now, adopted by the Strodes. He wants her. Loomis, now a true-crime author cashing in on the case, hunts him. It ends in the ruined Myers house with Laurie shooting Michael in the face."
  ],
  cast: [
    ["michael-myers","Tyler Mane / Daeg Faerch"],["sam-loomis","Malcolm McDowell"],["laurie-strode","Scout Taylor-Compton"],["deborah-myers","Sheri Moon Zombie"],
    ["ronnie-white","William Forsythe"],["judith-myers","Hanna Hall"],["leigh-brackett","Brad Dourif"],["annie-brackett","Danielle Harris"],
    ["ismael-cruz","Danny Trejo"],["lynda","Kristina Klebe"]
  ],
  production: [
    "Dimension wanted a remake. Zombie pitched a prequel and remake in one.",
    "Danielle Harris, Jamie Lloyd in Parts 4 and 5, plays Annie Brackett.",
    "The unrated cut changes the escape sequence and the ending, and runs about 12 minutes longer."
  ],
  matters: "Motive becomes etiology: abuse, poverty, cruelty, an institution that fails him. Michael is enormous and physical rather than uncanny. Loomis is compromised rather than prophetic."
},
{
  id: "rz2009", n: 10, title: "Halloween II (2009)", year: 2009, tl: ["C"],
  released: "August 28, 2009", runtime: "105 min (theatrical) · 119 min (director's cut)",
  director: "Rob Zombie", writers: "Rob Zombie",
  producers: "Malek Akkad, Andy Gould, Rob Zombie",
  music: "Tyler Bates", budget: "≈$15M", gross: "≈$39M worldwide",
  shape: "Tyler Mane · Chase Wright Vanek (young Michael in visions)",
  setting: "Haddonfield, Illinois and rural Illinois · Halloween, one year later",
  shot: "Georgia",
  places: ["haddonfield","haddonfield-memorial","rabbit-in-red"],
  logline: "A year later, Laurie is coming apart, and Michael is walking home again.",
  plot: [
    "The opening picks up that night: Laurie in the hospital, Michael waking in a crashed coroner's van. Then a year passes.",
    "Laurie lives with Annie and Sheriff Brackett, drinks, rages, goes to therapy, and has nightmares that feel like his. Michael, presumed dead, has been drifting through the countryside, bearded and hooded, guided by visions of his mother in white with a white horse and his younger self.",
    "Loomis is on a book tour for his new bestseller, which reveals to the world, and to Laurie, that she's Angel Myers. It breaks her.",
    "Michael kills Annie and comes for Laurie. Police surround a shack in a field. Loomis goes in to talk him down and Michael kills him. Michael is shot. The ending depends on the cut: in one, Laurie walks out wearing his mask and is shot by police; in the other she ends in a cell, smiling at a vision of her mother and the horse."
  ],
  cast: [
    ["laurie-strode","Scout Taylor-Compton"],["michael-myers","Tyler Mane"],["sam-loomis","Malcolm McDowell"],["leigh-brackett","Brad Dourif"],
    ["annie-brackett","Danielle Harris"],["deborah-myers","Sheri Moon Zombie"],["mya-rockwell","Brea Grant"],["harley-david","Angela Trimbur"],["barbara-collins","Margot Kidder"]
  ],
  production: [
    "Zombie initially said he wouldn't return, then did, with near-total creative control.",
    "Michael is frequently unmasked or half-masked, and the adult Michael speaks a word, \"Die,\" the only time in the franchise.",
    "Weird Al Yankovic appears as himself on a talk show with Loomis."
  ],
  matters: "The horror is inheritance and psychiatric collapse, not stalking. It's the only entry primarily interested in the survivor's interior, and the only one where trauma is shown as a set of symptoms in daylight."
},
{
  id: "g2018", n: 11, title: "Halloween (2018)", year: 2018, tl: ["D"],
  released: "October 19, 2018", runtime: "106 min",
  director: "David Gordon Green", writers: "Jeff Fradley, Danny McBride, David Gordon Green",
  producers: "Malek Akkad, Bill Block, Jason Blum; John Carpenter, Jamie Lee Curtis (exec.)",
  music: "John Carpenter, Cody Carpenter, Daniel Davies", budget: "≈$10M", gross: "≈$255M worldwide",
  shape: "James Jude Courtney · Nick Castle (cameos)",
  setting: "Smith's Grove and Haddonfield, Illinois · Oct 29–31, 2018",
  shot: "Charleston, South Carolina",
  places: ["smiths-grove","haddonfield","laurie-compound","haddonfield-high"],
  logline: "Forty years later, Laurie built a trap. He's coming home to it.",
  plot: [
    "Ignores every sequel. In this timeline Michael was caught on the night of October 31, 1978 and has spent 40 years at Smith's Grove, silent. Two true-crime podcasters, Aaron and Dana, visit him with the mask, then visit Laurie Strode.",
    "Laurie lives in a fortified compound outside town: floodlights, a gun room, a hidden basement. She's been divorced twice. The state took her daughter Karen at 12. Karen raises her own daughter, Allyson, to keep Laurie at a distance.",
    "The night before Halloween, Michael's transfer bus crashes. He kills the podcasters, takes the mask, and walks into Haddonfield trick-or-treat night, house by house.",
    "His psychiatrist, Dr. Sartain, Loomis's former student, reveals he engineered the reunion because he wanted to see it. Michael kills him. Laurie, Karen, and Allyson lure Michael into the basement, which turns out to be a cage, and burn the house down on top of him."
  ],
  cast: [
    ["laurie-strode","Jamie Lee Curtis"],["karen-nelson","Judy Greer"],["allyson-nelson","Andi Matichak"],["frank-hawkins","Will Patton"],
    ["ranbir-sartain","Haluk Bilginer"],["michael-myers","James Jude Courtney / Nick Castle"],["ray-nelson","Toby Huss"],["aaron-korey","Jefferson Hall"],
    ["dana-haines","Rhian Rees"],["vicky","Virginia Gardner"],["julian","Jibrail Nantambu"],["cameron-elam","Dylan Arnold"]
  ],
  production: [
    "Blumhouse, Miramax, and Trancas produced; Universal distributed. Carpenter returned as executive producer and co-composer.",
    "A character explicitly dismisses the sibling connection as a story people made up.",
    "The highest-grossing slasher film ever on release."
  ],
  introduces: ["Allyson Nelson","Karen Nelson","Frank Hawkins","Dr. Sartain"],
  matters: "The sibling relationship is explicitly discarded. Motive returns to zero. Laurie's trauma becomes intergenerational: what it did to the daughter she raised inside it."
},
{
  id: "kills", n: 12, title: "Halloween Kills", year: 2021, tl: ["D"],
  released: "October 15, 2021 (theaters and Peacock)", runtime: "105 min",
  director: "David Gordon Green", writers: "Scott Teems, Danny McBride, David Gordon Green",
  producers: "Malek Akkad, Bill Block, Jason Blum",
  music: "John Carpenter, Cody Carpenter, Daniel Davies", budget: "≈$20M", gross: "≈$133M worldwide",
  shape: "James Jude Courtney · Airon Armstrong (1978)",
  setting: "Haddonfield, Illinois · Oct 31, 2018 (same night) and Oct 31, 1978",
  shot: "Wilmington, North Carolina",
  places: ["haddonfield","haddonfield-memorial","myers-house","laurie-compound"],
  logline: "Same night. The town decides to kill him itself.",
  plot: [
    "Firefighters answer the blaze at Laurie's house and cut open the basement. Michael walks out and kills all of them.",
    "Flashbacks to 1978 show young Officer Frank Hawkins and his partner Pete McCabe cornering Michael at the Myers house that night. Hawkins accidentally shoots McCabe. Loomis stops Hawkins from executing Michael, and Hawkins regrets letting him live for 40 years.",
    "At a bar, Tommy Doyle, the boy Laurie babysat, now grown, leads a toast to 1978's survivors. Lindsey Wallace, Marion Chambers, and Lonnie Elam are there. When news of the escape comes, Tommy rallies the town under one chant: evil dies tonight.",
    "Laurie spends the film in a hospital bed. The mob fills the hospital, turns on an escaped Smith's Grove patient they think is Michael, and chases him until he jumps to his death.",
    "The mob finally corners Michael outside the Myers house and beats and stabs him nearly to death. He stands up and kills them. Karen, who'd taken the mask to lure him, is killed inside his childhood home."
  ],
  cast: [
    ["laurie-strode","Jamie Lee Curtis"],["karen-nelson","Judy Greer"],["allyson-nelson","Andi Matichak"],["tommy-doyle","Anthony Michael Hall"],
    ["lindsey-wallace","Kyle Richards"],["marion-chambers","Nancy Stephens"],["lonnie-elam","Robert Longstreet"],["leigh-brackett","Charles Cyphers"],
    ["frank-hawkins","Will Patton / Thomas Mann (1978)"],["cameron-elam","Dylan Arnold"],["big-john","Scott MacArthur"],["little-john","Michael McDonald"],["michael-myers","James Jude Courtney"]
  ],
  production: [
    "Delayed a year by the pandemic. Released simultaneously in theaters and streaming.",
    "Loomis appears in the 1978 flashbacks, played by Tom Jones Jr. with Colin Mahan's voice, built from Pleasence's likeness.",
    "Kyle Richards, Nancy Stephens, and Charles Cyphers return to roles they played in 1978."
  ],
  matters: "Trauma as civic contagion. The town becomes the monster and Michael barely has to work. Divisive, but the most thematically legible entry since 1978."
},
{
  id: "ends", n: 13, title: "Halloween Ends", year: 2022, tl: ["D"],
  released: "October 14, 2022 (theaters and Peacock)", runtime: "111 min",
  director: "David Gordon Green", writers: "Paul Brad Logan, Chris Bernier, Danny McBride, David Gordon Green",
  producers: "Malek Akkad, Bill Block, Jason Blum",
  music: "John Carpenter, Cody Carpenter, Daniel Davies", budget: "≈$20M", gross: "≈$105M worldwide",
  shape: "James Jude Courtney",
  setting: "Haddonfield, Illinois · Oct 31, 2019 and October 2022",
  shot: "Savannah, Georgia",
  places: ["haddonfield","storm-drain","salvage-yard","haddonfield-bridge"],
  logline: "Michael's been gone 4 years. The town finds a new one.",
  plot: [
    "Halloween 2019. Corey Cunningham, 21, babysits a boy named Jeremy, who locks him in the attic as a prank. Corey kicks the door open and Jeremy goes over the stairwell railing to his death. Corey is acquitted. Haddonfield never forgives him.",
    "2022. Laurie is writing a memoir and living with Allyson, a nurse, in a normal house in town. Allyson and Corey fall for each other, two people the town has marked.",
    "Teenagers throw Corey off a bridge into a storm drain. Below, he finds Michael, old and diminished, hiding in the tunnels. Michael grabs him by the throat and then lets him go. Something passes between them.",
    "Corey starts killing the people who hurt him, sometimes alongside Michael. He takes the mask. Laurie sees it in him. He turns on Michael and takes the mask for himself, then dies at Laurie's house, stabbing himself to frame her, and Michael finishes him.",
    "Michael comes for Laurie in her kitchen. She pins his hands to the counter with knives and cuts his throat and wrist. The town follows the body in a procession to a salvage yard and watches it go into an industrial shredder."
  ],
  cast: [
    ["laurie-strode","Jamie Lee Curtis"],["allyson-nelson","Andi Matichak"],["corey-cunningham","Rohan Campbell"],["frank-hawkins","Will Patton"],
    ["michael-myers","James Jude Courtney"],["joan-cunningham","Joanne Baron"]
  ],
  production: [
    "Marketed as the final confrontation between Laurie and Michael, and Curtis's last appearance as Laurie.",
    "Michael is barely onscreen for the first hour, which split audiences hard.",
    "Universal and Blumhouse's partnership on the franchise ended here."
  ],
  introduces: ["Corey Cunningham","Evil as transmissible"],
  matters: "Evil becomes transmissible: an appetite the town keeps feeding, capable of finding a new host. It leaves the slasher structure for two-thirds of its runtime and remains the franchise's most argued-about film."
}
];
