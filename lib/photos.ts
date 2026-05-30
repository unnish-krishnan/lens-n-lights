export interface PhotoItem {
  id: string
  title: string
  category: string
  imageUrl: string
  description: string
  isUploaded?: boolean
}

export const SAMPLE_PHOTOS: PhotoItem[] = [
  // ── Landscapes ────────────────────────────────────────────────
  {
    id: 'landscape-dubai-sunset-sun',
    title: 'Desert Sun',
    category: 'Landscapes',
    imageUrl: '/images/landscapes/dubai-sunset-sun.jpg',
    description: 'A blazing orb dissolves into the hazy amber desert sky.',
  },
  {
    id: 'landscape-burj-in-haze',
    title: 'Tower in the Haze',
    category: 'Landscapes',
    imageUrl: '/images/landscapes/burj-in-haze.jpg',
    description: 'The Burj Khalifa materialises as a ghost through layers of sandstorm light.',
  },
  {
    id: 'landscape-city-sunrise-domes',
    title: 'Domes & Cranes',
    category: 'Landscapes',
    imageUrl: '/images/landscapes/city-sunrise-domes.jpg',
    description: 'Ornate domes silhouetted against a sun-scorched city morning.',
  },
  {
    id: 'landscape-crimson-sun',
    title: 'Crimson Disc',
    category: 'Landscapes',
    imageUrl: '/images/landscapes/crimson-sun.jpg',
    description: 'The sun glows deep blood-orange as it settles over the rooftops.',
  },
  {
    id: 'landscape-dubai-skyline-dusk',
    title: 'Dubai at Dusk',
    category: 'Landscapes',
    imageUrl: '/images/landscapes/dubai-skyline-dusk.jpg',
    description: 'The entire Dubai skyline ignites in layers of violet and copper at sunset.',
  },
  {
    id: 'landscape-rocky-coast',
    title: 'Rocky Shore',
    category: 'Landscapes',
    imageUrl: '/images/landscapes/rocky-coast.jpg',
    description: 'Wave-carved rock shelves meet the turquoise sea under a pale sky.',
  },

  // ── Nature ────────────────────────────────────────────────────
  {
    id: 'nature-bougainvillea-wall',
    title: 'Magenta Cascade',
    category: 'Nature',
    imageUrl: '/images/nature/bougainvillea-wall.jpg',
    description: 'Bougainvillea smothers every surface in vivid magenta and lime.',
  },
  {
    id: 'nature-feather-grass',
    title: 'Feather Grass',
    category: 'Nature',
    imageUrl: '/images/nature/feather-grass.jpg',
    description: 'Plumes of ornamental grass sway in a warm midday breeze.',
  },
  {
    id: 'nature-sunflower-bokeh',
    title: 'Sunflower',
    category: 'Nature',
    imageUrl: '/images/nature/sunflower-bokeh.jpg',
    description: 'A single sunflower holds perfectly still against a dreamy soft background.',
  },
  {
    id: 'nature-orchid-branch',
    title: 'Wild Orchid',
    category: 'Nature',
    imageUrl: '/images/nature/orchid-branch.jpg',
    description: 'Tiny star-shaped orchids cluster along a thorny branch in still grey air.',
  },
  {
    id: 'nature-red-bougainvillea',
    title: 'Red Bougainvillea',
    category: 'Nature',
    imageUrl: '/images/nature/red-bougainvillea.jpg',
    description: 'A lone crimson branch arcs gracefully against a concrete wall.',
  },

  // ── Abstract ──────────────────────────────────────────────────
  {
    id: 'abstract-crescent-moon',
    title: 'Crescent',
    category: 'Abstract',
    imageUrl: '/images/abstract/crescent-moon.jpg',
    description: "The moon's cratered edge glows golden against absolute darkness.",
  },

  // ── Birds ─────────────────────────────────────────────────────
  {
    id: 'birds-yellow-parrot-tree',
    title: 'Sun Conure',
    category: 'Birds',
    imageUrl: '/images/birds/yellow-parrot-tree.jpg',
    description: 'A vivid yellow-green conure perches quietly among dense jungle foliage.',
  },
  {
    id: 'birds-macaw-pair',
    title: 'Macaw Conversation',
    category: 'Birds',
    imageUrl: '/images/birds/macaw-pair.jpg',
    description: 'A blue-and-gold macaw leans in to converse with a smaller yellow companion.',
  },
  {
    id: 'birds-flamingos-feeding',
    title: 'Flamingos at Feed',
    category: 'Birds',
    imageUrl: '/images/birds/flamingos-feeding.jpg',
    description: 'Two flamingos dip their distinctive bills into the shimmering green water.',
  },
  {
    id: 'birds-flamingos-swimming',
    title: 'Flamingo Pair',
    category: 'Birds',
    imageUrl: '/images/birds/flamingos-swimming.jpg',
    description: 'A pair of flamingos glide in perfect symmetry across a sunlit pond.',
  },
  {
    id: 'birds-flamingos-with-duck',
    title: 'Unexpected Company',
    category: 'Birds',
    imageUrl: '/images/birds/flamingos-with-duck.jpg',
    description: 'Flamingos wade peacefully as a lone mallard duck keeps watch on the bank.',
  },
  {
    id: 'birds-flamingo-lone',
    title: 'Lone Flamingo',
    category: 'Birds',
    imageUrl: '/images/birds/flamingo-lone.jpg',
    description: 'A single flamingo drifts across glassy green water in complete serenity.',
  },
  {
    id: 'birds-sandpipers-shore',
    title: 'Sandpipers',
    category: 'Birds',
    imageUrl: '/images/birds/sandpipers-shore.jpg',
    description: 'A flock of sandpipers picks across rust-coloured seaweed on the rocky shore.',
  },
  {
    id: 'birds-peacock-portrait',
    title: 'Peacock Portrait',
    category: 'Birds',
    imageUrl: '/images/birds/peacock-portrait.jpg',
    description: "A peahen's piercing eye and regal crown feathers fill the frame.",
  },
  {
    id: 'birds-grey-heron',
    title: 'Grey Heron',
    category: 'Birds',
    imageUrl: '/images/birds/grey-heron.jpg',
    description: 'A grey heron stands motionless above the reeds, scanning the water below.',
  },
  {
    id: 'birds-white-goose',
    title: 'White Goose',
    category: 'Birds',
    imageUrl: '/images/birds/white-goose.jpg',
    description: 'A pristine white goose glides forward on dark still water, curious and bold.',
  },

  // ── Animals ───────────────────────────────────────────────────
  {
    id: 'animals-sea-turtle',
    title: 'Sea Turtle',
    category: 'Animals',
    imageUrl: '/images/animals/sea-turtle.jpg',
    description: 'A hawksbill turtle soars effortlessly through deep blue ocean water.',
  },
  {
    id: 'animals-striped-fish',
    title: 'Reef Fish',
    category: 'Animals',
    imageUrl: '/images/animals/striped-fish.jpg',
    description: 'A striped surgeonfish navigates its coral reef kingdom with calm authority.',
  },
  {
    id: 'animals-white-lion',
    title: 'White Lion',
    category: 'Animals',
    imageUrl: '/images/animals/white-lion.jpg',
    description: 'A rare white lioness rests with quiet majesty, her pale gaze steady and calm.',
  },
  {
    id: 'animals-spotted-deer',
    title: 'Spotted Deer',
    category: 'Animals',
    imageUrl: '/images/animals/spotted-deer.jpg',
    description: 'A young fallow deer turns to face the camera, its coat dappled with white.',
  },
]
