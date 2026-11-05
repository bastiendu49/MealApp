import { recipe } from './dsl'

/** Lot 1 de desserts : les grands classiques de la maison. */
export const DESSERTS_1 = [
  recipe(
    'Fondant au chocolat',
    '🍫 dessert 35 facile 2 four 6',
    'Chocolat noir 200, Beurre 150, Sucre 120, Œuf 4, Farine 40',
    `Préchauffer le four à 180 °C et beurrer un moule.
     Faire fondre chocolat et beurre ensemble.
     Fouetter les œufs avec le sucre, ajouter le chocolat puis la farine.
     Cuire 20 minutes : le centre doit rester tremblotant.`,
  ),
  recipe(
    'Mousse au chocolat',
    '🍫 dessert 20 facile 1 casserole 4',
    'Chocolat noir 150, Œuf 4, Sucre 20, Sel',
    `Faire fondre le chocolat au bain-marie, le laisser tiédir.
     Séparer les blancs des jaunes, incorporer les jaunes au chocolat.
     Monter les blancs en neige ferme avec une pincée de sel, ajouter le sucre à la fin.
     Incorporer délicatement les blancs au chocolat, réserver au frais au moins 4 heures.`,
  ),
  recipe(
    'Tiramisu',
    '☕ dessert 30 moyen 2 sans-cuisson 6',
    'Mascarpone 250, Œuf 3, Sucre 80, Biscuits à la cuillère 200, Café expresso 300, Cacao en poudre 15',
    `Fouetter les jaunes avec le sucre jusqu'à blanchiment, ajouter le mascarpone.
     Monter les blancs en neige et les incorporer délicatement.
     Tremper rapidement les biscuits dans le café froid, en tapisser un plat.
     Alterner couches de crème et de biscuits, finir par la crème.
     Réserver une nuit au frais et saupoudrer de cacao au moment de servir.`,
  ),
  recipe(
    'Crêpes',
    '🥞 dessert 30 facile 1 poele 4',
    'Farine 250, Œuf 4, Lait 500, Sucre 30, Beurre 50, Sucre vanillé 1, Sel',
    `Mélanger farine, sucres et sel, creuser un puits et y casser les œufs.
     Ajouter le lait petit à petit en fouettant pour éviter les grumeaux, puis le beurre fondu.
     Laisser reposer 30 minutes si possible.
     Cuire les crêpes une à une dans une poêle chaude légèrement beurrée.`,
  ),
  recipe(
    'Pancakes moelleux',
    '🥞 dessert 25 facile 1 poele 4',
    'Farine 200, Lait 250, Œuf 2, Sucre 30, Levure chimique 1, Beurre 30, Sirop d\'érable 60, Sel',
    `Mélanger farine, sucre, levure et sel.
     Ajouter les œufs, le lait puis le beurre fondu : la pâte doit être épaisse.
     Cuire des petites louches dans une poêle chaude 2 minutes, retourner quand des bulles apparaissent.
     Servir avec le sirop d'érable.`,
  ),
  recipe(
    'Cookies aux pépites de chocolat',
    '🍪 dessert 30 facile 1 four 6',
    'Beurre 120, Sucre roux 120, Œuf 1, Farine 220, Levure chimique 0.5, Pépites de chocolat 150, Sel',
    `Préchauffer le four à 180 °C.
     Mélanger beurre mou et sucre, ajouter l'œuf.
     Incorporer farine, levure, sel puis les pépites.
     Former des boules espacées sur une plaque et cuire 10 à 12 minutes : ils durcissent en refroidissant.`,
  ),
  recipe(
    'Crumble aux pommes',
    '🍏 dessert 45 facile 1 four,airfryer 4',
    'Pomme 5, Farine 100, Beurre 80, Sucre roux 80, Cannelle',
    `Préchauffer le four à 180 °C.
     Couper les pommes en dés, les mettre dans un plat avec la cannelle.
     Sabler du bout des doigts farine, sucre et beurre froid, répartir sur les fruits.
     Cuire 30 minutes au four (20 minutes à l'airfryer à 170 °C).`,
  ),
  recipe(
    'Tarte aux pommes',
    '🥧 dessert 50 facile 1 four 6',
    'Pâte brisée 1, Pomme 5, Sucre 40, Beurre 20, Sucre vanillé 1',
    `Préchauffer le four à 190 °C et foncer un moule avec la pâte.
     Faire une compote rapide avec 2 pommes, la moitié du sucre et un fond d'eau, 10 minutes.
     L'étaler sur la pâte, recouvrir des autres pommes en fines lamelles.
     Parsemer de sucre et de noisettes de beurre, cuire 35 minutes.`,
  ),
  recipe(
    'Clafoutis aux cerises',
    '🍒 dessert 50 facile 2 four 6',
    'Cerise 500, Œuf 3, Sucre 100, Farine 80, Lait 300, Beurre 15, Sucre vanillé 1',
    `Préchauffer le four à 180 °C et beurrer un plat.
     Fouetter œufs et sucres, ajouter la farine puis le lait.
     Répartir les cerises dans le plat, verser la pâte.
     Cuire 40 minutes et servir tiède.`,
  ),
  recipe(
    'Riz au lait vanillé',
    '🍚 dessert 45 facile 1 casserole 4',
    'Riz rond 100, Lait 1000, Sucre 80, Extrait de vanille, Cannelle',
    `Porter le lait à ébullition avec la vanille.
     Ajouter le riz et cuire 35 minutes à feu très doux en remuant souvent.
     Hors du feu, ajouter le sucre ; servir tiède ou froid avec une pincée de cannelle.`,
  ),
  recipe(
    'Flan pâtissier',
    '🍮 dessert 60 moyen 1 four,casserole 8',
    'Pâte brisée 1, Lait 750, Œuf 3, Sucre 150, Maïzena 70, Extrait de vanille',
    `Préchauffer le four à 180 °C et foncer un moule haut avec la pâte.
     Chauffer le lait avec la vanille.
     Fouetter œufs, sucre et maïzena, verser le lait chaud dessus et remettre sur le feu jusqu'à épaississement.
     Verser dans le moule, cuire 45 minutes et laisser refroidir complètement avant de couper.`,
  ),
  recipe(
    'Gâteau au yaourt',
    '🍰 dessert 45 facile 1 four 6',
    'Yaourt nature 1, Sucre 200, Farine 250, Œuf 3, Huile de tournesol 80, Levure chimique 1, Citron 1',
    `Préchauffer le four à 180 °C. Le pot de yaourt sert de mesure.
     Mélanger yaourt, œufs, 2 pots de sucre, le zeste de citron.
     Ajouter 3 pots de farine, la levure, puis l'huile.
     Cuire 35 minutes dans un moule beurré.`,
  ),
  recipe(
    'Banana bread',
    '🍌 dessert 70 facile 1 four 8',
    'Banane 3, Farine 220, Sucre roux 100, Beurre 80, Œuf 2, Levure chimique 1, Cannelle, Noix 50',
    `Préchauffer le four à 175 °C.
     Écraser les bananes bien mûres, ajouter beurre fondu, sucre et œufs.
     Incorporer farine, levure, cannelle et noix concassées.
     Cuire 55 minutes dans un moule à cake.`,
  ),
  recipe(
    'Pommes au four à la cannelle',
    '🍎 dessert 35 facile 1 four,airfryer 4',
    'Pomme 4, Beurre 30, Sucre roux 40, Cannelle, Raisins secs 30',
    `Préchauffer le four à 180 °C. Évider les pommes sans les percer.
     Les garnir de beurre, sucre, cannelle et raisins secs.
     Cuire 30 minutes au four (20 minutes à l'airfryer à 170 °C).`,
  ),
  recipe(
    'Salade de fruits frais',
    '🍓 dessert 15 facile 1 sans-cuisson 4',
    'Fraise 250, Kiwi 2, Orange 2, Banane 1, Mangue 1, Menthe 1, Sucre 20',
    `Couper tous les fruits en morceaux.
     Presser une orange et mélanger son jus au sucre.
     Arroser les fruits, ajouter la menthe ciselée et réserver au frais.`,
  ),
  recipe(
    'Cheesecake spéculoos sans cuisson',
    '🍰 dessert 30 moyen 2 sans-cuisson 8',
    'Spéculoos 200, Beurre 80, Fromage frais 400, Crème liquide 200, Sucre glace 80, Citron 1, Fruits rouges surgelés 200',
    `Mixer les spéculoos, ajouter le beurre fondu et tasser au fond d'un moule à charnière.
     Fouetter la crème bien froide en chantilly.
     Mélanger fromage frais, sucre glace et zeste de citron, incorporer la chantilly.
     Verser sur le biscuit et réserver au frais une nuit. Servir avec un coulis de fruits rouges.`,
  ),
  recipe(
    'Brownie aux noix',
    '🍫 dessert 40 facile 2 four 8',
    'Chocolat noir 200, Beurre 150, Sucre 150, Œuf 3, Farine 80, Noix 80',
    `Préchauffer le four à 180 °C.
     Faire fondre chocolat et beurre, ajouter le sucre puis les œufs un à un.
     Ajouter la farine et les noix concassées.
     Cuire 25 minutes dans un moule carré : la lame doit ressortir légèrement humide.`,
  ),
  recipe(
    'Muffins aux myrtilles',
    '🧁 dessert 35 facile 2 four 6',
    'Farine 250, Sucre 120, Œuf 2, Lait 150, Beurre 80, Levure chimique 1, Myrtille 150',
    `Préchauffer le four à 190 °C.
     Mélanger les ingrédients secs d'un côté, œufs, lait et beurre fondu de l'autre.
     Réunir rapidement sans trop travailler la pâte, ajouter les myrtilles.
     Remplir des moules aux trois quarts et cuire 20 minutes.`,
  ),
  recipe(
    'Pain perdu',
    '🍞 dessert 15 facile 1 poele 2',
    'Pain de mie 4, Œuf 2, Lait 150, Sucre 30, Beurre 20, Cannelle',
    `Battre œufs, lait, sucre et cannelle.
     Tremper les tranches de pain des deux côtés.
     Les dorer 2 minutes par face dans le beurre mousseux.`,
  ),
  recipe(
    'Poires pochées au chocolat',
    '🍐 dessert 35 facile 2 casserole 4',
    'Poire 4, Sucre 100, Extrait de vanille, Chocolat noir 100, Crème liquide 100',
    `Éplucher les poires en gardant la queue.
     Les pocher 20 minutes dans 1 litre d'eau frémissante avec le sucre et la vanille.
     Faire fondre le chocolat dans la crème chaude.
     Servir les poires tièdes nappées de sauce chocolat.`,
  ),
  recipe(
    'Tarte au citron',
    '🍋 dessert 60 moyen 2 four,casserole 6',
    'Pâte sablée 1, Citron 4, Œuf 4, Sucre 150, Beurre 100, Maïzena 15',
    `Préchauffer le four à 180 °C, cuire la pâte à blanc 20 minutes.
     Dans une casserole, fouetter zestes, jus de citron, œufs, sucre et maïzena.
     Cuire à feu doux sans cesser de fouetter jusqu'à épaississement.
     Hors du feu, incorporer le beurre en morceaux, verser sur la pâte et laisser prendre au frais 2 heures.`,
  ),
  recipe(
    'Crumble aux fruits rouges',
    '🫐 dessert 40 facile 2 four 4',
    'Fruits rouges surgelés 400, Farine 80, Poudre d\'amande 40, Beurre 80, Sucre roux 80',
    `Préchauffer le four à 180 °C.
     Étaler les fruits encore surgelés dans un plat.
     Sabler farine, amande, sucre et beurre froid, répartir sur les fruits.
     Cuire 30 minutes.`,
  ),
]
