// Els enunciats i les notes gramaticals dels exercicis de l'A1 en castellà i en anglès, per a
// qui ha triat la interfície en una d'aquestes llengües (fase 2, pas 4: pla aprovat per
// l'usuari el 18/11/2026). Surten només amb la fase 2 encesa (interficieActiva, a index.html);
// si aquest fitxer no arriba, tot en català.
// · Per exercici, una llista: 0 és l'exercici base; 1, 2… les variants, en l'ordre de data.js.
//   Una variant que no redefineix un camp agafa la traducció de la base.
// · Cada camp porta el català de data.js al costat (ca). Si el català canvia i la traducció
//   no, l'app mostra el català (exerciciTraduit) i tests_arrencada.cjs (secció 37) falla.
// · L'enunciat (question) surt en català, amb un botó que hi posa la traducció a sota
//   (decisió de l'usuari, 20/11). Un enunciat que només és el diàleg en català amb el buit
//   no es tradueix: porta només el ca, i no té botó (20/11).
// · La nota (theory) surt traduïda, amb «Veure-ho en català» (decisió de l'usuari, 18/11).
//   Surt després de respondre. L'exemple, sempre en català: no hi és.
// · El català citat, tal qual: entre «» en castellà i entre ‘’ en anglès.
// Cada tema, revisat per l'usuari abans d'entrar-hi (20/11: «Salutacions»).
const EXERCICIS_TRADUITS = {
  // ── SALUTACIONS ──
  'a1-u01-01': [
    {
      question: {
        ca: 'Són les nou del matí. Entres a classe. Què dius?',
        es: 'Son las nueve de la mañana. Entras en clase. ¿Qué dices?',
        en: "It's nine in the morning. You walk into class. What do you say?",
      },
      theory: {
        ca: '«Bon dia» és una salutació adequada al matí.',
        es: '«Bon dia» es un saludo adecuado por la mañana.',
        en: '‘Bon dia’ is a suitable greeting in the morning.',
      },
    },
    {
      question: {
        ca: 'Són les cinc de la tarda. Arribes a la biblioteca. Com saludes?',
        es: 'Son las cinco de la tarde. Llegas a la biblioteca. ¿Cómo saludas?',
        en: "It's five in the afternoon. You arrive at the library. How do you greet people?",
      },
      theory: {
        ca: 'A la tarda pots saludar amb «Bona tarda!».',
        es: 'Por la tarde puedes saludar con «Bona tarda!».',
        en: 'In the afternoon you can greet people with ‘Bona tarda!’.',
      },
    },
    {
      question: {
        ca: "És de nit i te'n vas a dormir. Què dius?",
        es: 'Es de noche y te vas a dormir. ¿Qué dices?',
        en: "It's night-time and you're going to bed. What do you say?",
      },
      theory: {
        ca: '«Bona nit!» també serveix per acomiadar-se abans de dormir.',
        es: '«Bona nit!» también sirve para despedirse antes de ir a dormir.',
        en: '‘Bona nit!’ can also be used to say goodbye before going to bed.',
      },
    },
  ],
  'a1-u01-02': [
    {
      question: {
        ca: 'Quan es tornaran a veure?',
        es: '¿Cuándo se volverán a ver?',
        en: 'When will they see each other again?',
      },
      theory: {
        ca: "«Fins demà» situa la pròxima trobada l'endemà.",
        es: '«Fins demà» sitúa el próximo encuentro al día siguiente.',
        en: "‘Fins demà’ means you'll meet again the next day.",
      },
    },
  ],
  'a1-u01-03': [
    {
      question: {
        ca: "Algú t'obre la porta i vols agrair-li l'ajuda. Què dius?",
        es: 'Alguien te abre la puerta y quieres agradecerle la ayuda. ¿Qué dices?',
        en: 'Someone opens the door for you and you want to thank them for their help. What do you say?',
      },
      theory: {
        ca: '«Gràcies» expressa agraïment.',
        es: '«Gràcies» expresa agradecimiento.',
        en: '‘Gràcies’ expresses thanks.',
      },
    },
    {
      question: {
        ca: 'Et deixen una cadira i vols donar les gràcies. Què dius?',
        es: 'Te dejan una silla y quieres dar las gracias. ¿Qué dices?',
        en: 'Someone lets you use their chair and you want to say thank you. What do you say?',
      },
      theory: {
        ca: '«Moltes gràcies!» expressa agraïment.',
        es: '«Moltes gràcies!» expresa agradecimiento.',
        en: '‘Moltes gràcies!’ expresses thanks.',
      },
    },
    {
      question: {
        ca: "Una persona t'ajuda a trobar el carrer. Com li agraeixes l'ajuda?",
        es: 'Una persona te ayuda a encontrar la calle. ¿Cómo le agradeces la ayuda?',
        en: 'Someone helps you find the street. How do you thank them for their help?',
      },
      theory: {
        ca: 'Agraïm una ajuda amb «Gràcies!».',
        es: 'Para agradecer una ayuda, decimos «Gràcies!».',
        en: 'To thank someone for their help, we say ‘Gràcies!’.',
      },
    },
  ],
  'a1-u01-04': [
    {
      question: {
        ca: "Algú et diu «Gràcies». Quina resposta correspon a l'agraïment?",
        es: 'Alguien te dice «Gràcies». ¿Qué respuesta corresponde al agradecimiento?',
        en: 'Someone says ‘Gràcies’ to you. Which reply goes with their thanks?',
      },
      theory: {
        ca: '«De res» és una resposta habitual a un agraïment.',
        es: '«De res» es una respuesta habitual a un agradecimiento.',
        en: '‘De res’ is a common reply when someone thanks you.',
      },
    },
    {
      question: {
        ca: 'Has deixat un llapis a una persona i et dona les gràcies. Què respons?',
        es: 'Le has prestado un lápiz a alguien y te da las gracias. ¿Qué respondes?',
        en: "You've lent someone a pencil and they thank you. What do you reply?",
      },
      theory: {
        ca: '«De res!» respon a un agraïment.',
        es: '«De res!» responde a un agradecimiento.',
        en: '‘De res!’ is a reply to a thank-you.',
      },
    },
    {
      question: { ca: '—Moltes gràcies pel llibre! —___' },
      theory: {
        ca: 'Pots respondre «De res!» quan et donen les gràcies.',
        es: 'Puedes responder «De res!» cuando te dan las gracias.',
        en: 'You can reply ‘De res!’ when someone thanks you.',
      },
    },
  ],
  'a1-u01-05': [
    {
      question: {
        ca: 'Et pregunten «Com estàs?». Quina resposta parla de com et trobes?',
        es: 'Te preguntan «Com estàs?». ¿Qué respuesta habla de cómo te encuentras?',
        en: 'Someone asks you ‘Com estàs?’. Which reply is about how you are?',
      },
      theory: {
        ca: "La pregunta demana l'estat de la persona, no el nom o el lloc on viu.",
        es: 'La pregunta quiere saber cómo está la persona, no su nombre ni dónde vive.',
        en: 'The question asks how the person is, not their name or where they live.',
      },
    },
    {
      question: {
        ca: 'Algú et pregunta com et trobes avui. Quina resposta és adequada?',
        es: 'Alguien te pregunta cómo te encuentras hoy. ¿Qué respuesta es adecuada?',
        en: "Someone asks how you're feeling today. Which reply is appropriate?",
      },
      theory: {
        ca: '«No gaire bé» explica com es troba una persona.',
        es: '«No gaire bé» explica cómo se encuentra una persona.',
        en: '‘No gaire bé’ says how a person is feeling.',
      },
    },
    {
      question: { ca: '—Com estàs? —___' },
      theory: {
        ca: '«Així així» indica que no et trobes del tot bé.',
        es: '«Així així» indica que no te encuentras del todo bien.',
        en: "‘Així així’ means you're not feeling completely well.",
      },
    },
  ],
  'a1-u01-06': [
    {
      question: {
        ca: 'Quina funció té «Adeu» en aquest missatge?',
        es: '¿Qué función tiene «Adeu» en este mensaje?',
        en: 'What role does ‘Adeu’ play in this message?',
      },
      theory: {
        ca: '«Adeu» tanca aquest missatge.',
        es: '«Adeu» cierra este mensaje.',
        en: '‘Adeu’ ends this message.',
      },
    },
  ],
  'a1-u01-07': [
    {
      question: {
        ca: 'En quin moment del dia parlen?',
        es: '¿En qué momento del día hablan?',
        en: 'What time of day are they talking?',
      },
      theory: {
        ca: '«Bona tarda» és la salutació de la tarda; al matí, «Bon dia», i a la nit, «Bona nit».',
        es: '«Bona tarda» es el saludo de la tarde; por la mañana, «Bon dia», y por la noche, «Bona nit».',
        en: '‘Bona tarda’ is the afternoon greeting; in the morning, ‘Bon dia’, and at night, ‘Bona nit’.',
      },
    },
  ],
  'a1-u01-08': [
    {
      question: {
        ca: 'Com està la Rita?',
        es: '¿Cómo está Rita?',
        en: 'How is Rita feeling?',
      },
      theory: {
        ca: '«No gaire bé» és una de les tres respostes a «Com estàs?»; «necessito descansar» ho confirma.',
        es: '«No gaire bé» es una de las tres respuestas a «Com estàs?»; «necessito descansar» lo confirma.',
        en: '‘No gaire bé’ is one of the three replies to ‘Com estàs?’; ‘necessito descansar’ confirms it.',
      },
    },
  ],
};
