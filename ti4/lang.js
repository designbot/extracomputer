/* Author: Stephane Demots */
const L_EN = 0;
const L_FR = 1;
const L_DE = 2;
const L_RU = 3;

const W_SET_PLAYER = 0;
const W_STRATEGY = 1;
const W_PASS = 2;
const W_SELECT_STRATEGY = 3;
const W_SWAP_STRATEGIES = 4;
const W_CUSTODIANS_LEFT = 5;
const W_CUSTODIANS_STILL = 6;
const W_PHASE_GALAXY = 7;
const W_PHASE_STRATEGY = 8;
const W_PHASE_ACTION = 9;
const W_PHASE_STATUS = 10;
const W_PHASE_AGENDA = 11;
const W_PERFORM_ACTION = 12;
const W_END_VOTE = 13;
const W_FIRST_AGENDA = 14;
const W_SECOND_AGENDA= 15;
const W_FOR = 16;
const W_AGAINST = 17;
const W_ADD_PLANET = 18;
const W_ADD_LAW = 19;
const W_ADD_OBJECTIVE = 20;
const W_ADD_STRATEGY = 21;
const W_ADD_PROPOSAL = 22;
const W_CAST_VOTE = 23;
const W_ABSTAIN = 24;
const W_PHASE_END = 25;
const W_CONCLUSION = 26;
const W_CHOOSEACTION = 27;
const W_RESOLVEACTIONS = 28;

var gWord = [
  ["Set player", "", "Spieler Auswahl", "Выберите игрока"],
  [" strategy", "", " Strategie", "стратегия"],
  ["Pass", "Passer", "Passen", "Пас"],
  [", select your Strategy", ", choisir une Stratégie", ", strategiekarte wählen", ", выберите карту стратегии"],
  ["Select 2 strategies to swap", "Choisir 2 strategies à inverser", "2 Strategien zum Tauschen auswählen", "Поменяйте местами две карты стратегии"],
  ["The Custodians left Mecatol Rex", "Les Gardiens ont quitté Mecatol Rex", "Die Hüter haben Mecatol Rex verlassen", "Хранители покинули Мекатол Рекс"],
  ["The Custodians are still guarding Mecatol Rex", "Les Gardiens sont toujours sur Mecatol Rex", "Die Hüter bewachen Mecatol Rex noch", "Хранители все еще защищают Мекатол Рекс"],
  ["Galaxy Phase", "Phase Galaxie", "Galaxy-Phase", "Галактическая фаза"],
  ["Strategy Phase", "Phase Stratégie", "Strategie-Phase", "Фаза стратегии"],
  ["Action Phase", "Phase d'Action", "Aktions-Phase", "Фаза действий"],
  ["Status Phase", "Phase de Status", "Status-Phase", "Фаза статуса"],
  ["Agenda Phase", "Phase de projet", "Agenda-Phase", "Фаза политики"],
  [", perform your Action", ", resoudre votre Action", ", führe deine Action aus", "выполните ваше дейсвтие"],
  ["End of the vote", "Fin du vote", "Ende der Abstimmung", "Закончить голосование"],
  ["First Agenda", "Premier projet", "Erste Agenda", "Первая карта политики"],
  ["Second Agenda", "Second projet", "Zweite Agenda", "Вторая карта политики"],
  ["For", "Pour", "Dafür", "За"],
  ["Against", "Contre", "Dagegen", "Против"],
  ["Add Planet", "Ajouter Planète", "Füge Planeten hinzu", "Добавить планету"],
  ["Add Law", "Ajouter Loi", "Füge Gesetz hinzu", "Добавить закон"],
  ["Add Objective", "Ajouter Objectif", "Add Objective", "Добавить цель"],
  ["Add Strategy", "Add Strategy", "Add Strategy", "Add Strategy"],
  ["Add Proposal", "Ajouter Proposition", "Add Proposal", "Добавить предложение"],
  [", cast your vote", " doit voter", ", gebe deine Stimme ab", "проголосуйте"],
  ["Abstain", "Abstention", "Enthalten", "Воздержаться"],
  ["Game ends", "Fin de partie", "Spiel zu Ende", "Конец игры"],
  ["A new age begins...", "Un nouvel âge commence...", "Ein neues Zeitalter beginnt", "Начало новой эпохи..."],
  ["Choosing action", "Choix d'action", "Wähle Aktion", "Выбор действия"],
  ["Resolving action(s)...", "Résolution d'action(s)...", "Aktionen ausführen", "Выполнение действия..."],
  ["", "", ""],
];