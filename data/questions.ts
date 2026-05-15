import type { Question } from "@/types";

// Calibrated anchor coords (measured from actual kanto.png):
// Pallet Town:    { x: 21.4, y: 60.6 }
// Viridian City:  { x: 21.6, y: 45.2 }
// Pewter City:    { x: 21.4, y: 26.0 }
// Cerulean City:  { x: 59.4, y: 22.8 }
// Vermilion City: { x: 59.3, y: 53.1 }
// Lavender Town:  { x: 82.9, y: 36.8 }
// Celadon City:   { x: 43.6, y: 36.5 }
// Fuchsia City:   { x: 46.8, y: 70.0 }
// Saffron City:   { x: 59.7, y: 36.8 }
// Cinnabar Island:{ x: 21.8, y: 82.6 }
//
// Routes / landmarks extrapolated from anchors + Kanto geography:
// Viridian Forest: x:21.5, y:36.0  (Viridian–Pewter midpoint)
// Mt. Moon:        x:35.0, y:24.0  (Pewter→Cerulean, upper pass)
// Route 4:         x:46.0, y:22.8  (Mt. Moon→Cerulean)
// Route 8:         x:71.0, y:36.8  (Saffron→Lavender midpoint)
// Route 9:         x:71.0, y:22.8  (Cerulean→Rock Tunnel)
// Route 10/Rock Tunnel: x:82.9, y:30.0
// Route 12:        x:82.9, y:53.0  (south of Lavender, east coast)
// Route 16:        x:32.0, y:36.5  (west of Celadon)
// Route 22:        x:13.0, y:48.0  (west of Viridian)
// Route 24:        x:59.4, y:14.0  (north of Cerulean, Nugget Bridge)
// Route 25:        x:73.0, y:14.0  (northeast to Bill's)
// Diglett's Cave:  x:38.0, y:53.0  (connects west Kanto to Vermilion)
// Power Plant:     x:82.9, y:24.0  (Route 10 coast, north of Lavender)
// Safari Zone:     x:40.0, y:70.0  (west of Fuchsia)
// Seafoam Islands: x:35.0, y:82.6  (south coast between Cinnabar & Fuchsia)
// Victory Road:    x:13.0, y:38.0  (northwest gate above Viridian)
// Bill's Sea Cottage: x:84.0, y:14.0 (northeast cape, end of Route 25)
// S.S. Anne dock:  x:59.3, y:53.1  (Vermilion)
// Pokemon Tower:   x:82.9, y:36.8  (Lavender Town)
// Silph Co.:       x:59.7, y:36.8  (Saffron City)
// Mt. Ember:       x:12.0, y:88.0  (Sevii Islands — off main map, bottom-left edge)
// Seven Island:    x:90.0, y:90.0  (Sevii Islands — off main map, bottom-right)
// Birth Island:    x:94.0, y:72.0  (Sevii Islands — off main map, right edge)

