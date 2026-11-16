// La teoria de l'A1 en castellà i en anglès, per a qui ha triat les explicacions en una
// d'aquestes llengües (abast B, decisió de l'usuari del 10/11/2026). Aquí només hi ha el que
// es tradueix: la resta la posa el català de THEORY (data.js) en pintar-la (teoriaCosHTML,
// a index.html). Surt només amb IDIOMES_ACTIU; si aquest fitxer no arriba, tot en català.
// · nom: la traducció del nom del tema, que surt entre parèntesis al costat del català.
// · sections: les mateixes que a THEORY i en el mateix ordre, amb title, body i table.
// · body també on l'original no en té, només per a les glosses del català d'una taula que
//   no porta cap explicació (decisió de l'usuari del 16/11: «glosses sí, on hi càpiguen»).
// · A les taules, null vol dir «la cel·la de l'original»: el català que s'aprèn no es copia
//   i així no es pot desajustar. Una taula sense rows té totes les files en català. Val també
//   per a les capçaleres (16/11, «Presentacions»: «Dir-se», «Ser»… en català; amb la glossa
//   a la capçalera, la taula no hi cabia a 360 px i la glossa va a l'explicació).
// · Els exemples no hi són: sempre en català.
// · El català citat a les explicacions, tal qual: entre «» en castellà i entre ‘’ en anglès.
// Cada tema, revisat per l'usuari abans d'entrar-hi (12/11: «Salutacions»; 16/11: «Demanar
// ajuda», «Presentacions» i «Persones properes»; i, més tard, «Casa i objectes», «El barri» i
// «Rutines»).
// tests_arrencada.cjs (secció 25) comprova que la forma de cada tema és la de THEORY i que
// el català citat hi és.
const TEORIA_TRADUIDA = {
  es: {
    'Salutacions': {
      nom: 'Saludos',
      subtitle: 'Empieza y termina una conversación corta con expresiones de cortesía.',
      sections: [
        {
          title: '¿Qué puedes decir?',
          body: '<p>«Fins demà» indica que os veréis al día siguiente. «Fins aviat» no dice qué día.</p>',
          table: {
            headers: ['Situación', 'Expresión', 'Respuesta posible'],
            rows: [
              ['Llegas y saludas', null, null],
              ['Entras por la mañana', null, null],
              ['Saludas por la tarde', null, null],
              ['Saludas por la noche o te vas a dormir', null, null],
              ['Te vas', null, null],
              ['Os veréis al día siguiente', null, null],
            ],
          },
        },
        {
          title: 'Pregunta a alguien cómo está',
          table: { headers: ['Pregunta', 'Respuesta', 'Para seguir'] },
        },
        {
          title: 'Una petición y un agradecimiento',
          body: '<p>Pide las cosas con «si us plau» o «per favor». Da las gracias con «gràcies» y contesta con «de res». Para llamar la atención o disculparte, puedes decir «perdona».</p>',
        },
        {
          title: 'Una conversación posible',
        },
      ],
    },
    'Demanar ajuda': {
      nom: 'Pedir ayuda',
      subtitle: 'Pide que te repitan algo, reconoce las instrucciones de la app y deletrea un nombre.',
      sections: [
        {
          title: 'Elige la ayuda que necesitas',
          body: '<p>Si no entiendes algo, puedes decir «No ho entenc».</p>',
          table: {
            headers: ['Necesitas…', 'Puedes preguntar…'],
            rows: [
              ['Volver a oír la información', null],
              ['Un ritmo más lento', null],
              ['Saber el significado', null],
              ['Saber cómo se escribe', null],
              ['Saber una palabra en catalán', null],
            ],
          },
        },
        {
          title: 'Instrucciones que encontrarás',
          table: {
            headers: ['Instrucción', 'Qué tienes que hacer'],
            rows: [
              [null, 'Escoge una respuesta.'],
              [null, 'Escribe lo que falta.'],
              [null, 'Escribe la palabra que te piden.'],
              [null, 'Pon los fragmentos en un orden que tenga sentido.'],
              [null, 'Toca el botón y escucha el audio.'],
            ],
          },
        },
        {
          title: 'Letras y nombres',
          body: '<p>Deletrear es decir las letras una a una: «Ona: o, ena, a». Consulta la tabla cuando lo necesites.</p>',
          table: { headers: ['Letra', 'Nombre', 'Letra', 'Nombre'] },
        },
        {
          title: 'Pide y confirma',
        },
      ],
    },
    'Presentacions': {
      nom: 'Presentaciones',
      subtitle: 'Explica quién eres, de dónde eres, dónde vives y qué idiomas hablas.',
      sections: [
        {
          title: 'Preguntas y respuestas',
          body: '<p>«Soc de» indica de dónde eres; «visc a», dónde vives. Puedes practicar con datos inventados.</p>',
          table: { headers: ['Pregunta', 'Respuesta posible'] },
        },
        {
          title: 'Formas útiles en presente',
          body: '<p>Para la edad se usa «tenir»: «tinc vint anys». Los verbos de la tabla: «dir-se» (llamarse), «ser», «viure» (vivir) y «tenir» (tener).</p>',
          table: { headers: ['Persona', null, null, null, null] },
        },
        {
          title: "De, d' y a",
          body: "<p>«Soc de Lleida», «soc d'Amposta» y «visc a Lleida». Aprende estas expresiones con el nombre del lugar.</p>",
        },
        {
          title: 'Leer un formulario',
          table: {
            headers: ['Campo', 'Información que pide', 'Ejemplo'],
            rows: [
              [null, 'Nombre de la persona', null],
              [null, 'Apellidos de la persona', null],
              [null, 'Años que tiene', null],
              [null, 'Calle, número y otros datos del domicilio', null],
              [null, 'Dirección para recibir mensajes', null],
            ],
          },
        },
        {
          title: 'Primeros números',
          table: { headers: ['Cifra', 'Palabra', 'Cifra', 'Palabra'] },
        },
      ],
    },
    'Persones properes': {
      nom: 'Personas cercanas',
      subtitle: 'Habla de relaciones, ropa y rasgos sencillos; haz que las palabras concuerden.',
      sections: [
        {
          title: 'Palabras para las relaciones',
          table: { headers: ['Relación', 'Ejemplo'] },
        },
        {
          title: 'Los posesivos cambian con el nombre',
          body: '<p>También son válidas «meua/meues», «teua/teues» y «seua/seues». El posesivo cambia según la cosa: «el meu llibre», «les meves bosses».</p>',
          table: { headers: ['Persona', 'Singular', 'Plural'] },
        },
        {
          title: 'Concordancia: las palabras se ajustan',
          body: '<p>«Un amic alt», «una amiga alta», «uns amics alts», «unes amigues altes». También: «petit/petita/petits/petites». Fíjate en los plurales: «germana/germanes», «amiga/amigues», «botiga/botigues».</p>',
        },
        {
          title: 'Ropa y colores',
          table: { headers: ['Una prenda', 'Dos prendas', 'Descripción'] },
        },
        {
          title: 'Señalar lo que está cerca y más lejos',
          table: {
            headers: ['Distancia', 'Singular', 'Plural'],
            rows: [
              ['Cerca', null, null],
              ['Más lejos', null, null],
            ],
          },
        },
      ],
    },
    'Casa i objectes': {
      nom: 'Casa y objetos',
      subtitle: 'Usa artículos, plurales y expresiones de lugar para describir un espacio.',
      sections: [
        {
          title: 'Qué hay y dónde está',
          body: '<p>«Hi ha una cadira» (hay una silla) presenta una cosa. «La cadira és al menjador» (la silla está en el comedor) dice dónde está. «A la cuina» (en la cocina) preparamos la comida; «al dormitori» (en el dormitorio) dormimos, y «al bany» (en el baño) está la ducha.</p>',
        },
        {
          title: 'Artículos con nombres comunes',
          table: {
            headers: ['Uso', 'Singular', 'Plural'],
            rows: [
              ['Presentamos algo nuevo', null, null],
              ['Identificamos algo conocido', null, null],
            ],
          },
        },
        {
          title: 'El apóstrofo en palabras habituales',
          body: "<p>Aprende «l'armari», «l'habitació» y «l'escola», con apóstrofo. En cambio, escribimos «el llit» y «la taula».</p>",
        },
        {
          title: 'Una cosa o más de una',
          table: {
            headers: ['Singular', 'Plural', '¿Qué cambia?'],
            rows: [
              [null, null, 'Añadimos -s.'],
              [null, null, 'La terminación -a pasa a -es.'],
              [null, null, 'Cambian el nombre y el adjetivo.'],
              [null, null, 'Este plural añade <span style="white-space:nowrap">-s.</span>'],
            ],
          },
        },
        {
          title: '¿Dónde está?',
          body: '<p>En la tabla: «damunt de» y «sobre» (encima de), «sota» (debajo de), «dins de» (dentro de), «al costat de» (al lado de), «davant de» (delante de) y «darrere de» (detrás de).</p>',
          table: { headers: ['Expresión', 'Ejemplo'] },
        },
      ],
    },
    'El barri': {
      nom: 'El barrio',
      subtitle: 'Encuentra un lugar, entiende indicaciones y reconoce qué pide un aviso.',
      sections: [
        {
          title: 'Preguntas útiles',
          table: {
            headers: ['Quieres saber…', 'Pregunta'],
            rows: [
              ['Si hay un servicio cerca', null],
              ['Dónde está un lugar concreto', null],
              ['Cómo llegar', null],
              ['Dónde conseguir información', null],
              ['Si necesitas pedir cita', null],
            ],
          },
        },
        {
          title: 'Preposiciones y artículos',
          table: {
            headers: ['Combinación', 'Forma', 'Ejemplo'],
            rows: [
              [null, null, null],
              [null, null, null],
              [null, null, null],
              [null, null, null],
              ['Ante un artículo con apóstrofo', null, null],
              ['Con artículo femenino', null, null],
            ],
          },
        },
        {
          title: 'Entender un recorrido',
          table: {
            headers: ['Indicación', 'Qué quiere decir'],
            rows: [
              [null, 'Sigue todo recto.'],
              [null, 'Gira a la derecha.'],
              [null, 'Gira a la izquierda.'],
              [null, 'Sube al primer piso.'],
              [null, 'Bájate aquí (de un autobús, por ejemplo) o baja por aquí, según la situación.'],
            ],
          },
        },
        {
          title: 'Orden de los pisos: tabla de consulta',
          table: { headers: ['Número', 'Masculino', 'Femenino'] },
        },
        {
          title: 'Un aviso y una conversación',
        },
      ],
    },
    'Rutines': {
      nom: 'Rutinas',
      subtitle: 'Construye frases en presente sobre actividades, trabajo y momentos del día.',
      sections: [
        {
          title: 'Un modelo regular: treballar (trabajar)',
          body: '<p>«Estudiar» sigue el mismo modelo: «estudio, estudies, estudia, estudiem, estudieu, estudien». También puedes encontrar «treballe» o «treball» para «jo» (yo), según la zona.</p>',
          table: { headers: ['Persona', 'Forma', 'Ejemplo'] },
        },
        {
          title: 'Otras formas frecuentes',
          body: '<p>Los verbos de la tabla: «anar» (ir), «fer» (hacer), «dormir» y «llevar-se» (levantarse).</p>',
          table: { headers: ['Verbo', null, null, null] },
        },
        {
          title: 'Organiza el día',
          body: '<p>En la tabla: «al matí» (por la mañana), «al migdia» (al mediodía), «a la tarda» (por la tarde), «al vespre» (al anochecer), «a la nit» (por la noche), «cada dia» (cada día), «sovint» (a menudo) y «mai» (nunca).</p>',
          table: { headers: ['Momento o frecuencia', 'Ejemplo'] },
        },
        {
          title: 'Pregunta, afirma o niega',
          body: '<p>«Treballes avui?» (¿trabajas hoy?) pregunta. «Treballo avui» afirma. «No treballo avui» niega. También: «No em llevo aviat» (no me levanto temprano).</p>',
        },
      ],
    },
  },
  en: {
    'Salutacions': {
      nom: 'Greetings',
      subtitle: 'Start and end a short conversation with polite expressions.',
      sections: [
        {
          title: 'What can you say?',
          body: "<p>‘Fins demà’ means you'll see each other the next day. ‘Fins aviat’ doesn't say which day.</p>",
          table: {
            headers: ['Situation', 'Phrase', 'Possible reply'],
            rows: [
              ['You arrive and say hello', null, null],
              ['In the morning, you come in', null, null],
              ['You say hello in the afternoon', null, null],
              ["You say hello at night, or you're off to bed", null, null],
              ["You're leaving", null, null],
              ["You'll see each other the next day", null, null],
            ],
          },
        },
        {
          title: 'Ask someone how they are',
          table: { headers: ['Question', 'Answer', 'Follow-up'] },
        },
        {
          title: 'Please and thank you',
          body: "<p>Ask for things with ‘si us plau’ or ‘per favor’. Say thank you with ‘gràcies’, and reply to thanks with ‘de res’. To get someone's attention or to apologise, you can say ‘perdona’.</p>",
        },
        {
          title: 'A sample conversation',
        },
      ],
    },
    'Demanar ajuda': {
      nom: 'Asking for help',
      subtitle: "Ask someone to repeat something, recognise the app's instructions and spell a name.",
      sections: [
        {
          title: 'Choose the help you need',
          body: "<p>If you don't understand something, you can say ‘No ho entenc’.</p>",
          table: {
            headers: ['You need…', 'You can ask…'],
            rows: [
              ['To hear it again', null],
              ['A slower pace', null],
              ['To know what it means', null],
              ["To know how it's spelt", null],
              ['To know a word in Catalan', null],
            ],
          },
        },
        {
          title: "Instructions you'll see",
          table: {
            headers: ['Instruction', 'What to do'],
            rows: [
              [null, 'Choose an answer.'],
              [null, "Write what's missing."],
              [null, "Write the word you're asked for."],
              [null, 'Put the pieces in an order that makes sense.'],
              [null, 'Tap the button and listen to the audio.'],
            ],
          },
        },
        {
          title: 'Letters and names',
          body: '<p>Spelling means saying the letters one by one: ‘Ona: o, ena, a’. Check the table whenever you need to.</p>',
          table: { headers: ['Letter', 'Name', 'Letter', 'Name'] },
        },
        {
          title: 'Ask and check',
        },
      ],
    },
    'Presentacions': {
      nom: 'Introductions',
      subtitle: "Say who you are, where you're from, where you live and which languages you speak.",
      sections: [
        {
          title: 'Questions and answers',
          body: "<p>‘Soc de’ says where you're from; ‘visc a’, where you live. You can practise with made-up details.</p>",
          table: { headers: ['Question', 'Possible answer'] },
        },
        {
          title: 'Useful present-tense forms',
          body: '<p>For age, Catalan uses ‘tenir’: ‘tinc vint anys’. The verbs in the table: ‘dir-se’ (to be called), ‘ser’ (to be), ‘viure’ (to live) and ‘tenir’ (to have).</p>',
          table: { headers: ['Person', null, null, null, null] },
        },
        {
          title: "De, d' and a",
          body: "<p>‘Soc de Lleida’, ‘soc d'Amposta’ and ‘visc a Lleida’. Learn these phrases together with the place name.</p>",
        },
        {
          title: 'Reading a form',
          table: {
            headers: ['Field', 'What it asks for', 'Example'],
            rows: [
              [null, "The person's first name", null],
              [null, "The person's surnames", null],
              [null, 'How old they are', null],
              [null, 'Street, number and other details of the home address', null],
              [null, 'Address for receiving messages', null],
            ],
          },
        },
        {
          title: 'Your first numbers',
          table: { headers: ['Number', 'Word', 'Number', 'Word'] },
        },
      ],
    },
    'Persones properes': {
      nom: 'People close to you',
      subtitle: 'Talk about relationships, clothes and simple traits, and make words agree.',
      sections: [
        {
          title: 'Words for relationships',
          table: { headers: ['Relationship', 'Example'] },
        },
        {
          title: 'Possessives change with the noun',
          body: '<p>Also correct: ‘meua/meues’, ‘teua/teues’ and ‘seua/seues’. The possessive changes with the thing: ‘el meu llibre’, ‘les meves bosses’.</p>',
          table: { headers: ['Owner', 'Singular', 'Plural'] },
        },
        {
          title: 'Agreement: words change to match',
          body: '<p>‘Un amic alt’, ‘una amiga alta’, ‘uns amics alts’, ‘unes amigues altes’. Also: ‘petit/petita/petits/petites’. Look at the plurals: ‘germana/germanes’, ‘amiga/amigues’, ‘botiga/botigues’.</p>',
        },
        {
          title: 'Clothes and colours',
          table: { headers: ['One item', 'Two items', 'Description'] },
        },
        {
          title: "Pointing to what's near and further away",
          table: {
            headers: ['Distance', 'Singular', 'Plural'],
            rows: [
              ['Near', null, null],
              ['Further away', null, null],
            ],
          },
        },
      ],
    },
    'Casa i objectes': {
      nom: 'Around the house',
      subtitle: 'Use articles, plurals and expressions of place to describe a space.',
      sections: [
        {
          title: 'What there is and where it is',
          body: "<p>‘Hi ha una cadira’ (there's a chair) introduces something. ‘La cadira és al menjador’ (the chair is in the dining room) says where it is. ‘A la cuina’ (in the kitchen) we cook, ‘al dormitori’ (in the bedroom) we sleep and ‘al bany’ (in the bathroom) there's the shower.</p>",
        },
        {
          title: 'Articles with common nouns',
          table: {
            headers: ['Use', 'Singular', 'Plural'],
            rows: [
              ['Introducing something new', null, null],
              ['Referring to something known', null, null],
            ],
          },
        },
        {
          title: 'The apostrophe in everyday words',
          body: "<p>Learn ‘l'armari’, ‘l'habitació’ and ‘l'escola’, with an apostrophe. But we write ‘el llit’ and ‘la taula’.</p>",
        },
        {
          title: 'One or more',
          table: {
            headers: ['Singular', 'Plural', 'What changes?'],
            rows: [
              [null, null, 'We add -s.'],
              [null, null, 'The ending -a becomes -es.'],
              [null, null, 'The noun and the adjective both change.'],
              [null, null, 'This plural adds -s.'],
            ],
          },
        },
        {
          title: 'Where is it?',
          body: '<p>In the table: ‘damunt de’ and ‘sobre’ (on), ‘sota’ (under), ‘dins de’ (inside), ‘al costat de’ (next to), ‘davant de’ (in front of) and ‘darrere de’ (behind).</p>',
          table: { headers: ['Expression', 'Example'] },
        },
      ],
    },
    'El barri': {
      nom: 'The neighbourhood',
      subtitle: 'Find a place, understand directions and work out what a notice is asking for.',
      sections: [
        {
          title: 'Useful questions',
          table: {
            headers: ['You want to know…', 'Question'],
            rows: [
              ["Whether there's a service nearby", null],
              ['Where a particular place is', null],
              ['How to get there', null],
              ['Where to get information', null],
              ['Whether you need an appointment', null],
            ],
          },
        },
        {
          title: 'Prepositions and articles',
          table: {
            headers: ['Combination', 'Form', 'Example'],
            rows: [
              [null, null, null],
              [null, null, null],
              [null, null, null],
              [null, null, null],
              ['Before an article with an apostrophe', null, null],
              ['With a feminine article', null, null],
            ],
          },
        },
        {
          title: 'Following directions',
          table: {
            headers: ['Direction', 'What it means'],
            rows: [
              [null, 'Go straight on.'],
              [null, 'Turn right.'],
              [null, 'Turn left.'],
              [null, 'Go up to the first floor.'],
              [null, 'Get off here (a bus, for example) or go down here, depending on the situation.'],
            ],
          },
        },
        {
          title: 'Floor numbers: reference table',
          table: { headers: ['Number', 'Masculine', 'Feminine'] },
        },
        {
          title: 'A notice and a conversation',
        },
      ],
    },
    'Rutines': {
      nom: 'Daily routine',
      subtitle: 'Build present-tense sentences about activities, work and times of day.',
      sections: [
        {
          title: 'A regular pattern: treballar (to work)',
          body: "<p>‘Estudiar’ (to study) follows the same pattern: ‘estudio, estudies, estudia, estudiem, estudieu, estudien’. You may also see ‘treballe’ or ‘treball’ for ‘jo’ (I), depending on the region.</p>",
          table: { headers: ['Person', 'Form', 'Example'] },
        },
        {
          title: 'Other common forms',
          body: '<p>The verbs in the table: ‘anar’ (to go), ‘fer’ (to do, to make), ‘dormir’ (to sleep) and ‘llevar-se’ (to get up).</p>',
          table: { headers: ['Verb', null, null, null] },
        },
        {
          title: 'Organise your day',
          body: '<p>In the table: ‘al matí’ (in the morning), ‘al migdia’ (at midday), ‘a la tarda’ (in the afternoon), ‘al vespre’ (in the evening), ‘a la nit’ (at night), ‘cada dia’ (every day), ‘sovint’ (often) and ‘mai’ (never).</p>',
          table: { headers: ['Time or frequency', 'Example'] },
        },
        {
          title: 'Questions, statements and negatives',
          body: "<p>‘Treballes avui?’ (are you working today?) asks a question. ‘Treballo avui’ makes a statement. ‘No treballo avui’ makes it negative. Also: ‘No em llevo aviat’ (I don't get up early).</p>",
        },
      ],
    },
  },
};
