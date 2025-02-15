let currentCategory = '';
let currentQuestion = 0;
let timeLeft = 30;
let timerId;
let selectedOption = null;
let questions = {};

const categoryQuestions = {
    science: [
        {
            question: "What is the unit of force?",
            options: ["Newton", "Joule", "Watt", "Pascal"],
            answer: 0
        },
        {
            question: "What is the speed of light in a vacuum?",
            options: ["300,000 km/s", "150,000 km/s", "3,000 km/s", "30,000 km/s"],
            answer: 0
        },
        {
            question: "Which of the following is not a vector quantity?",
            options: ["Velocity", "Acceleration", "Force", "Mass"],
            answer: 3
        },
        {
            question: "What causes the blue color of the sky?",
            options: ["Reflection", "Refraction", "Scattering of light", "Absorption"],
            answer: 2
        },
        {
            question: "Which law states that \"for every action, there is an equal and opposite reaction\"?",
            options: ["Newton’s First Law", "Newton’s Second Law", "Newton’s Third Law", "Law of Gravitation"],
            answer: 2
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Ag", "Au", "Pb", "Hg"],
            answer: 1
        },
        {
            question: "What is the pH value of pure water?",
            options: ["5", "7", "9", "12"],
            answer: 1
        },
        {
            question: "Which gas is responsible for the greenhouse effect?",
            options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
            answer: 1
        },
        {
            question: "What is the most abundant element in the Earth's crust?",
            options: ["Iron", "Oxygen", "Silicon", "Aluminum"],
            answer: 1
        },
        {
            question: "Which acid is found in lemon juice?",
            options: ["Hydrochloric acid", "Sulfuric acid", "Citric acid", "Acetic acid"],
            answer: 2
        },
        {
            question: "What is the basic unit of life?",
            options: ["Organ", "Cell", "Tissue", "Atom"],
            answer: 1
        },
        {
            question: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
            answer: 2
        },
        {
            question: "Which part of the human body produces insulin?",
            options: ["Liver", "Pancreas", "Kidney", "Stomach"],
            answer: 1
        },
        {
            question: "What is the largest organ in the human body?",
            options: ["Brain", "Liver", "Skin", "Heart"],
            answer: 2
        },
        {
            question: "Which vitamin is produced when the skin is exposed to sunlight?",
            options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
            answer: 2
        },
        {
            question: "What is the closest planet to the Sun?",
            options: ["Earth", "Venus", "Mercury", "Mars"],
            answer: 2
        },
        {
            question: "Which layer of the Earth is made of solid iron and nickel?",
            options: ["Crust", "Mantle", "Outer core", "Inner core"],
            answer: 3
        },
        {
            question: "What causes tides in the ocean?",
            options: ["Wind", "Moon’s gravity", "Earth’s rotation", "Sun’s heat"],
            answer: 1
        },
        {
            question: "Which planet is known as the \"Red Planet\"?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            answer: 1
        },
        {
            question: "What is the name of the galaxy we live in?",
            options: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"],
            answer: 1
        },
        {
            question: "What is the SI unit of power?",
            options: ["Watt", "Joule", "Newton", "Pascal"],
            answer: 0
        },
        {
            question: "What type of energy is stored in a stretched rubber band?",
            options: ["Kinetic energy", "Potential energy", "Thermal energy", "Nuclear energy"],
            answer: 1
        },
        {
            question: "What is the main cause of global warming?",
            options: ["Oxygen", "Carbon dioxide", "Helium", "Ozone"],
            answer: 1
        },
        {
            question: "What is the acceleration due to gravity on Earth?",
            options: ["8.9 m/s²", "9.8 m/s²", "10.2 m/s²", "11.1 m/s²"],
            answer: 1
        },
        {
            question: "Sound cannot travel through:",
            options: ["Solids", "Liquids", "Gases", "Vacuum"],
            answer: 3
        },
        {
            question: "What is the atomic number of oxygen?",
            options: ["6", "7", "8", "9"],
            answer: 2
        },
        {
            question: "Which gas do plants absorb from the atmosphere?",
            options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
            answer: 1
        },
        {
            question: "What is the most abundant gas in Earth's atmosphere?",
            options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
            answer: 2
        },
        {
            question: "Which of the following is a noble gas?",
            options: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
            answer: 2
        },
        {
            question: "What type of bond is formed when electrons are shared?",
            options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
            answer: 1
        },
        {
            question: "What is the function of red blood cells?",
            options: ["Carry oxygen", "Fight infections", "Digest food", "Store energy"],
            answer: 0
        },
        {
            question: "Which organ in the human body filters blood?",
            options: ["Liver", "Heart", "Kidney", "Lungs"],
            answer: 2
        },
        {
            question: "What type of organism can make its own food?",
            options: ["Herbivore", "Carnivore", "Autotroph", "Heterotroph"],
            answer: 2
        },
        {
            question: "What is the largest bone in the human body?",
            options: ["Femur", "Tibia", "Humerus", "Radius"],
            answer: 0
        },
        {
            question: "What part of the plant is responsible for photosynthesis?",
            options: ["Root", "Stem", "Leaf", "Flower"],
            answer: 2
        },
        {
            question: "What is the shape of the Earth?",
            options: ["Perfect sphere", "Oblate spheroid", "Flat", "Cubic"],
            answer: 1
        },
        {
            question: "What is the largest planet in the solar system?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: 2
        },
        {
            question: "What layer of Earth's atmosphere contains the ozone layer?",
            options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
            answer: 1
        },
        {
            question: "What is the main component of the Sun?",
            options: ["Oxygen", "Hydrogen", "Carbon", "Helium"],
            answer: 1
        },
        {
            question: "How long does it take for the Earth to orbit the Sun?",
            options: ["24 hours", "30 days", "365 days", "1000 days"],
            answer: 2
        },
        {
            question: "What type of mirror is used in car rearview mirrors?",
            options: ["Plane mirror", "Convex mirror", "Concave mirror", "Cylindrical mirror"],
            answer: 1
        },
        {
            question: "What is the SI unit of work?",
            options: ["Newton", "Joule", "Watt", "Pascal"],
            answer: 1
        },
        {
            question: "What is the frequency of a wave measured in?",
            options: ["Joules", "Watts", "Hertz", "Newtons"],
            answer: 2
        },
        {
            question: "What type of lens is used in a magnifying glass?",
            options: ["Concave", "Convex", "Plane", "Cylindrical"],
            answer: 1
        },
        {
            question: "What force keeps the planets in orbit around the Sun?",
            options: ["Magnetic force", "Gravitational force", "Nuclear force", "Frictional force"],
            answer: 1
        },

        {
            question: "Which element is used in batteries?",
            options: ["Lithium", "Sodium", "Magnesium", "Aluminum"],
            answer: 0
        },
        {
            question: "What is the chemical formula for water?",
            options: ["H2O", "CO2", "O2", "CH4"],
            answer: 0
        },
        {
            question: "What is the hardest naturally occurring substance on Earth?",
            options: ["Gold", "Iron", "Diamond", "Quartz"],
            answer: 2
        },
        {
            question: "What type of reaction absorbs heat?",
            options: ["Exothermic", "Endothermic", "Neutralization", "Combustion"],
            answer: 1
        },
        {
            question: "Which element is essential for the formation of hemoglobin in blood?",
            options: ["Calcium", "Iron", "Sodium", "Potassium"],
            answer: 1
        },
        {
            question: "What part of the brain controls balance?",
            options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
            answer: 1
        },
        {
            question: "What gas do humans exhale?",
            options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
            answer: 1
        },
        {
            question: "What is the largest artery in the human body?",
            options: ["Vein", "Capillary", "Aorta", "Pulmonary artery"],
            answer: 2
        },
        {
            question: "Which part of the plant absorbs water?",
            options: ["Stem", "Leaves", "Roots", "Flowers"],
            answer: 2
        },
        {
            question: "What is the process by which plants make their own food?",
            options: ["Respiration", "Digestion", "Photosynthesis", "Fermentation"],
            answer: 2
        },
        {
            question: "What is the Earth's outermost layer called?",
            options: ["Mantle", "Core", "Crust", "Atmosphere"],
            answer: 2
        },
        {
            question: "What is the name of the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: 3
        },
        {
            question: "Which planet has the most moons?",
            options: ["Earth", "Jupiter", "Mars", "Venus"],
            answer: 1
        },
        {
            question: "Which planet has rings around it?",
            options: ["Mars", "Venus", "Saturn", "Mercury"],
            answer: 2
        },
        {
            question: "What is a meteor that reaches Earth’s surface called?",
            options: ["Asteroid", "Meteorite", "Comet", "Nebula"],
            answer: 1
        },
        {
            question: "Which vitamin is also known as ascorbic acid?",
            options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
            answer: 1
        },
        {
            question: "Which metal is liquid at room temperature?",
            options: ["Iron", "Mercury", "Aluminum", "Lead"],
            answer: 1
        },
        {
            question: "What does DNA stand for?",
            options: ["Deoxyribonucleic Acid", "Dicarboxylic Nuclear Acid", "Dimethyl Nitric Acid", "Dual Nucleic Acid"],
            answer: 0
        },
        {
            question: "What gas is used in balloons to make them float?",
            options: ["Oxygen", "Carbon dioxide", "Helium", "Nitrogen"],
            answer: 2
        },
        {
            question: "What is the primary function of white blood cells?",
            options: ["Carry oxygen", "Fight infections", "Help digestion", "Regulate temperature"],
            answer: 1
        },
        {
            question: "What is the boiling point of water at sea level?",
            options: ["90°C", "100°C", "110°C", "120°C"],
            answer: 1
        },
        {
            question: "What organ produces bile?",
            options: ["Stomach", "Liver", "Kidney", "Pancreas"],
            answer: 1
        },
        {
            question: "What type of energy does the Sun produce?",
            options: ["Nuclear energy", "Chemical energy", "Mechanical energy", "Thermal energy"],
            answer: 0
        },
        {
            question: "Which part of the body contains the most bones?",
            options: ["Leg", "Hand", "Skull", "Spine"],
            answer: 1
        },
        {
            question: "What gas is necessary for combustion?",
            options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen"],
            answer: 1
        },
        {
            question: "Which type of blood can be donated to all blood groups?",
            options: ["A", "B", "AB", "O negative"],
            answer: 3
        },
        {
            question: "What is the unit of electric current?",
            options: ["Volt", "Watt", "Ampere", "Ohm"],
            answer: 2
        },
        {
            question: "Which type of energy is stored in food?",
            options: ["Kinetic energy", "Chemical energy", "Nuclear energy", "Mechanical energy"],
            answer: 1
        },
        {
            question: "What is the speed of sound in air at room temperature?",
            options: ["150 m/s", "343 m/s", "500 m/s", "1,000 m/s"],
            answer: 1
        },
        {
            question: "Which force opposes the motion of an object?",
            options: ["Gravity", "Friction", "Magnetic", "Centripetal"],
            answer: 1
        },
        {
            question: "What is the SI unit of pressure?",
            options: ["Joule", "Newton", "Pascal", "Watt"],
            answer: 2
        },
        {
            question: "Which gas is known as \"laughing gas\"?",
            options: ["Carbon dioxide", "Oxygen", "Nitrous oxide", "Hydrogen"],
            answer: 2
        },

        {
            question: "What is the chemical symbol for sodium?",
            options: ["So", "Na", "S", "Sn"],
            answer: 1
        },
        {
            question: "What is the main component of rust?",
            options: ["Iron sulfate", "Iron oxide", "Iron chloride", "Iron carbonate"],
            answer: 1
        },
        {
            question: "What type of acid is present in vinegar?",
            options: ["Hydrochloric acid", "Sulfuric acid", "Acetic acid", "Citric acid"],
            answer: 2
        },
        {
            question: "Which element is commonly used in light bulb filaments?",
            options: ["Copper", "Aluminum", "Tungsten", "Silver"],
            answer: 2
        },
        {
            question: "What is the main function of the liver?",
            options: ["Pump blood", "Filter waste", "Produce bile", "Control temperature"],
            answer: 2
        },
        {
            question: "What type of joint is found in the shoulder?",
            options: ["Hinge joint", "Ball and socket joint", "Pivot joint", "Saddle joint"],
            answer: 1
        },
        {
            question: "What is the function of the small intestine?",
            options: ["Absorb nutrients", "Store food", "Produce insulin", "Filter blood"],
            answer: 0
        },
        {
            question: "What part of the cell contains genetic material?",
            options: ["Mitochondria", "Cytoplasm", "Nucleus", "Ribosomes"],
            answer: 2
        },
        {
            question: "What is the name of the pigment that gives plants their green color?",
            options: ["Carotene", "Hemoglobin", "Chlorophyll", "Melanin"],
            answer: 2
        },
        {
            question: "Which planet is the hottest in the solar system?",
            options: ["Mercury", "Venus", "Mars", "Jupiter"],
            answer: 1
        },
        {
            question: "What is the Earth's largest continent?",
            options: ["Africa", "Asia", "North America", "Europe"],
            answer: 1
        },
        {
            question: "What is the name of the largest volcano in the solar system?",
            options: ["Mount Everest", "Olympus Mons", "Mauna Loa", "Kilauea"],
            answer: 1
        },
        {
            question: "What is the name of the layer of the atmosphere where weather occurs?",
            options: ["Stratosphere", "Troposphere", "Mesosphere", "Thermosphere"],
            answer: 1
        },
        {
            question: "What causes a solar eclipse?",
            options: ["The Moon blocking the Sun", "The Earth blocking the Moon", "The Sun blocking the Moon", "The atmosphere bending light"],
            answer: 0
        },
        {
            question: "Which vitamin is known as the \"sunshine vitamin\"?",
            options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
            answer: 3
        },
        {
            question: "What is the main function of platelets in blood?",
            options: ["Carry oxygen", "Fight infections", "Help clotting", "Remove waste"],
            answer: 2
        },
        {
            question: "What is the primary component of bones?",
            options: ["Iron", "Calcium", "Sodium", "Magnesium"],
            answer: 1
        },
        {
            question: "Which is the longest river in the world?",
            options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
            answer: 1
        },
        {
            question: "Which is the smallest planet in the solar system?",
            options: ["Mercury", "Pluto", "Mars", "Venus"],
            answer: 0
        }
    ],

    history: [
        {
            question: "In which year did World War II end?",
            options: ["1943", "1945", "1950", "1939"],
            answer: 1
        },

        {
            question: "Who was the first emperor of China?",
            options: ["Liu Bang", "Qin Shi Huang", "Kublai Khan", "Sun Yat-sen"],
            answer: 1
        },
        {
            question: "The Great Pyramid of Giza was built for which Pharaoh?",
            options: ["Tutankhamun", "Ramses II", "Khufu", "Akhenaten"],
            answer: 2
        },
        {
            question: "Which civilization invented writing?",
            options: ["Romans", "Greeks", "Sumerians", "Egyptians"],
            answer: 2
        },
        {
            question: "Who was the founder of the Maurya Empire?",
            options: ["Chandragupta Maurya", "Ashoka", "Harsha", "Bindusara"],
            answer: 0
        },
        {
            question: "Which ancient city is known for its hanging gardens?",
            options: ["Babylon", "Athens", "Rome", "Alexandria"],
            answer: 0
        },
        {
            question: "Who led the Norman conquest of England in 1066?",
            options: ["Richard the Lionheart", "William the Conqueror", "Henry VIII", "Edward I"],
            answer: 1
        },
        {
            question: "The Magna Carta was signed in which year?",
            options: ["1066", "1215", "1492", "1776"],
            answer: 1
        },
        {
            question: "Who was the first Holy Roman Emperor?",
            options: ["Otto the Great", "Charlemagne", "Frederick Barbarossa", "Justinian I"],
            answer: 1
        },
        {
            question: "The Black Death was caused by which disease?",
            options: ["Influenza", "Bubonic plague", "Cholera", "Smallpox"],
            answer: 1
        },
        {
            question: "Who was the famous Venetian traveler who visited China in the 13th century?",
            options: ["Christopher Columbus", "Ferdinand Magellan", "Marco Polo", "Vasco da Gama"],
            answer: 2
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
            answer: 1
        },
        {
            question: "What was the name of Henry VIII's second wife?",
            options: ["Catherine of Aragon", "Anne Boleyn", "Jane Seymour", "Mary Tudor"],
            answer: 1
        },
        {
            question: "In which year did Christopher Columbus reach the Americas?",
            options: ["1492", "1519", "1607", "1776"],
            answer: 0
        },
        {
            question: "Which empire was known as the \"Sick Man of Europe\"?",
            options: ["Roman Empire", "Ottoman Empire", "Russian Empire", "British Empire"],
            answer: 1
        },
        {
            question: "Who wrote \"The Prince,\" a famous political treatise?",
            options: ["Thomas More", "Niccolò Machiavelli", "John Locke", "Jean-Jacques Rousseau"],
            answer: 1
        },
        {
            question: "What event started World War I?",
            options: ["The invasion of Poland", "The assassination of Archduke Franz Ferdinand", "The sinking of the Lusitania", "The signing of the Treaty of Versailles"],
            answer: 1
        },
        {
            question: "Who was the first President of the United States?",
            options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
            answer: 1
        },
        {
            question: "When did World War II end?",
            options: ["1943", "1945", "1947", "1950"],
            answer: 1
        },
        {
            question: "The Cold War was primarily between which two countries?",
            options: ["USA and Germany", "USA and Soviet Union", "UK and France", "China and Japan"],
            answer: 1
        },
        {
            question: "Who was the leader of Nazi Germany during World War II?",
            options: ["Joseph Stalin", "Winston Churchill", "Adolf Hitler", "Benito Mussolini"],
            answer: 2
        },
        {
            question: "Who was the last Pharaoh of Egypt?",
            options: ["Nefertiti", "Ramses II", "Cleopatra VII", "Tutankhamun"],
            answer: 2
        },
        {
            question: "The Roman Republic transitioned into an empire under which leader?",
            options: ["Julius Caesar", "Augustus", "Nero", "Constantine"],
            answer: 1
        },
        {
            question: "The Code of Hammurabi is associated with which ancient civilization?",
            options: ["Egypt", "Greece", "Mesopotamia", "China"],
            answer: 2
        },
        {
            question: "What was the primary language of the Roman Empire?",
            options: ["Greek", "Latin", "Persian", "Arabic"],
            answer: 1
        },
        {
            question: "The Trojan War is believed to have been fought between the Trojans and which other civilization?",
            options: ["Egyptians", "Babylonians", "Persians", "Greeks"],
            answer: 3
        },

        {
            question: "Who was crowned the first Holy Roman Emperor in 800 AD?",
            options: ["Charlemagne", "Otto I", "Constantine", "Henry IV"],
            answer: 0
        },
        {
            question: "The Battle of Hastings in 1066 was fought between England and which invading group?",
            options: ["Vikings", "Normans", "Moors", "Franks"],
            answer: 1
        },
        {
            question: "The Hundred Years' War was fought between which two nations?",
            options: ["England and Spain", "France and Spain", "England and France", "Italy and Germany"],
            answer: 2
        },
        {
            question: "What was the main goal of the Crusades?",
            options: [
                "To expand the Roman Empire",
                "To spread Christianity in Asia",
                "To recapture the Holy Land from Muslim control",
                "To trade with India"
            ],
            answer: 2
        },
        {
            question: "Who was the first Sultan of the Ottoman Empire?",
            options: ["Osman I", "Suleiman the Magnificent", "Mehmed II", "Selim I"],
            answer: 0
        },
        {
            question: "The Renaissance began in which country?",
            options: ["France", "Italy", "England", "Germany"],
            answer: 1
        },
        {
            question: "Who discovered the Americas in 1492?",
            options: ["Ferdinand Magellan", "Marco Polo", "Christopher Columbus", "Hernán Cortés"],
            answer: 2
        },
        {
            question: "The Protestant Reformation was led by which figure?",
            options: ["Martin Luther", "John Calvin", "Henry VIII", "Pope Leo X"],
            answer: 0
        },
        {
            question: "Which European explorer first reached India by sea?",
            options: ["Vasco da Gama", "Ferdinand Magellan", "Marco Polo", "James Cook"],
            answer: 0
        },
        {
            question: "The Spanish Armada was defeated in 1588 by which country?",
            options: ["France", "Netherlands", "England", "Portugal"],
            answer: 2
        },
        {
            question: "Who wrote the Declaration of Independence?",
            options: ["George Washington", "Thomas Jefferson", "John Adams", "Benjamin Franklin"],
            answer: 1
        },
        {
            question: "What year did the French Revolution begin?",
            options: ["1750", "1776", "1789", "1812"],
            answer: 2
        },
        {
            question: "Who was the first President of the United States?",
            options: ["Thomas Jefferson", "John Adams", "George Washington", "James Madison"],
            answer: 2
        },
        {
            question: "The American Civil War took place between which years?",
            options: ["1775–1783", "1800–1812", "1861–1865", "1901–1910"],
            answer: 2
        },
        {
            question: "Napoleon Bonaparte became Emperor of France in which year?",
            options: ["1789", "1799", "1804", "1815"],
            answer: 2
        },
        {
            question: "Who was the Prime Minister of the UK during World War II?",
            options: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Margaret Thatcher"],
            answer: 1
        },
        {
            question: "When did World War I begin?",
            options: ["1914", "1918", "1939", "1941"],
            answer: 0
        },
        {
            question: "The Cold War was mainly between which two superpowers?",
            options: ["USA and Germany", "USA and Soviet Union", "UK and China", "France and Japan"],
            answer: 1
        },
        {
            question: "Who was the leader of the Soviet Union during the Cuban Missile Crisis?",
            options: ["Vladimir Lenin", "Joseph Stalin", "Nikita Khrushchev", "Leonid Brezhnev"],
            answer: 2
        },
        {
            question: "Which US President resigned due to the Watergate scandal?",
            options: ["Richard Nixon", "Gerald Ford", "Jimmy Carter", "Ronald Reagan"],
            answer: 0
        },
        {
            question: "When did the Berlin Wall fall?",
            options: ["1985", "1989", "1991", "2000"],
            answer: 1
        },

        {
            question: "What was the name of the ship that sank in 1912 after hitting an iceberg?",
            options: ["Titanic", "Lusitania", "Queen Mary", "Britannic"],
            answer: 0
        },
        {
            question: "Who was the first man to step on the Moon?",
            options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
            answer: 1
        },
        {
            question: "Which African country was never colonized by European powers?",
            options: ["Kenya", "Ethiopia", "Sudan", "Algeria"],
            answer: 1
        },
        {
            question: "In which year did India gain independence from British rule?",
            options: ["1919", "1947", "1950", "1962"],
            answer: 1
        },
        {
            question: "Who built the Hanging Gardens of Babylon?",
            options: ["Nebuchadnezzar II", "Hammurabi", "Cyrus the Great", "Darius I"],
            answer: 0
        },
        {
            question: "The Rosetta Stone helped scholars decipher which ancient script?",
            options: ["Sumerian", "Cuneiform", "Egyptian hieroglyphs", "Sanskrit"],
            answer: 2
        },
        {
            question: "Which Greek city-state was known for its military strength?",
            options: ["Athens", "Sparta", "Corinth", "Thebes"],
            answer: 1
        },
        {
            question: "Who was the ruler of the Persian Empire during the Battle of Thermopylae?",
            options: ["Cyrus the Great", "Xerxes I", "Darius I", "Artaxerxes"],
            answer: 1
        },
        {
            question: "Which ancient civilization developed the first known form of democracy?",
            options: ["Romans", "Egyptians", "Athenians", "Persians"],
            answer: 2
        },

        {
            question: "When did the Berlin Wall fall?",
            options: ["1985", "1989", "1991", "1995"],
            answer: 1
        },
        {
            question: "What year did the United Nations form?",
            options: ["1919", "1939", "1945", "1955"],
            answer: 2
        },
        {
            question: "What major event happened on July 20, 1969?",
            options: ["The Vietnam War ended", "The first moon landing", "The Berlin Wall fell", "The Cuban Missile Crisis"],
            answer: 1
        },
        {
            question: "What was the first city attacked with an atomic bomb?",
            options: ["Tokyo", "Hiroshima", "Nagasaki", "Kyoto"],
            answer: 1
        },
        {
            question: "The Great Pyramid of Giza was built for which pharaoh?",
            options: ["Ramses II", "Tutankhamun", "Khufu", "Akhenaten"],
            answer: 2
        },
        {
            question: "Which ancient civilization is known for developing the first written code of laws?",
            options: ["Babylonians", "Egyptians", "Greeks", "Persians"],
            answer: 0
        },
        {
            question: "The Oracle of Delphi was associated with which Greek god?",
            options: ["Zeus", "Apollo", "Poseidon", "Athena"],
            answer: 1
        },
        {
            question: "What city was the capital of the Eastern Roman Empire?",
            options: ["Rome", "Athens", "Constantinople", "Alexandria"],
            answer: 2
        },

        {
            question: "Which empire was ruled by Genghis Khan?",
            options: ["Ottoman Empire", "Mongol Empire", "Persian Empire", "Byzantine Empire"],
            answer: 1
        },
        {
            question: "The Magna Carta was signed in which year?",
            options: ["1066", "1215", "1302", "1415"],
            answer: 1
        },
        {
            question: "Which battle marked the end of Muslim rule in Spain?",
            options: ["Battle of Tours", "Battle of Lepanto", "Battle of Granada", "Battle of Hastings"],
            answer: 2
        },
        {
            question: "Who founded the Ottoman Empire?",
            options: ["Osman I", "Mehmed II", "Suleiman the Magnificent", "Bayezid I"],
            answer: 0
        },
        {
            question: "What was the dominant religion of the Byzantine Empire?",
            options: ["Islam", "Catholicism", "Orthodox Christianity", "Paganism"],
            answer: 2
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Titian"],
            answer: 1
        },
        {
            question: "What was the main goal of Christopher Columbus’ voyage in 1492?",
            options: ["To prove the Earth was round", "To find a westward route to Asia", "To discover a new continent", "To conquer new lands"],
            answer: 1
        },
        {
            question: "Who was the first European explorer to reach the Pacific Ocean?",
            options: ["Ferdinand Magellan", "Vasco Núñez de Balboa", "James Cook", "Amerigo Vespucci"],
            answer: 1
        },
        {
            question: "Who was known as the \"Sun King\"?",
            options: ["Philip II of Spain", "Louis XIV of France", "Henry VIII of England", "Frederick the Great"],
            answer: 1
        },
        {
            question: "What invention is credited to Johannes Gutenberg?",
            options: ["Telescope", "Printing press", "Steam engine", "Compass"],
            answer: 1
        },
        {
            question: "The American Revolution officially ended with which treaty?",
            options: ["Treaty of Versailles", "Treaty of Paris (1783)", "Treaty of Ghent", "Treaty of Tordesillas"],
            answer: 1
        },
        {
            question: "Who wrote the U.S. Constitution?",
            options: ["Thomas Jefferson", "James Madison", "Benjamin Franklin", "Alexander Hamilton"],
            answer: 1
        },
        {
            question: "Napoleon Bonaparte was exiled to which island in 1815?",
            options: ["Elba", "St. Helena", "Corsica", "Malta"],
            answer: 1
        },
        {
            question: "The unification of Germany was led by:",
            options: ["Otto von Bismarck", "Kaiser Wilhelm II", "Friedrich Engels", "Napoleon III"],
            answer: 0
        },
        {
            question: "Who was the first U.S. president to be impeached?",
            options: ["Andrew Jackson", "Andrew Johnson", "Richard Nixon", "Bill Clinton"],
            answer: 1
        }


    ],
    sports: [
        {
            question: "Which sport uses a shuttlecock?",
            options: ["Badminton", "Tennis", "Volleyball", "Table Tennis"],
            answer: 0
        },
        {
            question: "How many players are there in a basketball team on the court at one time?",
            options: ["7", "6", "5", "4"],
            answer: 2
        },
        {
            question: "In what sport would you perform a 'slam dunk'?",
            options: ["Basketball", "Football", "Soccer", "Baseball"],
            answer: 0
        },
        {
            question: "What is the name of the tournament played every four years in men's soccer?",
            options: ["World Cup", "Champions League", "Copa America", "Euros"],
            answer: 0
        },
        {
            question: "Which country won the FIFA World Cup in 2022?",
            options: ["France", "Argentina", "Brazil", "Croatia"],
            answer: 1
        },
        {
            question: "How many innings are there typically in a baseball game?",
            options: ["7", "8", "9", "10"],
            answer: 2
        },
        {
            question: "What is the term for a score of zero in tennis?",
            options: ["Love", "Ace", "Deuce", "Advantage"],
            answer: 0
        },
        {
            question: "Which golfer has won the most major championships?",
            options: ["Tiger Woods", "Jack Nicklaus", "Arnold Palmer", "Ben Hogan"],
            answer: 1
        },
        {
            question: "How many rings are there on the Olympic flag?",
            options: ["4", "5", "6", "7"],
            answer: 1
        },
        {
            question: "What is the capital of Kabaddi?",
            options: ["Mumbai", "Chennai", "Delhi", "None of these"],
            answer: 3
        },
        {
            question: "Which sport is known as the 'king of sports'?",
            options: ["Soccer (Football)", "Cricket", "Chess", "Formula 1"],
            answer: 0
        },
        {
            question: "In which sport do athletes compete in the decathlon?",
            options: ["Track and Field", "Gymnastics", "Swimming", "Cycling"],
            answer: 0
        },
        {
            question: "What is the name of the Indian domestic cricket tournament?",
            options: ["Ranji Trophy", "IPL", "Vijay Hazare Trophy", "Deodhar Trophy"],
            answer: 0
        },
        {
            question: "Who is known as the 'Flying Sikh'?",
            options: ["Milkha Singh", "Sachin Tendulkar", "Major Dhyan Chand", "Viswanathan Anand"],
            answer: 0
        },
        {
            question: "How many players are there in a Kho Kho team?",
            options: ["9", "10", "12", "7"],
            answer: 0
        },
        {
            question: "Which game is played on a court with a net and involves hitting a ball with a racket?",
            options: ["Badminton", "Squash", "Tennis", "All of the above"],
            answer: 3
        },
        {
            question: "Which of these is NOT a stroke in swimming?",
            options: ["Butterfly", "Backstroke", "Freestyle", "Dog Paddle"],
            answer: 3
        },
        {
            question: "What is the term for hitting a six in cricket?",
            options: ["Boundary", "Four", "Sixer", "Maximum"],
            answer: 2
        },
        {
            question: "What is the distance of a marathon?",
            options: ["26.2 miles", "25 miles", "40 km", "27 miles"],
            answer: 0
        },
        {
            question: "Which boxer was known as 'The Greatest'?",
            options: ["Muhammad Ali", "Mike Tyson", "Floyd Mayweather", "Rocky Marciano"],
            answer: 0
        },
        {
            question: "What is the name of the horse race held annually in England?",
            options: ["Grand National", "Kentucky Derby", "Melbourne Cup", "Prix de l'Arc de Triomphe"],
            answer: 0
        },
        {
            question: "Which sport uses a cue and balls on a table?",
            options: ["Snooker", "Pool", "Billiards", "All of the above"],
            answer: 3
        },
        {
            question: "What does 'LBW' stand for in cricket?",
            options: ["Leg Before Wicket", "Leg Behind Wicket", "Lost Ball Wicket", "Law Behind Wicket"],
            answer: 0
        },
        {
            question: "Which country hosted the 2020 Summer Olympics (held in 2021)?",
            options: ["China", "Japan", "South Korea", "Brazil"],
            answer: 1
        },
        {
            question: "How many points is a touchdown worth in American football?",
            options: ["3", "6", "7", "10"],
            answer: 1
        },
        {
            question: "What is the name of the trophy awarded to the winner of the Super Bowl?",
            options: ["Vince Lombardi Trophy", "Super Bowl Trophy", "NFL Championship Trophy", "George Halas Trophy"],
            answer: 0
        },
        {
            question: "Which sport involves riding waves on a surfboard?",
            options: ["Surfing", "Windsurfing", "Kitesurfing", "Paddleboarding"],
            answer: 0
        },
        {
            question: "What is the name of the cycling race that takes place in France every year?",
            options: ["Tour de France", "Giro d'Italia", "Vuelta a España", "Paris-Roubaix"],
            answer: 0
        },
        {
            question: "Which player has won the most Grand Slam singles titles in tennis (men's)?",
            options: ["Novak Djokovic", "Rafael Nadal", "Roger Federer", "Pete Sampras"],
            answer: 0
        },
        {
            question: "Which player has won the most Grand Slam singles titles in tennis (women's)?",
            options: ["Serena Williams", "Margaret Court", "Steffi Graf", "Martina Navratilova"],
            answer: 1
        },
        {
            question: "In ice hockey, what is the term for scoring three goals in a single game?",
            options: ["Hat-trick", "Three-peat", "Grand Slam", "Trifecta"],
            answer: 0
        },
        {
            question: "How many players are there in a rugby team?",
            options: ["13", "15", "11", "17"],
            answer: 1
        },
        {
            question: "What is the name of the martial art that originated in Korea?",
            options: ["Taekwondo", "Karate", "Judo", "Kung Fu"],
            answer: 0
        },
        { question: "Which sport is played with a shuttlecock?", options: ["Table Tennis", "Badminton", "Squash", "Tennis"], answer: "1" },
        { question: "How many players are on a basketball team on the court?", options: ["4", "5", "7", "6"], answer: "0" },
        { question: "Which sport is known as 'the beautiful game'?", options: ["Basketball", "Cricket", "Soccer", "Rugby"], answer: "2" },
        { question: "What is the distance of a marathon in miles?", options: ["25 miles", "30 miles", "24 miles", "26.2 miles"], answer: "3" },
        { question: "In which sport do athletes perform a slam dunk?", options: ["Netball", "Basketball", "Soccer", "Volleyball"], answer: "1" },
        { question: "What is the main objective of the game of cricket?", options: ["Hit a shuttlecock", "Score runs", "Catch a ball", "Score goals"], answer: "1" },
        { question: "Which country won the FIFA World Cup in 2018?", options: ["Brazil", "Argentina", "Germany", "France"], answer: "3" },
        { question: "How many total bases are there in baseball?", options: ["4", "5", "3", "6"], answer: "0" },
        { question: "What do you call a score of zero in tennis?", options: ["Nil", "No Point", "Love", "Zero"], answer: "2" },
        { question: "Which sport uses a ball and net but is played on the sand?", options: ["Handball", "Beach Volleyball", "Soccer", "Basketball"], answer: "1" },
        { question: "What is the term for a home run in baseball?", options: ["Home Run", "Hit", "Grand Slam", "Strike"], answer: "2" },
        { question: "Which sport involves tackling and scrummaging?", options: ["American Football", "Soccer", "Basketball", "Rugby"], answer: "3" },
        { question: "Which sport is played in water with a ball?", options: ["Swimming", "Synchronised Swimming", "Water Polo", "Diving"], answer: "2" },
        { question: "How long is an Olympic swimming pool in meters?", options: ["30 meters", "50 meters", "25 meters", "100 meters"], answer: "1" },
        { question: "What is the maximum score possible in ten-pin bowling?", options: ["200", "250", "300", "400"], answer: "2" },
        { question: "In what sport is a 'tee' used?", options: ["Croquet", "Tennis", "Golf", "Billiards"], answer: "2" },
        { question: "What is the term for scoring three goals in one game in ice hockey?", options: ["Hat Trick", "Triple", "Trifecta", "Goal Rush"], answer: "0" },
        { question: "Which track and field event involves throwing a spear?", options: ["Javelin", "Shot Put", "Discus", "Hammer Throw"], answer: "0" },
        { question: "Which sport features players called 'strikers' and 'goalkeepers'?", options: ["Basketball", "Soccer", "Volleyball", "Baseball"], answer: "1" },
        { question: "In which sport do athletes compete for a yellow jersey?", options: ["Swimming", "Cycling", "Marathon", "Running"], answer: "1" },
        { question: "How many rings are there in the Olympic flag?", options: ["4", "5", "8", "6"], answer: "0" },
        { question: "Which sport is often called 'the king of sports'?", options: ["Baseball", "Soccer", "Cricket", "American Football"], answer: "1" },
        { question: "What is the primary objective in basketball?", options: ["Assist", "Block shots", "Rebound", "Score points"], answer: "3" },
        { question: "What is the term for a penalty shot in soccer?", options: ["Free Kick", "Corner Kick", "Goal Kick", "Penalty Kick"], answer: "3" },
        { question: "In baseball, what is the term for a strikeout?", options: ["Strike", "Out", "Home Run", "Foul"], answer: "1" },
        { question: "What is the name of the tournament played every four years in rugby?", options: ["Super Rugby", "Rugby World Cup", "Six Nations Championship", "Premiership Rugby"], answer: "1" },
        { question: "What is the highest governing body for soccer?", options: ["FIFA", "AFC", "UEFA", "CONCACAF"], answer: "0" },
        { question: "Which tennis tournament is held on grass?", options: ["Wimbledon", "Australian Open", "US Open", "French Open"], answer: "0" },
        { question: "What type of event is the World Series?", options: ["Basketball", "American Football", "Baseball", "Hockey"], answer: "2" },
        { question: "Which sport uses a racquet and a shuttlecock?", options: ["Tennis", "Squash", "Badminton", "Racquetball"], answer: "2" },
        { question: "In what sport do players take turns throwing balls to knock over pins?", options: ["Darts", "Frisbee", "Bowling", "Shootout"], answer: "2" },
        { question: "What sport combines cross-country skiing and rifle shooting?", options: ["Triathlon", "Biathlon", "Heptathlon", "Decathlon"], answer: "1" },
        { question: "Which sport features a net placed at the center of the court?", options: ["Soccer", "Tennis", "Cricket", "Baseball"], answer: "1" },
        { question: "In which sport would you hear the term 'breakaway'?", options: ["Tennis", "Soccer", "Basketball", "Hockey"], answer: "1" },
        { question: "Which sport is known for the term 'offside'?", options: ["Rugby", "Basketball", "Soccer", "Volleyball"], answer: "2" },
        { question: "What is the basic scoring unit in gymnastics?", options: ["Difficulty Score", "Execution Score", "Final Score", "A Score"], answer: "0" },
        { question: "Which sport is played with a flat paddle and a ball in a gym?", options: ["Table Tennis", "Ping Pong", "Badminton", "Squash"], answer: "0" },
        { question: "What is the official term for a football field's length?", options: ["100 yards", "110 yards", "90 yards", "120 yards"], answer: "0" },
        { question: "Which sport is played on the ice?", options: ["Ice Hockey", "Field Hockey", "Lacrosse", "Rugby"], answer: "0" },
        { question: "What is the term for a successful attempt to score in basketball?", options: ["Point", "Field Goal", "Score", "Basket"], answer: "1" },
        { question: "In which sport might you execute a 'pike'?", options: ["Swimming", "Diving", "Gymnastics", "High Jump"], answer: "1" },
        { question: "What is the term used for a football pass thrown to a receiver?", options: ["Throw", "Hail Mary", "Reception", "Pass"], answer: "2" },
        { question: "In soccer, how long is a regulation match?", options: ["80 minutes", "70 minutes", "90 minutes", "60 minutes"], answer: "2" },
        { question: "What is the term for a team scoring a touchdown in American football?", options: ["Conversion", "Safety", "Field Goal", "Touchdown"], answer: "3" },
        { question: "How many players are on a water polo team?", options: ["11", "9", "5", "7"], answer: "3" },
        { question: "What is the name of the event where athletes compete over 100 meters?", options: ["Relay", "Sprint", "Marathon", "Track Event"], answer: "1" },
        { question: "Which sport uses a 'putter'?", options: ["Badminton", "Tennis", "Golf", "Croquet"], answer: "2" },
        { question: "In rugby, what is a 'scrum'?", options: ["Type of score", "Position", "Form of restart", "Move"], answer: "2" },
        { question: "What do you call a player who acts as a 'goalkeeper'?", options: ["Striker", "Midfielder", "Defense", "Goalie"], answer: "3" },
        { question: "What sport uses a ball and three posts?", options: ["American Football", "Soccer", "Rugby", "Hockey"], answer: "0" },
        { question: "How many points is a touchdown worth in American football?", options: ["6", "10", "3", "7"], answer: "0" },
        { question: "What is the primary goal of playing soccer?", options: ["Score more goals than the opponent", "Assist teammates", "Make a penalty", "Defend the goal"], answer: "0" },
        { question: "What is the name of the famous basketball tournament held annually?", options: ["Masters", "Olympics", "NCAA Tournament", "World Cup"], answer: "2" },
        { question: "In tennis, what is a 'deuce'?", options: ["Winning point", "Fault", "Tie at 40-40", "Out"], answer: "2" },
        { question: "Which sport is played in a ring with ropes?", options: ["Boxing", "Wrestling", "MMA", "All of the above"], answer: "3" },
        { question: "What is the name of the famous cycling race held in France?", options: ["Vuelta a España", "Paris-Roubaix", "Tour de France", "Giro d'Italia"], answer: "2" },
        { question: "In baseball, what is the term for the team that is batting?", options: ["Inning", "Fielding Team", "Defense", "Offense"], answer: "3" },
        { question: "What is the name of the event where athletes compete in high jumping and long jumping?", options: ["Track Events", "Field Events", "Combined Events", "Sprint Events"], answer: "1" },
        { question: "Which sport features the term 'Wimbledon' championship?", options: ["Rugby", "Badminton", "Cricket", "Tennis"], answer: "3" },
        { question: "In which sport do players use a curved stick to hit a ball?", options: ["Basketball", "Soccer", "Baseball", "Hockey"], answer: "3" },
        { question: "What is the main objective in handball?", options: ["Score goals", "Assist", "Defense", "Block shots"], answer: "0" },
        { question: "Which sport is known for the term 'dive'?", options: ["Swimming", "Soccer", "Diving", "Basketball"], answer: "2" },
        { question: "What is the name of the sport played on a court by two teams of five players?", options: ["Rugby", "Soccer", "Basketball", "Hockey"], answer: "2" },
        { question: "Which country is famous for running and long-distance events?", options: ["USA", "Russia", "Kenya", "China"], answer: "2" },
        { question: "What is the main objective in golf?", options: ["Score par", "Avoid bogeys", "Make birdies", "Hit the ball into the hole"], answer: "3" },
        { question: "Which sport features the term 'alley-oop'?", options: ["Soccer", "Basketball", "Tennis", "Hockey"], answer: "1" }


    ],
    technology:[
        {
          question: "What does URL stand for?",
          options: ["Universal Resource Locator", "Uniform Remote Locator", "Uniform Resource Locator", "Universal Remote Locator"],
          answer: 2
        },
        {
          question: "Which of these is a web browser?",
          options: ["Microsoft Word", "Microsoft Excel", "Google Chrome", "Adobe Photoshop"],
          answer: 2
        },
        {
          question: "What is the function of RAM in a computer?",
          options: ["To store data permanently", "To perform calculations", "To display images on the screen", "To store data temporarily while the computer is running"],
          answer: 3
        },
        {
          question: "What is an IP address?",
          options: ["A programming language", "A unique identifier for a device on a network", "A type of software", "A type of computer virus"],
          answer: 1
        },
        {
          question: "Which of these is a database management system?",
          options: ["Microsoft Access", "PowerPoint", "Google Chrome", "Microsoft Word"],
          answer: 0
        },
        {
          question: "What does Wi-Fi stand for?",
          options: ["Wireless Fidelity", "Wireless Internet", "Wired Internet", "Wired Fidelity"],
          answer: 0
        },
        {
          question: "What is cloud computing?",
          options: ["Developing software on your local computer", "Storing and accessing data and programs over the Internet", "Using a physical server in your office", "Connecting computers with cables"],
          answer: 1
        },
        {
          question: "Which of these is a popular social media platform?",
          options: ["Google Docs", "Adobe Reader", "Microsoft Excel", "Facebook"],
          answer: 3
        },
        {
          question: "What is the purpose of an operating system?",
          options: ["To browse the internet", "To create documents", "To run applications and manage hardware", "To play games"],
          answer: 2
        },
        {
          question: "What is malware?",
          options: ["Malicious software designed to harm a computer system", "A type of network", "A type of hardware", "A programming language"],
          answer: 0
        },
        {
          question: "What is a VPN?",
          options: ["Virtual Private Network", "Visual Programming Network", "Very Public Network", "Versatile Personal Network"],
          answer: 0
        },
        {
          question: "What is the purpose of a router?",
          options: ["To store files", "To display images", "To run programs", "To connect devices to a network"],
          answer: 3
        },
        {
          question: "What is a domain name?",
          options: ["A type of software", "A type of programming language", "The physical address of a website", "The name of a website"],
          answer: 3
        },
        {
          question: "What does HTTP stand for?",
          options: ["Hyper Transfer Text Protocol", "High-Tech Transfer Protocol", "HyperText Transfer Protocol", "High Text Transfer Protocol"],
          answer: 2
        },
        {
          question: "What is phishing?",
          options: ["A fraudulent attempt to obtain sensitive information", "A type of software", "A type of fishing", "A type of computer game"],
          answer: 0
        },
        {
          question: "What is encryption?",
          options: ["A way to create documents", "A way to play games", "A way to make data unreadable to unauthorized parties", "A way to speed up internet connection"],
          answer: 2
        },
        {
          question: "What is bandwidth?",
          options: ["The size of a computer screen", "The speed of a CPU", "The amount of RAM in a computer", "The amount of data that can be transmitted in a given time"],
          answer: 3
        },
        {
          question: "What is artificial intelligence (AI)?",
          options: ["The ability of a computer to mimic human intelligence", "A programming language", "A type of network", "A type of computer hardware"],
          answer: 0
        },
        {
          question: "What is the difference between hardware and software?",
          options: ["Hardware is the physical components of a computer, software is the programs that run on it", "Hardware is only used for gaming, software is only used for work", "Hardware and software are the same thing", "Hardware is the programs that run on a computer, software is the physical components"],
          answer: 0
        },
        {
          question: "What is a database?",
          options: ["A type of computer virus", "A programming language", "An organized collection of data", "A type of network"],
          answer: 2
        },
        {
          question: "What is a VPN?",
          options: ["Versatile Personal Network", "Virtual Private Network", "Very Public Network", "Visual Programming Network"],
          answer: 1
        },
        {
          question: "What is the purpose of a router?",
          options: ["To run programs", "To connect devices to a network", "To display images", "To store files"],
          answer: 1
        },
        {
          question: "What is a domain name?",
          options: ["A type of programming language", "The name of a website", "The physical address of a website", "A type of software"],
          answer: 1
        },
        {
          question: "What does HTTP stand for?",
          options: ["Hyper Transfer Text Protocol", "HyperText Transfer Protocol", "High-Tech Transfer Protocol", "High Text Transfer Protocol"],
          answer: 1
        },
        {
          question: "What is phishing?",
          options: ["A fraudulent attempt to obtain sensitive information", "A type of software", "A type of fishing", "A type of computer game"],
          answer: 0
        },
        {
          question: "What is encryption?",
          options: ["A way to speed up internet connection", "A way to create documents", "A way to make data unreadable to unauthorized parties", "A way to play games"],
          answer: 2
        },
        {
          question: "What is bandwidth?",
          options: ["The speed of a CPU", "The amount of data that can be transmitted in a given time", "The amount of RAM in a computer", "The size of a computer screen"],
          answer: 1
        },
        {
          question: "What is artificial intelligence (AI)?",
          options: ["A type of network", "A programming language", "The ability of a computer to mimic human intelligence", "A type of computer hardware"],
          answer: 2
        },
        {
          question: "What is the difference between hardware and software?",
          options: ["Hardware and software are the same thing", "Hardware is the physical components of a computer, software is the programs that run on it", "Hardware is the programs that run on a computer, software is the physical components", "Hardware is only used for gaming, software is only used for work"],
          answer: 1
        },
        {
          question: "What is a database?",
          options: ["A type of network", "An organized collection of data", "A type of computer virus", "A programming language"],
          answer: 1
        },
        {
          question: "What is a denial-of-service (DoS) attack?",
          options: ["An attack that steals data", "An attack that disrupts the availability of a service", "An attack that installs malware", "An attack that damages hardware"],
          answer: 1
        },
        {
          question: "What is a firewall?",
          options: ["A type of software application", "A type of hardware component", "A security system that controls network traffic", "A type of computer virus"],
          answer: 2
        },
        {
          question: "What is two-factor authentication (2FA)?",
          options: ["A type of encryption", "A type of firewall", "A security measure that requires two forms of authentication", "A type of network protocol"],
          answer: 2
        },
        {
          question: "What is a digital signature?",
          options: ["An electronic signature that verifies the authenticity of a document", "A handwritten signature", "A type of network protocol", "A type of encryption"],
          answer: 0
        },
        {
          question: "What is a computer network?",
          options: ["A type of operating system", "A type of software application", "A collection of interconnected computers", "A type of hardware component"],
          answer: 2
        },
        {
          question: "What is the internet?",
          options: ["A type of operating system", "A global network of interconnected networks", "A type of software application", "A type of hardware component"],
          answer: 1
        },
        {
          question: "What is the World Wide Web (WWW)?",
          options: ["A system of interconnected web pages", "A type of programming language", "A type of operating system", "A type of computer network"],
          answer: 0
        },
        {
          question: "What is a website?",
          options: ["A collection of web pages", "A type of hardware component", "A type of computer network", "A type of software application"],
          answer: 0
        },
        {
          question: "What is a web browser?",
          options: ["A software application used to access the web", "A type of computer network", "A type of operating system", "A type of programming language"],
          answer: 0
        },
        {
          question: "What is a search engine?",
          options: ["A type of operating system", "A type of computer network", "A tool used to find information on the web", "A type of programming language"],
          answer: 2
        },
        {
          question: "What is a server?",
          options: ["A type of printer", "A type of mobile device", "A type of software", "A computer that provides data to other computers"],
          answer: 3
        },
        {
          question: "What is a programming language?",
          options: ["A type of network", "A set of instructions that tell a computer what to do", "A type of hardware", "A type of operating system"],
          answer: 1
        },
        
        {
          question: "What is the purpose of a compiler?",
          options: ["To run programs", "To browse the internet", "To create documents", "To translate programming code into machine code"],
          answer: 3
        },
        {
          question: "What is debugging?",
          options: ["The process of finding and fixing errors in code", "The process of writing code", "The process of running programs", "The process of designing software"],
          answer: 0
        },
        {
          question: "What is version control?",
          options: ["A type of hardware", "A system for tracking changes to code", "A type of computer virus", "A type of network"],
          answer: 1
        },
        {
          question: "What is a user interface (UI)?",
          options: ["The internal components of a computer", "The network connection of a computer", "The programming code of a software", "The way a user interacts with a computer system"],
          answer: 3
        },
        {
          question: "What is user experience (UX)?",
          options: ["The design of the user interface", "The programming code of a software", "The overall experience of a user when interacting with a product or system", "The technical specifications of a hardware"],
          answer: 2
        },
        {
          question: "What is a database query?",
          options: ["A type of hardware component", "A type of network connection", "A request for data from a database", "A type of database software"],
          answer: 2
        },
        {
          question: "What is data mining?",
          options: ["The process of extracting useful information from large datasets", "The process of deleting data from a database", "The process of storing data in a database", "The process of encrypting data"],
          answer: 0
        },
        {
          question: "What is cybersecurity?",
          options: ["The design of computer hardware", "The protection of computer systems and networks from unauthorized access", "The development of software applications", "The management of computer networks"],
          answer: 1
        },
        {
          question: "What is a denial-of-service (DoS) attack?",
          options: ["An attack that steals data", "An attack that installs malware", "An attack that disrupts the availability of a service", "An attack that damages hardware"],
          answer: 2
        },
        {
          question: "What is a firewall?",
          options: ["A type of software application", "A type of computer virus", "A security system that controls network traffic", "A type of hardware component"],
          answer: 2
        },
        {
          question: "What is two-factor authentication (2FA)?",
          options: ["A type of encryption", "A security measure that requires two forms of authentication", "A type of network protocol", "A type of firewall"],
          answer: 1
        },
        {
          question: "What is a digital signature?",
          options: ["A handwritten signature", "A type of encryption", "An electronic signature that verifies the authenticity of a document", "A type of network protocol"],
          answer: 2
        },
        {
          question: "What is a computer network?",
          options: ["A type of hardware component", "A collection of interconnected computers", "A type of operating system", "A type of software application"],
          answer: 1
        },
        {
          question: "What is the internet?",
          options: ["A global network of interconnected networks", "A type of hardware component", "A type of software application", "A type of operating system"],
          answer: 0
        },
        {
          question: "What is the World Wide Web (WWW)?",
          options: ["A type of computer network", "A type of programming language", "A system of interconnected web pages", "A type of operating system"],
          answer: 2
        },
        {
          question: "What is a website?",
          options: ["A type of computer network", "A type of software application", "A collection of web pages", "A type of hardware component"],
          answer: 2
        },
        {
          question: "What is a web browser?",
          options: ["A type of programming language", "A type of computer network", "A software application used to access the web", "A type of operating system"],
          answer: 2
        },
        {
          question: "What is a search engine?",
          options: ["A type of operating system", "A tool used to find information on the web", "A type of programming language", "A type of computer network"],
          answer: 1
        },
        {
          question: "What is an algorithm?",
          options: ["A type of computer hardware", "A set of rules or instructions for solving a problem", "A type of programming language", "A type of network protocol"],
          answer: 1
        },
        {
          question: "What is data structure?",
          options: ["A type of network protocol", "A type of computer virus", "A way of organizing and storing data", "A type of programming language"],
          answer: 2
        },
        {
          question: "What is object-oriented programming (OOP)?",
          options: ["A programming paradigm based on the concept of objects", "A type of operating system", "A type of network protocol", "A type of computer hardware"],
          answer: 0
        },
        {
          question: "What is a class in programming?",
          options: ["A blueprint for creating objects", "A type of programming language", "A type of network protocol", "A type of computer virus"],
          answer: 0
        },
        
        {
          question: "What is an object in programming?",
          options: ["An instance of a class", "A type of network protocol", "A type of operating system", "A type of computer hardware"],
          answer: 0
        },
        {
          question: "What is inheritance in OOP?",
          options: ["A mechanism for creating new classes based on existing ones", "A type of network protocol", "A type of computer virus", "A type of programming language"],
          answer: 0
        },
        {
          question: "What is polymorphism in OOP?",
          options: ["A type of network protocol", "The ability of an object to take on many forms", "A type of computer hardware", "A type of operating system"],
          answer: 1
        },
        {
          question: "What is encapsulation in OOP?",
          options: ["A type of computer virus", "The bundling of data and methods that operate on that data", "A type of programming language", "A type of network protocol"],
          answer: 1
        },
        {
          question: "What is a software development life cycle (SDLC)?",
          options: ["A type of operating system", "A type of network protocol", "A process for planning, creating, testing, and deploying software", "A type of computer hardware"],
          answer: 2
        },
        {
          question: "What is agile development?",
          options: ["An iterative and incremental approach to software development", "A type of programming language", "A type of computer virus", "A type of network protocol"],
          answer: 0
        },
        {
          question: "What is a database schema?",
          options: ["The structure of a database", "A type of hardware component", "A type of network connection", "A type of database software"],
          answer: 0
        },
        {
          question: "What is SQL?",
          options: ["Structured Query Language", "Standard Query Language", "Simple Query Language", "System Query Language"],
          answer: 0
        },
        {
          question: "What is a primary key in a database?",
          options: ["A type of hardware component", "A type of database software", "A unique identifier for each record in a table", "A type of network connection"],
          answer: 2
        },
        {
          question: "What is a foreign key in a database?",
          options: ["A key used to link tables together", "A type of network connection", "A type of hardware component", "A type of database software"],
          answer: 0
        },
        {
          question: "What is normalization in a database?",
          options: ["A type of network connection", "The process of organizing data to reduce redundancy", "A type of database software", "A type of hardware component"],
          answer: 1
        },
        {
          question: "What is a relational database?",
          options: ["A database that organizes data into tables with relationships", "A type of hardware component", "A type of network connection", "A type of database software"],
          answer: 0
        },
        {
          question: "What is a NoSQL database?",
          options: ["A database that does not use a relational model", "A type of hardware component", "A type of network connection", "A type of database software"],
          answer: 0
        },
        {
          question: "What is big data?",
          options: ["Extremely large datasets that are difficult to process", "A type of database software", "A type of hardware component", "A type of network connection"],
          answer: 0
        },
        {
          question: "What is machine learning?",
          options: ["A type of computer hardware", "A type of AI that allows computers to learn from data", "A type of operating system", "A type of network protocol"],
          answer: 1
        },
        {
          question: "What is deep learning?",
          options: ["A type of machine learning that uses artificial neural networks", "A type of operating system", "A type of computer hardware", "A type of network protocol"],
          answer: 0
        },
        {
          question: "What is a neural network?",
          options: ["A type of operating system", "A computational model inspired by the human brain", "A type of computer hardware", "A type of network protocol"],
          answer: 1
        },
        {
          question: "What is an API?",
          options: ["Application Process Interface", "Application Programming Interface", "Advanced Process Interface", "Advanced Programming Interface"],
          answer: 1
        },
        {
          question: "What is the purpose of an API?",
          options: ["To browse the internet", "To allow different software systems to communicate with each other", "To run programs", "To create documents"],
          answer: 1
        },
        {
          question: "What is a web service?",
          options: ["A software system that provides services over the web", "A type of operating system", "A type of network protocol", "A type of computer hardware"],
          answer: 0
        },
        {
          question: "What is REST?",
          options: ["Resourceful State Transfer", "Representational System Transfer", "Representational State Transfer", "Resourceful System Transfer"],
          answer: 2
        },
        {
          question: "What is a microservice?",
          options: ["A small, independent service that forms part of a larger system", "A type of computer hardware", "A type of operating system", "A type of network protocol"],
          answer: 0
        },
        {
          question: "What is DevOps?",
          options: ["A type of network protocol", "A set of practices that combines software development and IT operations", "A type of computer hardware", "A type of operating system"],
          answer: 1
        },
        {
          question: "What is continuous integration (CI)?",
          options: ["A type of network protocol", "A type of programming language", "The practice of frequently merging code changes into a central repository", "A type of computer virus"],
          answer: 2
        },
        {
          question: "What is continuous delivery (CD)?",
          options: ["The practice of automating the release process", "A type of network protocol", "A type of operating system", "A type of computer hardware"],
          answer: 0
        },
        {
          question: "What is infrastructure as code (IaC)?",
          options: ["The practice of managing infrastructure through code", "A type of network protocol", "A type of programming language", "A type of computer virus"],
          answer: 0
        },
        {
          question: "What is a container in IT?",
          options: ["A type of operating system", "A lightweight, portable, executable image that contains software", "A type of computer hardware", "A type of network protocol"],
          answer: 1
        },
        {
          question: "What is Kubernetes?",
          options: ["A type of programming language", "An open-source container orchestration system", "A type of computer hardware", "A type of network protocol"],
          answer: 1
        },
        {
          question: "What is serverless computing?",
          options: ["A type of computer hardware", "A type of operating system", "A cloud computing execution model where the cloud provider dynamically manages resources", "A type of network protocol"],
          answer: 2
        },
        {
          question: "What is edge computing?",
          options: ["Processing data closer to the source where it's generated", "A type of network protocol", "A type of operating system", "A type of computer hardware"],
          answer: 0
        },
        {
          question: "What is the Internet of Things (IoT)?",
          options: ["A network of interconnected devices embedded with software and sensors", "A type of programming language", "A type of computer hardware", "A type of network protocol"],
          answer: 0
        },
        {
          question: "What is blockchain?",
          options: ["A type of network protocol", "A distributed, decentralized, public ledger", "A type of operating system", "A type of computer hardware"],
          answer: 1
        },
        {
          question: "What is artificial reality (AR)?",
          options: ["A technology that overlays digital information onto the real world", "A type of network protocol", "A type of computer hardware", "A type of programming language"],
          answer: 0
        },
        {
          question: "What is virtual reality (VR)?",
          options: ["A technology that creates immersive, simulated experiences", "A type of computer hardware", "A type of programming language", "A type of network protocol"],
          answer: 0
        },
        {
          question: "What is quantum computing?",
          options: ["A type of computer hardware", "A type of network protocol", "A type of operating system", "A type of computing that utilizes quantum mechanics"],
          answer: 3
        },
        {
          question: "What is a supercomputer?",
          options: ["A computer with extremely high processing power", "A type of computer hardware", "A type of operating system", "A type of network protocol"],
          answer: 0
        },
        {
          question: "What is a motherboard?",
          options: ["The main circuit board of a computer", "A type of network protocol", "A type of programming language", "A type of computer virus"],
          answer: 0
        },
        {
          question: "What is a CPU cooler?",
          options: ["A type of network protocol", "A type of computer virus", "A device that dissipates heat from the CPU", "A type of programming language"],
          answer: 2
        },
        {
          question: "What is RAM (Random Access Memory)?",
          options: ["A type of operating system", "A volatile memory used by the CPU for active tasks", "A type of computer hardware", "A type of network protocol"],
          answer: 1
        },
        {
          question: "What is a hard drive (HDD)?",
          options: ["A type of programming language", "A non-volatile storage device", "A type of computer virus", "A type of network protocol"],
          answer: 1
        },
        {
          question: "What is a solid-state drive (SSD)?",
          options: ["A non-volatile storage device using flash memory", "A type of operating system", "A type of computer hardware", "A type of network protocol"],
          answer: 0
        },
        {
          question: "What is a graphics card (GPU)?",
          options: ["A dedicated processor for graphics rendering", "A type of network protocol", "A type of computer virus", "A type of programming language"],
          answer: 0
        },
        {
          question: "What is a power supply unit (PSU)?",
          options: ["A component that provides power to the computer", "A type of network protocol", "A type of computer virus", "A type of programming language"],
          answer: 0
        },
        {
          question: "What is a computer case?",
          options: ["The enclosure that houses the computer components", "A type of programming language", "A type of computer virus", "A type of network protocol"],
          answer: 0
        },
        {
          question: "What are peripherals?",
          options: ["Devices connected to a computer, like keyboards and mice", "A type of programming language", "A type of computer virus", "A type of network protocol"],
          answer: 0
        },
        {
          question: "What is a monitor?",
          options: ["A type of computer virus", "A display device for the computer", "A type of network protocol", "A type of programming language"],
          answer: 1
        }
        ],
        
mythology:[
    {
      question: "Which Hindu festival celebrates the victory of good over evil and is associated with the burning of effigies?",
      options: ["Holi", "Raksha Bandhan", "Dussehra", "Diwali"],
      answer: 2
    },
    {
      question: "Which Hindu festival of colors signifies the arrival of spring and the triumph of good over evil?",
      options: ["Diwali", "Holi", "Raksha Bandhan", "Navratri"],
      answer: 1
    },
    {
      question: "Which festival celebrates the bond between brothers and sisters?",
      options: ["Raksha Bandhan", "Diwali", "Holi", "Navratri"],
      answer: 0
    },
    {
      question: "Which nine-night festival is dedicated to the goddess Durga and her various forms?",
      options: ["Navratri", "Raksha Bandhan", "Holi", "Diwali"],
      answer: 0
    },
    {
      question: "Who is the Hindu god of fire?",
      options: ["Varuna", "Vayu", "Agni", "Indra"],
      answer: 2
    },
    {
      question: "Who is the Hindu god of wind?",
      options: ["Vayu", "Varuna", "Agni", "Kubera"],
      answer: 0
    },
    {
      question: "Who is the Hindu god of water and the celestial ocean?",
      options: ["Soma", "Vayu", "Varuna", "Agni"],
      answer: 2
    },
    {
      question: "Who is the Hindu god of wealth and prosperity (different from Lakshmi)?",
      options: ["Kubera", "Vishwakarma", "Yama", "Surya"],
      answer: 0
    },
    {
      question: "Who is the divine architect in Hindu mythology?",
      options: ["Garuda", "Vishwakarma", "Hanuman", "Arjuna"],
      answer: 1
    },
    {
      question: "Who is the king of the gods (Indra), known for wielding the Vajra (thunderbolt)?",
      options: ["Indra", "Agni", "Varuna", "Yama"],
      answer: 0
    },
    {
      question: "Who is the god of death in Hindu mythology?",
      options: ["Shani", "Rahu", "Yama", "Ketu"],
      answer: 2
    },
    {
      question: "Which celestial bird is the vehicle of Lord Vishnu?",
      options: ["Hanuman", "Pushpaka", "Garuda", "Jatayu"],
      answer: 2
    },
    {
      question: "What is the name of Lord Shiva's bull?",
      options: ["Ashvattha", "Nandi", "Drona", "Airavata"],
      answer: 1
    },
    {
      question: "What is the name of Lord Vishnu's conch shell?",
      options: ["Panchajanya", "Kaumodaki", "Sudarsana", "Gandiva"],
      answer: 0
    },
    {
      question: "Which demon was granted the boon of immortality by Brahma?",
      options: ["Ravana", "Hiranyakashipu", "Kumbhakarna", "Meghnada"],
      answer: 1
    },
    {
      question: "Who is the ten-headed demon king in the Ramayana?",
      options: ["Ravana", "Kumbhakarna", "Maricha", "Meghnada"],
      answer: 0
    },
    {
      question: "Who is Ravana's son, known for his strength and valor?",
      options: ["Kumbhakarna", "Atikaya", "Meghnada (Indrajit)", "Vibhishana"],
      answer: 2
    },
    {
      question: "Who is Rama's loyal devotee and messenger?",
      options: ["Sugriva", "Angada", "Hanuman", "Jambavan"],
      answer: 2
    },
    {
      question: "Who is Rama's brother, known for his archery skills?",
      options: ["Shatrughna", "Bharata", "Lakshmana", "Kush"],
      answer: 2
    },
    {
      question: "What is the name of Rama's bow?",
      options: ["Gandiva", "Kodanda", "Vijaya", "Pinaka"],
      answer: 1
    },
    {
      question: "Which avatar of Vishnu is known as the 'Boar Avatar'?",
      options: ["Narasimha", "Kurma", "Varaha", "Vamana"],
      answer: 2
    },
    {
      question: "Which avatar of Vishnu is half-man and half-lion?",
      options: ["Narasimha", "Varaha", "Vamana", "Parashurama"],
      answer: 0
    },
    {
      question: "Which avatar of Vishnu is a dwarf Brahmin?",
      options: ["Vamana", "Rama", "Varaha", "Narasimha"],
      answer: 0
    },
    {
      question: "Which avatar of Vishnu is known for wielding an axe?",
      options: ["Rama", "Parashurama", "Krishna", "Kalki"],
      answer: 1
    },
    {
      question: "Which avatar of Vishnu is a king and a skilled archer?",
      options: ["Krishna", "Rama", "Balarama", "Buddha"],
      answer: 1
    },
    {
      question: "Which avatar of Vishnu is a cowherd and a divine musician?",
      options: ["Krishna", "Vamana", "Narasimha", "Balarama"],
      answer: 0
    },
    {
      question: "Which avatar of Vishnu is the elder brother of Krishna?",
      options: ["Krishna", "Balarama", "Buddha", "Kalki"],
      answer: 1
    },
    {
      question: "Which avatar of Vishnu is associated with peace and non-violence?",
      options: ["Buddha", "Kalki", "Parashurama", "Kurma"],
      answer: 0
    },
    {
      question: "Which avatar of Vishnu is believed to appear at the end of the Kali Yuga?",
      options: ["Kalki", "Krishna", "Vamana", "Rama"],
      answer: 0
    },
    {
      question: "What is the name of the celestial chariot of the Sun God (Surya)?",
      options: ["Garuda", "Arka", "Nandi", "Pushpaka"],
      answer: 1
    },
    {
      question: "Who is the wife of Lord Shiva?",
      options: ["Parvati", "Lakshmi", "Durga", "Saraswati"],
      answer: 0
    },
    {
      question: "Which goddess is the embodiment of divine feminine power (Shakti)?",
      options: ["Durga", "Radha", "Sita", "Parvati"],
      answer: 0
    },
    {
      question: "Who is the daughter of Parvati and Shiva?",
      options: ["Manasa", "Riddhi", "Ashokasundari", "Jyestha"],
      answer: 2
    },
    {
      question: "Who is the son of Shiva and Parvati, known as the god of war?",
      options: ["Ayyappan", "Ganesh", "Hanuman", "Kartikeya (Skanda)"],
      answer: 3
    },
    {
      question: "What is the name of the sacred mountain abode of Lord Shiva?",
      options: ["Himalaya", "Meru", "Kailash", "Vindhya"],
      answer: 2
    },
    {
      question: "Which sacred tree is associated with Lord Vishnu?",
      options: ["Banyan (Vata)", "Tulsi (Holy Basil)", "Neem (Nimba)", "Peepal (Ashvattha)"],
      answer: 3
    },
    {
      question: "What is the name of the celestial elephant of Indra?",
      options: ["Nandi", "Pushpaka", "Garuda", "Airavata"],
      answer: 3
    },
    {
      question: "Which serpent is associated with Lord Vishnu?",
      options: ["Takshaka", "Vasuki", "Ananta", "Kaliya"],
      answer: 2
    },
    {
      question: "What is the name of the divine weapon of Lord Vishnu?",
      options: ["Pashupatastra", "Trishul", "Sudarsana Chakra", "Vajra"],
      answer: 2
    },
    {
      question: "Which demon was killed by Goddess Durga?",
      options: ["Meghnada", "Ravana", "Mahishasura", "Kumbhakarna"],
      answer: 2
    },
    {
      question: "Which sage is known for his contributions to the development of Yoga?",
      options: ["Kapila", "Patanjali", "Kanada", "Vyasa"],
      answer: 1
    },
    {
      question: "Which sage is associated with the Samkhya school of philosophy?",
      options: ["Jaimini", "Kapila", "Patanjali", "Gautama Buddha"],
      answer: 1
    },
    {
      question: "Which sage is credited with organizing the Vedas?",
      options: ["Narada", "Valmiki", "Vyasa", "Vishwamitra"],
      answer: 2
    },
    {
      question: "Which sage is known for his fiery temper and is said to have cursed King Nahusha?",
      options: ["Durvasa", "Agastya", "Vashistha", "Vishwamitra"],
      answer: 0
    },
    {
      question: "Which sage is considered one of the seven great sages (Saptarishi)?",
      options: ["Vashistha", "Bharadwaja", "Agastya", "Atri"],
      answer: 0
    },
    {
      question: "Which sage is known for his short stature but immense power?",
      options: ["Agastya", "Dadhichi", "Nachiketa", "Markandeya"],
      answer: 0
    },
    {
      question: "Which sage is associated with the story of King Bharata and the lion cub?",
      options: ["Bharata", "Rishi Kanva", "Shakuntala", "Dushyanta"],
      answer: 0
    },
    {
      question: "Which young boy defied Yama, the god of death, and obtained the secret of immortality?",
      options: ["Arjuna", "Prahlada", "Nachiketa", "Dhruva"],
      answer: 2
    },
    {
      question: "Which devotee of Vishnu is known for his unwavering faith and devotion?",
      options: ["Vibhishana", "Hanuman", "Dhruva", "Prahlada"],
      answer: 3
    },
    {
      question: "Which young prince gained the favor of Vishnu through his intense meditation?",
      options: ["Lava", "Kusha", "Dhruva", "Bharata"],
      answer: 2
    },
    {
      question: "Which celestial being is known as the divine musician and messenger of the gods?",
      options: ["Kinnara", "Narada", "Apsara", "Gandharva"],
      answer: 1
    },
    {
      question: "Which celestial dancers are known for their beauty and grace?",
      options: ["Rakshasas", "Yakshas", "Apsaras", "Gandharvas"],
      answer: 2
    },
    {
      question: "Which semi-divine beings are known for their love of nature and are often depicted as guardians of trees?",
      options: ["Kinnaras", "Nagas", "Yakshas", "Gandharvas"],
      answer: 2
    },
    {
      question: "Which serpent beings are often associated with water and fertility?",
      options: ["Rakshasas", "Nagas", "Pishachas", "Yakshas"],
      answer: 1
    },
    {
      question: "Which demonic beings are known for their cruelty and malevolence?",
      options: ["Pishachas", "Rakshasas", "Yakshas", "Gandharvas"],
      answer: 1
    },
    { 
      question: "Which flesh-eating demons are often associated with graveyards and cremation grounds?",
      options: ["Yakshas", "Rakshasas", "Pishachas", "Nagas"],
      answer: 2
    },
    {
      question: "What is the name of the divine weapon of Indra?",
      options: ["Trishul", "Vajra", "Pashupatastra", "Sudarsana Chakra"],
      answer: 1
    },
    {
      question: "What is the name of the trident of Lord Shiva?",
      options: ["Pinaka", "Vajra", "Trishul", "Sudarsana Chakra"],
      answer: 2
    },
    {
      question: "Which weapon was given to Arjuna by Indra?",
      options: ["Sharanga", "Vijaya", "Pinaka", "Gandiva"],
      answer: 3
    },
    {
      question: "Which divine weapon was used by Arjuna against Karna in the Mahabharata war?",
      options: ["Agneyastra", "Brahmastra", "Narayana Astra", "Pashupatastra"],
      answer: 1
    },
    {
      question: "Which weapon did Karna possess that could only be used once?",
      options: ["Vasavi Shakti", "Brahmastra", "Narayana Astra", "Nagastra"],
      answer: 0
    },
    {
      question: "Which king is known for his sacrifice and devotion to Dharma in the Mahabharata?",
      options: ["Nakula", "Yudhishthira", "Bhima", "Arjuna"],
      answer: 1
    },
    {
      question: "Which Pandava brother is known for his immense strength?",
      options: ["Arjuna", "Nakula", "Sahadeva", "Bhima"],
      answer: 3
    },
    {
      question: "Which Pandava brother is considered the greatest archer?",
      options: ["Arjuna", "Yudhishthira", "Bhima", "Sahadeva"],
      answer: 0
    },
    {
      question: "Who was the wife of the Pandavas?",
      options: ["Kunti", "Subhadra", "Draupadi", "Gandhari"],
      answer: 2
    },
    {
      question: "Who was the mother of the Pandavas?",
      options: ["Draupadi", "Kunti", "Gandhari", "Madri"],
      answer: 1
    },
    {
      question: "Who was the blind king of Hastinapura in the Mahabharata?",
      options: ["Vidura", "Bhishma", "Dhritarashtra", "Pandu"],
      answer: 2
    },
    {
      question: "Who was the father of the Pandavas and Dhritarashtra?",
      options: ["Shantanu", "Vichitravirya", "Pandu", "Dhritarashtra"],
      answer: 2
    },
    {
      question: "Who was the wise counselor and half-brother of Dhritarashtra and Pandu?",
      options: ["Drona", "Bhishma", "Vidura", "Kripa"],
      answer: 2
    },
    {
      question: "Who was the grand-uncle of the Pandavas and Kauravas, known for his vow of celibacy?",
      options: ["Kripa", "Bhishma", "Drona", "Ashwatthama"],
      answer: 1
    },
    {
      question: "Who was the guru of the Pandavas and Kauravas in archery and warfare?",
      options: ["Parashurama", "Drona", "Kripa", "Bhishma"],
      answer: 1
    },
    {
      question: "Who was the guru of the Pandavas and Kauravas in various subjects, including ethics and politics?",
      options: ["Kripa", "Vyasa", "Bhishma", "Drona"],
      answer: 0
    },
    {
      question: "Who was the son of Drona and a skilled warrior in the Mahabharata?",
      options: ["Ashwatthama", "Karna", "Arjuna", "Ekalavya"],
      answer: 0
    },
    {
      question: "Who was a skilled archer and a devoted student of Drona, despite being denied formal training?",
      options: ["Ekalavya", "Karna", "Abhimanyu", "Arjuna"],
      answer: 0
    },
    {
      question: "Who was the son of Arjuna and Subhadra, known for his bravery and skill in warfare?",
      options: ["Iravan", "Abhimanyu", "Babruvahana", "Ghatotkacha"],
      answer: 1
    },
    {
      question: "Who was the son of Bhima and Hidimbi, known for his strength and ferocity?",
      options: ["Iravan", "Ghatotkacha", "Abhimanyu", "Babruvahana"],
      answer: 1
    },
    {
      question: "Which character in the Mahabharata is known for his loyalty and devotion to his father, despite his father's questionable actions?",
      options: ["Vidura", "Vikarna", "Sanjaya", "Bhishma"],
      answer: 3
    },
    {
      question: "Who was the charioteer of Krishna during the Mahabharata war?",
      options: ["Yudhishthira", "Satyaki", "Daruka", "Arjuna"],
      answer: 2
    },
    {
      question: "Which character in the Mahabharata is known for his ability to see the past, present, and future?",
      options: ["Sanjaya", "Vyasa", "Bhishma", "Vidura"],
      answer: 0
    },
    {
      question: "Who was the queen of the Kuru kingdom and the mother of the Kauravas?",
      options: ["Kunti", "Subhadra", "Draupadi", "Gandhari"],
      answer: 3
    },
    {
      question: "Who was the wife of Dhritarashtra and the mother of the Kauravas?",
      options: ["Draupadi", "Madri", "Kunti", "Gandhari"],
      answer: 3
    },
    {
      question: "Who was the wife of Pandu and the mother of the Pandavas (except Yudhishthira)?",
      options: ["Madri", "Gandhari", "Kunti", "Draupadi"],
      answer: 2
    },
    {
      question: "Who was the second wife of Pandu and the mother of Nakula and Sahadeva?",
      options: ["Kunti", "Gandhari", "Madri", "Draupadi"],
      answer: 2
    },
    {
      question: "Which character in the Mahabharata is known for his wisdom and impartiality?",
      options: ["Kripa", "Vidura", "Drona", "Bhishma"],
      answer: 1
    },
    {
      question: "Which character in the Mahabharata is known for his unwavering loyalty and devotion to his king?",
      options: ["Drona", "Ashwatthama", "Kripa", "Bhishma"],
      answer: 3
    },
    {
      question: "Which character in the Mahabharata is known for his mastery of archery and warfare?",
      options: ["Arjuna", "Drona", "Ekalavya", "Karna"],
      answer: 1
    },
    {
      question: "Which character in the Mahabharata is known for his strength and his mace as his weapon?",
      options: ["Bhima", "Nakula", "Arjuna", "Yudhishthira"],
      answer: 0
    },
    {
      question: "Which character in the Mahabharata is known for his intelligence and his skill in strategy?",
      options: ["Sahadeva", "Yudhishthira", "Nakula", "Arjuna"],
      answer: 1
    },
    {
      question: "Which character in the Mahabharata is known for his handsome appearance and his skill in warfare?",
      options: ["Abhimanyu", "Arjuna", "Nakula", "Sahadeva"],
      answer: 1
    },
    {
      question: "Which character in the Mahabharata is known for his wisdom and his ability to understand complex situations?",
      options: ["Sahadeva", "Bhima", "Nakula", "Yudhishthira"],
      answer: 0
    },
    
    {
    question: "Which character in the Mahabharata is known for his generosity and his willingness to give up everything he has?",
    options: ["Karna", "Bhishma", "Drona", "Yudhishthira"],
    answer: 0
    },
    {
    question: "Which character in the Mahabharata is known for his courage and his determination?",
    options: ["Bhima", "Arjuna", "Abhimanyu", "Ghatotkacha"],
    answer: 2
    },
    {
    question: "Which character in the Mahabharata is known for his devotion to Krishna and his role as Krishna's charioteer?",
    options: ["Nakula", "Yudhishthira", "Arjuna", "Bhima"],
    answer: 2
    },
    {
    question: "Which character in the Mahabharata is known for his role in the Kurukshetra war and his leadership of the Kaurava army?",
    options: ["Bhishma", "Ashwatthama", "Karna", "Drona"],
    answer: 0
    },
    {
    question: "Which character in the Mahabharata is known for his role in the burning of the Lakshagriha (house of lac)?",
    options: ["Shakuni", "Karna", "Purochana", "Duryakhana"],
    answer: 2
    },
    {
    question: "Which character in the Mahabharata is known for his role in the dice game that led to the exile of the Pandavas?",
    options: ["Shakuni", "Karna", "Duryakhana", "Dushasana"],
    answer: 0
    },
    {
    question: "Which character in the Mahabharata is known for his role in the disrobing of Draupadi?",
    options: ["Karna", "Dushasana", "Shakuni", "Duryakhana"],
    answer: 1
    },
    {
    question: "Which character in the Mahabharata is known for his role in the killing of Abhimanyu?",
    options: ["Kripa", "Ashwatthama", "Jayadratha", "Drona"],
    answer: 2
    },
    {
    question: "Which character in the Mahabharata is known for his role in the killing of Ghatotkacha?",
    options: ["Ashwatthama", "Drona", "Karna", "Duryakhana"],
    answer: 2
    },
    {
    question: "Which character in the Mahabharata is known for his role in the killing of Shikhandi?",
    options: ["Bhishma", "Ashwatthama", "Kripa", "Drona"],
    answer: 0
    },
    {
    question: "Which character in the Mahabharata is known for his role in the killing of Drona?",
    options: ["Yudhishthira", "Bhima", "Nakula", "Arjuna"],
    answer: 3
    },
    {
    question: "Which character in the Mahabharata is known for his role in the killing of Karna?",
    options: ["Yudhishthira", "Arjuna", "Bhima", "Nakula"],
    answer: 1
    },
    {
    question: "Which character in the Mahabharata is known for his role in the killing of Duryakhana?",
    options: ["Sahadeva", "Arjuna", "Bhima", "Yudhishthira"],
    answer: 2
    },
    {
    question: "Which character in the Mahabharata is known for his role in the killing of Dushasana?",
    options: ["Bhima", "Nakula", "Arjuna", "Yudhishthira"],
    answer: 0
    },
    {
    question: "Which character in the Mahabharata is known for his role in the killing of Ashwatthama (partially)?",
    options: ["Yudhishthira", "Bhima", "Arjuna", "Draupadi"],
    answer: 1
    },
    {
    question: "Which character in the Mahabharata is known for his role in the final battle of the Kurukshetra war?",
    options: ["Sanjaya", "Ashwatthama", "Kripa", "Kritavarma"],
    answer: 1
    },
    {
    question: "Which character in the Mahabharata is known for his survival after the Kurukshetra war?",
    options: ["Kritavarma", "Kripa", "Ashwatthama", "Sanjaya"],
    answer: 1
    },
    {
    question: "Which character in the Mahabharata is known for his role as a messenger and narrator?",
    options: ["Bhishma", "Vidura", "Sanjaya", "Vyasa"],
    answer: 2
    },
    {
    question: "What is the name of the city where the Kurukshetra war took place?",
    options: ["Mathura", "Indraprastha", "Hastinapura", "Kurukshetra"],
    answer: 3
    },
    {
    question: "What is the name of the river that flows through Kurukshetra?",
    options: ["Saraswati", "Indus", "Yamuna", "Ganges"],
    answer: 0
    },
    {
    question: "What is the name of the battlefield where the Kurukshetra war was fought?",
    options: ["Panipat", "Dharmakshetra", "Kurukshetra", "Rann of Kutch"],
    answer: 1
    },
    {
    question: "How many days did the Kurukshetra war last?",
    options: ["10", "21", "18", "15"],
    answer: 2
    },
    {
    question: "How many akshauhinis of soldiers fought in the Kurukshetra war?",
    options: ["18", "11", "10", "24"],
    answer: 0
    },
    {
    question: "Which yuga (era) was the Mahabharata war fought in?",
    options: ["Satya Yuga", "Dwapara Yuga", "Kali Yuga", "Treta Yuga"],
    answer: 1
    },
    {
    question: "Which yuga (era) are we currently living in?",
    options: ["Treta Yuga", "Satya Yuga", "Kali Yuga", "Dwapara Yuga"],
    answer: 2
    },
    {
    question: "According to Hindu cosmology, how many yugas are there in a mahayuga?",
    options: ["3", "4", "2", "5"],
    answer: 1
    },
    {
    question: "What is the name of the cycle of four yugas?",
    options: ["Kalachakra", "Mahayuga", "Yugachakra", "Samsara"],
    answer: 1
    },
    {
    question: "What is the name of the period of time that comprises one thousand mahayugas?",
    options: ["Kalpa", "Mahayuga", "Manvantara", "Yuga"],
    answer: 0
    },
    {
    question: "In Hindu cosmology, how many manvantaras are there in a Kalpa?",
    options: ["21", "28", "14", "7"],
    answer: 2
    },
    {
    question: "What is the name of the current Manvantara?",
    options: ["Uttama Manvantara", "Vaivasvata Manvantara", "Tamasa Manvantara", "Swayambhuva Manvantara"],
    answer: 1
    },
    {
    question: "What is the name of the next Manvantara?",
    options: ["Daksa Manvantara", "Savarni Manvantara", "Indra Manvantara", "Brahma Manvantara"],
    answer: 1
    },
    {
    question: "What is the name of the first Manvantara?",
    options: ["Swayambhuva Manvantara", "Tamasa Manvantara", "Vaivasvata Manvantara", "Uttama Manvantara"],
    answer: 0
    },
    {
    question: "What is the name of the creator god in Hinduism?",
    options: ["Shiva", "Brahma", "Vishnu", "Indra"],
    answer: 1
    },
    {
    question: "Which god is responsible for the preservation and maintenance of the universe?",
    options: ["Shiva", "Vishnu", "Ganesh", "Brahma"],
    answer: 1
    },
    {
    question: "Which god is associated with destruction and transformation?",
    options: ["Shiva", "Kartikeya", "Vishnu", "Brahma"],
    answer: 0
    },
    {
    question: "Which god is known as the remover of obstacles and is worshipped at the beginning of any undertaking?",
    options: ["Kartikeya", "Rama", "Ganesh", "Hanuman"],
    answer: 2
    },
    {
    question: "Which god is known for his devotion to Rama and his strength?",
    options: ["Hanuman", "Ganesh", "Kartikeya", "Sugriva"],
    answer: 0
    },
    {
    question: "Which god is the commander of the divine forces and the son of Shiva and Parvati?",
    options: ["Hanuman", "Kartikeya", "Ganesh", "Ayyappan"],
    answer: 1
    },
    {
    question: "Which goddess is the consort of Vishnu and the goddess of wealth and prosperity?",
    options: ["Lakshmi", "Durga", "Saraswati", "Parvati"],
    answer: 0
    },
    {
    question: "Which goddess is the consort of Brahma and the goddess of knowledge and arts?",
    options: ["Saraswati", "Lakshmi", "Durga", "Parvati"],
    answer: 0
    },
    {
    question: "Which goddess is the consort of Shiva and the goddess of power and destruction?",
    options: ["Durga", "Parvati", "Lakshmi", "Saraswati"],
    answer: 1
    },
    {
    question: "Which goddess is a fierce form of Parvati and represents divine feminine power (Shakti)?",
    options: ["Radha", "Durga", "Parvati", "Sita"],
    answer: 1
    },
    {
    question: "Who is the wife of Rama?",
    options: ["Draupadi", "Sita", "Kaushalya", "Sumitra"],
    answer: 1
    },
    {
    question: "Who is the wife of Krishna?",
    options: ["Radha", "Satyabhama", "Rukmini", "Draupadi"],
    answer: 2
    },
    {
    question: "Who is the foster mother of Krishna?",
    options: ["Rohini", "Putana", "Yashoda", "Devaki"],
    answer: 2
    },
    {
    question: "Who is the biological mother of Krishna?",
    options: ["Yashoda", "Devaki", "Subhadra", "Rohini"],
    answer: 1
    },
    {
    question: "Who is the sister of Krishna and the wife of Arjuna?",
    options: ["Draupadi", "Chitrangada", "Ulupi", "Subhadra"],
    answer: 3
    },
    {
    question: "Who is the daughter of King Janaka and the wife of Rama?",
    options: ["Sita", "Mandavi", "Urmila", "Shrutakirti"],
    answer: 0
    }
    ],
    
cineworld:[
    {
      question: "Which Indian actress has won the most Filmfare Awards?",
      options: ["Rekha", "Sridevi", "Aishwarya Rai Bachchan", "Madhuri Dixit Nene"],
      answer: 2
    },
    {
      question: "Which Indian actor has won the most Filmfare Awards?",
      options: ["Raj Kapoor", "Shah Rukh Khan", "Amitabh Bachchan", "Dilip Kumar"],
      answer: 2
    },
    {
      question: "Which Indian film was the first to be nominated for the Academy Award for Best Foreign Language Film?",
      options: ["Lagaan", "Mother India", "Parinda", "Salaam Bombay!"],
      answer: 1
    },
    {
      question: "Which Indian actor has won the most National Film Awards for Best Actor?",
      options: ["Amitabh Bachchan", "Kamal Haasan", "Dilip Kumar", "Raj Kapoor"],
      answer: 0
    },
    {
      question: "Which Indian actress has won the most National Film Awards for Best Actress?",
      options: ["Rekha", "Sridevi", "Nargis Dutt", "Aparna Sen"],
      answer: 1
    },
    {
      question: "Which Indian film director is known for his realistic and socially relevant films?",
      options: ["Guru Dutt", "Bimal Roy", "Satyajit Ray", "Mrinal Sen"],
      answer: 2
    },
    {
      question: "Which Indian film director is known for his melodramatic films and iconic songs?",
      options: ["Mehboob Khan", "Guru Dutt", "Raj Kapoor", "Bimal Roy"],
      answer: 2
    },
    {
      question: "Which Indian film director is known for his neo-noir films and psychological thrillers?",
      options: ["Vishal Bhardwaj", "Sanjay Leela Bhansali", "Hrishikesh Mukherjee", "Anurag Kashyap"],
      answer: 3
    },
    {
      question: "Which Indian film director is known for his lavish historical dramas and musicals?",
      options: ["Sooraj Barjatya", "Karan Johar", "Ashutosh Gowariker", "Sanjay Leela Bhansali"],
      answer: 3
    },
    {
      question: "Which Indian film director is known for his romantic comedies and family dramas?",
      options: ["Sooraj Barjatya", "Karan Johar", "David Dhawan", "Rohit Shetty"],
      answer: 0
    },
    {
      question: "Which Indian film director is known for his action-packed blockbusters?",
      options: ["David Dhawan", "Karan Johar", "Sooraj Barjatya", "Rohit Shetty"],
      answer: 3
    },
    {
      question: "Which Indian film director is known for his comedy films and social satires?",
      options: ["Vishal Bhardwaj", "Sanjay Leela Bhansali", "Hrishikesh Mukherjee", "Anurag Kashyap"],
      answer: 2
    },
    {
      question: "Which Indian film director is known for his independent films and experimental cinema?",
      options: ["Ranbir Kapoor", "Aamir Khan", "Shahid Kapoor", "Ranveer Singh"],
      answer: 1
    },
    {
      question: "Which Indian actor has won the most Filmfare Awards for Best Supporting Actor?",
      options: ["Anupam Kher", "Pankaj Kapur", "Amol Palekar", "Nana Patekar"],
      answer: 0
    },
    {
      question: "Which Indian actress has won the most Filmfare Awards for Best Supporting Actress?",
      options: ["Supriya Pathak", "Jaya Bachchan", "Tabu", "Rani Mukerji"],
      answer: 1
    },
    {
      question: "Which Indian film music director has won the most Filmfare Awards?",
      options: ["Shankar-Jaikishan", "A.R. Rahman", "Laxmikant-Pyarelal", "R.D. Burman"],
      answer: 1
    },
    {
      question: "Which Indian playback singer has won the most Filmfare Awards (Male)?",
      options: ["Mohammed Rafi", "Udit Narayan", "Kishore Kumar", "Arijit Singh"],
      answer: 2
    },
    {
      question: "Which Indian playback singer has won the most Filmfare Awards (Female)?",
      options: ["Asha Bhosle", "Shreya Ghoshal", "Alka Yagnik", "Lata Mangeshkar"],
      answer: 0
    },
    {
      question: "Which Indian film lyricist has won the most Filmfare Awards?",
      options: ["Anand Bakshi", "Gulzar", "Sameer", "Javed Akhtar"],
      answer: 1
    },
    {
      question: "Which Indian film production company has produced the most Bollywood films?",
      options: ["T-Series", "Yash Raj Films", "Dharma Productions", "Red Chillies Entertainment"],
      answer: 1
    },
    {
      question: "Which Indian film studio is the oldest in India?",
      options: ["New Theatres Calcutta", "Ranjit Movietone", "Bombay Talkies", "Prabhat Film Company"],
      answer: 1
    },
    {
      question: "Which Indian film festival is considered the most prestigious in India?",
      options: ["International Film Festival of India (IFFI)", "Mumbai Film Festival", "Bengaluru International Film Festival", "Kolkata Film Festival"],
      answer: 0
    },
    {
      question: "Which Indian film magazine is the most popular in India?",
      options: ["Stardust", "Filmfare", "Screen", "Cine Blitz"],
      answer: 1
    },
    {
      question: "Which Indian film trade publication is the most widely read in India?",
      options: ["Film Information", "Box Office India", "Super Cinema", "Trade Guide"],
      answer: 3
    },
  
      {
      question: "Which Indian state is known as the home of Bollywood?",
      options: ["West Bengal", "Punjab", "Maharashtra", "Gujarat"],
      answer: 2
    },
    {
      question: "Which Indian city is known as the entertainment capital of India?",
      options: ["Chennai", "Delhi", "Mumbai", "Kolkata"],
      answer: 2
    },
    {
      question: "Which Indian film industry is the largest in the world in terms of the number of films produced annually?",
      options: ["Bollywood", "Mollywood", "Tollywood", "Kollywood"],
      answer: 0
    },
    {
      question: "Which Indian film industry is known for its Telugu language films?",
      options: ["Tollywood", "Sandalwood", "Kollywood", "Mollywood"],
      answer: 0
    },
    {
      question: "Which Indian film industry is known for its Tamil language films?",
      options: ["Mollywood", "Tollywood", "Kollywood", "Sandalwood"],
      answer: 2
    },
    {
      question: "Which Indian film industry is known for its Malayalam language films?",
      options: ["Kollywood", "Sandalwood", "Tollywood", "Mollywood"],
      answer: 3
    },
    {
      question: "Which Indian film industry is known for its Kannada language films?",
      options: ["Sandalwood", "Mollywood", "Kollywood", "Tollywood"],
      answer: 0
    },
    {
      question: "Which Indian film genre is known for its elaborate song and dance sequences?",
      options: ["Masala", "Parallel", "Documentary", "Art"],
      answer: 0
    },
    {
      question: "Which Indian film genre is known for its realistic and serious themes?",
      options: ["Masala", "Art", "Commercial", "Mythological"],
      answer: 1
    },
    {
      question: "Which Indian film genre is known for its experimental and unconventional storytelling?",
      options: ["Masala", "Parallel", "Commercial", "Art"],
      answer: 1
    },
    {
      question: "Which Indian film genre often deals with historical or mythological stories?",
      options: ["Mythological", "Masala", "Parallel", "Art"],
      answer: 0
    },
    {
      question: "Which Indian film award is considered the highest civilian honour in the field of cinema?",
      options: ["Filmfare Awards", "National Film Awards", "IIFA Awards", "Dadasaheb Phalke Award"],
      answer: 3
    },
    {
      question: "Which Indian film award is presented by the Government of India for excellence in cinema?",
      options: ["National Film Awards", "IIFA Awards", "Dadasaheb Phalke Award", "Filmfare Awards"],
      answer: 0
    },
    {
      question: "Which Indian film award is presented by The Times Group for excellence in Hindi cinema?",
      options: ["IIFA Awards", "Filmfare Awards", "Screen Awards", "Zee Cine Awards"],
      answer: 1
    },
    {
      question: "Which Indian film award is presented by the International Indian Film Academy?",
      options: ["IIFA Awards", "Filmfare Awards", "Zee Cine Awards", "Screen Awards"],
      answer: 0
    },
    {
      question: "Which Indian film award is presented by the Star Screen Awards?",
      options: ["Screen Awards", "IIFA Awards", "Filmfare Awards", "Zee Cine Awards"],
      answer: 0
    },
    {
      question: "Which Indian film award is presented by Zee Entertainment Enterprises?",
      options: ["Filmfare Awards", "Zee Cine Awards", "IIFA Awards", "Screen Awards"],
      answer: 1
    },
    {
      question: "Which Indian playback singer is known as the 'Tragedy King' of Indian cinema?",
      options: ["Hemant Kumar", "Kishore Kumar", "Mukesh", "Mohammed Rafi"],
      answer: 2
    },
    {
      question: "Which Indian playback singer is known as the 'King of Melody'?",
      options: ["Mohammed Rafi", "Kishore Kumar", "Manna Dey", "Talat Mahmood"],
      answer: 0
    },
    {
      question: "Which Indian playback singer is known for his versatile voice and yodeling?",
      options: ["Hemant Kumar", "Kishore Kumar", "Mukesh", "Mohammed Rafi"],
      answer: 1
    },
    {
      question: "Which Indian playback singer is known for his soulful voice and ghazals?",
      options: ["Mehdi Hassan", "Jagjit Singh", "Talat Mahmood", "Ghulam Ali"],
      answer: 1
    },
    {
      question: "Which Indian playback singer is known for her melodious voice and classical training?",
      options: ["Lata Mangeshkar", "Asha Bhosle", "Shreya Ghoshal", "Alka Yagnik"],
      answer: 0
    },
    {
      question: "Which Indian playback singer is known for her versatile voice and range?",
      options: ["Shreya Ghoshal", "Alka Yagnik", "Lata Mangeshkar", "Asha Bhosle"],
      answer: 3
    },
    {
      question: "Which Indian playback singer is known for her soulful voice and expressive singing?",
      options: ["Alka Yagnik", "Shreya Ghoshal", "Asha Bhosle", "Lata Mangeshkar"],
      answer: 1
    },
    {
      question: "Which Indian playback singer is known for her sweet and melodious voice?",
      options: ["Lata Mangeshkar", "Alka Yagnik", "Kavita Krishnamurthy", "Asha Bhosle"],
      answer: 1
    },
    {
      question: "Which Indian actor is known as the 'Tragedy King' of Indian cinema (acting)?",
      options: ["Raj Kapoor", "Dev Anand", "Dilip Kumar", "Amitabh Bachchan"],
      answer: 2
    },
    {
      question: "Which Indian actor is known as the 'Shahenshah' of Bollywood?",
      options: ["Amitabh Bachchan", "Shah Rukh Khan", "Salman Khan", "Aamir Khan"],
      answer: 0
    },
    {
      question: "Which Indian actor is known as the 'King Khan' of Bollywood?",
      options: ["Shah Rukh Khan", "Aamir Khan", "Salman Khan", "Hrithik Roshan"],
      answer: 0
    },
    {
      question: "Which Indian actor is known as the 'Perfectionist' of Bollywood?",
      options: ["Aamir Khan", "Salman Khan", "Shah Rukh Khan", "Akshay Kumar"],
      answer: 0
    },
    {
      question: "Which Indian actor is known as the 'Bhaijaan' of Bollywood?",
      options: ["Aamir Khan", "Salman Khan", "Shah Rukh Khan", "Akshay Kumar"],
      answer: 1
    },
  
      {
      question: "Which Indian film won the Best Foreign Language Film Oscar in 2009?",
      options: ["Slumdog Millionaire", "Lagaan", "Mother India", "Salaam Bombay!"],
      answer: 0
    },
    {
      question: "Who is known as the 'King Khan' of Bollywood?",
      options: ["Salman Khan", "Shah Rukh Khan", "Aamir Khan", "Hrithik Roshan"],
      answer: 1
    },
    {
      question: "Which Indian director is known for films like 'RRR' and 'Baahubali'?",
      options: ["S.S. Rajamouli", "Karan Johar", "Rohit Shetty", "Sanjay Leela Bhansali"],
      answer: 0
    },
    {
      question: "Who played the lead role in the film 'Queen' (2013)?",
      options: ["Alia Bhatt", "Deepika Padukone", "Kangana Ranaut", "Priyanka Chopra"],
      answer: 2
    },
    {
      question: "Which city is considered the heart of the Indian film industry (Bollywood)?",
      options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
      answer: 0
    },
    {
      question: "What is the name of the prestigious Indian film award ceremony?",
      options: ["IIFA Awards", "Filmfare Awards", "National Film Awards", "Screen Awards"],
      answer: 1
    },
    {
      question: "Which legendary actor is known as the 'Tragedy King' of Bollywood?",
      options: ["Amitabh Bachchan", "Dev Anand", "Dilip Kumar", "Raj Kapoor"],
      answer: 2
    },
    {
      question: "Which film marked the debut of Amitabh Bachchan in Bollywood?",
      options: ["Zanjeer", "Deewaar", "Sholay", "Saat Hindustani"],
      answer: 3
    },
    {
      question: "Who is the music director duo known for their work in films like 'Dilwale Dulhania Le Jayenge'?",
      options: ["Laxmikant-Pyarelal", "R.D. Burman", "A.R. Rahman", "Jatin-Lalit"],
      answer: 3
    },
    {
      question: "Which actress is known as the 'Dream Girl' of Bollywood?",
      options: ["Rekha", "Hema Malini", "Madhuri Dixit", "Sridevi"],
      answer: 1
    },
    {
      question: "Which Gujarati film won the Best Feature Film award at the National Film Awards in 2021?",
      options: ["Chhello Divas", "Wrong Side Raju", "Hu Chalo", "Dhunki"],
      answer: 0
    },
    {
      question: "Who is known as the 'Comedy King' of Gujarati cinema?",
      options: ["Arvind Trivedi", "Naresh Kanodia", "Upendra Trivedi", "Hemant Vyas"],
      answer: 0
    },
    {
      question: "Which Gujarati film was the highest-grossing film of all time (as of my last training data)?",
      options: ["Humari Adhuri Kahani", "Bey Yaar", "Dhokha", "Chellar"],
      answer: 1
    },
    {
      question: "Which Gujarati actress has won the most Gujarati Filmfare Awards for Best Actress?",
      options: ["Manisha Koirala", "Avani Raval", "Mona Thiba", "Malavika Nayak"],
      answer: 1
    },
    {
      question: "Which Gujarati film was the first to be nominated for the Best Foreign Language Film Oscar?",
      options: ["The Good Road", "The Lunchbox", "The Namesake", "The Darjeeling Limited"],
      answer: 0
    },
    {
      question: "Which Gujarati film is a remake of the Bollywood film 'Golmaal'?",
      options: ["Golmaal Love", "Golmaal Again", "Golmaal Returns", "Golmaal 3"],
      answer: 0
    },
    {
      question: "Which Gujarati film is a comedy about a group of friends who go on a road trip?",
      options: ["Dhokha", "Chellar", "Bey Yaar", "Humari Adhuri Kahani"],
      answer: 2
    },
    {
      question: "Which Gujarati film is a musical drama about the life of a singer?",
      options: ["Gulab", "Aavjo Aavjo", "Aa Toh Prem Chhe", "Hoon Tari Heer"],
      answer: 1
    },
    {
      question: "Which Gujarati film is a romantic comedy about a couple who get married through an arranged marriage?",
      options: ["Premji: Rise of a Warrior", "Hu Chu Tu", "Love Ni Bhavai", "Chhello Divas"],
      answer: 0
    },
    {
      question: "Which Gujarati film is a thriller about a serial killer?",
      options: ["Reva", "Aa Toh Prem Chhe", "Hoon Tari Heer", "Wrong Side Raju"],
      answer: 0
    },
  
  {
      question: "Which Indian film won the Best Foreign Language Film Oscar in 2009?",
      options: ["Slumdog Millionaire", "Mother India", "Salaam Bombay!", "Lagaan"],
      answer: 0
    },
    {
      question: "Who is known as the 'King Khan' of Bollywood?",
      options: ["Shah Rukh Khan", "Hrithik Roshan", "Aamir Khan", "Salman Khan"],
      answer: 0
    },
    {
      question: "Which Indian director is known for films like 'RRR' and 'Baahubali'?",
      options: ["S.S. Rajamouli", "Rohit Shetty", "Karan Johar", "Sanjay Leela Bhansali"],
      answer: 0
    },
    {
      question: "Who played the lead role in the film 'Queen' (2013)?",
      options: ["Alia Bhatt", "Kangana Ranaut", "Priyanka Chopra", "Deepika Padukone"],
      answer: 1
    },
    {
      question: "Which city is considered the heart of the Indian film industry (Bollywood)?",
      options: ["Kolkata", "Mumbai", "Delhi", "Chennai"],
      answer: 1
    },
    {
      question: "What is the name of the prestigious Indian film award ceremony?",
      options: ["Screen Awards", "National Film Awards", "IIFA Awards", "Filmfare Awards"],
      answer: 3
    },
    {
      question: "Which legendary actor is known as the 'Tragedy King' of Bollywood?",
      options: ["Raj Kapoor", "Dev Anand", "Dilip Kumar", "Amitabh Bachchan"],
      answer: 2
    },
    {
      question: "Which film marked the debut of Amitabh Bachchan in Bollywood?",
      options: ["Deewaar", "Saat Hindustani", "Zanjeer", "Sholay"],
      answer: 1
    },
    {
      question: "Who is the music director duo known for their work in films like 'Dilwale Dulhania Le Jayenge'?",
      options: ["Jatin-Lalit", "A.R. Rahman", "R.D. Burman", "Laxmikant-Pyarelal"],
      answer: 0
    },
    {
      question: "Which actress is known as the 'Dream Girl' of Bollywood?",
      options: ["Madhuri Dixit", "Hema Malini", "Rekha", "Sridevi"],
      answer: 1
    },
    {
      question: "Which film, starring Rajesh Khanna, is known for its romantic songs and tragic ending?",
      options: ["Anand", "Aradhana", "Kati Patang", "Amar Prem"],
      answer: 0
    },
    {
      question: "Which actress is known as the 'Dancing Queen' of Bollywood?",
      options: ["Rekha", "Sridevi", "Hema Malini", "Madhuri Dixit"],
      answer: 3
    },
    {
      question: "Which director is known for his experimental and offbeat films?",
      options: ["Vishal Bhardwaj", "Anurag Kashyap", "Dibakar Banerjee", "Sudhir Mishra"],
      answer: 1
    },
    {
      question: "Which film, starring Salman Khan, is known for its action sequences and family drama?",
      options: ["Sultan", "Dabangg", "Ek Tha Tiger", "Wanted"],
      answer: 1
    },
    {
      question: "Which playback singer is known for his versatile voice and has sung in multiple languages?",
      options: ["Mukesh", "Manna Dey", "Kishore Kumar", "Mohammed Rafi"],
      answer: 2
    },
    {
      question: "Which film, directed by Mani Ratnam, is a political thriller set against the backdrop of Tamil Nadu?",
      options: ["Roja", "Dil Se..", "Yuva", "Bombay"],
      answer: 0
    },
    {
      question: "Which actress made her Bollywood debut with the film 'Student of the Year'?",
      options: ["Alia Bhatt", "Shraddha Kapoor", "Kriti Sanon", "Parineeti Chopra"],
      answer: 0
    },
    {
      question: "Which film, starring Aamir Khan, is a sports drama based on wrestling?",
      options: ["Lagaan", "Dangal", "Sultan", "Chak De! India"],
      answer: 1
    },
    {
      question: "Which music director duo composed the music for the film 'Kal Ho Naa Ho'?",
      options: ["Jatin-Lalit", "Salim-Sulaiman", "Shankar-Ehsaan-Loy", "Vishal-Shekhar"],
      answer: 2
    },
    {
      question: "Which actress is known for her expressive eyes and has starred in several critically acclaimed films?",
      options: ["Vidya Balan", "Tabu", "Kangana Ranaut", "Konkona Sen Sharma"],
      answer: 1
    },
    {
      question: "Which film, directed by Rakeysh Omprakash Mehra, is a patriotic drama about freedom fighters?",
      options: ["Lakshya", "Rang De Basanti", "Delhi-6", "Bhaag Milkha Bhaag"],
      answer: 1
    },
    {
      question: "Which actor, known for his comic timing, has starred in several popular comedies?",
      options: ["Paresh Rawal", "Rajpal Yadav", "Johnny Lever", "Govinda"],
      answer: 3
    },
    {
      question: "Which film, starring Shah Rukh Khan and Kajol, is considered a classic romantic drama?",
      options: ["Kabhi Khushi Kabhie Gham", "Dilwale Dulhania Le Jayenge", "My Name Is Khan", "Kuch Kuch Hota Hai"],
      answer: 1
    },
    {
      question: "Which film, starring Amitabh Bachchan, is a crime-action film known for its intense dialogues and storyline?",
      options: ["Agneepath", "Sholay", "Don", "Deewaar"],
      answer: 3
    },
    {
      question: "Which actress is known for her natural acting style and has starred in several critically acclaimed films?",
      options: ["Shabana Azmi", "Smita Patil", "Nandita Das", "Deepti Naval"],
      answer: 1
    },
    {
      question: "Which film, directed by Vishal Bhardwaj, is based on William Shakespeare's tragedy 'Hamlet'?",
      options: ["Omkara", "Haider", "Matru Ki Bijlee Ka Mandola", "7 Khoon Maaf"],
      answer: 1
    },
    {
      question: "Who is known as the 'King Khan' of Bollywood?",
      options: ["Salman Khan", "Hrithik Roshan", "Aamir Khan", "Shah Rukh Khan"],
      answer: 3
    },
    {
      question: "Which film marked the debut of Amitabh Bachchan as an actor?",
      options: ["Saat Hindustani", "Sholay", "Zanjeer", "Anand"],
      answer: 0
    },
    {
      question: "Who directed the film 'RRR'?",
      options: ["Rajkumar Hirani", "Rohit Shetty", "S.S. Rajamouli", "Karan Johar"],
      answer: 2
    },
    {
      question: "Which actress is known as the 'Tragedy Queen' of Indian cinema?",
      options: ["Meena Kumari", "Waheeda Rehman", "Nargis Dutt", "Madhubala"],
      answer: 0
    },
    {
      question: "Which film won the Academy Award for Best Foreign Language Film in 1992?",
      options: ["Lagaan", "Salaam Bombay!", "Devdas", "Rang De Basanti"],
      answer: 1
    },
    {
      question: "Which music director is known for his soulful melodies and classical influence?",
      options: ["A.R. Rahman", "Bappi Lahiri", "Laxmikant-Pyarelal", "R.D. Burman"],
      answer: 0
    },
    {
      question: "What is the name of the prestigious Indian film award presented annually?",
      options: ["National Film Awards", "Filmfare Awards", "Screen Awards", "IIFA Awards"],
      answer: 0
    },
    {
      question: "Which city is considered the hub of Bollywood?",
      options: ["Chennai", "Mumbai", "Delhi", "Kolkata"],
      answer: 1
    },
    {
      question: "Which iconic film starred Dilip Kumar and Madhubala?",
      options: ["Pyaasa", "Mughal-e-Azam", "Guide", "Mother India"],
      answer: 1
    },
    {
      question: "Which popular South Indian film industry is known for its action-packed movies?",
      options: ["Sandalwood", "Mollywood", "Tollywood", "Kollywood"],
      answer: 2
    },
    {
      question: "Which actor is known as the 'Angry Young Man' of Bollywood?",
      options: ["Shatrughan Sinha", "Vinod Khanna", "Dharmendra", "Amitabh Bachchan"],
      answer: 3
    },
    {
      question: "Which film launched the career of Hrithik Roshan?",
      options: ["Koi... Mil Gaya", "Krishh", "Dhoom 2", "Kaho Naa... Pyaar Hai"],
      answer: 3
    },
    {
      question: "Who is considered the 'Godfather of Indian Cinema'?",
      options: ["Guru Dutt", "Bimal Roy", "Raj Kapoor", "Dadasaheb Phalke"],
      answer: 3
    },
  {
      question: "Which film is considered a cult classic and is known for its dialogues and music?",
      options: ["Hera Pheri", "Jaane Bhi Do Yaaro", "Gol Maal", "Andaz Apna Apna"],
      answer: 3
    },
    {
      question: "Which director is known for his realistic and socially relevant films?",
      options: ["Satyajit Ray", "Govind Nihalani", "Shyam Benegal", "Mrinal Sen"],
      answer: 0
    },
    {
      question: "Which actress made her Bollywood debut with the film 'Om Shanti Om'?",
      options: ["Kareena Kapoor Khan", "Anushka Sharma", "Priyanka Chopra", "Deepika Padukone"],
      answer: 3
    },
    {
      question: "Which film, starring Shah Rukh Khan, is known for its iconic train sequence?",
      options: ["Veer-Zaara", "Dilwale Dulhania Le Jayenge", "Chennai Express", "Kuch Kuch Hota Hai"],
      answer: 1
    },
    {
      question: "Who is the playback singer known as the 'Melody Queen' of India?",
      options: ["Shreya Ghoshal", "Lata Mangeshkar", "Asha Bhosle", "Alka Yagnik"],
      answer: 1
    },
    {
      question: "Which film, directed by Sanjay Leela Bhansali, is based on the epic poem 'Padmaavat'?",
      options: ["Goliyon Ki Raasleela Ram-Leela", "Padmaavat", "Bajirao Mastani", "Devdas"],
      answer: 1
    },
    {
      question: "Which actor played the role of 'Gabbar Singh' in the film 'Sholay'?",
      options: ["Dharmendra", "Amjad Khan", "Sanjeev Kumar", "Amitabh Bachchan"],
      answer: 1
    },
    {
      question: "Which film won the National Film Award for Best Feature Film in 2022?",
      options: ["Tanhaji: The Unsung Warrior", "Soorarai Pottru", "The Kashmir Files", "Sardar Udham"],
      answer: 1
    },
    {
      question: "Which music director duo composed the music for the film 'Dil Chahta Hai'?",
      options: ["Vishal-Shekhar", "Salim-Sulaiman", "Shankar-Ehsaan-Loy", "Jatin-Lalit"],
      answer: 2
    },
    {
      question: "Which actress is known for her versatile performances and has starred in both Bollywood and Hollywood films?",
      options: ["Aishwarya Rai Bachchan", "Priyanka Chopra", "Jacqueline Fernandez", "Deepika Padukone"],
      answer: 1
    },
    {
      question: "Which film marked the directorial debut of Aamir Khan?",
      options: ["Taare Zameen Par", "3 Idiots", "Lagaan", "Dangal"],
      answer: 0
    },
    {
      question: "Which legendary actor is known as the 'Tragedy King' of Indian cinema?",
      options: ["Raj Kapoor", "Dilip Kumar", "Guru Dutt", "Dev Anand"],
      answer: 1
    },
    {
      question: "Which popular dance form is often featured in Bollywood films?",
      options: ["Bollywood dance", "Kathak", "Bharatanatyam", "Kuchipudi"],
      answer: 0
    },
    {
      question: "Which director is known for his romantic and family dramas?",
      options: ["Rajkumar Hirani", "Sooraj Barjatya", "Karan Johar", "Aditya Chopra"],
      answer: 2
    },
    {
      question: "Which film, starring Amitabh Bachchan and Jaya Bachchan, is considered a classic?",
      options: ["Kabhi Kabhie", "Deewaar", "Sholay", "Trishul"],
      answer: 0
    },
    {
      question: "Which film is known for its dialogues 'Kitne aadmi the?' and 'Gabbar Singh'?",
      options: ["Sholay", "Muqaddar Ka Sikandar", "Mr. India", "Don"],
      answer: 0
    },
    {
      question: "Which actress is known as the 'Dream Girl' of Bollywood?",
      options: ["Rekha", "Sridevi", "Madhuri Dixit", "Hema Malini"],
      answer: 3
    }
  ]
  
             
};

