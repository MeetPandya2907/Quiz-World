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
            {
                question: "Which sport involves using a bow and arrow?",
                options: ["Archery", "Fencing", "Javelin Throw", "Discus Throw"],
                answer: 0
            },
            {
                question: "What is the term for a tied game in baseball?",
                options: ["Tie", "Draw", "No Result", "Inconclusive"],
                answer: 0
            },
            {
                question: "Which sport is played on ice with curved sticks and a puck?",
                options: ["Ice Hockey", "Curling", "Figure Skating", "Speed Skating"],
                answer: 0
            },
            {
                question: "What is the name of the professional golf tour in the United States?",
                options: ["PGA Tour", "European Tour", "LPGA Tour", "Champions Tour"],
                answer: 0
            },
            {
                question: "Which sport involves jumping from a height into a pool of water?",
                options: ["Diving", "Swimming", "Water Polo", "Synchronized Swimming"],
                answer: 0
            },
            {
                question: "What is the name of the sport that combines running, swimming, and cycling?",
                options: ["Triathlon", "Biathlon", "Duathlon", "Aquathlon"],
                answer: 0
            },
            {
                question: "What is the term for a strike in bowling?",
                options: ["Turkey", "Spare", "Strike", "Double"],
                answer: 2
            },
            {
                question: "Which sport is played with bats and a ball and involves running between wickets?",
                options: ["Cricket", "Baseball", "Softball", "Rounders"],
                answer: 0
            },
            {
                question: "What is the name of the traditional Japanese wrestling form?",
                options: ["Sumo", "Judo", "Karate", "Aikido"],
                answer: 0
            },
            {
                question: "In what sport do athletes use foils, épées, and sabers?",
                options: ["Fencing", "Archery", "Boxing", "Kendo"],
                answer: 0
            },
            {
                question: "Which sport involves paddling a canoe or kayak?",
                options: ["Canoeing/Kayaking", "Rowing", "Sailing", "Rafting"],
                answer: 0
            },
            {
                question: "What is the name of the sport played with a small ball and a club on a field with holes?",
                options: ["Golf", "Croquet", "Polo", "Hockey"],
                answer: 0
            },
            {
                question: "What is the term for a score of zero in cricket?",
                options: ["Duck", "Dot ball", "Maiden over", "Wicket"],
                answer: 0
            },
            {
                question: "Which sport involves performing complex routines on bars, beams, and the floor?",
                options: ["Gymnastics", "Acrobatics", "Calisthenics", "Parkour"],
                answer: 0
            },
            {
                question: "What is the name of the sport that combines skiing and shooting?",
                options: ["Biathlon", "Ski Jumping", "Cross-Country Skiing", "Alpine Skiing"],
                answer: 0
            },
            {
                question: "Which sport involves riding horses and hitting a ball through goals?",
                options: ["Polo", "Equestrian", "Horse Racing", "Show Jumping"],
                answer: 0
            },
            {
                question: "What is the term for a serve that an opponent cannot return in tennis?",
                options: ["Ace", "Fault", "Let", "Double Fault"],
                answer: 0
            },
            {
                question: "Which sport involves catching waves on a stand-up paddleboard?",
                options: ["Stand-Up Paddleboarding (SUP) Surfing", "Surfing", "Windsurfing", "Kitesurfing"],
                answer: 0
            },
            {
                question: "What is the name of the martial art that focuses on throws and grappling?",
                options: ["Judo", "Karate", "Taekwondo", "Aikido"],
                answer: 0
            },
            {
                question: "Which sport involves racing small sailboats?",
                options: ["Sailing", "Windsurfing", "Kayaking", "Canoeing"],
                answer: 0
            },
            {
                question: "What is the name of the sport played on a court with a net and involves hitting a ball with a racket, but the ball is hollow and feathered?",
                options: ["Badminton", "Tennis", "Squash", "Racquetball"],
                answer: 0
            },
            {
                question: "Which sport involves hitting a shuttlecock back and forth over a net?",
                options: ["Badminton", "Tennis", "Table Tennis", "Squash"],
                answer: 0
            },
            {
                question: "What is the term for a shot in tennis that lands on the line?",
                options: ["In", "Out", "Fault", "Let"],
                answer: 0
            },
            {
                question: "Which sport uses a small, hard ball and clubs to hit it into a series of holes on a course?",
                options: ["Golf", "Croquet", "Polo", "Miniature Golf"],
                answer: 0
            },
            {
                question: "What is the name of the sport that involves running, jumping, and throwing?",
                options: ["Athletics (Track and Field)", "Gymnastics", "Triathlon", "Decathlon"],
                answer: 0
            },
            {
                question: "What is the name of the event where athletes compete in ten different track and field events?",
                options: ["Decathlon", "Heptathlon", "Pentathlon", "Triathlon"],
                answer: 0
            },
            {
                question: "Which sport involves skiing down a slope as fast as possible?",
                options: ["Alpine Skiing", "Cross-Country Skiing", "Ski Jumping", "Freestyle Skiing"],
                answer: 0
            },
                {
                    question: "Which sport involves skiing down a slope as fast as possible?",
                    options: ["Alpine Skiing", "Cross-Country Skiing", "Ski Jumping", "Freestyle Skiing"],
                    answer: 0
                },
                {
                    question: "Which sport involves jumping from a ramp on skis?",
                    options: ["Ski Jumping", "Alpine Skiing", "Cross-Country Skiing", "Freestyle Skiing"],
                    answer: 0
                },
                {
                    question: "What is the name of the sport played in a pool with two teams trying to score by throwing a ball into the other team's net?",
                    options: ["Water Polo", "Swimming", "Diving", "Synchronized Swimming"],
                    answer: 0
                },
                {
                    question: "Which sport involves performing synchronized movements in the water?",
                    options: ["Synchronized Swimming", "Diving", "Water Polo", "Swimming"],
                    answer: 0
                },
                {
                    question: "What is the term for a race between two boats?",
                    options: ["Regatta", "Derby", "Grand Prix", "Classic"],
                    answer: 0
                },
                {
                    question: "Which sport uses a board with wheels and involves performing tricks?",
                    options: ["Skateboarding", "Rollerblading", "BMX", "Scootering"],
                    answer: 0
                },
                {
                    question: "What is the name of the sport that involves riding a bicycle on a track with banked turns?",
                    options: ["Track Cycling", "Road Cycling", "Mountain Biking", "BMX"],
                    answer: 0
                },
                {
                    question: "Which sport involves racing motorcycles?",
                    options: ["Motorcycle Racing (MotoGP, Motocross, etc.)", "Car Racing", "Karting", "Speedway"],
                    answer: 0
                },
                {
                    question: "What is the name of the sport that involves racing cars?",
                    options: ["Car Racing (Formula 1, NASCAR, etc.)", "Motorcycle Racing", "Karting", "Rallying"],
                    answer: 0
                },
                {
                    question: "Which sport involves racing small, open-wheel cars?",
                    options: ["Karting", "Formula 1", "IndyCar", "Stock Car Racing"],
                    answer: 0
                },
                {
                    question: "What is the term for a competition where athletes perform various weightlifting exercises?",
                    options: ["Weightlifting", "Powerlifting", "Bodybuilding", "CrossFit"],
                    answer: 0
                },
                {
                    question: "Which sport involves lifting the heaviest weight possible in three different lifts?",
                    options: ["Powerlifting", "Weightlifting", "Bodybuilding", "Strongman"],
                    answer: 0
                },
                {
                    question: "What is the name of the sport that focuses on building muscle mass and definition?",
                    options: ["Bodybuilding", "Weightlifting", "Powerlifting", "Fitness"],
                    answer: 0
                },
                {
                    question: "Which sport involves competing in events that test strength and endurance?",
                    options: ["Strongman", "Powerlifting", "Weightlifting", "CrossFit"],
                    answer: 0
                },
                {
                    question: "What is the term for a sport that combines elements of weightlifting, gymnastics, and metabolic conditioning?",
                    options: ["CrossFit", "Functional Fitness", "High-Intensity Interval Training (HIIT)", "Circuit Training"],
                    answer: 0
                },
                {
                    question: "Which sport involves running long distances over varied terrain?",
                    options: ["Trail Running", "Road Running", "Cross-Country Running", "Marathon Running"],
                    answer: 0
                },
                {
                    question: "What is the name of the sport that involves navigating through challenging terrain using maps and compasses?",
                    options: ["Orienteering", "Hiking", "Trekking", "Mountaineering"],
                    answer: 0
                },
                {
                    question: "Which sport involves climbing artificial walls?",
                    options: ["Rock Climbing (Indoor/Wall Climbing)", "Mountaineering", "Bouldering", "Free Solo Climbing"],
                    answer: 0
                },
                {
                    question: "What is the term for climbing rocks without ropes or safety equipment?",
                    options: ["Free Solo Climbing", "Rock Climbing", "Bouldering", "Mountaineering"],
                    answer: 0
                },
                {
                    question: "Which sport involves riding waves on a shortboard?",
                    options: ["Shortboard Surfing", "Longboard Surfing", "Bodyboarding", "Kitesurfing"],
                    answer: 0
                },
                {
                    question: "What is the name of the sport that involves riding waves on a longboard?",
                    options: ["Longboard Surfing", "Shortboard Surfing", "Bodyboarding", "Stand-Up Paddleboarding"],
                    answer: 0
                },
                {
                    question: "Which sport involves riding waves on a board while lying down?",
                    options: ["Bodyboarding", "Surfing", "Stand-Up Paddleboarding", "Skimboarding"],
                    answer: 0
                },
                {
                    question: "What is the name of the sport that involves skimming across shallow water on a board?",
                    options: ["Skimboarding", "Surfing", "Bodyboarding", "Wakeboarding"],
                    answer: 0
                },
                {
                    question: "Which sport involves riding a board behind a boat and performing tricks?",
                    options: ["Wakeboarding", "Surfing", "Skimboarding", "Kneeboarding"],
                    answer: 0
                },
                {
                    question: "What is the name of the sport that involves riding a board on snow?",
                    options: ["Snowboarding", "Skiing", "Sledding", "Snowshoeing"],
                    answer: 0
                },
                {
                    question: "Which sport involves skiing on snow?",
                    options: ["Skiing", "Snowboarding", "Sledding", "Snowshoeing"],
                    answer: 0
                },
                {
                    question: "What is the term for racing sled dogs?",
                    options: ["Dog Sledding (or Mushing)", "Sledding", "Dog Sled Racing", "Canine Sledding"],
                    answer: 0
                },
                {
                    question: "Which sport involves walking on snow with special footwear?",
                    options: ["Snowshoeing", "Skiing", "Snowboarding", "Sledding"],
                    answer: 0
                },
                {
                    question: "What is the name of the sport that involves jumping from a high place with a parachute?",
                    options: ["Skydiving (Parachuting)", "BASE Jumping", "Hang Gliding", "Paragliding"],
                    answer: 0
                },
                {
                    question: "Which sport involves jumping from a fixed structure with a parachute?",
                    options: ["BASE Jumping", "Skydiving", "Hang Gliding", "Paragliding"],
                    answer: 0
                },
                {
                    question: "What is the name of the sport that involves flying with a wing-shaped glider?",
                    options: ["Hang Gliding", "Paragliding", "Skydiving", "BASE Jumping"],
                    answer: 0
                },
                {
                    question: "Which sport involves flying with a parachute-like wing?",
                    options: ["Paragliding", "Hang Gliding", "Skydiving", "BASE Jumping"],
                    answer: 0
                },
                {
                    question: "What is the term for a sport that involves riding a bicycle on dirt tracks and performing tricks?",
                    options: ["BMX (Bicycle Motocross)", "Mountain Biking", "Road Cycling", "Track Cycling"],
                    answer: 0
                },
                {
                    question: "Which sport involves riding bicycles on trails in the mountains?",
                    options: ["Mountain Biking", "BMX", "Road Cycling", "Track Cycling"],
                    answer: 0
                },
                {
                    question: "What is the term for racing bicycles on paved roads?",
                    options: ["Road Cycling", "Mountain Biking", "BMX", "Track Cycling"],
                    answer: 0
                },
                {
                    question: "Which sport involves racing bicycles on a banked track?",
                    options: ["Track Cycling", "Road Cycling", "Mountain Biking", "BMX"],
                    answer: 0
                },
                {
                    question: "What is the term for a sport that involves performing tricks on a scooter?",
                    options: ["Scootering", "Skateboarding", "Rollerblading", "BMX"],
                    answer: 0
                },
                {
                    question: "Which sport involves skating on inline skates?",
                    options: ["Rollerblading (Inline Skating)", "Skateboarding", "Scootering", "Roller Skating"],
                    answer: 0
                },
                {
                    question: "What is the name of the sport that involves skating on quad skates?",
                    options: ["Roller Skating", "Rollerblading", "Skateboarding", "Scootering"],
                    answer: 0
                },
                {
                    question: "Which sport involves performing tricks on a skateboard?",
                    options: ["Skateboarding", "Rollerblading", "Scootering", "Roller Skating"],
                    answer: 0
                },
                {
                    question: "What is the name of the sport that involves paddling a board while standing up?",
                    options: ["Stand-Up Paddleboarding (SUP)", "Surfing", "Bodyboarding", "Skimboarding"],
                    answer: 0
                }
            
        
        
    ],
    technology: [
        {
            question: "What does CPU stand for?",
            options: ["Central Processing Unit", "Computer Personal Unit", "Central Process Unit", "Computer Processing Unit"],
            answer: 0
        }
    ]
};

let score = 0;

//
// START QUIZ & SHUFFLE
//
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
    // Use shuffleArray (which returns up to 30 questions) without an extra slice
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
    // Ensure there is a question to load
    if (!questions[currentQuestion]) {
        console.error("No question available at index:", currentQuestion);
        return;
    }
    const questionObj = questions[currentQuestion];
    document.getElementById('question').textContent = questionObj.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

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
    document.getElementById('submitBtn').disabled = false;
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.style.background = 'rgba(255, 255, 255, 0.05)';
    });
    document.querySelectorAll('.option-btn')[index].style.background = 'rgba(243, 156, 18, 0.3)';
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

    // Reset the "Next Question" button for future quizzes
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.textContent = 'Next Question';
    nextBtn.onclick = nextQuestion;
}
