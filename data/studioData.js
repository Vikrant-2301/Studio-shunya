export const STUDIO_INFO = {
  name: "Studio Shunya",
  founder: "Ar. Shreya Srivastava",
  established: 2020,
  tagline: "Architecture of Nothingness & Everything",
  motto: "Give you everything without affecting anything.",
  phone: "+91-9211620907",
  email: "files.studioshunya@gmail.com",
  officeAddress: "A113, Third Floor, Ramphal Chowk Road, Sector-7 Dwarka, New Delhi 110075",
  experienceStudio: "Studio Shunya Experience Home-Office, Greater Noida, Delhi NCR",
  hours: {
    weekdays: "Monday - Friday: 10:00 - 18:30",
    saturday: "Saturday: 11:00 - 17:00",
    sunday: "Sunday: 12:30 - 16:30"
  },
  stats: [
    { value: "0", unit: "kg/yr", label: "Operational Carbon", sub: "100% Passive bioclimatic design" },
    { value: "90%", unit: "", label: "Locally Sourced", sub: "Mud, lime, stone within 50km" },
    { value: "40%", unit: "Reduction", label: "Embodied Energy", sub: "Vs conventional RCC construction" },
    { value: "6-8°C", unit: "Cooler", label: "Natural Thermal Drop", sub: "Passive cooling without air conditioning" },
    { value: "100+", unit: "Artisans", label: "Rural Craftsmen", sub: "Trained in indigenous building arts" }
  ]
};

export const PHILOSOPHY_PILLARS = [
  {
    num: "01",
    title: "The Duality of Shunya (Zero)",
    concept: "Mathematical Foundation & Pure Nothingness",
    text: "Just like 'Zero' exhibits a dual nature — integral to all mathematical computations yet fundamentally representing nothingness — Studio Shunya strives to deliver everything you desire in luxury and comfort without leaving a damaging footprint on nature.",
    color: "rust"
  },
  {
    num: "02",
    title: "Radical Restraint & Balance",
    concept: "Harmony Over Shock-and-Awe",
    text: "Instead of ostentatious shock-and-awe structures that dominate the skyline, our dominant design themes are Balance, Climatological Harmony, and Self-Discovery. We craft spaces that slow your heart rate and connect you to the rhythm of the soil.",
    color: "fern"
  },
  {
    num: "03",
    title: "Vernacular Material Consciousness",
    concept: "Borrow from Earth, Return to Earth",
    text: "We construct using natural materials: sun-dried mud blocks, Araish lime plasters, local stone, bamboo, and straw. If demolished centuries later, the structure simply dissolves back into arable soil without toxic debris.",
    color: "terracotta"
  },
  {
    num: "04",
    title: "Empowering Indigenous Artisans",
    concept: "Living Craft Traditions",
    text: "Every wall, niche, and lime plaster coat is crafted by hand by local masons and craftspeople, reviving dying artisanal techniques like Araish mirror lime polishing and stone scrap ventilators.",
    color: "sage"
  }
];

