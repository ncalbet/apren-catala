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
// «Rutines», i «Dies i hores», «Compres» i «Menjar i beure», i «Necessitats» i «Quedar amb
// algú»: els 12 temes de l'A1).
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
          body: '<p>En la tabla: «Com estàs?» (¿cómo estás?), «Bé, gràcies» (bien, gracias), «Així així» (así así), «No gaire bé» (no muy bien), «I tu?» (¿y tú?), «Avui necessito descansar» (hoy necesito descansar) y «Em fa mal el cap» (me duele la cabeza).</p>',
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
          body: "<p>«Soc de» indica de dónde eres; «visc a», dónde vives. Puedes practicar con datos inventados. En la tabla: «Com et dius?» (¿cómo te llamas?), «D'on ets?» (¿de dónde eres?), «On vius?» (¿dónde vives?), «Quants anys tens?» (¿cuántos años tienes?), «Quines llengües parles?» (¿qué lenguas hablas?) y «De què treballes?» (¿en qué trabajas?).</p>",
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
          body: '<p>En la tabla: «pare / mare» (padre / madre), «germà / germana» (hermano / hermana), «fill / filla» (hijo / hija), «avi / àvia» (abuelo / abuela), «amic / amiga» (amigo / amiga) y «parella» (pareja).</p>',
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
          body: '<p>En la tabla: «sabata» (zapato), «jersei» (jersey), «jaqueta» (chaqueta), «blava» (azul), «negres» (negras), «verd» (verde) y «vermella» (roja).</p>',
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
    'Dies i hores': {
      nom: 'Días y horas',
      subtitle: 'Pregunta la hora y sitúa una actividad en el calendario.',
      sections: [
        {
          title: 'La semana',
          body: '<p>«Avui» (hoy) es el día actual; «ahir» (ayer), el día anterior; «demà» (mañana), el día siguiente.</p>',
          table: { headers: ['Orden', 'Día', 'Ejemplo'] },
        },
        {
          title: 'Los meses',
          body: '<p>«12 de novembre» se puede escribir «12/11». En estas fechas escribimos primero el día y después el mes.</p>',
          table: { headers: [null, null, null] },
        },
        {
          title: 'La hora y cuándo ocurre algo',
          body: '<p>En la tabla: «Quina hora és?» (¿qué hora es?) y «A quina hora comença?» (¿a qué hora empieza?).</p>',
          table: { headers: ['Hora', null, null] },
        },
        {
          title: 'Reconocer los cuartos',
          table: {
            headers: ['Hora', 'Expresión con cuartos', 'Qué quiere decir'],
            rows: [
              [null, null, 'Ha pasado el primer cuarto de la hora que termina a las diez.'],
              [null, null, 'Ha pasado media hora desde las nueve.'],
              [null, null, 'Falta un cuarto para las diez.'],
            ],
          },
        },
        {
          title: 'Leer un horario',
          body: '<p>En «de nou a una» (de nueve a una), la primera hora es el inicio y la segunda, el final. «Obert» (abierto) y «tancat» (cerrado) informan del estado del servicio: «La botiga està oberta», «El centre està tancat». Para indicar una costumbre, el día lleva artículo: «el dilluns» o «els dilluns» (cada lunes). Sin artículo, «dilluns» es el de esta semana.</p>',
        },
      ],
    },
    'Compres': {
      nom: 'Compras',
      subtitle: 'Lee etiquetas y di qué quieres comprar y cuánto necesitas.',
      sections: [
        {
          title: 'Una compra sencilla',
          body: '<p>Para saber el precio: «Quant val?», «Quant costa?» o «Quin preu té?» (¿cuánto cuesta?). Mira si la etiqueta indica el precio por unidad, kilo o litro: «Pomes: 2 € el quilo» (manzanas: 2 € el kilo).</p>',
        },
        {
          title: 'Producto y cantidad',
          body: '<p>Practicamos «dos pans» (dos panes) y «dues pomes» (dos manzanas). En algunas zonas también se usa «dos» con nombres femeninos. En la tabla: «mig quilo» (medio kilo), «pastanagues» (zanahorias), «llet» (leche), «ampolla» (botella), «aigua» (agua) y «arròs» (arroz).</p>',
          table: { headers: ['Cantidad', 'Ejemplo'] },
        },
        {
          title: 'Del 11 al 20',
          table: { headers: ['Cifra', 'Palabra', 'Cifra', 'Palabra'] },
        },
        {
          title: 'Del 21 al 100',
          body: '<p>Del 21 al 29: <span style="white-space:nowrap">«vint-i-tres» (23)</span>, <span style="white-space:nowrap">«vint-i-set» (27)</span>. A partir de treinta: <span style="white-space:nowrap">«trenta-set» (37)</span>, <span style="white-space:nowrap">«quaranta-dos» (42)</span>.</p>',
          table: { headers: ['Cifra', 'Palabra', 'Ejemplo compuesto'] },
        },
        {
          title: 'Cantidades no exactas y negación',
          body: "<p>Si no queda ni una: «No queda cap poma» (no queda ninguna manzana). Si la jarra está vacía: «No queda gens d'aigua» (no queda nada de agua). En la tabla: «molt/molta» (mucho/mucha), «poc/poca» (poco/poca), «cap» (ningún, ninguna) y «gens de» (nada de).</p>",
          table: { headers: ['Expresión', 'Ejemplo'] },
        },
      ],
    },
    'Menjar i beure': {
      nom: 'Comer y beber',
      subtitle: 'Pide comida o bebida y expresa gustos y preferencias sencillas.',
      sections: [
        {
          title: 'Un pedido claro',
          body: '<p>«Un entrepà de formatge, si us plau» (un bocadillo de queso, por favor). También puedes decir «Voldria un entrepà» (quisiera un bocadillo). Para terminar: «El compte, si us plau» (la cuenta, por favor).</p>',
        },
        {
          title: 'Amb (con) y sense (sin)',
          body: '<p>En la tabla: «cafè amb llet» (café con leche), «te» (té), «sucre» (azúcar), «entrepà» (bocadillo) y «tomàquet» (tomate).</p>',
          table: { headers: ['Quieres incluir…', 'Quieres quitar…'] },
        },
        {
          title: "¿M'agrada o m'agraden?",
          body: "<p>En la tabla: «m'agrada» (me gusta), «m'agraden» (me gustan), «maduixes» (fresas) y «cuinar» (cocinar).</p>",
          table: {
            headers: ['Lo que te gusta', 'Frase', 'El verbo'],
            rows: [
              ['Un nombre en singular', null, null],
              ['Un nombre en plural', null, null],
              ['Una actividad', null, 'agrada + infinitivo'],
            ],
          },
        },
        {
          title: 'Pregunta y responde sobre gustos',
          body: "<p>«T'agrada el te?» (¿te gusta el té?) — «Sí, m'agrada molt» (sí, me gusta mucho), «No m'agrada gaire» (no me gusta mucho) o «No m'agrada gens» (no me gusta nada). «No gaire» indica poco; «gens», que no te gusta en absoluto.</p>",
        },
        {
          title: 'Coincidir o no',
          table: { headers: ['Primer mensaje', 'Respuesta coherente'] },
        },
      ],
    },
    'Necessitats': {
      nom: 'Necesidades',
      subtitle: 'Expresa sensaciones, necesidades e instrucciones básicas; habla del tiempo.',
      sections: [
        {
          title: 'Expresiones frecuentes',
          body: '<p>Con «tenir» (tener): «jo tinc», «tu tens», «ell/ella té».</p>',
          table: {
            headers: ['Sensación o necesidad', 'Expresión'],
            rows: [
              ['Necesidad de beber', null],
              ['Necesidad de comer', null],
              ['Necesidad de dormir', null],
              ['Sensación de temperatura', null],
              ['Necesidad de ayuda', null],
              ['Malestar', null],
            ],
          },
        },
        {
          title: 'El cuerpo y el dolor',
          body: '<p>Con una parte del cuerpo: «Em fa mal el peu» (me duele el pie). Con más de una: «Em fan mal els peus» (me duelen los pies). En la tabla: «cap» (cabeza), «panxa» (barriga), «mà» (mano), «peu» (pie) y «cames» (piernas).</p>',
          table: { headers: ['Parte del cuerpo', 'Ejemplo'] },
        },
        {
          title: 'Voler, poder y necessitar',
          body: '<p>Los verbos de la tabla: «voler» (querer), «poder» (poder) y «necessitar» (necesitar).</p>',
          table: { headers: ['Persona', null, null, null] },
        },
        {
          title: 'Entender qué hay que hacer',
          body: '<p>«He de portar el document» (tengo que traer el documento) expresa una obligación. Para hablarle a otra persona: «Has de portar el document» (tienes que traer el documento). Sin decir quién: «Cal portar el document» (hay que traer el documento).</p>',
        },
        {
          title: 'El tiempo y las sensaciones',
          body: '<p>En la tabla: «Fa fred» (hace frío), «Fa calor» (hace calor), «Plou» (llueve), «Neva» (nieva) y «Fa sol» (hace sol).</p>',
          table: { headers: ['Hablamos del tiempo', 'Hablamos de una persona'] },
        },
      ],
    },
    'Quedar amb algú': {
      nom: 'Quedar con alguien',
      subtitle: 'Propón un encuentro, responde y une información con conectores básicos.',
      sections: [
        {
          title: 'Propón y responde',
          body: '<p>Para quedar, concreta el día, la hora y el lugar. Días: «dilluns» (lunes), «dimarts» (martes), «dimecres» (miércoles), «dijous» (jueves), «divendres» (viernes), «dissabte» (sábado) y «diumenge» (domingo). En la tabla: «em va bé» (me va bien), «no puc» (no puedo) y «Fins dijous!» (¡hasta el jueves!).</p>',
          table: {
            headers: ['Función', 'Ejemplo'],
            rows: [
              ['Proponer', null],
              ['Aceptar', null],
              ['Decir que no puedes', null],
              ['Pedir una alternativa', null],
              ['Concretar', null],
              ['Confirmar', null],
            ],
          },
        },
        {
          title: 'Conecta las ideas',
          body: '<p>En la tabla: «i» (y), «o» (o), «però» (pero), «perquè» (porque), «també» (también) y «tampoc» (tampoco).</p>',
          table: {
            headers: ['Palabra', 'Función', 'Ejemplo'],
            rows: [
              [null, 'Añadir información', null],
              [null, 'Presentar alternativas', null],
              [null, 'Introducir un contraste', null],
              [null, 'Dar una causa', null],
              [null, 'Coincidir en una frase afirmativa', null],
              [null, 'Coincidir en una frase negativa', null],
            ],
          },
        },
        {
          title: 'Per què y perquè',
          body: '<p>«Per què no pots venir?» (¿por qué no puedes venir?) pregunta el motivo. «Perquè treballo» (porque trabajo) responde.</p>',
        },
        {
          title: 'Dos mensajes posibles',
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
          body: '<p>In the table: ‘Com estàs?’ (how are you?), ‘Bé, gràcies’ (fine, thanks), ‘Així així’ (so-so), ‘No gaire bé’ (not very well), ‘I tu?’ (and you?), ‘Avui necessito descansar’ (I need to rest today) and ‘Em fa mal el cap’ (my head hurts).</p>',
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
          body: "<p>‘Soc de’ says where you're from; ‘visc a’, where you live. You can practise with made-up details. In the table: ‘Com et dius?’ (what's your name?), ‘D'on ets?’ (where are you from?), ‘On vius?’ (where do you live?), ‘Quants anys tens?’ (how old are you?), ‘Quines llengües parles?’ (what languages do you speak?) and ‘De què treballes?’ (what do you do for a living?).</p>",
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
          body: '<p>In the table: ‘pare / mare’ (father / mother), ‘germà / germana’ (brother / sister), ‘fill / filla’ (son / daughter), ‘avi / àvia’ (grandfather / grandmother), ‘amic / amiga’ (friend) and ‘parella’ (partner).</p>',
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
          body: '<p>In the table: ‘camisa’ (shirt), ‘sabata’ (shoe), ‘jersei’ (jumper), ‘jaqueta’ (jacket), ‘blava’ (blue), ‘negres’ (black), ‘verd’ (green) and ‘vermella’ (red).</p>',
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
    'Dies i hores': {
      nom: 'Days and times',
      subtitle: 'Ask the time and place an activity on the calendar.',
      sections: [
        {
          title: 'The week',
          body: '<p>‘Avui’ (today) is the current day; ‘ahir’ (yesterday), the day before; ‘demà’ (tomorrow), the next day.</p>',
          table: { headers: ['Order', 'Day', 'Example'] },
        },
        {
          title: 'The months',
          body: '<p>‘12 de novembre’ can be written ‘12/11’. In these dates we write the day first and then the month.</p>',
          table: { headers: [null, null, null] },
        },
        {
          title: 'The time, and when things happen',
          body: '<p>In the table: ‘Quina hora és?’ (what time is it?) and ‘A quina hora comença?’ (what time does it start?).</p>',
          table: { headers: ['Time', null, null] },
        },
        {
          title: 'Recognising quarter hours',
          table: {
            headers: ['Time', 'Using quarters', 'What it means'],
            rows: [
              [null, null, 'The first quarter of the hour ending at ten has gone by.'],
              [null, null, 'Half an hour has gone by since nine.'],
              [null, null, "It's a quarter to ten."],
            ],
          },
        },
        {
          title: 'Reading opening hours',
          body: "<p>In ‘de nou a una’ (from nine to one), the first time is the start and the second is the end. ‘Obert’ (open) and ‘tancat’ (closed) tell you the status of the service: ‘La botiga està oberta’, ‘El centre està tancat’. For something that happens regularly, the day takes the article: ‘el dilluns’ or ‘els dilluns’ (every Monday). Without it, ‘dilluns’ is this week's Monday.</p>",
        },
      ],
    },
    'Compres': {
      nom: 'Shopping',
      subtitle: 'Read labels and say what you want to buy and how much you need.',
      sections: [
        {
          title: 'A simple purchase',
          body: '<p>To find out the price: ‘Quant val?’, ‘Quant costa?’ or ‘Quin preu té?’ (how much is it?). Check whether the label gives the price per item, per kilo or per litre: ‘Pomes: 2 € el quilo’ (apples: €2 a kilo).</p>',
        },
        {
          title: 'Products and quantities',
          body: '<p>We practise ‘dos pans’ (two loaves of bread) and ‘dues pomes’ (two apples). In some areas ‘dos’ is also used with feminine nouns. In the table: ‘mig quilo’ (half a kilo), ‘pastanagues’ (carrots), ‘llet’ (milk), ‘ampolla’ (bottle), ‘aigua’ (water) and ‘arròs’ (rice).</p>',
          table: { headers: ['Quantity', 'Example'] },
        },
        {
          title: 'From 11 to 20',
          table: { headers: ['Number', 'Word', 'Number', 'Word'] },
        },
        {
          title: 'From 21 to 100',
          body: '<p>From 21 to 29: <span style="white-space:nowrap">‘vint-i-tres’ (23)</span>, <span style="white-space:nowrap">‘vint-i-set’ (27)</span>. From thirty on: <span style="white-space:nowrap">‘trenta-set’ (37)</span>, <span style="white-space:nowrap">‘quaranta-dos’ (42)</span>.</p>',
          table: { headers: ['Number', 'Word', 'Compound example'] },
        },
        {
          title: 'Vague amounts and negatives',
          body: "<p>If there isn't a single one left: ‘No queda cap poma’ (there are no apples left). If the jug is empty: ‘No queda gens d'aigua’ (there's no water left at all). In the table: ‘molt/molta’ (a lot of), ‘poc/poca’ (not much), ‘cap’ (no, not a single) and ‘gens de’ (no … at all).</p>",
          table: { headers: ['Expression', 'Example'] },
        },
      ],
    },
    'Menjar i beure': {
      nom: 'Food and drink',
      subtitle: 'Order food or drink and talk about simple likes and preferences.',
      sections: [
        {
          title: 'A clear order',
          body: "<p>‘Un entrepà de formatge, si us plau’ (a cheese sandwich, please). You can also say ‘Voldria un entrepà’ (I'd like a sandwich). To finish: ‘El compte, si us plau’ (the bill, please).</p>",
        },
        {
          title: 'Amb (with) and sense (without)',
          body: '<p>In the table: ‘cafè amb llet’ (coffee with milk), ‘te’ (tea), ‘sucre’ (sugar), ‘entrepà’ (sandwich) and ‘tomàquet’ (tomato).</p>',
          table: { headers: ['You want to include…', 'You want to leave out…'] },
        },
        {
          title: "M'agrada or m'agraden?",
          body: "<p>In the table: ‘m'agrada’ and ‘m'agraden’ (I like), ‘maduixes’ (strawberries) and ‘cuinar’ (to cook).</p>",
          table: {
            headers: ['What you like', 'Sentence', 'The verb'],
            rows: [
              ['A singular noun', null, null],
              ['A plural noun', null, null],
              ['An activity', null, 'agrada + infinitive'],
            ],
          },
        },
        {
          title: 'Ask and answer about likes',
          body: "<p>‘T'agrada el te?’ (do you like tea?) — ‘Sí, m'agrada molt’ (yes, I like it a lot), ‘No m'agrada gaire’ (I don't like it much) or ‘No m'agrada gens’ (I don't like it at all). ‘No gaire’ means not much; ‘gens’ means not at all.</p>",
        },
        {
          title: 'Same or different',
          body: "<p>In the table: ‘A mi també’ (me too), ‘A mi tampoc’ (me neither), ‘A mi no’ (I don't) and ‘A mi sí’ (I do).</p>",
          table: { headers: ['First message', 'A reply that fits'] },
        },
      ],
    },
    'Necessitats': {
      nom: 'Needs',
      subtitle: 'Express feelings, needs and basic instructions; talk about the weather.',
      sections: [
        {
          title: 'Common expressions',
          body: '<p>With ‘tenir’ (to have): ‘jo tinc’, ‘tu tens’, ‘ell/ella té’.</p>',
          table: {
            headers: ['Feeling or need', 'Expression'],
            rows: [
              ['Need to drink', null],
              ['Need to eat', null],
              ['Need to sleep', null],
              ['Feeling cold or hot', null],
              ['Needing help', null],
              ['Feeling unwell', null],
            ],
          },
        },
        {
          title: 'When something hurts',
          body: '<p>With one part of the body: ‘Em fa mal el peu’ (my foot hurts). With more than one: ‘Em fan mal els peus’ (my feet hurt). In the table: ‘cap’ (head), ‘panxa’ (belly, stomach), ‘mà’ (hand), ‘peu’ (foot) and ‘cames’ (legs).</p>',
          table: { headers: ['Body part', 'Example'] },
        },
        {
          title: 'Voler, poder and necessitar',
          body: '<p>The verbs in the table: ‘voler’ (to want), ‘poder’ (can, to be able to) and ‘necessitar’ (to need).</p>',
          table: { headers: ['Person', null, null, null] },
        },
        {
          title: 'Understanding what you have to do',
          body: "<p>‘He de portar el document’ (I have to bring the document) expresses an obligation. To tell someone else: ‘Has de portar el document’ (you have to bring the document). Without saying who: ‘Cal portar el document’ (it's necessary to bring the document).</p>",
        },
        {
          title: 'The weather and how you feel',
          body: "<p>In the table: ‘Fa fred’ (it's cold), ‘Fa calor’ (it's hot), ‘Plou’ (it's raining), ‘Neva’ (it's snowing) and ‘Fa sol’ (it's sunny).</p>",
          table: { headers: ['Talking about the weather', 'Talking about a person'] },
        },
      ],
    },
    'Quedar amb algú': {
      nom: 'Meeting up',
      subtitle: 'Suggest meeting up, reply, and join ideas with simple linking words.',
      sections: [
        {
          title: 'Suggest and reply',
          body: "<p>To arrange to meet, give the day, the time and the place. Days: ‘dilluns’ (Monday), ‘dimarts’ (Tuesday), ‘dimecres’ (Wednesday), ‘dijous’ (Thursday), ‘divendres’ (Friday), ‘dissabte’ (Saturday) and ‘diumenge’ (Sunday). In the table: ‘em va bé’ (that works for me), ‘no puc’ (I can't) and ‘Fins dijous!’ (see you on Thursday!).</p>",
          table: {
            headers: ['Function', 'Example'],
            rows: [
              ['Suggest', null],
              ['Accept', null],
              ["Say you can't", null],
              ['Ask for an alternative', null],
              ['Give details', null],
              ['Confirm', null],
            ],
          },
        },
        {
          title: 'Linking ideas',
          body: '<p>In the table: ‘i’ (and), ‘o’ (or), ‘però’ (but), ‘perquè’ (because), ‘també’ (also, too) and ‘tampoc’ (neither, not either).</p>',
          table: {
            headers: ['Word', 'Use', 'Example'],
            rows: [
              [null, 'Adding information', null],
              [null, 'Giving alternatives', null],
              [null, 'Introducing a contrast', null],
              [null, 'Giving a reason', null],
              [null, 'Saying the same (positive)', null],
              [null, 'Saying the same (negative)', null],
            ],
          },
        },
        {
          title: 'Per què and perquè',
          body: "<p>‘Per què no pots venir?’ (why can't you come?) asks for the reason. ‘Perquè treballo’ (because I work) answers it.</p>",
        },
        {
          title: 'Two example messages',
        },
      ],
    },
  },
};
