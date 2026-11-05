import { recipe } from './dsl'

/** Lot 5 de desserts : desserts du monde, goûters simples et quelques protéinés. */
export const DESSERTS_5 = [
  // ---------------------------------------------------------------- du monde
  recipe(
    'Pastéis de nata maison',
    '🥧 dessert 45 moyen 2 four,casserole 6',
    'Pâte feuilletée 1, Lait 250, Crème liquide 100, Œuf 3, Sucre 100, Maïzena 20, Cannelle, Citron 1',
    `Préchauffer le four au maximum.
     Rouler la pâte en boudin, la couper en rondelles et les étaler dans des moules à muffins.
     Cuire lait, crème, jaunes, sucre, maïzena et zeste jusqu'à épaississement.
     Garnir et cuire 12 minutes : le dessus doit caraméliser par endroits.`,
  ),
  recipe(
    'Baklava aux noix & miel',
    '🍯 dessert 60 moyen 2 four 8',
    'Pâte feuilletée 2, Noix 200, Noisettes 100, Beurre 80, Sucre 100, Miel 100, Cannelle, Citron 1',
    `Hacher noix et noisettes avec la cannelle et la moitié du sucre.
     Alterner pâte beurrée et fruits secs dans un plat, finir par la pâte ; prédécouper en losanges.
     Cuire 35 minutes à 180 °C.
     Verser dessus un sirop chaud de miel, reste du sucre, 10 cl d'eau et jus de citron.`,
  ),
  recipe(
    'Tarte au sucre',
    '🍰 dessert 50 facile 1 four 8',
    'Farine 250, Levure boulangère 1, Lait 100, Œuf 2, Beurre 80, Sucre roux 100, Crème fraîche 50, Sel',
    `Pétrir farine, levure, lait tiède, un œuf, 50 g de beurre et le sel ; laisser lever 1 heure.
     Étaler dans un moule, couvrir de sucre roux et de noisettes de beurre.
     Napper de l'œuf battu avec la crème.
     Cuire 25 minutes à 190 °C.`,
  ),
  recipe(
    'Boules de riz coco à la mangue',
    '🍡 dessert 40 difficile 2 casserole 4',
    'Riz rond 150, Lait de coco 200, Sucre 60, Mangue 1, Noix de coco râpée 30',
    `Cuire le riz dans le lait de coco et 20 cl d'eau avec le sucre, 25 minutes en remuant, jusqu'à ce qu'il soit collant.
     Laisser tiédir, former des boules en enfermant un dé de mangue.
     Les rouler dans la noix de coco.`,
  ),
  recipe(
    'Sticky rice à la mangue',
    '🥭 dessert 35 facile 2 casserole 4',
    'Riz rond 200, Lait de coco 300, Sucre 60, Mangue 2, Graines de sésame 10, Sel',
    `Cuire le riz dans 30 cl d'eau, à couvert, 15 minutes.
     Chauffer le lait de coco avec le sucre et le sel, en verser les deux tiers sur le riz et laisser reposer 15 minutes.
     Servir avec la mangue en tranches, le reste du lait de coco et le sésame.`,
  ),
  recipe(
    'Tres leches, gâteau aux trois laits',
    '🥛 dessert 60 moyen 2 four 8',
    'Œuf 4, Sucre 150, Farine 120, Levure chimique 1, Lait 200, Lait concentré sucré 200, Crème liquide 200, Cannelle',
    `Préchauffer le four à 180 °C.
     Fouetter œufs et sucre, incorporer farine et levure, cuire 25 minutes.
     Piquer le gâteau tiède et l'arroser du mélange des trois laits.
     Réfrigérer 4 heures, saupoudrer de cannelle.`,
  ),
  recipe(
    'Arroz con leche à la cannelle',
    '🍚 dessert 40 facile 1 casserole 4',
    'Riz rond 100, Lait 800, Sucre 80, Cannelle, Citron 1, Lait concentré sucré 60',
    `Cuire le riz dans le lait avec la cannelle et le zeste, 30 minutes en remuant.
     Ajouter sucre et lait concentré, 5 minutes.
     Servir saupoudré de cannelle.`,
  ),
  recipe(
    'Apple pie',
    '🥧 dessert 70 moyen 1 four 8',
    'Pâte brisée 2, Pomme 6, Sucre roux 80, Cannelle, Maïzena 15, Beurre 20, Œuf 1, Citron 1',
    `Préchauffer le four à 190 °C, foncer un moule avec une pâte.
     Mélanger les pommes en lamelles avec sucre, cannelle, maïzena et citron, garnir.
     Couvrir de la seconde pâte, souder, entailler et dorer à l'œuf.
     Cuire 50 minutes.`,
  ),
  recipe(
    'Muffins aux carottes & noix',
    '🥕 dessert 35 facile 1 four 6',
    'Carotte 2, Farine 150, Sucre roux 100, Œuf 2, Huile de tournesol 80, Levure chimique 1, Cannelle, Noix 40, Fromage frais 100, Sucre glace 40',
    `Préchauffer le four à 180 °C.
     Mélanger œufs, sucre et huile, ajouter farine, levure, cannelle, carottes râpées et noix.
     Cuire 22 minutes en moules à muffins.
     Napper du fromage frais fouetté au sucre glace.`,
  ),
  recipe(
    'Pavlova aux fruits rouges',
    '🍓 dessert 120 difficile 2 four 6',
    'Œuf 4, Sucre 200, Maïzena 10, Vinaigre de cidre 5, Crème liquide 250, Mascarpone 100, Fruits rouges surgelés 300',
    `Préchauffer le four à 120 °C.
     Monter les blancs en neige, ajouter le sucre petit à petit, puis maïzena et vinaigre.
     Former un disque et cuire 1 h 30, laisser refroidir dans le four.
     Garnir de crème fouettée au mascarpone et de fruits rouges décongelés.`,
  ),
  recipe(
    'Cheesecake new-yorkais',
    '🍰 dessert 90 moyen 2 four 8',
    'Spéculoos 200, Beurre 80, Fromage frais 600, Sucre 150, Œuf 3, Crème fraîche 150, Citron 1, Extrait de vanille',
    `Préchauffer le four à 160 °C, tasser le fond de biscuits beurrés.
     Fouetter fromage frais, sucre, œufs, crème, zeste et vanille.
     Cuire 1 heure, laisser refroidir dans le four entrouvert.
     Réfrigérer une nuit.`,
  ),
  recipe(
    'Panna cotta coco & mangue',
    '🥥 dessert 20 facile 2 casserole 4',
    'Lait de coco 400, Crème liquide 100, Sucre 50, Gélatine 3, Mangue 1, Citron vert 1',
    `Ramollir la gélatine.
     Chauffer lait de coco, crème et sucre, y dissoudre la gélatine.
     Répartir et réfrigérer 4 heures.
     Napper de mangue mixée au citron vert.`,
  ),

  // ---------------------------------------------------------------- goûters simples
  recipe(
    'Gâteau au chocolat express',
    '🍫 dessert 35 facile 1 four 6',
    'Chocolat noir 150, Beurre 100, Sucre 100, Œuf 3, Farine 60',
    `Préchauffer le four à 180 °C.
     Faire fondre chocolat et beurre, ajouter sucre, œufs et farine.
     Cuire 22 minutes.`,
  ),
  recipe(
    'Clafoutis aux pommes & cannelle',
    '🍎 dessert 45 facile 1 four 6',
    'Pomme 4, Œuf 3, Sucre 80, Farine 80, Lait 300, Beurre 20, Cannelle',
    `Préchauffer le four à 180 °C.
     Dorer les pommes en quartiers dans le beurre avec la cannelle.
     Les disposer dans un plat, verser la pâte (œufs, sucre, farine, lait).
     Cuire 35 minutes.`,
  ),
  recipe(
    'Muffins au chocolat',
    '🧁 dessert 30 facile 1 four 6',
    'Farine 200, Cacao en poudre 30, Sucre 120, Œuf 2, Lait 150, Beurre 80, Levure chimique 1, Pépites de chocolat 80',
    `Préchauffer le four à 190 °C.
     Mélanger les ingrédients secs, puis les liquides à part.
     Réunir rapidement, ajouter les pépites.
     Cuire 20 minutes en moules.`,
  ),
  recipe(
    'Cake à la banane & pépites de chocolat',
    '🍌 dessert 60 facile 1 four 8',
    'Banane 3, Farine 200, Sucre 100, Œuf 2, Beurre 80, Levure chimique 1, Pépites de chocolat 80',
    `Préchauffer le four à 180 °C.
     Écraser les bananes, ajouter beurre fondu, sucre et œufs.
     Incorporer farine, levure et pépites.
     Cuire 50 minutes.`,
  ),
  recipe(
    'Sablés à la confiture',
    '🍪 dessert 40 facile 1 four 6',
    'Farine 250, Beurre 150, Sucre 100, Œuf 1, Confiture 120, Sucre glace 20',
    `Sabler farine et beurre, ajouter sucre et œuf ; réfrigérer 30 minutes.
     Étaler et découper des disques, évider la moitié en leur centre.
     Cuire 12 minutes à 180 °C.
     Garnir de confiture, couvrir des disques évidés saupoudrés de sucre glace.`,
  ),
  recipe(
    'Crêpes au chocolat & banane',
    '🍫 dessert 30 facile 1 poele 4',
    'Farine 250, Œuf 4, Lait 500, Beurre 50, Sucre 30, Chocolat noir 100, Banane 3',
    `Préparer la pâte à crêpes et la cuire.
     Faire fondre le chocolat avec un peu de lait.
     Garnir les crêpes de banane et de chocolat, les plier.`,
  ),
  recipe(
    'Moelleux au citron',
    '🍋 dessert 40 facile 1 four 6',
    'Citron 2, Œuf 3, Sucre 120, Farine 100, Beurre 100, Poudre d\'amande 50, Levure chimique 0.5',
    `Préchauffer le four à 180 °C.
     Fouetter œufs et sucre, ajouter beurre fondu, zestes et jus.
     Incorporer farine, amande et levure.
     Cuire 25 minutes.`,
  ),
  recipe(
    'Fondant aux poires & chocolat',
    '🍐 dessert 45 facile 1 four 8',
    'Poire 3, Chocolat noir 150, Beurre 100, Sucre 100, Œuf 3, Farine 60',
    `Préchauffer le four à 180 °C.
     Préparer une pâte au chocolat fondu, beurre, sucre, œufs et farine.
     La verser dans un moule et enfoncer les poires en quartiers.
     Cuire 30 minutes.`,
  ),
  recipe(
    'Crème vanille maison',
    '🍮 dessert 20 facile 1 casserole 4',
    'Lait 500, Œuf 2, Sucre 60, Maïzena 30, Extrait de vanille',
    `Fouetter œufs, sucre et maïzena.
     Verser le lait vanillé chaud dessus, remettre sur le feu en fouettant jusqu'à épaississement.
     Répartir en pots et réfrigérer.`,
  ),
  recipe(
    'Petits pots de crème au chocolat au four',
    '🍫 dessert 40 facile 1 four 4',
    'Lait 300, Crème liquide 200, Chocolat noir 100, Œuf 3, Sucre 50',
    `Préchauffer le four à 150 °C.
     Faire fondre le chocolat dans le lait et la crème chauds.
     Verser sur les œufs battus avec le sucre.
     Cuire 30 minutes en ramequins au bain-marie, puis réfrigérer.`,
  ),
  recipe(
    'Palets bretons au beurre salé',
    '🧈 dessert 35 facile 1 four 6',
    'Farine 200, Beurre 150, Sucre 100, Œuf 2, Levure chimique 0.5, Sel',
    `Mélanger beurre mou, sucre, un œuf et un jaune, puis farine, levure et une bonne pincée de sel.
     Réfrigérer 1 heure, étaler sur 1 cm et découper.
     Dorer au jaune restant, rayer à la fourchette.
     Cuire 15 minutes à 180 °C.`,
  ),
  recipe(
    'Mendiants au chocolat',
    '🍫 dessert 20 facile 2 casserole 6',
    'Chocolat noir 150, Amandes effilées 30, Noisettes 30, Raisins secs 30',
    `Faire fondre le chocolat.
     Déposer des petits disques sur du papier cuisson.
     Garnir de fruits secs et laisser durcir au frais.`,
  ),

  // ---------------------------------------------------------------- protéinés
  recipe(
    'Mousse de fromage blanc aux fruits rouges',
    '🍓 dessert 15 facile 1 sans-cuisson 4',
    'Fromage blanc 400, Œuf 2, Miel 40, Fruits rouges surgelés 200',
    `Monter les blancs en neige.
     Mélanger fromage blanc et miel, incorporer les blancs.
     Alterner avec les fruits décongelés dans des verres.`,
  ),
  recipe(
    'Gâteau protéiné au yaourt grec & citron',
    '🍋 dessert 45 facile 1 four 6',
    'Yaourt grec 300, Œuf 4, Flocons d\'avoine 100, Miel 60, Citron 1, Levure chimique 1',
    `Préchauffer le four à 180 °C.
     Mixer les flocons en farine.
     Mélanger avec yaourt, œufs, miel, zeste et levure.
     Cuire 35 minutes.`,
  ),
  recipe(
    'Bowl fromage blanc, avoine & kiwi',
    '🥝 dessert 5 facile 1 sans-cuisson 2',
    'Fromage blanc 400, Flocons d\'avoine 60, Noisettes 30, Kiwi 2, Miel 20',
    `Répartir le fromage blanc dans deux bols.
     Ajouter flocons, noisettes concassées et kiwi en dés.
     Arroser de miel.`,
  ),
  recipe(
    'Brownie protéiné au fromage blanc',
    '🍫 dessert 35 facile 1 four 6',
    'Chocolat noir 100, Fromage blanc 200, Œuf 3, Flocons d\'avoine 60, Cacao en poudre 20, Miel 50',
    `Préchauffer le four à 180 °C.
     Faire fondre le chocolat, ajouter fromage blanc, œufs et miel.
     Incorporer flocons mixés et cacao.
     Cuire 20 minutes.`,
  ),
  recipe(
    'Panna cotta légère au fromage blanc',
    '🍮 dessert 20 facile 1 casserole 4',
    'Lait 200, Fromage blanc 300, Miel 40, Gélatine 3, Extrait de vanille, Framboise 150',
    `Ramollir la gélatine, la dissoudre dans le lait chaud vanillé avec le miel.
     Mélanger au fromage blanc.
     Répartir, réfrigérer 4 heures et servir avec les framboises.`,
  ),
]