export const PROJECTS = [
  {
    id: "shunya-office",
    slug: "studio-shunya-office",
    title: "Studio Shunya Experience Home-Office",
    tagline: "A Zero-Energy Urban Sanctuary Defying Conventional Mud Preconceptions",
    location: "Greater Noida, Delhi NCR",
    year: "2023",
    siteArea: "200 sq. m.",
    builtUpArea: "150 sq. m. (1,600 sq. ft.)",
    category: "Experience Center",
    heroImage: "/images/portfolio/f5e53e_7682d7f216694284b25c127ae6b104b3.jpg",
    images: [
      "/images/portfolio/f5e53e_7682d7f216694284b25c127ae6b104b3.jpg",
      "/images/portfolio/f5e53e_64ac1d5d2e994aa79de8f4b92a40688bf000.jpg",
      "/images/portfolio/f5e53e_9243109bdc9345c4ab58e4f8de79a691.jpg",
      "/images/portfolio/f5e53e_85df2ff141784275bf9c69b67de88e4d.jpg",
      "/images/portfolio/f5e53e_a9abce8f3b9646188feec5c50b763a9b.jpg",
      "/images/portfolio/f5e53e_5d690f12497743019493774c8e4beac4.jpg",
      "/images/portfolio/f5e53e_8199b963011b46338c3fd28a91e34a5d.jpg",
      "/images/portfolio/f5e53e_f53a821dede6466cb40148d58c01ac83.jpg"
    ],
    description: [
      "In an ambitious endeavour to create a sustainable office space for Studio Shunya on a compact urban plot in Greater Noida, we designed a zero-energy building that directly defies the common perception that mud architecture is temporary, fragile, or dull.",
      "The 1,600 sq. ft. building seamlessly blends earthy rawness with contemporary architectural luxury. The foundation combines stone, lime, brick dust (surkhi), and sand, left through the monsoon season to cure naturally as lime gains compressive strength over time.",
      "To address local municipal RCC requirements, we engineered a permanent 'filler slab' utilizing inverted earthen clay pots, which drastically reduced cement consumption while creating a natural thermal barrier that keeps internal temperatures pleasant year-round."
    ],
    architectQuote: "We built this space as living proof of our conviction. Conventional urban authorities claimed earth couldn't be contemporary or comply with codes; our inverted pot filler slab and Araish lime walls proved that natural architecture can redefine luxury.",
    highlights: [
      "Load-bearing mud and slaked-lime structural walls",
      "Inverted earthen pot filler slab reducing concrete by 40%",
      "Natural ventilation louvers assembled from repurposed Kota stone scraps",
      "Reflective China mosaic terrace preventing extreme heat radiation",
      "Traditional Araish polished lime plaster with silky touch"
    ],
    passiveStrategies: [
      "Solar passive courtyard orientation capturing prevailing southwest winds",
      "Inverted clay pot ceiling creating trapped air insulation pockets",
      "Kota stone scrap louvers offering continuous stack ventilation without electrical fans",
      "China mosaic broken tile terrace bouncing 85% of solar radiation"
    ],
    detailedMaterials: [
      { name: "Sun-Dried Adobe Bricks", role: "Load-bearing exterior walls", source: "Local Greater Noida clay, cured without kiln firing" },
      { name: "Slaked Lime & Surkhi Mortar", role: "Breathable structural joinery", source: "Aged quicklime slaked with pulverized brick dust" },
      { name: "Inverted Earthen Pots", role: "Filler slab ceiling", source: "Hand-thrown by regional village potters" },
      { name: "Kota Stone Scraps", role: "Ventilation louvers & plinth", source: "Upcycled marble/stone cutting waste" },
      { name: "Araish Plaster", role: "Interior mirror finish", source: "Marble dust, curd, jaggery, and river stone burnishing" }
    ],
    materialsUsed: ["Sun-Dried Mud Bricks", "Slaked Lime & Surkhi", "Inverted Earthen Pots", "Kota Stone Scraps", "China Mosaic"],
    metrics: [
      { label: "Built-up Area", value: "1,600 sq.ft", subtext: "Zero-energy structure" },
      { label: "Natural Cooling", value: "7°C Lower", subtext: "Vs outside summer temperature" },
      { label: "Concrete Saved", value: "40%", subtext: "Via earthen pot filler slab" },
      { label: "Operational Energy", value: "Net Zero", subtext: "Solar PV + bioclimatic flow" }
    ],
    challengeSolution: {
      challenge: "Building authorities insisted on conventional reinforced concrete roof slab, conflicting with our zero-cement earth philosophy.",
      solution: "Engineered an inverted earthenware pot filler slab that complied with structural building codes while eliminating 40% of concrete volume and providing natural ceiling acoustic and thermal insulation."
    }
  },
  {
    id: "shivaray-farms",
    slug: "shivaray-farms",
    title: "Shivaray Farms",
    tagline: "Homage to Rajasthani Fort Craftsmanship in Hot Arid Climes",
    location: "Chittorgarh, Rajasthan",
    year: "2022",
    siteArea: "1 Acre",
    builtUpArea: "5,500 sq. ft.",
    category: "Farmhouse",
    heroImage: "/images/portfolio/f5e53e_8199b963011b46338c3fd28a91e34a5d.jpg",
    images: [
      "/images/portfolio/f5e53e_8199b963011b46338c3fd28a91e34a5d.jpg",
      "/images/portfolio/f5e53e_6d3c1f8183424aec8c83b012d48b0135.jpg",
      "/images/portfolio/f5e53e_c23249dfcd6f496ba7245209c3e73ed0.jpg",
      "/images/portfolio/f5e53e_13f174b4c9434b16ba09912dc85a2aec.jpg",
      "/images/portfolio/f5e53e_5387f32733df4dacb429d5d890f6fa5c.jpg",
      "/images/portfolio/f5e53e_ac361b9b73e443208044acaf1eef22e5.jpg",
      "/images/portfolio/f5e53e_3b125c89121148498688e0a7f516bfdd.jpg",
      "/images/portfolio/f5e53e_cfe42a5bd3c64f7bb4af28b9efedefa8.jpg"
    ],
    description: [
      "Reviving lost traditions and craftsmanship, Shivaray Farms pays homage to Chittorgarh's legendary forts and harsh arid terrain. 90% of all construction materials were sourced from within a 30km radius of the site.",
      "Thick load-bearing mud walls provide immense thermal mass, absorbing the searing Rajasthani daytime heat and releasing gentle warmth through cool desert nights. The interiors showcase gleaming Araish lime plaster crafted from marble dust and slaked lime.",
      "Traditional Rajasthani woodwork and stone masonry bring a quiet palatial grandeur without relying on energy-intensive synthetic finishes."
    ],
    architectQuote: "In the searing desert heat of Chittorgarh, 45°C ambient air is effortlessly tamed by the thermal mass of thick earth walls and deep recessed courtyards, proving vernacular wisdom is centuries ahead of modern mechanical cooling.",
    highlights: [
      "90% hyper-local materials from within 30km radius",
      "Hand-polished mirror-finish Araish lime plasters",
      "Traditional Rajasthani wood carving & stone joinery",
      "Courtyard passive stack cooling for desert microclimate",
      "Rainwater harvesting step-reservoir integration"
    ],
    passiveStrategies: [
      "450mm thick load-bearing earth walls delaying thermal wave penetration by 9 hours",
      "Central shaded internal courtyard inducing convective stack-cooling",
      "Deep recessed sandstone jharokhas cutting direct solar glare",
      "Rainwater harvesting cistern cooling incoming airflow through subterranean channels"
    ],
    detailedMaterials: [
      { name: "Chittor Red Sandstone", role: "Plinth, columns & lintels", source: "Quarried within 25km radius" },
      { name: "Stabilized Earth", role: "Massive thermal walls", source: "On-site excavation soil + 5% hydraulic lime" },
      { name: "Araish Lime Render", role: "Cool interior walls", source: "Slaked lime burnished with semi-precious agate stones" },
      { name: "Reclaimed Teak & Sheesham", role: "Carved doors and beams", source: "Salvaged from historic Rajasthani havelis" }
    ],
    materialsUsed: ["Chittor Red Sandstone", "Earth Mortar", "Slaked Lime & Marble Dust", "Reclaimed Teak Wood", "Local Clay Tiles"],
    metrics: [
      { label: "Site Area", value: "1 Acre", subtext: "Organic agricultural estate" },
      { label: "Built-up Area", value: "5,500 sq.ft", subtext: "Low-impact footprint" },
      { label: "Local Materials", value: "90%", subtext: "Zero carbon transportation" },
      { label: "Artisans Engaged", value: "45+", subtext: "Local Rajasthani craftsmen" }
    ],
    challengeSolution: {
      challenge: "Desert ambient summer temperatures regularly exceed 45°C, usually demanding non-stop heavy air conditioning.",
      solution: "Designed 450mm thick stabilized earth walls, deep recessed shaded verandas, and high courtyard clerestory vents that maintain indoor comfort under 28°C passively."
    }
  },
  {
    id: "zazen-farms",
    slug: "zazen-farms",
    title: "Zazen Farms",
    tagline: "Eco-Cottages of Contemplation and Biophilic Silence",
    location: "Beawar, Rajasthan",
    year: "2022",
    siteArea: "2 Acres",
    builtUpArea: "700 sq. ft. per cottage",
    category: "Residential",
    heroImage: "/images/portfolio/f5e53e_72a0ceda49fb497ea1e26fa55a90e6a6.jpg",
    images: [
      "/images/portfolio/f5e53e_72a0ceda49fb497ea1e26fa55a90e6a6.jpg",
      "/images/portfolio/f5e53e_0429a3dea857464292a99f8b7c304951.jpg",
      "/images/portfolio/f5e53e_7f3dd524e7c147328872cc4c8e8fc591.jpg",
      "/images/portfolio/f5e53e_de86f65774714424bb25196c42e6a70e.jpg",
      "/images/portfolio/f5e53e_95a61abb8aee41ecadac32bc60d5c3a3.jpg",
      "/images/portfolio/f5e53e_b96ec5f708324d0a8265662ca8197ebf.jpg",
      "/images/portfolio/f5e53e_e79fd56a007d4e6e909294f24e10c654.jpg",
      "/images/portfolio/f5e53e_ede450244f8e4b86ae87faaf45fcc460.jpg"
    ],
    description: [
      "Inspired by the Japanese concept of Zazen (seated meditation), this ecological sanctuary consists of individual natural cottages nestled organically across a 2-acre landscape.",
      "Each 700 sq. ft. cottage is sculpted from local stone, earth mortar, bamboo truss roofing, and lime-wash finishes. The forms follow the contours of the land, preserving native keekar and neem trees without disturbing the topography.",
      "Large shaded wrap-around decks allow residents to live in constant dialogue with nature, listening to the birds and the breeze."
    ],
    architectQuote: "Zazen is an invitation to listen to the silence of the earth. We did not fell a single tree, shaping each cottage around the native keekar roots so the built form feels as though it sprouted naturally from the soil.",
    highlights: [
      "Cluster planning preserving all existing site trees",
      "Bamboo composite roof trusses with clay Mangalore tile roofing",
      "Natural earthen floors finished with linseed oil and beeswax",
      "Reed-bed wastewater greywater treatment for orchard irrigation",
      "Off-grid passive solar orientation"
    ],
    passiveStrategies: [
      "Staggered cluster layout preserving microclimate tree canopy",
      "Mangalore clay tile ventilated roofs releasing rising hot air",
      "Earthen floor treated with linseed oil and beeswax for natural foot-cooling",
      "Subsurface greywater reed-beds irrigating the surrounding fruit orchards"
    ],
    detailedMaterials: [
      { name: "Rough-Hewn Local Stone", role: "Perimeter masonry", source: "Surface float stone collected without blasting" },
      { name: "Bamboo Trusses", role: "Roof structural frame", source: "Borax-salt treated indigenous bamboo" },
      { name: "Beeswax Earth Floor", role: "Seamless barefoot flooring", source: "Compacted clay polished with warm linseed oil & beeswax" },
      { name: "Natural Lime Wash", role: "Antimicrobial wall finish", source: "Pure slaked lime with natural earth ochre pigments" }
    ],
    materialsUsed: ["Rough-Hewn Local Stone", "Bamboo Trusses", "Clay Tiles", "Beeswax Earthen Floors", "Lime Mortar"],
    metrics: [
      { label: "Plot Area", value: "2 Acres", subtext: "Regenerative forest habitat" },
      { label: "Unit Size", value: "700 sq.ft", subtext: "Per contemplative cottage" },
      { label: "Trees Felled", value: "Zero", subtext: "100% topography retained" },
      { label: "Greywater Recycled", value: "100%", subtext: "Natural reed filtration" }
    ],
    challengeSolution: {
      challenge: "Fragile desert biodiversity with mature native trees on sloping, undulating terrain.",
      solution: "Designed lightweight elevated stone-and-earth footings that hugged tree root zones, turning existing vegetation into the focal natural shading elements."
    }
  },
  {
    id: "poetry-in-stone",
    slug: "poetry-in-stone",
    title: "Poetry in Stone",
    tagline: "Artisanal Masonry & Natural Lime Resurgence",
    location: "Greater Noida, Delhi NCR",
    client: "Naredi Family",
    year: "2023",
    siteArea: "350 sq. m.",
    builtUpArea: "2,800 sq. ft.",
    category: "Residential",
    heroImage: "/images/portfolio/f5e53e_6019b79debae49b982914c6ee93e5448.jpg",
    images: [
      "/images/portfolio/f5e53e_6019b79debae49b982914c6ee93e5448.jpg",
      "/images/portfolio/f5e53e_975ef09218024dcc860a98f455d57e3c.jpg",
      "/images/portfolio/f5e53e_5dddc2bad15a4b6c80d13ca2d18033d2.jpg",
      "/images/portfolio/f5e53e_a8b49764a15a42e88e74c5dec604f36e.jpg",
      "/images/portfolio/f5e53e_31b7a4129851400695d8be75ef15091b.jpg",
      "/images/portfolio/f5e53e_7682d7f216694284b25c127ae6b104b3.jpg"
    ],
    description: [
      "A home conceived as an ode to geological permanence. Designed for the Naredi family, Poetry in Stone celebrates the interplay of rough-hewn stone masonry, smooth Araish lime finishes, and tactile hand-crafted joinery.",
      "The design integrates internal courtyards, deep stone reveals, and natural daylit skylights that track the path of the sun across earthen-hued living spaces.",
      "Every wall tells a story of craftsmanship, where mortar is made from lime and stone dust rather than industrial grey cement."
    ],
    architectQuote: "Poetry in Stone is an ode to permanence. We abandoned synthetic wall paints and industrial cement entirely, allowing the rough geological texture of stone and the silky sheen of lime to speak for themselves.",
    highlights: [
      "Exposed natural dressed stone masonry with lime pointing",
      "Curved earth plaster partitions softening indoor circulation",
      "Skylit central prayer and reflection courtyard",
      "Bespoke recycled timber furniture and cabinetry",
      "Zero volatile organic compounds (VOC) throughout"
    ],
    passiveStrategies: [
      "High-mass masonry buffering city noise and extreme temperature fluctuations",
      "Deep light-wells and curved skylights tracking diurnal solar angles",
      "Natural draft corridors keeping air circulation fresh with zero mechanical HVAC",
      "Percolation courtyard absorbing 100% of rainwater on site"
    ],
    detailedMaterials: [
      { name: "Dholpur Beige Stone", role: "Sculptural load-bearing masonry", source: "Traditional hand-dressed quarry blocks" },
      { name: "Slaked Lime Pointing", role: "Elastic breathable joints", source: "Aged fat lime eliminating hairline thermal cracking" },
      { name: "Araish Lime Wallcraft", role: "Internal reflective partitions", source: "Hand-rubbed marble powder plaster" },
      { name: "Solid Brass & Reclaimed Teak", role: "Tactile architectural hardware", source: "Artisanal blacksmith and carpenter joinery" }
    ],
    materialsUsed: ["Dholpur Beige Stone", "Slaked Lime Mortar", "Natural Earth Pigments", "Reclaimed Wood", "Handmade Brass Hardware"],
    metrics: [
      { label: "Built-up Area", value: "2,800 sq.ft", subtext: "Multi-generational home" },
      { label: "Indoor Air Quality", value: "0% VOC", subtext: "Non-toxic breathable walls" },
      { label: "Stone Masonry", value: "Hand-hewn", subtext: "By master quarry masons" }
    ],
    challengeSolution: {
      challenge: "Urban zoning with tight neighboring plots requiring privacy and acoustic isolation from city traffic.",
      solution: "Created an inward-looking courtyard typology with high-mass stone sound barriers, channeling natural light and air from above."
    }
  },
  {
    id: "mud-and-meadows",
    slug: "mud-and-meadows",
    title: "Mud and Meadows",
    tagline: "Earth Architecture on the Riverine Edge",
    location: "Jamshedpur, Jharkhand",
    client: "Dr. Bikrant Tiwary",
    year: "2023",
    siteArea: "1.5 Acres",
    builtUpArea: "3,200 sq. ft.",
    category: "Residential",
    heroImage: "/images/portfolio/f5e53e_13d3b569888e43318956292383bd5542.jpg",
    images: [
      "/images/portfolio/f5e53e_13d3b569888e43318956292383bd5542.jpg",
      "/images/portfolio/f5e53e_c4d54932f7ac40be8247d4e0dd9faf7e.jpg",
      "/images/portfolio/f5e53e_bc41de4099074cce8fd7a48039bf5659.jpg",
      "/images/portfolio/f5e53e_debf336ea838430e84fef45eae2ea775.jpg",
      "/images/portfolio/f5e53e_0f81edf2f0bc4b82b93f1e7f14044319.jpg",
      "/images/portfolio/f5e53e_b52f91806ded4d90b5e99eb60eee20c0.png"
    ],
    description: [
      "Commissioned by Dr. Bikrant Tiwary, Mud and Meadows is an eco-residence overlooking rolling river meadows in eastern India.",
      "The home utilizes on-site red laterite soil excavated during foundation digging, processed into rammed earth walls with gentle undulating strata lines reflecting geological eras.",
      "The residence stays cool through humid monsoon months thanks to continuous cross-ventilation, lime-wash coatings that breathe away humidity, and expansive thatch-insulated overhangs."
    ],
    architectQuote: "By utilizing 100% of the red laterite soil excavated during foundation digging directly for the rammed earth walls, the residence was literally born from the riverbank geology.",
    highlights: [
      "Excavated site soil reused 100% for rammed earth walls",
      "Breathable lime plaster resisting monsoon mold and dampness",
      "Verandas oriented toward seasonal prevailing river breezes",
      "Indigenous tribal mud relief art wall accents",
      "Integrated rainwater percolation recharge pits"
    ],
    passiveStrategies: [
      "Aerodynamic roof slope guiding seasonal monsoon gusts up and over the dwelling",
      "Raised river stone plinth safeguarding earth walls against torrential splashback",
      "Generous 1.2m overhang verandas blocking driving rain while permitting river breezes",
      "Porous earthen mass that breathes away high ambient humidity without mildew"
    ],
    detailedMaterials: [
      { name: "Laterite Red Earth", role: "Striated rammed earth walls", source: "Excavated on site from foundation trenches" },
      { name: "River Boulder Masonry", role: "Damp-proof foundation plinth", source: "Naturally smoothed riverbed stone" },
      { name: "Bamboo & Thatch Insulation", role: "Double-skin roof assembly", source: "Local indigenous tribal bamboo weavers" },
      { name: "Hydrophobic Slaked Lime", role: "Exterior weather barrier", source: "Lime rendered with natural vegetable saponins" }
    ],
    materialsUsed: ["Laterite Red Earth", "Slaked Lime", "Local Bamboo", "Terracotta Tiles", "River Stones"],
    metrics: [
      { label: "Site Earth Reused", value: "100%", subtext: "Zero soil hauled away" },
      { label: "Built-up Area", value: "3,200 sq.ft", subtext: "Biophilic riverside villa" },
      { label: "Humidity Buffer", value: "Optimal", subtext: "Breathable moisture-regulating mud" }
    ],
    challengeSolution: {
      challenge: "High monsoon rainfall and humid climate posing threats to traditional mud structures.",
      solution: "Engineered deep stone plinths (damp-proof course) combined with generous 1.2m roof overhangs and hydrophobic slaked lime render, keeping walls protected from driving rains."
    }
  }
];

