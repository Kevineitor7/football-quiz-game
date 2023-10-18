const players = {
    0: {
        name: 'Joao Felix',   
        clubs: ['Benfica', 'Atletico_Madrid', 'Chelsea', 'Barcelona']
    },
    1: {
        name: 'Angel Di Maria',   
        clubs: ['Rosario_Central','Benfica','Real_Madrid','Manchester_United','PSG','Juventus','Benfica']
    },
    2: {
        name: 'Mohamed Salah',   
        clubs: ['Basel','Chelsea','Fiorentina','Roma','Liverpool']
    },
    3: {
        name: 'Paulo Dybala',   
        clubs: ['Instituto', 'Palermo', 'Juventus', 'Roma']
    },
    4: {
        name: 'Nicolas Otamendi',   
        clubs: ['Velez_Sarsfield', 'Porto', 'Atletico_Mineiro', 'Valencia', 'Manchester_City', 'Benfica']
    },
    5: {
        name: 'Joao Cancelo',   
        clubs: ['Benfica', 'Valencia', 'Inter_Milan', 'Juventus', 'Manchester_City', 'Bayern_Munich', 'Barcelona']
    },
    6: {
        name: 'Antonio Rudiger',   
        clubs: ['Stuttgart', 'Roma', 'Chelsea', 'Real_Madrid']
    },
    7: {
        name: 'Mike Maignan',   
        clubs: ['PSG', 'Lille', 'AC_Milan']
    },
    8: {
        name: 'Thibaut Courtois',   
        clubs: ['Genk', 'Atletico_Madrid', 'Chelsea', 'Real_Madrid']
    },
    9: {
        name: 'Sebastien Haller',   
        clubs: ['Auxerre', 'Utrecht', 'Eintracht_Frankfurt', 'West_Ham_United', 'Ajax', 'Borussia_Dortmund']
    },
    10: {
        name: 'Rafael Santos Borre',   
        clubs: ['Deportivo_Cali', 'Villarreal', 'River_Plate', 'Eintracht_Frankfurt', 'Werder_Bremen']
    },
    11: {
        name: 'Ciro Immobile',   
        clubs: ['Juventus', 'Siena', 'Grosseto', 'Pescara', 'Genoa', 'Torino', 'Borussia_Dortmund', 'Sevilla', 'Torino', 'Lazio']
    },
    12: {
        name: 'Mateo Kovacic',   
        clubs: ['Dinamo_Zagreb', 'Inter_Milan', 'Real_Madrid', 'Chelsea', 'Manchester_City']
    },
    13: {
        name: 'Raul Albiol',   
        clubs: ['Getafe', 'Valencia', 'Real_Madrid', 'Napoli', 'Villarreal']
    },
    14: {
        name: 'Youssef En-Nesyri',   
        clubs: ['Malaga', 'Leganes', 'Sevilla']
    },
    15: {
        name: 'Alvaro Morata',   
        clubs: ['Real_Madrid', 'Juventus', 'Real_Madrid', 'Chelsea', 'Atletico_Madrid', 'Juventus', 'Atletico_Madrid']
    },
    16: {
        name: 'Wissam Ben Yedder',   
        clubs: ['Toulouse', 'Sevilla', 'Monaco']
    },
    17: {
        name: 'Yannick Carrasco',   
        clubs: ['Monaco', 'Atletico_Madrid', 'Al_Shabab']
    },
    18: {
        name: 'Ilkay Gundogan',   
        clubs: ['Bochum', 'Nurnberg', 'Borussia_Dortmund', 'Manchester_City', 'Barcelona']
    },
    19: {
        name: 'Toni Kroos',   
        clubs: ['Bayern_Munich', 'Bayer_Leverkusen', 'Bayern_Munich', 'Real_Madrid']
    },
    20: {
        name: 'Mario Gotze',   
        clubs: ['Borussia_Dortmund', 'Bayern_Munich', 'Borussia_Dortmund', 'PSV', 'Eintracht_Frankfurt']
    },
    21: {
        name: 'Paul Pogba',   
        clubs: ['Manchester_United', 'Juventus', 'Manchester_United', 'Juventus']
    },
    22: {
        name: 'Mauro Icardi',   
        clubs: ['Sampdoria', 'Inter_Milan', 'PSG', 'Galatasaray']
    },
    23: {
        name: 'Alexandre Lacazette',   
        clubs: ['Lyon', 'Arsenal', 'Lyon']
    },
    24: {
        name: 'Kieran Trippier',   
        clubs: ['Barnsley', 'Burnley', 'Tottenham_Hotspur', 'Atletico_Madrid', 'Newcastle_United']
    },
    25: {
        name: 'Achraf Hakimi',   
        clubs: ['Real_Madrid', 'Borussia_Dortmund', 'Inter_Milan', 'PSG']
    },
    26: {
        name: 'Stanislav Lobotka',   
        clubs: ['Trencin', 'Ajax', 'Trencin', 'Nordsjælland', 'Celta_Vigo', 'Napoli']
    },
    27: {
        name: 'Bruno Fernandes',   
        clubs: ['Novara', 'Udinese', 'Sampdoria', 'Sporting_Lisbon', 'Manchester_United']
    },
    28: {
        name: 'Hakan Calhanoglu',   
        clubs: ['Bayer_Leverkusen', 'AC_Milan', 'Inter_Milan']
    },
    29: {
        name: 'Nicolo Barella',   
        clubs: ['Cagliari', 'Como', 'Cagliari', 'Inter_Milan']
    },
    30: {
        name: 'Bernardo Silva',   
        clubs: ['Benfica', 'Monaco', 'Manchester_City']
    },
    31: {
        name: 'Rafael Leao',   
        clubs: ['Sporting_Lisbon', 'Lille', 'AC_Milan']
    },
    32: {
        name: 'Khvicha Kvaratskhelia',   
        clubs: ['Dinamo_Tbilisi', 'Rustavi', 'Lokomotiv_Moscow', 'Rubin_Kazan', 'Dinamo_Batumi', 'Napoli']
    },
    33: {
        name: 'Antoine Griezmann',   
        clubs: ['Real_Sociedad', 'Atletico_Madrid', 'Barcelona', 'Atletico_Madrid']
    },
    34: {
        name: 'Thiago Alcantara',   
        clubs: ['Barcelona', 'Bayern_Munich', 'Liverpool']
    },
    35: {
        name: 'Alisson Becker',   
        clubs: ['Internacional', 'Roma', 'Liverpool']
    },
    36: {
        name: 'Theo Hernandez',   
        clubs: ['Alaves', 'Real_Sociedad', 'Real_Madrid', 'AC_Milan']
    },
    37: {
        name: 'Fabinho',   
        clubs: ['Real_Madrid', 'Monaco', 'Liverpool', 'Al_Ittihad']
    },
    38: {
        name: 'Nabil Fekir',   
        clubs: ['Lyon', 'Real_Betis']
    },
    39: {
        name: 'Ivan Perisic',   
        clubs: ['Club_Brugge', 'Borussia_Dortmund', 'Inter_Milan', 'Bayern_Munich', 'Inter_Milan', 'Tottenham_Hotspur']
    },
    40: {
        name: 'Diogo Jota',   
        clubs: ['Pacos_Ferreira', 'Porto', 'Wolverhampton_Wanderers', 'Liverpool']
    },
    41: {
        name: 'Filip Kostic',   
        clubs: ['Groningen', 'Stuttgart', 'Eintracht_Frankfurt', 'Juventus']
    },
    42: {
        name: 'Pablo Sarabia',   
        clubs: ['Real_Madrid', 'Getafe', 'Sevilla', 'PSG', 'Sporting_Lisbon', 'PSG', 'Wolverhampton_Wanderers']
    },
    43: {
        name: 'Lorenzo Pellegrini',   
        clubs: ['Roma', 'Sassuolo', 'Roma']
    },
    44: {
        name: 'Bruno Guimaraes',   
        clubs: ['Athletico_Paranaense', 'Lyon', 'Newcastle_United']
    },
    45: {
        name: 'Tammy Abraham',   
        clubs: ['Chelsea', 'Bristol_City', 'Swansea_City', 'Aston_Villa', 'Chelsea', 'Roma']
    },
    46: {
        name: 'Sergej Milinkovic-Savic',   
        clubs: ['Vojvodina', 'Genk', 'Lazio', 'Al_Hilal']
    },
    47: {
        name: 'Lucas Paqueta',   
        clubs: ['Flamengo', 'AC_Milan', 'Lyon', 'West_Ham_United']
    },
    48: {
        name: 'Ousmane Dembele',   
        clubs: ['Rennes', 'Borussia_Dortmund', 'Barcelona', 'PSG']
    },
    49: {
        name: 'Dimitri Payet',   
        clubs: ['Nantes', 'Saint_Etienne', 'Lille', 'Marseille', 'West_Ham_United', 'Marseille', 'Vasco_da_gama']
    },
    50: {
        name: 'Bremer',   
        clubs: ['Sao_Paulo', 'Atletico_Mineiro', 'Torino', 'Juventus']
    },
    51: {
        name: 'Giovanni Simeone',   
        clubs: ['River_Plate', 'Banfield', 'Genoa', 'Fiorentina', 'Cagliari', 'Verona', 'Napoli']
    },
    52: {
        name: 'Kalidou Koulibaly',   
        clubs: ['Metz', 'Genk', 'Napoli', 'Chelsea', 'Al_Hilal']
    },
    53: {
        name: 'Sadio Mane',   
        clubs: ['Metz', 'Salzburg', 'Southampton', 'Liverpool', 'Bayern_Munich', 'Al_Nassr']
    },
    54: {
        name: 'Charles De Ketelaere',   
        clubs: ['Club_Brugge', 'AC_Milan', 'Atalanta']
    },
    55: {
        name: 'Cody Gakpo',   
        clubs: ['PSV', 'Liverpool']
    },
    56: {
        name: 'Folarin Balogun',   
        clubs: ['Arsenal', 'Middlesbrough', 'Reims', 'Monaco']
    },
    57: {
        name: 'Niclas Fullkrug',   
        clubs: ['Werder_Bremen', 'Greuther_Furth', 'Nurnberg', 'Hannover_96', 'Werder_Bremen', 'Borussia_Dortmund']
    },
    58: {
        name: 'Dominik Szoboszlai',   
        clubs: ['Liefering', 'Salzburg', 'RB_Leipzig', 'Liverpool']
    },
    59: {
        name: 'Joao Mario',   
        clubs: ['Sporting_Lisbon', 'Vitoria_Setubal', 'Inter_Milan', 'West_Ham_United', 'Inter_Milan', 'Lokomotiv_Moscow', 'Sporting_Lisbon', 'Benfica']
    },
    60: {
        name: 'Xavi Simons',   
        clubs: ['PSG', 'PSV', 'RB_Leipzig']
    },
    61: {
        name: 'Takefusa Kubo',   
        clubs: ['Tokyo', 'Yokohama', 'Mallorca', 'Villarreal', 'Getafe', 'Mallorca', 'Real_Sociedad']
    },
    62: {
        name: 'Martin Odegaard',   
        clubs: ['Strømsgodset', 'Real_Madrid', 'Heerenveen', 'Vitesse', 'Real_Sociedad', 'Real_Madrid', 'Arsenal']
    },
    63: {
        name: 'Nahuel Molina',   
        clubs: ['Boca_Juniors', 'Defensa_y_Justicia', 'Rosario_Central', 'Udinese', 'Atletico_Madrid']
    },
    64: {
        name: 'Alexis Sanchez',   
        clubs: ['Cobreloa', 'Colo_Colo', 'River_Plate', 'Udinese', 'Barcelona', 'Arsenal', 'Manchester_United', 'Inter_Milan', 'Marseille', 'Inter_Milan']
    },
    65: {
        name: 'Samuel Chukwueze',   
        clubs: ['Villarreal', 'AC_Milan']
    },
    66: {
        name: 'Randal Kolo Muani ',   
        clubs: ['Nantes', 'Boulogne', 'Nantes', 'Eintracht_Frankfurt', 'PSG']
    },
    67: {
        name: 'William Saliba',   
        clubs: ['Saint_Etienne', 'Nice', 'Marseille', 'Arsenal']
    },
    68: {
        name: 'Declan Rice',   
        clubs: ['West_Ham_United', 'Arsenal']
    },
    69: {
        name: 'Josko Gvardiol',   
        clubs: ['Dinamo_Zagreb', 'RB_Leipzig', 'Manchester_City']
    },
    70: {
        name: 'Federico Dimarco',   
        clubs: ['Inter_Milan', 'Ascoli', 'Empoli', 'Sion', 'Parma', 'Inter_Milan', 'Verona', 'Inter_Milan']
    },
    71: {
        name: 'Sofyan Amrabat',   
        clubs: ['Utrecht', 'Feyenoord', 'Club_Brugge', 'Verona', 'Fiorentina', 'Manchester_United']
    },
    72: {
        name: 'Kim Min-Jae',   
        clubs: ['Beijing_Guoan', 'Fenerbahce', 'Napoli', 'Bayern_Munich']
    },
    73: {
        name: 'Andre Onana',   
        clubs: ['Ajax', 'Inter_Milan', 'Manchester_United']
    },
    74: {
        name: 'Casemiro',   
        clubs: ['Sao_Paulo', 'Real_Madrid', 'Porto', 'Real_Madrid', 'Manchester_United']
    },
    75: {
        name: 'Luka Modric',   
        clubs: ['Dinamo_Zagreb', 'Tottenham_Hotspur', 'Real_Madrid']
    },
    76: {
        name: 'Jack Grealish',   
        clubs: ['Notts_County', 'Aston_Villa', 'Manchester_City']
    },
    77: {
        name: 'Erling Haaland',   
        clubs: ['Bryne', 'Molde', 'Salzburg', 'Borussia_Dortmund', 'Manchester_City']
    },
    78: {
        name: 'Karim Benzema',   
        clubs: ['Lyon', 'Real_Madrid', 'Al_Ittihad']
    },
    79: {
        name: 'Marc Andre Ter Stegen',   
        clubs: ["Borussia_M'gladbach", 'Barcelona']
    },
    80: {
        name: 'Jude Bellingham',   
        clubs: ['Birmingham_City', 'Borussia_Dortmund', 'Real_Madrid']
    },
    81: {
        name: 'Robert Lewandowski',   
        clubs: ['Lech_Poznan', 'Borussia_Dortmund', 'Bayern_Munich', 'Barcelona']
    },
    82: {
        name: 'Rodri',   
        clubs: ['Villarreal', 'Atletico_Madrid', 'Manchester_City']
    },
    83: {
        name: 'Victor Osimhen',   
        clubs: ['Wolfsburg', 'Sporting_Charleroi', 'Lille', 'Napoli']
    },
    84: {
        name: 'Kevin De Bruyne',   
        clubs: ['Genk', 'Werder_Bremen', 'Chelsea', 'Wolfsburg', 'Manchester_City']
    },
    85: {
        name: 'Pedri',   
        clubs: ['Las_Palmas', 'Barcelona']
    },
    86: {
        name: 'Kai Havertz',   
        clubs: ['Bayer_Leverkusen', 'Chelsea', 'Arsenal']
    },
    87: {
        name: 'Brahim Diaz',   
        clubs: ['Manchester_City', 'Real_Madrid', 'AC_Milan', 'Real_Madrid']
    },
    88: {
        name: 'Sandro Tonali',   
        clubs: ['Brescia', 'AC_Milan', 'Newcastle_United']
    },
    89: {
        name: 'Ismael Bennacer',   
        clubs: ['Arsenal', 'Tours', 'Empoli', 'AC_Milan']
    },
    90: {
        name: 'Olivier Giroud',   
        clubs: ['Istres', 'Tours', 'Montpellier', 'Arsenal', 'Chelsea', 'AC_Milan']
    },
    91: {
        name: 'Jorginho',   
        clubs: ['Napoli', 'Chelsea', 'Arsenal']
    },
    92: {
        name: 'Marco Verratti',   
        clubs: ['Pescara', 'PSG', 'Al_Arabi']
    },
    93: {
        name: 'Gianluca Scamacca',   
        clubs: ['Sassuolo', 'Cremonese', 'PEC_Zwolle', 'Ascoli', 'Genoa', 'Sassuolo', 'West_Ham_United', 'Atalanta']
    },
    94: {
        name: 'David Alaba ',   
        clubs: ['Bayern_Munich', 'Hoffenheim', 'Bayern_Munich', 'Real_Madrid']
    },
    95: {
        name: 'Raphael Guerreiro',   
        clubs: ['Caen', 'Lorient', 'Borussia_Dortmund', 'Bayern_Munich']
    },
    96: {
        name: 'Giovanni Di Lorenzo',   
        clubs: ['Matera', 'Empoli', 'Napoli']
    },
    97: {
        name: 'Hirving Lozano',   
        clubs: ['Pachuca', 'PSV', 'Napoli', 'PSV']
    },
    98: {
        name: 'Santiago Gimenez',   
        clubs: ['Cruz_Azul', 'Feyenoord']
    },
    99: {
        name: 'Edson Alvarez',   
        clubs: ['America', 'Ajax', 'West_Ham_United']
    },
    100: {
        name: 'Frenkie De Jong',   
        clubs: ['Willem_II', 'Ajax', 'Barcelona']
    },
    101: {
        name: 'Tijjani Reijnders',   
        clubs: ['PEC_Zwolle', 'AZ', 'RKC_Waalwijk', 'AZ', 'AC_Milan']
    },
    102: {
        name: 'Christian Pulisic',   
        clubs: ['Borussia_Dortmund', 'Chelsea', 'AC_Milan']
    },
    103: {
        name: 'Timothy Weah',   
        clubs: ['PSG', 'Celtic', 'Lille', 'Juventus']
    },
    104: {
        name: 'Weston McKennie',   
        clubs: ['Schalke_04', 'Juventus', 'Leeds_United', 'Juventus']
    },
    105: {
        name: 'Dusan Vlahovic',   
        clubs: ['Partizan', 'Fiorentina', 'Juventus']
    },
    106: {
        name: 'Simon Kjaer',   
        clubs: ['Palermo', 'Wolfsburg', 'Roma', 'Wolfsburg', 'Lille', 'Fenerbahce', 'Sevilla', 'Atalanta', 'AC_Milan']
    },
    107: {
        name: 'Thiago Silva',   
        clubs: ['Fluminense', 'AC_Milan', 'PSG', 'Chelsea']
    },
    108: {
        name: 'Gabriel Jesus',   
        clubs: ['Palmeiras', 'Manchester_City', 'Arsenal']
    },
    109: {
        name: 'Federico Valverde',   
        clubs: ['Peñarol', 'Deportivo_la_coruña', 'Real_Madrid']
    },
    110: {
        name: 'Federico Chiesa',   
        clubs: ['Fiorentina', 'Juventus']
    }
    
}

export default players