import { recipe } from './dsl'

/** Lot 3 de desserts : desserts protéinés pour le sport, puis fruits, goûters et classiques. */
export const DESSERTS_3 = [
  // ---------------------------------------------------------------- protéinés
  recipe(
    'Overnight oats fruits rouges & yaourt grec',
    '🥣 dessert 10 facile 1 sans-cuisson 2',
    'Flocons d\'avoine 100, Yaourt grec 200, Lait 150, Fruits rouges surgelés 150, Miel 20, Graines de sésame 10',
    `Mélanger flocons, yaourt, lait et miel dans deux bocaux.
     Ajouter les fruits rouges encore surgelés par-dessus.
     Réfrigérer une nuit : les flocons gonflent et les fruits décongèlent.
     Parsemer de sésame au moment de manger.`,
  ),
  recipe(
    'Fromage blanc protéiné, banane & beurre de cacahuète',
    '🍌 dessert 5 facile 1 sans-cuisson 2',
    'Fromage blanc 400, Banane 2, Beurre de cacahuète 30, Miel 15, Flocons d\'avoine 40',
    `Répartir le fromage blanc dans deux bols.
     Ajouter la banane en rondelles et les flocons.
     Napper de beurre de cacahuète tiédi et d'un filet de miel.`,
  ),
  recipe(
    'Pancakes protéinés au fromage blanc',
    '🥞 dessert 20 facile 1 poele 2',
    'Flocons d\'avoine 80, Fromage blanc 200, Œuf 3, Banane 1, Levure chimique 0.5, Myrtille 100, Miel 15',
    `Mixer flocons, fromage blanc, œufs, banane et levure.
     Cuire des petites louches à la poêle légèrement huilée, 2 minutes par face.
     Servir avec les myrtilles et le miel.`,
  ),
  recipe(
    'Cheesecake protéiné au four',
    '🍰 dessert 60 moyen 1 four 6',
    'Fromage blanc 500, Œuf 3, Maïzena 30, Miel 60, Citron 1, Flocons d\'avoine 80, Beurre 30, Extrait de vanille',
    `Préchauffer le four à 160 °C.
     Mixer les flocons avec le beurre fondu, tasser au fond d'un moule.
     Fouetter fromage blanc, œufs, maïzena, miel, zeste de citron et vanille, verser sur le fond.
     Cuire 45 minutes, laisser refroidir dans le four entrouvert puis réfrigérer.`,
  ),
  recipe(
    'Mousse au chocolat protéinée au yaourt grec',
    '🍫 dessert 15 facile 1 casserole 4',
    'Chocolat noir 120, Yaourt grec 400, Miel 20, Cacao en poudre 10',
    `Faire fondre le chocolat et le laisser tiédir.
     L'incorporer au yaourt grec avec le miel en fouettant.
     Répartir dans des verres, réfrigérer 2 heures et saupoudrer de cacao.`,
  ),
  recipe(
    'Porridge chaud pomme-cannelle',
    '🍎 dessert 10 facile 1 casserole 2',
    'Flocons d\'avoine 100, Lait 400, Pomme 1, Cannelle, Miel 20, Noix 20, Yaourt grec 100',
    `Cuire les flocons dans le lait 5 minutes en remuant.
     Ajouter la pomme râpée et la cannelle.
     Servir avec le yaourt, le miel et les noix.`,
  ),
  recipe(
    'Muffins protéinés banane & myrtilles',
    '🧁 dessert 30 facile 1 four,airfryer 6',
    'Flocons d\'avoine 150, Banane 2, Œuf 3, Fromage blanc 150, Levure chimique 1, Myrtille 100, Miel 30',
    `Préchauffer le four à 180 °C.
     Mixer flocons, bananes, œufs, fromage blanc, levure et miel.
     Ajouter les myrtilles, répartir dans des moules.
     Cuire 20 minutes au four (14 minutes à l'airfryer à 160 °C).`,
  ),
  recipe(
    'Bowl yaourt grec, granola maison & fruits',
    '🥣 dessert 25 facile 1 four 4',
    'Yaourt grec 600, Flocons d\'avoine 120, Noisettes 40, Miel 40, Huile de tournesol 20, Fraise 200, Kiwi 2',
    `Préchauffer le four à 170 °C.
     Mélanger flocons, noisettes concassées, miel et huile, étaler sur une plaque.
     Cuire 15 minutes en remuant à mi-cuisson, laisser refroidir.
     Servir le yaourt avec le granola et les fruits.`,
  ),
  recipe(
    'Clafoutis protéiné aux cerises',
    '🍒 dessert 45 facile 1 four 4',
    'Cerise 400, Œuf 4, Fromage blanc 250, Maïzena 30, Miel 40, Extrait de vanille',
    `Préchauffer le four à 180 °C.
     Fouetter œufs, fromage blanc, maïzena, miel et vanille.
     Verser sur les cerises dans un plat.
     Cuire 35 minutes.`,
  ),
  recipe(
    'Energy balls avoine, cacahuète & chocolat',
    '⚡ dessert 15 facile 1 sans-cuisson 6',
    'Flocons d\'avoine 120, Beurre de cacahuète 100, Miel 50, Pépites de chocolat 40, Graines de sésame 15',
    `Mélanger tous les ingrédients jusqu'à obtenir une pâte qui se tient.
     Former des boules de la taille d'une noix.
     Réfrigérer 30 minutes : elles se gardent une semaine au frais.`,
  ),
  recipe(
    'Riz au lait protéiné',
    '🍚 dessert 40 facile 1 casserole 4',
    'Riz rond 100, Lait 800, Fromage blanc 200, Miel 40, Extrait de vanille, Cannelle',
    `Cuire le riz dans le lait vanillé 35 minutes à feu doux en remuant.
     Laisser tiédir et incorporer le fromage blanc et le miel.
     Servir avec une pincée de cannelle.`,
  ),
  recipe(
    'Crêpes protéinées à l\'avoine',
    '🥞 dessert 20 facile 1 poele 2',
    'Flocons d\'avoine 80, Œuf 3, Lait 200, Fromage blanc 100, Banane 1, Miel 15',
    `Mixer flocons, œufs, lait et une pincée de sel jusqu'à obtenir une pâte lisse.
     Cuire des crêpes fines dans une poêle légèrement huilée.
     Garnir de fromage blanc, banane et miel.`,
  ),

  // ---------------------------------------------------------------- fruits & légers
  recipe(
    'Fraises au mascarpone & basilic',
    '🍓 dessert 10 facile 2 sans-cuisson 4',
    'Fraise 400, Mascarpone 150, Yaourt grec 100, Sucre glace 30, Basilic 1, Citron 0.5',
    `Couper les fraises, les arroser de citron et de basilic ciselé.
     Fouetter mascarpone, yaourt et sucre glace.
     Servir les fraises sur la crème.`,
  ),
  recipe(
    'Ananas rôti à la vanille',
    '🍍 dessert 20 facile 1 poele,airfryer 4',
    'Ananas 1, Beurre 20, Sucre roux 30, Extrait de vanille, Fromage blanc 200',
    `Couper l'ananas en tranches épaisses.
     Les dorer dans le beurre et le sucre 3 minutes par face (ou 10 minutes à l'airfryer à 200 °C).
     Ajouter la vanille et servir avec le fromage blanc.`,
  ),
  recipe(
    'Poires rôties au miel & noix',
    '🍐 dessert 30 facile 1 four,airfryer 4',
    'Poire 4, Miel 30, Noix 40, Beurre 15, Yaourt grec 150, Cannelle',
    `Couper les poires en deux et retirer le cœur.
     Garnir de noix, miel, cannelle et beurre.
     Cuire 20 minutes à 190 °C au four (14 minutes à l'airfryer).
     Servir avec le yaourt.`,
  ),
  recipe(
    'Soupe de fraises à la menthe',
    '🍓 dessert 15 facile 1 sans-cuisson 4',
    'Fraise 500, Sucre 40, Citron 1, Menthe 1',
    `Mixer la moitié des fraises avec le sucre et le jus de citron.
     Couper le reste en morceaux, les ajouter au coulis.
     Réfrigérer et servir avec la menthe ciselée.`,
  ),
  recipe(
    'Brochettes de fruits & chocolat fondu',
    '🍫 dessert 15 facile 1 casserole 4',
    'Fraise 200, Banane 2, Kiwi 2, Ananas 0.5, Chocolat noir 100, Crème liquide 50',
    `Couper les fruits en morceaux et les enfiler sur des piques.
     Faire fondre le chocolat avec la crème.
     Tremper les brochettes ou les napper de chocolat.`,
  ),
  recipe(
    'Melon & pêches à la menthe',
    '🍈 dessert 10 facile 1 sans-cuisson 4',
    'Melon 1, Pêche 3, Menthe 1, Citron vert 1, Miel 15',
    `Couper le melon et les pêches en morceaux.
     Arroser de jus de citron vert et de miel.
     Parsemer de menthe et servir très frais.`,
  ),
  recipe(
    'Abricots rôtis au miel & amandes',
    '🍑 dessert 25 facile 1 four 4',
    'Abricot 10, Miel 30, Amandes effilées 30, Beurre 15, Fromage blanc 200',
    `Préchauffer le four à 190 °C.
     Couper les abricots en deux, les disposer dans un plat.
     Arroser de miel, parsemer d'amandes et de beurre.
     Cuire 15 minutes et servir tiède avec le fromage blanc.`,
  ),
  recipe(
    'Figues rôties au chèvre frais & miel',
    '🍯 dessert 20 facile 2 four,airfryer 4',
    'Figue 8, Chèvre frais 100, Miel 30, Noix 30, Thym',
    `Inciser les figues en croix, glisser du chèvre au centre.
     Arroser de miel et de thym.
     Cuire 12 minutes à 190 °C (8 minutes à l'airfryer).
     Parsemer de noix.`,
  ),
  recipe(
    'Compote pommes-rhubarbe & crumble express',
    '🌿 dessert 30 facile 1 casserole,poele 4',
    'Rhubarbe 400, Pomme 3, Sucre 80, Flocons d\'avoine 60, Beurre 30, Sucre roux 30',
    `Cuire rhubarbe et pommes en morceaux avec le sucre 15 minutes.
     Dorer à la poêle flocons, beurre et sucre roux 5 minutes en remuant.
     Servir la compote surmontée du crumble croustillant.`,
  ),
  recipe(
    'Clémentines au sirop d\'épices',
    '🍊 dessert 20 facile 1 casserole 4',
    'Clémentine 8, Sucre 80, Cannelle, Badiane, Extrait de vanille',
    `Faire un sirop avec 25 cl d'eau, le sucre et les épices, 5 minutes.
     Peler les clémentines à vif et les couper en rondelles.
     Verser le sirop tiède dessus et réfrigérer.`,
  ),

  // ---------------------------------------------------------------- goûters & gâteaux
  recipe(
    'Gâteau au chocolat à la courgette',
    '🍫 dessert 50 facile 1 four 8',
    'Courgette 1, Chocolat noir 150, Œuf 3, Sucre 100, Farine 80, Levure chimique 0.5, Cacao en poudre 20',
    `Préchauffer le four à 180 °C.
     Râper finement la courgette et la presser.
     Faire fondre le chocolat, ajouter œufs, sucre, courgette, farine, cacao et levure.
     Cuire 35 minutes : la courgette remplace le beurre et donne un gâteau très moelleux.`,
  ),
  recipe(
    'Cake marbré au yaourt',
    '🍰 dessert 55 facile 1 four 8',
    'Yaourt nature 1, Sucre 150, Farine 220, Œuf 3, Huile de tournesol 80, Levure chimique 1, Cacao en poudre 20',
    `Préchauffer le four à 180 °C.
     Mélanger yaourt, sucre, œufs, huile, farine et levure.
     Ajouter le cacao à la moitié de la pâte, alterner les deux dans le moule.
     Cuire 45 minutes.`,
  ),
  recipe(
    'Cookies à l\'avoine & raisins',
    '🍪 dessert 25 facile 1 four 6',
    'Flocons d\'avoine 120, Farine 100, Beurre 100, Sucre roux 100, Œuf 1, Raisins secs 60, Cannelle, Levure chimique 0.5',
    `Préchauffer le four à 180 °C.
     Mélanger beurre mou et sucre, ajouter l'œuf.
     Incorporer farine, flocons, levure, cannelle et raisins.
     Former des petits tas et cuire 12 minutes.`,
  ),
  recipe(
    'Brownie aux haricots rouges',
    '🍫 dessert 40 facile 1 four 8',
    'Haricots rouges 1, Chocolat noir 150, Œuf 3, Sucre roux 80, Cacao en poudre 20, Noix 50',
    `Préchauffer le four à 180 °C.
     Mixer les haricots rincés avec les œufs et le sucre.
     Ajouter le chocolat fondu, le cacao et les noix.
     Cuire 25 minutes : texture fondante, plus de protéines et de fibres qu'un brownie classique.`,
  ),
  recipe(
    'Gâteau renversé à l\'ananas',
    '🍍 dessert 55 facile 1 four 8',
    'Ananas 1, Sucre roux 60, Beurre 120, Sucre 100, Œuf 3, Farine 150, Levure chimique 1',
    `Préchauffer le four à 180 °C.
     Caraméliser le sucre roux avec 30 g de beurre au fond du moule, y disposer l'ananas en tranches.
     Mélanger le reste du beurre fondu, sucre, œufs, farine et levure, verser dessus.
     Cuire 40 minutes et démouler tiède.`,
  ),
  recipe(
    'Moelleux aux amandes & framboises',
    '🍰 dessert 40 facile 2 four 6',
    'Poudre d\'amande 100, Sucre 100, Œuf 3, Beurre 80, Farine 40, Framboise 150, Amandes effilées 20',
    `Préchauffer le four à 180 °C.
     Mélanger poudre d'amande, sucre, œufs, beurre fondu et farine.
     Verser dans un moule, enfoncer les framboises, parsemer d'amandes effilées.
     Cuire 30 minutes.`,
  ),
  recipe(
    'Crumble aux pêches & amandes',
    '🍑 dessert 40 facile 1 four,airfryer 4',
    'Pêche 5, Farine 80, Poudre d\'amande 40, Beurre 70, Sucre roux 70',
    `Préchauffer le four à 180 °C.
     Couper les pêches en quartiers dans un plat.
     Sabler farine, amande, sucre et beurre froid, couvrir les fruits.
     Cuire 30 minutes au four (20 minutes à l'airfryer à 170 °C).`,
  ),
  recipe(
    'Tarte fine aux pommes feuilletée',
    '🍏 dessert 35 facile 1 four 6',
    'Pâte feuilletée 1, Pomme 4, Sucre 40, Beurre 20, Cannelle',
    `Préchauffer le four à 200 °C.
     Étaler la pâte sur une plaque, la couvrir de pommes en lamelles très fines.
     Parsemer de sucre, cannelle et noisettes de beurre.
     Cuire 25 minutes.`,
  ),
  recipe(
    'Beignets de pommes',
    '🍎 dessert 30 moyen 1 poele 4',
    'Pomme 3, Farine 125, Œuf 1, Lait 150, Sucre 30, Levure chimique 0.5, Huile de tournesol 200, Sucre glace 20, Cannelle',
    `Fouetter farine, œuf, lait, sucre et levure en pâte épaisse.
     Couper les pommes en rondelles épaisses évidées.
     Les tremper dans la pâte et les dorer dans un bon fond d'huile chaude.
     Égoutter et saupoudrer de sucre glace à la cannelle.`,
  ),
  recipe(
    'Crêpes fines au caramel',
    '🍮 dessert 30 moyen 1 poele 4',
    'Farine 200, Œuf 3, Lait 450, Beurre 40, Sucre 120, Crème liquide 100, Sel',
    `Préparer une pâte à crêpes avec farine, œufs, lait, 20 g de sucre et le beurre fondu.
     Faire un caramel avec le reste du sucre, ajouter la crème chaude hors du feu.
     Cuire des crêpes très fines.
     Les plier en quatre et napper de caramel.`,
  ),
  recipe(
    'Mi-cuit chocolat & cœur caramel',
    '🍫 dessert 25 moyen 2 four 4',
    'Chocolat noir 120, Beurre 80, Sucre 60, Œuf 2, Farine 30, Lait concentré sucré 40',
    `Préchauffer le four à 200 °C.
     Faire fondre chocolat et beurre, ajouter sucre, œufs et farine.
     Remplir à moitié des ramequins beurrés, déposer une cuillère de lait concentré, couvrir de pâte.
     Cuire 9 minutes et démouler aussitôt.`,
  ),
  recipe(
    'Tiramisu aux fraises',
    '🍓 dessert 30 moyen 2 sans-cuisson 6',
    'Mascarpone 250, Œuf 3, Sucre 70, Biscuits à la cuillère 200, Fraise 400, Jus de fruits 200',
    `Fouetter jaunes et sucre, ajouter le mascarpone, puis les blancs montés en neige.
     Tremper rapidement les biscuits dans le jus de fruits, en tapisser un plat.
     Alterner crème et fraises coupées.
     Réfrigérer au moins 4 heures.`,
  ),
  recipe(
    'Panna cotta au chocolat',
    '🍫 dessert 20 facile 2 casserole 4',
    'Crème liquide 400, Lait 100, Chocolat noir 100, Sucre 40, Gélatine 3',
    `Ramollir la gélatine dans l'eau froide.
     Chauffer crème, lait et sucre, y fondre le chocolat hors du feu, puis la gélatine essorée.
     Répartir et réfrigérer 4 heures.`,
  ),
  recipe(
    'Mousse au citron légère',
    '🍋 dessert 20 facile 1 sans-cuisson 4',
    'Citron 2, Fromage blanc 300, Crème liquide 150, Sucre glace 60',
    `Fouetter la crème bien froide en chantilly avec le sucre glace.
     Mélanger le fromage blanc avec le zeste et le jus des citrons.
     Incorporer délicatement la chantilly.
     Réfrigérer 2 heures.`,
  ),
  recipe(
    'Crème au café',
    '☕ dessert 40 facile 1 four 4',
    'Lait 400, Café expresso 100, Œuf 3, Sucre 80',
    `Préchauffer le four à 160 °C.
     Mélanger le lait chaud et le café.
     Fouetter œufs et sucre, verser le lait dessus.
     Cuire 30 minutes en ramequins au bain-marie, puis réfrigérer.`,
  ),
  recipe(
    'Biscuits sablés au chocolat',
    '🍪 dessert 30 facile 1 four 6',
    'Farine 200, Beurre 120, Sucre 80, Cacao en poudre 25, Œuf 1, Pépites de chocolat 60',
    `Sabler farine, cacao et beurre froid, ajouter sucre et œuf.
     Incorporer les pépites, former un boudin, réfrigérer 30 minutes.
     Couper en rondelles et cuire 12 minutes à 180 °C.`,
  ),
  recipe(
    'Pain d\'épices maison',
    '🍞 dessert 70 facile 1 four 8',
    'Farine 250, Miel 250, Lait 150, Œuf 1, Sucre roux 50, Levure chimique 1, Cannelle, Gingembre en poudre, Muscade',
    `Préchauffer le four à 160 °C.
     Chauffer lait et miel, laisser tiédir.
     Mélanger farine, sucre, levure et épices, ajouter le lait au miel et l'œuf.
     Cuire 50 minutes dans un moule à cake : il est meilleur le lendemain.`,
  ),
  recipe(
    'Gâteau aux pommes moelleux',
    '🍎 dessert 50 facile 1 four 8',
    'Pomme 4, Farine 180, Sucre 120, Œuf 3, Beurre 100, Lait 80, Levure chimique 1, Cannelle',
    `Préchauffer le four à 180 °C.
     Fouetter œufs et sucre, ajouter beurre fondu, lait, farine, levure et cannelle.
     Incorporer les pommes en petits morceaux.
     Cuire 40 minutes.`,
  ),
  recipe(
    'Fondant au chocolat blanc & framboises',
    '🍫 dessert 40 facile 2 four 6',
    'Chocolat blanc 150, Beurre 100, Œuf 3, Sucre 60, Farine 60, Framboise 150',
    `Préchauffer le four à 170 °C.
     Faire fondre chocolat blanc et beurre doucement.
     Ajouter œufs, sucre et farine, puis les framboises.
     Cuire 25 minutes.`,
  ),
]