export const SERVICES = [
  {
    number: "01",
    id: "architecture-design",
    title: "Architecture & Interior Design Consultancy",
    tagline: "Soulful, Climatological & Experiential Spaces",
    description: "We design with our heart and soul to create functional, aesthetic, and deeply experiential spaces. Every project is conceived through solar-passive design principles, respecting local microclimate, site topography, and client aspirations.",
    image: "/images/portfolio/f5e53e_4f92521f4304481687c9d3735e98e8dd.jpg",
    steps: [
      { title: "Conceptualization & Moodboards", desc: "Understanding the site spirit, climatology, and creating bespoke spatial concepts with tactile moodboards." },
      { title: "Costing & Budget Estimation", desc: "Rigorous cost modeling providing realistic financial clarity from earthwork to artisan finishes." },
      { title: "2D & 3D Visual Architecture", desc: "Bridging architectural drawings and physical reality with photo-realistic natural light renders." },
      { title: "Material Sourcing & Verification", desc: "Hand-picking local quarries, kilns, lime sources, and timber reclamation yards." },
      { title: "Detailed Working Drawings", desc: "Comprehensive construction documents including structural joinery, electrical, plumbing, and HVAC passive details." },
      { title: "Artisan & Mason Selection", desc: "Connecting your project with trained master craftsmen in lime, stone, and earth building." }
    ],
    features: [
      "Solar passive orientation analysis",
      "Vernacular spatial layout & courtyards",
      "Custom earth & lime interior finishes",
      "Biophilic daylight optimization",
      "Sustainable landscape integration"
    ]
  },
  {
    number: "02",
    id: "pmc-natural-buildings",
    title: "Project Management Consultancy (PMC) for Natural Buildings",
    tagline: "End-to-End On-Site Execution Supervision",
    description: "In our PMC service, we provide complete architectural, structural, MEP, and landscape supervision. We station a full-time consultant site supervisor on your land who trains masons, supervises raw material mixes, conducts soil tests, and guarantees zero deviation from natural building standards.",
    image: "/images/portfolio/f5e53e_75ab9ccc3c8f471588397a9641d0cbf9.jpg",
    steps: [
      { title: "Code, Zoning & Land Research", desc: "Verifying property setbacks, local authority permissions, and structural compliance." },
      { title: "Site Soil Lab Testing", desc: "Testing clay, silt, and sand ratios to determine exact earth construction methods (adobe, rammed earth, cob)." },
      { title: "On-Site Worker & Mason Training", desc: "Training local laborers and masons in natural material mixing, slaking lime, and compaction." },
      { title: "Full-Time Site Engineer Oversight", desc: "Dedicated supervisor managing daily execution, strength tests, and quality assurance." },
      { title: "Monthly Principal Architect Visits", desc: "Ar. Shreya Srivastava conducts milestone inspections to review execution precision." },
      { title: "Off-Grid Systems Integration", desc: "Solar PV, rainwater harvesting, greywater reed-beds, and passive geothermal cooling." }
    ],
    features: [
      "Soil composition lab analysis",
      "Mason skill enhancement & training",
      "Daily construction log & quality control",
      "Client handles contractor finances directly",
      "Zero compromise on eco-integrity"
    ]
  },
  {
    number: "03",
    id: "lime-finishes",
    title: "Lime Plasters & Specialized Finishes",
    tagline: "Reviving Ancient Araish, Tadelakt & Marble Dust Arts",
    description: "Lime is a living, breathing material that purifies indoor air and absorbs CO2 as it cures. Studio Shunya offers master application of traditional Araish (marble-sheen lime plaster), Moroccan Tadelakt, and pigmented mineral finishes that eliminate toxic chemical wall paints forever.",
    image: "/images/portfolio/f5e53e_0e8328580019435c9d86da3523c8de18.jpg",
    steps: [
      { title: "Lime Plaster Base Coat", desc: "Coarse slaked lime mixed with surkhi (brick dust) and river sand for maximum breathability." },
      { title: "Araish Marble Dust Finish", desc: "Traditional Rajasthani burnished lime plaster with natural marble dust, polished with river stones." },
      { title: "Mineral Pigmented Plasters", desc: "Infusing earth oxides (ochre, terracotta, sage green, indigo) for natural UV-stable colors." },
      { title: "Tadelakt Waterproof Plaster", desc: "Moroccan soap-treated lime plaster perfect for bathrooms, showers, and water features." },
      { title: "Textured Stucco & Straw Plasters", desc: "Tactile relief walls textured with wheat straw, cow dung, and natural fibers." }
    ],
    features: [
      "100% Breathable & Mold Resistant",
      "Absorbs CO2 continuously through carbonation",
      "Cool to touch in extreme summer heat",
      "Zero toxic volatile organic compounds (VOC)",
      "Mirror-like polished or rustic matte finishes"
    ]
  },
  {
    number: "04",
    id: "turnkey-natural",
    title: "Turn-Key Natural Building Construction",
    tagline: "From Bare Soil to Handover of Your Living Sanctuary",
    description: "For clients who desire complete peace of mind, Studio Shunya manages the complete design and build workflow from ground-breaking to furniture styling, delivering an exquisite, ready-to-inhabit ecological home.",
    image: "/images/portfolio/f5e53e_841aa9ed3dd94bd2b4cb1ea10b52f452.jpg",
    steps: [
      { title: "Integrated Design & Budget Lock", desc: "A singular transparent turnkey contract with fixed timelines and milestone payments." },
      { title: "Material Quarry Procurement", desc: "Direct procurement of stone, timber, lime, and earth directly to site." },
      { title: "Artisanal Execution", desc: "Dedicated execution teams delivering handcrafted architectural carpentry and masonry." },
      { title: "Interior Handover & Styling", desc: "Complete delivery including custom earthen lighting, built-in mud niches, and landscape planting." }
    ],
    features: [
      "Single-point accountability",
      "Fixed timeline & budget clarity",
      "Bespoke earthen interior styling",
      "100% natural building certification"
    ]
  }
];

