const receitas = [
    {
      nome: "Lasanha de Frango",
      categoria: "Prato Principal",
      image: "",
      ingredientes: [
        "500g de peito de frango cozido e desfiado",
        "1 pacote de massa de lasanha",
        "2 xícaras de molho de tomate",
        "2 xícaras de queijo muçarela ralado",
        "1 xícara de queijo parmesão ralado",
        "1 cebola picada",
        "2 dentes de alho picados",
        "1 colher de sopa de azeite de oliva",
        "Sal e pimenta a gosto",
      ],
      preparo: [
        "Em uma panela, aqueça o azeite e refogue a cebola e o alho até dourarem.",
        "Adicione o frango desfiado e refogue por mais alguns minutos.",
        "Acrescente o molho de tomate e tempere com sal e pimenta a gosto. Deixe ferver.",
        "Em uma travessa, intercale camadas de massa de lasanha, frango, queijo muçarela e queijo parmesão.",
        "Repita as camadas até acabarem os ingredientes, terminando com queijo por cima.",
        "Leve ao forno preaquecido a 180°C por 30-35 minutos, ou até que a lasanha esteja dourada e borbulhante.",
        "Sirva quente."
      ]
    },
    {
      nome: "Salada de Quinoa",
      categoria: "Salada",
      ingredientes: [
        "1 xícara de quinoa",
        "2 xícaras de água",
        "1 pepino picado",
        "1 pimentão vermelho picado",
        "1 cenoura ralada",
        "1/2 xícara de azeitonas pretas",
        "1/4 de xícara de salsinha picada",
        "Suco de 1 limão",
        "2 colheres de sopa de azeite de oliva",
        "Sal e pimenta a gosto",
      ],
      preparo: [
        "Enxágue a quinoa em água corrente e escorra.",
        "Em uma panela, leve a quinoa e a água para ferver. Reduza o fogo, tampe e cozinhe por 15 minutos, ou até que a quinoa esteja macia e a água tenha sido absorvida.",
        "Deixe a quinoa esfriar.",
        "Em uma tigela grande, misture a quinoa cozida, o pepino, o pimentão, a cenoura, as azeitonas e a salsinha.",
        "Em uma tigela pequena, prepare o molho misturando o suco de limão, o azeite de oliva, o sal e a pimenta.",
        "Regue a salada com o molho e misture bem.",
        "Sirva fria como acompanhamento ou prato principal."
      ]
    },
    {
      nome: "Sopa de Tomate",
      categoria: "Sopa",
      ingredientes: [
        "1 kg de tomates maduros",
        "1 cebola picada",
        "2 dentes de alho picados",
        "2 colheres de sopa de azeite de oliva",
        "1 litro de caldo de legumes",
        "1 colher de chá de açúcar",
        "Sal e pimenta a gosto",
        "Folhas de manjericão para decorar",
      ],
      preparo: [
        "Faça um corte em X na base dos tomates e mergulhe-os em água fervente por alguns segundos. Em seguida, retire a pele e pique os tomates.",
        "Em uma panela grande, aqueça o azeite e refogue a cebola e o alho até dourarem.",
        "Adicione os tomates picados, o açúcar, o caldo de legumes, o sal e a pimenta. Deixe ferver e depois reduza o fogo. Cozinhe por 20 minutos.",
        "Use um liquidificador ou mixer de mão para triturar a sopa até ficar homogênea.",
        "Sirva quente, decorada com folhas de manjericão."
      ]
    },
    {
      nome: "Panquecas de Blueberry",
      categoria: "Café da Manhã",
      ingredientes: [
        "1 xícara de farinha de trigo",
        "2 colheres de sopa de açúcar",
        "1 colher de chá de fermento em pó",
        "1/2 colher de chá de bicarbonato de sódio",
        "1/4 de colher de chá de sal",
        "1 ovo",
        "1 xícara de leite",
        "2 colheres de sopa de manteiga derretida",
        "1 xícara de blueberries frescos",
      ],
      preparo: [
        "Em uma tigela grande, misture a farinha de trigo, o açúcar, o fermento, o bicarbonato de sódio e o sal.",
        "Em outra tigela, bata o ovo e misture com o leite e a manteiga derretida.",
        "Despeje os ingredientes líquidos sobre os ingredientes secos e misture até obter uma massa homogênea.",
        "Aqueça uma frigideira antiaderente em fogo médio e unte com um pouco de manteiga.",
        "Despeje porções de massa na frigideira e coloque blueberries por cima.",
        "Cozinhe até que bolhas apareçam na superfície das panquecas e vire para dourar o outro lado.",
        "Sirva quente com xarope de bordo ou mel."
      ]
    },
    {
      nome: "Risoto de Cogumelos",
      categoria: "Prato Principal",
      ingredientes: [
        "1 xícara de arroz arbóreo",
        "200g de cogumelos frescos, fatiados",
        "1 cebola picada",
        "2 dentes de alho picados",
        "1/2 xícara de vinho branco",
        "4 xícaras de caldo de legumes quente",
        "2 colheres de sopa de manteiga",
        "1/2 xícara de queijo parmesão ralado",
        "Sal e pimenta a gosto",
      ],
      preparo: [
        "Em uma panela, aqueça a manteiga e refogue a cebola e o alho até ficarem macios.",
        "Adicione os cogumelos e cozinhe até que fiquem dourados e liberem líquido.",
        "Acrescente o arroz arbóreo e mexa por alguns minutos até que fique transparente.",
        "Despeje o vinho branco e mexa até que seja absorvido pelo arroz.",
        "Adicione o caldo de legumes aos poucos, mexendo constantemente e esperando que seja absorvido antes de adicionar mais.",
        "Continue adicionando caldo e mexendo até que o arroz esteja cozido al dente e o risoto esteja cremoso.",
        "Tempere com sal e pimenta a gosto e misture o queijo parmesão ralado.",
        "Sirva imediatamente."
      ]
    },
    {
      nome: "Frango à Parmegiana",
      categoria: "Prato Principal",
      ingredientes: [
        "4 peitos de frango",
        "Sal e pimenta a gosto",
        "1 xícara de farinha de trigo",
        "2 ovos batidos",
        "2 xícaras de migalhas de pão",
        "2 xícaras de molho de tomate",
        "1 xícara de queijo muçarela ralado",
        "1/2 xícara de queijo parmesão ralado",
        "Óleo para fritar",
      ],
      preparo: [
        "Tempere os peitos de frango com sal e pimenta.",
        "Passe cada peito de frango na farinha de trigo, depois nos ovos batidos e por último nas migalhas de pão, pressionando para aderir bem.",
        "Aqueça o óleo em uma frigideira grande e frite os peitos de frango até que fiquem dourados e cozidos por dentro. Escorra em papel toalha.",
        "Pré-aqueça o forno a 180°C.",
        "Em uma assadeira, coloque metade do molho de tomate e coloque os peitos de frango fritos por cima.",
        "Cubra os peitos de frango com o restante do molho de tomate, o queijo muçarela e o queijo parmesão.",
        "Asse no forno por cerca de 20 minutos, ou até que o queijo esteja derretido e borbulhante.",
        "Sirva quente, acompanhado de macarrão ou arroz."
      ]
    },
    {
      nome: "Guacamole",
      categoria: "Aperitivo",
      ingredientes: [
        "2 abacates maduros",
        "1 tomate picado",
        "1/2 cebola roxa picada",
        "1/4 de xícara de coentro fresco picado",
        "Suco de 1 limão",
        "1 dente de alho picado",
        "1 pimenta jalapeño picada (opcional)",
        "Sal e pimenta a gosto",
      ],
      preparo: [
        "Corte os abacates ao meio, retire o caroço e coloque a polpa em uma tigela.",
        "Amasse os abacates com um garfo até obter uma consistência de purê.",
        "Adicione o tomate picado, a cebola roxa, o coentro, o suco de limão, o alho e a pimenta jalapeño (se estiver usando).",
        "Misture bem todos os ingredientes e tempere com sal e pimenta a gosto.",
        "Sirva com nachos, tacos ou como acompanhamento para outros pratos mexicanos."
      ]
    },
    {
      nome: "Pudim de Leite Condensado",
      categoria: "Sobremesa",
      ingredientes: [
        "1 lata de leite condensado",
        "2 latas de leite (use a lata de leite condensado vazia como medida)",
        "4 ovos",
        "1 colher de chá de essência de baunilha",
        "1 xícara de açúcar",
      ],
      preparo: [
        "Pré-aqueça o forno a 180°C e prepare uma forma de pudim caramelizada (com calda de açúcar no fundo).",
        "No liquidificador, coloque o leite condensado, o leite, os ovos e a essência de baunilha. Bata até que todos os ingredientes estejam bem misturados.",
        "Despeje a mistura na forma caramelizada.",
        "Cubra a forma com papel alumínio e leve ao forno em banho-maria por aproximadamente 1 hora, ou até que o pudim esteja firme.",
        "Deixe esfriar e leve à geladeira por algumas horas antes de desenformar.",
        "Sirva gelado."
      ]
    },
    {
      nome: "Frango ao Curry",
      categoria: "Prato Principal",
      ingredientes: [
        "4 peitos de frango cortados em cubos",
        "2 colheres de sopa de óleo de coco",
        "1 cebola picada",
        "2 dentes de alho picados",
        "2 colheres de sopa de curry em pó",
        "1 lata de leite de coco",
        "1 lata de tomate pelado picado",
        "Sal e pimenta a gosto",
        "Coentro fresco picado para decorar",
      ],
      preparo: [
        "Aqueça o óleo de coco em uma panela grande e refogue a cebola e o alho até dourarem.",
        "Adicione o curry em pó e mexa por mais 1 minuto.",
        "Acrescente o frango e cozinhe até que esteja dourado por todos os lados.",
        "Adicione o leite de coco e o tomate pelado. Tempere com sal e pimenta a gosto.",
        "Deixe a mistura ferver e depois reduza o fogo. Cozinhe por cerca de 20 minutos, ou até que o frango esteja cozido e o molho esteja espesso.",
        "Sirva quente, decorado com coentro fresco, acompanhado de arroz ou pão naan."
      ]
    },
    {
      nome: "Molho Pesto",
      categoria: "Molho",
      ingredientes: [
        "2 xícaras de folhas de manjericão fresco",
        "1/2 xícara de queijo parmesão ralado",
        "1/2 xícara de nozes ou pinhões",
        "2 dentes de alho",
        "1/2 xícara de azeite de oliva",
        "Sal e pimenta a gosto",
      ],
      preparo: [
        "Em um processador de alimentos, coloque as folhas de manjericão, o queijo parmesão, as nozes ou pinhões e o alho. Pulse até que todos os ingredientes estejam bem picados.",
        "Com o processador ligado, adicione o azeite de oliva em fio até que o molho fique homogêneo e com a consistência desejada.",
        "Tempere com sal e pimenta a gosto e misture bem.",
        "Use o molho pesto para acompanhar massas, saladas ou como cobertura para bruschettas."
      ]
    },
    {
      nome: "Salada de Frutas",
      categoria: "Sobremesa",
      ingredientes: [
        "1 maçã, cortada em cubos",
        "1 banana, cortada em rodelas",
        "1 laranja, descascada e cortada em gomos",
        "1 xícara de uvas, cortadas ao meio",
        "1/2 xícara de morangos, cortados ao meio",
        "1/2 xícara de abacaxi, cortado em cubos",
        "Suco de 1 limão",
        "2 colheres de sopa de mel",
        "Menta fresca para decorar",
      ],
      preparo: [
        "Em uma tigela grande, coloque todos os ingredientes das frutas.",
        "Regue as frutas com suco de limão e mel. Misture delicadamente para combinar os sabores.",
        "Decore com folhas de menta fresca.",
        "Sirva a salada de frutas gelada."
      ]
    },
    {
      nome: "Macarrão Carbonara",
      categoria: "Prato Principal",
      ingredientes: [
        "350g de macarrão (como espaguete ou fettuccine)",
        "200g de bacon ou pancetta, cortado em cubos",
        "2 ovos",
        "1 xícara de queijo parmesão ralado",
        "2 dentes de alho picados",
        "Sal e pimenta a gosto",
        "Salsinha fresca picada para decorar",
      ],
      preparo: [
        "Cozinhe o macarrão em água salgada de acordo com as instruções da embalagem até ficar al dente. Escorra e reserve uma xícara da água do cozimento.",
        "Em uma frigideira grande, frite o bacon ou pancetta até que fique crocante. Retire o excesso de gordura, deixando apenas uma colher na frigideira.",
        "Adicione o alho à frigideira e refogue por alguns minutos até ficar perfumado.",
        "Em uma tigela, bata os ovos e misture o queijo parmesão. Tempere com pimenta.",
        "Misture o macarrão cozido na frigideira com o bacon e o alho. Desligue o fogo.",
        "Rapidamente, adicione a mistura de ovos e queijo ao macarrão, mexendo vigorosamente para evitar que os ovos cozinhem demais e virem um omelete.",
        "Se necessário, adicione um pouco da água do cozimento reservada para obter uma consistência cremosa.",
        "Sirva o macarrão carbonara decorado com salsinha fresca e mais queijo parmesão ralado."
      ]
    },
    {
      nome: "Salmão Grelhado com Molho de Mostarda e Mel",
      categoria: "Prato Principal",
      ingredientes: [
        "4 filés de salmão",
        "Sal e pimenta a gosto",
        "2 colheres de sopa de azeite de oliva",
        "2 colheres de sopa de mostarda",
        "2 colheres de sopa de mel",
        "Suco de 1 limão",
        "1 colher de chá de alho picado",
      ],
      preparo: [
        "Tempere os filés de salmão com sal e pimenta a gosto.",
        "Em uma tigela pequena, misture o azeite de oliva, a mostarda, o mel, o suco de limão e o alho picado.",
        "Aqueça uma grelha ou frigideira antiaderente em fogo médio-alto.",
        "Grelhe o salmão por cerca de 4-5 minutos de cada lado, ou até que esteja cozido no centro.",
        "Regue os filés de salmão com o molho de mostarda e mel antes de servir."
      ]
    },
    {
      nome: "Ratatouille",
      categoria: "Prato Principal",
      ingredientes: [
        "1 berinjela, cortada em rodelas",
        "2 abobrinhas, cortadas em rodelas",
        "1 pimentão vermelho, cortado em tiras",
        "1 pimentão amarelo, cortado em tiras",
        "2 tomates, cortados em rodelas",
        "1 cebola roxa, cortada em rodelas",
        "2 dentes de alho picados",
        "4 colheres de sopa de azeite de oliva",
        "1 colher de sopa de tomilho fresco",
        "Sal e pimenta a gosto",
      ],
      preparo: [
        "Pré-aqueça o forno a 180°C.",
        "Em uma assadeira grande, coloque as rodelas de berinjela, abobrinha, pimentões, tomates, cebola e alho.",
        "Regue com o azeite de oliva, tempere com sal, pimenta e tomilho fresco.",
        "Misture os vegetais para garantir que fiquem bem revestidos com o azeite e temperos.",
        "Asse no forno por cerca de 45 minutos, ou até que os vegetais estejam macios e dourados.",
        "Sirva como acompanhamento ou como prato principal, acompanhado de arroz ou pão."
      ]
    },
    {
      nome: "Mousse de Chocolate",
      categoria: "Sobremesa",
      ingredientes: [
        "200g de chocolate meio amargo",
        "4 ovos",
        "1/4 de xícara de açúcar",
        "1 colher de chá de extrato de baunilha",
        "1 pitada de sal",
        "1/2 xícara de creme de leite fresco",
      ],
      preparo: [
        "Derreta o chocolate em banho-maria ou no micro-ondas, mexendo até ficar completamente derretido e liso. Reserve para esfriar um pouco.",
        "Separe as gemas das claras dos ovos.",
        "Em uma tigela grande, bata as gemas com o açúcar até obter uma mistura cremosa e clara.",
        "Adicione o chocolate derretido e o extrato de baunilha à mistura de gemas e açúcar. Misture bem.",
        "Em outra tigela, bata as claras dos ovos com uma pitada de sal até que fiquem em picos firmes.",
        "Na tigela com o chocolate e gemas, dobre delicadamente as claras em neve até que a mistura esteja homogênea.",
        "Em outra tigela, bata o creme de leite fresco até obter picos firmes.",
        "Incorpore o creme de leite batido à mistura de chocolate e claras em neve, misturando delicadamente.",
        "Divida a mousse em taças individuais e leve à geladeira por pelo menos 4 horas, ou até que esteja firme.",
        "Sirva gelado, decorado com raspas de chocolate ou chantilly, se desejar."
      ]
    },
    {
      nome: "Tacos de Carne Moída",
      categoria: "Prato Principal",
      ingredientes: [
        "500g de carne moída",
        "1 cebola picada",
        "2 dentes de alho picados",
        "1 pimentão verde picado",
        "1 colher de sopa de cominho em pó",
        "1 colher de sopa de páprica",
        "1 colher de chá de pimenta em pó (opcional, para mais picante)",
        "Sal e pimenta a gosto",
        "8 tortilhas de milho",
        "Ingredientes para a montagem: alface picada, tomate picado, queijo cheddar ralado, creme de leite, guacamole",
      ],
      preparo: [
        "Em uma frigideira grande, aqueça um pouco de óleo e refogue a cebola e o alho até ficarem dourados.",
        "Adicione a carne moída e cozinhe até que esteja completamente dourada e cozida.",
        "Tempere a carne com o cominho, a páprica, a pimenta em pó (se estiver usando), sal e pimenta a gosto. Misture bem.",
        "Em outra frigideira ou no forno, aqueça as tortilhas até que fiquem levemente douradas.",
        "Monte os tacos colocando uma porção da carne moída temperada em cada tortilha.",
        "Adicione alface picada, tomate picado, queijo cheddar ralado e creme de leite a gosto.",
        "Sirva os tacos de carne moída com guacamole."
      ]
    },
    {
      nome: "Sorvete de Baunilha",
      categoria: "Sobremesa",
      ingredientes: [
        "2 xícaras de creme de leite fresco",
        "1 xícara de leite",
        "1/2 xícara de açúcar",
        "2 colheres de chá de extrato de baunilha",
      ],
      preparo: [
        "Em uma tigela, misture o creme de leite fresco, o leite, o açúcar e o extrato de baunilha até que o açúcar esteja completamente dissolvido.",
        "Despeje a mistura em uma máquina de sorvete e siga as instruções do fabricante para fazer o sorvete.",
        "Se você não tiver uma máquina de sorvete, despeje a mistura em um recipiente hermético e leve ao congelador.",
        "A cada 30 minutos, mexa o sorvete com um garfo para evitar a formação de cristais de gelo, até que o sorvete esteja firme e cremoso.",
        "Sirva o sorvete de baunilha sozinho ou com suas coberturas favoritas."
      ]
    },
    {
      nome: "Torta de Maçã",
      categoria: "Sobremesa",
      ingredientes: [
        "Massa:",
        "2 1/2 xícaras de farinha de trigo",
        "1 colher de chá de sal",
        "1 colher de chá de açúcar",
        "1 xícara de manteiga gelada, cortada em cubos",
        "6-8 colheres de sopa de água gelada",
        "Recheio:",
        "6 maçãs descascadas, sem sementes e cortadas em fatias finas",
        "1/2 xícara de açúcar",
        "1 colher de chá de canela em pó",
        "1/4 de colher de chá de noz-moscada",
        "1 colher de sopa de suco de limão",
        "2 colheres de sopa de manteiga",
        "2 colheres de sopa de farinha de trigo",
      ],
      preparo: [
        "Para a massa, em uma tigela grande, misture a farinha de trigo, o sal e o açúcar.",
        "Adicione a manteiga gelada e misture com um cortador de massa ou os dedos até a mistura se assemelhar a migalhas grossas.",
        "Adicione a água gelada, uma colher de sopa de cada vez, misturando até que a massa se una.",
        "Divida a massa em duas partes, forme dois discos e embrulhe em filme plástico. Leve à geladeira por pelo menos 1 hora.",
        "Pré-aqueça o forno a 200°C.",
        "Para o recheio, em uma tigela grande, misture as maçãs fatiadas, o açúcar, a canela, a noz-moscada e o suco de limão.",
        "Em uma panela, derreta a manteiga e misture a farinha de trigo até formar uma pasta.",
        "Adicione a pasta de manteiga e farinha às maçãs e misture bem.",
        "Abra um dos discos de massa em uma superfície enfarinhada e forre uma forma de torta.",
        "Despeje o recheio de maçã na massa.",
        "Abra o segundo disco de massa e cubra a torta, selando as bordas. Faça cortes na parte superior para ventilação.",
        "Asse no forno pré-aquecido por cerca de 45 minutos, ou até que a massa esteja dourada e o recheio esteja borbulhante.",
        "Deixe esfriar antes de servir."
      ]
    },
    {
      nome: "Frango à Cordon Bleu",
      categoria: "Prato Principal",
      ingredientes: [
        "4 peitos de frango",
        "Sal e pimenta a gosto",
        "4 fatias de presunto",
        "4 fatias de queijo suíço",
        "1 xícara de farinha de trigo",
        "2 ovos batidos",
        "1 xícara de migalhas de pão",
        "2 colheres de sopa de manteiga",
      ],
      preparo: [
        "Tempere os peitos de frango com sal e pimenta.",
        "Coloque uma fatia de presunto e uma fatia de queijo suíço sobre cada peito de frango.",
        "Dobre os peitos de frango ao meio para cobrir o presunto e o queijo, prendendo com palitos de dente, se necessário.",
        "Passe cada peito de frango na farinha de trigo, nos ovos batidos e, por fim, nas migalhas de pão, pressionando para aderir bem.",
        "Aqueça a manteiga em uma frigideira grande e doure os peitos de frango em fogo médio-alto por cerca de 5 minutos de cada lado, ou até que fiquem dourados e cozidos por dentro.",
        "Sirva quente."
      ]
    },
    {
        nome: "Omelete de Legumes",
        categoria: "Café da Manhã",
        ingredientes: [
          "2 ovos",
          "1/4 de xícara de pimentão vermelho picado",
          "1/4 de xícara de abobrinha picada",
          "1/4 de xícara de espinafre picado",
          "Sal e pimenta a gosto",
        ],
        preparo: [
          "Bata os ovos em uma tigela e tempere com sal e pimenta.",
          "Aqueça uma frigideira antiaderente e adicione os vegetais picados.",
          "Despeje os ovos batidos sobre os vegetais e cozinhe até que a omelete esteja firme.",
          "Dobre ao meio e sirva.",
        ],
      },
      {
        nome: "Salada de Quinoa e Legumes",
        categoria: "Almoço",
        ingredientes: [
          "1 xícara de quinoa",
          "2 xícaras de água",
          "1 pepino picado",
          "1 tomate picado",
          "1/2 xícara de cenoura ralada",
          "1/4 de xícara de coentro picado",
          "Suco de 1 limão",
          "2 colheres de sopa de azeite de oliva",
          "Sal e pimenta a gosto",
        ],
        preparo: [
          "Enxágue a quinoa em água corrente e escorra.",
          "Em uma panela, leve a quinoa e a água para ferver. Reduza o fogo, tampe e cozinhe por 15 minutos, ou até que a quinoa esteja macia e a água tenha sido absorvida.",
          "Deixe a quinoa esfriar.",
          "Em uma tigela grande, misture a quinoa cozida, o pepino, o tomate, a cenoura e o coentro.",
          "Em uma tigela pequena, prepare o molho misturando o suco de limão, o azeite de oliva, o sal e a pimenta.",
          "Regue a salada com o molho e misture bem. Sirva fria.",
        ],
      },
      {
        nome: "Salmão Grelhado com Espinafre",
        categoria: "Jantar",
        ingredientes: [
          "4 filés de salmão",
          "Sal e pimenta a gosto",
          "Suco de 1 limão",
          "2 colheres de sopa de azeite de oliva",
          "4 xícaras de espinafre fresco",
        ],
        preparo: [
          "Tempere os filés de salmão com sal, pimenta e suco de limão.",
          "Aqueça o azeite de oliva em uma frigideira grande e grelhe o salmão por cerca de 4-5 minutos de cada lado, ou até que esteja cozido no centro.",
          "Enquanto o salmão grelha, refogue o espinafre em uma panela separada até que murche.",
          "Sirva o salmão grelhado sobre o espinafre refogado.",
        ],
      },
      {
        nome: "Frango Grelhado com Brócolis",
        categoria: "Jantar",
        ingredientes: [
          "4 peitos de frango",
          "Sal e pimenta a gosto",
          "Suco de 1 limão",
          "2 colheres de sopa de azeite de oliva",
          "4 xícaras de floretes de brócolis",
        ],
        preparo: [
          "Tempere os peitos de frango com sal, pimenta e suco de limão.",
          "Aqueça o azeite de oliva em uma grelha e grelhe o frango por cerca de 6-7 minutos de cada lado, ou até que esteja cozido por dentro.",
          "Cozinhe os floretes de brócolis a vapor até que fiquem macios, cerca de 5 minutos.",
          "Sirva o frango grelhado com os floretes de brócolis cozidos.",
        ],
      },
      {
        nome: "Muffins de Banana e Aveia",
        categoria: "Lanche",
        ingredientes: [
          "2 bananas maduras esmagadas",
          "2 ovos",
          "1/4 de xícara de óleo de coco derretido",
          "1/4 de xícara de mel",
          "1 colher de chá de essência de baunilha",
          "1 1/2 xícaras de aveia em flocos",
          "1 colher de chá de fermento em pó",
          "1/2 colher de chá de bicarbonato de sódio",
          "Uma pitada de sal",
          "1/2 xícara de nozes picadas (opcional)",
        ],
        preparo: [
          "Pré-aqueça o forno a 180°C e prepare uma forma de muffins com forminhas de papel.",
          "Em uma tigela grande, misture as bananas esmagadas, os ovos, o óleo de coco, o mel e a essência de baunilha.",
          "Adicione a aveia em flocos, o fermento em pó, o bicarbonato de sódio e o sal. Misture até que todos os ingredientes estejam combinados.",
          "Se desejar, adicione as nozes picadas e misture.",
          "Divida a massa entre as forminhas de muffins.",
          "Asse no forno pré-aquecido por 20-25 minutos, ou até que os muffins estejam dourados e um palito inserido no centro saia limpo.",
          "Deixe esfriar antes de servir.",
        ],
      },
      {
        nome: "Tigela de Abacate e Salmão",
        categoria: "Almoço",
        ingredientes: [
          "2 abacates maduros",
          "200g de salmão defumado",
          "1/2 cebola roxa picada",
          "Suco de 1 limão",
          "Sal e pimenta a gosto",
          "Salsa fresca picada para decorar",
        ],
        preparo: [
          "Corte os abacates ao meio, retire o caroço e coloque a polpa em uma tigela.",
          "Adicione o salmão defumado picado e a cebola roxa picada.",
          "Regue com o suco de limão e tempere com sal e pimenta a gosto.",
          "Misture bem todos os ingredientes.",
          "Decore com salsa fresca picada antes de servir.",
        ],
      },
      {
        nome: "Tacos de Frango com Abacate",
        categoria: "Jantar",
        ingredientes: [
          "2 peitos de frango desossados e sem pele",
          "1 colher de chá de páprica",
          "1/2 colher de chá de cominho em pó",
          "Sal e pimenta a gosto",
          "2 colheres de sopa de azeite de oliva",
          "8 tortilhas de milho",
          "1 abacate maduro, cortado em fatias",
          "1 xícara de repolho roxo picado",
          "1/2 xícara de iogurte grego",
          "Suco de 1 limão",
        ],
        preparo: [
          "Corte os peitos de frango em tiras finas e tempere com páprica, cominho, sal e pimenta.",
          "Aqueça o azeite de oliva em uma frigideira e cozinhe o frango até que esteja cozido por completo.",
          "Enquanto isso, aqueça as tortilhas em uma frigideira ou no forno.",
          "Em uma tigela, misture o repolho picado, o iogurte grego e o suco de limão para fazer um molho.",
          "Monte os tacos colocando o frango grelhado, fatias de abacate e o molho de repolho nas tortilhas aquecidas.",
          "Sirva imediatamente.",
        ],
      },
      {
        nome: "Sopa de Lentilha",
        categoria: "Almoço",
        ingredientes: [
          "1 xícara de lentilhas secas",
          "1 cenoura, cortada em rodelas",
          "1 cebola picada",
          "2 dentes de alho picados",
          "1 folha de louro",
          "1 colher de chá de cominho em pó",
          "1 colher de chá de açafrão em pó",
          "4 xícaras de caldo de legumes",
          "Sal e pimenta a gosto",
        ],
        preparo: [
          "Enxágue as lentilhas em água corrente e escorra.",
          "Em uma panela grande, aqueça um pouco de azeite e refogue a cebola, o alho, a cenoura e a folha de louro até que os vegetais estejam macios.",
          "Adicione o cominho em pó e o açafrão em pó e refogue por mais 1 minuto.",
          "Acrescente as lentilhas e o caldo de legumes à panela.",
          "Tempere com sal e pimenta a gosto.",
          "Cozinhe em fogo médio por cerca de 25-30 minutos, ou até que as lentilhas estejam macias.",
          "Remova a folha de louro antes de servir.",
        ],
      },
      {
        nome: "Mingau de Aveia com Banana",
        categoria: "Café da Manhã",
        ingredientes: [
          "1 xícara de aveia em flocos",
          "2 xícaras de leite (pode ser leite vegetal)",
          "1 banana madura, amassada",
          "1 colher de sopa de mel",
          "1/2 colher de chá de canela em pó",
          "Banana em rodelas para decorar",
        ],
        preparo: [
          "Em uma panela, misture a aveia e o leite.",
          "Leve ao fogo médio e cozinhe, mexendo ocasionalmente, até que a aveia esteja cozida e o mingau esteja espesso.",
          "Adicione a banana amassada, o mel e a canela. Mexa bem para incorporar.",
          "Sirva quente, decorado com rodelas de banana.",
        ],
      },
      {
        nome: "Salmão Assado com Brócolis",
        categoria: "Jantar",
        ingredientes: [
          "4 filés de salmão",
          "Sal e pimenta a gosto",
          "2 colheres de sopa de azeite de oliva",
          "Suco de 1 limão",
          "4 xícaras de brócolis",
        ],
        preparo: [
          "Pré-aqueça o forno a 200°C e forre uma assadeira com papel alumínio.",
          "Tempere os filés de salmão com sal, pimenta, azeite de oliva e suco de limão.",
          "Disponha os filés de salmão e os floretes de brócolis na assadeira preparada.",
          "Asse no forno pré-aquecido por cerca de 15-20 minutos, ou até que o salmão esteja cozido e o brócolis esteja macio.",
          "Sirva imediatamente.",
        ],
      },
      {
        nome: "Tigela de Açaí com Frutas",
        categoria: "Lanche",
        ingredientes: [
          "2 xícaras de polpa de açaí congelada",
          "1 banana madura",
          "1/2 xícara de morangos congelados",
          "Granola a gosto",
          "Frutas frescas (ex: morangos, banana, blueberries) para decorar",
          "Mel ou xarope de bordo a gosto (opcional)",
        ],
        preparo: [
          "No liquidificador, combine a polpa de açaí congelada, a banana e os morangos congelados. Bata até obter uma mistura homogênea e cremosa.",
          "Despeje a mistura em uma tigela.",
          "Decore com granola, frutas frescas e, se desejar, um fio de mel ou xarope de bordo.",
          "Sirva imediatamente.",
        ],
      },
      {
        nome: "Frango ao Curry com Legumes",
        categoria: "Almoço",
        ingredientes: [
          "2 peitos de frango, cortados em cubos",
          "1 cebola picada",
          "2 dentes de alho picados",
          "1 colher de sopa de curry em pó",
          "1 xícara de leite de coco",
          "1 xícara de brócolis",
          "1 cenoura, cortada em rodelas finas",
          "Sal e pimenta a gosto",
          "Arroz cozido para servir",
        ],
        preparo: [
          "Em uma panela grande, aqueça um pouco de óleo e refogue a cebola e o alho até que estejam dourados.",
          "Adicione o frango e cozinhe até que esteja dourado por todos os lados.",
          "Misture o curry em pó e cozinhe por mais 1 minuto.",
          "Despeje o leite de coco na panela e deixe ferver.",
          "Adicione o brócolis e a cenoura, e cozinhe até que os vegetais estejam macios.",
          "Tempere com sal e pimenta a gosto.",
          "Sirva sobre arroz cozido.",
        ],
      },
      {
        nome: "Smoothie de Espinafre e Abacate",
        categoria: "Lanche",
        ingredientes: [
          "1 xícara de espinafre fresco",
          "1/2 abacate maduro",
          "1 banana",
          "1/2 xícara de leite (pode ser leite vegetal)",
          "1 colher de sopa de mel (opcional)",
          "Gelo a gosto",
        ],
        preparo: [
          "Coloque todos os ingredientes no liquidificador.",
          "Bata até obter uma mistura suave e cremosa.",
          "Sirva imediatamente.",
        ],
      },
  ];
  


  export default receitas