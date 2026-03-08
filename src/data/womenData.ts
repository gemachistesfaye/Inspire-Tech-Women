import adaLovelace from "@/assets/ada-lovelace.jpg";
import graceHopper from "@/assets/grace-hopper.jpg";
import katherineJohnson from "@/assets/katherine-johnson.jpg";
import hedyLamarr from "@/assets/hedy-lamarr.jpg";
import radiaPerlman from "@/assets/radia-perlman.jpg";
import wangariMaathai from "@/assets/wangari-maathai.jpg";
import marieCurie from "@/assets/marie-curie.jpg";
import margaretHamilton from "@/assets/margaret-hamilton.jpg";
import reshmaSaujani from "@/assets/reshma-saujani.jpg";
import feiFeiLi from "@/assets/fei-fei-li.jpg";
import maeJemison from "@/assets/mae-jemison.jpg";
import maryamMirzakhani from "@/assets/maryam-mirzakhani.jpg";
import timnitGebru from "@/assets/timnit-gebru.jpg";
import shirleyAnnJackson from "@/assets/shirley-ann-jackson.jpg";
import rosalindFranklin from "@/assets/rosalind-franklin.jpg";

export interface WomanProfile {
  id: string;
  name: string;
  field: "Computer Science" | "AI" | "Engineering" | "Mathematics" | "Environmental Science";
  shortDescription: string;
  biography: string;
  achievements: string[];
  impact: string;
  contributions: string[];
  birthYear: string;
  deathYear?: string;
  photoUrl: string;
  quote?: string;
  featured?: boolean;
}

export interface Quote {
  text: string;
  author: string;
  role: string;
}

export const quotes: Quote[] = [
  { text: "The most damaging phrase in the language is: 'It's always been done that way.'", author: "Grace Hopper", role: "Computer Scientist & Navy Rear Admiral" },
  { text: "I had no idea that mothers could do what I did.", author: "Katherine Johnson", role: "NASA Mathematician" },
  { text: "The science of today is the technology of tomorrow.", author: "Edward Teller", role: "Physicist" },
  { text: "If you want something said, ask a man; if you want something done, ask a woman.", author: "Margaret Thatcher", role: "Former Prime Minister" },
  { text: "Life is not easy for any of us. But what of that? We must have perseverance.", author: "Marie Curie", role: "Physicist & Chemist" },
  { text: "I think it's very important to get more women into computing.", author: "Radia Perlman", role: "Network Engineer" },
];