export const NATURAL_MATERIALS = [
  {
    name: "Sun-Dried Mud & Rammed Earth",
    hindiName: "Mitti / Kacchi Eent",
    category: "Structural Walls",
    texture: "Warm, velvety earthen texture with subtle striated stratification",
    carbonScore: "-92% vs Brick/Concrete",
    thermalBenefit: "High thermal mass, delays summer heat penetration by 8-10 hours",
    description: "Earth is the ultimate vernacular building material. Sun-dried mud blocks and rammed earth walls require near-zero embodied energy to produce and breathe naturally, regulating interior indoor humidity at a comfortable 40-60%.",
    image: "/images/portfolio/f5e53e_64ac1d5d2e994aa79de8f4b92a40688bf000.jpg",
    features: ["Locally sourced soil", "Zero kiln firing emissions", "100% biodegradable return to earth", "Excellent acoustic dampening"]
  },
  {
    name: "Araish & Slaked Lime Plaster",
    hindiName: "Chuna / Araish",
    category: "Breathable Finishes",
    texture: "Lustrous, silky smooth marble-like cold sheen",
    carbonScore: "Carbon-Negative Curing",
    thermalBenefit: "Reflects solar radiation and remains soothingly cool to the touch",
    description: "Araish is an ancient Indian finishing technique using slaked lime, marble dust, curd, jaggery, and methi (fenugreek) water, burnished with semi-precious agate river stones. Unlike modern acrylic paints that peel and trap moisture, lime breathes freely and reabsorbs atmospheric CO2 as it cures into limestone over decades.",
    image: "/images/portfolio/f5e53e_3576c221db65462982c7bf7c4a5381c9f000.jpg",
    features: ["Natural antimicrobial & anti-fungal", "Non-toxic with zero VOCs", "Gains strength with age", "Pioneered in Rajasthani royal palaces"]
  },
  {
    name: "Inverted Earthen Pot Filler Slabs",
    hindiName: "Matka Filler Slab",
    category: "Roof & Ceiling Engineering",
    texture: "Rhythmic geometric circular earthenware patterns exposed on ceilings",
    carbonScore: "-40% Concrete Reduction",
    thermalBenefit: "Air trapped within hollow pots creates natural thermal resistance ceiling barrier",
    description: "Filler slab technology replaces inactive concrete in the tension zone of a ceiling slab with lightweight inverted clay pots (matkas). This reduces structural dead weight, cuts cement and steel consumption by 35-40%, and provides striking acoustic and visual character to the interiors.",
    image: "/images/portfolio/f5e53e_5e37ab0082ec4baa9f1933c557babe87f000.jpg",
    features: ["Dramatically reduces ceiling heat gain", "Supports village potters", "Reduces building dead load", "Unique sculptural aesthetic"]
  },
  {
    name: "Quarried Stone & Kota Scraps",
    hindiName: "Patthar / Kota Scrap",
    category: "Foundations & Ventilators",
    texture: "Rough-hewn organic rock surfaces juxtaposed with polished slate",
    carbonScore: "Low Embodied Energy",
    thermalBenefit: "Dense geological foundation prevents termite and moisture intrusion",
    description: "Instead of synthetic waterproofing membranes, Studio Shunya uses continuous stone plinths and Kota stone sheets for natural termite and damp proofing. Scrap stone remnants from local quarries are transformed into intricate louvered ventilators and mosaic paths.",
    image: "/images/portfolio/f5e53e_975ef09218024dcc860a98f455d57e3c.jpg",
    features: ["Infinite durability", "Upcycled quarry waste scraps", "Zero maintenance", "Rooted regional aesthetic"]
  },
  {
    name: "Bamboo & Reclaimed Timber",
    hindiName: "Baans & Kath",
    category: "Roof Trusses & Carpentry",
    texture: "Warm tactile wood grains and organic tubular structural nodes",
    carbonScore: "Carbon Sequestering",
    thermalBenefit: "Natural insulator with warm tactile contact",
    description: "Bamboo grows at up to 1 meter per day and sequesters immense amounts of carbon. When treated with borax and natural salts, bamboo offers tensile strength exceeding mild steel per weight ratio.",
    image: "/images/portfolio/f5e53e_26e305f1110740ee8784b336c814984f.jpg",
    features: ["Rapidly renewable", "High tensile strength", "Treated without toxic chemicals", "Warm acoustic warmth"]
  }
];

