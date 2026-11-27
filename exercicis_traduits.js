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
// Cada tema, revisat per l'usuari abans d'entrar-hi: els dotze de l'A1, el 20/11 («Salutacions»;
// «Demanar ajuda», «Presentacions» i «Persones properes»; «Casa i objectes», «El barri» i
// «Rutines»; «Dies i hores», «Compres» i «Menjar i beure»; «Necessitats» i «Quedar amb algú»).
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
        ca: 'Et deixen una cadira i vols agrair-ho. Què dius?',
        es: 'Te dejan una silla y quieres agradecerlo. ¿Qué dices?',
        en: 'Someone lets you use their chair and you want to thank them. What do you say?',
      },
      theory: {
        ca: '«Moltes gràcies!» expressa agraïment.',
        es: '«Moltes gràcies!» expresa agradecimiento.',
        en: '‘Moltes gràcies!’ expresses thanks.',
      },
    },
    {
      question: {
        ca: "Una persona t'indica on és el carrer. Com li ho agraeixes?",
        es: 'Una persona te indica dónde está la calle. ¿Cómo se lo agradeces?',
        en: 'Someone shows you where the street is. How do you thank them?',
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
        es: '«No gaire bé» es una de las tres respuestas a «Com estàs?»; «necessito descansar» (necesito descansar) lo confirma.',
        en: '‘No gaire bé’ is one of the three replies to ‘Com estàs?’; ‘necessito descansar’ (I need to rest) confirms it.',
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
  // ── CASA I OBJECTES ──
  'a1-u05-01': [
    {
      question: {
        ca: 'Quin espai de casa està destinat a preparar el menjar?',
        es: '¿Qué parte de la casa está destinada a preparar la comida?',
        en: 'Which part of the home is for preparing food?',
      },
      theory: {
        ca: "La cuina és l'espai destinat a cuinar.",
        es: 'La cocina es el espacio destinado a cocinar.',
        en: 'The kitchen is the room for cooking.',
      },
    },
    {
      question: {
        ca: 'En quina habitació hi sol haver el llit per dormir?',
        es: '¿En qué habitación suele estar la cama?',
        en: 'In which room do you usually find the bed?',
      },
      theory: {
        ca: "El dormitori és l'habitació destinada a dormir.",
        es: 'El dormitorio es la habitación destinada a dormir.',
        en: 'The bedroom is the room for sleeping.',
      },
    },
    {
      question: {
        ca: 'En quin espai de casa hi ha habitualment la dutxa?',
        es: '¿En qué parte de la casa suele estar la ducha?',
        en: 'In which part of the home do you usually find the shower?',
      },
      theory: {
        ca: 'La dutxa es troba habitualment al bany.',
        es: 'La ducha suele estar en el baño.',
        en: 'The shower is usually in the bathroom.',
      },
    },
  ],
  'a1-u05-02': [
    {
      question: {
        ca: "Completa amb la forma de present d'«haver-hi».",
        es: 'Completa con el presente de «haver-hi» (haber).',
        en: 'Fill in the present tense of ‘haver-hi’ (there to be).',
      },
      theory: {
        ca: '«Hi ha» presenta una cosa que trobem en un lloc.',
        es: '«Hi ha» (hay) presenta algo que encontramos en un lugar.',
        en: '‘Hi ha’ (there is) introduces something we find in a place.',
      },
    },
    {
      question: {
        ca: 'Completa amb «haver-hi» en present.',
        es: 'Completa con «haver-hi» (haber) en presente.',
        en: 'Fill in ‘haver-hi’ (there to be) in the present tense.',
      },
      theory: {
        ca: '«Hi ha» presenta una cosa que trobem en un lloc.',
        es: '«Hi ha» (hay) presenta algo que encontramos en un lugar.',
        en: '‘Hi ha’ (there is) introduces something we find in a place.',
      },
    },
    {
      question: {
        ca: 'Completa amb «haver-hi» en present.',
        es: 'Completa con «haver-hi» (haber) en presente.',
        en: 'Fill in ‘haver-hi’ (there to be) in the present tense.',
      },
      theory: {
        ca: 'Escrivim «hi ha» per indicar que trobem un llit en aquest lloc.',
        es: 'Escribimos «hi ha» para indicar que en ese lugar hay una cama.',
        en: "We write ‘hi ha’ to show that there's a bed in that place.",
      },
    },
  ],
  'a1-u05-03': [
    {
      question: {
        ca: 'Què hi ha sota la taula?',
        es: '¿Qué hay debajo de la mesa?',
        en: 'What is under the table?',
      },
      theory: {
        ca: 'El text situa la bossa sota la taula.',
        es: 'El texto sitúa la bolsa debajo de la mesa.',
        en: 'The text puts the bag under the table.',
      },
    },
  ],
  'a1-u05-04': [
    {
      question: {
        ca: 'Tria la forma escrita correcta.',
        es: 'Elige la forma escrita correcta.',
        en: 'Choose the correct written form.',
      },
      theory: {
        ca: "Amb «armari», l'article masculí s'apostrofa: «l'armari».",
        es: "Con «armari», el artículo masculino se escribe con apóstrofo: «l'armari».",
        en: "With ‘armari’, the masculine article takes an apostrophe: ‘l'armari’.",
      },
    },
    {
      question: {
        ca: 'Tria la forma escrita correcta.',
        es: 'Elige la forma escrita correcta.',
        en: 'Choose the correct written form.',
      },
      theory: {
        ca: "Escrivim «l'escola», amb apòstrof.",
        es: "Escribimos «l'escola», con apóstrofo.",
        en: "We write ‘l'escola’, with an apostrophe.",
      },
    },
    {
      question: {
        ca: 'Tria la forma escrita correcta.',
        es: 'Elige la forma escrita correcta.',
        en: 'Choose the correct written form.',
      },
      theory: {
        ca: "Escrivim «l'habitació», amb apòstrof.",
        es: "Escribimos «l'habitació», con apóstrofo.",
        en: "We write ‘l'habitació’, with an apostrophe.",
      },
    },
  ],
  'a1-u05-05': [
    {
      question: {
        ca: 'Escriu el plural de «cadira».',
        es: 'Escribe el plural de «cadira».',
        en: 'Write the plural of ‘cadira’.',
      },
      theory: {
        ca: 'En «cadira», el plural canvia la terminació -a per -es.',
        es: 'En «cadira», el plural cambia la terminación -a por -es.',
        en: 'In ‘cadira’, the plural changes the ending -a to -es.',
      },
    },
    {
      question: {
        ca: 'Escriu el plural de «taula».',
        es: 'Escribe el plural de «taula».',
        en: 'Write the plural of ‘taula’.',
      },
      theory: {
        ca: 'El plural de «taula» és «taules».',
        es: 'El plural de «taula» es «taules».',
        en: 'The plural of ‘taula’ is ‘taules’.',
      },
    },
    {
      question: {
        ca: 'Escriu el plural de «llibre».',
        es: 'Escribe el plural de «llibre».',
        en: 'Write the plural of ‘llibre’.',
      },
      theory: {
        ca: 'El plural de «llibre» és «llibres».',
        es: 'El plural de «llibre» es «llibres».',
        en: 'The plural of ‘llibre’ is ‘llibres’.',
      },
    },
  ],
  'a1-u05-06': [
    {
      question: { ca: 'Completa: «Hi ha ___ taula i un sofà».' },
      theory: {
        ca: '«Taula» és un nom femení singular i aquí va amb «una».',
        es: '«Taula» es un nombre femenino singular y aquí va con «una».',
        en: '‘Taula’ is a feminine singular noun, so here it goes with ‘una’.',
      },
    },
    {
      question: { ca: 'Completa: «Hi ha ___ armari al dormitori».' },
      theory: {
        ca: '«Armari» va amb «un».',
        es: '«Armari» va con «un».',
        en: '‘Armari’ goes with ‘un’.',
      },
    },
    {
      question: { ca: 'Completa: «Hi ha ___ cadires al menjador».' },
      theory: {
        ca: '«Cadires» és plural i va amb «unes».',
        es: '«Cadires» es plural y va con «unes».',
        en: '‘Cadires’ is plural and goes with ‘unes’.',
      },
    },
  ],
  'a1-u05-07': [
    {
      question: {
        ca: 'On és la llibreta?',
        es: '¿Dónde está la libreta?',
        en: 'Where is the notebook?',
      },
      theory: {
        ca: "En un diàleg, el lloc bo pot ser l'últim que es diu: «No hi és» descarta el primer.",
        es: 'En un diálogo, el lugar correcto puede ser el último que se dice: «No hi és» (no está) descarta el primero.',
        en: "In a conversation, the right place may be the last one mentioned: ‘No hi és’ (it isn't there) rules out the first.",
      },
    },
  ],
  'a1-u05-08': [
    {
      question: {
        ca: 'On és el llibre?',
        es: '¿Dónde está el libro?',
        en: 'Where is the book?',
      },
      theory: {
        ca: '«El llibre és sota el llit». Les claus són «dins de la bossa», i la bossa, «damunt de la taula».',
        es: '«El llibre és sota el llit» (el libro está debajo de la cama). Las llaves están «dins de la bossa» (dentro de la bolsa), y la bolsa, «damunt de la taula» (encima de la mesa).',
        en: '‘El llibre és sota el llit’ (the book is under the bed). The keys are ‘dins de la bossa’ (in the bag), and the bag is ‘damunt de la taula’ (on the table).',
      },
    },
  ],
  // ── EL BARRI ──
  'a1-u06-01': [
    {
      question: {
        ca: 'Necessites trobar el mercat. Què preguntes?',
        es: 'Necesitas encontrar el mercado. ¿Qué preguntas?',
        en: 'You need to find the market. What do you ask?',
      },
      theory: {
        ca: "«On és…?» demana la ubicació d'un lloc concret.",
        es: '«On és…?» pregunta dónde está un lugar concreto.',
        en: '‘On és…?’ asks where a particular place is.',
      },
    },
    {
      question: {
        ca: 'Busques la farmàcia. Què preguntes?',
        es: 'Buscas la farmacia. ¿Qué preguntas?',
        en: "You're looking for the pharmacy. What do you ask?",
      },
      theory: {
        ca: '«On és…?» demana on es troba un lloc.',
        es: '«On és…?» pregunta dónde se encuentra un lugar.',
        en: '‘On és…?’ asks where a place is.',
      },
    },
    {
      question: {
        ca: 'Necessites trobar la biblioteca. Quina pregunta fas?',
        es: 'Necesitas encontrar la biblioteca. ¿Qué pregunta haces?',
        en: 'You need to find the library. What question do you ask?',
      },
      theory: {
        ca: 'Per trobar un lloc podem preguntar «On és…?».',
        es: 'Para encontrar un lugar podemos preguntar «On és…?».',
        en: 'To find a place, we can ask ‘On és…?’.',
      },
    },
  ],
  'a1-u06-02': [
    {
      question: {
        ca: 'Què hi ha al costat de la farmàcia?',
        es: '¿Qué hay al lado de la farmacia?',
        en: 'What is next to the pharmacy?',
      },
      theory: {
        ca: 'El text relaciona la farmàcia amb el forn.',
        es: 'El texto relaciona la farmacia con la panadería.',
        en: 'The text links the pharmacy to the bakery.',
      },
    },
  ],
  'a1-u06-03': [
    {
      question: {
        ca: 'Què has de fer quan arribis al forn?',
        es: '¿Qué tienes que hacer cuando llegues a la panadería?',
        en: 'What do you have to do when you get to the bakery?',
      },
      theory: {
        ca: "La instrucció indica un gir a l'esquerra en arribar al forn.",
        es: 'La indicación es girar a la izquierda al llegar a la panadería.',
        en: 'The directions say to turn left when you reach the bakery.',
      },
    },
  ],
  'a1-u06-04': [
    {
      question: {
        ca: 'Uneix «a» i «el» per completar la frase.',
        es: 'Une «a» y «el» para completar la frase.',
        en: 'Combine ‘a’ (to) and ‘el’ (the) to complete the sentence.',
      },
      theory: {
        ca: "La combinació «a + el» s'escriu «al».",
        es: 'La combinación «a + el» se escribe «al».',
        en: 'The combination ‘a + el’ is written ‘al’.',
      },
    },
    {
      question: {
        ca: 'Uneix «a» i «els» per completar la frase.',
        es: 'Une «a» y «els» para completar la frase.',
        en: 'Combine ‘a’ (to) and ‘els’ (the, plural) to complete the sentence.',
      },
      theory: {
        ca: "La combinació «a + els» s'escriu «als».",
        es: 'La combinación «a + els» se escribe «als».',
        en: 'The combination ‘a + els’ is written ‘als’.',
      },
    },
    {
      question: {
        ca: 'Uneix «de» i «el» per completar la frase.',
        es: 'Une «de» y «el» para completar la frase.',
        en: 'Combine ‘de’ (of) and ‘el’ (the) to complete the sentence.',
      },
      theory: {
        ca: "La combinació «de + el» s'escriu «del».",
        es: 'La combinación «de + el» se escribe «del».',
        en: 'The combination ‘de + el’ is written ‘del’.',
      },
    },
  ],
  'a1-u06-05': [
    {
      question: {
        ca: 'Què demana aquest avís?',
        es: '¿Qué pide este aviso?',
        en: 'What is this notice asking for?',
      },
      theory: {
        ca: "L'avís diu que cal portar el formulari per inscriure's al taller.",
        es: 'El aviso dice que hay que llevar el formulario para inscribirse en el taller.',
        en: 'The notice says you need to bring the form to sign up for the workshop.',
      },
    },
  ],
  'a1-u06-06': [
    {
      question: {
        ca: "L'oficina és al pis 3. Com ho diu el cartell?",
        es: 'La oficina está en el piso 3. ¿Qué dice el cartel?',
        en: 'The office is on floor 3. What does the sign say?',
      },
      theory: {
        ca: "L'ordinal de 3 en masculí és «tercer».",
        es: 'El ordinal de 3 en masculino es «tercer».',
        en: 'The masculine ordinal of 3 is ‘tercer’.',
      },
    },
    {
      question: {
        ca: "L'aula és al pis 2. Com ho diu el cartell?",
        es: 'El aula está en el piso 2. ¿Qué dice el cartel?',
        en: 'The classroom is on floor 2. What does the sign say?',
      },
      theory: {
        ca: 'El pis número 2 és el segon pis.',
        es: 'El piso número 2 es el segundo piso.',
        en: 'Floor number 2 is the second floor.',
      },
    },
    {
      question: {
        ca: 'El consultori és al pis 4. Com ho diu el cartell?',
        es: 'El consultorio está en el piso 4. ¿Qué dice el cartel?',
        en: 'The clinic is on floor 4. What does the sign say?',
      },
      theory: {
        ca: 'El pis número 4 és el quart pis.',
        es: 'El piso número 4 es el cuarto piso.',
        en: 'Floor number 4 is the fourth floor.',
      },
    },
  ],
  'a1-u06-07': [
    {
      question: {
        ca: 'On és la biblioteca?',
        es: '¿Dónde está la biblioteca?',
        en: 'Where is the library?',
      },
      theory: {
        ca: "«Davant de l'estació» diu on és el lloc; «continua recte» i «gira a la dreta» diuen com arribar-hi.",
        es: "«Davant de l'estació» (delante de la estación) dice dónde está el lugar; «continua recte» y «gira a la dreta», cómo llegar.",
        en: "‘Davant de l'estació’ (in front of the station) says where the place is; ‘continua recte’ (go straight on) and ‘gira a la dreta’ (turn right) say how to get there.",
      },
    },
  ],
  'a1-u06-08': [
    {
      question: {
        ca: 'On és el taller de català?',
        es: '¿Dónde está el taller de catalán?',
        en: 'Where is the Catalan workshop?',
      },
      theory: {
        ca: '«El taller de català és al tercer pis». La biblioteca és al segon, i la inscripció, al primer.',
        es: '«El taller de català és al tercer pis». La biblioteca está en el segundo, y la inscripción, en el primero.',
        en: '‘El taller de català és al tercer pis’ (the Catalan workshop is on the third floor). The library is on the second, and registration is on the first.',
      },
    },
  ],
  // ── RUTINES ──
  'a1-u07-01': [
    {
      question: {
        ca: 'Completa amb «treballar» en present.',
        es: 'Completa con «treballar» (trabajar) en presente.',
        en: 'Fill in ‘treballar’ (to work) in the present tense.',
      },
      theory: {
        ca: 'Amb «nosaltres», la forma del present és «treballem».',
        es: 'Con «nosaltres», la forma del presente es «treballem».',
        en: 'With ‘nosaltres’ (we), the present form is ‘treballem’.',
      },
    },
    {
      question: {
        ca: 'Completa amb «treballar» en present.',
        es: 'Completa con «treballar» (trabajar) en presente.',
        en: 'Fill in ‘treballar’ (to work) in the present tense.',
      },
      theory: {
        ca: 'Amb «tu» diem «treballes».',
        es: 'Con «tu» decimos «treballes».',
        en: 'With ‘tu’ (you), we say ‘treballes’.',
      },
    },
    {
      question: {
        ca: 'Completa amb «treballar» en present.',
        es: 'Completa con «treballar» (trabajar) en presente.',
        en: 'Fill in ‘treballar’ (to work) in the present tense.',
      },
      theory: {
        ca: 'Amb «elles» diem «treballen».',
        es: 'Con «elles» decimos «treballen».',
        en: 'With ‘elles’ (they), we say ‘treballen’.',
      },
    },
  ],
  'a1-u07-02': [
    {
      question: {
        ca: 'Quan estudia la Sara?',
        es: '¿Cuándo estudia Sara?',
        en: 'When does Sara study?',
      },
      theory: {
        ca: '«A la tarda» indica el moment en què estudia.',
        es: '«A la tarda» (por la tarde) indica el momento en que estudia.',
        en: '‘A la tarda’ (in the afternoon) tells you when she studies.',
      },
    },
  ],
  'a1-u07-03': [
    {
      question: { ca: 'Completa: «La Sara ___ català cada dia».' },
      theory: {
        ca: 'La Sara correspon a «ella»: «estudia».',
        es: 'Para Sara se usa la forma de «ella»: «estudia».',
        en: 'For Sara, use the ‘ella’ (she) form: ‘estudia’.',
      },
    },
    {
      question: { ca: 'Completa: «Tu ___ català cada dia».' },
      theory: {
        ca: 'Amb «tu» diem «estudies».',
        es: 'Con «tu» decimos «estudies».',
        en: 'With ‘tu’ (you), we say ‘estudies’.',
      },
    },
    {
      question: { ca: 'Completa: «Nosaltres ___ català al vespre».' },
      theory: {
        ca: 'Amb «nosaltres» diem «estudiem».',
        es: 'Con «nosaltres» decimos «estudiem».',
        en: 'With ‘nosaltres’ (we), we say ‘estudiem’.',
      },
    },
  ],
  'a1-u07-04': [
    {
      question: {
        ca: 'Completa la frase sobre la teva rutina amb la paraula que falta.',
        es: 'Completa la frase sobre tu rutina con la palabra que falta.',
        en: 'Fill in the missing word in this sentence about your routine.',
      },
      theory: {
        ca: 'La forma que practiquem és «em llevo».',
        es: 'La forma que practicamos es «em llevo» (me levanto).',
        en: "The form we're practising is ‘em llevo’ (I get up).",
      },
    },
    {
      question: {
        ca: 'Completa amb la paraula que falta.',
        es: 'Completa con la palabra que falta.',
        en: 'Fill in the missing word.',
      },
      theory: {
        ca: 'Amb «tu» diem «et lleves».',
        es: 'Con «tu» decimos «et lleves».',
        en: 'With ‘tu’ (you), we say ‘et lleves’.',
      },
    },
    {
      question: {
        ca: 'Completa amb la paraula que falta.',
        es: 'Completa con la palabra que falta.',
        en: 'Fill in the missing word.',
      },
      theory: {
        ca: 'Amb «la Sara» diem «es lleva».',
        es: 'Con «la Sara» decimos «es lleva».',
        en: 'With ‘la Sara’, we say ‘es lleva’.',
      },
    },
  ],
  'a1-u07-05': [
    {
      question: { ca: 'Completa: «Jo ___ a classe cada dia».' },
      theory: {
        ca: "La primera persona d'«anar» és «vaig».",
        es: 'La primera persona de «anar» (ir) es «vaig».',
        en: 'The first person of ‘anar’ (to go) is ‘vaig’.',
      },
    },
    {
      question: { ca: 'Completa: «Tu ___ al mercat cada dissabte».' },
      theory: {
        ca: 'Amb «tu» diem «vas».',
        es: 'Con «tu» decimos «vas».',
        en: 'With ‘tu’ (you), we say ‘vas’.',
      },
    },
    {
      question: { ca: 'Completa: «La Sara ___ a la biblioteca cada dia».' },
      theory: {
        ca: 'Amb «la Sara» diem «va».',
        es: 'Con «la Sara» decimos «va».',
        en: 'With ‘la Sara’, we say ‘va’.',
      },
    },
  ],
  'a1-u07-06': [
    {
      question: {
        ca: 'Avui tens el dia lliure. Quina frase és certa?',
        es: 'Hoy tienes el día libre. ¿Qué frase es verdadera?',
        en: 'You have the day off today. Which sentence is true?',
      },
      theory: {
        ca: "«No» davant del verb nega l'acció.",
        es: '«No» delante del verbo niega la acción.',
        en: '‘No’ before the verb negates the action.',
      },
    },
    {
      question: {
        ca: 'Avui la Sara descansa tot el dia. Quina frase és certa?',
        es: 'Hoy Sara descansa todo el día. ¿Qué frase es verdadera?',
        en: 'Sara is resting all day today. Which sentence is true?',
      },
      theory: {
        ca: "Posem «no» davant del verb per negar l'acció: «La Sara no estudia avui».",
        es: 'Ponemos «no» delante del verbo para negar la acción: «La Sara no estudia avui».',
        en: 'We put ‘no’ before the verb to negate the action: ‘La Sara no estudia avui’.',
      },
    },
    {
      question: {
        ca: 'Els diumenges et quedes a casa tot el dia. Quina frase és certa?',
        es: 'Los domingos te quedas en casa todo el día. ¿Qué frase es verdadera?',
        en: 'On Sundays you stay at home all day. Which sentence is true?',
      },
      theory: {
        ca: "«No vaig» nega l'acció d'anar-hi.",
        es: '«No vaig» (no voy) niega la acción de ir.',
        en: "‘No vaig’ (I don't go) negates the action of going there.",
      },
    },
  ],
  'a1-u07-07': [
    {
      question: {
        ca: "Què fa l'Adil a la tarda?",
        es: '¿Qué hace Adil por la tarde?',
        en: 'What does Adil do in the afternoon?',
      },
      theory: {
        ca: 'Cada moment del dia va amb la seva acció: «a la tarda vaig a classe».',
        es: 'Cada momento del día va con su acción: «a la tarda vaig a classe» (por la tarde voy a clase).',
        en: 'Each time of day goes with its own activity: ‘a la tarda vaig a classe’ (in the afternoon I go to class).',
      },
    },
  ],
  'a1-u07-08': [
    {
      question: {
        ca: 'Quan treballa?',
        es: '¿Cuándo trabaja?',
        en: 'When do they work?',
      },
      theory: {
        ca: '«Treballo a la tarda». Al matí estudia i al vespre fa esport.',
        es: '«Treballo a la tarda» (trabajo por la tarde). Por la mañana estudia y al anochecer hace deporte.',
        en: '‘Treballo a la tarda’ (I work in the afternoon). In the morning they study, and in the evening they do sport.',
      },
    },
  ],
  // ── DIES I HORES ──
  'a1-u08-01': [
    {
      question: {
        ca: 'A quina hora obre dissabte?',
        es: '¿A qué hora abre el sábado?',
        en: 'What time does it open on Saturday?',
      },
      theory: {
        ca: "L'hora inicial de l'horari és les deu.",
        es: 'El horario empieza a las diez.',
        en: 'The opening hours start at ten.',
      },
    },
  ],
  'a1-u08-02': [
    {
      question: {
        ca: 'Avui és dilluns. Quin dia serà demà?',
        es: 'Hoy es lunes. ¿Qué día será mañana?',
        en: 'Today is Monday. What day will it be tomorrow?',
      },
      theory: {
        ca: 'El dia següent a dilluns és dimarts.',
        es: 'El día siguiente al lunes es el martes.',
        en: 'The day after Monday is Tuesday.',
      },
    },
    {
      question: {
        ca: 'Avui és dijous. Quin dia serà demà?',
        es: 'Hoy es jueves. ¿Qué día será mañana?',
        en: 'Today is Thursday. What day will it be tomorrow?',
      },
      theory: {
        ca: 'Després de dijous ve divendres.',
        es: 'Después del jueves viene el viernes.',
        en: 'Friday comes after Thursday.',
      },
    },
    {
      question: {
        ca: 'Avui és diumenge. Quin dia serà demà?',
        es: 'Hoy es domingo. ¿Qué día será mañana?',
        en: 'Today is Sunday. What day will it be tomorrow?',
      },
      theory: {
        ca: 'Després de diumenge ve dilluns.',
        es: 'Después del domingo viene el lunes.',
        en: 'Monday comes after Sunday.',
      },
    },
  ],
  'a1-u08-03': [
    {
      question: {
        ca: 'Escriu la paraula que falta per indicar a quina hora comença la classe.',
        es: 'Escribe la palabra que falta para indicar a qué hora empieza la clase.',
        en: 'Write the missing word to say what time the class starts.',
      },
      theory: {
        ca: '«A les nou» indica a quina hora comença una activitat.',
        es: '«A les nou» (a las nueve) indica a qué hora empieza una actividad.',
        en: '‘A les nou’ (at nine) tells you what time something starts.',
      },
    },
    {
      question: {
        ca: "Escriu la paraula que falta per indicar l'hora de la cita.",
        es: 'Escribe la palabra que falta para indicar la hora de la cita.',
        en: 'Write the missing word to give the time of the appointment.',
      },
      theory: {
        ca: "Diem «a les cinc» per indicar l'hora.",
        es: 'Decimos «a les cinc» (a las cinco) para indicar la hora.',
        en: 'We say ‘a les cinc’ (at five) to give the time.',
      },
    },
    {
      question: {
        ca: "Escriu la paraula que falta per indicar l'hora de sortida.",
        es: 'Escribe la palabra que falta para indicar la hora de salida.',
        en: 'Write the missing word to give the departure time.',
      },
      theory: {
        ca: "Diem «a les deu» per indicar l'hora.",
        es: 'Decimos «a les deu» (a las diez) para indicar la hora.',
        en: 'We say ‘a les deu’ (at ten) to give the time.',
      },
    },
  ],
  'a1-u08-04': [
    {
      question: {
        ca: 'El rellotge marca les 09.30. Quina expressió correspon a aquesta hora?',
        es: 'El reloj marca las 09.30. ¿Qué expresión corresponde a esta hora?',
        en: 'The clock shows 09.30. Which expression matches this time?',
      },
      theory: {
        ca: "A les 09.30 han passat dos quarts de l'hora que acaba a les deu.",
        es: 'A las 09.30 han pasado dos cuartos de la hora que termina a las diez.',
        en: 'At 09.30, two quarters of the hour ending at ten have gone by.',
      },
    },
    {
      question: {
        ca: 'El rellotge marca les 09.15. Quina expressió correspon a aquesta hora?',
        es: 'El reloj marca las 09.15. ¿Qué expresión corresponde a esta hora?',
        en: 'The clock shows 09.15. Which expression matches this time?',
      },
      theory: {
        ca: 'Les 09.15 són un quart de deu.',
        es: 'A las 09.15 ha pasado el primer cuarto de la hora que termina a las diez.',
        en: 'At 09.15, the first quarter of the hour ending at ten has gone by.',
      },
    },
    {
      question: {
        ca: 'El rellotge marca les 09.45. Quina expressió correspon a aquesta hora?',
        es: 'El reloj marca las 09.45. ¿Qué expresión corresponde a esta hora?',
        en: 'The clock shows 09.45. Which expression matches this time?',
      },
      theory: {
        ca: 'Les 09.45 són tres quarts de deu.',
        es: 'A las 09.45 han pasado tres cuartos de la hora que termina a las diez.',
        en: 'At 09.45, three quarters of the hour ending at ten have gone by.',
      },
    },
  ],
  'a1-u08-05': [
    {
      question: {
        ca: 'Quina data hi correspon?',
        es: '¿Qué fecha corresponde?',
        en: 'Which date is it (day/month)?',
      },
      theory: {
        ca: "Novembre és l'onzè mes: 12/11.",
        es: 'Noviembre es el undécimo mes: 12/11.',
        en: 'November is the eleventh month: 12/11 (day/month).',
      },
    },
  ],
  'a1-u08-06': [
    {
      question: { ca: 'Completa: «La cita és ___ una».' },
      theory: {
        ca: 'Amb la una fem servir el singular: «a la una».',
        es: 'Con la una usamos el singular: «a la una».',
        en: "With one o'clock, we use the singular: ‘a la una’.",
      },
    },
    {
      question: { ca: 'Completa: «El taller comença ___ dues».' },
      theory: {
        ca: 'Amb «dues» diem «a les dues».',
        es: 'Con «dues» (2) decimos «a les dues».',
        en: 'With ‘dues’ (2), we say ‘a les dues’.',
      },
    },
    {
      question: { ca: 'Completa: «La biblioteca obre ___ onze».' },
      theory: {
        ca: 'Diem «a les onze» per indicar aquesta hora.',
        es: 'Decimos «a les onze» (a las once) para indicar esta hora.',
        en: 'We say ‘a les onze’ (at eleven) for this time.',
      },
    },
  ],
  'a1-u08-07': [
    {
      question: {
        ca: 'A quina hora és la classe?',
        es: '¿A qué hora es la clase?',
        en: 'What time is the class?',
      },
      theory: {
        ca: "«A les sis de la tarda» diu l'hora; «els dimarts» diu quin dia es repeteix.",
        es: '«A les sis de la tarda» (a las seis de la tarde) dice la hora; «els dimarts» (los martes), qué día se repite.',
        en: '‘A les sis de la tarda’ (at six in the evening) gives the time; ‘els dimarts’ (on Tuesdays) says which day it happens every week.',
      },
    },
  ],
  'a1-u08-08': [
    {
      question: {
        ca: 'A quina hora obre el centre dijous?',
        es: '¿A qué hora abre el centro el jueves?',
        en: 'What time does the centre open on Thursday?',
      },
      theory: {
        ca: '«Dijous obrim a les nou». A la una tanquen, i a les deu obren dissabte.',
        es: '«Dijous obrim a les nou» (el jueves abrimos a las nueve). A la una cierran, y el sábado abren a las diez.',
        en: '‘Dijous obrim a les nou’ (on Thursday we open at nine). They close at one, and on Saturday they open at ten.',
      },
    },
  ],
  // ── COMPRES ──
  'a1-u09-01': [
    {
      question: {
        ca: "Vols saber el preu d'un pa. Què preguntes?",
        es: 'Quieres saber el precio de un pan. ¿Qué preguntas?',
        en: 'You want to know the price of a loaf of bread. What do you ask?',
      },
      theory: {
        ca: '«Quant val?» demana el preu.',
        es: '«Quant val?» pregunta el precio.',
        en: '‘Quant val?’ asks the price.',
      },
    },
    {
      question: {
        ca: "Vols saber el preu d'una llibreta. Què preguntes?",
        es: 'Quieres saber el precio de una libreta. ¿Qué preguntas?',
        en: 'You want to know the price of a notebook. What do you ask?',
      },
      theory: {
        ca: '«Quant costa?» demana el preu.',
        es: '«Quant costa?» pregunta el precio.',
        en: '‘Quant costa?’ asks the price.',
      },
    },
    {
      question: {
        ca: 'Vols saber què val una bossa. Quina pregunta fas?',
        es: 'Quieres saber cuánto vale una bolsa. ¿Qué pregunta haces?',
        en: 'You want to know how much a bag costs. What question do you ask?',
      },
      theory: {
        ca: '«Quin preu té?» serveix per preguntar el preu.',
        es: '«Quin preu té?» sirve para preguntar el precio.',
        en: '‘Quin preu té?’ is a way to ask the price.',
      },
    },
  ],
  'a1-u09-02': [
    {
      question: {
        ca: 'Quin producte val dos euros el quilo?',
        es: '¿Qué producto vale dos euros el kilo?',
        en: 'Which product costs two euros a kilo?',
      },
      theory: {
        ca: "L'etiqueta de les pomes marca dos euros per quilo.",
        es: 'La etiqueta de las manzanas marca dos euros el kilo.',
        en: 'The label for the apples says two euros a kilo.',
      },
    },
  ],
  'a1-u09-03': [
    {
      question: {
        ca: 'Completa amb la preposició que uneix la quantitat i el producte.',
        es: 'Completa con la preposición que une la cantidad y el producto.',
        en: 'Fill in the preposition that links the quantity and the product.',
      },
      theory: {
        ca: 'La construcció és «un quilo de» davant de «tomàquets».',
        es: 'La construcción es «un quilo de» delante de «tomàquets» (tomates).',
        en: 'The pattern is ‘un quilo de’ (a kilo of) before ‘tomàquets’ (tomatoes).',
      },
    },
    {
      question: {
        ca: 'Completa amb la paraula que uneix la quantitat i el producte.',
        es: 'Completa con la palabra que une la cantidad y el producto.',
        en: 'Fill in the word that links the quantity and the product.',
      },
      theory: {
        ca: 'Diem «mig quilo de peres».',
        es: 'Decimos «mig quilo de peres» (medio kilo de peras).',
        en: 'We say ‘mig quilo de peres’ (half a kilo of pears).',
      },
    },
    {
      question: {
        ca: 'Completa amb la paraula que uneix la quantitat i el producte.',
        es: 'Completa con la palabra que une la cantidad y el producto.',
        en: 'Fill in the word that links the quantity and the product.',
      },
      theory: {
        ca: 'Diem «un litre de llet».',
        es: 'Decimos «un litre de llet» (un litro de leche).',
        en: 'We say ‘un litre de llet’ (a litre of milk).',
      },
    },
  ],
  'a1-u09-04': [
    {
      question: {
        ca: 'Quina xifra correspon a «vint-i-set»?',
        es: '¿Qué cifra corresponde a «vint-i-set»?',
        en: 'Which number is ‘vint-i-set’?',
      },
      theory: {
        ca: 'Vint-i-set correspon a 27.',
        es: 'Es el 27.',
        en: "It's 27.",
      },
    },
    {
      question: {
        ca: 'Quina xifra correspon a «vint-i-tres»?',
        es: '¿Qué cifra corresponde a «vint-i-tres»?',
        en: 'Which number is ‘vint-i-tres’?',
      },
      theory: {
        ca: 'Vint-i-tres correspon a 23.',
        es: 'Es el 23.',
        en: "It's 23.",
      },
    },
    {
      question: {
        ca: 'Quina xifra correspon a «trenta-set»?',
        es: '¿Qué cifra corresponde a «trenta-set»?',
        en: 'Which number is ‘trenta-set’?',
      },
      theory: {
        ca: 'Trenta-set correspon a 37.',
        es: 'Es el 37.',
        en: "It's 37.",
      },
    },
  ],
  'a1-u09-05': [
    {
      question: { ca: 'Completa: «Vull ___ pomes».' },
      theory: {
        ca: '«Dues pomes» és el model que practiquem. En alguns parlars també es diu «dos pomes».',
        es: '«Dues pomes» (dos manzanas) es el modelo que practicamos. En algunas hablas también se dice «dos pomes».',
        en: "‘Dues pomes’ (two apples) is the form we're practising. Some dialects also say ‘dos pomes’.",
      },
    },
    {
      question: { ca: 'Completa: «Vull ___ pans».' },
      theory: {
        ca: '«Pans» és plural: «dos pans».',
        es: '«Pans» (panes) es plural: «dos pans».',
        en: '‘Pans’ (loaves) is plural: ‘dos pans’.',
      },
    },
    {
      question: { ca: 'Completa: «Vull ___ peres».' },
      theory: {
        ca: '«Dues peres» és el model que practiquem; alguns parlars també fan servir «dos peres».',
        es: '«Dues peres» (dos peras) es el modelo que practicamos; algunas hablas también usan «dos peres».',
        en: "‘Dues peres’ (two pears) is the form we're practising; some dialects also use ‘dos peres’.",
      },
    },
  ],
  'a1-u09-06': [
    {
      question: {
        ca: 'No hi ha ni una poma. Completa amb una sola paraula.',
        es: 'No hay ni una manzana. Completa con una sola palabra.',
        en: "There isn't a single apple. Fill in the gap with one word.",
      },
      theory: {
        ca: '«Cap» acompanya el nom comptable «poma» en aquesta frase negativa.',
        es: '«Cap» (ninguna) acompaña al nombre contable «poma» (manzana) en esta frase negativa.',
        en: '‘Cap’ (no, not a single) goes with the countable noun ‘poma’ (apple) in this negative sentence.',
      },
    },
    {
      question: {
        ca: 'No hi ha ni una pera. Completa amb una sola paraula.',
        es: 'No hay ni una pera. Completa con una sola palabra.',
        en: "There isn't a single pear. Fill in the gap with one word.",
      },
      theory: {
        ca: 'Diem «cap pera» quan no en queda ni una.',
        es: 'Decimos «cap pera» (ninguna pera) cuando no queda ni una.',
        en: "We say ‘cap pera’ (no pears) when there isn't a single one left.",
      },
    },
    {
      question: {
        ca: 'La gerra és buida. Completa per dir que no hi ha aigua.',
        es: 'La jarra está vacía. Completa para decir que no hay agua.',
        en: "The jug is empty. Fill in the gap to say there's no water.",
      },
      theory: {
        ca: "«Gens d'aigua» expressa que no en queda. També podem dir «ni gota d'aigua».",
        es: "«Gens d'aigua» (nada de agua) expresa que no queda. También podemos decir «ni gota d'aigua».",
        en: "‘Gens d'aigua’ (no water at all) means there's none left. We can also say ‘ni gota d'aigua’ (not a drop of water).",
      },
    },
  ],
  'a1-u09-07': [
    {
      question: {
        ca: 'Quant val tot?',
        es: '¿Cuánto vale todo?',
        en: 'How much is it altogether?',
      },
      theory: {
        ca: '«Set euros amb cinquanta» és 7,50 €. Compte amb els parells que sonen semblants: «set» i «disset», «quinze» i «cinquanta».',
        es: '«Set euros amb cinquanta» son 7,50 €. Cuidado con las parejas que suenan parecido: «set» y «disset» (7 y 17), «quinze» y «cinquanta» (15 y 50).',
        en: '‘Set euros amb cinquanta’ is €7.50. Watch out for pairs that sound alike: ‘set’ and ‘disset’ (7 and 17), ‘quinze’ and ‘cinquanta’ (15 and 50).',
      },
    },
  ],
  'a1-u09-08': [
    {
      question: {
        ca: 'Quant val el quilo de peres?',
        es: '¿Cuánto vale el kilo de peras?',
        en: 'How much is a kilo of pears?',
      },
      theory: {
        ca: '«Peres a dos euros el quilo». «Dos» i «dotze» sonen semblants: a dotze hi ha el formatge.',
        es: '«Peres a dos euros el quilo» (peras a dos euros el kilo). «Dos» y «dotze» (2 y 12) suenan parecido: a doce euros está el queso.',
        en: '‘Peres a dos euros el quilo’ (pears at two euros a kilo). ‘Dos’ and ‘dotze’ (2 and 12) sound alike: the cheese is twelve euros.',
      },
    },
  ],
  // ── MENJAR I BEURE ──
  'a1-u10-01': [
    {
      question: {
        ca: 'No vols sucre al te. Què demanes?',
        es: 'No quieres azúcar en el té. ¿Qué pides?',
        en: "You don't want sugar in your tea. What do you order?",
      },
      theory: {
        ca: '«Sense sucre» exclou el sucre de la beguda.',
        es: '«Sense sucre» (sin azúcar) deja el azúcar fuera de la bebida.',
        en: '‘Sense sucre’ (without sugar) leaves the sugar out of the drink.',
      },
    },
    {
      question: {
        ca: 'Vols cafè i hi vols llet. Què demanes?',
        es: 'Quieres café y quieres que lleve leche. ¿Qué pides?',
        en: 'You want coffee and you want milk in it. What do you order?',
      },
      theory: {
        ca: '«Amb llet» inclou la llet a la comanda.',
        es: '«Amb llet» (con leche) incluye la leche en el pedido.',
        en: '‘Amb llet’ (with milk) includes milk in the order.',
      },
    },
    {
      question: {
        ca: 'Vols un entrepà i no hi vols tomàquet. Què demanes?',
        es: 'Quieres un bocadillo y no quieres que lleve tomate. ¿Qué pides?',
        en: "You want a sandwich, but you don't want tomato in it. What do you order?",
      },
      theory: {
        ca: "«Sense tomàquet» indica que no en vols a l'entrepà.",
        es: '«Sense tomàquet» (sin tomate) indica que no lo quieres en el bocadillo.',
        en: "‘Sense tomàquet’ (without tomato) means you don't want any in your sandwich.",
      },
    },
  ],
  'a1-u10-02': [
    {
      question: {
        ca: 'Qui demana aigua?',
        es: '¿Quién pide agua?',
        en: 'Who orders water?',
      },
      theory: {
        ca: "La comanda d'aigua correspon a la Júlia.",
        es: 'Quien pide agua es Júlia.',
        en: 'Júlia is the one who orders water.',
      },
    },
  ],
  'a1-u10-03': [
    {
      question: {
        ca: 'Ordena la comanda. Comença pel producte i acaba amb la fórmula de cortesia.',
        es: 'Ordena el pedido. Empieza por el producto y termina con la fórmula de cortesía.',
        en: 'Put the words of the order in the right sequence. Start with the item and end with the polite phrase.',
      },
      theory: {
        ca: 'La comanda indica el producte, el tipus i la fórmula de cortesia.',
        es: 'El pedido dice el producto, de qué tipo es y la fórmula de cortesía.',
        en: 'The order gives the item, what kind it is and the polite phrase.',
      },
    },
  ],
  'a1-u10-04': [
    {
      question: {
        ca: 'Completa amb una forma del verb «agradar» en present.',
        es: 'Completa con una forma del verbo «agradar» (gustar) en presente.',
        en: 'Fill in a form of the verb ‘agradar’ (to like) in the present tense.',
      },
      theory: {
        ca: '«Les maduixes» és plural; per això fem servir «agraden».',
        es: '«Les maduixes» (las fresas) es plural; por eso usamos «agraden».',
        en: '‘Les maduixes’ (strawberries) is plural, so we use ‘agraden’.',
      },
    },
    {
      question: {
        ca: 'Completa amb «agradar» en present.',
        es: 'Completa con «agradar» (gustar) en presente.',
        en: 'Fill in ‘agradar’ (to like) in the present tense.',
      },
      theory: {
        ca: "Amb «la sopa» diem «m'agrada».",
        es: "Con «la sopa» decimos «m'agrada».",
        en: "With ‘la sopa’ (soup), we say ‘m'agrada’.",
      },
    },
    {
      question: {
        ca: 'Completa amb «agradar» en present.',
        es: 'Completa con «agradar» (gustar) en presente.',
        en: 'Fill in ‘agradar’ (to like) in the present tense.',
      },
      theory: {
        ca: "Amb «els tomàquets» diem «m'agraden».",
        es: "Con «els tomàquets» (los tomates) decimos «m'agraden».",
        en: "With ‘els tomàquets’ (tomatoes), we say ‘m'agraden’.",
      },
    },
  ],
  'a1-u10-05': [
    {
      question: {
        ca: "Una persona diu «No m'agrada el te». A tu no t'agrada. Què respons?",
        es: "Una persona dice «No m'agrada el te». A ti no te gusta. ¿Qué respondes?",
        en: "Someone says ‘No m'agrada el te’ (I don't like tea). You don't like it either. What do you reply?",
      },
      theory: {
        ca: '«Tampoc» afegeix coincidència amb una afirmació negativa.',
        es: '«Tampoc» expresa coincidencia con una frase negativa.',
        en: '‘Tampoc’ (neither) shows you agree with a negative statement.',
      },
    },
    {
      question: {
        ca: "Una persona diu «M'agrada la sopa». A tu també t'agrada. Què respons?",
        es: "Una persona dice «M'agrada la sopa». A ti también te gusta. ¿Qué respondes?",
        en: "Someone says ‘M'agrada la sopa’ (I like soup). You like it too. What do you reply?",
      },
      theory: {
        ca: '«També» expressa que coincidiu en un gust afirmatiu.',
        es: '«També» expresa que a los dos os gusta.',
        en: '‘També’ (too) shows you both like it.',
      },
    },
    {
      question: {
        ca: "Una persona diu «M'agrada el cafè». A tu no t'agrada. Què respons?",
        es: "Una persona dice «M'agrada el cafè». A ti no te gusta. ¿Qué respondes?",
        en: "Someone says ‘M'agrada el cafè’ (I like coffee). You don't like it. What do you reply?",
      },
      theory: {
        ca: '«A mi no» expressa un gust diferent en aquest context.',
        es: 'Aquí, «A mi no» expresa un gusto distinto.',
        en: "Here, ‘A mi no’ (I don't) shows your taste is different.",
      },
    },
  ],
  'a1-u10-06': [
    {
      question: {
        ca: "Vols dir que el cafè no t'agrada de cap manera. Quina frase ho expressa?",
        es: 'Quieres decir que el café no te gusta en absoluto. ¿Qué frase lo expresa?',
        en: "You want to say you don't like coffee at all. Which sentence says that?",
      },
      theory: {
        ca: "«Gens» vol dir que no t'agrada de cap manera; «no gaire», que t'agrada poc.",
        es: '«Gens» quiere decir que no te gusta en absoluto; «no gaire», que te gusta poco.',
        en: "‘Gens’ means you don't like it at all; ‘no gaire’ means you don't like it much.",
      },
    },
    {
      question: {
        ca: "Vols dir que les olives no t'agraden de cap manera. Quina frase ho expressa?",
        es: 'Quieres decir que las aceitunas no te gustan en absoluto. ¿Qué frase lo expresa?',
        en: "You want to say you don't like olives at all. Which sentence says that?",
      },
      theory: {
        ca: "«No… gens» expressa que no t'agraden de cap manera.",
        es: '«No… gens» expresa que no te gustan en absoluto.',
        en: "‘No… gens’ means you don't like them at all.",
      },
    },
    {
      question: {
        ca: "El te t'agrada una mica, però no gaire. Quina frase ho expressa?",
        es: 'El té te gusta un poco, pero no mucho. ¿Qué frase lo expresa?',
        en: 'You like tea a little, but not much. Which sentence says that?',
      },
      theory: {
        ca: '«No gaire» expressa un grau baix; «gens» expressa absència.',
        es: '«No gaire» indica poco; «gens», que no te gusta en absoluto.',
        en: '‘No gaire’ means not much; ‘gens’ means not at all.',
      },
    },
  ],
  'a1-u10-07': [
    {
      question: {
        ca: 'Què demana la Marta?',
        es: '¿Qué pide Marta?',
        en: 'What does Marta order?',
      },
      theory: {
        ca: "La Marta demana «un cafè amb llet»; l'altra persona, «un te sense sucre» i «un entrepà de formatge».",
        es: 'Marta pide «un cafè amb llet»; la otra persona, «un te sense sucre» y «un entrepà de formatge» (un bocadillo de queso).',
        en: 'Marta orders ‘un cafè amb llet’ (a coffee with milk); the other person orders ‘un te sense sucre’ (tea without sugar) and ‘un entrepà de formatge’ (a cheese sandwich).',
      },
    },
  ],
  'a1-u10-08': [
    {
      question: {
        ca: 'Què no li agrada gaire?',
        es: '¿Qué no le gusta mucho?',
        en: "What don't they like much?",
      },
      theory: {
        ca: '«No gaire» vol dir que agrada poc: el te. El cafè li agrada més, i les maduixes, molt.',
        es: '«No gaire» quiere decir que gusta poco: el té. El café le gusta más, y las fresas, mucho.',
        en: "‘No gaire’ means not much: that's the tea. They like coffee more, and strawberries a lot.",
      },
    },
  ],
  // ── NECESSITATS ──
  'a1-u11-01': [
    {
      question: {
        ca: 'Necessites beure aigua. Quina frase ho expressa?',
        es: 'Necesitas beber agua. ¿Qué frase lo expresa?',
        en: 'You need to drink water. Which sentence says that?',
      },
      theory: {
        ca: 'La set és la necessitat de beure.',
        es: 'La sed es la necesidad de beber.',
        en: 'Thirst is the need to drink.',
      },
    },
    {
      question: {
        ca: 'Necessites menjar. Quina frase ho expressa?',
        es: 'Necesitas comer. ¿Qué frase lo expresa?',
        en: 'You need to eat. Which sentence says that?',
      },
      theory: {
        ca: 'La gana és la necessitat de menjar.',
        es: 'El hambre es la necesidad de comer.',
        en: 'Hunger is the need to eat.',
      },
    },
    {
      question: {
        ca: 'Necessites dormir. Quina frase ho expressa?',
        es: 'Necesitas dormir. ¿Qué frase lo expresa?',
        en: 'You need to sleep. Which sentence says that?',
      },
      theory: {
        ca: 'La son és la necessitat de dormir.',
        es: 'El sueño es la necesidad de dormir.',
        en: 'Sleepiness is the need to sleep.',
      },
    },
  ],
  'a1-u11-02': [
    {
      question: {
        ca: 'Completa amb una forma de «tenir».',
        es: 'Completa con una forma de «tenir» (tener).',
        en: 'Fill in a form of ‘tenir’ (to have).',
      },
      theory: {
        ca: 'Amb «jo», la forma és «tinc»: «tinc fred».',
        es: 'Con «jo», la forma es «tinc»: «tinc fred» (tengo frío).',
        en: "With ‘jo’ (I), the form is ‘tinc’: ‘tinc fred’ (I'm cold).",
      },
    },
    {
      question: {
        ca: 'Completa amb «tenir» en present.',
        es: 'Completa con «tenir» (tener) en presente.',
        en: 'Fill in ‘tenir’ (to have) in the present tense.',
      },
      theory: {
        ca: 'Amb «tu» diem «tens gana».',
        es: 'Con «tu» decimos «tens gana» (tienes hambre).',
        en: "With ‘tu’ (you), we say ‘tens gana’ (you're hungry).",
      },
    },
    {
      question: {
        ca: 'Completa amb «tenir» en present.',
        es: 'Completa con «tenir» (tener) en presente.',
        en: 'Fill in ‘tenir’ (to have) in the present tense.',
      },
      theory: {
        ca: 'Amb «la Rita» diem «té son».',
        es: 'Con «la Rita» decimos «té son» (tiene sueño).',
        en: 'With ‘la Rita’, we say ‘té son’ (is sleepy).',
      },
    },
  ],
  'a1-u11-03': [
    {
      question: {
        ca: 'Quina part del cos li fa mal?',
        es: '¿Qué parte del cuerpo le duele?',
        en: "Which part of Marc's body hurts?",
      },
      theory: {
        ca: 'El text diu que li fa mal el peu.',
        es: 'El texto dice que le duele el pie.',
        en: "The text says that Marc's foot hurts.",
      },
    },
  ],
  'a1-u11-04': [
    {
      question: {
        ca: 'Completa amb una forma del verb «fer» en present.',
        es: 'Completa con una forma del verbo «fer» (hacer) en presente.',
        en: 'Fill in a form of the verb ‘fer’ (to do, to make) in the present tense.',
      },
      theory: {
        ca: '«Les cames» és plural: «em fan mal».',
        es: '«Les cames» (las piernas) es plural: «em fan mal» (me duelen).',
        en: '‘Les cames’ (legs) is plural: ‘em fan mal’ (they hurt).',
      },
    },
    {
      question: {
        ca: 'Completa amb «fer» en present.',
        es: 'Completa con «fer» (hacer) en presente.',
        en: 'Fill in ‘fer’ (to do, to make) in the present tense.',
      },
      theory: {
        ca: 'Amb «el cap» diem «em fa mal».',
        es: 'Con «el cap» (la cabeza) decimos «em fa mal» (me duele).',
        en: 'With ‘el cap’ (head), we say ‘em fa mal’ (it hurts).',
      },
    },
    {
      question: {
        ca: 'Completa amb «fer» en present.',
        es: 'Completa con «fer» (hacer) en presente.',
        en: 'Fill in ‘fer’ (to do, to make) in the present tense.',
      },
      theory: {
        ca: 'Amb «els peus» diem «em fan mal».',
        es: 'Con «els peus» (los pies) decimos «em fan mal» (me duelen).',
        en: 'With ‘els peus’ (feet), we say ‘em fan mal’ (they hurt).',
      },
    },
  ],
  'a1-u11-05': [
    {
      question: {
        ca: 'Completa la frase que descriu el temps: «Avui ___ fred».',
        es: 'Completa la frase que describe el tiempo: «Avui ___ fred».',
        en: 'Complete the sentence about the weather: ‘Avui ___ fred’.',
      },
      theory: {
        ca: '«Fa fred» descriu el temps. «Tinc fred» descriu una sensació personal.',
        es: '«Fa fred» (hace frío) describe el tiempo. «Tinc fred» (tengo frío) describe una sensación personal.',
        en: "‘Fa fred’ (it's cold) describes the weather. ‘Tinc fred’ (I'm cold) describes how you feel.",
      },
    },
    {
      question: {
        ca: 'Completa la frase sobre el temps: «Avui ___ calor».',
        es: 'Completa la frase sobre el tiempo: «Avui ___ calor».',
        en: 'Complete the sentence about the weather: ‘Avui ___ calor’.',
      },
      theory: {
        ca: '«Fa calor» descriu el temps.',
        es: '«Fa calor» (hace calor) describe el tiempo.',
        en: "‘Fa calor’ (it's hot) describes the weather.",
      },
    },
    {
      question: {
        ca: 'Completa la frase sobre una sensació personal: «Jo ___ fred».',
        es: 'Completa la frase sobre una sensación personal: «Jo ___ fred».',
        en: 'Complete the sentence about how you feel: ‘Jo ___ fred’.',
      },
      theory: {
        ca: '«Tinc fred» expressa una sensació de la persona.',
        es: '«Tinc fred» (tengo frío) expresa una sensación de la persona.',
        en: "‘Tinc fred’ (I'm cold) expresses how the person feels.",
      },
    },
  ],
  'a1-u11-06': [
    {
      question: { ca: 'Completa: «Per a aquesta activitat, he ___ portar una llibreta».' },
      theory: {
        ca: '«Haver de + infinitiu» expressa aquí una obligació.',
        es: '«Haver de + infinitiu» (tener que + infinitivo) expresa aquí una obligación.',
        en: '‘Haver de + infinitiu’ (to have to + infinitive) expresses an obligation here.',
      },
    },
    {
      question: { ca: 'Completa: «Per entrar al taller, has ___ mostrar la inscripció».' },
      theory: {
        ca: 'Diem «has de» per expressar una obligació.',
        es: 'Decimos «has de» (tienes que) para expresar una obligación.',
        en: 'We say ‘has de’ (you have to) to express an obligation.',
      },
    },
    {
      question: { ca: 'Completa: «Demà he ___ portar el llibre».' },
      theory: {
        ca: 'La construcció és «he de portar».',
        es: 'La construcción es «he de portar» (tengo que traer).',
        en: 'The pattern is ‘he de portar’ (I have to bring).',
      },
    },
  ],
  'a1-u11-07': [
    {
      question: {
        ca: 'Què li fa mal a la Laia?',
        es: '¿Qué le duele a Laia?',
        en: 'Where does Laia hurt?',
      },
      theory: {
        ca: '«Em fa mal el cap» diu quina part del cos fa mal; «tinc fred» és una sensació.',
        es: '«Em fa mal el cap» (me duele la cabeza) dice qué parte del cuerpo duele; «tinc fred» (tengo frío) es una sensación.',
        en: "‘Em fa mal el cap’ (my head hurts) says which part of the body hurts; ‘tinc fred’ (I'm cold) is a feeling.",
      },
    },
  ],
  'a1-u11-08': [
    {
      question: {
        ca: 'Quin temps fa avui?',
        es: '¿Qué tiempo hace hoy?',
        en: "What's the weather like today?",
      },
      theory: {
        ca: '«Plou i fa fred». Les altres dues van amb «no»: «no fa sol», «no neva».',
        es: '«Plou i fa fred» (llueve y hace frío). Las otras dos van con «no»: «no fa sol» (no hace sol), «no neva» (no nieva).',
        en: "‘Plou i fa fred’ (it's raining and it's cold). The other two go with ‘no’: ‘no fa sol’ (it isn't sunny), ‘no neva’ (it isn't snowing).",
      },
    },
  ],
  // ── QUEDAR AMB ALGÚ ──
  'a1-u12-01': [
    {
      question: {
        ca: 'On es trobaran?',
        es: '¿Dónde se encontrarán?',
        en: 'Where will they meet?',
      },
      theory: {
        ca: 'El lloc indicat és davant del mercat.',
        es: 'El lugar indicado es delante del mercado.',
        en: 'The place given is in front of the market.',
      },
    },
  ],
  'a1-u12-02': [
    {
      question: {
        ca: 'Et proposen quedar avui, però treballes i no hi pots anar. Què respons?',
        es: 'Te proponen quedar hoy, pero trabajas y no puedes ir. ¿Qué respondes?',
        en: "Someone suggests meeting up today, but you're working and can't go. What do you reply?",
      },
      theory: {
        ca: "«Avui no puc» indica que no pots acceptar la proposta d'avui.",
        es: '«Avui no puc» (hoy no puedo) indica que no puedes aceptar la propuesta de hoy.',
        en: "‘Avui no puc’ (I can't today) shows you can't accept the plan for today.",
      },
    },
    {
      question: {
        ca: 'Et proposen quedar demà i hi pots anar. Què respons per acceptar?',
        es: 'Te proponen quedar mañana y puedes ir. ¿Qué respondes para aceptar?',
        en: 'Someone suggests meeting up tomorrow and you can go. What do you reply to accept?',
      },
      theory: {
        ca: '«Em va bé» accepta la proposta.',
        es: '«Em va bé» (me va bien) acepta la propuesta.',
        en: '‘Em va bé’ (that works for me) accepts the plan.',
      },
    },
    {
      question: {
        ca: 'Et proposen quedar divendres, però tens classe. Què respons?',
        es: 'Te proponen quedar el viernes, pero tienes clase. ¿Qué respondes?',
        en: 'Someone suggests meeting up on Friday, but you have class. What do you reply?',
      },
      theory: {
        ca: '«No puc» indica que no pots acceptar la proposta.',
        es: '«No puc» (no puedo) indica que no puedes aceptar la propuesta.',
        en: "‘No puc’ (I can't) shows you can't accept the plan.",
      },
    },
  ],
  'a1-u12-03': [
    {
      question: {
        ca: 'Escriu el dia que falta.',
        es: 'Escribe el día que falta.',
        en: 'Write the missing day.',
      },
      theory: {
        ca: 'Després de dimarts ve dimecres.',
        es: 'Después del martes viene el miércoles.',
        en: 'Wednesday comes after Tuesday.',
      },
    },
    {
      question: {
        ca: 'Escriu el dia que falta.',
        es: 'Escribe el día que falta.',
        en: 'Write the missing day.',
      },
      theory: {
        ca: 'Després de dijous ve divendres.',
        es: 'Después del jueves viene el viernes.',
        en: 'Friday comes after Thursday.',
      },
    },
    {
      question: {
        ca: 'Escriu el dia que falta.',
        es: 'Escribe el día que falta.',
        en: 'Write the missing day.',
      },
      theory: {
        ca: 'Després de dissabte ve diumenge.',
        es: 'Después del sábado viene el domingo.',
        en: 'Sunday comes after Saturday.',
      },
    },
  ],
  'a1-u12-04': [
    {
      question: { ca: 'Completa la resposta: «—Per què no vens? —___ treballo».' },
      theory: {
        ca: '«Perquè» introdueix la causa en aquesta resposta.',
        es: '«Perquè» (porque) introduce la causa en esta respuesta.',
        en: '‘Perquè’ (because) introduces the reason in this answer.',
      },
    },
    {
      question: { ca: 'Completa: «—Per què no vens? —___ tinc classe».' },
      theory: {
        ca: '«Perquè» introdueix el motiu de no venir.',
        es: '«Perquè» (porque) introduce el motivo de no venir.',
        en: '‘Perquè’ (because) introduces the reason for not coming.',
      },
    },
    {
      question: { ca: 'Completa: «No vinc ___ no em trobo bé».' },
      theory: {
        ca: '«Perquè» uneix la causa amb el que explica.',
        es: '«Perquè» (porque) une la causa con lo que explica.',
        en: '‘Perquè’ (because) links the reason to what it explains.',
      },
    },
  ],
  'a1-u12-05': [
    {
      question: {
        ca: 'Completa amb el connector de contrast: «Vull venir, ___ no puc».',
        es: 'Completa con el conector de contraste: «Vull venir, ___ no puc».',
        en: 'Fill the gap with the linking word that shows contrast: ‘Vull venir, ___ no puc’.',
      },
      theory: {
        ca: '«Però» contraposa la voluntat de venir i la impossibilitat de fer-ho.',
        es: '«Però» (pero) contrapone las ganas de venir y la imposibilidad de hacerlo.',
        en: '‘Però’ (but) contrasts wanting to come with not being able to.',
      },
    },
    {
      question: {
        ca: "Completa amb la paraula que expressa contrast: «M'agrada el cafè, ___ ara no en vull».",
        es: "Completa con la palabra que expresa contraste: «M'agrada el cafè, ___ ara no en vull».",
        en: "Fill the gap with the word that shows contrast: ‘M'agrada el cafè, ___ ara no en vull’.",
      },
      theory: {
        ca: "«Però» contraposa el gust i la decisió de no prendre'n.",
        es: '«Però» (pero) contrapone el gusto por el café y la decisión de no tomarlo.',
        en: '‘Però’ (but) contrasts liking coffee with deciding not to have any.',
      },
    },
    {
      question: {
        ca: 'Completa amb la paraula que expressa contrast: «Vull sortir, ___ avui he de treballar».',
        es: 'Completa con la palabra que expresa contraste: «Vull sortir, ___ avui he de treballar».',
        en: 'Fill the gap with the word that shows contrast: ‘Vull sortir, ___ avui he de treballar’.',
      },
      theory: {
        ca: '«Però» contraposa dues idees.',
        es: '«Però» (pero) contrapone dos ideas.',
        en: '‘Però’ (but) contrasts two ideas.',
      },
    },
  ],
  'a1-u12-06': [
    {
      question: {
        ca: 'Quan i on han acordat trobar-se?',
        es: '¿Cuándo y dónde han quedado?',
        en: 'When and where have they agreed to meet?',
      },
      theory: {
        ca: "El dia canvia a dissabte; el lloc i l'hora es mantenen.",
        es: 'El día cambia al sábado; el lugar y la hora se mantienen.',
        en: 'The day changes to Saturday; the place and the time stay the same.',
      },
    },
  ],
  'a1-u12-07': [
    {
      question: {
        ca: 'Quan queden?',
        es: '¿Cuándo quedan?',
        en: 'When are they meeting?',
      },
      theory: {
        ca: 'La primera proposta (diumenge) es rebutja; queden amb la segona: «dijous a la tarda».',
        es: 'La primera propuesta (el domingo) se rechaza; quedan con la segunda: «dijous a la tarda» (el jueves por la tarde).',
        en: 'The first suggestion (Sunday) is turned down; they go with the second: ‘dijous a la tarda’ (Thursday afternoon).',
      },
    },
  ],
  'a1-u12-08': [
    {
      question: {
        ca: 'Quin dia proposa quedar?',
        es: '¿Qué día propone para quedar?',
        en: 'What day does Anna suggest meeting up?',
      },
      theory: {
        ca: 'Dimecres no pot i dijous tampoc; proposa «divendres a les set».',
        es: 'El miércoles no puede y el jueves tampoco; propone «divendres a les set» (el viernes a las siete).',
        en: 'Wednesday and Thursday are no good for Anna; the suggestion is ‘divendres a les set’ (Friday at seven).',
      },
    },
  ],
};