export const womenProfiles: WomanProfile[] = [
  {
    id: "ada-lovelace",
    name: "Ada Lovelace",
    field: "Computer Science",
    shortDescription: "Recognized as the first computer programmer for her work on Charles Babbage's Analytical Engine.",
    biography: "Augusta Ada King, Countess of Lovelace, was an English mathematician and writer chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She was the first to recognize that the machine had applications beyond pure calculation and to have published the first algorithm intended to be carried out by such a machine.",
    achievements: [
      "First computer programmer in history",
      "Wrote the first algorithm for a computing machine",
      "Recognized computing's potential beyond calculation",
      "Published detailed notes on the Analytical Engine"
    ],
    impact: "Ada Lovelace's visionary work laid the foundation for modern computing. Her notes on the Analytical Engine are considered the first complete computer program, making her a pioneer of the digital age.",
    contributions: [
      "Published the first algorithm designed for implementation on a computer",
      "Described a vision of computing that went far beyond number-crunching",
      "Inspired the creation of the Ada programming language by the U.S. Department of Defense"
    ],
    birthYear: "1815",
    deathYear: "1852",
    photoUrl: adaLovelace,
    quote: "That brain of mine is something more than merely mortal.",
    featured: true,
  },
  {
    id: "grace-hopper",
    name: "Grace Hopper",
    field: "Computer Science",
    shortDescription: "Pioneering computer scientist who invented the first compiler and popularized machine-independent programming.",
    biography: "Grace Brewster Murray Hopper was an American computer scientist and United States Navy rear admiral. She was a pioneer of computer programming and invented the first compiler for a computer programming language. She popularized the idea of machine-independent programming languages, which led to the development of COBOL.",
    achievements: [
      "Invented the first compiler (A-0 System)",
      "Developed COBOL programming language",
      "Found the first actual computer 'bug'",
      "Received the Presidential Medal of Freedom posthumously"
    ],
    impact: "Grace Hopper revolutionized computer programming by making it accessible through human-readable languages. Her work on compilers transformed computing from a specialist activity to a widely accessible tool.",
    contributions: [
      "Created the first compiler translating English to machine code",
      "Key developer of COBOL, still used in business applications",
      "Advocated for standardized testing and validation of programming languages"
    ],
    birthYear: "1906",
    deathYear: "1992",
    photoUrl: graceHopper,
    quote: "The most damaging phrase in the language is: 'It's always been done that way.'",
    featured: true,
  },
  {
    id: "katherine-johnson",
    name: "Katherine Johnson",
    field: "Mathematics",
    shortDescription: "NASA mathematician whose calculations were critical to the success of early U.S. space missions.",
    biography: "Katherine Coleman Goble Johnson was an American mathematician whose calculations of orbital mechanics as a NASA employee were critical to the success of the first and subsequent U.S. crewed spaceflights. Her story was dramatized in the 2016 film Hidden Figures.",
    achievements: [
      "Calculated trajectories for Project Mercury",
      "Verified IBM computer calculations for John Glenn's orbit",
      "Contributed to Apollo 11 moon landing calculations",
      "Received the Presidential Medal of Freedom in 2015"
    ],
    impact: "Katherine Johnson broke barriers of race and gender to become one of NASA's most valued mathematicians. Her precise calculations ensured the safety of astronauts and the success of America's space program.",
    contributions: [
      "Co-authored 26 scientific papers",
      "Calculated the trajectory for Alan Shepard's spaceflight",
      "Verified computer calculations for orbital missions"
    ],
    birthYear: "1918",
    deathYear: "2020",
    photoUrl: katherineJohnson,
    quote: "I counted everything. I counted the steps to the road, the steps up to church, the number of dishes and silverware I washed.",
    featured: true,
  },
  {
    id: "hedy-lamarr",
    name: "Hedy Lamarr",
    field: "Engineering",
    shortDescription: "Actress and inventor who co-developed frequency-hopping spread spectrum technology, the basis for modern WiFi and Bluetooth.",
    biography: "Hedy Lamarr was an Austrian-American actress and inventor who pioneered the technique of frequency-hopping spread spectrum communication. Along with composer George Antheil, she developed a radio guidance system using frequency hopping which was intended for torpedo guidance during World War II.",
    achievements: [
      "Co-invented frequency-hopping spread spectrum",
      "Her technology is the basis for WiFi, GPS, and Bluetooth",
      "Inducted into the National Inventors Hall of Fame",
      "Received the Electronic Frontier Foundation Pioneer Award"
    ],
    impact: "Hedy Lamarr's invention of frequency-hopping technology became the foundation for modern wireless communications including WiFi, Bluetooth, and GPS — technologies that connect billions of people worldwide.",
    contributions: [
      "Developed frequency-hopping communication with George Antheil",
      "Patented the Secret Communication System (U.S. Patent 2,292,387)",
      "Her work laid the groundwork for modern spread-spectrum communications"
    ],
    birthYear: "1914",
    deathYear: "2000",
    photoUrl: hedyLamarr,
    featured: true,
  },
  {
    id: "radia-perlman",
    name: "Radia Perlman",
    field: "Computer Science",
    shortDescription: "Known as the 'Mother of the Internet' for her invention of the Spanning Tree Protocol fundamental to network bridges.",
    biography: "Radia Joy Perlman is an American computer programmer and network engineer. She is most famous for her invention of the spanning-tree protocol (STP), which is fundamental to the operation of network bridges. She also made large contributions to many other areas of network design and standardization.",
    achievements: [
      "Invented the Spanning Tree Protocol (STP)",
      "Developed TRILL to improve STP",
      "Holds over 100 patents",
      "Inducted into the Internet Hall of Fame"
    ],
    impact: "Radia Perlman's Spanning Tree Protocol made modern internet infrastructure possible. Without her contributions, the large-scale networks we rely on daily would not function as they do.",
    contributions: [
      "Invented STP enabling reliable network communication",
      "Contributed to network security and encryption protocols",
      "Authored 'Interconnections: Bridges, Routers, Switches, and Internetworking Protocols'"
    ],
    birthYear: "1951",
    photoUrl: radiaPerlman,
    quote: "The world would be a better place if more engineers, like me, hated technology.",
  },
  {
    id: "wangari-maathai",
    name: "Wangari Maathai",
    field: "Environmental Science",
    shortDescription: "Nobel laureate and environmental activist who founded the Green Belt Movement, blending technology with sustainability.",
    biography: "Wangari Muta Maathai was a Kenyan social, environmental and political activist. She founded the Green Belt Movement, an environmental non-governmental organization focused on tree planting, environmental conservation, and women's rights. In 2004, she became the first African woman to receive the Nobel Peace Prize.",
    achievements: [
      "First African woman to receive the Nobel Peace Prize",
      "Founded the Green Belt Movement",
      "Planted over 51 million trees in Kenya",
      "First woman in East and Central Africa to earn a PhD"
    ],
    impact: "Wangari Maathai demonstrated how technology and environmental science can work together for sustainable development. Her Green Belt Movement became a model for grassroots environmental activism worldwide.",
    contributions: [
      "Founded the Green Belt Movement in 1977",
      "Pioneered community-based environmental conservation",
      "Advocated for integrating technology with sustainable practices"
    ],
    birthYear: "1940",
    deathYear: "2011",
    photoUrl: wangariMaathai,
    quote: "It's the little things citizens do. That's what will make the difference.",
  },
  {
    id: "marie-curie",
    name: "Marie Curie",
    field: "Engineering",
    shortDescription: "First woman to win a Nobel Prize and the only person to win Nobel Prizes in two different sciences.",
    biography: "Marie Skłodowska Curie was a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize, the first person to win Nobel Prizes in two scientific fields, and the first woman to become a professor at the University of Paris.",
    achievements: [
      "First woman to win a Nobel Prize (Physics, 1903)",
      "Won a second Nobel Prize in Chemistry (1911)",
      "Discovered polonium and radium",
      "Developed mobile X-ray units during World War I"
    ],
    impact: "Marie Curie's groundbreaking research on radioactivity opened entirely new fields of science and medicine, from cancer treatments to nuclear energy. She shattered gender barriers in academia and science.",
    contributions: [
      "Pioneered research on radioactivity, coining the term itself",
      "Discovered two elements: polonium and radium",
      "Developed portable X-ray machines (petites Curies) for battlefield medicine"
    ],
    birthYear: "1867",
    deathYear: "1934",
    photoUrl: marieCurie,
    quote: "Nothing in life is to be feared, it is only to be understood.",
    featured: true,
  },
  {
    id: "margaret-hamilton",
    name: "Margaret Hamilton",
    field: "Computer Science",
    shortDescription: "Led the team that developed the onboard flight software for NASA's Apollo missions.",
    biography: "Margaret Heafield Hamilton is an American computer scientist, systems engineer, and business owner. She was director of the Software Engineering Division of the MIT Instrumentation Laboratory, which developed the onboard flight software for NASA's Apollo program. She coined the term 'software engineering.'",
    achievements: [
      "Led development of Apollo onboard flight software",
      "Coined the term 'software engineering'",
      "Received the Presidential Medal of Freedom in 2016",
      "Her error-detection design saved the Apollo 11 moon landing"
    ],
    impact: "Margaret Hamilton's software engineering innovations were critical to landing humans on the Moon. Her rigorous approach to software reliability set standards that are still followed in mission-critical systems today.",
    contributions: [
      "Developed priority-driven task execution for Apollo guidance computer",
      "Pioneered concepts of asynchronous software and priority scheduling",
      "Founded Higher Order Software and Hamilton Technologies"
    ],
    birthYear: "1936",
    photoUrl: margaretHamilton,
    quote: "There was no choice but to be pioneers.",
    featured: true,
  },
  {
    id: "reshma-saujani",
    name: "Reshma Saujani",
    field: "Computer Science",
    shortDescription: "Founder of Girls Who Code, empowering young women to pursue careers in technology.",
    biography: "Reshma Saujani is an American lawyer, politician, and the founder of Girls Who Code, a nonprofit organization working to close the gender gap in technology. Her TED talk 'Teach girls bravery, not perfection' has been viewed millions of times and inspired a global movement.",
    achievements: [
      "Founded Girls Who Code reaching 500,000+ girls",
      "Named one of Fortune's World's Greatest Leaders",
      "Author of bestselling books on women in tech",
      "TED talk viewed over 5 million times"
    ],
    impact: "Reshma Saujani has inspired a generation of young women to pursue technology careers. Girls Who Code has become one of the most impactful organizations closing the gender gap in computing.",
    contributions: [
      "Founded Girls Who Code in 2012",
      "Advocated for bravery over perfection in tech education",
      "Built a pipeline of future female engineers and technologists"
    ],
    birthYear: "1975",
    photoUrl: reshmaSaujani,
    quote: "Bravery, not perfection.",
  },
  {
    id: "fei-fei-li",
    name: "Fei-Fei Li",
    field: "AI",
    shortDescription: "Pioneering AI researcher who created ImageNet, transforming computer vision and deep learning.",
    biography: "Fei-Fei Li is a Chinese-American computer scientist known primarily for her work in artificial intelligence and computer vision. She is the Sequoia Capital Professor of Computer Science at Stanford University and co-director of Stanford's Human-Centered AI Institute. Her ImageNet project revolutionized the field of AI.",
    achievements: [
      "Created ImageNet, catalyzing the deep learning revolution",
      "Co-director of Stanford's Human-Centered AI Institute",
      "Named one of TIME's 100 Most Influential People",
      "Served as VP at Google Cloud leading AI/ML strategy"
    ],
    impact: "Fei-Fei Li's ImageNet dataset and challenge fundamentally transformed artificial intelligence, enabling breakthroughs in image recognition that power everything from medical diagnostics to autonomous vehicles.",
    contributions: [
      "Built ImageNet with 14 million labeled images across 20,000 categories",
      "Pioneered human-centered approach to AI development",
      "Advanced AI ethics and democratization of AI technology"
    ],
    birthYear: "1976",
    photoUrl: feiFeiLi,
    quote: "If we want machines to think, we need to teach them to see.",
    featured: true,
  },
  {
    id: "mae-jemison",
    name: "Mae Jemison",
    field: "Engineering",
    shortDescription: "First African-American woman to travel in space, engineer, physician, and NASA astronaut.",
    biography: "Mae Carol Jemison is an American engineer, physician, and former NASA astronaut. She became the first African-American woman to travel into space when she served as a mission specialist aboard the Space Shuttle Endeavour in September 1992. After leaving NASA, she founded a technology research company.",
    achievements: [
      "First African-American woman in space (1992)",
      "Served as mission specialist on STS-47 Spacelab-J",
      "Founded the Jemison Group technology consulting firm",
      "Inducted into the National Women's Hall of Fame"
    ],
    impact: "Mae Jemison broke barriers of both race and gender in space exploration, inspiring millions of young people — especially women of color — to pursue careers in STEM fields.",
    contributions: [
      "Conducted experiments in material science and life sciences in space",
      "Founded the Dorothy Jemison Foundation for Excellence",
      "Led the 100 Year Starship project for DARPA"
    ],
    birthYear: "1956",
    photoUrl: maeJemison,
    quote: "Never be limited by other people's limited imaginations.",
  },
  {
    id: "maryam-mirzakhani",
    name: "Maryam Mirzakhani",
    field: "Mathematics",
    shortDescription: "First woman and first Iranian to win the Fields Medal, the most prestigious award in mathematics.",
    biography: "Maryam Mirzakhani was an Iranian mathematician and professor at Stanford University. In 2014, she became the first woman ever to win the Fields Medal — often called the Nobel Prize of mathematics — for her outstanding contributions to the dynamics and geometry of Riemann surfaces.",
    achievements: [
      "First woman to win the Fields Medal (2014)",
      "First Iranian to win the Fields Medal",
      "Proved groundbreaking results on Riemann surfaces",
      "Full professor at Stanford University at age 31"
    ],
    impact: "Maryam Mirzakhani shattered one of the most stubborn glass ceilings in academia, proving that mathematical genius knows no gender. Her work continues to influence geometry and theoretical physics.",
    contributions: [
      "Advanced understanding of moduli spaces of Riemann surfaces",
      "Proved counting results for simple closed geodesics on hyperbolic surfaces",
      "Connected dynamics, geometry, and topology in novel ways"
    ],
    birthYear: "1977",
    deathYear: "2017",
    photoUrl: maryamMirzakhani,
    quote: "The beauty of mathematics only shows itself to more patient followers.",
    featured: true,
  },
  {
    id: "timnit-gebru",
    name: "Timnit Gebru",
    field: "AI",
    shortDescription: "Leading AI ethics researcher advocating for fairness, accountability, and transparency in artificial intelligence.",
    biography: "Timnit Gebru is an Ethiopian-American computer scientist known for her research on algorithmic bias and data mining. She co-founded Black in AI, a community of Black researchers working in artificial intelligence, and founded the DAIR (Distributed AI Research) Institute.",
    achievements: [
      "Co-founded Black in AI community",
      "Founded DAIR Institute for ethical AI research",
      "Co-authored landmark Gender Shades study",
      "Named one of Nature's 10 most influential people"
    ],
    impact: "Timnit Gebru has become one of the most influential voices in AI ethics, exposing racial and gender bias in facial recognition systems and pushing the tech industry toward more responsible AI development.",
    contributions: [
      "Exposed bias in commercial facial recognition systems",
      "Advocated for ethical AI development practices",
      "Built communities supporting underrepresented researchers in AI"
    ],
    birthYear: "1983",
    photoUrl: timnitGebru,
    quote: "We need to have a say in how AI shapes our lives.",
  },
  {
    id: "shirley-ann-jackson",
    name: "Shirley Ann Jackson",
    field: "Engineering",
    shortDescription: "First African-American woman to earn a PhD from MIT, her research enabled caller ID, call waiting, and fiber optics.",
    biography: "Shirley Ann Jackson is an American physicist and the first African-American woman to earn a doctorate at MIT. Her groundbreaking research in theoretical physics at Bell Labs contributed to innovations in telecommunications including the portable fax, touch-tone telephone, solar cells, and fiber optic cables.",
    achievements: [
      "First African-American woman to earn a PhD from MIT",
      "Research led to caller ID, call waiting, and fiber optics",
      "Served as Chair of the U.S. Nuclear Regulatory Commission",
      "President of Rensselaer Polytechnic Institute"
    ],
    impact: "Shirley Ann Jackson's research at Bell Labs formed the scientific basis for technologies billions of people use daily. As a leader in academia and government, she has championed diversity in STEM for decades.",
    contributions: [
      "Conducted breakthrough research in theoretical physics at Bell Labs",
      "Enabled development of caller ID, call waiting, and fiber optic cables",
      "Advocated for policies increasing diversity in science and engineering"
    ],
    birthYear: "1946",
    photoUrl: shirleyAnnJackson,
    quote: "To me, the purpose of education is to unlock the door to the future.",
  },
  {
    id: "rosalind-franklin",
    name: "Rosalind Franklin",
    field: "Engineering",
    shortDescription: "X-ray crystallographer whose work was central to discovering the structure of DNA.",
    biography: "Rosalind Elsie Franklin was a British chemist and X-ray crystallographer whose work was central to understanding the molecular structures of DNA, RNA, viruses, coal, and graphite. Her famous Photo 51 provided critical evidence for the double-helix structure of DNA.",
    achievements: [
      "Captured Photo 51, key to the DNA double-helix discovery",
      "Pioneered X-ray diffraction studies of complex molecules",
      "Made major contributions to understanding virus structures",
      "Advanced coal and graphite microstructure research"
    ],
    impact: "Rosalind Franklin's X-ray crystallography work was essential to one of the greatest scientific discoveries of the 20th century — the structure of DNA. Her story highlights the often-overlooked contributions of women in science.",
    contributions: [
      "Produced the X-ray diffraction image (Photo 51) crucial to DNA discovery",
      "Advanced understanding of RNA and virus structures",
      "Pioneered techniques in X-ray crystallography still used today"
    ],
    birthYear: "1920",
    deathYear: "1958",
    photoUrl: rosalindFranklin,
    quote: "Science and everyday life cannot and should not be separated.",
  },
];

export const statistics = [
  { label: "Women in Tech Workforce", value: 26, suffix: "%" },
  { label: "Women-Founded Startups", value: 20, suffix: "%" },
  { label: "Women in STEM Education", value: 34, suffix: "%" },
  { label: "Women in AI Research", value: 22, suffix: "%" },
];