export const PRESS_FEATURES = [
  {
    publication: "Architectural Digest",
    logoText: "ARCHITECTURAL DIGEST",
    title: "How Ar. Shreya Srivastava is Redefining Mud Architecture as Urban Luxury",
    quote: "Studio Shunya boldly shatters the myth that mud architecture is primitive. Their Greater Noida office proves natural materials can deliver uncompromised contemporary luxury.",
    badge: "Cover Feature",
    image: "/images/portfolio/f5e53e_990da5e4fa1d415aa8ad22fffa5c632b.png"
  },
  {
    publication: "The Better India",
    logoText: "THE BETTER INDIA",
    title: "Delhi Architect Builds 100% Zero Energy Mud Home In The Middle of the City",
    quote: "Using inverted earthen pots, lime plaster, and sun-baked earth, Studio Shunya has created a living laboratory that stays naturally cool in 45-degree heat.",
    badge: "Eco Pioneer",
    image: "/images/portfolio/f5e53e_3c074f6e204943fda2b52edb86ca5fce.png"
  },
  {
    publication: "India Today",
    logoText: "INDIA TODAY",
    title: "The Zero-Carbon Revolution: Indian Architects Returning to Ancient Roots",
    quote: "Shreya Srivastava's vision marries vernacular wisdom with modern building science, creating sustainable farmhouses that belong to the earth.",
    badge: "Featured Practice",
    image: "/images/portfolio/f5e53e_98937d354b734a79ae9345864863ad8c.png"
  },
  {
    publication: "Buildofy",
    logoText: "BUILDOFY",
    title: "Studio Shunya Experience Home-Office: Full Architectural Film & Walkthrough",
    quote: "A masterclass in passive design and lime craftsmanship. Every detail from the courtyard to the stone louvers demonstrates architectural intentionality.",
    badge: "Video Showcase",
    image: "/images/portfolio/f5e53e_211d367a10044cb4986315a2a16549f7.png"
  }
];