let score = 0;

function startQuiz(category) {
    // If no category is provided, choose one randomly
    if (!category) {
      const categories = Object.keys(categoryQuestions);
      category = categories[Math.floor(Math.random() * categories.length)];
    }
    // Hide all other sections
    document.getElementById('footer').style.display = 'none';
    document.getElementById('navbar').style.display = 'none';
    document.getElementById('hero').style.display = 'none';
    document.getElementById('start-quiz').style.display = 'none';
    document.getElementById('featured').style.display = 'none';
    document.getElementById('categories').style.display = 'none';
    document.getElementById('quizPage').style.display = 'block';
    
    currentCategory = category;
    if (!categoryQuestions[category]) {
      console.error(`No questions for category: ${category}`);
      return;
    }
    // Shuffle and pick up to 30 questions
    questions = shuffleArray([...categoryQuestions[category]]);
    currentQuestion = 0;
    timeLeft = 30;
    selectedOption = null;
    score = 0;
    loadQuestion();
    startTimer();
  }
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    // Return at most 30 questions
    return array.slice(0, 30);
  }
  
  //
  // LOAD AND DISPLAY QUESTIONS
  //
  function loadQuestion() {
    if (!questions[currentQuestion]) {
      console.error("No question available at index:", currentQuestion);
      return;
    }
    const questionObj = questions[currentQuestion];
    document.getElementById('question').textContent = questionObj.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
  
    // Hide the submit button for the new question
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.style.display = 'none';
    submitBtn.disabled = true;
  
    questionObj.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.className = 'option-btn';
      button.textContent = option;
      button.onclick = () => selectOption(index);
      optionsContainer.appendChild(button);
    });
  }
  
  function selectOption(index) {
    selectedOption = index;
    // Enable and show the submit button when an option is clicked
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = false;
    submitBtn.style.display = 'block';
  
    // Reset background for all option buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
      btn.style.background = 'rgba(255, 255, 255, 0.05)';
    });
    // Highlight selected option
    document.querySelectorAll('.option-btn')[index].style.background = '#7091e6';
  }
  
  //
  // TIMER & ANSWER CHECK
  //
  function startTimer() {
    if (timerId) clearInterval(timerId);
    timerId = setInterval(() => {
      timeLeft--;
      document.getElementById('timer').textContent = `${timeLeft}s`;
      if (timeLeft <= 0) {
        checkAnswer(true);
      }
    }, 1000);
  }
  
  function checkAnswer(timeout = false) {
    clearInterval(timerId);
    const correctAnswer = questions[currentQuestion].answer;
    const dialogBox = document.getElementById('dialogBox');
  
    if (selectedOption === correctAnswer && !timeout) {
      dialogBox.classList.add('dialog-correct');
      dialogBox.classList.remove('dialog-incorrect');
      document.getElementById('dialogTitle').textContent = 'Correct Answer!';
      document.getElementById('dialogMessage').textContent = 'Well done!';
      score++;
    } else {
      dialogBox.classList.add('dialog-incorrect');
      dialogBox.classList.remove('dialog-correct');
      document.getElementById('dialogTitle').textContent = timeout ? 'Time Up!' : 'Incorrect Answer!';
      document.getElementById('dialogMessage').textContent = timeout
        ? 'Time has run out!'
        : `Correct answer: ${questions[currentQuestion].options[correctAnswer]}`;
    }
    document.getElementById('dialogOverlay').style.display = 'flex';
  }
  
  function nextQuestion() {
    closeDialog();
    currentQuestion++;
    if (currentQuestion < questions.length) {
      timeLeft = 30;
      selectedOption = null;
      document.getElementById('submitBtn').disabled = true;
      loadQuestion();
      startTimer();
    } else {
      endQuiz();
    }
  }
  
  function closeDialog() {
    document.getElementById('dialogOverlay').style.display = 'none';
    document.getElementById('dialogBox').className = 'dialog-box';
  }
  
  //
  // FINAL SCORE DIALOG & RETURN TO CATEGORIES
  //
  function endQuiz() {
    clearInterval(timerId);
    const dialogBox = document.getElementById('dialogBox');
    dialogBox.classList.remove('dialog-correct', 'dialog-incorrect');
  
    document.getElementById('dialogTitle').textContent = 'Quiz Completed!';
    document.getElementById('dialogMessage').textContent = `You answered ${score} out of ${questions.length} questions correctly.`;
  
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.textContent = 'Return to Categories';
    nextBtn.onclick = returnToCategories;
  
    document.getElementById('dialogOverlay').style.display = 'flex';
  }
  
  function returnToCategories() {
    document.getElementById('dialogOverlay').style.display = 'none';
    document.getElementById('quizPage').style.display = 'none';
    document.getElementById('categories').style.display = 'block';
  
    // Reset "Next Question" button for future quizzes
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.textContent = 'Next Question';
    nextBtn.onclick = nextQuestion;
  }
  function goBack() {
    clearInterval(timerId);
    document.getElementById('dialogOverlay').style.display = 'none';
    document.getElementById('quizPage').style.display = 'none';
    // Restore home page sections
    document.getElementById('navbar').style.display = 'block';
    document.getElementById('hero').style.display = 'block';
    document.getElementById('start-quiz').style.display = 'block';
    document.getElementById('featured').style.display = 'block';
    document.getElementById('categories').style.display = 'block';
  }