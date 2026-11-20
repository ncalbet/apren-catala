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
//   (20/11), o «Completa:» i la frase en català (20/11, a1-u04-01), no es tradueix: porta
//   només el ca, i no té botó.
// · La nota (theory) surt traduïda, amb «Veure-ho en català» (decisió de l'usuari, 18/11).
//   Surt després de respondre. L'exemple, sempre en català: no hi és.
// · El català citat, tal qual: entre «» en castellà i entre ‘’ en anglès.
// · Glossa entre parèntesis («viure» (vivir), ‘jo’ (I)) només on cal per entendre què es
//   demana, i mai on el mot és el que pregunta l'exercici (decisió de l'usuari, 20/11).
// Cada tema, revisat per l'usuari abans d'entrar-hi (20/11: «Salutacions»; «Demanar ajuda»,
// «Presentacions» i «Persones properes»).
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
  // ── DEMANAR AJUDA ──
  'a1-u02-01': [
    {
      question: {
        ca: 'No has sentit bé el nom. Què demanes?',
        es: 'No has oído bien el nombre. ¿Qué pides?',
        en: "You didn't quite catch the name. What do you ask?",
      },
      theory: {
        ca: 'Demanar una repetició permet tornar a sentir la informació.',
        es: 'Pedir que te lo repitan te permite volver a oír la información.',
        en: 'Asking someone to repeat lets you hear the information again.',
      },
    },
    {
      question: {
        ca: "No has sentit l'hora de la cita. Què pots preguntar?",
        es: 'No has oído la hora de la cita. ¿Qué puedes preguntar?',
        en: "You didn't catch the time of the appointment. What can you ask?",
      },
      theory: {
        ca: 'Pots demanar que et repeteixin la informació.',
        es: 'Puedes pedir que te repitan la información.',
        en: 'You can ask them to repeat the information.',
      },
    },
    {
      question: {
        ca: "T'han dit un carrer, però no has entès el nom. Què demanes?",
        es: 'Te han dicho una calle, pero no has entendido el nombre. ¿Qué pides?',
        en: "Someone has told you the name of a street, but you didn't understand it. What do you ask?",
      },
      theory: {
        ca: '«Ho pots tornar a dir?» demana una repetició.',
        es: '«Ho pots tornar a dir?» pide que te lo repitan.',
        en: '‘Ho pots tornar a dir?’ asks someone to say it again.',
      },
    },
  ],
  'a1-u02-02': [
    {
      question: {
        ca: 'La persona parla massa de pressa. Què li dius?',
        es: 'La persona habla demasiado deprisa. ¿Qué le dices?',
        en: 'The person is speaking too fast. What do you say to them?',
      },
      theory: {
        ca: '«A poc a poc» demana un ritme més lent.',
        es: '«A poc a poc» pide un ritmo más lento.',
        en: '‘A poc a poc’ asks for a slower pace.',
      },
    },
    {
      question: {
        ca: "No entens l'explicació perquè és massa ràpida. Què demanes?",
        es: 'No entiendes la explicación porque es demasiado rápida. ¿Qué pides?',
        en: "You don't understand the explanation because it's too fast. What do you ask?",
      },
      theory: {
        ca: '«Més a poc a poc» demana que parlin més lentament.',
        es: '«Més a poc a poc» pide que hablen más despacio.',
        en: '‘Més a poc a poc’ asks people to speak more slowly.',
      },
    },
    {
      question: {
        ca: 'Vols que una persona redueixi el ritme quan parla. Què li dius?',
        es: 'Quieres que una persona reduzca el ritmo al hablar. ¿Qué le dices?',
        en: 'You want someone to slow down when they speak. What do you say to them?',
      },
      theory: {
        ca: 'Per demanar un ritme més lent diem «més a poc a poc».',
        es: 'Para pedir un ritmo más lento decimos «més a poc a poc».',
        en: 'To ask for a slower pace, we say ‘més a poc a poc’.',
      },
    },
  ],
  'a1-u02-03': [
    {
      question: {
        ca: 'Ordena la frase per indicar que no comprens una informació.',
        es: 'Ordena la frase para decir que no entiendes algo.',
        en: "Put the sentence in order to say you don't understand something.",
      },
      theory: {
        ca: '«No ho entenc» es pot aprendre com una expressió sencera.',
        es: '«No ho entenc» se puede aprender como una expresión entera.',
        en: '‘No ho entenc’ can be learnt as a single phrase.',
      },
    },
  ],
  'a1-u02-04': [
    {
      question: {
        ca: 'Algú lletreja «ela, i, ena, a». Quin nom diu?',
        es: 'Alguien deletrea «ela, i, ena, a». ¿Qué nombre dice?',
        en: 'Someone spells out ‘ela, i, ena, a’. What name are they saying?',
      },
      theory: {
        ca: 'Les lletres L-I-N-A formen «Lina».',
        es: 'Las letras L-I-N-A forman «Lina».',
        en: 'The letters L-I-N-A spell ‘Lina’.',
      },
    },
    {
      question: {
        ca: 'Algú lletreja «ena, i, ela». Quin nom diu?',
        es: 'Alguien deletrea «ena, i, ela». ¿Qué nombre dice?',
        en: 'Someone spells out ‘ena, i, ela’. What name are they saying?',
      },
      theory: {
        ca: 'Les lletres N-I-L formen «Nil».',
        es: 'Las letras N-I-L forman «Nil».',
        en: 'The letters N-I-L spell ‘Nil’.',
      },
    },
    {
      question: {
        ca: 'Algú lletreja «o, ena, a». Quin nom diu?',
        es: 'Alguien deletrea «o, ena, a». ¿Qué nombre dice?',
        en: 'Someone spells out ‘o, ena, a’. What name are they saying?',
      },
      theory: {
        ca: 'Les lletres O-N-A formen «Ona».',
        es: 'Las letras O-N-A forman «Ona».',
        en: 'The letters O-N-A spell ‘Ona’.',
      },
    },
  ],
  'a1-u02-05': [
    {
      question: {
        ca: 'Veus una paraula nova i vols saber-ne el significat. Què preguntes?',
        es: 'Ves una palabra nueva y quieres saber qué significa. ¿Qué preguntas?',
        en: 'You see a new word and want to know what it means. What do you ask?',
      },
      theory: {
        ca: '«Què vol dir?» demana el significat.',
        es: '«Què vol dir?» pregunta el significado.',
        en: '‘Què vol dir?’ asks what something means.',
      },
    },
    {
      question: {
        ca: 'Llegeixes «obert», però no saps què significa. Què preguntes?',
        es: 'Lees «obert», pero no sabes qué significa. ¿Qué preguntas?',
        en: "You read ‘obert’, but you don't know what it means. What do you ask?",
      },
      theory: {
        ca: '«Què vol dir…?» demana el significat.',
        es: '«Què vol dir…?» pregunta el significado.',
        en: '‘Què vol dir…?’ asks what something means.',
      },
    },
    {
      question: {
        ca: 'Vols saber el significat de «demà». Quina pregunta fas?',
        es: 'Quieres saber el significado de «demà». ¿Qué pregunta haces?',
        en: 'You want to know what ‘demà’ means. What question do you ask?',
      },
      theory: {
        ca: 'Per saber el significat pots preguntar «Què vol dir…?».',
        es: 'Para saber el significado puedes preguntar «Què vol dir…?».',
        en: 'To find out the meaning, you can ask ‘Què vol dir…?’.',
      },
    },
  ],
  'a1-u02-06': [
    {
      question: {
        ca: "L'exercici diu «Tria una resposta». Què has de fer?",
        es: 'El ejercicio dice «Tria una resposta». ¿Qué tienes que hacer?',
        en: 'The exercise says ‘Tria una resposta’. What do you have to do?',
      },
      theory: {
        ca: "«Tria» indica que has d'escollir entre opcions.",
        es: '«Tria» indica que tienes que escoger entre varias opciones.',
        en: '‘Tria’ means you have to choose between options.',
      },
    },
    {
      question: {
        ca: "L'exercici diu «Completa la frase». Què has de fer?",
        es: 'El ejercicio dice «Completa la frase». ¿Qué tienes que hacer?',
        en: 'The exercise says ‘Completa la frase’. What do you have to do?',
      },
      theory: {
        ca: '«Completa» demana escriure el que falta.',
        es: '«Completa» pide escribir lo que falta.',
        en: "‘Completa’ asks you to write what's missing.",
      },
    },
    {
      question: {
        ca: "L'exercici diu «Ordena els fragments». Què has de fer?",
        es: 'El ejercicio dice «Ordena els fragments». ¿Qué tienes que hacer?',
        en: 'The exercise says ‘Ordena els fragments’. What do you have to do?',
      },
      theory: {
        ca: '«Ordena» demana posar els fragments en un ordre que tingui sentit.',
        es: '«Ordena» pide poner los fragmentos en un orden que tenga sentido.',
        en: '‘Ordena’ asks you to put the pieces in an order that makes sense.',
      },
    },
  ],
  'a1-u02-07': [
    {
      question: {
        ca: 'Una persona no entén el nom. Què demana?',
        es: 'Una persona no entiende el nombre. ¿Qué pide?',
        en: "Someone doesn't understand the name. What do they ask for?",
      },
      theory: {
        ca: '«Pots repetir-ho?» demana que tornin a dir el mateix. Lletrejar és dir les lletres una per una.',
        es: '«Pots repetir-ho?» pide que vuelvan a decir lo mismo. Deletrear es decir las letras una a una.',
        en: '‘Pots repetir-ho?’ asks someone to say the same thing again. Spelling means saying the letters one by one.',
      },
    },
  ],
  'a1-u02-08': [
    {
      question: {
        ca: 'Què demana primer?',
        es: '¿Qué pide primero?',
        en: 'What do they ask about first?',
      },
      theory: {
        ca: "«Què vol dir…?» demana el significat d'una paraula. Després demana «més a poc a poc».",
        es: '«Què vol dir…?» pregunta el significado de una palabra. Después pide «més a poc a poc».',
        en: '‘Què vol dir…?’ asks what a word means. Then they ask for ‘més a poc a poc’.',
      },
    },
  ],
  // ── PRESENTACIONS ──
  'a1-u03-01': [
    {
      question: {
        ca: 'Et pregunten «Com et dius?». Quina resposta dona el nom?',
        es: 'Te preguntan «Com et dius?». ¿Qué respuesta da el nombre?',
        en: 'Someone asks you ‘Com et dius?’. Which reply gives your name?',
      },
      theory: {
        ca: '«Em dic» introdueix el nom de qui parla.',
        es: '«Em dic» introduce el nombre de quien habla.',
        en: "‘Em dic’ introduces the speaker's name.",
      },
    },
    {
      question: {
        ca: 'Et demanen el nom. Quina resposta correspon?',
        es: 'Te piden el nombre. ¿Qué respuesta corresponde?',
        en: 'Someone asks for your name. Which reply fits?',
      },
      theory: {
        ca: '«Em dic» serveix per presentar el nom.',
        es: '«Em dic» sirve para decir tu nombre.',
        en: '‘Em dic’ is used to say your name.',
      },
    },
    {
      question: { ca: '—Com et dius? —___' },
      theory: {
        ca: 'La pregunta demana el nom de la persona.',
        es: 'La pregunta pide el nombre de la persona.',
        en: "The question asks for the person's name.",
      },
    },
  ],
  'a1-u03-02': [
    {
      question: {
        ca: 'Completa amb la forma de «viure» que correspon a «jo».',
        es: 'Completa con la forma de «viure» (vivir) que corresponde a «jo».',
        en: 'Fill in the form of ‘viure’ (to live) that goes with ‘jo’ (I).',
      },
      theory: {
        ca: 'La primera persona del present de «viure» és «visc».',
        es: 'La primera persona del presente de «viure» es «visc».',
        en: 'The first person of ‘viure’ in the present tense is ‘visc’.',
      },
    },
    {
      question: {
        ca: 'Completa amb «viure» en present.',
        es: 'Completa con «viure» (vivir) en presente.',
        en: 'Fill in ‘viure’ (to live) in the present tense.',
      },
      theory: {
        ca: 'Amb «tu» diem «vius».',
        es: 'Con «tu» decimos «vius».',
        en: 'With ‘tu’ (you), we say ‘vius’.',
      },
    },
    {
      question: {
        ca: 'Completa amb «viure» en present.',
        es: 'Completa con «viure» (vivir) en presente.',
        en: 'Fill in ‘viure’ (to live) in the present tense.',
      },
      theory: {
        ca: 'Amb «la Mei» diem «viu».',
        es: 'Con «la Mei» decimos «viu».',
        en: 'With ‘la Mei’, we say ‘viu’.',
      },
    },
  ],
  'a1-u03-03': [
    {
      question: {
        ca: 'On viu la Mei?',
        es: '¿Dónde vive Mei?',
        en: 'Where does Mei live?',
      },
      theory: {
        ca: '«Visc a Salt» dona la residència; «soc de Vic» dona la procedència.',
        es: '«Visc a Salt» dice dónde vive; «soc de Vic», de dónde es.',
        en: "‘Visc a Salt’ says where she lives; ‘soc de Vic’, where she's from.",
      },
    },
  ],
  'a1-u03-04': [
    {
      question: {
        ca: 'Completa amb una forma de «tenir».',
        es: 'Completa con una forma de «tenir» (tener).',
        en: 'Fill in a form of ‘tenir’ (to have).',
      },
      theory: {
        ca: "L'edat s'expressa aquí amb «tenir»: «tinc vint anys».",
        es: 'Para la edad se usa «tenir»: «tinc vint anys».',
        en: 'For age, Catalan uses ‘tenir’ (to have): ‘tinc vint anys’.',
      },
    },
    {
      question: {
        ca: 'Completa amb «tenir» en present.',
        es: 'Completa con «tenir» (tener) en presente.',
        en: 'Fill in ‘tenir’ (to have) in the present tense.',
      },
      theory: {
        ca: 'Amb «tu» diem «tens».',
        es: 'Con «tu» decimos «tens».',
        en: 'With ‘tu’ (you), we say ‘tens’.',
      },
    },
    {
      question: {
        ca: 'Completa amb «tenir» en present.',
        es: 'Completa con «tenir» (tener) en presente.',
        en: 'Fill in ‘tenir’ (to have) in the present tense.',
      },
      theory: {
        ca: 'Amb «el Nil» diem «té».',
        es: 'Con «el Nil» decimos «té».',
        en: 'With ‘el Nil’, we say ‘té’.',
      },
    },
  ],
  'a1-u03-05': [
    {
      question: {
        ca: 'Expliques on vas néixer. Completa: «Soc ___ Amposta».',
        es: 'Explicas dónde naciste. Completa: «Soc ___ Amposta».',
        en: "You're saying where you were born. Fill in: ‘Soc ___ Amposta’.",
      },
      theory: {
        ca: "Davant d'«Amposta», escrivim «d'» en aquesta expressió de procedència.",
        es: "Delante de «Amposta», escribimos «d'» en esta expresión de procedencia.",
        en: "Before ‘Amposta’, we write ‘d'’ in this phrase about where you're from.",
      },
    },
    {
      question: {
        ca: 'Expliques on vas néixer. Completa: «Soc ___ Girona».',
        es: 'Explicas dónde naciste. Completa: «Soc ___ Girona».',
        en: "You're saying where you were born. Fill in: ‘Soc ___ Girona’.",
      },
      theory: {
        ca: 'Diem «Soc de Girona» per indicar la procedència.',
        es: 'Decimos «Soc de Girona» para indicar de dónde somos.',
        en: "We say ‘Soc de Girona’ to say where we're from.",
      },
    },
    {
      question: {
        ca: 'Expliques on vas néixer. Completa: «Soc ___ Olot».',
        es: 'Explicas dónde naciste. Completa: «Soc ___ Olot».',
        en: "You're saying where you were born. Fill in: ‘Soc ___ Olot’.",
      },
      theory: {
        ca: "Davant d'«Olot» fem servir «d'»: «Soc d'Olot».",
        es: "Delante de «Olot» usamos «d'»: «Soc d'Olot».",
        en: "Before ‘Olot’ we use ‘d'’: ‘Soc d'Olot’.",
      },
    },
  ],
  'a1-u03-06': [
    {
      question: {
        ca: 'Què cal copiar al camp «Cognoms»?',
        es: '¿Qué hay que copiar en el campo «Cognoms»?',
        en: 'What do you need to copy into the ‘Cognoms’ field?',
      },
      theory: {
        ca: 'El nom i els cognoms ocupen camps diferents.',
        es: 'El nombre y los apellidos van en campos distintos.',
        en: 'First name and surnames go in separate fields.',
      },
    },
  ],
  'a1-u03-07': [
    {
      question: {
        ca: "On viu l'Omar?",
        es: '¿Dónde vive Omar?',
        en: 'Where does Omar live?',
      },
      theory: {
        ca: "«Soc de» diu d'on ets; «visc a», on vius ara.",
        es: '«Soc de» dice de dónde eres; «visc a», dónde vives ahora.',
        en: "‘Soc de’ says where you're from; ‘visc a’, where you live now.",
      },
    },
  ],
  'a1-u03-08': [
    {
      question: {
        ca: 'Quants anys té en Karim?',
        es: '¿Cuántos años tiene Karim?',
        en: 'How old is Karim?',
      },
      theory: {
        ca: "L'edat es diu amb «tenir»: «tinc trenta anys». «Trenta» i «tretze» sonen semblants: escolta el final de la paraula.",
        es: 'La edad se dice con «tenir»: «tinc trenta anys». «Trenta» (30) y «tretze» (13) suenan parecido: escucha el final de la palabra.',
        en: 'Age is expressed with ‘tenir’ (to have): ‘tinc trenta anys’. ‘Trenta’ (30) and ‘tretze’ (13) sound alike: listen to the end of the word.',
      },
    },
  ],
  // ── PERSONES PROPERES ──
  'a1-u04-01': [
    {
      question: { ca: 'Completa: «La meva germana és ___».' },
      theory: {
        ca: "L'adjectiu concorda amb «germana», en femení singular.",
        es: 'El adjetivo concuerda con «germana» (hermana), en femenino singular.',
        en: 'The adjective agrees with ‘germana’ (sister): feminine singular.',
      },
    },
    {
      question: { ca: 'Completa: «El meu germà és ___».' },
      theory: {
        ca: 'Amb «el meu germà» fem servir «petit».',
        es: 'Con «el meu germà» (mi hermano) usamos «petit».',
        en: 'With ‘el meu germà’ (my brother) we use ‘petit’.',
      },
    },
    {
      question: { ca: 'Completa: «Les meves germanes són ___».' },
      theory: {
        ca: 'Amb «les meves germanes» fem servir «petites».',
        es: 'Con «les meves germanes» (mis hermanas) usamos «petites».',
        en: 'With ‘les meves germanes’ (my sisters) we use ‘petites’.',
      },
    },
  ],
  'a1-u04-02': [
    {
      question: {
        ca: 'Qui és la Berta respecte del Pol?',
        es: '¿Quién es Berta con respecto a Pol?',
        en: 'Who is Berta in relation to Pol?',
      },
      theory: {
        ca: 'El text identifica la Berta com a germana del Pol.',
        es: 'El texto presenta a Berta como hermana de Pol.',
        en: "The text says Berta is Pol's sister.",
      },
    },
  ],
  'a1-u04-03': [
    {
      question: {
        ca: "Escriu el plural d'«amiga».",
        es: 'Escribe el plural de «amiga».',
        en: 'Write the plural of ‘amiga’.',
      },
      theory: {
        ca: "El plural d'«amiga» és «amigues». La grafia canvia de g a gu davant d'e.",
        es: 'El plural de «amiga» es «amigues». La grafía cambia de g a gu delante de e.',
        en: 'The plural of ‘amiga’ is ‘amigues’. The spelling changes from g to gu before e.',
      },
    },
    {
      question: {
        ca: 'Escriu el plural de «botiga».',
        es: 'Escribe el plural de «botiga».',
        en: 'Write the plural of ‘botiga’.',
      },
      theory: {
        ca: 'El plural de «botiga» és «botigues».',
        es: 'El plural de «botiga» es «botigues».',
        en: 'The plural of ‘botiga’ is ‘botigues’.',
      },
    },
    {
      question: {
        ca: 'Escriu el plural de «germana».',
        es: 'Escribe el plural de «germana».',
        en: 'Write the plural of ‘germana’.',
      },
      theory: {
        ca: 'El plural de «germana» és «germanes».',
        es: 'El plural de «germana» es «germanes».',
        en: 'The plural of ‘germana’ is ‘germanes’.',
      },
    },
  ],
  'a1-u04-04': [
    {
      question: {
        ca: 'Qui porta una camisa?',
        es: '¿Quién lleva una camisa?',
        en: 'Who is wearing a shirt?',
      },
      theory: {
        ca: "La camisa correspon a la Joana; l'Èric porta un jersei.",
        es: 'Quien lleva la camisa es Joana; Èric lleva un jersey.',
        en: 'Joana is the one wearing the shirt; Èric is wearing a jumper.',
      },
    },
  ],
  'a1-u04-05': [
    {
      question: {
        ca: 'La bossa és teva i en parles tu. Completa amb el possessiu corresponent a «jo».',
        es: 'La bolsa es tuya y hablas tú de ella. Completa con el posesivo que corresponde a «jo».',
        en: "The bag is yours and you're the one talking about it. Fill in the possessive that goes with ‘jo’ (I).",
      },
      theory: {
        ca: 'El possessiu concorda amb «bossa». «Meva» i «meua» són variants vàlides.',
        es: 'El posesivo concuerda con «bossa» (bolsa). «Meva» y «meua» son variantes válidas.',
        en: 'The possessive agrees with ‘bossa’ (bag). ‘Meva’ and ‘meua’ are both correct.',
      },
    },
    {
      question: {
        ca: 'El llibre és teu i en parles tu. Completa amb la paraula que indica que et pertany.',
        es: 'El libro es tuyo y hablas tú de él. Completa con la palabra que indica que te pertenece.',
        en: "The book is yours and you're the one talking about it. Fill in the word that shows it belongs to you.",
      },
      theory: {
        ca: "Quan parles d'un llibre que et pertany, dius «el meu llibre».",
        es: 'Cuando hablas de un libro que te pertenece, dices «el meu llibre».',
        en: 'When you talk about a book that belongs to you, you say ‘el meu llibre’.',
      },
    },
    {
      question: {
        ca: 'Les bosses són teves i en parles tu. Completa amb la paraula que indica que et pertanyen.',
        es: 'Las bolsas son tuyas y hablas tú de ellas. Completa con la palabra que indica que te pertenecen.',
        en: "The bags are yours and you're the one talking about them. Fill in the word that shows they belong to you.",
      },
      theory: {
        ca: 'Pots dir «les meves bosses» o «les meues bosses».',
        es: 'Puedes decir «les meves bosses» o «les meues bosses».',
        en: 'You can say ‘les meves bosses’ or ‘les meues bosses’.',
      },
    },
  ],
  'a1-u04-06': [
    {
      question: {
        ca: 'La bossa és al teu costat. Completa: «___ bossa».',
        es: 'La bolsa está a tu lado. Completa: «___ bossa».',
        en: 'The bag is right next to you. Fill in: ‘___ bossa’.',
      },
      theory: {
        ca: '«Aquesta» expressa proximitat i concorda amb «bossa».',
        es: '«Aquesta» expresa cercanía y concuerda con «bossa».',
        en: '‘Aquesta’ shows something is close and agrees with ‘bossa’.',
      },
    },
    {
      question: {
        ca: 'El llibre és al teu costat. Completa: «___ llibre».',
        es: 'El libro está a tu lado. Completa: «___ llibre».',
        en: 'The book is right next to you. Fill in: ‘___ llibre’.',
      },
      theory: {
        ca: "«Aquest» acompanya «llibre» quan l'assenyalem a prop.",
        es: '«Aquest» acompaña a «llibre» cuando lo señalamos cerca.',
        en: '‘Aquest’ goes with ‘llibre’ when we point to it close by.',
      },
    },
    {
      question: {
        ca: 'Les bosses són al teu costat. Completa: «___ bosses».',
        es: 'Las bolsas están a tu lado. Completa: «___ bosses».',
        en: 'The bags are right next to you. Fill in: ‘___ bosses’.',
      },
      theory: {
        ca: '«Aquestes» acompanya el plural «bosses».',
        es: '«Aquestes» acompaña al plural «bosses».',
        en: '‘Aquestes’ goes with the plural ‘bosses’.',
      },
    },
  ],
  'a1-u04-07': [
    {
      question: {
        ca: 'Qui és en Biel?',
        es: '¿Quién es Biel?',
        en: 'Who is Biel?',
      },
      theory: {
        ca: '«El meu germà» és un fill dels meus pares. «Aquest» presenta algú que és a prop.',
        es: '«El meu germà» es un hijo de mis padres. «Aquest» presenta a alguien que está cerca.',
        en: '‘El meu germà’ is a son of my parents. ‘Aquest’ introduces someone who is close by.',
      },
    },
  ],
  'a1-u04-08': [
    {
      question: {
        ca: "Què porta l'amiga?",
        es: '¿Qué lleva la amiga?',
        en: 'What is the friend wearing?',
      },
      theory: {
        ca: "Cada peça va amb una persona: l'amiga, «una jaqueta vermella»; la seva parella, «un jersei verd»; el seu fill, «una camisa blava».",
        es: 'Cada prenda va con una persona: la amiga, «una jaqueta vermella»; su pareja, «un jersei verd»; su hijo, «una camisa blava».',
        en: 'Each item of clothing goes with one person: the friend, ‘una jaqueta vermella’; her partner, ‘un jersei verd’; her son, ‘una camisa blava’.',
      },
    },
  ],
};