export const FOUNDER_BIO = {
  name: "Ar. Shreya Srivastava",
  title: "Founder & Principal Architect",
  credentials: "B.Arch — Guru Gobind Singh Indraprastha University (GGSIPU), New Delhi",
  foundedYear: 2020,
  story: [
    "Studio Shunya was founded in 2020 by Principal Architect Shreya Srivastava. Having worked at prominent conventional practices including CP Kukreja Architects, SEEDS, ISA Projects Pvt Ltd, and the Greater Noida Development Authority, she gained deep insight into the massive ecological toll of conventional concrete urbanism.",
    "Her pivotal turning point arrived at Geeli Mitti, where she immersed herself in the traditional craft and structural physics of natural building materials. All her professional endeavors since then tell an inspiring story of deep love, structural command, and advocacy for living architecture.",
    "A decorated alumnus of GGSIPU's Architecture program in New Delhi, Shreya believes that a building that is not sustainable is today a dereliction of true architecture. She pledged to pioneer 'Luxury in Sustainability' — disproving the notion that mud homes lack elegance.",
    "Today, with built projects spanning Delhi NCR, Rajasthan, and Jharkhand, Studio Shunya leads an architectural renaissance where buildings are deeply rooted in ecology and deeply pleasant to human senses."
  ],
  quote: "Today, a building that is not sustainable is a dereliction of true Architecture. We pledge to deliver Luxury in Sustainability.",
  image: "/images/portfolio/f5e53e_5a0de43fcb4e4a4eb5b2963c660254e3.jpg"
};

