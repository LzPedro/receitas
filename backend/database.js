const users = [
  {
    email: "arroiz",
    password: "$2b$10$gExVmWIyULQikRhB7fz50OAzmOXpYfpXiez6U.5Chga.cWGC7Ha6C",
  },
  {
    email: "predo",
    password: "$2b$10$gExVmWIyULQikRhB7fz50OAzmOXpYfpXiez6U.5Chga.cWGC7Ha6C",
  },
];

const publicPosts = [
  {
    title: "Post 1",
    content: "Post 1 is free",
  },
  {
    title: "Post 2",
    content: "Post 2 is free",
  },
];

const privatePosts = [
  {
    title: "Arroz de Mariscos para 2 pessoas",
    summary: "Arroz com camarão, lula, peixe, lagosta, e mexilhão, refogado com pimentões e cebola juliene, temperos e um leve toque de açafrão. Servidos na paellera. Rico em sabor e apresentação.",
    ingredient: `1 cebola
    2 dentes de alho
    3 colheres de sopa de Azeite
    4 tomates
    2 Pitadas de Sal
    1 embalagem de marisco (mistura)
    1 embalagem de camarão inteiro congelado
    1 chávena de arroz
    1 porção de coentros`,
    duration: "25",
    directions: `Passo 1
    Faça um refogado com o azeite a cebola e os dentes de alho bem picados. Esmague os tomates maduros sem pele e junte ao refogado. Tempere com sal. Deixe "namorar" durante alguns minutos.
     
    Passo 2
    Deixe a descongelar a embalagem de cocktail de marisco e delícias do mar, retire-as também do congelador e ponha-as de parte.
     
    Passo 3
    Junte os mariscos (as delícias ficam para mais tarde) ao refogado e mexa. Com o lume brando, tape o tacho e deixe "namorar" durante 15 minutos. 
     
    Passo 4
    Junte água a tapar esta mistura e assim que ferver deite o arroz e mexa. 
    Quando retomar a fervura, deixe cozer tapado durante 10 minutos, vá mexendo para não pegar.
     
    Passo 5
    Apague o lume, junte as delícias cortadas em cubinhos e polvilhe com coentros picados. Sirva de seguida.
     
    Passo 6
    Depois temos o Arroz de Marisco Tradicional que leva todo o tipo marisco, desde sapateira, lagosta, mexilhões e etc.
    `,
  },
  {
    title: "Moqueca Tropical",
    summary: "Escolha entre Camarão ou Peixe ou a combinação dos dois | De origem indígena. A moqueca é um cozido de peixe ou camarão ou com mistura de peixe e camarão com tomate, cebola, pimentões e cheiro-verde refogados. Leve toque de azeite de dendê e leite de coco natural. Na versão tropical, acrescentamos manga e abacaxi. Acompanha arroz branco, pirão de camarão e farofa de dendê.",
    ingredient: `2 kg de robalo cortado em postas com couro
    4 cebolas grandes
    1 cabeça de alho
    4 tomates grandes
    Farinha de mandioca
    100ml de azeite de dendê
    2 pimentões vermelhos
    Sal (à gosto)
    Pimenta do reino a gosto
    Espinhas e cabeça do robalo
    4 bananas em fatias
    1kg de camarão descascado`,
    duration: "40",
    directions: `Passo 1
    Prepare o caldo de peixe com as espinhas e cabeça.
     
    Passo 2
    Acrescente cebola, pimentão, tomate, alho, sal e pimenta ao caldo até apurar.
     
    Passo 3
    Coloque as bananas por baixo da terrine, intercale com o molho e o peixe.
     
    Passo 4
    Tempere com sal e pimenta.
     
    Passo 5
    Cubra com o molho já com o camarão.
     
    Passo 6
    Leve ao forno por 20 minutos.    
    `,
  },
];

module.exports = { users, publicPosts, privatePosts };
