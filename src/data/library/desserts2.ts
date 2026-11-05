import { recipe } from './dsl'

/** Lot 2 de desserts : pâtisserie de la maison, crèmes, goûters et quelques-uns à l'airfryer. */
export const DESSERTS_2 = [
  recipe(
    'Moelleux au chocolat à l\'airfryer',
    '🍫 dessert 25 facile 1 airfryer 4',
    'Chocolat noir 100, Beurre 70, Sucre 60, Œuf 2, Farine 30',
    `Faire fondre chocolat et beurre, ajouter le sucre, les œufs puis la farine.
     Répartir dans quatre ramequins beurrés allant à l'airfryer.
     Cuire 8 à 9 minutes à 170 °C : le cœur doit rester coulant.
     Laisser tiédir 2 minutes avant de démouler.`,
  ),
  recipe(
    'Bananes rôties au miel & à la cannelle',
    '🍌 dessert 15 facile 1 airfryer,four 2',
    'Banane 2, Miel 20, Cannelle, Beurre 10, Fromage blanc 100',
    `Couper les bananes en deux dans la longueur, sans les éplucher.
     Les arroser de miel, de cannelle et de noisettes de beurre.
     Cuire 8 minutes à 180 °C à l'airfryer (12 minutes au four à 200 °C).
     Servir avec le fromage blanc.`,
  ),
  recipe(
    'Crème brûlée',
    '🍮 dessert 60 moyen 2 four 4',
    'Crème liquide 400, Œuf 4, Sucre 80, Sucre roux 40, Extrait de vanille',
    `Préchauffer le four à 100 °C.
     Chauffer la crème avec la vanille. Fouetter les jaunes avec le sucre, verser la crème chaude dessus.
     Répartir dans des plats peu profonds et cuire 50 minutes : la crème doit trembloter au centre.
     Réfrigérer au moins 3 heures, saupoudrer de sucre roux et caraméliser 2 minutes sous le gril, très près.`,
  ),
  recipe(
    'Crème caramel',
    '🍮 dessert 60 moyen 1 four,casserole 6',
    'Lait 500, Œuf 4, Sucre 150, Extrait de vanille',
    `Préchauffer le four à 160 °C. Faire un caramel avec 80 g de sucre et le verser au fond des ramequins.
     Chauffer le lait avec la vanille, le verser sur les œufs battus avec le reste du sucre.
     Remplir les ramequins et cuire 40 minutes au bain-marie.
     Réfrigérer 4 heures et démouler.`,
  ),
  recipe(
    'Panna cotta & coulis de fruits rouges',
    '🍓 dessert 20 facile 2 casserole 4',
    'Crème liquide 500, Sucre 60, Gélatine 3, Extrait de vanille, Fruits rouges surgelés 200, Sucre glace 30',
    `Ramollir la gélatine 5 minutes dans l'eau froide.
     Chauffer la crème avec le sucre et la vanille sans bouillir, ajouter la gélatine essorée.
     Répartir dans des verres et réfrigérer 4 heures.
     Mixer les fruits décongelés avec le sucre glace et napper au moment de servir.`,
  ),
  recipe(
    'Île flottante',
    '☁️ dessert 40 moyen 1 casserole 4',
    'Lait 500, Œuf 4, Sucre 120, Extrait de vanille, Amandes effilées 20',
    `Crème anglaise : chauffer le lait vanillé, le verser sur les jaunes fouettés avec 60 g de sucre, remettre à feu doux en remuant jusqu'à ce que la crème nappe la cuillère. Refroidir.
     Monter les blancs en neige avec 20 g de sucre, en faire des quenelles pochées 1 minute par face dans l'eau frémissante.
     Faire un caramel avec le reste du sucre.
     Poser les blancs sur la crème, filer de caramel et parsemer d'amandes grillées.`,
  ),
  recipe(
    'Tarte tatin',
    '🍏 dessert 75 moyen 1 four,poele 6',
    'Pomme 7, Sucre 120, Beurre 70, Pâte feuilletée 1',
    `Préchauffer le four à 200 °C.
     Faire un caramel avec sucre et beurre dans une poêle allant au four.
     Y serrer les pommes en quartiers, cuire 15 minutes à feu moyen.
     Couvrir de pâte en rentrant les bords, piquer et cuire 30 minutes.
     Laisser tiédir 10 minutes et retourner sur un plat.`,
  ),
  recipe(
    'Tarte aux fraises',
    '🍓 dessert 60 moyen 2 four,casserole 6',
    'Pâte sablée 1, Fraise 500, Lait 400, Œuf 3, Sucre 80, Maïzena 40, Extrait de vanille, Confiture 30',
    `Cuire la pâte à blanc 20 minutes à 180 °C.
     Crème pâtissière : fouetter jaunes, sucre et maïzena, verser le lait vanillé chaud, épaissir sur le feu. Refroidir.
     Garnir le fond de crème, disposer les fraises équeutées.
     Lustrer avec la confiture chauffée.`,
  ),
  recipe(
    'Charlotte aux fraises',
    '🍓 dessert 30 moyen 2 sans-cuisson 6',
    'Biscuits à la cuillère 250, Fraise 500, Mascarpone 250, Crème liquide 200, Sucre glace 70, Sucre 30',
    `Préparer un sirop avec le sucre et 15 cl d'eau, laisser refroidir.
     Monter la crème froide avec le mascarpone et le sucre glace.
     Tapisser un moule de biscuits imbibés de sirop, alterner crème et fraises coupées.
     Couvrir de biscuits, tasser et réfrigérer une nuit.`,
  ),
  recipe(
    'Far breton aux pruneaux',
    '🍮 dessert 60 facile 1 four 8',
    'Farine 200, Sucre 150, Œuf 4, Lait 750, Beurre 30, Pruneaux 200, Sel',
    `Préchauffer le four à 200 °C et beurrer généreusement un plat.
     Mélanger farine, sucre et sel, ajouter les œufs puis le lait petit à petit.
     Répartir les pruneaux, verser la pâte.
     Cuire 10 minutes à 200 °C puis 40 minutes à 180 °C.`,
  ),
  recipe(
    'Quatre-quarts',
    '🍰 dessert 55 facile 1 four 8',
    'Œuf 4, Sucre 200, Farine 200, Beurre 200, Levure chimique 0.5, Citron 1',
    `Préchauffer le four à 180 °C. Les œufs fixent le poids des autres ingrédients.
     Fouetter les œufs avec le sucre, ajouter le beurre fondu tiède et le zeste.
     Incorporer farine et levure.
     Cuire 40 minutes dans un moule à cake.`,
  ),
  recipe(
    'Marbré chocolat-vanille',
    '🍰 dessert 60 facile 1 four 8',
    'Beurre 180, Sucre 180, Œuf 4, Farine 200, Levure chimique 1, Cacao en poudre 25, Extrait de vanille',
    `Préchauffer le four à 180 °C.
     Mélanger beurre mou et sucre, ajouter les œufs, puis farine et levure.
     Partager la pâte : vanille d'un côté, cacao de l'autre.
     Alterner les deux dans le moule, tracer quelques boucles au couteau et cuire 45 minutes.`,
  ),
  recipe(
    'Cake au citron glacé',
    '🍋 dessert 60 facile 1 four 8',
    'Farine 200, Sucre 180, Œuf 3, Beurre 120, Citron 2, Levure chimique 1, Sucre glace 100',
    `Préchauffer le four à 180 °C.
     Fouetter œufs et sucre, ajouter beurre fondu, zestes et jus d'un citron, farine et levure.
     Cuire 45 minutes dans un moule à cake.
     Glaçage : sucre glace et jus du second citron, à étaler sur le cake refroidi.`,
  ),
  recipe(
    'Madeleines',
    '🐚 dessert 40 facile 1 four 6',
    'Œuf 2, Sucre 100, Farine 100, Beurre 100, Levure chimique 0.5, Citron 1, Miel 10',
    `Fouetter œufs, sucre et miel, ajouter le zeste, la farine, la levure et le beurre fondu.
     Réfrigérer la pâte 1 heure : c'est ce choc qui donne la bosse.
     Préchauffer le four à 220 °C, remplir les moules aux trois quarts.
     Cuire 4 minutes à 220 °C puis 6 minutes à 180 °C.`,
  ),
  recipe(
    'Financiers aux amandes',
    '🟨 dessert 30 facile 2 four 6',
    'Beurre 100, Poudre d\'amande 80, Sucre glace 120, Farine 40, Œuf 3',
    `Préchauffer le four à 200 °C. Faire un beurre noisette et le laisser tiédir.
     Mélanger poudre d'amande, sucre glace et farine, ajouter les blancs d'œufs non montés.
     Incorporer le beurre noisette.
     Remplir des petits moules et cuire 12 minutes.`,
  ),
  recipe(
    'Sablés au beurre',
    '🍪 dessert 40 facile 1 four 6',
    'Farine 250, Beurre 150, Sucre 100, Œuf 1, Sucre vanillé 1, Sel',
    `Sabler farine, sel et beurre froid, ajouter les sucres puis l'œuf.
     Former un boudin, le réfrigérer 30 minutes.
     Préchauffer le four à 180 °C, couper des rondelles.
     Cuire 12 minutes : les bords doivent juste dorer.`,
  ),
  recipe(
    'Pancakes banane & avoine',
    '🥞 dessert 20 facile 1 poele 2',
    'Banane 1, Œuf 2, Flocons d\'avoine 80, Lait 80, Levure chimique 0.5, Sirop d\'érable 30, Myrtille 80',
    `Mixer banane, œufs, flocons, lait et levure.
     Cuire des petites louches à la poêle légèrement huilée, 2 minutes par face.
     Servir avec le sirop d'érable et les myrtilles.`,
  ),
  recipe(
    'Compote de pommes maison',
    '🍎 dessert 30 facile 1 casserole 4',
    'Pomme 6, Sucre 30, Cannelle, Extrait de vanille',
    `Éplucher et couper les pommes en morceaux.
     Les cuire 20 minutes à couvert avec 5 cl d'eau, le sucre et la vanille.
     Écraser à la fourchette ou mixer, ajouter une pincée de cannelle.`,
  ),
  recipe(
    'Verrines fraises & mascarpone',
    '🍓 dessert 15 facile 2 sans-cuisson 4',
    'Fraise 300, Mascarpone 200, Crème liquide 100, Sucre glace 40, Spéculoos 60, Menthe 1',
    `Fouetter mascarpone, crème froide et sucre glace jusqu'à ce que ce soit ferme.
     Émietter les spéculoos au fond des verres.
     Alterner crème et fraises coupées, finir par la menthe.`,
  ),
  recipe(
    'Salade d\'agrumes à la menthe',
    '🍊 dessert 15 facile 1 sans-cuisson 4',
    'Orange 3, Clémentine 4, Kiwi 2, Menthe 1, Miel 20',
    `Peler les agrumes à vif et les couper en rondelles en récupérant le jus.
     Ajouter les kiwis en tranches.
     Mélanger le jus avec le miel, arroser les fruits et parsemer de menthe.`,
  ),
  recipe(
    'Crumble poires & chocolat',
    '🍐 dessert 45 facile 1 four 4',
    'Poire 4, Chocolat noir 60, Farine 100, Beurre 80, Sucre roux 80, Poudre d\'amande 30',
    `Préchauffer le four à 180 °C.
     Couper les poires en dés, ajouter le chocolat haché.
     Sabler farine, amande, sucre et beurre froid, couvrir les fruits.
     Cuire 30 minutes.`,
  ),
  recipe(
    'Gâteau aux carottes',
    '🥕 dessert 70 facile 2 four 8',
    'Carotte 3, Farine 200, Sucre roux 150, Œuf 3, Huile de tournesol 150, Levure chimique 1, Cannelle, Noix 60, Fromage frais 150, Sucre glace 60',
    `Préchauffer le four à 180 °C.
     Fouetter œufs, sucre et huile, ajouter farine, levure, cannelle, carottes râpées et noix.
     Cuire 45 minutes dans un moule beurré, laisser refroidir.
     Napper du fromage frais fouetté avec le sucre glace.`,
  ),
  recipe(
    'Galette des rois à la frangipane',
    '👑 dessert 60 moyen 2 four 8',
    'Pâte feuilletée 2, Poudre d\'amande 125, Beurre 100, Sucre 100, Œuf 3',
    `Préchauffer le four à 200 °C.
     Frangipane : beurre mou, sucre, poudre d'amande et 2 œufs.
     L'étaler sur une pâte en laissant 2 cm de bord, sans oublier la fève.
     Couvrir de la seconde pâte, souder les bords, dorer au jaune d'œuf et rayer le dessus.
     Cuire 30 minutes.`,
  ),
  recipe(
    'Rochers à la noix de coco',
    '🥥 dessert 30 facile 1 four 6',
    'Noix de coco râpée 200, Sucre 120, Œuf 3',
    `Préchauffer le four à 180 °C.
     Mélanger noix de coco, sucre et blancs d'œufs non montés.
     Former des petits dômes sur une plaque.
     Cuire 15 minutes : la pointe doit dorer.`,
  ),
  recipe(
    'Semoule au lait & caramel',
    '🍮 dessert 25 facile 1 casserole 4',
    'Lait 750, Semoule 80, Sucre 120, Extrait de vanille, Raisins secs 30',
    `Faire un caramel avec 60 g de sucre et en napper le fond de ramequins.
     Porter le lait vanillé à ébullition avec le reste du sucre, verser la semoule en pluie.
     Cuire 8 minutes en remuant, ajouter les raisins.
     Répartir et réfrigérer avant de démouler.`,
  ),
  recipe(
    'Crème dessert au chocolat',
    '🍫 dessert 20 facile 1 casserole 4',
    'Lait 500, Chocolat noir 100, Sucre 40, Maïzena 30, Œuf 1',
    `Délayer la maïzena dans un peu de lait froid avec le sucre et l'œuf.
     Chauffer le reste du lait avec le chocolat.
     Verser sur le mélange, remettre sur le feu et cuire jusqu'à épaississement en fouettant.
     Répartir dans des pots et réfrigérer.`,
  ),
  recipe(
    'Tarte au chocolat',
    '🍫 dessert 50 facile 2 four 8',
    'Pâte sablée 1, Chocolat noir 200, Crème liquide 200, Lait 100, Œuf 2, Sucre 30',
    `Cuire la pâte à blanc 20 minutes à 180 °C.
     Verser la crème et le lait bouillants sur le chocolat, mélanger.
     Ajouter les œufs battus avec le sucre.
     Verser sur la pâte et cuire 15 minutes à 150 °C : le centre doit rester tremblotant.`,
  ),
]