export const FAQS = [
  {
    q: "Can mud buildings survive heavy monsoons and rain?",
    a: "Absolutely! Traditional mud buildings have stood in heavy rainfall zones of India for centuries. We design with a 'good boots and a wide hat' principle: substantial stone plinths (raising walls above splash water), generous roof overhangs, and breathable slaked-lime plasters that naturally shed rainwater while allowing indoor moisture vapor to escape."
  },
  {
    q: "How does lime plaster differ from conventional cement plaster and wall paint?",
    a: "Unlike cement plaster and chemical plastic paints that seal walls, trap moisture, and release toxic volatile organic compounds (VOCs), lime plaster is breathable, naturally anti-microbial, and mold-resistant. Furthermore, slaked lime absorbs carbon dioxide from the air as it cures through carbonation, literally hardening into limestone over time."
  },
  {
    q: "Is natural building construction more expensive than conventional cement?",
    a: "Natural building materials like earth and lime are often far cheaper to source locally. The investment is directed toward skilled craftsmanship and artisan labor rather than industrial manufacturing conglomerates. In the long run, natural buildings drastically reduce operational electricity bills for air conditioning and require virtually zero synthetic repainting."
  },
  {
    q: "Can Studio Shunya design projects outside Delhi NCR?",
    a: "Yes. Studio Shunya has delivered successful projects across Rajasthan, Jharkhand, Uttar Pradesh, and Delhi NCR. Under our PMC (Project Management Consultancy) and Turn-Key models, we send our specialized team, conduct local soil tests, and train regional masons directly on your site."
  }
];