export const questions: Question[] = [
  // DIFFICULTY 1
  {
    id: 1,
    prompt: "In Pokémon Red and Blue, which city is home to the first Gym you're expected to challenge?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 1,
    category: "Gyms",
    answer_location: "Pewter City",
    coordinates: { x: 21.4, y: 26.0 },
    lore_explanation:
      "Pewter City's Gym is led by Brock, a Rock-type specialist. His Geodude and Onix were the first major wall for players who chose Charmander — a rite of passage for an entire generation.",
  },
  {
    id: 2,
    prompt: "In Pokémon Red and Blue, which town do players start their journey from?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 1,
    category: "Towns",
    answer_location: "Pallet Town",
    coordinates: { x: 21.4, y: 60.6 },
    lore_explanation:
      "Pallet Town is one of the most iconic locations in gaming. Its name references the blank canvas of a painter — a subtle nod to the game's design philosophy of a world waiting to be filled in by the player.",
  },
  {
    id: 3,
    prompt: "In Pokémon Red and Blue, which city contains the S.S. Anne, a luxury cruise ship?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 1,
    category: "Story Events",
    answer_location: "Vermilion City",
    coordinates: { x: 59.3, y: 53.1 },
    lore_explanation:
      "The S.S. Anne visits Vermilion City annually and contains the HM01 Cut, taught by the ship's captain. Many players didn't realize the ship permanently leaves after you obtain Cut — sealing off one of Gen 1's most famous hidden locations.",
  },
  {
    id: 4,
    prompt:
      "In Pokémon Red and Blue, which city is home to the Psychic-type Gym led by the telekinetic Gym Leader Sabrina?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 1,
    category: "Gyms",
    answer_location: "Saffron City",
    coordinates: { x: 59.7, y: 36.8 },
    lore_explanation:
      "Saffron City is Kanto's largest city and contains both the Psychic-type Gym and Silph Co. headquarters. Sabrina was widely considered the hardest Gym Leader in Gen 1 due to Psychic-type's dominance.",
  },
  {
    id: 5,
    prompt: "In Pokémon Red and Blue, where does Professor Oak give players their first Pokémon?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 1,
    category: "Story Events",
    answer_location: "Pallet Town",
    coordinates: { x: 21.4, y: 60.6 },
    lore_explanation:
      "Professor Oak's lab sits at the northern edge of Pallet Town. The choice between Bulbasaur, Charmander, and Squirtle in that small lab has sparked debates among fans for nearly 30 years.",
  },
  {
    id: 6,
    prompt:
      "In Pokémon Red and Blue, which city is known as the 'Rainbow City' and houses the Celadon Department Store?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 1,
    category: "Towns",
    answer_location: "Celadon City",
    coordinates: { x: 43.6, y: 36.5 },
    lore_explanation:
      "Celadon City's Department Store was the largest shop in Kanto and sold TMs, rare items, and rooftop vending machine drinks. Many players didn't realize the vending machine lemonade was the cheapest way to befriend the girl blocking the top floor.",
  },
  {
    id: 7,
    prompt:
      "In Pokémon Red and Blue, which city sits on the southern coast of Kanto and is home to the Fire-type Gym and the Pokémon Fossil Lab?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 1,
    category: "Gyms",
    answer_location: "Cinnabar Island",
    coordinates: { x: 21.8, y: 82.6 },
    lore_explanation:
      "Cinnabar Island is a volcanic island where the Fossil Lab could resurrect Dome and Helix Fossils into Kabuto and Omanyte. Its Gym Leader, Blaine, used fire-type Pokémon and was known for his quiz-door gimmick.",
  },
  {
    id: 8,
    prompt:
      "In Pokémon Red and Blue, which city is home to the Pokémon Tower, a graveyard for deceased Pokémon?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 1,
    category: "Lore",
    answer_location: "Lavender Town",
    coordinates: { x: 82.9, y: 36.8 },
    lore_explanation:
      "Lavender Town's haunting music became one of gaming's most enduring urban legends. The original chiptune track has been linked to 'Lavender Town Syndrome,' a creepypasta claiming the frequencies caused distress in young players — entirely fictional, but unforgettable.",
  },

  // DIFFICULTY 2
  {
    id: 9,
    prompt: "In Pokémon FireRed and LeafGreen, where do players receive the VS Seeker from an NPC?",
    game: "Pokémon FireRed/LeafGreen",
    region: "Kanto",
    difficulty: 2,
    category: "Key Items",
    answer_location: "Vermilion City",
    coordinates: { x: 59.3, y: 53.1 },
    lore_explanation:
      "The VS Seeker was introduced in FRLG and lets players re-battle trainers for EXP grinding. It's given by a woman inside the Vermilion Pokémon Center — easy to miss, but invaluable for training.",
  },
  {
    id: 10,
    prompt:
      "In Pokémon Red and Blue, which route connects Cerulean City to the east and leads to the Rock Tunnel?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 2,
    category: "Routes",
    answer_location: "Route 9",
    coordinates: { x: 71.7, y: 22.8 },
    lore_explanation:
      "Route 9 was a long grassy stretch with some of the strongest mid-game trainers in Kanto. It fed directly into Route 10 and the dreaded Rock Tunnel, which required Flash to navigate without stumbling in the dark.",
  },
  {
    id: 11,
    prompt:
      "In Pokémon Red and Blue, which location is home to wild Diglett and Dugtrio underground, connecting Vermilion City to the west side of Kanto?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 2,
    category: "Catch Locations",
    answer_location: "Diglett's Cave",
    coordinates: { x: 62.4, y: 49.5 },
    lore_explanation:
      "Diglett's Cave was the only place to catch Diglett and Dugtrio in Gen 1. Because Cut was needed to enter Vermilion Gym, many players used this cave as an alternate route west — completely bypassing the need to surf.",
  },
  {
    id: 12,
    prompt:
      "In Pokémon Let's Go Pikachu and Eevee, which route is well known for being the earliest place players encounter a Chansey in the wild?",
    game: "Pokémon Let's Go Pikachu/Eevee",
    region: "Kanto",
    difficulty: 2,
    category: "Catch Locations",
    answer_location: "Route 9",
    coordinates: { x: 71.7, y: 22.8 },
    lore_explanation:
      "In Let's Go, Chansey spawns on multiple routes but Route 9 is one of the earliest accessible areas where dedicated hunters could find one. Chansey's high catch candy output made it a fan favorite for leveling.",
  },
  {
    id: 13,
    prompt:
      "In Pokémon Red and Blue, which city's Gym requires players to navigate invisible walls to reach the Gym Leader?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 2,
    category: "Gyms",
    answer_location: "Saffron City",
    coordinates: { x: 59.7, y: 36.8 },
    lore_explanation:
      "Saffron Gym's invisible teleport tiles formed a maze that many players found infuriating. Each wrong step sent you back to the entrance. The correct path required patience or a guide — a perfect design for Sabrina, the Psychic Gym Leader.",
  },
  {
    id: 14,
    prompt:
      "In Pokémon Red and Blue, where do players first encounter Team Rocket in a significant story confrontation — inside a building they have taken over?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 2,
    category: "Story Events",
    answer_location: "Celadon City",
    coordinates: { x: 43.6, y: 36.5 },
    lore_explanation:
      "Team Rocket's Game Corner in Celadon City hid their underground base behind a poster. This was the player's first major confrontation with Giovanni's organization, culminating in obtaining the Silph Scope — needed to reveal the ghosts in Pokémon Tower.",
  },
  {
    id: 15,
    prompt:
      "In Pokémon Red and Blue, which route runs directly south of Lavender Town along the eastern coast of Kanto?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 2,
    category: "Routes",
    answer_location: "Route 12",
    coordinates: { x: 82.9, y: 53.0 },
    lore_explanation:
      "Route 12 was a long fishing route on Kanto's eastern coast. It introduced the Super Rod fishing mechanic and was one of the few places to catch Staryu in Gen 1 — an often-overlooked Water-type with excellent stats.",
  },
  {
    id: 16,
    prompt:
      "In Pokémon Red and Blue, which route west of Celadon City requires Cut to access the full path and contains a gate leading to Cycling Road?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 2,
    category: "Routes",
    answer_location: "Route 16",
    coordinates: { x: 32.0, y: 36.5 },
    lore_explanation:
      "Route 16 housed a hidden Snorlax blocking the road, one of only two in Kanto. It also gave access to Cycling Road, a one-way downhill route that was one of the few places players felt actual momentum in an otherwise grid-based game.",
  },

  // DIFFICULTY 3
  {
    id: 17,
    prompt: "In Pokémon Yellow, which route contains a house where a man gives you TM28 (Dig) for free?",
    game: "Pokémon Yellow",
    region: "Kanto",
    difficulty: 3,
    category: "Key Items",
    answer_location: "Route 4",
    coordinates: { x: 46.0, y: 22.8 },
    lore_explanation:
      "Dig is one of the most useful early TMs, allowing escape from caves and dealing solid Ground-type damage. The man in the Route 4 house gave it away freely — a gift many players completely overlooked on their first run.",
  },
  {
    id: 18,
    prompt:
      "In Pokémon Red and Blue, where do players find the Fossil Maniac's counterpart — the scientist who gives away one of the two Kanto fossils after the Mt. Moon event?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 3,
    category: "Story Events",
    answer_location: "Mt. Moon",
    coordinates: { x: 38.8, y: 22.9 },
    lore_explanation:
      "At the end of Mt. Moon, a Super Nerd guarded two fossils — the Dome Fossil and the Helix Fossil. The one you didn't pick was gone forever in a single playthrough. This small choice sparked massive online debates about Kabuto vs. Omanyte.",
  },
  {
    id: 19,
    prompt:
      "In Pokémon Red and Blue, which location contains the Power Plant where Zapdos is encountered as a legendary Pokémon?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 3,
    category: "Catch Locations",
    answer_location: "Power Plant",
    coordinates: { x: 82.8, y: 26.0 },
    lore_explanation:
      "The Power Plant was only accessible via Surf on Route 10. It contained wild Voltorb, Electrode, and Magnemite — all capable of being mistaken for items in the trash cans. Zapdos waited at the end as Kanto's first available legendary bird.",
  },
  {
    id: 20,
    prompt:
      "In Pokémon Red and Blue, which island cave requires Surf and Strength to navigate, and is the only place to catch the legendary Articuno?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 3,
    category: "Catch Locations",
    answer_location: "Seafoam Islands",
    coordinates: { x: 35.1, y: 82.8 },
    lore_explanation:
      "The Seafoam Islands required both Surf and Strength to navigate. Players had to push boulders into holes to redirect the current blocking access to Articuno's chamber — a puzzle that stumped many players before the internet existed.",
  },
  {
    id: 21,
    prompt:
      "In Pokémon FireRed and LeafGreen, where do players encounter the safari-zone warden who has lost his Gold Teeth, blocking access to HM04 Strength?",
    game: "Pokémon FireRed/LeafGreen",
    region: "Kanto",
    difficulty: 3,
    category: "NPCs",
    answer_location: "Fuchsia City",
    coordinates: { x: 46.8, y: 70.0 },
    lore_explanation:
      "The Safari Zone Warden's teeth were a Gen 1 classic side quest. Players had to find his Gold Teeth inside the Safari Zone and return them to unlock HM04 Strength — a move required to progress through several late-game areas.",
  },
  {
    id: 22,
    prompt:
      "In Pokémon Red and Blue, which route north of Cerulean City is known for its trainers and leads to Bill's Sea Cottage at the cape?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 3,
    category: "Routes",
    answer_location: "Route 24",
    coordinates: { x: 59.4, y: 13.1 },
    lore_explanation:
      "Route 24, also called Nugget Bridge, featured a famous bridge where players defeated five trainers in a row for prizes, only to be asked by a Team Rocket member at the end if they'd like to join — the first hint at the organization's recruiting tactics.",
  },
  {
    id: 23,
    prompt:
      "In Pokémon Red and Blue, where is the in-game location where players must present the Silph Scope to reveal the true identity of a ghost blocking the stairwell?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 3,
    category: "Story Events",
    answer_location: "Lavender Town",
    coordinates: { x: 82.9, y: 36.8 },
    lore_explanation:
      "Without the Silph Scope, the ghost on the third floor of Pokémon Tower was unidentifiable and could not be caught or defeated. With it, the ghost revealed itself as a Marowak — the deceased mother of a Cubone, in one of Gen 1's most emotionally resonant story moments.",
  },
  {
    id: 24,
    prompt:
      "In Pokémon Let's Go Pikachu and Eevee, which location was redesigned to feature a new area called the GO Park Complex for transferring Pokémon from Pokémon GO?",
    game: "Pokémon Let's Go Pikachu/Eevee",
    region: "Kanto",
    difficulty: 3,
    category: "Key Items",
    answer_location: "Fuchsia City",
    coordinates: { x: 46.8, y: 70.0 },
    lore_explanation:
      "The GO Park Complex replaced the Safari Zone in Let's Go, allowing players to transfer Pokémon from Pokémon GO into the main game. It was a significant bridge between the mobile and mainline game ecosystems — and the first time Pokémon GO connectivity appeared in a console title.",
  },

  // DIFFICULTY 4
  {
    id: 25,
    prompt:
      "In Pokémon Red and Blue, which location contains a man who will trade his Farfetch'd for your Spearow?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 4,
    category: "NPCs",
    answer_location: "Vermilion City",
    coordinates: { x: 59.3, y: 53.1 },
    lore_explanation:
      "This in-game trade gave players a Farfetch'd named DUX — one of Kanto's rarest Pokémon, unobtainable in the wild in Gen 1. The NPC was easy to miss inside an ordinary house. DUX became a cult figure for completionists.",
  },
  {
    id: 26,
    prompt:
      "In Pokémon FireRed and LeafGreen, where do players find the Ruby item that must be delivered to Celio on One Island to begin repairing the Network Machine?",
    game: "Pokémon FireRed/LeafGreen",
    region: "Kanto",
    difficulty: 4,
    category: "Key Items",
    answer_location: "Mt. Ember",
    coordinates: { x: 12.0, y: 88.0 },
    off_map: true,
    map_hint: "Mt. Ember is a Sevii Island not shown on this map — click near the bottom-left corner.",
    lore_explanation:
      "The Ruby and Sapphire items in FRLG were part of an exclusive post-game quest on the Sevii Islands that unlocked trading with Ruby, Sapphire, Colosseum, and XD. The Ruby was hidden on Mt. Ember, guarded by two Team Rocket Grunts reciting a password.",
  },
  {
    id: 27,
    prompt:
      "In Pokémon Red and Blue, which route west of Lavender Town contains a long stretch of trainers and a gatehouse hiding a shortcut to Saffron City that is initially locked?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 4,
    category: "Routes",
    answer_location: "Route 8",
    coordinates: { x: 70.3, y: 36.3 },
    lore_explanation:
      "Route 8 ran between Lavender Town and Saffron City. The gatehouse guards initially refused entry to Saffron because they were thirsty — players had to obtain a drink from the Celadon Dept. Store vending machines to unlock all Saffron's eastern gates.",
  },
  {
    id: 28,
    prompt:
      "In Pokémon Yellow, which route contains the gatehouse where players first see Jessie and James of Team Rocket watching from a window after their initial defeat?",
    game: "Pokémon Yellow",
    region: "Kanto",
    difficulty: 4,
    category: "Story Events",
    answer_location: "Route 8",
    coordinates: { x: 70.3, y: 36.3 },
    lore_explanation:
      "Pokémon Yellow incorporated the anime's story, including recurring appearances by Jessie and James. Their cameos in gatehouses and random locations were a charm unique to Yellow — giving fans of the show the closest thing to a playable anime experience.",
  },
  {
    id: 29,
    prompt:
      "In Pokémon Red and Blue, where does the player find the Old Amber fossil that can be resurrected into Aerodactyl?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 4,
    category: "Key Items",
    answer_location: "Pewter City",
    coordinates: { x: 21.4, y: 26.0 },
    lore_explanation:
      "A scientist in the Pewter City Museum gave players the Old Amber — one of three fossils in Gen 1. Unlike the Mt. Moon fossils which were a choice, Old Amber was a free gift most players missed entirely because it required talking to a specific NPC in the museum's back room.",
  },
  {
    id: 30,
    prompt:
      "In Pokémon Red and Blue, where do players obtain HM02 Fly from a hidden character after defeating a Team Rocket member?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 4,
    category: "Key Items",
    answer_location: "Route 16",
    coordinates: { x: 32.0, y: 36.5 },
    lore_explanation:
      "HM02 Fly was hidden in a building on Route 16, given by a girl who asked players to keep her location secret from her father. This NPC interaction was entirely optional and easily missed — leaving many players without Fly for large portions of the game.",
  },
  {
    id: 31,
    prompt:
      "In Pokémon FireRed and LeafGreen, which city's Game Corner prize exchange is the only place players can obtain Porygon — available for 9,999 coins with no other way to catch it in the wild?",
    game: "Pokémon FireRed/LeafGreen",
    region: "Kanto",
    difficulty: 4,
    category: "Catch Locations",
    answer_location: "Celadon City",
    coordinates: { x: 43.6, y: 36.5 },
    lore_explanation:
      "The Celadon City Game Corner prize exchange included Porygon for 9,999 coins — the most expensive prize in the shop. Porygon was entirely exclusive to this location in Gen 1, making it one of the rarest and most coveted Pokémon for completionists.",
  },
  {
    id: 32,
    prompt:
      "In Pokémon Red and Blue, where is the location of the invisible PC in the Cinnabar Island Pokémon Lab that allows players to exploit the item duplication glitch?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 4,
    category: "Glitches",
    answer_location: "Cinnabar Island",
    coordinates: { x: 21.8, y: 82.6 },
    lore_explanation:
      "The Cinnabar Island Lab contained a glitch involving the fossil revival scientists. But the famous item duplication glitch (using the PC deposit/withdraw trick with the sixth item slot) worked from any PC — the Cinnabar Lab's was notable for being near the coastal surfing glitch spot.",
  },

  // DIFFICULTY 5
  {
    id: 33,
    prompt:
      "The famous Mew glitch in Pokémon Red and Blue requires the player to encounter a specific trainer on a specific route first, then flee before he sees you. The most commonly referenced method uses a trainer on which route?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 5,
    category: "Glitches",
    answer_location: "Route 25",
    coordinates: { x: 67.2, y: 13.1 },
    lore_explanation:
      "The Mew glitch is one of gaming's most celebrated exploits. The classic method involves the Youngster with a Slowpoke on Route 25. After the Start menu trick and a random encounter, the game spawns a level 7 Mew. It was discovered by players, not developers, and Mew's presence in the code was originally just a backup test Pokémon.",
  },
  {
    id: 34,
    prompt:
      "In Pokémon Red and Blue, the truck near the S.S. Anne that spawned the Mew playground rumor — where was it located?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 5,
    category: "Lore/Myths",
    answer_location: "Vermilion City",
    coordinates: { x: 59.3, y: 53.1 },
    lore_explanation:
      "The truck near the S.S. Anne dock in Vermilion City was only accessible via Surf after the ship departed. Players found it using the Strength glitch or item duplication. It contained nothing — but the rumor that Mew lived beneath it became one of gaming's greatest urban legends.",
  },
  {
    id: 35,
    prompt:
      "In Pokémon Red and Blue, where is the invisible trainer glitch location on Route 8 most commonly used to initiate the Mew glitch via the Gambler method?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 5,
    category: "Glitches",
    answer_location: "Route 8",
    coordinates: { x: 70.3, y: 36.3 },
    lore_explanation:
      "The Gambler on Route 8 was the second commonly used NPC for the Mew glitch — encountered after establishing the required game state near Lavender Town. The glitch exploited how the game stored trainer-encounter flags in memory, crossing wires that resulted in Mew's data being loaded as a wild Pokémon.",
  },
  {
    id: 36,
    prompt:
      "In Pokémon FireRed and LeafGreen, which island in the Sevii Islands chain contains the Tanoby Ruins where Unown can be encountered — the only place in FRLG where Unown is available?",
    game: "Pokémon FireRed/LeafGreen",
    region: "Kanto",
    difficulty: 5,
    category: "Catch Locations",
    answer_location: "Seven Island",
    coordinates: { x: 4.0, y: 4.0 },
    off_map: true,
    map_hint: "Seven Island is a Sevii Island not shown on this map — click the top-left corner.",
    lore_explanation:
      "The Tanoby Ruins on Seven Island contained chambers where different forms of Unown could be found. To unlock them, players had to solve the Tanoby Key puzzle on the same island — a Strength boulder puzzle almost no one discovered without a guide.",
  },
  {
    id: 37,
    prompt:
      "In Pokémon Red and Blue, a glitch allows players to walk on the border tiles of the map and encounter a Pokémon with index number 0 — commonly known as 'MissingNo.' Where is the most well-known trigger location for this glitch?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 5,
    category: "Glitches",
    answer_location: "Cinnabar Island",
    coordinates: { x: 21.8, y: 82.6 },
    lore_explanation:
      "The MissingNo. glitch was triggered by surfing along the east coast of Cinnabar Island after talking to the Old Man in Viridian City. The encounter rate was loaded from the player's name characters. MissingNo. became the most famous glitch Pokémon in history and was often accompanied by a duplicated sixth item — a side effect, not a feature.",
  },
  {
    id: 38,
    prompt:
      "In Pokémon Yellow, there is a location where players can receive a Bulbasaur from an NPC — without trading — if their Pikachu's happiness is high enough. Where is this NPC?",
    game: "Pokémon Yellow",
    region: "Kanto",
    difficulty: 5,
    category: "NPCs",
    answer_location: "Cerulean City",
    coordinates: { x: 59.4, y: 22.8 },
    lore_explanation:
      "A girl in a house in Cerulean City gave players a Bulbasaur if their partner Pikachu was happy enough — one of three special gifts in Yellow that gave players all three starters. This happiness mechanic was a direct import from the anime and made Yellow the first Pokémon game with a meaningful friendship system.",
  },
  {
    id: 39,
    prompt:
      "In Pokémon Red and Blue, where does Bill the Pokémon Storage System creator live, and where does the player help him revert from a human-Pokémon fusion experiment gone wrong?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 5,
    category: "NPCs",
    answer_location: "Bill's Sea Cottage",
    coordinates: { x: 75.8, y: 12.8 },
    lore_explanation:
      "Bill's Sea Cottage on Route 25's cape is where players encounter Bill fused with a Pokémon — one of Gen 1's strangest and most disturbing story moments. After the player helps him separate, he rewards them with an S.S. Anne ticket. Bill's PC Storage system was the entire reason boxed Pokémon were a concept.",
  },
  {
    id: 40,
    prompt:
      "In Pokémon FireRed and LeafGreen, which area requires the Aurora Ticket — a Nintendo event-exclusive item — to access and encounter Deoxys, making it one of the rarest encounter locations in Gen 3?",
    game: "Pokémon FireRed/LeafGreen",
    region: "Kanto",
    difficulty: 5,
    category: "Lore/Myths",
    answer_location: "Birth Island",
    coordinates: { x: 94.0, y: 4.0 },
    off_map: true,
    map_hint: "Birth Island is a Sevii Island not shown on this map — click the top-right corner.",
    lore_explanation:
      "Birth Island required the Aurora Ticket, distributed only at official Nintendo events in 2004–2005. Players who missed the event could never legitimately access Deoxys in FRLG. The island featured a triangle puzzle to summon Deoxys — one of the last examples of event-exclusive legendary Pokémon requiring physical attendance to obtain.",
  },

  // DIFFICULTY 1 — additional
  {
    id: 41,
    prompt: "In Pokémon Red and Blue, which city is home to Misty, the Water-type Gym Leader whose Starmie was a notorious early-game wall?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 1,
    category: "Gyms",
    answer_location: "Cerulean City",
    coordinates: { x: 59.4, y: 22.8 },
    lore_explanation:
      "Cerulean City's Gym is led by Misty, the self-described Tomboyish Mermaid. Her Starmie carried BubbleBeam and Psychic-adjacent power, making it a brutal opponent for unprepared teams. The Cascade Badge she awards lets traded Pokémon up to level 30 obey.",
  },
  {
    id: 42,
    prompt: "In Pokémon Red and Blue, which city is home to Koga, the Poison-type Gym Leader whose arena is a maze of invisible walls?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 1,
    category: "Gyms",
    answer_location: "Fuchsia City",
    coordinates: { x: 46.8, y: 70.0 },
    lore_explanation:
      "Koga's Gym in Fuchsia City featured invisible walls to disorient players — matching his ninja-themed character. He later becomes an Elite Four member in Gold and Silver, passing the Fuchsia Gym to his daughter Janine.",
  },
  {
    id: 43,
    prompt: "In Pokémon Red and Blue, which city is home to Lt. Surge, the Electric-type Gym Leader whose arena is locked behind a trash-can puzzle?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 1,
    category: "Gyms",
    answer_location: "Vermilion City",
    coordinates: { x: 59.3, y: 53.1 },
    lore_explanation:
      "Lt. Surge's trash-can lock puzzle — two adjacent cans in the correct order — was brutal without a guide. His Raichu hit hard, and his lore as a war veteran who relied on Electric-type moves to survive added rare depth to a gym leader in Gen 1.",
  },
  {
    id: 44,
    prompt: "In Pokémon Red and Blue, which city contains the final Gym that stays locked for most of the game, only opening after players have nearly completed their journey?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 1,
    category: "Gyms",
    answer_location: "Viridian City",
    coordinates: { x: 21.6, y: 45.2 },
    lore_explanation:
      "Viridian City's Gym was sealed throughout most of the game. Its leader was Giovanni — Team Rocket's boss — meaning the final badge came from beating the same villain players had been fighting all journey. It was one of Gen 1's most satisfying reveals.",
  },

  // DIFFICULTY 2 — additional
  {
    id: 45,
    prompt: "In Pokémon Red and Blue, which route is the very first players walk — a simple north-south path connecting Pallet Town to Viridian City?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 2,
    category: "Routes",
    answer_location: "Route 1",
    coordinates: { x: 21.3, y: 53.7 },
    lore_explanation:
      "Route 1 is intentionally gentle — just Pidgey and Rattata in the grass, easing new players into wild encounters. It set the design philosophy that early Kanto routes should feel like a tutorial, letting the world's complexity grow naturally as players explored further.",
  },
  {
    id: 46,
    prompt: "In Pokémon Red and Blue, where do players redeem a Bike Voucher — given by the Pokémon Fan Club chairman in Vermilion — to obtain the Bicycle?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 2,
    category: "Key Items",
    answer_location: "Cerulean City",
    coordinates: { x: 59.4, y: 22.8 },
    lore_explanation:
      "The Bike Shop in Cerulean City sold Bicycles for a million Pokédollars — a price no player could ever afford. The only way to obtain one was the Bike Voucher from the Pokémon Fan Club chairman in Vermilion, rewarded for patiently listening to him brag about his Rapidash.",
  },
  {
    id: 47,
    prompt: "In Pokémon Red and Blue, which city's headquarters building is taken over by Team Rocket, trapping scientists inside and requiring players to fight their way to the top floor?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 2,
    category: "Story Events",
    answer_location: "Saffron City",
    coordinates: { x: 59.7, y: 36.8 },
    lore_explanation:
      "Silph Co.'s 11-story headquarters in Saffron City was Gen 1's largest dungeon. Team Rocket occupied it to steal the Master Ball prototype. Players had to teleporter-hop between floors to find Giovanni and the company president — who rewarded them with the only legitimate Master Ball in the game.",
  },
  {
    id: 48,
    prompt: "In Pokémon Red and Blue, where does a trainer give players a free Eevee — found in a Poké Ball left inside a building connected to the city's back alley?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 2,
    category: "Catch Locations",
    answer_location: "Celadon City",
    coordinates: { x: 43.6, y: 36.5 },
    lore_explanation:
      "A free Eevee was hidden in a Poké Ball on the top floor of Celadon Mansion — a building accessible through a back alley behind the Celadon Hotel. Most players walked past it entirely. Eevee's three evolution options in Gen 1 made it one of the most strategically valuable gifts in the game.",
  },
  {
    id: 49,
    prompt: "In Pokémon Red and Blue, which city's western gate connects to Route 22, the only path toward the Pokémon League before Victory Road is opened?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 2,
    category: "Routes",
    answer_location: "Viridian City",
    coordinates: { x: 21.6, y: 45.2 },
    lore_explanation:
      "Route 22 west of Viridian City was the gateway toward the Pokémon League. Players encountered their rival here early on — one of the first battles that required a real strategy. The route later led to the Victory Road gate, which checked all 8 Gym Badges before allowing entry.",
  },

  // DIFFICULTY 3 — additional
  {
    id: 50,
    prompt: "In Pokémon Red and Blue, which town is home to Mr. Fuji — the kind old man who gives players the Poké Flute after being rescued from Team Rocket?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 3,
    category: "NPCs",
    answer_location: "Lavender Town",
    coordinates: { x: 82.9, y: 36.8 },
    lore_explanation:
      "Mr. Fuji lived in Lavender Town and cared for orphaned Pokémon, including the Cubone whose mother was killed by Team Rocket in Pokémon Tower. After being rescued, he gave players the Poké Flute — required to wake the Snorlax blocking Routes 12 and 16.",
  },
  {
    id: 51,
    prompt: "In Pokémon Red and Blue, where is HM03 Surf hidden — in a secret house at the end of a timed nature reserve that costs 500 Pokédollars to enter?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 3,
    category: "Key Items",
    answer_location: "Safari Zone",
    coordinates: { x: 46.7, y: 66.3 },
    lore_explanation:
      "HM03 Surf was found in the secret house at the far end of the Safari Zone in Fuchsia City. It was one of the most essential HMs in the game, required to reach Cinnabar Island, the Seafoam Islands, and the Power Plant — yet many players had no idea it was hidden inside the zone.",
  },
  {
    id: 52,
    prompt: "In Pokémon Red and Blue, which dark cave on Route 10 required players to use Flash to navigate safely — and served as the gatekeeping dungeon between Cerulean and Lavender Town?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 3,
    category: "Routes",
    answer_location: "Rock Tunnel",
    coordinates: { x: 82.7, y: 30.2 },
    lore_explanation:
      "Rock Tunnel had no lights — unlike Mt. Moon — making it nearly impossible without Flash reducing wild encounter accuracy. It was the only path between eastern and western Kanto before Fly was available, and its Onix and Geodude encounters made it a grind for players without Grass or Water types.",
  },
  {
    id: 53,
    prompt: "In Pokémon Red and Blue, on which route can players buy a Magikarp from a shady salesman for 500 Pokédollars — inside the Pokémon Center east of Mt. Moon?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 3,
    category: "NPCs",
    answer_location: "Route 4",
    coordinates: { x: 46.0, y: 22.8 },
    lore_explanation:
      "The Magikarp salesman on Route 4's Pokémon Center was technically a rip-off — Magikarp could be caught for free with the Old Rod. But many players paid the 500 Pokédollars anyway, either unaware of alternatives or simply trusting the pitch. It's one of Gen 1's most memorable optional interactions.",
  },
  {
    id: 54,
    prompt: "In Pokémon Red and Blue, which cave north of Cerulean City is only accessible after becoming Champion, and is the lair of the game's most powerful Pokémon — Mewtwo?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 3,
    category: "Catch Locations",
    answer_location: "Cerulean City",
    coordinates: { x: 59.4, y: 22.8 },
    lore_explanation:
      "Cerulean Cave — also called the Unknown Dungeon — was sealed until players became Champion. Inside, Mewtwo waited at level 70, by far the strongest wild encounter in Gen 1. Its presence was a reward for completing the game, and catching it with a single Ultra Ball became a rite of passage.",
  },

  // DIFFICULTY 4 — additional
  {
    id: 55,
    prompt: "In Pokémon Red and Blue, which route along Kanto's eastern coast is blocked by a sleeping Snorlax that requires the Poké Flute to wake?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 4,
    category: "Story Events",
    answer_location: "Route 12",
    coordinates: { x: 82.9, y: 53.0 },
    lore_explanation:
      "One of Kanto's two Snorlax blocked Route 12's southern path along the east coast. Both required the Poké Flute from Mr. Fuji to wake. At level 30, the catchable Snorlax had the highest base HP of any non-legendary Pokémon in Gen 1 — making it a prized addition to any team.",
  },
  {
    id: 56,
    prompt: "In Pokémon Red and Blue, which town is home to the Name Rater — an NPC who can change the nickname of any Pokémon caught by the player?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 4,
    category: "NPCs",
    answer_location: "Lavender Town",
    coordinates: { x: 82.9, y: 36.8 },
    lore_explanation:
      "The Name Rater in Lavender Town would rename any Pokémon the player had caught themselves — but refused to rename Pokémon received via trade, as he considered the original trainer's name more meaningful. This mechanic quietly encoded Pokémon ownership into the game's logic.",
  },
  {
    id: 57,
    prompt: "In Pokémon Red and Blue, which city contains a house where an NPC gives players TM29 Psychic — one of the most powerful and sought-after moves in Gen 1?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 4,
    category: "Key Items",
    answer_location: "Saffron City",
    coordinates: { x: 59.7, y: 36.8 },
    lore_explanation:
      "TM29 Psychic was given by an NPC in a house in eastern Saffron City — easy to miss in a city already packed with content. Psychic was the best move in Gen 1 due to nearly no effective counters, making this free TM one of the most valuable gifts in the entire game.",
  },
  {
    id: 58,
    prompt: "In Pokémon Red and Blue, which route west of Viridian City is the only overworld path toward the Pokémon League, and the site of an early rival battle before players have Gym Badges?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 4,
    category: "Routes",
    answer_location: "Route 22",
    coordinates: { x: 15.2, y: 45.4 },
    lore_explanation:
      "Route 22 was the first glimpse of the road to the Pokémon League — gated by a guardhouse that checked for all 8 Gym Badges. Players met their rival here early for an optional battle, then returned much later for the final approach through Victory Road. The route's brevity belied its narrative weight.",
  },
  {
    id: 59,
    prompt: "In Pokémon Red and Blue, which building on Cinnabar Island must players explore to find the secret key needed to unlock Blaine's Gym?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 4,
    category: "Story Events",
    answer_location: "Cinnabar Island",
    coordinates: { x: 21.8, y: 82.6 },
    lore_explanation:
      "The Pokémon Mansion on Cinnabar Island was a burned-out research facility where scientists had created Mewtwo. Players had to navigate its multiple floors and activate switches to unlock Blaine's sealed Gym next door. The mansion's journals detailing Mewtwo's origin were among the most lore-rich text in Gen 1.",
  },

  // DIFFICULTY 5 — additional
  {
    id: 60,
    prompt: "In Pokémon Red and Blue, which city is home to the old man whose catching tutorial temporarily overwrites the player's name in memory — the root cause of the coastal MissingNo. glitch?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 5,
    category: "Glitches",
    answer_location: "Viridian City",
    coordinates: { x: 21.6, y: 45.2 },
    lore_explanation:
      "The old man in Viridian City demonstrated catching a Weedle using the player's name slot as temporary storage. When players later surfed along Cinnabar's coast, the game pulled that buffer as encounter data — spawning MissingNo. and other index-based glitch Pokémon. The old man is the inadvertent trigger of one of gaming's most famous exploits.",
  },
  {
    id: 61,
    prompt: "In Pokémon Red and Blue, the 'Glitch City' exploit produces a corrupted overworld map. Which facility's entrance is used to trigger it — by saving, resetting, and immediately exiting upon re-entry?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 5,
    category: "Glitches",
    answer_location: "Fuchsia City",
    coordinates: { x: 46.8, y: 70.0 },
    lore_explanation:
      "Glitch City was triggered at the Safari Zone entrance in Fuchsia City. Saving inside and immediately leaving after a reset confused the game's step-counter and map flags, producing a visually corrupted tile set. Walking in Glitch City long enough triggered a crash — but the scrambled landscape became one of Gen 1's most iconic images.",
  },
  {
    id: 62,
    prompt: "In Pokémon FireRed and LeafGreen, which Sevii Island is only reachable with the Mystic Ticket — a Nintendo event-exclusive item — and contains both Ho-Oh and Lugia in the same location?",
    game: "Pokémon FireRed/LeafGreen",
    region: "Kanto",
    difficulty: 5,
    category: "Lore/Myths",
    answer_location: "Navel Rock",
    coordinates: { x: 96.6, y: 96.6 },
    off_map: true,
    map_hint: "Navel Rock is a Sevii Island not shown on this map — click the bottom-right corner.",
    lore_explanation:
      "Navel Rock required the Mystic Ticket distributed at Nintendo events in 2004–2005. Ho-Oh waited at the summit and Lugia in the depths — the only way to catch both legendaries in a single Gen 3 cartridge. Like Birth Island, it exemplified an era when rare content demanded physical event attendance.",
  },
  {
    id: 63,
    prompt: "In Pokémon Red and Blue, which cave dungeon immediately before the Elite Four requires Strength to solve boulder puzzles and all 8 Gym Badges just to enter?",
    game: "Pokémon Red/Blue",
    region: "Kanto",
    difficulty: 5,
    category: "Story Events",
    answer_location: "Victory Road",
    coordinates: { x: 12.1, y: 22.5 },
    lore_explanation:
      "Victory Road was the final test before the Elite Four — a multi-floor cave full of powerful trainers and Strength puzzles. The Badge Check gates at its entrance verified all 8 Gym Badges, ensuring players had earned the right to challenge the best trainers in Kanto. Moltres was hidden inside as an optional bonus for explorers.",
  },
];
