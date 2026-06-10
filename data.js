const THEORY = {
  // ── NIVELL A2 ──────────────────────────────────────────────
// ── NIVELL A2 ──────────────────────────────────────────────

  'Ser, estar i semblar': {
    level: 'a2',
    icon: '🔵',
    subtitle: 'Quan usar cada verb per descriure persones i estats',
    sections: [
      {
        title: 'La diferència fonamental',
        icon: '📌',
        body: `<p>En català, <strong>ser</strong>, <strong>estar</strong> i <strong>semblar</strong> no s'intercanvien lliurement. Cada verb té un valor semàntic específic que cal respectar per comunicar-se correctament.</p>`
      },
      {
        title: "Usos de ser, estar i semblar",
        icon: '📊',
        table: {
          headers: ['Verb', "S'usa per a...", 'Exemple'],
          rows: [
            ['ser', "Característiques permanents d'una persona", 'La Maria és molt divertida.'],
            ['estar', "Estats transitoris o d'ànim", 'Avui el Biel està trist.'],
            ['semblar', "L'aparença que dona una persona", "La Conxa sembla tímida, però és molt oberta."],
          ]
        }
      },
      {
        title: 'El pronom HO amb ser, estar i semblar',
        icon: '🔵',
        body: `<p>El pronom <strong>ho</strong> substitueix un adjectiu o atribut ja esmentat. S'usa obligatòriament amb aquests tres verbs; no es pot ometre ni substituir per «el» o «la».</p>`,
        rules: [
          { label: 'ho + ser', example: "«La Gina és tímida i la seva germana també ho és.»" },
          { label: 'ho + estar', example: "«La Marta diu que no està trista, però realment ho està.»" },
          { label: 'ho + semblar', example: "«Semblen seriosos, però no ho semblen quan els coneixes bé.»" },
        ]
      },
      {
        title: 'Errors freqüents',
        icon: '⚠️',
        rules: [
          { bad: 'Avui soc malalt, no aniré a treballar.', good: "Avui estic malalt, no aniré a treballar. (estat de salut transitori)" },
          { bad: 'És nerviós ara mateix.', good: 'Està nerviós ara mateix. (estat transitori)' },
          { bad: 'Ell és cansat.', good: 'Ell està cansat. (estat passatger)' },
        ]
      }
    ]
  },

  'Adjectius de caràcter': {
    level: 'a2',
    icon: '😊',
    subtitle: 'Vocabulari i flexió per descriure la manera de ser',
    sections: [
      {
        title: 'Gènere i nombre dels adjectius',
        icon: '📌',
        body: `<p>Els adjectius catalans concorden en gènere (masculí/femení) i nombre (singular/plural) amb el nom que acompanyen. Cal conèixer els patrons de flexió principals.</p>`
      },
      {
        title: 'Patrons principals de flexió',
        icon: '📊',
        table: {
          headers: ['Patró', 'Masc. sing.', 'Fem. sing.', 'Masc. pl.', 'Fem. pl.'],
          rows: [
            ['-a / -es', 'sincer', 'sincera', 'sincers', 'sinceres'],
            ['-t / -da', 'divertit', 'divertida', 'divertits', 'divertides'],
            ['-c / -ca', 'simpàtic', 'simpàtica', 'simpàtics', 'simpàtiques'],
            ['-l / -l·la', 'tranquil', 'tranquil·la', 'tranquils', 'tranquil·les'],
            ['invariable (-ble, -nt)', 'amable', 'amable', 'amables', 'amables'],
            ['-ós / -osa', 'generós', 'generosa', 'generosos', 'generoses'],
          ]
        }
      },
      {
        title: 'Adjectius de caràcter essencials A2',
        icon: '📋',
        examples: [
          { text: 'Positius: simpàtic/a, amable, alegre, sociable, obert/a, generós/osa, tranquil/·la, sincer/a, divertit/ida, valent/a' },
          { text: 'Negatius: antipàtic/a, tímid/a, reservat/ada, impacient, egocèntric/a, distant' },
          { text: 'Neutres: introvertit/ida, extravertit/ida, seriós/osa, formal, espontani/ània' },
        ]
      }
    ]
  },

  'Passat perifràstic': {
    level: 'a2',
    icon: '⏮️',
    subtitle: "Com explicar accions passades amb anar + infinitiu",
    sections: [
      {
        title: 'Què és el passat perifràstic?',
        icon: '📌',
        body: `<p>El passat perifràstic és el temps del passat més usat en el català oral. S'usa per parlar d'accions acabades en un moment concret del passat. Es forma amb <strong>anar (present) + infinitiu</strong>: «vaig menjar», «vas sortir», «va arribar»...</p>`
      },
      {
        title: "Conjugació de l'auxiliar «anar»",
        icon: '📊',
        table: {
          headers: ['Persona', "Forma d'«anar»", 'Exemple complet'],
          rows: [
            ['jo', 'vaig', 'vaig arribar'],
            ['tu', 'vas', 'vas sortir'],
            ['ell/ella', 'va', 'va menjar'],
            ['nosaltres', 'vam', 'vam estudiar'],
            ['vosaltres', 'vau', 'vau parlar'],
            ['ells/elles', 'van', 'van venir'],
          ]
        }
      },
      {
        title: 'Expressions temporals habituals',
        icon: '📋',
        examples: [
          { text: "ahir, ahir al matí, ahir a la tarda, ahir a la nit" },
          { text: "fa una setmana, fa dos dies, fa un any, abans-d'ahir" },
          { text: "el mes passat, l'any passat, la setmana passada" },
          { text: 'al principi, llavors, aleshores, després, finalment' },
        ]
      },
      {
        title: "Diferència amb el perfet d'indicatiu",
        icon: '⚖️',
        rules: [
          { label: 'Passat perifràstic', example: "«Ahir vaig menjar pizza.» → Acció acabada en un moment allunyat del present." },
          { label: "Perfet d'indicatiu", example: "«Avui he menjat pizza.» → Acció en un període que inclou el present (avui, aquest mes...)." },
        ]
      }
    ]
  },

  'Pronoms febles A2': {
    level: 'a2',
    icon: '🟢',
    subtitle: "Els pronoms el, la, els, les, ho i en en contextos bàsics",
    sections: [
      {
        title: 'Per a què serveixen els pronoms febles?',
        icon: '📌',
        body: `<p>Els pronoms febles eviten la repetició d'un complement ja esmentat. En català van <strong>davant del verb</strong> en frases declaratives, però <strong>darrere i units</strong> amb guionet quan segueixen un infinitiu, un imperatiu o un gerundi.</p>`
      },
      {
        title: 'Pronoms de complement directe (CD)',
        icon: '📊',
        table: {
          headers: ['Pronom', 'Substitueix', 'Exemple'],
          rows: [
            ['el', 'nom masculí singular determinat', "«On és el llibre?» «El tinc jo.»"],
            ['la', 'nom femení singular determinat', "«Has vist la Maria?» «Sí, la he vista.»"],
            ['els', 'nom masculí plural determinat', "«On has posat els documents?» «Els he deixat a la taula.»"],
            ['les', 'nom femení plural determinat', "«Has trucat les amigues?» «Sí, les he trucat.»"],
            ['ho', 'atribut o idea abstracta/neutra', "«És simpàtic?» «Sí, ho és.»"],
            ['en', 'CD sense article / quantitat indeterminada', "«Vols pa?» «Sí, en vull.»"],
          ]
        }
      },
      {
        title: 'Posició: davant o darrere del verb',
        icon: '📋',
        rules: [
          { label: 'Davant del verb conjugat', example: "«El veig cada dia.» / «La truco ara.» / «No els entenc.»" },
          { label: "Darrere d'un infinitiu (unit amb guionet)", example: "«Vull veure-la.» / «Cal fer-ho avui.» / «He de trucar-los.»" },
          { label: "Darrere d'un imperatiu (unit amb guionet)", example: "«Porta'l aquí!» / «Fes-ho ara!» / «Menja'n més!»" },
        ]
      }
    ]
  },

  "Imperfet d'indicatiu": {
    level: 'a2',
    icon: '🔄',
    subtitle: "Descriure hàbits, rutines i estats en el passat",
    sections: [
      {
        title: "Quan s'usa l'imperfet?",
        icon: '📌',
        body: `<p>L'imperfet d'indicatiu s'usa per descriure situacions, hàbits o rutines del passat que no es perceben com a acabades en un moment concret. És el temps de les descripcions, dels estats i de les accions repetides.</p>`
      },
      {
        title: "Terminacions de l'imperfet",
        icon: '📊',
        table: {
          headers: ['Persona', 'Verbs -ar (parlar)', 'Verbs -er/-re (tenir)', 'Verbs -ir (dormir)'],
          rows: [
            ['jo', 'parlava', 'tenia', 'dormia'],
            ['tu', 'parlaves', 'tenies', 'dormies'],
            ['ell/ella', 'parlava', 'tenia', 'dormia'],
            ['nosaltres', 'parlàvem', 'teníem', 'dormíem'],
            ['vosaltres', 'parlàveu', 'teníeu', 'dormíeu'],
            ['ells/elles', 'parlaven', 'tenien', 'dormien'],
          ]
        }
      },
      {
        title: 'Irregulars importants a A2',
        icon: '📋',
        table: {
          headers: ['Infinitiu', 'Jo', 'Tu', 'Ell/ella', 'Nosaltres'],
          rows: [
            ['ser', 'era', 'eres', 'era', 'érem'],
            ['fer', 'feia', 'feies', 'feia', 'fèiem'],
            ['tenir', 'tenia', 'tenies', 'tenia', 'teníem'],
            ['anar', 'anava', 'anaves', 'anava', 'anàvem'],
            ['venir', 'venia', 'venies', 'venia', 'veníem'],
          ]
        }
      },
      {
        title: 'Usos i expressions típiques',
        icon: '✨',
        rules: [
          { label: 'Hàbits del passat', example: "«De petit, sempre jugava a futbol.» / «Cada estiu anàvem a la platja.»" },
          { label: 'Descripcions', example: "«Era una noia molt alegre i tenia els cabells llargs.»" },
          { label: 'soler / acostumar a + infinitiu', example: "«Solia anar a peu a l'escola.» / «Acostumava a llegir cada nit.»" },
        ]
      }
    ]
  },

  "Lèxic A2: caràcter i emocions": {
    level: 'a2',
    icon: '💬',
    subtitle: "Vocabulari per expressar estats d'ànim i reaccions emocionals",
    sections: [
      {
        title: 'Expressar com et trobes',
        icon: '📌',
        body: `<p>Per expressar l'estat d'ànim a l'A2 usem <strong>estar + adjectiu</strong> per als estats transitoris, i <strong>posar-se + adjectiu</strong> per als canvis bruscos d'estat.</p>`
      },
      {
        title: "Adjectius d'estat i reaccions",
        icon: '📊',
        table: {
          headers: ['Adjectiu', 'Masculí/Femení', 'Exemple'],
          rows: [
            ['nerviós/osa', 'nerviós / nerviosa', "Estic nerviosa abans dels exàmens."],
            ['content/a', 'content / contenta', "Estan contents amb el resultat."],
            ['trist/a', 'trist / trista', "Avui estic una mica trist."],
            ['avergonyit/ida', 'avergonyit / avergonyida', "Em vaig posar molt avergonyida."],
            ['enfadat/ada', 'enfadat / enfadada', "El director estava molt enfadat."],
            ['sorprès/esa', 'sorprès / sorpresa', "Va quedar molt sorpresa."],
          ]
        }
      },
      {
        title: 'Reaccions en situacions compromeses',
        icon: '😅',
        examples: [
          { text: "em poso vermell/a → sentir vergonya intensa" },
          { text: "em vull fondre → vergonya màxima, voler desaparèixer" },
          { text: "em disculpo → demanar perdó per un error" },
          { text: "em poso a riure → riure de manera sobtada i incontrolada" },
          { text: "em quedo callat/ada → no saber què dir per sorpresa o vergonya" },
        ]
      },
      {
        title: 'Connectors temporals narratius',
        icon: '🔗',
        body: `<p>Per explicar anècdotes i situacions del passat, s'usen connectors que organitzen la seqüència temporal.</p>`,
        examples: [
          { text: "«quan» → el moment en què passa alguna cosa: «Quan vaig arribar, no hi havia ningú.»" },
          { text: "«al principi» → el moment inicial: «Al principi, no entenia res.»" },
          { text: "«llavors / aleshores» → continuació: «Llavors vaig decidir marxar.»" },
          { text: "«després» → posterioritat: «Després vam anar a sopar tots junts.»" },
          { text: "«finalment» → el desenllaç: «Finalment, tot va anar bé.»" },
        ]
      }
    ]
  },


  'Preguntes i interrogació': {
    level: 'a2',
    icon: '❓',
    subtitle: 'Com formular preguntes correctament en català',
    sections: [
      {
        title: 'Les paraules interrogatives',
        icon: '📌',
        body: `<p>En català, les preguntes directes es formen amb una paraula interrogativa al principi de la frase. El pronom subjecte (jo, tu, ell...) s'omet habitualment perquè la desinència verbal ja l'indica.</p>`
      },
      {
        title: 'Principals paraules interrogatives',
        icon: '📊',
        table: {
          headers: ['Interrogatiu', 'Pregunta per...', 'Exemple'],
          rows: [
            ['qui', 'persones (subjecte)', '«Qui ha trucat?»'],
            ['què', 'coses / accions', '«Què vols fer avui?»'],
            ['on', 'lloc', '«On vius?» / «On és la biblioteca?»'],
            ['quan', 'temps', '«Quan arribes?»'],
            ['com', 'manera / nom', '«Com et dius?» / «Com es fa?»'],
            ['per què', 'causa / motiu', '«Per què no has vingut?»'],
            ['quant/a', 'preu / quantitat indet.', '«Quant costa?»'],
            ['quants/es', 'quantitat comptable', '«Quants anys tens?»'],
            ['quin/a/s/es', 'elecció entre opcions', '«Quin llibre t\'agrada?»'],
          ]
        }
      },
      {
        title: 'Omissió del pronom subjecte',
        icon: '📋',
        body: `<p>En català el pronom subjecte s'omet gairebé sempre en les preguntes, ja que la terminació verbal ja indica la persona.</p>`,
        rules: [
          { bad: 'Tu on vius?', good: 'On vius? (el «tu» és opcional i sol ometre\'s)' },
          { bad: 'Vosaltres quants anys teniu?', good: 'Quants anys teniu?' },
        ]
      },
      {
        title: 'Preguntes de confirmació',
        icon: '✨',
        body: `<p>Per demanar confirmació d'allò que s'acaba de dir, s'afegeix <strong>«no?»</strong> o <strong>«oi?»</strong> al final de la frase.</p>`,
        examples: [
          { text: '«Ets d\'aquí, no?» / «Ja has menjat, oi?»' },
          { text: '«Véns amb nosaltres, no?» / «Ho has entès, oi?»' },
        ]
      },
      {
        title: 'Errors freqüents',
        icon: '⚠️',
        rules: [
          { bad: '¿Verdad? / ¿No?', good: 'No? / Oi? (les formes castellanes no s\'usen en català)' },
          { bad: 'Como et dius?', good: 'Com et dius? («com», no «como»)' },
          { bad: 'Porque no véns?', good: 'Per què no véns? (dues paraules, amb accent a «què»)' },
        ]
      }
    ]
  },


  // ── NIVELL B2 ──────────────────────────────────────────────

  'Connectors': {
    level: 'b2',
    icon: '🔗',
    subtitle: 'Connecta idees i estructura el discurs',
    sections: [
      {
        title: 'Què són els connectors?',
        icon: '📌',
        body: `<p>Els connectors (o marcadors discursius) són paraules o expressions que estableixen relacions lògiques entre les parts d'un text. Sense ells, el discurs seria una successió d'idees sense cohesió.</p>
               <p>Al nivell B2 cal dominar els connectors més habituals i saber triar-ne el més adequat segons la relació que es vol expressar.</p>`
      },
      {
        title: 'Connectors per funció',
        icon: '📊',
        table: {
          headers: ['Funció', 'Connectors principals', 'Exemple'],
          rows: [
            ['Addició', 'a més (a més), també, fins i tot, d\'altra banda', 'A més, cal tenir en compte els costos.'],
            ['Causa', 'perquè, ja que, atès que, donat que, com que', 'No va venir perquè estava malalt.'],
            ['Conseqüència', 'per tant, per consegüent, és per això que, així doncs', 'Va treballar molt; per tant, va tenir èxit.'],
            ['Oposició', 'però, tanmateix, no obstant això, malgrat tot', 'És difícil; tanmateix, és possible.'],
            ['Concessió', 'tot i que, encara que, malgrat que, per bé que', 'Tot i que plovia, van sortir.'],
            ['Ordre', 'en primer lloc, a continuació, finalment, per acabar', 'En primer lloc, analitzarem...'],
          ]
        }
      },
      {
        title: 'Errors freqüents',
        icon: '⚠️',
        body: `<p>Evita repetir sempre el mateix connector. «Però» i «i» s'usen massa sovint en registres informals.</p>`,
        rules: [
          { bad: 'Però, és difícil.', good: 'Tanmateix, és difícil. / No obstant això, és difícil.' },
          { bad: 'I també, cal dir que...', good: 'A més, cal dir que... / Addicionalment, cal dir que...' },
          { bad: 'Però malgrat tot, va continuar.', good: 'Tot i les dificultats, va continuar. (No acumulis connectors de contrast.)' },
        ]
      }
    ]
  },

  'Subjuntiu': {
    level: 'b2',
    icon: '🔀',
    subtitle: 'Quan i com usar el mode subjuntiu',
    sections: [
      {
        title: 'Quan s\'usa el subjuntiu?',
        icon: '📌',
        body: `<p>El subjuntiu és el mode de la incertesa, el desig, la hipòtesi i la valoració. S'usa quan l'acció de la frase subordinada no és un fet real i objectiu, sinó que depèn de la perspectiva del parlant.</p>
               <p>La clau per detectar-lo: si el verb principal expressa <strong>desig, dubte, valoració, ordre o possibilitat</strong>, el verb subordinat sol anar en subjuntiu.</p>`
      },
      {
        title: 'Contexts que exigeixen subjuntiu',
        icon: '📋',
        rules: [
          { label: 'Desig i voluntat', example: '«Vull que vinguis.» «Espero que pugui ser.»' },
          { label: 'Valoració', example: '«És important que ho entenguis.» «Cal que ho facis ara.»' },
          { label: 'Ordre i petició', example: '«Et demano que ho revisis.» «Insisteix que venguin.»' },
          { label: 'Dubte i negació d\'existència', example: '«Dubto que sigui veritat.» «No hi ha ningú que sàpiga.»' },
          { label: 'Concessió (hipotètica)', example: '«Encara que plogui, sortirem.»' },
        ]
      },
      {
        title: 'Formes del present de subjuntiu',
        icon: '📊',
        table: {
          headers: ['Persona', 'Verbs en -ar (parlar)', 'Verbs en -er/-re (poder)', 'Verbs en -ir (venir)'],
          rows: [
            ['jo', 'parli', 'pugui', 'vingui'],
            ['tu', 'parlis', 'puguis', 'vinguis'],
            ['ell/ella', 'parli', 'pugui', 'vingui'],
            ['nosaltres', 'parlem', 'puguem', 'vinguem'],
            ['vosaltres', 'parleu', 'pugueu', 'vingueu'],
            ['ells/elles', 'parlin', 'puguin', 'vinguin'],
          ]
        }
      },
      {
        title: 'Indicatiu vs. Subjuntiu',
        icon: '⚖️',
        body: `<p>La diferència entre indicatiu i subjuntiu pot canviar el significat radicalment:</p>`,
        examples: [
          { text: '«Busco un treballador que parla anglès.» → n\'existeix un de concret (indicatiu)' },
          { text: '«Busco un treballador que parli anglès.» → no sé si existeix (subjuntiu)' },
          { text: '«Sé que ve demà.» → fet cert (indicatiu)' },
          { text: '«Vull que vingui demà.» → desig (subjuntiu)' },
        ]
      }
    ]
  },

  'Cohesió textual': {
    level: 'b2',
    icon: '🧩',
    subtitle: 'Com estructurar i donar coherència a un text',
    sections: [
      {
        title: 'Coherència vs. Cohesió',
        icon: '📌',
        body: `<p><strong>Coherència</strong> és la lògica interna del text: les idees han de tenir sentit i progressar de manera ordenada.</p>
               <p><strong>Cohesió</strong> és l'ús dels mecanismes lingüístics que lliguen les frases i els paràgrafs entre si: pronoms, sinònims, el·lipsis, connectors, etc.</p>`
      },
      {
        title: 'Mecanismes de cohesió',
        icon: '🔧',
        rules: [
          { label: 'Referència pronominal', example: 'El president va parlar. Ell va dir que... → «Ell» evita repetir «el president».' },
          { label: 'Sinònims i perífrasis', example: '«L\'escriptor... l\'autor... el novel·lista...» → Evita repetir la mateixa paraula.' },
          { label: 'El·lipsi', example: '«En Joan va arribar tard i (ell) va demanar perdó.» → El subjecte s\'omet per no repetir-lo.' },
          { label: 'Connectors d\'ordre', example: '«En primer lloc... A continuació... Finalment...» → Guien el lector per l\'argument.' },
        ]
      },
      {
        title: 'Estructura d\'un paràgraf',
        icon: '📐',
        body: `<p>Un bon paràgraf té tres parts:</p>`,
        examples: [
          { text: '1. Frase topic: presenta la idea principal del paràgraf.' },
          { text: '2. Desenvolupament: arguments, exemples, dades que la sostenen.' },
          { text: '3. Frase de tancament: sintetitza o connecta amb el paràgraf següent.' },
        ]
      }
    ]
  },

  'Comprensió lectora': {
    level: 'b2',
    icon: '📖',
    subtitle: 'Estratègies per entendre textos complexos',
    sections: [
      {
        title: 'Llegir en dos passos',
        icon: '📌',
        body: `<p>Al B2, els textos requereixen una lectura estratègica. Llegir tot dues vegades és la clau:</p>`,
        rules: [
          { label: 'Primera lectura (global)', example: 'Llegeix ràpid per captar el tema general, el to i l\'estructura.' },
          { label: 'Segona lectura (detall)', example: 'Focalitza en les preguntes: cerca les respostes al text, no suposicions.' },
        ]
      },
      {
        title: 'Com identificar la idea principal',
        icon: '🎯',
        body: `<p>La idea principal no sempre és la primera frase. Pregunta't: <em>«Quin missatge vol transmetre l'autor?»</em></p>
               <p>Descarta les idees secundàries (exemples, detalls, comparacions) i busca l'afirmació més general que engloba tot el text.</p>`
      },
      {
        title: 'Trampes habituals',
        icon: '⚠️',
        examples: [
          { text: 'Opcions que usen paraules del text però canvien el significat → llegeix amb atenció.' },
          { text: 'Opcions massa extremes («sempre», «mai», «tots») → solen ser incorrectes.' },
          { text: 'Opcions que barregen informació verídica del text però que no responen la pregunta.' },
        ]
      }
    ]
  },

  'Producció escrita': {
    level: 'b2',
    icon: '🖊️',
    subtitle: 'Com redactar textos clars i ben estructurats',
    sections: [
      {
        title: 'Planifica abans d\'escriure',
        icon: '📌',
        body: `<p>Mai comencis directament a escriure. Dedica 2-3 minuts a:</p>`,
        rules: [
          { label: '1. Entendre l\'encàrrec', example: 'Quina és la tasca exacta? (carta, informe, article, opinió...)' },
          { label: '2. Identificar el registre', example: 'Formal, informal, acadèmic? A qui va dirigit el text?' },
          { label: '3. Fer un esquema breu', example: 'Introducció → punt 1 → punt 2 → conclusió.' },
        ]
      },
      {
        title: 'Estructura bàsica',
        icon: '📐',
        examples: [
          { text: 'Introducció: presenta el tema i l\'objectiu.' },
          { text: 'Desenvolupament: 2-3 paràgrafs amb arguments o informació. Un paràgraf = una idea.' },
          { text: 'Conclusió: resum o valoració final. No introdueixis idees noves.' },
        ]
      },
      {
        title: 'Recursos per millorar el text',
        icon: '✨',
        body: `<p>Usa varietat lèxica (sinònims), connectors variats i revisa sempre la concordança i els accents.</p>`,
        rules: [
          { label: 'Evita repeticions', example: '«dir» → afirmar, manifestar, assenyalar, apuntar.' },
          { label: 'Usa perífrasis d\'obligació', example: '«Cal + infinitiu», «s\'ha de + infinitiu», «és necessari que + subjuntiu».' },
          { label: 'Revisa la concordança', example: 'El verb ha de concordar amb el subjecte: «Les mesures són eficaces».' },
        ]
      }
    ]
  },

  'Lèxic formal B2': {
    level: 'b2',
    icon: '📚',
    subtitle: 'Ampliar el vocabulari i ajustar el registre',
    sections: [
      {
        title: 'Per què el registre és important?',
        icon: '📌',
        body: `<p>El registre és l'adequació del llenguatge al context. Usar un registre inadequat (massa informal en un text formal, o massa rígid en una conversa) és un error comunicatiu greu, igual que una falta gramatical.</p>`
      },
      {
        title: 'Substitucions clau',
        icon: '🔄',
        table: {
          headers: ['Registre informal/genèric', 'Registre formal/precís', 'Exemple'],
          rows: [
            ['dir', 'afirmar, manifestar, declarar, anunciar', 'La directora va declarar que...'],
            ['fer', 'dur a terme, realitzar, executar, impulsar', 'Van dur a terme les reformes.'],
            ['tenir', 'disposar de, comptar amb, posseir', 'El centre disposa d\'equipament modern.'],
            ['coses', 'elements, aspectes, qüestions, factors', 'Cal analitzar tots els factors.'],
            ['molt gran', 'considerable, substancial, notable, d\'envergadura', 'Un creixement considerable.'],
            ['bo/bona', 'adequat, òptim, satisfactori, positiu', 'Un resultat satisfactori.'],
          ]
        }
      },
      {
        title: 'Calcs del castellà a evitar',
        icon: '⚠️',
        table: {
          headers: ['Incorrecte (calc)', 'Correcte en català'],
          rows: [
            ['donar-se compte', 'adonar-se'],
            ['realitzar un treball', 'fer un treball / dur a terme un treball'],
            ['a nivell de', 'quant a / pel que fa a / en matèria de'],
            ['de cara a', 'per a / amb vista a / de cara a (admès en alguns contextos)'],
            ['tenir en compte', 'tenir en compte (correcte) / considerar'],
          ]
        }
      }
    ]
  },

  'Interferències': {
    level: 'b2',
    icon: '🚧',
    subtitle: 'Evitar calcs i errors per influència del castellà',
    sections: [
      {
        title: 'Què és una interferència?',
        icon: '📌',
        body: `<p>Una interferència lingüística és un error causat per la influència d'una altra llengua (en aquest cas, el castellà). Els calcs poden ser lèxics (paraules), sintàctics (estructures) o semàntics (significats).</p>`
      },
      {
        title: 'Interferències lèxiques freqüents',
        icon: '📊',
        table: {
          headers: ['Forma incorrecta', 'Forma correcta', 'Tipus d\'error'],
          rows: [
            ['*donar-se compte', 'adonar-se', 'calc del castellà «darse cuenta»'],
            ['*lo important', 'allò important / el que és important', 'article neutre inexistent en català'],
            ['*el/la mateix/a', 'el mateix / la mateixa (cuidar l\'ús)', 'calc anafòric excessiu'],
            ['*en base a', 'basant-se en / a partir de', 'preposició calcada'],
            ['*a nivell de', 'quant a / pel que fa a', 'calc preposicional'],
            ['*moltes gràcies per tot', 'moltes gràcies per tot (correcte)', 'notar que «per» funciona aquí'],
          ]
        }
      },
      {
        title: 'Interferències sintàctiques',
        icon: '⚠️',
        rules: [
          { label: 'Passiva amb «ser» + participi', example: '«El projecte va ser aprovat» → correcte, però millor: «El projecte es va aprovar» o «Van aprovar el projecte».' },
          { label: 'Gerundi de posterioritat', example: '«Va arribar, agafant el cotxe» → Incorrecte. «Va arribar i va agafar el cotxe».' },
          { label: 'Relatiu «que» per «del qual»', example: '«El tema que hem parlat» → «El tema del qual hem parlat».' },
        ]
      }
    ]
  },

  'Perífrasis verbals': {
    level: 'b2',
    icon: '⚙️',
    subtitle: 'Construccions verb + infinitiu per expressar aspecte i modalitat',
    sections: [
      {
        title: 'Què és una perífrasi verbal?',
        icon: '📌',
        body: `<p>Una perífrasi verbal és la combinació d'un verb auxiliar (conjugat) + infinitiu, gerundi o participi. L'auxiliar perd el seu significat original i aporta un valor aspectual o modal.</p>`
      },
      {
        title: 'Perífrasis d\'obligació i necessitat',
        icon: '📋',
        rules: [
          { label: 'Cal + infinitiu', example: '«Cal estudiar cada dia.» (obligació impersonal)' },
          { label: 'S\'ha de + infinitiu', example: '«S\'ha de lliurar el treball.» (obligació impersonal)' },
          { label: 'Haver de + infinitiu', example: '«He de marxar.» (obligació personal)' },
          { label: 'Cal que + subjuntiu', example: '«Cal que ho estudieu.» (obligació impersonal + persona concreta)' },
        ]
      },
      {
        title: 'Perífrasis d\'aspecte',
        icon: '📊',
        table: {
          headers: ['Perífrasi', 'Valor', 'Exemple'],
          rows: [
            ['Acabar de + inf.', 'Acció recentment acabada', 'Acabo d\'arribar.'],
            ['Estar + gerundi', 'Acció en curs', 'Estic escrivint l\'informe.'],
            ['Anar a + inf.', 'Futur immediat', 'Vaig a presentar els resultats.'],
            ['Tornar a + inf.', 'Repetició', 'Va tornar a cometre el mateix error.'],
            ['Deixar de + inf.', 'Interrupció', 'Ha deixat de fumar.'],
          ]
        }
      }
    ]
  },

  'Ortografia B2': {
    level: 'b2',
    icon: '✏️',
    subtitle: 'Accents, dièresi, b/v, s/ss/ç i apòstrofs',
    sections: [
      {
        title: 'Accents diacrítics',
        icon: '📌',
        body: `<p>Els <strong>accents diacrítics</strong> distingeixen paraules que s'escriuen igual però tenen significats o funcions gramaticals diferents. Cal memoritzar els parells més usats.</p>`
      },
      {
        title: 'Parells diacrítics essencials',
        icon: '📊',
        table: {
          headers: ['Amb accent', 'Sense accent'],
          rows: [
            ['bé (adverbi)', 'be (lletra / ovella)'],
            ['déu (divinitat)', 'deu (número o verb deure)'],
            ['és (verb ser)', 'es (pronom reflexiu)'],
            ['més (quantitat)', 'mes (unitat de temps)'],
            ['món (Terra)', 'mon (possessiu masc.)'],
            ['pèl (cabell)', 'pel (per + el)'],
            ['què (pron. relatiu / inter.)', 'que (conjunció)'],
            ['sé (verb saber)', 'se (pronom reflexiu)'],
            ['sí (afirmació)', 'si (conjunció condicional)'],
            ['són (verb ser)', 'son (son / possessiu)'],
            ['té (verb tenir)', 'te (pronom / infusió)'],
          ]
        }
      },
      {
        title: 'Les lletres b i v',
        icon: '🔤',
        body: `<p>En català, <strong>b</strong> i <strong>v</strong> sonen igual. L'ortografia correcta depèn de l'etimologia i de regles morfològiques.</p>`,
        rules: [
          { label: 'v- a principi de paraula (llista a memoritzar)', example: '«veure, vida, vell, venir, verd, voler, vuit, vaca, vi, veu»' },
          { label: 'b davant consonant', example: '«blanc, brot, obscur, absència, oblit, obtenir»' },
          { label: 'Imperfet d\'indicatiu (1a conj.) → -ava, -aves...', example: '«cantava, parlaves, estimaven» (sempre amb v)' },
        ]
      },
      {
        title: 's/ss, c/ç i la dièresi',
        icon: '📋',
        rules: [
          { label: 'Una s entre vocals = /z/ sonor', example: '«casa, rosa, base, cosa» — sona /z/' },
          { label: 'ss entre vocals = /s/ sord', example: '«massa, classe, possible, grossos» — sona /s/' },
          { label: 'ç davant a, o, u · c davant e, i', example: '«plaça, dolç, força» / «cel, cinc, cera, llençol»' },
          { label: 'Dièresi (ï, ü): la vocal sona independent', example: '«veïna, raïm, heroïna, Raül, pingüí» — la i/u no forma diftong amb la vocal anterior' },
          { label: 'Excepcions: NO dièresi', example: 'Infinitius -uir/-air: conduir, construir. Sufixos -isme/-ista: altruisme. Prefixos anti-, co-, semi-.' },
        ]
      },
      {
        title: 'L\'apòstrof',
        icon: '⚠️',
        rules: [
          { label: 'el → l\' davant vocal o h muda', example: '«l\'home, l\'any, l\'estació, l\'hora»' },
          { label: 'de → d\' davant vocal o h muda', example: '«d\'estiu, d\'hivern, d\'un, d\'hora»' },
          { label: 'NO s\'apostrofa davant i/u semiconsonàntiques', example: '«de ioga, de Wuhan, la universitat» (i/u inicials pronunciades com a consonants)' },
        ]
      }
    ]
  },

  'Pronoms febles B2': {
    level: 'b2',
    icon: '🔵',
    subtitle: 'CD, CI, hi i en: elecció i posició',
    sections: [
      {
        title: 'Pronoms de complement directe (CD)',
        icon: '📊',
        table: {
          headers: ['Context', 'Pronom', 'Exemple'],
          rows: [
            ['Masc. sing. definit', 'el / l\'', 'Has vist el Joan? → Sí, l\'he vist.'],
            ['Fem. sing. definit', 'la / l\'', 'Has llegit la carta? → Sí, l\'he llegida.'],
            ['Masc. pl.', 'els', 'Dus els documents? → Sí, els duc.'],
            ['Fem. pl.', 'les', 'Has comprat les entrades? → Sí, les he comprades.'],
            ['Neutre (frase / atribut)', 'ho', 'Saps que ve? → Ho sé.'],
            ['Partitiu (quantitat indef.)', 'en', 'Vols pa? → En vull una mica.'],
          ]
        }
      },
      {
        title: 'Pronoms de complement indirecte (CI)',
        icon: '📋',
        rules: [
          { label: 'CI singular (a + persona sing.)', example: '«Li he escrit a la Maria.» → «li» independentment del gènere.' },
          { label: 'CI plural (a + persona pl.)', example: '«Els he trucat als avis.» → «els» (no *los ni *les).' },
          { label: 'CI 1a pers. (a mi)', example: '«M\'ha donat el regal.» → me / m\'.' },
          { label: 'CI 2a pers. (a tu)', example: '«T\'ho he dit.» → te / t\'.' },
        ]
      },
      {
        title: 'Hi i en: quan usar cada pronom',
        icon: '📊',
        table: {
          headers: ['Pronom', 'Substitueix', 'Exemple'],
          rows: [
            ['hi', 'CC de lloc (a/en + lloc)', 'Vius a Barcelona? → Hi visc.'],
            ['hi', 'Règim verbal amb «a» o «en»', 'Confies en ell? → Hi confio.'],
            ['en', 'Complement introduït per «de»', 'Vens de la reunió? → En vinc.'],
            ['en', 'CD partitiu (quantitat indef.)', 'Vols cafè? → En vull un.'],
          ]
        }
      },
      {
        title: 'Posició dels pronoms',
        icon: '⚖️',
        rules: [
          { label: 'Indicatiu / subjuntiu → proclítics (davant el verb)', example: '«Ho sé. / No ho sé. / Vull que ho sàpigues.»' },
          { label: 'Imperatiu afirmatiu → enclítics (darrere el verb + guió)', example: '«Fes-ho! / Porta\'l! / Vine-hi!»' },
          { label: 'Imperatiu negatiu → proclítics', example: '«No ho facis. / No el portis. / No hi vagis.»' },
          { label: 'Infinitiu / gerundi → enclítics', example: '«Cal fer-ho. / Portant-ho. / Sense dir-li.»' },
        ]
      }
    ]
  },

  /* ─── C1 CATEGORIES ─── */

  'Subjuntiu avançat': {
    level: 'c1',
    icon: '🔀',
    subtitle: 'Subjuntiu imperfet, condicionals irrels i usos complexos',
    sections: [
      {
        title: 'El subjuntiu imperfet',
        icon: '📌',
        body: `<p>El subjuntiu imperfet s'usa quan el verb principal és en passat o condicional, i la subordinada exigeix subjuntiu. És equivalent temporal al condicional: mentre el present de subj. correspon al futur, l'imperfet de subj. correspon al condicional.</p>`
      },
      {
        title: 'Terminacions del subjuntiu imperfet',
        icon: '📊',
        table: {
          headers: ['Persona', 'Verbs en -ar (parlar)', 'Verbs en -er (tenir)', 'Verbs en -ir (venir)'],
          rows: [
            ['jo', 'parlés', 'tingués', 'vingués'],
            ['tu', 'parlessis', 'tinguessis', 'vinguessis'],
            ['ell/ella', 'parlés', 'tingués', 'vingués'],
            ['nosaltres', 'parléssim', 'tinguéssim', 'vinguéssim'],
            ['vosaltres', 'parléssiu', 'tinguéssiu', 'vinguéssiu'],
            ['ells/elles', 'parlessin', 'tinguessin', 'vinguessin'],
          ]
        }
      },
      {
        title: 'Condicionals (reals vs. hipotètiques vs. irrels)',
        icon: '⚖️',
        table: {
          headers: ['Tipus', 'Estructura', 'Exemple'],
          rows: [
            ['Real (possible)', 'Si + present ind. + futur', 'Si estudies, aprovaràs.'],
            ['Hipotètica (poc probable)', 'Si + imperfet subj. + condicional', 'Si tingués diners, viatjaria.'],
            ['Irreal (passat)', 'Si + plusquamperfet subj. + condicional perifràstic', 'Si hagués estudiat, hauria aprovat.'],
          ]
        }
      },
      {
        title: 'Altres usos del subjuntiu al C1',
        icon: '📋',
        rules: [
          { label: 'Sense que (verb directe)', example: '«Vull que vingui» → formal: «Li demano que prengui nota.»' },
          { label: 'Relatives amb antecedent negatiu', example: '«No hi ha ningú que sàpiga respondre.»' },
          { label: 'Oracions temporals de futur', example: '«Quan arribi, l\'avisa.» → NO «quan arribarà».' },
          { label: 'Per bé que / si bé (concessives)', example: '«Per bé que sigui difícil, cal intentar-ho.»' },
        ]
      }
    ]
  },

  'Connectors concessius': {
    level: 'c1',
    icon: '🔗',
    subtitle: 'Connectors avançats per expressar oposició i concessió',
    sections: [
      {
        title: 'La concessió: expressar un obstacle que no impedeix',
        icon: '📌',
        body: `<p>Les construccions concessives expressen que un obstacle o circumstància adversa <strong>no impedeix</strong> la realització de l'acció principal. Són essencials en l'argumentació formal i acadèmica.</p>
               <p>Estructura bàsica: <em>Malgrat [l'obstacle], [l'acció es produeix].</em></p>`
      },
      {
        title: 'Connectors concessius i el seu ús',
        icon: '📊',
        table: {
          headers: ['Connector', 'Segueix de...', 'Exemple'],
          rows: [
            ['malgrat', 'nom / pronom / infinitiu', 'Malgrat les dificultats, va continuar.'],
            ['tot i', 'nom / pronom / infinitiu', 'Tot i ploure, van sortir. / Tot i la crisi...'],
            ['tot i que', 'indicatiu o subjuntiu', 'Tot i que era tard, va trucar.'],
            ['encara que', 'indicatiu (fet) / subjuntiu (hipòtesi)', 'Encara que sigui difícil, cal fer-ho.'],
            ['per bé que', 'subjuntiu (registre formal)', 'Per bé que els resultats siguin positius...'],
            ['si bé', 'indicatiu (registre formal)', 'Si bé els resultats milloren, cal prudència.'],
            ['malgrat que', 'indicatiu o subjuntiu', 'Malgrat que va protestar, va acceptar.'],
          ]
        }
      },
      {
        title: 'Connectors d\'oposició vs. concessió',
        icon: '⚖️',
        body: `<p>Oposició simple (contrast directe) i concessió (obstacle que no impedeix) no són el mateix:</p>`,
        rules: [
          { label: 'Oposició (però, tanmateix)', example: '«És difícil, però és possible.» → Contrast directe entre dos fets.' },
          { label: 'Concessió (tot i que, malgrat)', example: '«Tot i que és difícil, ho aconseguirem.» → La dificultat no impedeix l\'èxit.' },
        ]
      }
    ]
  },

  'Lèxic formal': {
    level: 'c1',
    icon: '📚',
    subtitle: 'Precisió lèxica, sinonímia i registre acadèmic',
    sections: [
      {
        title: 'Precisió vs. genericitat',
        icon: '📌',
        body: `<p>Al C1, el lèxic genèric és un dels errors més penalitzats. Cada paraula ha d'aportar informació precisa. Els verbs «fer», «dir», «tenir» i els noms «cosa», «aspecte», «tema» (quan no és necessari) solen ser senyals d'imprecisió lèxica.</p>`
      },
      {
        title: 'Famílies lèxiques per a la producció formal',
        icon: '📊',
        table: {
          headers: ['Camp semàntic', 'Verbs precisos', 'Noms associats'],
          rows: [
            ['Comunicació', 'manifestar, declarar, anunciar, expressar, al·ludir, subratllar', 'declaració, afirmació, discurs, al·locució'],
            ['Acció / Execució', 'dur a terme, executar, impulsar, promoure, implementar', 'implementació, execució, desplegament'],
            ['Anàlisi', 'examinar, avaluar, constatar, determinar, evidenciar', 'anàlisi, diagnosi, avaluació, estudi'],
            ['Problema', 'sorgir, agreujar-se, persistir, resoldre, abordar', 'problemàtica, mancança, dèficit, repte'],
            ['Millora', 'optimitzar, reforçar, consolidar, enfortir, actualitzar', 'millora, avenç, progrés, optimització'],
          ]
        }
      },
      {
        title: 'Construccions nominals formals',
        icon: '✨',
        body: `<p>En textos acadèmics i formals, es prefereix el sintagma nominal a la frase verbal senzilla. Això aporta densitat informativa i registre elevat.</p>`,
        rules: [
          { label: 'Verbalitzar → Nominalitzar', example: '«Han analitzat el problema» → «L\'anàlisi del problema ha posat de manifest...»' },
          { label: 'Estructures recurrents', example: '«La present anàlisi té per objecte...» / «Cal destacar que...» / «S\'observa una tendència a...»' },
          { label: 'Marques d\'objectivitat', example: '«Segons les dades disponibles...» / «D\'acord amb les evidències...» / «Com s\'ha esmentat anteriorment...»' },
        ]
      }
    ]
  },

  'Argumentació': {
    level: 'c1',
    icon: '🧠',
    subtitle: 'Construir arguments acadèmics sòlids i ben estructurats',
    sections: [
      {
        title: 'Estructura de l\'argumentació al C1',
        icon: '📌',
        body: `<p>Un text argumentatiu C1 no es limita a presentar una opinió: ha de sostenir-la amb arguments, anticipar objeccions i respondre-hi. Aquest diàleg intern entre posicions és el que distingeix un text de nivell avançat.</p>`
      },
      {
        title: 'Model d\'argumentació acadèmica',
        icon: '📐',
        examples: [
          { text: '1. Tesi: Presenta l\'argument central de manera clara i directa.' },
          { text: '2. Fonamentació: Argumenta la tesi amb raons, dades o exemples.' },
          { text: '3. Contraargument: Reconeix una posició contrària («Tot i això, alguns autors...»).' },
          { text: '4. Refutació o matís: Respon al contraargument o el matises.' },
          { text: '5. Conclusió: Reforça la tesi inicial integrant els matisos.' },
        ]
      },
      {
        title: 'Connectors per a l\'argumentació avançada',
        icon: '🔗',
        table: {
          headers: ['Funció', 'Connectors C1'],
          rows: [
            ['Presentar tesi', 'Cal tenir present que... / Convé subratllar que... / Es fa palès que...'],
            ['Afegir argument', 'Així mateix, / D\'altra banda, / En aquest sentit, / Igualment,'],
            ['Contraargument', 'Tot i això, / No obstant, / Malgrat el que s\'ha dit,'],
            ['Matís', 'Ara bé, / Dit això, / Sense negar que... / Cal matisar que...'],
            ['Conclusió', 'Per consegüent, / En definitiva, / Podem concloure que... / Tot plegat,'],
          ]
        }
      }
    ]
  },

  'Comprensió crítica': {
    level: 'c1',
    icon: '🔍',
    subtitle: 'Interpretar textos complexos i detectar implicatures',
    sections: [
      {
        title: 'Més enllà del contingut explícit',
        icon: '📌',
        body: `<p>Al C1, la comprensió lectora no és qüestió de trobar la informació al text: és qüestió d'<strong>interpretar</strong> el que l'autor implica, insinua o pressuposa sense dir-ho directament.</p>
               <p>Cal llegir entre línies: quin to adopta l'autor? Quines paraules tria i per què? Quina posició implícita defensa?</p>`
      },
      {
        title: 'Pistes per a la interpretació',
        icon: '🔎',
        rules: [
          { label: 'Paraules valoratives', example: '«Paradoxa», «anomalia», «necessitat fonamental» → L\'autor pren posició.' },
          { label: 'Negacions significatives', example: '«No és una anomalia» → L\'autor refuta una visió negativa, per tant la justifica.' },
          { label: 'Modalitat epistèmica', example: '«Sembla que», «és probable que», «cal considerar» → Grau de certesa.' },
          { label: 'Relació causa-efecte implícita', example: 'Si l\'autor descriu A i B sense connector explícit, pot estar insinuant que A causa B.' },
        ]
      },
      {
        title: 'Trampes en les opcions de resposta',
        icon: '⚠️',
        examples: [
          { text: 'Opció "massa forta": generalitza en excés el que diu el text («sempre», «inevitablement»).' },
          { text: 'Opció "verídica però irrellevant": conté informació correcta del text però no respon la pregunta.' },
          { text: 'Opció "contrària al to": usa les mateixes paraules però amb valoració oposada a la de l\'autor.' },
        ]
      }
    ]
  },

  'Producció formal': {
    level: 'c1',
    icon: '🖊️',
    subtitle: 'Redactar textos acadèmics i professionals de nivell avançat',
    sections: [
      {
        title: 'El registre acadèmic',
        icon: '📌',
        body: `<p>El registre acadèmic i professional al C1 té trets propis: objectivitat, impersonalitat, densitat informativa i precisió lèxica. No és simplement «escriure correctament»: és adoptar les convencions discursives del gènere textual.</p>`
      },
      {
        title: 'Estructura d\'un informe o text formal',
        icon: '📐',
        examples: [
          { text: 'Títol i encapçalament: breu, informatiu, sense article al titular.' },
          { text: 'Introducció: «La present anàlisi té per objecte...» / «L\'objectiu d\'aquest informe és...»' },
          { text: 'Cos: paràgrafs temàtics, un per idea. Cada paràgraf comença amb la idea principal.' },
          { text: 'Conclusió: síntesi i, si escau, recomanacions. «En definitiva...» / «Cal concloure que...»' },
        ]
      },
      {
        title: 'Impersonalitat i objectivitat',
        icon: '⚖️',
        rules: [
          { label: 'Evita la 1a persona singular', example: '«Crec que» → «Cal considerar que» / «Sembla evident que».' },
          { label: 'Usa la passiva reflexa', example: '«S\'han observat canvis significatius.» / «Es constata una millora.»' },
          { label: 'Modalitat epistèmica', example: '«Cal tenir en compte» / «Convé subratllar» / «Es fa palès que».' },
          { label: 'Referència al document', example: '«Com s\'ha assenyalat anteriorment» / «D\'acord amb les dades presentades».' },
        ]
      },
      {
        title: 'Fórmules d\'informe útils',
        icon: '📋',
        examples: [
          { text: '«La present anàlisi posa de manifest que...»' },
          { text: '«D\'acord amb les evidències disponibles, cal concloure que...»' },
          { text: '«Es recomana, per consegüent, que...»' },
          { text: '«L\'estudi constata l\'existència d\'una relació directa entre X i Y.»' },
        ]
      }
    ]
  },

  'Oracions de relatiu': {
    level: 'c1',
    icon: '🔗',
    subtitle: 'Ús culte dels pronoms relatius i construccions de relatiu',
    sections: [
      {
        title: 'El relatiu «que» i les seves limitacions',
        icon: '📌',
        body: `<p>«Que» és el relatiu més freqüent, però en registre culte i formal és insuficient quan va precedit de preposició o quan pot crear ambigüitat. En aquests casos s'usa «el qual / la qual / els quals / les quals».</p>`
      },
      {
        title: 'Pronoms relatius al C1',
        icon: '📊',
        table: {
          headers: ['Pronom', 'Ús', 'Exemple'],
          rows: [
            ['que', 'Subjecte o objecte directe (sense preposició)', 'El document que has enviat...'],
            ['el qual / la qual...', 'Amb preposició o per evitar ambigüitat', 'El tema del qual hem parlat... / La comissió la qual va redactar...'],
            ['qui', 'Persones, quan és subjecte de la subordinada', 'Els qui vulguin participar que ho comuniquin.'],
            ['on', 'Lloc', 'La ciutat on va néixer és Barcelona.'],
            ['quan', 'Temps (registre literari)', 'En el moment en què es va produir...'],
            ['com', 'Mode', 'La manera com ho ha resolt és exemplar.'],
          ]
        }
      },
      {
        title: 'Relatives explicatives vs. especificatives',
        icon: '⚖️',
        rules: [
          { label: 'Especificativa (sense comes)', example: '«El professor que sap molt de sintaxi és el nostre.» → Identifica quin professor.' },
          { label: 'Explicativa (amb comes)', example: '«El professor, que sap molt de sintaxi, ens ha ajudat molt.» → Afegeix informació sobre un professor ja identificat.' },
        ]
      }
    ]
  },

  'Subjuntiu imperfet': {
    level: 'c1',
    icon: '🔀',
    subtitle: 'Usos del subjuntiu imperfet en contextos formals i literaris',
    sections: [
      {
        title: 'Quan s\'usa el subjuntiu imperfet?',
        icon: '📌',
        body: `<p>El subjuntiu imperfet s'usa quan el verb de la principal és en temps passat (pretèrit perfet perifràstic, imperfet, plusquamperfet) o en condicional, i la subordinada exigeix subjuntiu.</p>
               <p>Regla de la concordança temporal: present de subj. → present/futur; imperfet de subj. → passat/condicional.</p>`
      },
      {
        title: 'Concordança de temps',
        icon: '📊',
        table: {
          headers: ['Verb principal (temps)', 'Verb subordinat', 'Exemple'],
          rows: [
            ['Present / Futur', 'Present de subj.', 'Vull que vingui. / Voldré que vingui.'],
            ['Passat (perifràstic)', 'Imperfet de subj.', 'Vaig voler que vingués.'],
            ['Imperfet', 'Imperfet de subj.', 'Volia que vingués.'],
            ['Condicional', 'Imperfet de subj.', 'Voldria que vingués.'],
            ['Plusquamperfet subj.', 'Per a irreals en el passat', 'Si hagués vingut, hauria estat millor.'],
          ]
        }
      },
      {
        title: 'Usos específics de l\'imperfet de subjuntiu',
        icon: '📋',
        rules: [
          { label: 'Estil indirecte en passat', example: '«Va demanar que tots arribessin puntuals.»' },
          { label: 'Desig hipotètic (amb ojala, tant de bo)', example: '«Tant de bo ho sabés!» → desig difícil d\'acomplir.' },
          { label: 'Fórmules de cortesia', example: '«Voldria que m\'expliqués...» → condicional + subj. imperfet.' },
        ]
      }
    ]
  },

  'Pronoms febles': {
    level: 'c1',
    icon: '🔵',
    subtitle: 'El sistema de pronoms febles del català: combinació i col·locació',
    sections: [
      {
        title: 'Què són els pronoms febles?',
        icon: '📌',
        body: `<p>Els pronoms febles (o àtons) substitueixen sintagmes nominals per evitar repeticions. El català té un sistema de pronoms febles especialment ric i complex, molt diferent del castellà, amb pronoms sense equivalent directe com «en», «hi» i els reflexius.</p>
               <p>Es col·loquen <strong>davant del verb</strong> (proclítics) en frases no imperatives i <strong>darrere del verb</strong> (enclítics, units amb guionet) en imperatius, infinitius i gerundis.</p>`
      },
      {
        title: 'Quadre dels pronoms febles principals',
        icon: '📊',
        table: {
          headers: ['Pronom', 'Funció', 'Exemple clàssic'],
          rows: [
            ['el, la, els, les', 'CD (cosa o persona determinada)', 'El veig. / La truco. / Els crido.'],
            ['em, et, es, ens, us', 'CD persona / reflexiu / recíproc', 'Em veuen. / Es pentina. / Ens estimem.'],
            ['li, els (li)', 'CI (persona)', 'Li explico el problema. / Els ho dono.'],
            ['en', 'CD partitiu / complement de «de» / quantitat', 'En vull tres. / En parlem. / En vinc, de París.'],
            ['hi', 'Complement de «a/en/amb» (lloc o altre) / substitut CI amb certes estructures', 'Hi vaig demà. / Hi penso molt. / No hi estic d\'acord.'],
            ['ho', 'Atribut / CD neutre / substitut d\'una frase sencera', 'Ho és, president. / Ho sé. / Ho diu sempre.'],
          ]
        }
      },
      {
        title: 'El pronom «en»: usos principals',
        icon: '🔵',
        rules: [
          { label: 'CD partitiu (sense article o amb indefinit)', example: '«Vols formatge?» «Sí, en vull.» / «En tinc molt.»' },
          { label: 'Substitut de complement amb «de»', example: '«Parleu de política?» «Sí, en parlem.»' },
          { label: 'Procedència (lloc d\'origen)', example: '«Véns de Barcelona?» «Sí, en vinc.»' },
          { label: 'Quantitat com a complement', example: '«Quants llibres tens?» «En tinc cinc.»' },
        ]
      },
      {
        title: 'El pronom «hi»: usos principals',
        icon: '🟢',
        rules: [
          { label: 'Lloc on es va o on s\'és', example: '«Vas al mercat?» «Sí, hi vaig.» / «Hi sóc, a casa.»' },
          { label: 'Substitut de complement amb «en/a/amb»', example: '«Hi confio, en ell.» / «Hi estic d\'acord.»' },
          { label: '«Hi ha» (existència)', example: '«Hi ha molts participants.» (mai «Hay» sense hi!)' },
        ]
      },
      {
        title: 'Combinació de dos pronoms',
        icon: '📋',
        body: `<p>Quan dos pronoms febles van junts, l'ordre és fix: <strong>reflexiu/CI + CD/«en»/«hi»</strong>.</p>`,
        table: {
          headers: ['Combinació', 'Exemple', 'Nota'],
          rows: [
            ['me\'l, me la, me\'ls, me les', '«Me\'l dóna»', 'em + el → me\'l'],
            ['te\'l, te la, te\'ls, te les', '«Te la porto»', 'et + la → te la'],
            ['li\'l, li la, li\'ls, li les', '«Li\'ls envia»', 'li + els → li\'ls'],
            ['me\'n, te\'n, se\'n, ens-en, us-en', '«Me\'n vaig»', 'em + en → me\'n (fui de allí!)'],
            ['m\'hi, t\'hi, s\'hi, ens-hi, us-hi', '«M\'hi trobo bé»', 'em + hi → m\'hi'],
            ['li ho, els ho', '«Li ho explico»', 'li + ho (sense contracció)'],
          ]
        }
      },
      {
        title: 'Errors freqüents per interferència del castellà',
        icon: '⚠️',
        rules: [
          { bad: '«Se lo digo» → *Li ho dic (correcte, però no «se lo»)', good: 'Li ho dic. / Li ho explico.' },
          { bad: '«Hay muchos» → *Hi han molts', good: 'Hi ha molts participants. («hi ha» és invariable!)' },
          { bad: 'Omissió del «hi»: «Vaig demà» (per dir «hi vaig»)', good: 'Hi vaig demà. / Demà hi vaig.' },
          { bad: '«Se me olvidó» → *Se m\'ha oblidat', good: 'Se m\'ha oblidat. / Me n\'he oblidat.' },
        ]
      }
    ]
  },

  'Frases fetes': {
    level: 'c1',
    icon: '💬',
    subtitle: 'Unitats fraseològiques, col·locacions i expressions idiomàtiques',
    sections: [
      {
        title: 'Fraseologia: més que «expressions curioses»',
        icon: '📌',
        body: `<p>Les frases fetes (o unitats fraseològiques) inclouen locucions, refranys, col·locacions i expressions idiomàtiques. El seu significat no es dedueix de les paraules per separat. Dominar-les és una marca clara de competència avançada.</p>
               <p>Al C1, no n'hi ha prou amb saber-les: cal saber <strong>quan i com</strong> usar-les sense caure en el registre massa col·loquial en contextos formals.</p>`
      },
      {
        title: 'Locucions verbals freqüents',
        icon: '📋',
        table: {
          headers: ['Expressió', 'Significat', 'Exemple'],
          rows: [
            ['anar de bòlit', 'estar molt ocupat, sense temps', 'Aquesta setmana anem de bòlit amb el projecte.'],
            ['fer els ulls grossos', 'ignorar deliberadament una falta', 'El director hi va fer els ulls grossos.'],
            ['posar-se les piles', 'esforçar-se, activar-se', 'Ja és hora que et poses les piles.'],
            ['perdre el fil', 'perdre el seguiment d\'un raonament', 'He perdut el fil de l\'explicació.'],
            ['tenir molta barra', 'tenir molt de descaro', 'Té molta barra per demanar un augment ara.'],
            ['fer la viu-viu', 'viure sense treballar gaire', 'Sempre fa la viu-viu i els altres ho fan tot.'],
            ['estar a l\'aguait', 'estar atent, vigilant', 'Hem d\'estar a l\'aguait de qualsevol canvi.'],
            ['tirar la tovallola', 'rendir-se, abandonar', 'No és moment de tirar la tovallola.'],
          ]
        }
      },
      {
        title: 'Col·locacions lèxiques',
        icon: '🔗',
        body: `<p>Les col·locacions són combinacions de paraules que «sonen bé» per convencions de la llengua. Aprendre-les és essencial perquè sovint no coincideixen amb el castellà.</p>`,
        table: {
          headers: ['Verb', 'Col·locació correcta', 'Incorrecte (calc)'],
          rows: [
            ['fer', 'fer una pregunta', '*realitzar una pregunta'],
            ['prendre', 'prendre una decisió', '*agafar una decisió'],
            ['dur', 'dur a terme', '*llevar a terme'],
            ['tenir', 'tenir en compte', '*agafar en compte'],
            ['donar', 'donar les gràcies', 'ok en castellà: «dar las gracias»'],
            ['fer', 'fer cas', '*posar atenció'],
          ]
        }
      },
      {
        title: 'Refranys i expressions amb context',
        icon: '📚',
        examples: [
          { text: '«Qui no vulgui pols, que no vagi a l\'era.» → Qui vol fer alguna cosa ha d\'acceptar-ne les conseqüències.' },
          { text: '«Ja plourà!» → Expressió d\'indiferència o escepticisme davant una promesa o amenaça.' },
          { text: '«Estar entre l\'espasa i la paret.» → Estar en una situació difícil sense bona sortida.' },
          { text: '«Fer de tripas cor» → *calc castellà. En català: «fer de necessitat virtut» o «armar-se de coratge».' },
        ]
      },
      {
        title: 'Registre i adequació',
        icon: '⚖️',
        body: `<p>Moltes frases fetes pertanyen al registre col·loquial. Al C1 cal saber quan és adequat usar-les i quan cal substituir-les per expressions formals.</p>`,
        rules: [
          { label: 'Col·loquial', example: '«Anem de bòlit» → Formal: «Ens trobem en una situació de gran càrrega de treball».' },
          { label: 'Col·loquial', example: '«Tirar la tovallola» → Formal: «Abandonar el projecte» / «Renunciar a la iniciativa».' },
          { label: 'Admesa en tots els registres', example: '«Tenir en compte», «donar suport a», «fer referència a».' },
        ]
      }
    ]
  },

  'Derivació i flexió': {
    level: 'c1',
    icon: '🧬',
    subtitle: 'Morfologia derivativa i flexiva del català avançat',
    sections: [
      {
        title: 'Morfologia al C1: per què és important?',
        icon: '📌',
        body: `<p>Dominar la morfologia permet <strong>crear paraules noves</strong> a partir d\'elements coneguts (derivació) i <strong>adaptar-les al context gramatical</strong> (flexió). Al C1, errors morfològics en textos formals penalitzen molt.</p>
               <p>La derivació i la composició amplien el lèxic; la flexió correcta garanteix la concordança i el registre adequat.</p>`
      },
      {
        title: 'Prefixos productius en català',
        icon: '📊',
        table: {
          headers: ['Prefix', 'Significat', 'Exemples'],
          rows: [
            ['des-', 'negació, reversió', 'desfer, desconèixer, desacord, desmuntar'],
            ['re-', 'repetició, intensitat', 'refer, rellegir, reforçar, reorganitzar'],
            ['sub-', 'inferioritat, insuficiència', 'subestimar, subordinat, subconjunt'],
            ['pre-', 'anterioritat', 'preveure, predeterminar, precedent'],
            ['co-/con-', 'conjunció, participació', 'coautoria, coexistir, conviure, corresponsabilitat'],
            ['anti-', 'oposició', 'antidemocràtic, anticossos, antisocial'],
            ['inter-', 'entre, mutuament', 'intercanvi, interacció, interdisciplinari'],
            ['multi-', 'multiplicitat', 'multicultural, multidisciplinari, multilingüe'],
          ]
        }
      },
      {
        title: 'Sufixos nominals productius',
        icon: '📊',
        table: {
          headers: ['Sufix', 'Valor', 'Exemples'],
          rows: [
            ['-ció / -ió', 'acció o resultat', 'formació, aplicació, decisió, revisió'],
            ['-ment', 'acció (des de verb) / mode (des de adj.)', 'desenvolupament, tractament / ràpidament'],
            ['-tat / -itat', 'qualitat abstracta', 'llibertat, qualitat, complexitat, diversitat'],
            ['-isme', 'doctrina, tendència', 'catalanisme, feminisme, liberalisme'],
            ['-ista', 'adherent, professional', 'periodista, especialista, activista'],
            ['-dor/-dora', 'agent', 'investigador, gestora, coordinador'],
            ['-ble', 'possibilitat passiva', 'assolible, sostenible, inqüestionable'],
            ['-atge', 'col·lectiu, procés', 'aprenentatge, rodatge, personatge'],
          ]
        }
      },
      {
        title: 'Flexió verbal: irregularitats freqüents al C1',
        icon: '🔀',
        body: `<p>Al C1 és fonamental dominar les formes verbals irregulars, especialment en el subjuntiu i els temps de passat.</p>`,
        table: {
          headers: ['Infinitiu', 'Ind. present (1a sg)', 'Subj. present (1a sg)', 'Perf. perifràstic (1a sg)'],
          rows: [
            ['ser', 'sóc', 'sigui', 'vaig ser'],
            ['haver', 'he', 'hagi', 'vaig haver'],
            ['poder', 'puc', 'pugui', 'vaig poder'],
            ['voler', 'vull', 'vulgui', 'vaig voler'],
            ['saber', 'sé', 'sàpiga', 'vaig saber'],
            ['venir', 'vinc', 'vingui', 'vaig venir'],
            ['fer', 'faig', 'faci', 'vaig fer'],
            ['dir', 'dic', 'digui', 'vaig dir'],
          ]
        }
      },
      {
        title: 'Flexió nominal: gènere i nombre especials',
        icon: '📋',
        rules: [
          { label: 'Noms amb gènere no predictible', example: '«el mar / la mar» (ambdós); «el terra» (no «la terra» en sentit de sòl).' },
          { label: 'Plurals irregulars', example: '«el règim → els règims»; «el caràcter → els caràcters»; «la síntesi → les síntesis».' },
          { label: 'Substantius invariables en gènere', example: '«el/la cantant», «el/la testimoni», «el/la còmplice».' },
          { label: 'Adjectius amb formes especials', example: '«bo → bona → bons → bones» (però «bon» davant masc. sg.); «gran → gran → grans».' },
        ]
      },
      {
        title: 'Nominalitzacions: de verb a nom',
        icon: '✨',
        body: `<p>La nominalització (convertir verbs en noms) és una marca de registre acadèmic. Cal dominar-la per produir textos formals.</p>`,
        examples: [
          { text: '«analitzar» → «l\'anàlisi» / «la tasca d\'anàlisi»' },
          { text: '«implementar» → «la implementació» / «el desplegament de»' },
          { text: '«avaluar» → «l\'avaluació» / «el procés d\'avaluació»' },
          { text: '«Han decidit reduir costos» → «La decisió de reducció de costos implica...»' },
        ]
      }
    ]
  },

  'Temps verbals': {
    level: 'b2',
    icon: '⏱️',
    subtitle: 'Usos dels temps verbals del passat, present i futur',
    sections: [
      {
        title: 'El passat en català',
        icon: '📌',
        body: `<p>El català estàndard usa el <strong>passat perifràstic</strong> (vaig + infinitiu) per a accions passades acabades. El <strong>pretèrit perfet</strong> (he + participi) existeix però és menys freqüent en català central oral.</p>`
      },
      {
        title: 'Passat perifràstic vs. Imperfet',
        icon: '📊',
        table: {
          headers: ['Passat perifràstic', 'Imperfet', 'Ús'],
          rows: [
            ['Vaig menjar.', 'Menjava.', 'Acció puntual acabada vs. acció en curs/habitual'],
            ['Va trucar tres vegades.', 'Trucava cada dia.', 'Acció comptada/delimitada vs. hàbit'],
            ['Quan va entrar...', '...plorava (de fons)', 'Acció nova vs. acció de fons'],
          ]
        }
      },
      {
        title: 'Futur, condicional i plusquamperfet',
        icon: '📋',
        rules: [
          { label: 'Futur irregular', example: 'fer → faré, poder → podré, voler → voldré, saber → sabré, haver → hauré, ser → seré' },
          { label: 'Condicional irregular', example: 'fer → faria, poder → podria, voler → voldria, haver → hauria' },
          { label: 'Plusquamperfet', example: '«Havia acabat quan va arribar.» → havia/havies/havia/havíem/havíeu/havien + participi' },
        ]
      }
    ]
  },

  'Preposicions': {
    level: 'b2',
    icon: '🔧',
    subtitle: 'Usos de per/per a i altres preposicions catalanes',
    sections: [
      {
        title: 'Per vs. Per a',
        icon: '📊',
        table: {
          headers: ['Per', 'Per a'],
          rows: [
            ['Causa: «Ho dic per amor.»', 'Destinació: «Aquesta carta és per a tu.»'],
            ['Durada: «per una setmana»', 'Termini: «per a divendres»'],
            ['Mitjà: «per telèfon»', 'Opinió: «Per a mi, és clar.»'],
            ['A través de: «per la finestra»', 'Finalitat: «Estudio per a millorar.»'],
          ]
        }
      },
      {
        title: 'Règim preposicional de verbs freqüents',
        icon: '📋',
        rules: [
          { label: 'dependre de', example: '«Depèn de tu.» (no *dependre en)' },
          { label: 'quedar amb', example: '«Quedo amb ella demà.»' },
          { label: 'pensar en', example: '«Penso en tu.» / «Penso a fer-ho.» (infinitiu)' },
          { label: 'insistir a + inf.', example: '«Insisteix a venir.» (no *insistir en + inf.)' },
        ]
      },
      {
        title: 'Des de vs. De — A vs. En',
        icon: '📌',
        rules: [
          { label: 'Des de (origen temporal)', example: '«Treballo aquí des de fa tres anys.» → fins ara' },
          { label: 'De (procedència puntual)', example: '«Vinc de Barcelona.» → procedència, sense continuïtat' },
          { label: 'A (moviment / lloc fix)', example: '«Vaig a Barcelona.» / «Sóc a casa.» / «A classe.»' },
          { label: 'En (lloc abstracte/general)', example: '«Treballo en un hospital.» / «En reunió.»' },
        ]
      }
    ]
  },

  'Construccions comparatives': {
    level: 'b2',
    icon: '⚖️',
    subtitle: 'Comparatius d\'igualtat, superioritat, inferioritat i superlatius',
    sections: [
      {
        title: 'Tipus de comparatius',
        icon: '📊',
        table: {
          headers: ['Tipus', 'Estructura', 'Exemple'],
          rows: [
            ['Superioritat', 'més + adj./adv. + que', 'És més alt que el seu germà.'],
            ['Inferioritat', 'menys + adj./adv. + que', 'Parla menys fluïdament.'],
            ['Igualtat (adj./adv.)', 'tan + adj./adv. + com', 'És tan intel·ligent com diuen.'],
            ['Igualtat (verb/nom)', 'tant com / tanta/tants/tantes + nom + com', 'Treballa tant com pot.'],
          ]
        }
      },
      {
        title: 'Comparatius irregulars',
        icon: '📋',
        rules: [
          { label: 'bo → millor', example: '«És millor que l\'anterior.» (preferit en registre formal sobre «més bo»)' },
          { label: 'dolent → pitjor', example: '«El resultat és pitjor del que esperava.»' },
          { label: 'gran → major / més gran', example: '«El major repte...» (formal/abstracte) / «És més gran que jo» (mida/edat)' },
          { label: 'petit → menor / més petit', example: '«El menor dels mals.» / «És més petit que la seva germana.»' },
        ]
      },
      {
        title: 'Superlatiu absolut',
        icon: '✨',
        rules: [
          { label: 'Molt + adjectiu', example: '«És molt important.» — forma analítica (freqüent)' },
          { label: 'Adjectiu + -íssim', example: '«És importantíssim.» — forma sintètica (registre elevat)' },
          { label: 'Tan i tant', example: '«tan» davant adj./adv. / «tant/tanta/tants/tantes» davant nom o verb.' },
        ]
      }
    ]
  },

  'Estil indirecte': {
    level: 'c1',
    icon: '💬',
    subtitle: 'Transformar el discurs directe en indirecte',
    sections: [
      {
        title: 'Canvis de temps verbal',
        icon: '📊',
        table: {
          headers: ['Estil directe', 'Estil indirecte (verb en passat)'],
          rows: [
            ['Present: «Parlo»', 'Imperfet: ...que parlava'],
            ['Passat perifràstic: «Vaig parlar»', 'Plusquamperfet: ...que havia parlat'],
            ['Futur: «Parlaré»', 'Condicional: ...que parlaria'],
            ['Present de subj.: «Parli»', 'Imperfet de subj.: ...que parlés'],
            ['Imperatiu: «Parla!»', 'Que + subj. imperfet: ...que parlés'],
          ]
        }
      },
      {
        title: 'Canvis de pronoms i adverbis',
        icon: '📋',
        rules: [
          { label: 'Pronoms personals', example: '«jo» → ell/ella; «tu» → jo; «nosaltres» → ells/elles' },
          { label: 'Adverbis de temps', example: '«avui» → aquell dia; «demà» → l\'endemà; «ahir» → el dia anterior' },
          { label: 'Adverbis de lloc', example: '«aquí» → allà; «aquest» → aquell' },
        ]
      },
      {
        title: 'Marcadors introductors',
        icon: '📌',
        rules: [
          { label: 'Declarativa', example: '«dir que», «afirmar que», «explicar que», «comentar que»' },
          { label: 'Interrogativa', example: '«preguntar si» (sí/no) / «preguntar on/quan/com/per què»' },
          { label: 'Imperativa', example: '«demanar que», «ordenar que», «proposar que» + subj. imperfet' },
        ]
      }
    ]
  },

  'Passiva i impersonal': {
    level: 'c1',
    icon: '🔄',
    subtitle: 'Veu passiva, passiva reflexa i construccions impersonals',
    sections: [
      {
        title: 'Tres construccions passives/impersonals',
        icon: '📊',
        table: {
          headers: ['Construcció', 'Estructura', 'Exemple'],
          rows: [
            ['Passiva perifràstica', 'ser + participi (concordat)', 'El document va ser signat pel director.'],
            ['Passiva reflexa', 'es + verb (concorda amb CD)', 'Es van vendre molts llibres.'],
            ['Impersonal', 'es + verb (singular, sense subjecte)', 'Es parla de canvis. / No es pot aparcar.'],
          ]
        }
      },
      {
        title: 'Quan usar cada construcció',
        icon: '📋',
        rules: [
          { label: 'Perifràstica', example: 'Quan l\'agent és important: «Va ser aprovat pel consell.»' },
          { label: 'Reflexa', example: 'Quan l\'agent és irrellevant o desconegut: «Es van prendre mesures.»' },
          { label: 'Impersonal', example: 'Per a instruccions o normes generals: «S\'ha d\'entregar avui.»' },
        ]
      },
      {
        title: 'Preferència del català',
        icon: '📌',
        body: `<p>El català prefereix la passiva reflexa i les construccions impersonals sobre la passiva perifràstica, que és poc freqüent en registre oral i periodístic. En textos formals, la passiva perifràstica s'usa quan l'agent és rellevant.</p>`
      }
    ]
  },


  // ── NIVELL B1 ──────────────────────────────────────────────

  'Imperfet i perifràstic B1': {
    level: 'b1',
    icon: '⏱️',
    subtitle: "Distingir quan usar l'imperfet o el passat perifràstic en contextos habituals",
    sections: [
      {
        title: 'La clau de la tria',
        icon: '📌',
        body: `<p>Al B1, la dificultat central és triar correctament entre el <strong>passat perifràstic</strong> (vaig + infinitiu) i l'<strong>imperfet</strong> (-ava/-ia). La regla bàsica: el perifràstic descriu accions puntuals i acabades; l'imperfet descriu accions en curs, habituals o de fons.</p>`
      },
      {
        title: 'Perifràstic vs. Imperfet: quadre comparatiu',
        icon: '📊',
        table: {
          headers: ['Temps', 'Usos principals', 'Exemple'],
          rows: [
            ['Passat perifràstic', 'Acció puntual i acabada; acció nova; acció comptada', 'Ahir va ploure a les sis. / Va trucar tres vegades.'],
            ['Imperfet', 'Hàbit del passat; acció en curs (de fons); descripció; estat', "De petit, anava a la platja cada estiu. / Quan va entrar, plovia."],
          ]
        }
      },
      {
        title: 'Expressions temporals que orienten la tria',
        icon: '📋',
        examples: [
          { text: "Perifràstic → ahir, fa una setmana, l'any passat, de cop, de sobte, llavors, finalment" },
          { text: 'Imperfet → sempre, normalment, cada dia, sovint, mentre, en aquella època, de petit' },
        ]
      },
      {
        title: 'Errors freqüents',
        icon: '⚠️',
        rules: [
          { bad: 'Ahir menjava pizza.', good: 'Ahir vaig menjar pizza. (acció puntual i acabada ahir)' },
          { bad: "Quan era nen, vaig anar a l'escola cada dia.", good: "Quan era nen, anava a l'escola cada dia. (hàbit del passat)" },
        ]
      }
    ]
  },

  'Pronoms febles B1': {
    level: 'b1',
    icon: '🟡',
    subtitle: "Els pronoms en, hi i les combinacions bàsiques",
    sections: [
      {
        title: "El pronom «en»",
        icon: '📌',
        body: `<p>«En» substitueix un complement directe que no porta article determinat (partitiu), o un complement introduït per «de». És un dels pronoms que més diferencia el català del castellà.</p>`
      },
      {
        title: "Usos de «en» i «hi»",
        icon: '📊',
        table: {
          headers: ['Pronom', 'Substitueix', 'Exemple'],
          rows: [
            ['en', 'CD partitiu (sense article / amb indefinit)', "«Vols pa?» «Sí, en vull.»"],
            ['en', "Complement amb «de»", "«Parles de la reunió?» «Sí, en parlo.»"],
            ['en', 'Procedència', "«Véns de Girona?» «Sí, en vinc.»"],
            ['hi', "Lloc on es va o on s'és", "«Vas al mercat?» «Sí, hi vaig.»"],
            ['hi', "Complement amb «a/en» (no lloc físic)", "«Hi penso molt, en la teva proposta.»"],
          ]
        }
      },
      {
        title: 'Col·locació del pronom',
        icon: '🔵',
        rules: [
          { label: 'Davant del verb (proclític)', example: "«En vull.» / «Hi vaig.» / «No el veig.»" },
          { label: "Darrere i unit (enclític) amb infinitiu/imperatiu", example: "«Vull menjar-ne.» / «Porta'l!» / «Anem-hi!»" },
        ]
      }
    ]
  },

  'Verbs irregulars B1': {
    level: 'b1',
    icon: '🔧',
    subtitle: 'Conjugació dels verbs irregulars més freqüents en present i passat',
    sections: [
      {
        title: 'Per què hi ha tanta irregularitat?',
        icon: '📌',
        body: `<p>Els verbs més usats en qualsevol llengua tendeixen a ser els més irregulars. En català, verbs com <strong>ser, estar, anar, fer, poder, voler, saber, tenir, venir, dir</strong> presenten formes pròpies que cal memoritzar.</p>`
      },
      {
        title: "Verbs essencials: present d'indicatiu",
        icon: '📊',
        table: {
          headers: ['Verb', 'jo', 'tu', 'ell/ella', 'nosaltres', 'vosaltres', 'ells/elles'],
          rows: [
            ['ser', 'soc', 'ets', 'és', 'som', 'sou', 'són'],
            ['anar', 'vaig', 'vas', 'va', 'anem', 'aneu', 'van'],
            ['fer', 'faig', 'fas', 'fa', 'fem', 'feu', 'fan'],
            ['poder', 'puc', 'pots', 'pot', 'podem', 'podeu', 'poden'],
            ['voler', 'vull', 'vols', 'vol', 'volem', 'voleu', 'volen'],
            ['tenir', 'tinc', 'tens', 'té', 'tenim', 'teniu', 'tenen'],
            ['venir', 'vinc', 'véns', 've', 'venim', 'veniu', 'vénen'],
            ['dir', 'dic', 'dius', 'diu', 'diem', 'dieu', 'diuen'],
          ]
        }
      },
      {
        title: 'Passat perifràstic dels irregulars',
        icon: '📋',
        body: `<p>El passat perifràstic dels verbs irregulars es forma amb l'auxiliar «anar» (vaig/vas/va...) + <strong>infinitiu</strong> del verb, de manera que la irregularitat del verb no afecta el passat perifràstic.</p>`,
        examples: [
          { text: 'Ahir vaig fer els deures. (fer → vaig fer)' },
          { text: 'Vas poder venir? (poder → vas poder)' },
          { text: 'Va dir la veritat. (dir → va dir)' },
        ]
      }
    ]
  },

  'Connectors B1': {
    level: 'b1',
    icon: '🔗',
    subtitle: 'Connectar idees amb causa, contrast, conseqüència i ordre',
    sections: [
      {
        title: 'Per a què serveixen els connectors?',
        icon: '📌',
        body: `<p>Els connectors (o marcadors discursius) uneixen frases i paràgrafs mostrant la relació lògica entre les idees. Sense connectors, el discurs és una llista d'idees soltes; amb connectors, és un text cohesionat.</p>`
      },
      {
        title: 'Connectors B1 per funció',
        icon: '📊',
        table: {
          headers: ['Funció', 'Connectors principals', 'Exemple'],
          rows: [
            ['Causa', 'perquè, ja que, com que, a causa de', 'No va venir perquè estava malalt.'],
            ['Conseqüència', 'per tant, per això, així doncs, llavors', 'Havia estudiat molt; per tant, va aprovar.'],
            ['Contrast', "però, tanmateix, en canvi, malgrat tot", "M'agrada molt; tanmateix, és massa car."],
            ['Ordre', 'primer / en primer lloc, després, finalment', 'Primer neteja, després menja.'],
            ['Addició', "a més, també, i a més, fins i tot", "A més, porta'n un per a la Júlia."],
          ]
        }
      },
      {
        title: 'Distinció causa / conseqüència',
        icon: '⚖️',
        rules: [
          { label: 'Causa (explica el motiu)', example: "«No va venir perquè estava malalt.» → La malaltia és la causa de no venir." },
          { label: 'Conseqüència (expressa el resultat)', example: "«Estava malalt; per tant, no va venir.» → No venir és el resultat de la malaltia." },
        ]
      }
    ]
  },

  'Futur i condicional B1': {
    level: 'b1',
    icon: '🔮',
    subtitle: 'Expressar plans, prediccions i hipòtesis amb futur i condicional',
    sections: [
      {
        title: 'Futur simple',
        icon: '📌',
        body: `<p>El futur simple s'usa per fer prediccions, promeses i suposicions. Es forma afegint les terminacions al <strong>infinitiu</strong>: -é, -às, -à, -em, -eu, -an.</p>`
      },
      {
        title: 'Futur simple: formes regulars i irregulars',
        icon: '📊',
        table: {
          headers: ['Persona', 'Parlar', 'Fer (irreg.)', 'Poder (irreg.)'],
          rows: [
            ['jo', 'parlaré', 'faré', 'podré'],
            ['tu', 'parlaràs', 'faràs', 'podràs'],
            ['ell/ella', 'parlarà', 'farà', 'podrà'],
            ['nosaltres', 'parlarem', 'farem', 'podrem'],
            ['vosaltres', 'parlareu', 'fareu', 'podreu'],
            ['ells/elles', 'parlaran', 'faran', 'podran'],
          ]
        }
      },
      {
        title: 'Condicional simple',
        icon: '📋',
        body: `<p>El condicional expressa accions possibles sota una condició, desitjos educats i hipòtesis. Terminacions: -ia, -ies, -ia, -íem, -íeu, -ien (afegides a l'infinitiu).</p>`,
        rules: [
          { label: 'Desig / petició educada', example: "«Voldria un cafè, si us plau.» / «Podries ajudar-me?»" },
          { label: 'Hipòtesi present', example: "«Si pogués, estudiaria català cada dia.»" },
          { label: 'Supòsit sobre el present', example: "«Deuria ser tard quan va arribar.»" },
        ]
      }
    ]
  },

  'Perífrasis B1': {
    level: 'b1',
    icon: '⚙️',
    subtitle: 'Perífrasis verbals habituals: obligació, possibilitat i aspecte',
    sections: [
      {
        title: 'Què és una perífrasi verbal?',
        icon: '📌',
        body: `<p>Una perífrasi verbal és la combinació d'un <strong>verb auxiliar conjugat</strong> + infinitiu (o gerundi). L'auxiliar perd el significat original i aporta un valor d'obligació, possibilitat, aspecte, etc.</p>`
      },
      {
        title: 'Perífrasis B1 essencials',
        icon: '📊',
        table: {
          headers: ['Perífrasi', 'Valor', 'Exemple'],
          rows: [
            ["haver de + inf.", 'Obligació', 'He de treballar demà.'],
            ['poder + inf.', 'Possibilitat / permís', 'Pots quedar-te si vols.'],
            ['voler + inf.', 'Voluntat', 'Vull aprendre català.'],
            ['anar a + inf.', 'Futur immediat (intenció)', 'Avui vespre vaig a estudiar.'],
            ['estar + gerundi', 'Acció en curs', 'Estic llegint un llibre molt bo.'],
            ['acabar de + inf.', 'Acció recent', 'Acabo de dinar.'],
            ["deixar de + inf.", "Fi d'un hàbit/acció", 'He deixat de fumar.'],
          ]
        }
      },
      {
        title: 'Errors freqüents',
        icon: '⚠️',
        rules: [
          { bad: '*Tinc que estudiar.', good: "He d'estudiar. / Cal que estudiï. (No «tenir que» en català)" },
          { bad: '*Estic de treballar.', good: 'Estic treballant. (estar + gerundi, no infinitiu)' },
        ]
      }
    ]
  },

  'Subordinades B1': {
    level: 'b1',
    icon: '🔀',
    subtitle: 'Oracions subordinades causals, finals, temporals i condicionals bàsiques',
    sections: [
      {
        title: 'Oracions subordinades al B1',
        icon: '📌',
        body: `<p>Les oracions subordinades permeten expressar relacions complexes dins d'una mateixa frase. Al B1 cal dominar les quatre més freqüents: causals, finals, temporals i condicionals.</p>`
      },
      {
        title: 'Tipus de subordinades B1',
        icon: '📊',
        table: {
          headers: ['Tipus', 'Nexe principal', 'Mode', 'Exemple'],
          rows: [
            ['Causal', 'perquè, ja que, com que', 'Indicatiu', 'No vaig sortir perquè plovia.'],
            ['Final', 'perquè, per tal que', 'Subjuntiu (si canvi de subjecte)', 'Ho faig perquè aprengueu.'],
            ['Temporal', 'quan, mentre, fins que, abans que', 'Indicatiu (present/passat)', 'Quan arribi, truqueu-me.'],
            ['Condicional', 'si', 'Indicatiu (condició real)', 'Si tens temps, vine.'],
          ]
        }
      },
      {
        title: "Distinció «perquè» causal vs. final",
        icon: '⚖️',
        rules: [
          { label: 'Causal: perquè + indicatiu', example: "«No he menjat perquè no tenia gana.» → La causa és explicada." },
          { label: 'Final: perquè + subjuntiu (canvi de subjecte)', example: "«T'ho dic perquè ho sàpigues.» → L'objectiu és que l'altre ho sàpiga." },
        ]
      }
    ]
  },

  'Lèxic quotidià B1': {
    level: 'b1',
    icon: '🗣️',
    subtitle: 'Vocabulari essencial per a situacions de la vida quotidiana',
    sections: [
      {
        title: 'Registre estàndard al B1',
        icon: '📌',
        body: `<p>Al B1, cal dominar el vocabulari de la vida quotidiana en registre estàndard: salut, treball, medi ambient, serveis i relacions interpersonals. Un error típic és usar paraules castellanes quan existeix el terme català específic.</p>`
      },
      {
        title: 'Camps lèxics essencials B1',
        icon: '📊',
        table: {
          headers: ['Àmbit', 'Paraules clau'],
          rows: [
            ['Salut i cos', 'malalt/a, febre, mal de cap, metge/essa, cita, recepta, farmàcia, curar-se'],
            ['Feina i estudis', 'sou, jornada, contracte, feina, empresa, currículum, entrevista, formació'],
            ['Natura i medi', 'bosc, mar, muntanya, clima, contaminació, reciclatge, residus, energia'],
            ['Serveis', 'ajuntament, oficina, finestreta, tràmit, sol·licitud, impost, multa'],
            ['Relacions', 'amistat, confiança, discutir, reconciliar-se, malentès, disculpa'],
          ]
        }
      },
      {
        title: "Paraules que s'assemblen al castellà però difereixen",
        icon: '⚠️',
        rules: [
          { bad: '*el despacho (oficina)', good: 'el despatx' },
          { bad: '*el ordenador', good: "l'ordinador" },
          { bad: '*el coche', good: 'el cotxe' },
          { bad: '*el/la jefe/a', good: 'el/la cap' },
        ]
      }
    ]
  },

};

/* ═══════════════════════════════════════════════════════════
   EXERCICIS (5+ per categoria)
═══════════════════════════════════════════════════════════ */
const DATA = {
  b1: [
    // ── IMPERFET I PERIFRÀSTIC B1 ──
    { id:'b1-ip1', type:'choice', level:'b1', category:'Imperfet i perifràstic B1',
      question:'Tria el temps verbal correcte:',
      text:'De petit, ___ al parc cada diumenge amb els meus pares.',
      options:['vaig anar','anava','vaig anar-hi'],
      correct:1, theory:"«Cada diumenge» indica hàbit del passat → imperfet. El passat perifràstic s'usa per a accions puntuals i acabades.", example:'De petit, jugava al carrer cada tarda.' },

    { id:'b1-ip2', type:'choice', level:'b1', category:'Imperfet i perifràstic B1',
      question:'Tria el temps verbal correcte:',
      text:'Ahir a les vuit ___ el llum abans d\'anar a dormir.',
      options:['apagava','vaig apagar','apago'],
      correct:1, theory:"«Ahir a les vuit» situa l'acció en un moment puntual i acabat → passat perifràstic. L'imperfet «apagava» indicaria un hàbit o una acció de fons, no una acció concreta d'ahir.", example:'Quan vaig arribar, ell ja dormia.' },

    { id:'b1-ip3', type:'fill', level:'b1', category:'Imperfet i perifràstic B1',
      question:'Omple amb la forma correcta (imperfet o perifràstic):',
      sentence:'Quan tenia quinze anys, ___ (aprendre) a tocar la guitarra.',
      display:'passat perifràstic 1a pers. sing. de «aprendre»',
      answers:['vaig aprendre'],
      theory:"«Quan tenia quinze anys» marca la circumstància de fons (imperfet). «Vaig aprendre» = acció puntual nova que es produeix en aquell moment (perifràstic). Imperfet per al context, perifràstic per a l'acció principal.", example:'Quan vivia a París, vaig aprendre francès. / Quan era jove, vaig conèixer el meu millor amic.' },

    { id:'b1-ip4', type:'reorder', level:'b1', category:'Imperfet i perifràstic B1',
      question:'Ordena la narració cronològicament:',
      parts:['Va tancar el llibre i va apagar el llum.','Aquella nit llegia tranquil·lament al llit.','De sobte va sentir un soroll estrany.','Normalment s\'adormia molt aviat.'],
      correct:[3,1,2,0], alternates:[[3,1,0,2]], theory:"Imperfets per a hàbits/fons (normalment s'adormia, llegia); perifràstics per a accions noves (va sentir, va tancar).", example:'Mentre dormia (imperfet fons), va sonar el telèfon (perifràstic nou).' },

    { id:'b1-ip5', type:'reading', level:'b1', category:'Imperfet i perifràstic B1',
      text:"L'Arnau vivia en un poble petit quan era jove. Cada matí es llevava d'hora i anava a treballar al camp. Un dia, però, va rebre una carta important: l'acceptaven a la universitat de la ciutat. Va decidir marxar i va canviar completament la seva vida.",
      question:"Quina funció té «anava a treballar al camp» al text?",
      options:['Expressa una acció puntual que va canviar la vida del personatge','Descriu un hàbit quotidià del passat','Indica una acció acabada en un moment concret'],
      correct:1, theory:"«Anava» (imperfet) descriu la rutina habitual de fons. Les accions que canvien el curs de la narració («va rebre», «va decidir», «va canviar») van en perifràstic.", example:"Cada dia estudiava (imperfet hàbit). Un dia va suspendre (perifràstic puntual)." },

    { id:'b1-ip6', type:'choice', level:'b1', category:'Imperfet i perifràstic B1',
      question:'Quin parell de frases utilitza correctament els dos temps?',
      text:'En una narració podem combinar l\'imperfet (per a l\'estat de fons) i el perifràstic (per a l\'acció puntual i delimitada). Cada temps té el seu rol en la frase.',
      options:["Ahir estava molt cansada, per tant vaig dormir onze hores.","Ahir era molt cansada, per tant dormia onze hores.","Ahir vaig estar molt cansada, per tant dormia onze hores."],
      correct:0, theory:"«Estava cansada» = estat de fons (imperfet). «Vaig dormir onze hores» = resultat puntual i delimitat (perifràstic).", example:"Tenia gana (estat), per tant vaig menjar (acció puntual)." },

    // ── PRONOMS FEBLES B1 ──
    { id:'b1-pf1', type:'choice', level:'b1', category:'Pronoms febles B1',
      question:'Quin pronom substitueix correctament el complement subratllat?',
      text:'«Vas al gimnàs?» → «Sí, ___ vaig cada dia.»',
      options:['el','hi','en'],
      correct:1, theory:"«Hi» substitueix un lloc al qual es va («anar a»). «El gimnàs» és el destí → «hi vaig».", example:"«Vas al mercat?» «Sí, hi vaig ara.»" },

    { id:'b1-pf2', type:'choice', level:'b1', category:'Pronoms febles B1',
      question:'Completa amb el pronom correcte:',
      text:'«Vols més arròs?» → «Sí, ___ vull una mica.»',
      options:['el','hi','en'],
      correct:2, theory:"«En» substitueix un CD partitiu (sense article, quantitat indeterminada). «Arròs» sense article → «en vull».", example:"«Tens pa?» «Sí, en tinc.»" },

    { id:'b1-pf3', type:'fill', level:'b1', category:'Pronoms febles B1',
      question:"Substitueix el complement subratllat pel pronom adequat: «Parlo molt de la meva feina.»",
      sentence:'___ parlo molt.',
      display:'pronom feble adequat',
      answers:['en'],
      theory:"«Parlar de + cosa» → pronom «en». «En parlo molt» substitueix «de la meva feina».", example:"«Parles de política?» «Sí, en parlo.»" },

    { id:'b1-pf4', type:'choice', level:'b1', category:'Pronoms febles B1',
      question:'Tria l\'opció que usa correctament el pronom feble:',
      text:'Vull comprar-___ tres, de pomes.',
      options:['en (davant del verb)','hi','ne (enclític, darrere de l\'infinitiu amb guionet)'],
      correct:2, theory:"Davant del verb: «En vull tres». Darrere de l'infinitiu (enclític), «en» pren la forma «ne» unida amb guionet: «Vull comprar-ne tres». Fora de posició enclítica, la forma és «en».", example:"Vull menjar-ne. / Puc comprar-ne dos. / En tinc molts (davant del verb)." },

    { id:'b1-pf5', type:'reading', level:'b1', category:'Pronoms febles B1',
      text:'—Has estat mai a Menorca?\n—Sí, hi vaig anar fa dos estius. Em va agradar molt. M\'hi podria quedar per sempre!\n—I en tornaràs?\n—Segur que sí!',
      question:'Quina funció té «hi» a «m\'hi podria quedar»?',
      options:['Substitueix una quantitat de cosa','Indica el lloc on el parlant es quedaria (Menorca)','Substitueix un complement introduït per «de»'],
      correct:1, theory:"«Hi» pot indicar lloc (referit a Menorca ja esmentat). «Quedar-s'hi» = quedar-se en aquell lloc.", example:"«Et quedes a casa?» «Sí, m'hi quedo.»" },

    { id:'b1-pf6', type:'fill', level:'b1', category:'Pronoms febles B1',
      question:'Completa amb «en» o «hi»:',
      text:'Alguns verbs com pensar, confiar o fixar-se introdueixen el complement amb «en»; el pronom feble que el substitueix no és el mateix que el dels complements amb «de».',
      sentence:"Penses molt en els teus amics? — Sí, ___ penso molt.",
      display:'pronom feble adequat',
      answers:['hi'],
      theory:"«Pensar en + persona/cosa» → pronom «hi». «En» s'usa per a complements amb «de».", example:"«Hi penso sempre, en tu.» (pensar en tu → hi)" },

    // ── VERBS IRREGULARS B1 ──
    { id:'b1-vi1', type:'fill', level:'b1', category:'Verbs irregulars B1',
      question:'Conjuga el verb en la persona indicada (present d\'indicatiu):',
      text:'El verb «fer» és un dels verbs irregulars més freqüents en català. La 1a persona del singular té una forma especial que no segueix el patró regular dels verbs en -er.',
      sentence:'Jo ___ (fer) els deures cada vespre.',
      display:'fer → 1a persona singular',
      answers:['faig'],
      theory:"«Fer» és irregular: jo faig, tu fas, ell fa, nosaltres fem, vosaltres feu, ells fan.", example:"Jo faig el sopar. / Ell fa molt de soroll." },

    { id:'b1-vi2', type:'choice', level:'b1', category:'Verbs irregulars B1',
      question:'Quina és la forma correcta de «venir» en primera persona del plural?',
      text:'El verb «venir» en català és irregular. Atenció a les interferències del castellà: les formes catalanes no coincideixen amb les castellanes i cal conèixer-les bé.',
      options:['venimos','venim','vins','venín'],
      correct:1, theory:"«Venim» és la 1a persona del plural de «venir» en present. No és «venimos» (castellà).", example:"Venim d'Alemanya. / Nosaltres venim a peu." },

    { id:'b1-vi3', type:'fill', level:'b1', category:'Verbs irregulars B1',
      question:'Escriu la forma correcta:',
      text:'El verb «saber» és irregular en present. La 1a persona és «sé», però la 3a persona del singular té una forma pròpia que cal no confondre amb la de «poder» o «voler».',
      sentence:'Ella ___ (saber) molt bé on és el mercat.',
      display:'saber → 3a persona singular',
      answers:['sap'],
      theory:"«Saber» en present: jo sé, tu saps, ell sap, nosaltres sabem, vosaltres sabeu, ells saben.", example:"Ell sap parlar quatre idiomes." },

    { id:'b1-vi4', type:'choice', level:'b1', category:'Verbs irregulars B1',
      question:'Quina forma de «poder» és correcta per a «ells»?',
      text:'El verb «poder» és irregular en present d\'indicatiu. Les formes del subjuntiu (amb «pugu-») són correctes en subjuntiu, però la 3a persona del plural del present d\'indicatiu segueix un altre patró.',
      options:['puguen','poden','pugan','podin'],
      correct:1, theory:"«Poder» en present: jo puc, tu pots, ell pot, nosaltres podem, vosaltres podeu, ells poden. «Puguen» i «pugan» no existeixen en català normatiu; «podin» seria una forma incorrecta del subjuntiu (la forma correcta seria «puguin»).", example:"Ells poden venir demà si volen." },

    { id:'b1-vi5', type:'reorder', level:'b1', category:'Verbs irregulars B1',
      question:'Ordena per formar una frase correcta:',
      parts:['volem','els meus amics i jo','aprendre','català molt bé'],
      correct:[1,0,2,3], theory:"Subjecte + verb conjugat (1a pl. de «voler»: «volem») + infinitiu + complement.", example:"Els meus amics i jo volem aprendre català molt bé." },

    { id:'b1-vi6', type:'choice', level:'b1', category:'Verbs irregulars B1',
      question:"Quin és el paradigma complet correcte del present de «tenir»?",
      options:[
        'tinc, tens, té, tenim, teneu, tinen',
        'tinc, tens, té, tenim, teniu, tenen',
        'tenc, tens, te, tenim, teniu, tene'
      ],
      correct:1,
      theory:"«Tenir» és irregular: tinc (1a sg.), tens (2a), té (3a), tenim (1a pl.), teniu (2a pl.), tenen (3a pl.). Atenció: 2a pl. és «teniu» (no «teneu») i 3a pl. és «tenen» (no «tinen»).",
      example:"Jo tinc fred. Ell té raó. Vosaltres teniu sort. Ells tenen pressa." },

    // ── CONNECTORS B1 ──
    { id:'b1-con1', type:'choice', level:'b1', category:'Connectors B1',
      question:'Quin connector indica causa?',
      text:'No vull sortir ___ fa molt de fred.',
      options:['per tant','ja que','en canvi'],
      correct:1, theory:"«Ja que» introdueix la causa. «Per tant» indica conseqüència. «En canvi» indica contrast.", example:"No vaig poder venir ja que estava malalt." },

    { id:'b1-con2', type:'fill', level:'b1', category:'Connectors B1',
      question:'Omple amb el connector adequat (contrast):',
      sentence:"M'agrada la muntanya; ___, el mar és més relaxant per a mi.",
      display:'connector de contrast',
      answers:['tanmateix','però','en canvi','no obstant això'],
      theory:"Els tres connectors expressen contrast. «Tanmateix» i «en canvi» és més formal; «però» és més habitual.", example:"El pla era bo; tanmateix, va fracassar." },

    { id:'b1-con3', type:'reorder', level:'b1', category:'Connectors B1',
      question:'Ordena per formar una seqüència lògica:',
      parts:['Finalment, va aconseguir el treball dels seus somnis.','Primer, va fer el currículum i el va enviar.','Més tard, va practicar molt per a l\'entrevista.','Després, va esperar la resposta durant dues setmanes.'],
      correct:[1,2,3,0], theory:"Connectors d'ordre temporal: primer → més tard → després → finalment. Atenció: «a més» expressa addició lògica, no seqüència cronològica.", example:"Primer vaig estudiar, després vaig fer l'examen, finalment vaig celebrar-ho." },

    { id:'b1-con4', type:'choice', level:'b1', category:'Connectors B1',
      question:'Quina frase usa incorrectament el connector?',
      options:["Va estudiar molt; per tant, va aprovar.","No va venir perquè tenia febre.","Va fer fred; perquè no van sortir."],
      correct:2, theory:"«Perquè» introdueix la causa en una frase subordinada, no una frase principal. Cal dir: «Va fer fred; per tant, no van sortir.»", example:"Correcte: «No van sortir perquè feia fred.» / «Feia fred; per tant, no van sortir.»" },

    { id:'b1-con5', type:'reading', level:'b1', category:'Connectors B1',
      text:"La contaminació de l'aire és un problema greu a les grans ciutats. A causa dels cotxes i de la indústria, la qualitat de l'aire ha empitjorat molt. Tanmateix, alguns municipis han pres mesures importants. Per exemple, han creat zones de baixes emissions. A més, han ampliat el transport públic. Per tant, la situació podria millorar en els propers anys.",
      question:'Quantes relacions lògiques diferents s\'estableixen al text?',
      options:['Només causa i conseqüència','Causa, contrast, addició i conseqüència','Causa, ordre i contrast'],
      correct:1, theory:"«A causa de» (causa) / «Tanmateix» (contrast) / «A més» (addició) / «Per tant» (conseqüència).", example:"Identifica el connector → identifica la relació lògica." },

    { id:'b1-con6', type:'fill', level:'b1', category:'Connectors B1',
      question:'Tria el connector de conseqüència adequat:',
      text:'Els connectors de conseqüència lliguen una causa amb el seu resultat lògic. Quin encaixa en un registre formal per introduir la conseqüència?',
      sentence:"Ha après molt de vocabulari nou; ___, pot llegir textos més complexos.",
      display:'connector de conseqüència (registre formal)',
      answers:['per tant','per això','així doncs','en conseqüència','per consegüent'],
      theory:"«Per tant», «per això» i «així doncs» introdueixen la conseqüència d'allò que s'ha dit abans.", example:"Va treballar molt; per tant, va tenir èxit." },

    // ── FUTUR I CONDICIONAL B1 ──
    { id:'b1-fc1', type:'fill', level:'b1', category:'Futur i condicional B1',
      question:'Escriu la forma de futur correcta:',
      text:'El verb «fer» és irregular no només en present sinó també en futur: la base canvia respecte a l\'infinitiu. Recorda com es forma.',
      sentence:'Demà ___ (fer) molt bon temps, diuen a la ràdio.',
      display:'fer → 3a persona singular futur',
      answers:['farà'],
      theory:"«Fer» és irregular al futur: faré, faràs, farà, farem, fareu, faran.", example:"Demà farà sol. / L'any que ve faré un viatge." },

    { id:'b1-fc2', type:'choice', level:'b1', category:'Futur i condicional B1',
      question:'Quina frase expressa un desig educat?',
      text:'En català, el condicional s\'usa per fer peticions de manera cortesa i suavitzada. És l\'equivalent del «would like» en anglès o del «quisiera» en castellà formal.',
      options:["Vull un cafè!","Voldria un cafè, si us plau.","Dóna'm un cafè."],
      correct:1, theory:"El condicional «voldria» suavitza la petició i la fa educada. És equivalent a «would like» en anglès.", example:"Voldria reservar una taula per a dos, si us plau." },

    { id:'b1-fc3', type:'fill', level:'b1', category:'Futur i condicional B1',
      question:'Completa amb el condicional:',
      text:'Les frases condicionals irreals (si + imperfet de subjuntiu + condicional) expressen hipòtesis sobre el present: allò que faries si les circumstàncies fossin diferents.',
      sentence:"Si tingués més temps, ___ (estudiar) música.",
      display:'estudiar → 1a pers. sing. condicional',
      answers:['estudiaria'],
      theory:"Condicional en -ia: estudiar → estudiaria. S'usa per a hipòtesis sobre el present.", example:"Si pogués, viuria a la muntanya." },

    { id:'b1-fc4', type:'choice', level:'b1', category:'Futur i condicional B1',
      question:'Quin temps verbal és el correcte?',
      text:"Si tens fred, ___ la finestra.",
      options:['tancaràs','tanques','tanca'],
      correct:2, theory:"Les condicionals reals (si + present indicatiu) porten l'apòdosi en imperatiu o present. «Si tens... tanca!»", example:"Si tens gana, menja alguna cosa." },

    { id:'b1-fc5', type:'reading', level:'b1', category:'Futur i condicional B1',
      text:"—Quin seria el teu treball ideal?\n—M'agradaria ser periodista. Viatjaria molt i escriuria sobre cultures diferents. A més, podria conèixer persones molt interessants. I tu?\n—Jo voldria treballar en una editorial. Corregiria texts i descobriria nous autors.",
      question:'Quina funció gramatical tenen els condicionals del text?',
      options:['Expressen accions passades que ja no es fan','Expressen hipòtesis sobre un futur ideal imaginat','Expressen ordres i instruccions'],
      correct:1, theory:"El condicional «m'agradaria», «viatjaria», «escriuria», «podria», «voldria», «corregiria» expressen hipòtesis sobre un futur desitjat o imaginat.", example:"«Viuria a París si pogués» → hipòtesi sobre el futur." },

    { id:'b1-fc6', type:'fill', level:'b1', category:'Futur i condicional B1',
      question:'Forma el futur correcte:',
      sentence:"L'any que ve ___ (poder) anar de vacances a Grècia.",
      display:'poder → 1a pers. sing. futur',
      answers:['podré'],
      theory:"«Poder» és irregular al futur: podré, podràs, podrà, podrem, podreu, podran.", example:"Demà podré venir a la reunió." },

    // ── PERÍFRASIS B1 ──
    { id:'b1-per1', type:'choice', level:'b1', category:'Perífrasis B1',
      question:'Quina perífrasi expressa obligació?',
      text:'___ presentar el passaport a la frontera.',
      options:['Vull','He de','Acabo de'],
      correct:1, theory:"«Haver de + infinitiu» expressa obligació. «Voler» és voluntat. «Acabar de» indica acció recentment acabada.", example:"He de pagar la factura avui." },

    { id:'b1-per2', type:'fill', level:'b1', category:'Perífrasis B1',
      question:'Omple amb la perífrasi correcta per indicar una acció recent:',
      sentence:'___ (dinar). Ara estic ple.',
      display:"acabar de + infinitiu (1a pers. sing.)",
      answers:['Acabo de dinar'],
      theory:"«Acabar de + infinitiu» expressa una acció que s'ha realitzat fa molt poc temps.", example:"Acabo d'arribar. / Acabes de telefonar?" },

    { id:'b1-per3', type:'choice', level:'b1', category:'Perífrasis B1',
      question:'Quina frase és incorrecta en català?',
      options:["He de fer la compra.","Tinc que fer la compra.","Cal que faci la compra."],
      correct:1, theory:"«Tenir que» és un calc del castellà «tener que» i no és normatiu en català. ✓ «He de fer la compra» és la forma correcta per a l'obligació personal. ✓ «Cal que faci la compra» (cal + subjuntiu) és una alternativa impersonal correcta. Atenció: «Tinc de...» (sense «que») tampoc és normatiu en la majoria de contextos.", example:"He de trucar la meva mare. / Ha de venir demà. / Cal que faci els deures." },

    { id:'b1-per4', type:'fill', level:'b1', category:'Perífrasis B1',
      question:'Completa amb la perífrasi d\'acció en curs:',
      sentence:'No la molestis! ___ (estudiar) per a l\'examen de demà.',
      display:'estar + gerundi (3a pers. sing.)',
      answers:['Està estudiant'],
      theory:"«Estar + gerundi» indica que l'acció es desenvolupa en aquest mateix moment.", example:"Estic menjant. / Esteu treballant?" },

    { id:'b1-per5', type:'reading', level:'b1', category:'Perífrasis B1',
      text:"La Neus acaba de trobar feina en una empresa nova. Avui ha de signar el contracte i ha d'anar a comprar roba nova per al primer dia. Ara mateix està preparant la documentació que li han demanat. Diu que vol deixar de treballar en torns i poder tenir horaris estables.",
      question:'Quantes perífrasis verbals apareixen al text i quins valors expressen?',
      options:['Dues: obligació i aspecte ingressiu','Cinc: acció recent, obligació (×2), acció en curs i desig+fi d\'un hàbit','Tres: desig, obligació i acció recent'],
      correct:1, theory:"Hi ha cinc perífrasis: «acaba de trobar» (acció recent), «ha de signar» i «ha d'anar» (obligació ×2), «està preparant» (acció en curs), «vol deixar de treballar» (desig + fi d'un hàbit). Total: cinc perífrasis amb cinc valors aspectuals o modals diferenciats.", example:"Identificar cada perífrasi: auxiliar + infinitiu/gerundi → valor aspectual o modal." },

    { id:'b1-per6', type:'choice', level:'b1', category:'Perífrasis B1',
      question:'Quina perífrasi indica intenció en un futur immediat?',
      text:'Avui a la nit ___ estudiar per a l\'examen.',
      options:["vaig a","acabo de","deixo de"],
      correct:0, theory:"«Anar a + infinitiu» expressa la intenció o el pla per a un futur immediat. No és el passat perifràstic: aquí «vaig» és l'auxiliar d'intenció.", example:"Vaig a trucar-te aquesta tarda. / Anem a menjar fora?" },

    // ── SUBORDINADES B1 ──
    { id:'b1-sub1', type:'choice', level:'b1', category:'Subordinades B1',
      question:'Quin mode verbal exigeix la subordinada temporal «quan» referida al futur?',
      text:'Quan ___ de la feina, et trucaré.',
      options:['sortiré','surts','surti'],
      correct:2, theory:"Les oracions temporals de futur amb «quan» porten el verb subordinat en present de subjuntiu. ✗ «Sortiré» (futur d'indicatiu) és el calc del castellà «cuando salga» que els catalanoparlants amb interferència del castellà fan equivalent a «cuando saldré», però en català el futur d'indicatiu en temporals de futur és incorrecte. ✗ «Surts» (present d'indicatiu) expressa un fet habitual real, no una acció futura hipotètica.", example:"Quan arribi, avisa'm. / Quan tingui temps, vindré." },

    { id:'b1-sub2', type:'fill', level:'b1', category:'Subordinades B1',
      question:'Omple amb el mode verbal correcte (indicatiu o subjuntiu):',
      text:'La conjunció «perquè» pot expressar causa (amb indicatiu) o finalitat (amb subjuntiu). Aquí la intenció és la finalitat: amb quin mode va el verb?',
      sentence:"T'ho explico perquè ho ___ (saber, 2a pers. sing.).",
      display:'saber (2a pers. sing.) — tria el mode segons la finalitat',
      answers:['sàpigues'],
      theory:"«Perquè» final + canvi de subjecte → subjuntiu. «Perquè» causal + indicatiu.", example:"Ho faig perquè aprenguis. (final, subj.) / Ho faig perquè ja ho saps. (causal, ind.)" },

    { id:'b1-sub3', type:'choice', level:'b1', category:'Subordinades B1',
      question:'Quina frase és una condicional real?',
      options:["Si tingués diners, viatjaria més.","Si tens diners, pots viatjar molt.","Si hagués tingut diners, hauria viatjat."],
      correct:1, theory:"Condicional real: si + present d'indicatiu + present/futur/imperatiu. Les altres dues expressen hipòtesis irreals.", example:"Si fa sol, anirem a la platja." },

    { id:'b1-sub4', type:'choice', level:'b1', category:'Subordinades B1',
      question:"Quin mode verbal s'usa amb «perquè» causal? Tria la frase correcta:",
      options:[
        "Ho faig perquè em sento millor. (causal → indicatiu)",
        "Ho faig perquè em senti millor. (causal → subjuntiu)",
        "Ho faig per tal que em sento millor. (final → indicatiu)"
      ],
      correct:0,
      theory:"La clau és el valor de «perquè»: causal (expressa el motiu d'una acció passada o present) → indicatiu; final (expressa l'objectiu de l'acció) → subjuntiu. «Per tal que» sempre porta subjuntiu. El canvi de subjecte és freqüent en les finals però no n'és la causa.",
      example:"Ho faig perquè em sento malament [causal, ind.]. / Ho faig perquè et sentis millor [final, subj., canvi de subjecte]." },

    { id:'b1-sub5', type:'reading', level:'b1', category:'Subordinades B1',
      text:"Mentre estudiava per a l'examen, va sonar el telèfon. Era la seva amiga, que li deia que no podria venir a la festa perquè tenia molta feina. Li va proposar que quedessin un altre dia perquè poguessin parlar amb tranquil·litat.",
      question:'Quines oracions subordinades apareixen al text?',
      options:['Només temporals i causals','Temporal, causal, final i substantiva (dir que...)','Causal i condicional'],
      correct:1, theory:"«Mentre estudiava» (temporal) / «perquè tenia» (causal, indicatiu) / «perquè poguessin» (final, subjuntiu) / «que li deia que» (substantiva).", example:"Identificar el nexe → identificar el tipus de subordinada." },

    { id:'b1-sub6', type:'choice', level:'b1', category:'Subordinades B1',
      question:'Quina frase té la subordinada temporal correctament construïda?',
      options:["Truqueu-me quan haureu arribat.","Truqueu-me quan arribareu.","Truqueu-me quan arribeu.","Truqueu-me quan arribaràs."],
      correct:2, theory:"En temporals de futur, «quan» + futur d'indicatiu (arribareu, arribaràs, haureu llegit) és incorrecte en català. Cal usar el present de subjuntiu: «quan arribeu». Per marcar que l'acció ha de quedar acabada, s'usa el perfet de subjuntiu: «quan hàgiu llegit tota la documentació, passeu a signar.»", example:"Quan tingui temps, vindré. / Avisa'm quan surtin." },

    // ── LÈXIC QUOTIDIÀ B1 ──
    { id:'b1-lq1', type:'choice', level:'b1', category:'Lèxic quotidià B1',
      question:'Quina és la paraula catalana correcta?',
      text:"He de trucar al ___ per demanar una cita mèdica.",
      options:['médico','metge','doctor en castellà'],
      correct:1, theory:"«Metge/essa» és el mot català per «médico/médica». «Metge» és masculí, «metgessa» és femení.", example:"La meva metgessa diu que haig de descansar més." },

    { id:'b1-lq2', type:'fill', level:'b1', category:'Lèxic quotidià B1',
      question:'Omple amb la paraula catalana adequada (evita el calc):',
      sentence:"Treballo en un ___ molt gran, al centre de la ciutat. (no *despacho)",
      display:'lloc de treball (terme català, no «despacho»)',
      answers:['despatx','oficina'],
      theory:"«Despatx» = oficina pròpia o habitació de treball. «Oficina» = espai laboral general. Cap dels dos és «despacho».", example:"El director té un despatx molt gran. / Treballo en una oficina compartida." },

    { id:'b1-lq3', type:'choice', level:'b1', category:'Lèxic quotidià B1',
      question:'Quin terme és incorrecte en català?',
      options:['el cotxe','el carro (vehicle)','el car (vehicle)'],
      correct:2, theory:"«Car» en anglès i «carro» en castellà no es tradueixen directament. El català usa «cotxe» per al vehicle de motor. «Carro» pot ser un vehicle de tracció animal.", example:"Vine en cotxe o en transport públic?" },

    { id:'b1-lq4', type:'reorder', level:'b1', category:'Lèxic quotidià B1',
      question:'Ordena per formar una frase correcta:',
      parts:['la meva cap','una reunió important','ha convocat','per demà al matí'],
      correct:[0,2,1,3], theory:"«Cap» és el terme català per a «jefe/jefa». La frase és: «La meva cap ha convocat una reunió important per demà al matí.»", example:"La meva cap és molt exigent. / El cap del departament és nou." },

    { id:'b1-lq5', type:'reading', level:'b1', category:'Lèxic quotidià B1',
      text:"Avui he anat a l'ajuntament a fer un tràmit. Havia de renovar el certificat d'empadronament. La funcionària de la finestreta em va dir que havia de demanar cita prèvia per internet. Amb sort, podré anar-hi la setmana que ve.",
      question:'Quins mots del text pertanyen al camp lèxic dels serveis i tràmits administratius?',
      options:['ajuntament, tràmit, certificat, empadronament, finestreta, cita','ajuntament, anar, cert, tràmit','renovar, poder, finestreta'],
      correct:0, theory:"El camp lèxic administratiu inclou: ajuntament, tràmit, certificat, empadronament, finestreta, cita prèvia, funcionari/a.", example:"Vocabulari de serveis: tràmit, sol·licitud, impost, multa, finestreta, cita." },

    { id:'b1-lq6', type:'fill', level:'b1', category:'Lèxic quotidià B1',
      question:'Substitueix el mot incorrecte pel terme català:',
      sentence:"He de reciclar la *basura abans de sortir de casa.",
      display:'terme català per a les escombraries',
      answers:['residus','brossa','deixalles'],
      theory:"«Brossa» (llenguatge col·loquial) i «residus» (formal) equivalen a «basura». «Deixalles» s'usa en contextos de reciclatge.", example:"Llença la brossa al contenidor. / Cal separar els residus orgànics." },
  ],
  a2: [
    // ── SER, ESTAR I SEMBLAR ──
    { id:'a2-ses1', type:'choice', level:'a2', category:'Ser, estar i semblar',
      question:'Tria el verb adequat per completar la frase:',
      text:'La Berta ___ una persona molt alegre i sociable.',
      options:['està','és','sembla molt'],
      correct:1, theory:"«Ser» s'usa per a característiques definitòries d'una persona. ✗ «Està» seria incorrecte perquè indica un estat temporal (avui, ara), no un tret de personalitat estable. ✗ «Sembla molt» és incorrecte perquè «semblar» expressa aparença subjectiva i no admet «molt» en aquesta posició.", example:"La Maria és molt divertida, però avui està trista." },

    { id:'a2-ses2', type:'choice', level:'a2', category:'Ser, estar i semblar',
      question:"Quin verb és el correcte per completar la frase?",
      text:'Avui el Martí ___ molt nerviós perquè té un examen important.',
      options:['és','sembla','està'],
      correct:2, theory:"«Estar» s'usa per a estats transitoris com l'estat d'ànim. ✗ «Ser nerviós» seria incorrecte si és un estat puntual d'avui (indicaria que el nerviosisme és un tret permanent del caràcter). ✗ «Sembla nerviós» podria ser acceptable però expressa una impressió externa, no un estat real; aquí el text afirma que el nerviosisme és real.", example:"Avui estic nerviós. / Normalment soc força tranquil." },

    { id:'a2-ses3', type:'fill', level:'a2', category:'Ser, estar i semblar',
      question:'Omple amb el verb correcte (ser, estar o semblar):',
      text:'Aquí has de triar entre ser, estar i semblar. Pensa en la diferència entre un tret real i la simple impressió que algú fa als altres.',
      sentence:"L'Aniol ___ tímid, però en realitat és molt obert quan el coneixes.",
      display:"verb d'aparença (la impressió que dona)",
      answers:['sembla'],
      theory:"«Semblar» expressa l'aparença que una persona dona als altres, sense implicar que sigui una característica real.", example:"En Martí sembla tímid, però és molt obert." },

    { id:'a2-ses4', type:'choice', level:'a2', category:'Ser, estar i semblar',
      question:'Tria la frase correcta:',
      text:'La Gina i la seva amiga comparteixen el mateix caràcter. En català, quan volem evitar repetir un adjectiu amb els verbs ser, estar i semblar, cal usar un pronom especial.',
      options:["La Gina és simpàtica i la seva amiga també la és.","La Gina és simpàtica i la seva amiga també ho és.","La Gina és simpàtica i la seva amiga també és."],
      correct:1, theory:"El pronom «ho» substitueix l'atribut ja esmentat amb els verbs ser, estar i semblar. No es pot ometre ni usar «la/el».", example:"La Marta és tímida i la seva germana també ho és." },

    { id:'a2-ses5', type:'fill', level:'a2', category:'Ser, estar i semblar',
      question:'Omple amb ser o estar:',
      text:'El cansament és un estat temporal que canvia d\'un dia a l\'altre. En català, els estats temporals es construeixen amb un verb diferent que els trets permanents de caràcter.',
      sentence:'El Josep ___ cansat avui perquè ha treballat moltes hores.',
      display:'ser o estar?',
      answers:['està'],
      theory:"El cansament és un estat temporal → «estar». «Ser cansat» implicaria que és una característica permanent del caràcter.", example:"Avui estic cansat. / Normalment soc molt actiu." },

    { id:'a2-ses6', type:'reading', level:'a2', category:'Ser, estar i semblar',
      text:"L'Emma és una persona molt sociable i alegre. Avui, però, està una mica trista perquè la seva amiga no ha pogut venir. Tot i així, sembla contenta quan parla amb nosaltres.",
      question:'Quines afirmacions són correctes?',
      options:["L'Emma és normalment trista i avui sembla alegre.","L'Emma normalment és alegre, però avui està trista tot i que sembla contenta.","L'Emma sempre està trista i sembla sociable."],
      correct:1, theory:"«És» (permanent), «està» (avui), «sembla» (aparença). Cada verb té una funció diferent.", example:"Ser: permanent. Estar: transitori. Semblar: aparença." },

    // ── ADJECTIUS DE CARÀCTER ──
    { id:'a2-adc1', type:'choice', level:'a2', category:'Adjectius de caràcter',
      question:'Quina és la forma femenina correcta de «simpàtic»?',
      text:'En català, molts adjectius de caràcter canvien de forma segons el gènere. Prova de trobar la forma femenina correcta de «simpàtic».',
      options:['simpàtique','simpàtica','simpàtics'],
      correct:1, theory:"Els adjectius acabats en -c fan el femení en -ca: simpàtic → simpàtica, antipàtic → antipàtica.", example:"En Santi sembla antipàtic, però la Berta és molt simpàtica." },

    { id:'a2-adc2', type:'fill', level:'a2', category:'Adjectius de caràcter',
      question:"Omple amb la forma correcta de l'adjectiu:",
      text:"Els adjectius en català han de concordar en gènere amb el nom que acompanyen. «Extravertit» (masculí) canvia de forma quan descriu una dona.",
      sentence:"La Conxa és molt ___ (extravertit): li encanta conèixer gent nova.",
      display:"forma femenina d'«extravertit»",
      answers:['extravertida'],
      theory:"Els adjectius acabats en -t fan el femení en -da: extravertit → extravertida, divertit → divertida.", example:"La Berta és extravertida i el seu germà és introvertit." },

    { id:'a2-adc3', type:'choice', level:'a2', category:'Adjectius de caràcter',
      question:'Quina paraula significa el contrari de «tímid»?',
      text:'En català hi ha molts adjectius de caràcter que es contraposen en parells. Pensa quin s\'oposa millor a «tímid».',
      options:['introvertit','obert','seriós'],
      correct:1, theory:"«Obert» s'usa per a persones que es comuniquen sense reserves ni dificultat.", example:"Sembla tímida, però quan la coneixes és molt oberta i parladora." },

    { id:'a2-adc4', type:'fill', level:'a2', category:'Adjectius de caràcter',
      question:'Forma el plural correcte:',
      text:'Els adjectius en català han de concordar en gènere i nombre amb el nom. Els adjectius acabats en -ble (amable, sociable...) no canvien entre masculí i femení, però sí fan el plural.',
      sentence:'Els meus companys de classe són molt ___ (sociable).',
      display:"plural de «sociable»",
      answers:['sociables'],
      theory:"Els adjectius acabats en -ble (amable, sociable) no canvien entre masculí i femení. El plural afegeix -s.", example:"Són persones molt amables i sociables." },

    { id:'a2-adc5', type:'reading', level:'a2', category:'Adjectius de caràcter',
      text:"Soc un noi amb ganes de conèixer gent nova. Soc valent, decidit, obert i generós. M'agrada la feina que faig i col·laborar per tenir un món millor. M'encanta fer activitats a l'aire lliure.",
      question:'Quins adjectius usa per descriure el seu caràcter?',
      options:['tímid, reservat, introvertit','valent, decidit, obert, generós','alegre, espontani, sociable'],
      correct:1, theory:"Llegeix atentament i identifica els adjectius. Tots quatre apareixen explícitament en la descripció.", example:"«valent, decidit, obert i generós» → quatre adjectius de caràcter." },

    { id:'a2-adc6', type:'choice', level:'a2', category:'Adjectius de caràcter',
      question:'Quina forma plural és correcta?',
      text:'L\'adjectiu «tranquil» té una particularitat ortogràfica en femení relacionada amb la ela geminada (l·l). Pensa com queden les formes de plural.',
      options:['tranquils i tranquil·les','tranquiles i tranquilas','tranquils i tranquiles'],
      correct:0, theory:"«Tranquil» fa femení «tranquil·la» (l·l geminada) i plurals «tranquils» (masc.) i «tranquil·les» (fem.).", example:"Ells són molt tranquils. / Elles són molt tranquil·les." },

    // ── PASSAT PERIFRÀSTIC ──
    { id:'a2-pas1', type:'fill', level:'a2', category:'Passat perifràstic',
      question:'Omple amb la forma correcta del passat perifràstic:',
      sentence:"Ahir la Joana ___ (arribar) tard a la feina.",
      display:'passat perifràstic, 3a pers. sing.',
      answers:['va arribar'],
      theory:"Passat perifràstic = anar (present) + infinitiu. Per a «ella»: va + arribar = va arribar.", example:"Ahir va arribar tard. / Fa una setmana vaig veure'l." },

    { id:'a2-pas2', type:'choice', level:'a2', category:'Passat perifràstic',
      question:'Quina forma de passat perifràstic és correcta per a «nosaltres»?',
      text:'El passat perifràstic es forma amb l\'auxiliar «anar» en present + infinitiu. La conjugació de l\'auxiliar per a «nosaltres» no segueix la forma del present regular d\'«anar».',
      options:['anem menjar','vam menjar','vem menjar'],
      correct:1, theory:"Conjugació: jo vaig, tu vas, ell/ella va, nosaltres vam, vosaltres vau, ells/elles van + infinitiu.", example:"Ahir vam menjar tots junts a casa de l'àvia." },

    { id:'a2-pas3', type:'reorder', level:'a2', category:'Passat perifràstic',
      question:'Ordena les parts per formar una frase de passat correcta:',
      parts:['Quan vaig arribar del Pakistan,','el primer dia','em vaig matricular','a classes de català.'],
      correct:[0,1,2,3],
      theory:"Resultat: «Quan vaig arribar del Pakistan, el primer dia em vaig matricular a classes de català.» En català és molt natural avançar la circumstància temporal específica («el primer dia») just darrere la principal.", example:"Quan vaig arribar, em vaig posar a estudiar de seguida." },

    { id:'a2-pas4', type:'choice', level:'a2', category:'Passat perifràstic',
      question:"Quin connector s'usa per indicar una acció posterior en una narració?",
      text:"Vaig entrar a l'aula. ___ vaig veure que era la classe equivocada.",
      options:['Al principi','Llavors','Finalment'],
      correct:1, theory:"«Llavors» i «aleshores» introdueixen una acció posterior o una conseqüència en una seqüència narrativa.", example:"Vaig obrir la porta. Llavors vaig veure que no hi havia ningú." },

    { id:'a2-pas5', type:'fill', level:'a2', category:'Passat perifràstic',
      question:'Omple amb el passat perifràstic correcte:',
      sentence:"Ahir els meus amics ___ (venir) a casa i van fer un sopar.",
      display:"passat perifràstic 3a pers. pl. de «venir»",
      answers:['van venir','varen venir'],
      theory:"Passat perifràstic de «venir» en 3a pers. pl.: van venir (forma oral estàndard) o varen venir (forma literària/occidental, igualment correcta). L'auxiliar «van/varen» + infinitiu «venir».", example:"Van venir tots a la festa. / Varen venir de molt lluny." },

    { id:'a2-pas6', type:'reading', level:'a2', category:'Passat perifràstic',
      text:"Quan vaig arribar a l'escola, vaig anar directament a l'aula. Vaig seure i de seguida va arribar el professor. Es va presentar i vam fer una activitat. Després va passar llista, però no hi va trobar el meu nom.",
      question:'Quants verbs en passat perifràstic hi ha al text?',
      options:['3','5','8'],
      correct:2, theory:"Compta totes les formes «vaig/vas/va/vam/vau/van + infinitiu»: vaig arribar, vaig anar, vaig seure, va arribar, es va presentar, vam fer, va passar, va trobar = 8.", example:"Vaig arribar → va + arribar = passat perifràstic." },

    // ── PRONOMS FEBLES A2 ──
    { id:'a2-pfa1', type:'choice', level:'a2', category:'Pronoms febles A2',
      question:'Quin pronom substitueix «el llibre» (masculí singular)?',
      text:'«Has vist el llibre?» «Sí, ___ tinc jo.»',
      options:['la','el','en'],
      correct:1, theory:"El pronom «el» substitueix un CD masculí singular determinat. «La» és per al femení, «en» per a partitius.", example:"«On és el gat?» «El tinc a casa.»" },

    { id:'a2-pfa2', type:'fill', level:'a2', category:'Pronoms febles A2',
      question:'Substitueix el CD subratllat pel pronom feble adequat:',
      sentence:"He trucat les meves amigues. → ___ he trucat.",
      display:'pronom CD femení plural',
      answers:['les'],
      theory:"«Les» substitueix un CD femení plural determinat. El pronom va davant del verb conjugat.", example:"«Has vist les claus?» «Sí, les he vistes a la taula.»" },

    { id:'a2-pfa3', type:'choice', level:'a2', category:'Pronoms febles A2',
      question:"Quina frase usa correctament el pronom feble?",
      text:"Necessito ___ veure ___ (la directora) ara.",
      options:["La necessito veure.","Necessito veure-la.","Necessito-la veure."],
      correct:1, theory:"Amb infinitius, el pronom feble va enclític (darrere i unit) a l'infinitiu amb guionet: veure-la, fer-ho, trucar-los.", example:"Vull veure-la. / He d'explicar-ho. / Cal trucar-los." },

    { id:'a2-pfa4', type:'choice', level:'a2', category:'Pronoms febles A2',
      question:"Quin pronom s'usa per substituir una quantitat indeterminada?",
      text:'«Vols pa?» «Sí, ___ vull, gràcies.»',
      options:['el','ho','en'],
      correct:2, theory:"«En» s'usa com a pronom partitiu quan el CD no porta article determinat o quan hi ha quantitat indeterminada.", example:"«Tens germans?» «Sí, en tinc dos.» / «Vols cafè?» «En vull una mica.»" },

    { id:'a2-pfa5', type:'fill', level:'a2', category:'Pronoms febles A2',
      question:'Omple el buit amb el pronom feble adequat:',
      text:'Per substituir un adjectiu o atribut amb els verbs ser, estar i semblar, el català fa servir un pronom neutre que no concorda en gènere ni nombre.',
      sentence:"«La Raquel és divertida?» «Sí, ___ és molt.»",
      display:"pronom que substitueix l'adjectiu «divertida»",
      answers:['ho'],
      theory:"«Ho» substitueix l'atribut (adjectiu) dels verbs ser, estar i semblar. No s'usa «la» o «el» per substituir adjectius.", example:"«Sembla tímid?» «Sí, ho sembla, però no ho és.»" },

    { id:'a2-pfa6', type:'choice', level:'a2', category:'Pronoms febles A2',
      question:'Quina frase usa correctament el pronom feble?',
      text:'En frases declaratives amb verb conjugat, el pronom feble es col·loca DAVANT del verb. La posició darrere del verb (enclítica) s\'usa en imperatiu o infinitiu, no en oracions normals.',
      options:["Busco els documents. Busco-los demà.","Busco els documents. Els busco demà.","Busco els documents. Busco'ls demà."],
      correct:1, theory:"En frases declaratives amb verb conjugat, el pronom feble va davant del verb: els busco, la crido, ho faig.", example:"Els documents? Els busco demà. / Necessito buscar-los ara." },

    // ── IMPERFET D'INDICATIU ──
    { id:'a2-imp1', type:'fill', level:'a2', category:"Imperfet d'indicatiu",
      question:"Omple amb l'imperfet correcte:",
      text:"L'imperfet d'indicatiu s'usa per a hàbits i rutines del passat. Els verbs de la 1a conjugació (-ar) segueixen el patró: -ava, -aves, -ava, -àvem, -àveu, -aven.",
      sentence:"De petit, el meu avi sempre ___ (explicar) contes fantàstics.",
      display:"imperfet, 3a pers. sing. d'«explicar»",
      answers:['explicava'],
      theory:"L'imperfet s'usa per a hàbits i rutines del passat. Terminació 3a pers. sing. verbs -ar: -ava.", example:"De petita, cada estiu anava a la platja. / Sempre llegíem abans de dormir." },

    { id:'a2-imp2', type:'choice', level:'a2', category:"Imperfet d'indicatiu",
      question:"Quina forma d'imperfet és correcta per a «nosaltres» amb «ser»?",
      text:"El verb «ser» té un imperfet completament irregular: les formes regulars no hi funcionen. Tria la forma correcta per a «nosaltres».",
      options:['erem','érem','eram'],
      correct:1, theory:"El verb «ser» en imperfet és irregular: era, eres, era, érem, éreu, eren. La primera persona del plural porta accent: érem.", example:"Quan érem petits, érem molt traviesos." },

    { id:'a2-imp3', type:'choice', level:'a2', category:"Imperfet d'indicatiu",
      question:"Quan s'usa l'imperfet en lloc del passat perifràstic?",
      text:"En català hi ha dos temps de passat principals: l'imperfet i el passat perifràstic. El passat perifràstic s'usa per a accions puntuals i acabades; l'imperfet, per a situacions més duradores.",
      options:['Per a accions acabades en un moment concret del passat','Per a descripcions, hàbits i estats del passat','Per a accions que passen ara'],
      correct:1, theory:"Imperfet = descripció, hàbit, estat sense moment concret. Passat perifràstic = acció acabada en un moment específic.", example:"Cada dia anava a l'escola a peu. (hàbit) / Ahir vaig anar en cotxe. (acció concreta)" },

    { id:'a2-imp4', type:'fill', level:'a2', category:"Imperfet d'indicatiu",
      question:"Completa amb la perífrasi d'hàbit passat:",
      text:"La perífrasi «soler + infinitiu» en imperfet expressa un hàbit del passat: allò que algú feia regularment. Recorda com es conjuga «soler» en imperfet.",
      sentence:"La meva àvia ___ (soler) fer el mercat cada dissabte al matí.",
      display:"imperfet de «soler» (3a pers. sing.)",
      answers:['solia'],
      theory:"«Soler + infinitiu» expressa un hàbit del passat. En imperfet: solia, solies, solia, solíem, solíeu, solien.", example:"Solia anar al gimnàs tres cops per setmana." },

    { id:'a2-imp5', type:'reading', level:'a2', category:"Imperfet d'indicatiu",
      text:"Quan era petit, el meu pare solia portar-me al parc cada diumenge. Jo sempre portava la meva pilota i jugava amb altres nens. La meva mare, en canvi, preferia quedar-se a casa i llegir.",
      question:"Per a quina funció s'usa l'imperfet en aquest text?",
      options:['Per a accions puntuals i acabades en un dia concret','Per a descriure hàbits i rutines del passat','Per a parlar de plans de futur'],
      correct:1, theory:"El text usa l'imperfet per a hàbits repetits («solia», «sempre portava», «jugava», «preferia»). Cap acció és puntual.", example:"Solia portar-me = era un hàbit regular del passat." },

    { id:'a2-imp6', type:'fill', level:'a2', category:"Imperfet d'indicatiu",
      question:"Escriu la forma correcta de l'imperfet:",
      text:"El verb «fer» és irregular en imperfet: no segueix el patró regular en -ava, sinó un de propi. Recorda'n la forma.",
      sentence:"Quan tenia vint anys, ___ (fer) molt esport i tenia molta energia.",
      display:"imperfet 1a pers. sing. de «fer»",
      answers:['feia'],
      theory:"«Fer» en imperfet d'indicatiu: jo feia, tu feies, ell feia, nosaltres fèiem, vosaltres fèieu, ells feien. La terminació -ia/-ies és regular per als verbs de la 2a conjugació.", example:"Quan tenia vint anys, feia molt esport cada dia." },

    // ── LÈXIC A2: CARÀCTER I EMOCIONS ──
    { id:'a2-lex1', type:'choice', level:'a2', category:"Lèxic A2: caràcter i emocions",
      question:"Quina expressió s'usa per dir que algú sent molta vergonya i vol desaparèixer?",
      text:'El català té expressions molt vives per descriure reaccions emocionals intenses. Per a la vergonya màxima, hi ha una expressió que evoca la imatge de desaparèixer del tot.',
      options:['em poso a riure','em vull fondre','em quedo callat'],
      correct:1, theory:"«Em vull fondre» expressa la màxima vergonya: voler desaparèixer. Prové de la imatge de fondre's com si fos mantega.", example:"Quan vaig dir el nom equivocat, em volia fondre!" },

    { id:'a2-lex2', type:'fill', level:'a2', category:"Lèxic A2: caràcter i emocions",
      question:'Omple amb el connector temporal adequat:',
      sentence:"___ vaig arribar a la porta, vaig adonar-me que havia oblidat les claus.",
      display:'connector temporal que introdueix el moment en què passa alguna cosa',
      answers:['quan'],
      theory:"«Quan» introdueix el moment precís en què una acció té lloc.", example:"Quan vaig obrir la porta, vaig veure que no hi havia ningú." },

    { id:'a2-lex3', type:'choice', level:'a2', category:"Lèxic A2: caràcter i emocions",
      question:"Quin connector indica el moment inicial d'una narració?",
      options:['finalment','al principi','llavors'],
      correct:1, theory:"«Al principi» situa el lector al moment inicial del relat. Seqüència típica: al principi → llavors/aleshores → finalment.", example:"Al principi no entenia res. Llavors vaig demanar ajuda. Finalment ho vaig entendre." },

    { id:'a2-lex4', type:'reading', level:'a2', category:"Lèxic A2: caràcter i emocions",
      text:"Un dia vaig anar a buscar el meu nebot a l'escola. Llavors, un senyor gran em va dir que el nen havia estat molt bo. Jo li vaig dir: \"Quin avi tan simpàtic que tens!\". El nen, molt enfadat, em va respondre: \"No és el meu avi, és el meu pare!\". La veritat és que em vaig posar molt vermella.",
      question:"Com es va sentir la persona que explica l'anècdota al final?",
      options:['Contenta i divertida','Avergonyida','Sorpresa però tranquil·la'],
      correct:1, theory:"«Em vaig posar molt vermella» indica vergonya intensa. Posar-se vermell/a és una reacció física associada a la vergonya.", example:"Quan vaig dir alguna cosa inoportuna, em vaig posar vermella de vergonya." },

    { id:'a2-lex5', type:'choice', level:'a2', category:"Lèxic A2: caràcter i emocions",
      question:"Tria l'adjectiu correcte per completar la frase:",
      text:"Estic molt ___ perquè demà tinc una entrevista de feina.",
      options:['nerviós/osa','seriós/osa','tímid/ida'],
      correct:0, theory:"«Nerviós/osa» s'usa amb «estar» per a un estat d'agitació temporal. «Seriós/osa» i «tímid/ida» solen descriure característiques permanents de caràcter, no estats transitoris.", example:"Estic nerviosa avui. / Normalment soc força tranquil·la." },

    { id:'a2-lex6', type:'writing', level:'a2', category:"Lèxic A2: caràcter i emocions",
      question:"Descriu una situació compromesa que has viscut. Usa el passat perifràstic i almenys dos connectors temporals.",
      keywords:['passat perifràstic: vaig/vas/va...','connectors: quan / al principi / llavors / finalment','reacció: em vaig posar... / em vaig quedar...'],
      sample:"Un dia vaig confondre la meva professora amb una alumna. Al principi no em vaig adonar de l'error. Quan ella em va mirar molt sorpresa, llavors vaig entendre el que havia passat. Finalment em vaig disculpar i em vaig posar molt vermell.",
      theory:"Una bona narració al passat combina: context (imperfet) + accions (passat perifràstic) + connectors temporals.", example:"Al principi... Llavors... Finalment... em vaig posar vermell/a." },

    // PREGUNTES I INTERROGACIÓ
    { id:'a2-pi1', type:'choice', level:'a2', category:'Preguntes i interrogació',
      question:'Quina paraula interrogativa és correcta per preguntar per un lloc?',
      text:'___ és la biblioteca?',
      options:['Quan','On','Com','Qui'],
      correct:1, theory:'«On» pregunta per llocs. «Quan» per temps. «Com» per manera. «Qui» per persones.', example:'On és l\'escola? / On vius?' },
    { id:'a2-pi2', type:'fill', level:'a2', category:'Preguntes i interrogació',
      question:'Completa la pregunta amb la paraula interrogativa correcta:',
      text:'En català, l\'interrogatiu per demanar el nom d\'algú no és el mateix que el que fem servir per preguntar per la seva identitat. Vigila la interferència del castellà.',
      sentence:'___ es diu el teu professor?',
      display:'interrogatiu per a noms de persones', answers:['Com'],
      theory:'«Com» s\'usa per preguntar el nom: «Com et dius?» / «Com es diu?». No «Qui» per a noms.', example:'Com et dius? / Com es diu ella?' },
    { id:'a2-pi3', type:'choice', level:'a2', category:'Preguntes i interrogació',
      question:'Quina pregunta és correcta en català?',
      text:'En català, el pronom subjecte (jo, tu, ell...) s\'omet habitualment perquè la terminació verbal ja indica la persona. A més, «tu» en català mai porta accent (a diferència del castellà «tú»).',
      options:['Quants anys tens tú?','Quants anys tens?','Quants anys tu tens?'],
      correct:1, theory:'En català el pronom subjecte (tu, ell, ella) s\'omet habitualment perquè la desinència verbal ja l\'indica. «Tu» és opcional i se sol ometre. Atenció: en català «tu» no porta accent gràfic (a diferència del castellà «tú»); l\'opció «Quants anys tens tú?» conté, a més d\'un ordre forçat, un accent inexistent en català.', example:'Quants anys tens? / D\'on ets? / Que treballes?' },
    { id:'a2-pi4', type:'fill', level:'a2', category:'Preguntes i interrogació',
      question:'Omple amb la paraula interrogativa correcta:',
      text:'Per preguntar pel preu d\'una cosa, l\'interrogatiu de quantitat té una forma invariable, diferent de la que concorda amb noms comptables.',
      sentence:'___ costa aquest llibre?',
      display:'interrogatiu per a preus', answers:['Quant'],
      theory:'«Quant» (invariable) per a preus i quantitats indeterminades. «Quants/Quantes» per a quantitats comptables: «Quants llibres tens?»', example:'Quant costa? / Quant val? / Quants en vols?' },
    { id:'a2-pi5', type:'choice', level:'a2', category:'Preguntes i interrogació',
      question:'Com es forma una pregunta de confirmació en català?',
      text:'Les preguntes de confirmació s\'usen per verificar informació que es creu certa. En català s\'afegeix «no?» o «oi?» al final. El castellà «¿verdad?» no s\'usa en català.',
      options:['Parles català, no?','Parles català, ¿verdad?','Tu parles català, si?'],
      correct:0, theory:'La fórmula de confirmació en català és «no?» (o «oi?» en registre col·loquial). «Coletilla» és un castellanisme; «¿Verdad?» és castellà i «Si?» no és la forma estàndard.', example:'Ets d\'aquí, no? / Ja has menjat, oi?' },
    { id:'a2-pi6', type:'reorder', level:'a2', category:'Preguntes i interrogació',
      question:'Ordena les paraules per formar una pregunta correcta:',
      text:'En les preguntes en català, la paraula interrogativa va al principi. El pronom subjecte (tu) és opcional i sol anar després del verb.',
      parts:['véns','D\'on','tu','?'],
      correct:[1,0,2,3],
      theory:'Les paraules interrogatives van al principi. El pronom subjecte (tu) és opcional i sol anar després del verb.', example:'D\'on véns? / On vas? / Quan arribes?' },
  ],

  b2: [
    // CONNECTORS
    { id:'b2-con1', type:'choice', level:'b2', category:'Connectors',
      question:'Quin connector introdueix una conseqüència lògica?',
      text:'Va treballar molt dur durant tot l\'any. ___, va aconseguir el premi.',
      options:['Tanmateix','Per consegüent','Malgrat que','Sempre que'],
      correct:1, theory:'«Per consegüent», «per tant» i «és per això que» introdueixen el resultat d\'una causa anterior.', example:'No va estudiar; per tant, va suspendre.' },
    { id:'b2-con2', type:'choice', level:'b2', category:'Connectors',
      question:'Quin connector expressa una relació de causa?',
      text:'No va poder assistir a la reunió ___ estava malalt de gravetat.',
      options:['per tant','ja que','tanmateix','a més'],
      correct:1, theory:'«Ja que», «atès que», «donat que» i «com que» expressen causa.', example:'No va venir, ja que tenia feina urgent.' },
    { id:'b2-con3', type:'fill', level:'b2', category:'Connectors',
      text:'En registre formal, per afegir una idea a una altra s\'eviten els mots col·loquials i s\'opta per connectors d\'addició més elaborats.',
      question:'Omple amb el connector d\'addició formal (no «també»):',
      sentence:'La mesura redueix costos. ___, millora l\'eficiència del sistema.',
      display:'connector d\'addició formal',
      answers:['a més','a més a més','així mateix','addicionalment','igualment'],
      theory:'En registre formal, «a més (a més)» o «així mateix» substitueixen el col·loquial «també».', example:'La proposta és viable; a més, compta amb el suport tècnic necessari.' },
    { id:'b2-con4', type:'reorder', level:'b2', category:'Connectors',
      question:'Ordena les frases perquè el text sigui lògicament coherent:',
      text:'Els connectors textuals (en primer lloc, d\'altra banda, per consegüent, finalment) organitzen el discurs i indiquen la relació lògica entre les idees.',
      parts:['Per consegüent, es recomana adoptar mesures immediates.','En primer lloc, s\'ha detectat un augment del soroll urbà.','D\'altra banda, la qualitat de l\'aire ha empitjorat notablement.','Finalment, cal revisar la normativa vigent.'],
      correct:[1,2,0,3], theory:'Estructura: problema → dades → conseqüència → recomanació.', example:'En primer lloc... D\'altra banda... Per consegüent... Finalment...' },
    { id:'b2-con5', type:'reading', level:'b2', category:'Connectors',
      text:'L\'ús adequat dels connectors és fonamental en qualsevol text formal. Tanmateix, molts escriptors tendeixen a abusar dels connectors simples, com ara «però» o «i». Per consegüent, el resultat és un discurs que sembla poc elaborat, malgrat que el contingut pugui ser valuós.',
      question:'Quin problema principal identifica el text?',
      options:['Que els connectors no serveixen en textos formals','Que l\'ús repetitiu de connectors simples empobreix el discurs','Que cal evitar tots els connectors en registre formal'],
      correct:1, theory:'«Abusar dels connectors simples» i «poc elaborat» apunten a la resposta. Fixa\'t en el contrast entre «contingut valuós» i «discurs poc elaborat».', example:'Paraules clau: «tendeixen a abusar», «poc elaborat».' },
    { id:'b2-con6', type:'choice', level:'b2', category:'Connectors',
      question:'Quin connector introdueix una informació que contrasta amb l\'anterior?',
      text:'El projecte tenia molts punts forts. ___, presentava algunes mancances tècniques.',
      options:['Per tant','Ja que','Tanmateix','Addicionalment'],
      correct:2, theory:'«Tanmateix», «no obstant això» i «malgrat tot» introdueixen un contrast respecte al que s\'ha dit.', example:'El resultat va ser positiu; tanmateix, cal continuar treballant.' },

    // SUBJUNTIU
    { id:'b2-sub1', type:'fill', level:'b2', category:'Subjuntiu',
      text:'Els verbs que expressen voluntat o desig, com «voler», regeixen subjuntiu a l\'oració subordinada.',
      question:'Omple amb la forma correcta del present de subjuntiu:',
      sentence:'Vull que tu ___ a temps a la reunió d\'avui.',
      display:'arribar (2a pers. sing.)', answers:['arribis'],
      theory:'Amb «vull que» el verb subordinat va en subjuntiu. Per a «tu», la terminació és -is.', example:'Espero que ell pugui venir avui.' },
    { id:'b2-sub2', type:'choice', level:'b2', category:'Subjuntiu',
      question:'Quina frase usa el subjuntiu correctament?',
      text:'El mode verbal de la subordinada depèn del verb principal: certesa o dubte. Tria la frase que combina correctament «dubtar» amb el mode adequat.',
      options:['Dubto que ve demà.','Dubto que vindrà demà.','Dubto que vingui demà.','Dubto de que ve.'],
      correct:2, theory:'Amb «dubto que» s\'usa sempre el subjuntiu, perquè el dubte expressa una actitud no factual.', example:'Dubto que sigui possible acabar-ho avui.' },
    { id:'b2-sub3', type:'fill', level:'b2', category:'Subjuntiu',
      text:'Després del verb principal cal decidir el mode de la subordinada: la certesa demana un mode i el dubte o el desig, un altre.',
      question:'Indicatiu o subjuntiu? Omple el buit:',
      sentence:'Sé que ella ___ molt bé el català des de petita.',
      display:'parlar (3a pers. sing.) — indicatiu o subjuntiu?', answers:['parla'],
      theory:'«Sé que» introdueix un fet cert → indicatiu. «Vull que parli» (desig) → subjuntiu.', example:'Sé que parla tres idiomes. / Vull que parli més a poc a poc.' },
    { id:'b2-sub4', type:'choice', level:'b2', category:'Subjuntiu',
      question:'Tria la forma verbal correcta per a una subordinada temporal de futur:',
      text:'T\'ho explicaré quan ___ més temps disponible.',
      options:['tindré','tingui','tinc','tingués'],
      correct:1, theory:'Les oracions temporals de futur usen el present de subjuntiu (quan + subj.), mai el futur.', example:'Quan arribi, truqueu-me. / Ho farem quan puguem.' },
    { id:'b2-sub5', type:'fill', level:'b2', category:'Subjuntiu',
      text:'Les expressions de necessitat o obligació, com «cal que», introdueixen una subordinada en subjuntiu.',
      sentence:'Cal que tots els participants ___ el formulari abans del divendres.',
      question:'Completa amb la forma de subjuntiu correcta:',
      display:'emplenar (3a pers. pl. present subj.)', answers:['emplenin','omplin'],
      theory:'«Cal que» exigeix subjuntiu. 3a pers. pl. del present de subj. en verbs -ar: -in.', example:'Cal que emplenin el formulari. / Cal que signin el document.' },
    { id:'b2-sub6', type:'choice', level:'b2', category:'Subjuntiu',
      question:'Quina construcció és correcta amb «encara que» hipotètic?',
      text:'La conjunció «encara que» pot regir indicatiu o subjuntiu segons si el fet és real o hipotètic. Per a una hipòtesi (la pluja no és segura), tria la construcció correcta.',
      options:['Encara que plourà, sortirem.','Encara que plou, sortirem.','Encara que plogui, sortirem.','Encara que plovent, sortirem.'],
      correct:2, theory:'«Encara que» amb valor hipotètic (la condició és incerta) va amb subjuntiu.', example:'Encara que plogui, sortirem. / Encara que plou (ja plou), sortim igualment.' },

    // COHESIÓ TEXTUAL
    { id:'b2-coh1', type:'reorder', level:'b2', category:'Cohesió textual',
      question:'Ordena les parts per formar un paràgraf coherent:',
      text:'Un text ben cohesionat segueix una estructura lògica: introducció del tema, desenvolupament i conclusió. Els connectors (en primer lloc, a continuació, finalment) marquen el progrés del discurs.',
      parts:['D\'altra banda, cal considerar els aspectes econòmics de la mesura.','En primer lloc, analitzarem els factors socials que hi intervenen.','Finalment, presentarem les nostres conclusions i recomanacions.','A continuació, veurem l\'impacte ambiental a curt i llarg termini.'],
      correct:[1,0,3,2], theory:'Un text ben estructurat segueix: introducció → arguments ordenats → conclusió.', example:'En primer lloc... A continuació... D\'altra banda... Finalment...' },
    { id:'b2-coh2', type:'choice', level:'b2', category:'Cohesió textual',
      question:'Quin mecanisme de cohesió usa la frase subratllada?',
      text:'La nova política mediambiental ha generat un ampli debat. <u>Aquesta mesura</u> ha rebut crítiques de nombrosos experts.',
      options:['El·lipsi del subjecte','Referència anafòrica amb sinònim','Connector de contrast','Referència catafòrica'],
      correct:1, theory:'«Aquesta mesura» és una referència anafòrica que reprèn «la nova política» per evitar la repetició.', example:'La reforma va ser aprovada. Aquesta decisió va generar polèmica.' },
    { id:'b2-coh3', type:'fill', level:'b2', category:'Cohesió textual',
      text:'Un text ben cohesionat evita repetir el subjecte a cada oració: es pot ometre o enllaçar les accions amb connectors.',
      question:'Substitueix la repetició innecessària del subjecte per un mecanisme de cohesió:',
      sentence:'El director va presentar l\'informe, va respondre preguntes i ___ va marxar sense fer declaracions.',
      display:'connector temporal o el·lipsi',
      answers:['tot seguit','a continuació','posteriorment','finalment','seguidament','després','acte seguit'],
      theory:'En català el pronom subjecte s\'omet quan el context queda clar (el·lipsi). El connector temporal afegeix ordre.', example:'El director va parlar, va respondre preguntes i tot seguit va marxar.' },
    { id:'b2-coh4', type:'reorder', level:'b2', category:'Cohesió textual',
      question:'Ordena el paràgraf perquè sigui coherent:',
      text:'En un text informatiu, les idees s\'organitzen de general a específic, i els connectors de contrast (tanmateix) i de síntesi (en definitiva) ajuden a estructurar-lo.',
      parts:['Concretament, al sector tecnològic s\'han creat 10.000 llocs de treball nous.','En definitiva, les dades confirmen una tendència positiva per a l\'economia.','L\'any passat, el mercat laboral català va mostrar signes clars de recuperació.','Tanmateix, alguns sectors com el comerç minorista encara presenten dificultats.'],
      correct:[2,0,3,1], theory:'Estructura: idea general → especificació → matís → conclusió.', example:'Idea general → Detall → Objecció → Conclusió.' },
    { id:'b2-coh5', type:'reading', level:'b2', category:'Cohesió textual',
      text:'El canvi climàtic afecta tots els ecosistemes del planeta. Aquesta problemàtica requereix una resposta coordinada a escala global. Per consegüent, els governs han de col·laborar més estretament. Sense aquesta cooperació, els esforços individuals seran insuficients.',
      question:'Quina funció té «Sense aquesta cooperació» en l\'última frase?',
      options:['Introdueix un exemple de la cooperació descrita','Reprèn anafòricament «col·laboració» i enuncia el resultat negatiu de la seva absència','Contradiu la idea del paràgraf anterior'],
      correct:1, theory:'«Aquesta cooperació» és una referència anafòrica. «Sense +» planteja l\'escenari negatiu que reforça la recomanació.', example:'«Sense aquest suport, el projecte fracassarà.»' },
    { id:'b2-coh6', type:'choice', level:'b2', category:'Cohesió textual',
      question:'Quina opció fa un ús correcte de la referència pronominal?',
      text:'La referència pronominal evita repetir el mateix nom un cop i un altre. Un text ben escrit substitueix el nom per un pronom només quan queda clar a qui es refereix.',
      options:['La directora va parlar. La directora va dir que la directora acceptava.','La directora va parlar. Va dir que acceptava la proposta.','La directora va parlar. Ella va dir que ella acceptava.'],
      correct:1, theory:'En català, el pronom subjecte s\'omet quan el context queda clar (el·lipsi). Repetir el nom o «ella» és redundant.', example:'Va parlar i va dir que acceptava. (El subjecte s\'entén pel context.)' },

    // COMPRENSIÓ LECTORA
    { id:'b2-com1', type:'reading', level:'b2', category:'Comprensió lectora',
      text:'El transport públic de les grans ciutats s\'enfronta a reptes importants. D\'una banda, la demanda creixent de mobilitat sostenible; de l\'altra, la necessitat de modernitzar infraestructures antigues sense paralitzar el servei.',
      question:'Quin és el problema central que descriu el text?',
      options:['La manca de passatgers al transport públic','Adaptar el transport a les noves necessitats sense interrompre el servei','La contaminació causada pels autobusos urbans'],
      correct:1, theory:'Identifica la idea central buscant la tensió principal que el text descriu.', example:'Paraules clau: «reptes», «demanda creixent», «modernitzar», «sense paralitzar».' },
    { id:'b2-com2', type:'reading', level:'b2', category:'Comprensió lectora',
      text:'Les biblioteques públiques han evolucionat molt més enllà del seu rol tradicional. Avui són espais de formació, inclusió digital i cohesió social. Malgrat les retallades pressupostàries dels darrers anys, moltes d\'elles han ampliat els seus serveis i han incrementat el nombre de visitants.',
      question:'Quin element del text contradiu una expectativa lògica?',
      options:['Que les biblioteques tinguin menys llibres','Que hagin augmentat visitants malgrat les retallades','Que les biblioteques ofereixin formació digital'],
      correct:1, theory:'«Malgrat» introdueix una paradoxa: la reducció de pressupost hauria d\'implicar menys serveis, però el resultat és el contrari.', example:'«Malgrat» = hi ha un obstacle que no impedeix el resultat esperat.' },
    { id:'b2-com3', type:'reading', level:'b2', category:'Comprensió lectora',
      text:'La dieta mediterrània s\'associa sovint amb un estil de vida saludable. No obstant això, estudis recents matisen que no és la dieta en si mateixa, sinó el conjunt d\'hàbits que l\'acompanyen allò que explica els seus beneficis.',
      question:'Quina és la tesi principal del text?',
      options:['La dieta mediterrània no és saludable','Els beneficis s\'expliquen pel context de vida global, no per la dieta sola','Cal fer més estudis sobre la dieta mediterrània'],
      correct:1, theory:'El connector «no obstant això» i l\'estructura «no... sinó...» marquen la tesi real.', example:'Busca el verb principal de la frase introduïda per «sinó».' },
    { id:'b2-com4', type:'choice', level:'b2', category:'Comprensió lectora',
      question:'Quin to predomina en: «Sembla que la solució és evident; ara bé, cal ser prudents i analitzar totes les variables»?',
      text:'El to d\'un text es detecta pels mots que tria l\'autor. Fixa\'t en «sembla» i «ara bé» i dedueix quina actitud transmeten.',
      options:['Afirmatiu i optimista sense reserves','Prudent i matisat','Negatiu i pessimista'],
      correct:1, theory:'«Sembla que» relativitza, i «ara bé» frena l\'entusiasme. El to global és de cautela reflexiva.', example:'Paraules com «sembla», «ara bé», «cal ser prudents» → to matisat.' },
    { id:'b2-com5', type:'reading', level:'b2', category:'Comprensió lectora',
      text:'L\'abandonament escolar prematur continua sent un dels principals reptes. Les causes són múltiples: factors econòmics familiars, manca de motivació i metodologies docents poc adaptades. Per abordar-lo eficaçment, cal actuar de manera transversal.',
      question:'Quina afirmació és correcta d\'acord amb el text?',
      options:['L\'abandonament escolar té una sola causa principal','Hi ha diverses causes i cal una resposta multidimensional','El problema ja s\'ha resolt amb les noves metodologies'],
      correct:1, theory:'«Causes són múltiples» i «actuar de manera transversal» apunten a la resposta.', example:'«Múltiples» → no hi ha una sola causa. «Transversal» → resposta diversa.' },

    // PRODUCCIÓ ESCRITA
    { id:'b2-pro1', type:'writing', level:'b2', category:'Producció escrita',
      question:'Escriu una frase sobre un tema de la teva elecció (aprenentatge, feina, medi ambient...) que expressi una condició real. Usa: si + present indicatiu + futur simple.',
      text:'Les condicionals reals expressen condicions possibles o probables. Estructura: «Si + present d\'indicatiu, + futur simple». Exemple: «Si estudies cada dia, progressaràs molt.»',
      keywords:['si + present indicatiu: si estudies / si treballes / si recicles...','futur simple: progressaràs / aconseguiràs / contribuiràs...','context concret i rellevant'],
      sample:'Si treballes cada dia, progressaràs molt més ràpidament en la llengua.',
      theory:'Condicionals reals: si + present indicatiu + futur simple. Expressen una condició possible i el seu resultat probable. Diferents de les hipotètiques irrels (si + imperfet subj. + condicional).', example:'Si estudies cada dia, aprovaràs l\'examen.' },
    { id:'b2-pro2', type:'writing', level:'b2', category:'Producció escrita',
      question:'Reformula la frase següent perquè pugui aparèixer en un informe institucional o en una notícia formal. Substitueix els elements informals pels equivalents formals: «El portaveu va dir que les coses havien millorat molt».',
      text:'En registre formal: «dir» → «manifestar/afirmar», «coses» → «aspectes/qüestions», «molt» → «considerablement/notablement». L\'objectiu és precisió i impersonalitat.',
      keywords:['«dir» → afirmar / manifestar / comunicar','«molt» → considerablement / notablement / de manera significativa','«coses» → aspectes / qüestions / indicadors'],
      sample:'El portaveu va manifestar que la situació havia millorat considerablement en tots els indicadors clau.',
      theory:'Registre formal: verbs genèrics → precisos; adverbis col·loquials → cultes; substantius genèrics («coses») → específics. En informes institucionals el to ha de ser objectiu i impersonal.', example:'«dir» → «manifestar» / «molt» → «notablement» / «coses» → «qüestions».' },
    { id:'b2-pro3', type:'writing', level:'b2', category:'Producció escrita',
      question:'Escriu un paràgraf argumentatiu de 3 frases en el qual expressis la teva opinió sobre els avantatges i riscos de les xarxes socials. Ha d\'incloure un connector de causa, un de contrast i un de conclusió (40-60 paraules).',
      text:'Estructura d\'un paràgraf argumentatiu: 1) tesi + causa (ja que / perquè), 2) contraargument (tanmateix / no obstant això), 3) conclusió (per tant / en definitiva).',
      keywords:['connector de causa: ja que / perquè / atès que','connector de contrast: tanmateix / tot i que / no obstant això','connector de conclusió: per tant / en definitiva / per consegüent'],
      sample:'Les xarxes socials han transformat la comunicació, ja que permeten connectar persones de tot el món. Tanmateix, l\'ús excessiu pot generar addicció digital. Per tant, cal promoure un ús conscient d\'aquestes plataformes.',
      theory:'Un paràgraf argumentatiu B2 exposa una posició, l\'argumenta amb una causa i reconeix el costat contrari. La tria de connectors ha de ser variada i precisa.', example:'Afirmació + ja que... → Tanmateix... → Per tant...' },
    { id:'b2-pro4', type:'choice', level:'b2', category:'Producció escrita',
      question:'Quina estructura és la més adequada per a l\'inici d\'una carta formal?',
      text:'Una carta o correu formal s\'obre amb una fórmula protocol·lària que estableix el tractament de vostè i indica l\'objecte de l\'escrit. S\'eviten les salutacions col·loquials.',
      options:['Hola! T\'escric perquè tinc un problema...','Em plau adreçar-me a vostè en relació amb...','Mira, vull parlar-te d\'una cosa important...'],
      correct:1, theory:'Les cartes formals s\'inicien amb fórmules protocol·làries: «Em plau adreçar-me a vostè», «Em poso en contacte amb vostè per»...', example:'Em plau adreçar-me a vostè en relació amb la sol·licitud presentada el dia 10.' },
    { id:'b2-pro5', type:'writing', level:'b2', category:'Producció escrita',
      question:'Imagina una situació hipotètica impossible en el present i escriu una frase condicional. Usa la construcció: si + imperfet de subjuntiu + condicional simple (per exemple: «Si pogués viure a qualsevol país...», «Si fos president...», «Si tingués un any lliure...»).',
      text:'Les condicionals hipotètiques expressen situacions impossibles o molt improbables ara. Estructura: «Si + imperfet de subjuntiu (fos/tingués/pogués), + condicional (faria/aniria/diria)».',
      keywords:['si + imperfet de subjuntiu (fos / tingués / pogués / sabes / visqués...)','condicional simple (-ia): faria / estudiaria / vivria / treballaria...','situació impossible o molt poc probable en el present'],
      sample:'Si pogués viure a qualsevol país del món, triaria un lloc on el català fos una llengua de cultura reconeguda.',
      theory:'Condicionals hipotètiques irrels (present): si + imperfet de subjuntiu + condicional simple. La hipòtesi és impossible o molt improbable en el moment actual.', example:'Si tingués temps, aprendria a tocar el piano. / Si fos president, canviaria moltes coses.' },
    { id:'b2-pro6', type:'choice', level:'b2', category:'Producció escrita',
      question:'Quina conclusió és la més adequada per a un text formal d\'opinió?',
      text:'La conclusió d\'un text formal tanca el discurs de manera coherent i evita les expressions col·loquials. Tria l\'opció adequada.',
      options:['Bueno, per acabar, crec que és molt important.','En definitiva, les evidències presentades posen de manifest la necessitat d\'una actuació immediata.','I ja està, bàsicament això és tot el que volia dir.'],
      correct:1, theory:'Una conclusió formal usa connectors de síntesi («en definitiva», «per concloure») i reprèn la tesi de manera elevada.', example:'En definitiva, cal adoptar un enfocament integral que abasti tots els aspectes de la qüestió.' },

    // LÈXIC FORMAL
    { id:'b2-lex1', type:'choice', level:'b2', category:'Lèxic formal B2',
      question:'Quin verb és el més adequat en un context formal?',
      text:'En el seu discurs, la directora va ___ que les mesures entrarien en vigor immediatament.',
      options:['dir','anunciar','comentar','explicar-li'],
      correct:1, theory:'En registres formals cal usar verbs precisos: «afirmar», «manifestar», «anunciar» en lloc del genèric «dir».', example:'La ministra va anunciar noves mesures fiscals per al proper exercici.' },
    { id:'b2-lex2', type:'choice', level:'b2', category:'Lèxic formal B2',
      question:'Quin sinònim és el més precís per a «tenir» en un context institucional?',
      text:'El departament ___ tots els recursos necessaris per dur a terme el projecte.',
      options:['té','disposa de','agafa','porta'],
      correct:1, theory:'«Disposar de» és la forma formal equivalent a «tenir» quan es parla de recursos o capacitats institucionals.', example:'L\'organisme disposa de personal qualificat i equipament modern.' },
    { id:'b2-lex3', type:'fill', level:'b2', category:'Lèxic formal B2',
      text:'El llenguatge formal defuig els mots genèrics i imprecisos i opta per substantius més concrets i adequats al context.',
      question:'Substitueix «coses» per un substantiu precís:',
      sentence:'El ministre va parlar de moltes ___ importants durant la conferència.',
      display:'substantiu precís (no «coses»)',
      answers:['qüestions','aspectes','temes','punts','elements'],
      theory:'«Cosa» és el substantiu genèric per excel·lència. Substitueix-lo per «qüestió», «aspecte», «element» o «factor» segons el context.', example:'El ministre va abordar qüestions fonamentals per al futur del sector.' },
    { id:'b2-lex4', type:'choice', level:'b2', category:'Lèxic formal B2',
      question:'Quina expressió és un calc del castellà que cal evitar en català formal?',
      text:'Una de les expressions següents és un calc del castellà molt estès en registre formal, tot i ser incorrecte. Detecta-la entre les alternatives genuïnes.',
      options:['a partir de','a nivell de','quant a','pel que fa a'],
      correct:1, theory:'«A nivell de» és un calc de «a nivel de». En català: «quant a», «pel que fa a», «en matèria de», «en l\'àmbit de».', example:'✗ A nivell econòmic → ✓ Quant a l\'economia.' },
    { id:'b2-lex5', type:'fill', level:'b2', category:'Lèxic formal B2',
      text:'En registre formal, en comptes de verbs comodí com «fer» o «posar», es trien verbs més precisos i propis del context.',
      question:'Tria el verb precís per completar la frase formal:',
      sentence:'Les autoritats van ___ les mesures de seguretat davant el risc d\'inundació.',
      display:'verb formal precís (no «fer» ni «posar»)',
      answers:['reforçar','endurir','implementar','intensificar','activar','extremar','reactivar','ampliar','incrementar','augmentar'],
      theory:'En contextos de seguretat i gestió, verbs com «reforçar», «implementar», «activar» aporten precisió al discurs formal.', example:'Les autoritats van activar el protocol d\'emergència davant la situació.' },
    { id:'b2-lex6', type:'reorder', level:'b2', category:'Lèxic formal B2',
      question:'Ordena les paraules per formar una frase formal i ben construïda:',
      text:'En registre formal, el verb sol anar al centre de la frase (subjecte + verb + complements). Les construccions passives i els substantius tècnics aporten precisió.',
      parts:['un increment notable','es constata','de temperatura global','en les darreres dècades'],
      correct:[1,0,2,3], theory:'Frases nominals formals: verb impersonal (passiva reflexa) + sintagma nominal complex. «Es constata» és marca de registre acadèmic.', example:'Es constata un increment notable de la temperatura global en les darreres dècades.' },

    // INTERFERÈNCIES
    { id:'b2-int1', type:'fill', level:'b2', category:'Interferències',
      text:'Molts errors freqüents en català són calcs del castellà: expressions traduïdes literalment que tenen una forma genuïna pròpia.',
      question:'Substitueix el calc del castellà pel verb català correcte:',
      sentence:'Vaig ___ que havia oblidat les claus a casa.',
      display:'verb pronominal: ___-me (no «donar-me compte»)',
      answers:['adonar-me'],
      theory:'«Donar-se compte» és un calc de «darse cuenta». La forma correcta en català és «adonar-se (de)».', example:'Em vaig adonar que havia oblidat les claus.' },
    { id:'b2-int2', type:'choice', level:'b2', category:'Interferències',
      question:'Quina frase és correcta en català?',
      text:'Per dir que t\'has fonamentat en alguna cosa per actuar, una de les opcions és un calc del castellà. Tria l\'única frase correcta en català.',
      options:['Ho vaig fer en base a les teves instruccions.','Ho vaig fer basant-me en les teves instruccions.','Ho vaig realitzar a base de seguir les instruccions.'],
      correct:1, theory:'«En base a» és un calc del castellà. La forma catalana correcta és «basant-se en», «a partir de» o «d\'acord amb».', example:'✗ En base a les dades. ✓ A partir de les dades disponibles.' },
    { id:'b2-int3', type:'fill', level:'b2', category:'Interferències',
      text:'Sovint el català disposa de verbs propis més naturals que els calcs directes del castellà.',
      question:'Substitueix «realizar» pel verb català adequat:',
      sentence:'Van ___ una investigació exhaustiva sobre l\'origen del problema.',
      display:'verb català correcte (no «realitzar»)',
      answers:['fer','dur a terme','efectuar','portar a terme','emprendre'],
      theory:'«Realitzar» és sovint un calc innecessari. La forma preferida és «fer», «dur a terme» o «efectuar».', example:'Van dur a terme una investigació exhaustiva.' },
    { id:'b2-int4', type:'choice', level:'b2', category:'Interferències',
      question:'Quin ús del gerundi és incorrecte en català?',
      text:'El gerundi pot indicar diferents relacions temporals amb el verb principal, però no totes són correctes en català. Identifica l\'ús que constitueix una interferència.',
      options:['Caminant pel parc, va pensar en ella. (simultani)','Va acabar la reunió, enviant l\'acta tot seguit. (posterior)','Essent una qüestió complexa, cal analitzar-la. (explicatiu)'],
      correct:1, theory:'El gerundi de posterioritat (acció POSTERIOR a la principal) és un calc del castellà. Cal usar coordinades: «Va acabar la reunió i tot seguit envià l\'acta».', example:'✗ Va acabar el treball, enviant-lo. ✓ Va acabar el treball i l\'envià per correu.' },
    { id:'b2-int5', type:'fill', level:'b2', category:'Interferències',
      text:'El català no té l\'article neutre «lo» del castellà; per expressar idees abstractes recorre a altres construccions.',
      question:'Substitueix «lo important» per la construcció catalana correcta:',
      sentence:'___ és que tothom participi activament en la presa de decisions.',
      display:'construcció sense «lo» (inexistent en català)',
      answers:['allò important','el que és important','la cosa important','el més important','allò més important'],
      theory:'El català no té article neutre «lo». S\'usa «allò» (davant adj.) o «el que» (davant verb). «Lo» és sempre un calc del castellà.', example:'✗ Lo millor és descansar. ✓ Allò millor és descansar.' },
    { id:'b2-int6', type:'choice', level:'b2', category:'Interferències',
      question:'Quina expressió és un calc del castellà que cal evitar?',
      text:'Per expressar concessió (l\'equivalent de «aunque»), el català disposa de diverses locucions pròpies, però una de les opcions és un calc del castellà. Tria la que cal evitar.',
      options:['malgrat que','tot i que','a pesar que','per bé que'],
      correct:2, theory:'«A pesar que» és un calc del castellà «a pesar de que». Les formes catalanes per expressar concessió són: «malgrat que», «tot i que» i «per bé que» (formal). Cap d\'elles s\'assembla a «a pesar».',  example:'✗ A pesar que plovia, van sortir. ✓ Malgrat que plovia, van sortir. / ✓ Tot i que plovia, van sortir.' },

    // PERÍFRASIS VERBALS
    { id:'b2-per1', type:'choice', level:'b2', category:'Perífrasis verbals',
      question:'Quina perífrasi expressa una obligació impersonal?',
      text:'___ presentar la documentació original abans del dia 15.',
      options:['Es pot','Cal','Solia','Acabava de'],
      correct:1, theory:'«Cal + infinitiu» expressa necessitat o obligació impersonal. Equivalents: «és necessari + inf.», «s\'ha de + inf.».', example:'Cal lliurar el treball abans del termini establert.' },
    { id:'b2-per2', type:'choice', level:'b2', category:'Perífrasis verbals',
      question:'Quina perífrasi expressa que una acció acaba de passar?',
      text:'___ signar el contracte, de manera que encara ets a temps per revisar-lo.',
      options:['Han de','Acaben de','Solen','Tornen a'],
      correct:1, theory:'«Acabar de + infinitiu» expressa una acció molt recent (aspecte perfectiu immediat).', example:'Acabo d\'arribar. / Acabes de dir una cosa molt interessant.' },
    { id:'b2-per3', type:'fill', level:'b2', category:'Perífrasis verbals',
      text:'Les perífrasis verbals combinen un auxiliar amb un infinitiu per matisar l\'acció; algunes indiquen que es repeteix.',
      question:'Omple amb la perífrasi adequada per expressar repetició:',
      sentence:'Ja ha comès aquest error dues vegades. Si ___ cometre\'l, haurà de rebre formació addicional.',
      display:'perífrasi de repetició (+ infinitiu)',
      answers:['torna a','vol tornar a'],
      theory:'«Tornar a + infinitiu» expressa la repetició d\'una acció. Equivalent a «una altra vegada + verb».', example:'Ha tornat a arribar tard. / Si torna a fallar, caldrà prendre mesures.' },
    { id:'b2-per4', type:'choice', level:'b2', category:'Perífrasis verbals',
      question:'Quina perífrasi expressa que una acció estava en curs en el passat?',
      text:'Quan va sonar el telèfon, ___ la presentació per a la reunió.',
      options:['havia acabat','estava preparant','va preparar','prepararia'],
      correct:1, theory:'«Estar + gerundi» en imperfet expressa una acció en curs que es veu interrompuda (aspecte progressiu del passat).', example:'Estava escrivint l\'informe quan va arribar la notícia.' },
    { id:'b2-per5', type:'fill', level:'b2', category:'Perífrasis verbals',
      text:'Algunes perífrasis verbals expressen que una acció o un hàbit s\'atura de manera definitiva.',
      question:'Usa la perífrasi correcta per expressar la cessació d\'un hàbit:',
      sentence:'Fa tres anys que ___ fumar gràcies al programa de deshabituació.',
      display:'perífrasi de cessament (+ infinitiu)',
      answers:['va deixar de','ha deixat de','deixar de','vaig deixar de'],
      theory:'«Deixar de + infinitiu» expressa la interrupció d\'un hàbit. Diferent de «parar de» (interrupció temporal).', example:'Ha deixat de menjar carn des de fa uns mesos.' },
    { id:'b2-per6', type:'choice', level:'b2', category:'Perífrasis verbals',
      question:'Quina perífrasi expressa que alguna cosa passarà immediatament?',
      text:'Espera, ___ sortir. No marxis encara.',
      options:['acabo de','vaig a','solia','haig de'],
      correct:1, theory:'«Anar a + infinitiu» expressa un futur immediat o una acció a punt de produir-se.', example:'Vés preparant-te, que anem a sortir.' },

    // TEMPS VERBALS
    { id:'b2-tv1', type:'choice', level:'b2', category:'Temps verbals',
      question:'Quina forma verbal expressa una acció puntual i acabada en el passat?',
      text:'Ahir ___ al cinema amb els meus amics.',
      options:['anava','vaig anar','he anat','hagués anat'],
      correct:1, theory:'El passat perifràstic (vaig + infinitiu) expressa accions passades puntuals i acabades. L\'imperfet «anava» indicaria un hàbit o acció de fons en curs.', example:'Vaig trucar tres vegades però no va respondre.' },
    { id:'b2-tv2', type:'choice', level:'b2', category:'Temps verbals',
      question:'Quin temps verbal s\'usa per a una acció habitual en el passat?',
      text:'De petit, ___ a la platja cada estiu amb la família.',
      options:['vaig anar','havia anat','anava','aniré'],
      correct:2, theory:'L\'imperfet expressa hàbits, accions repetides o estats en el passat. «Cada estiu» indica repetició habitual → imperfet.', example:'Quan era jove, estudiava fins a les dotze cada nit.' },
    { id:'b2-tv3', type:'fill', level:'b2', category:'Temps verbals',
      text:'El passat perifràstic (anar + infinitiu) expressa accions puntuals i acabades en un moment concret del passat.',
      question:'Completa amb la forma correcta del passat perifràstic:',
      sentence:'Quan el professor ___ a classe, tots els alumnes s\'aixecaren.',
      display:'entrar (3a pers. sing. passat perifràstic)', answers:['va entrar'],
      theory:'Passat perifràstic: anar conjugat (vaig/vas/va/vam/vau/van) + infinitiu. 3a pers. sing.: «va» + infinitiu.', example:'Va entrar sense trucar. / Vas dir la veritat?' },
    { id:'b2-tv4', type:'choice', level:'b2', category:'Temps verbals',
      question:'Quina oració usa correctament el plusquamperfet?',
      text:'El plusquamperfet expressa una acció acabada abans d\'una altra acció passada. Tria l\'oració que l\'usa correctament.',
      options:['Quan va arribar, ja vam menjar.','Quan va arribar, ja havíem menjat.','Quan va arribar, ja mengem.'],
      correct:1, theory:'El plusquamperfet (havia + participi) expressa una acció passada anterior a una altra acció passada. «Ja havíem menjat» és anterior a «va arribar».', example:'Quan va trucar, ja havia sortit. / L\'informe que havia escrit era excel·lent.' },
    { id:'b2-tv5', type:'fill', level:'b2', category:'Temps verbals',
      text:'El futur simple expressa accions venidores i, a les condicionals reals, la conseqüència d\'una condició possible.',
      question:'Omple amb el futur simple del verb indicat:',
      sentence:'Si el temps ho permet, ___ una excursió diumenge.',
      display:'fer (1a pers. pl. futur simple)', answers:['farem'],
      theory:'El futur simple de «fer» és irregular: faré, faràs, farà, farem, fareu, faran. Altres irregulars: poder → podré, voler → voldré, saber → sabré.', example:'Demà faré el sopar jo. / Quan acabi, t\'ho diré.' },
    { id:'b2-tv6', type:'reading', level:'b2', category:'Temps verbals',
      text:'De jove, la Maria escrivia en el seu diari cada nit. Un dia, però, va perdre el quadern i mai més va tornar a agafar el costum. Ara diu que escriurà les seves memòries quan es jubili.',
      question:'Quina funció té cada temps verbal del text?',
      options:['Un sol temps per a totes les accions passades','Imperfet per a hàbits, perifràstic per a accions puntuals, futur per a plans futurs','Perifràstic per a tot el passat i futur per al futur'],
      correct:1, theory:'«Escrivia» (hàbit), «va perdre / va tornar» (accions puntuals), «escriurà» (futur). Cada temps té una funció aspectual específica.', example:'Imperfet → hàbit/fons / Perifràstic → puntual / Futur → prospectiu.' },
    { id:'b2-tv7', type:'choice', level:'b2', category:'Temps verbals',
      question:'Quina forma del condicional és correcta?',
      text:'Si tingués més temps, ___ al gimnàs cada dia.',
      options:['anava','aniré','aniria','anés'],
      correct:2, theory:'En condicionals hipotètiques (si + imperfet subj.), el resultat va en condicional simple: -ia. «Aniria» = condicional d\'«anar».', example:'Si pogués, ho faria de seguida. / Ho compraria si fos més barat.' },

    // PREPOSICIONS
    { id:'b2-prep1', type:'choice', level:'b2', category:'Preposicions',
      question:'Tria la preposició correcta:',
      text:'Aquesta documentació és ___ el departament de recursos humans.',
      options:['per','per a','a','de'],
      correct:1, theory:'«Per a» indica destinació o destinatari. «Per» indica causa, durada o mitjà. La documentació «és per a» (destinada a) el departament.', example:'Aquesta carta és per a tu. / Ho faig per amor (causa).' },
    { id:'b2-prep2', type:'fill', level:'b2', category:'Preposicions',
      text:'Una de les distincions clàssiques del català és quan correspon «per» i quan «per a».',
      question:'Omple amb «per» o «per a»:',
      sentence:'Haurem d\'entregar el projecte ___ la setmana que ve.',
      display:'«per» o «per a» (termini de temps)', answers:['per a'],
      theory:'Termini (data límit) → «per a»: «per a divendres», «per a la setmana que ve». Durada → «per»: «estaré fora per dues setmanes».', example:'Ho necessito per a demà. / Estaré fora per dues setmanes.' },
    { id:'b2-prep3', type:'choice', level:'b2', category:'Preposicions',
      question:'Quin verb porta la preposició «en»?',
      text:'Alguns verbs porten preposicions fixes que cal memoritzar: consistir en, confiar en, pensar en, insistir en. Altres van amb «de» o «a»: dependre de, oblidar-se de, anar a.',
      options:['Consisteix ___ tres fases.','Depèn ___ nosaltres.','Insisteix ___ venir.'],
      correct:0, theory:'«Consistir en» és el règim fix. «Dependre de» (no «dependre en»). «Insistir a + infinitiu» (no «insistir en + infinitiu» amb persones).', example:'El projecte consisteix en tres etapes. / Insisteix a participar.' },
    { id:'b2-prep4', type:'fill', level:'b2', category:'Preposicions',
      text:'Molts verbs catalans regeixen una preposició fixa que de vegades no coincideix amb la del castellà.',
      question:'Tria la preposició correcta per al verb «quedar»:',
      sentence:'He quedat ___ la Núria per dinar avui.',
      display:'preposició de companyia', answers:['amb'],
      theory:'«Quedar amb» algú = quedar per trobar-se (companyia). «Amb» expressa companyia o instrument.', example:'Quedo amb ella a les dues. / Ho escriu amb llapis.' },
    { id:'b2-prep5', type:'choice', level:'b2', category:'Preposicions',
      question:'Quina frase usa correctament «des de»?',
      text:'Per indicar la durada d\'una acció que continua fins al present, el català té una construcció pròpia. Tria la frase correcta.',
      options:['Treballo aquí des de fa tres anys.','Treballo aquí de fa tres anys.','Treballo aquí desde tres anys.'],
      correct:0, theory:'«Des de» expressa l\'origen en el temps fins al present: «des de fa tres anys». «De» indica procedència puntual. «Desde» és la forma castellana.', example:'Visc aquí des de fa cinc anys. / Vinc de Barcelona.' },
    { id:'b2-prep6', type:'fill', level:'b2', category:'Preposicions',
      text:'L\'ús de «a» i «en» per indicar situació o lloc segueix normes pròpies en català que cal distingir.',
      question:'Completa amb «a» o «en»:',
      sentence:'Ara no pot atendre\'t, és ___ reunió.',
      display:'«a» o «en» (situació/context)', answers:['en'],
      theory:'«En reunió», «en formació», «en pràctiques» → contextos abstractes sense article. «A» + lloc físic concret: «a l\'oficina», «a classe».', example:'Estic en reunió. / Vaig a la reunió. / Treballo a casa.' },
    { id:'b2-prep7', type:'choice', level:'b2', category:'Preposicions',
      question:'Per a quin cas s\'usa «per» (i no «per a»)?',
      text:'La tria entre «per» i «per a» depèn del valor que vols expressar. Tria el cas en què correspon «per» (i no «per a»).',
      options:['Indicar el destinatari d\'un regal','Indicar la causa d\'una acció','Indicar un termini de lliurament'],
      correct:1, theory:'«Per» indica causa («ho dic per amor»), mitjà («per correu»), durada («per un mes») i «a través de» («per la finestra»). «Per a» indica destinació, finalitat i termini.', example:'Ho faig per tu (causa: amor). / Ho faig per a tu (destinació: t\'ho done).' },

    // CONSTRUCCIONS COMPARATIVES
    { id:'b2-cmp1', type:'choice', level:'b2', category:'Construccions comparatives',
      question:'Quina frase expressa igualtat correctament?',
      text:'Hi ha una única manera correcta d\'expressar la igualtat en català; les altres opcions són calcs o errors de concordança. Tria la frase correcta.',
      options:['Aquesta proposta és igual de bona que l\'anterior.','Aquesta proposta és tan bona com l\'anterior.','Aquesta proposta és tant bona com l\'anterior.','Aquesta proposta és más bona que l\'anterior.'],
      correct:1, theory:'Igualtat amb adjectiu o adverbi: «tan + adj./adv. + com». No «igual de...que» (calc del castellà), no «tant» davant adjectiu (tant va davant nom: tanta gent), no «más» (castellà).', example:'És tan ràpid com el vent. / Parla tan bé com la seva professora.' },
    { id:'b2-cmp2', type:'choice', level:'b2', category:'Construccions comparatives',
      question:'Quina forma comparativa és correcta?',
      text:'Per expressar superioritat, només una de les frases segueix la construcció catalana correcta. Tria-la.',
      options:['Aquest mètode és más eficient que l\'altre.','Aquest mètode és més eficient que l\'altre.','Aquest mètode és major d\'eficient que l\'altre.'],
      correct:1, theory:'Superioritat: «més + adj. + que». «Más» és castellà. «Major» és comparatiu irregular de «gran», no aplicable a tots els adjectius.', example:'És més clar que la versió anterior. / Parla més lentament.' },
    { id:'b2-cmp3', type:'choice', level:'b2', category:'Construccions comparatives',
      question:'Quin és el comparatiu de superioritat correcte de «bo»?',
      text:'Alguns adjectius tenen un comparatiu de superioritat irregular. Tria la forma correcta per a «bo».',
      options:['més bo','millor','major'],
      correct:1, theory:'«Bo» té comparatiu irregular: «millor». En registre formal s\'evita «més bo» (col·loquial). «Major» és comparatiu de «gran» (en sentit abstracte o formal).', example:'Aquesta opció és millor que la primera. / El millor resultat possible.' },
    { id:'b2-cmp4', type:'fill', level:'b2', category:'Construccions comparatives',
      text:'La diferència entre «tan» i «tant» és una de les confusions ortogràfiques més habituals del català.',
      question:'Completa amb «tant» o «tan»:',
      sentence:'No havia vist mai ___ gent junta en un mateix lloc.',
      display:'quantitatiu «tant» concordat amb el nom (gènere i nombre)', answers:['tanta'],
      theory:'Davant de nom: «tant/tanta/tants/tantes + nom» (concorda en gènere i nombre). Davant d\'adjectiu o adverbi: «tan + adj./adv.».', example:'Tanta gent! / Tants problemes! / Tan aviat! / Tan bé!' },
    { id:'b2-cmp5', type:'choice', level:'b2', category:'Construccions comparatives',
      question:'Quin superlatiu absolut és correcte en registre formal?',
      text:'El superlatiu absolut indica el grau màxim d\'una qualitat. En registre formal, tria la frase que el construeix correctament, sense recórrer a «molt» ni a calcs del castellà.',
      options:['És importantíssim.','És la cosa más important.','És molt millor.'],
      correct:0, theory:'Superlatiu absolut sintètic: adj. + -íssim (registre elevat). «Más» és castellà. «Molt millor» és un doble comparatiu (ja que «millor» ja és comparatiu); millor dir «molt bo» o simplement «millor».', example:'Un resultat excel·lentíssim. / Un text claríssim.' },
    { id:'b2-cmp6', type:'reading', level:'b2', category:'Construccions comparatives',
      text:'El nou sistema és menys complex que l\'anterior, però no tan intuïtiu com esperàvem. Tot i que el rendiment és millor, la interfície resulta pitjor pel que fa a l\'ergonomia. En definitiva, cap dels dos és perfecte.',
      question:'Quants tipus de comparació s\'usen al text?',
      options:['Només superioritat','Inferioritat, igualtat i comparatius irregulars (millor/pitjor)','Només igualtat i superioritat regular'],
      correct:1, theory:'«menys complex» (inferioritat), «tan intuïtiu com» (igualtat), «millor» i «pitjor» (superioritat/inferioritat irregulars de bo/dolent).', example:'Identifica cada estructura comparativa i el seu tipus.' },


    // +1 COMPRENSIÓ LECTORA
    { id:'b2-cl6', type:'reading', level:'b2', category:'Comprensió lectora',
      text:'La situació lingüística dels territoris de parla catalana és complexa. El català és llengua oficial a Catalunya, les Illes Balears i la Comunitat Valenciana, però el seu ús social varia molt segons el context i la generació dels parlants. A Andorra és l\'única llengua oficial.',
      question:'Quina afirmació és correcta segons el text?',
      options:['El català és oficial a tots els territoris on es parla','El català és l\'única llengua oficial d\'Andorra','L\'ús del català és uniforme en tots els territoris'],
      correct:1, theory:'La comprensió lectora requereix distingir el que diu el text del que un pot suposar. L\'única afirmació directament al text és la d\'Andorra.', example:'Llegeix atentament i no afegeixis informació que no hi és.' },
    // +1 CONNECTORS
    { id:'b2-con7', type:'fill', level:'b2', category:'Connectors',
      text:'Quan el resultat d\'una situació contradiu el que esperàvem, hi enllacem les idees amb un connector concessiu o adversatiu.',
      question:'Omple amb el connector adequat:',
      sentence:'El projecte era ambiciós; ___, els resultats van superar les expectatives.',
      display:'connector concessiu/adversatiu', answers:['tot i així','tanmateix','malgrat tot','no obstant això','amb tot','així i tot'],
      theory:'«Tot i així» i «tanmateix» introdueixen una conclusió inesperada respecte a la premissa anterior. Equivalen a «sin embargo» però amb matis de sorpresa positiva.', example:'Era difícil; tot i així, ho van aconseguir.' },
    // +1 SUBJUNTIU
    { id:'b2-sub7', type:'choice', level:'b2', category:'Subjuntiu',
      question:'Quina oració requereix subjuntiu?',
      text:'Segons el verb principal, la subordinada pot exigir subjuntiu o indicatiu. Tria l\'oració que requereix subjuntiu.',
      options:['Crec que ve demà.','Dubto que vingui demà.','Sé que ve demà.'],
      correct:1, theory:'Verbs de dubte (dubtar, no creure, no estar segur) regeixen subjuntiu perquè la subordinada no és un fet afirmat. ✗ «Crec que ve» és correcte amb indicatiu perquè «creure» en afirmatiu presenta la subordinada com a probable o real. ✗ «Sé que ve» porta indicatiu perquè «saber» expressa certesa plena. La clau: valor epistèmic del verb principal (certesa → indicatiu; dubte o negació → subjuntiu).', example:'Dubto que ho sàpiga. / No crec que vingui. / Crec que vindrà. / Sé que vindrà.' },
    // +1 LÈXIC FORMAL
    { id:'b2-lf7', type:'choice', level:'b2', category:'Lèxic formal B2',
      question:'Quina és la forma lèxica més adequada en un correu professional?',
      text:'Un correu professional demana un tractament i un lèxic propis del registre formal. Tria la fórmula més adequada.',
      options:['Et faig saber que la reunió s\'ha cancel·lat.','T\'aviso que la reunió s\'ha cancel·lat.','Li comunico que la reunió ha estat cancel·lada.'],
      correct:2, theory:'En registre formal s\'usa el tractament de vostè (li, la, el) i verbs com «comunicar», «informar», «notificar». «Avisar» i «fer saber» pertanyen a registres menys formals.', example:'Li comunico que... / Li faig arribar... / Em plau informar-lo/la que...' },
    // +1 INTERFERÈNCIES
    { id:'b2-int7', type:'choice', level:'b2', category:'Interferències',
      question:'Quina frase és correcta en català?',
      text:'El verb «dependre» exigeix una construcció concreta davant d\'una condició introduïda per «si». Dues de les frases la deformen per influència del castellà. Tria la correcta.',
      options:['Això depèn de si véns o no.','Això depèn de si o no véns.','Això depèn si véns o no.'],
      correct:0, theory:'«Dependre de si» és la construcció catalana correcta. Ometre «de» davant «si» és una interferència del castellà «depende si».', example:'Depèn de si tinc temps. / Dependrà de si aproven el pressupost.' },

    // ORTOGRAFIA B2
    { id:'b2-ort1', type:'choice', level:'b2', category:'Ortografia B2',
      question:'Quina frase és ortogràficament correcta?',
      text:'Els accents diacrítics distingeixen paraules iguals: «sé» (saber) vs «se» (pronom), «més» (quantitat) vs «mes» (mes de l\'any). Cal usar-los sempre que calgui.',
      options:['Se que tens mes temps que jo per acabar la feina.','Sé que tens mes temps que jo per acabar la feina.','Sé que tens més temps que jo per acabar la feina.','Se que tens més temps que jo per acabar la feina.'],
      correct:2, theory:'«Sé» (1a pers. verb saber) porta accent diacrític per distingir-lo de «se» (pronom reflexiu). «Més» (quantitat/comparatiu) porta accent per distingir-lo de «mes» (unitat de temps).', example:'Sé la resposta (≠ se\'n va). / Vull més temps (≠ el mes de maig).' },

    { id:'b2-ort2', type:'choice', level:'b2', category:'Ortografia B2',
      question:'Quina paraula de la frase conté un error ortogràfic?',
      text:'La baca beu aigua fresca a la font del bosc cada matí.',
      options:['baca','beu','bosc','fresca'],
      correct:0, theory:'«Vaca» s\'escriu amb v (del llatí vacca). Les lletres b i v sonen igual en català, però l\'ortografia correcta depèn de l\'etimologia. Paraules d\'inici v-: vaca, vi, vell, veure, venir, verd, voler, vuit.', example:'vaca, vi, vell, veure ↔ beure, blanc, bosc, botiga, brot.' },

    { id:'b2-ort3', type:'choice', level:'b2', category:'Ortografia B2',
      question:'Quin grup de paraules té totes les grafies correctes?',
      text:'El so /s/ sord entre vocals s\'escriu «ss» (possible, classe). Davant a/o/u s\'escriu «ç» (plaça, força). El so /z/ sonor entre vocals s\'escriu «s» (rosa, casa).',
      options:['posible, classe, plaça, rosa','possible, classse, plaça, rosa','possible, classe, plaça, rosa','possible, classe, plassa, rosa'],
      correct:2, theory:'So /s/ sord entre vocals → ss (possible, classe). So /s/ davant a/o/u → ç (plaça). So /z/ sonor entre vocals → s (rosa). Tres s consecutives no existeixen mai en català.', example:'possible, classe, massa (/s/) / casa, rosa (/z/) / plaça, dolç, força (ç + a/o/u).' },

    { id:'b2-ort4', type:'choice', level:'b2', category:'Ortografia B2',
      question:'Quina opció mostra un ús correcte de la dièresi en totes les paraules?',
      text:'La dièresi (ï, ü) indica que la vocal forma síl·laba per separat: veïna (ve-ï-na), raïm (ra-ïm). Excepcions: els infinitius en -uir (conduir, fluir) i les paraules en -oïna (heroïna) no porten dièresi.',
      options:['veïna, raïm, altruïsme','conduïr, veïna, heroïna','veïna, raïm, heroïna','pingüí, fluïr, beneïdes'],
      correct:2, theory:'La dièresi marca que la i o la u sona independent de la vocal anterior. EXCEPCIONS (mai dièresi): infinitius -uir/-air (conduir, construir, fluir); sufixos -isme/-ista (altruisme); prefixos anti-, co-, semi-.', example:'veïna, raïm, heroïna, Raül ✓ / conduir, altruisme, antiinflamatori (sense dièresi) ✓.' },

    { id:'b2-ort5', type:'fill', level:'b2', category:'Ortografia B2',
      text:'L\'apòstrof en català segueix regles precises segons el so amb què comença la paraula següent.',
      question:'Omple el buit amb la preposició apostrofada correcta:',
      sentence:'Les fotografies ___ estiu que vam fer aquell juliol eren molt boniques.',
      display:'de → d\' (si correspon)',
      answers:["d'"],
      theory:'La preposició «de» s\'apostrofa davant paraula que comença en vocal o h muda: d\'estiu, d\'hivern, d\'una, d\'hora. NO s\'apostrofa davant i o u semiconsonàntiques: de ioga, de Wuhan.', example:'les fotos d\'estiu, una tarda d\'hivern, el gust d\'una victòria.' },

    { id:'b2-ort6', type:'choice', level:'b2', category:'Ortografia B2',
      question:'Quina frase conté un error ortogràfic?',
      text:'Atenció als errors ortogràfics habituals: dièresi (veïna ✓, raïm ✓), però «conduir» no porta dièresi. Un d\'aquests exemples amaga un error.',
      options:['El raïm és especialment dolç a la tardor.','La veïna de dalt té una veu molt bonica.','Cal conduïr amb prudència per la carretera.','El pingüí és un ocell que no pot volar.'],
      correct:2, theory:'Els infinitius acabats en -uir no porten dièresi: conduir, construir, produir, destruir. La dièresi (ï) apareix en altres contextos (veïna, raïm) però mai en la terminació -uir d\'un infinitiu.', example:'conduir, construir, produir (sense ï) / veïna, raïm, heroïna (amb ï).' },

    // PRONOMS FEBLES B2
    { id:'b2-pfb1', type:'choice', level:'b2', category:'Pronoms febles B2',
      question:'Quin pronom feble substitueix correctament el complement en cursiva?',
      text:'Has comprat <i>les entrades</i> del concert?',
      options:['la','ho','les','en'],
      correct:2, theory:'El pronom de CD concorda en gènere i nombre amb el nom que substitueix. «Les entrades» = femení plural → «les». El/la (sing. def.), els/les (pl. def.), ho (neutre), en (partitiu).', example:'Has vist el gat? → L\'he vist. / Has llegit les cartes? → Les he llegides.' },

    { id:'b2-pfb2', type:'choice', level:'b2', category:'Pronoms febles B2',
      question:'Quin pronom substitueix el complement indirecte en cursiva?',
      text:'Has donat les gràcies <i>a la professora</i>?',
      options:['la','li','els','ho'],
      correct:1, theory:'El pronom de CI és «li» (singular) i «els» (plural), independentment del gènere. «A la professora» = CI singular → «li». Atenció: «la» és pronom de CD, no de CI.', example:'Has escrit a la Maria? → Li he escrit. / Has trucat als teus pares? → Els he trucat.' },

    { id:'b2-pfb3', type:'choice', level:'b2', category:'Pronoms febles B2',
      question:'Quin pronom completa correctament la frase?',
      text:'A Barcelona ___ viuen moltes famílies nouvingudes.',
      options:['hi','en','ho','li'],
      correct:0, theory:'«Hi» substitueix un complement de lloc (a/en + lloc) o un complement de règim verbal amb «a/en». «En» substitueix complements introduïts per «de» o un CD partitiu. «A Barcelona» = lloc → «hi».', example:'Vius a Barcelona? → Hi visc. / Vens de Barcelona? → En vinc. / Confies en ell? → Hi confio.' },

    { id:'b2-pfb4', type:'choice', level:'b2', category:'Pronoms febles B2',
      question:'Quina frase té la posició correcta del pronom feble?',
      text:'En indicatiu, el pronom feble va DAVANT el verb (proclític): «Ho dic». En imperatiu afirmatiu, va DARRERE amb guió (enclític): «Digues-ho». En imperatiu negatiu, torna davant: «No ho diguis».',
      options:['Ho digues a la directora ara.','Digues-ho a la directora ara.','Digues ho a la directora ara.','La digues a la directora ara.'],
      correct:1, theory:'En l\'imperatiu afirmatiu, el pronom feble sempre va postposat al verb unit amb guió: Digues-ho, Porta\'l, Vine-hi. En indicatiu va proclíticament (davant el verb): Ho dic, L\'he portat. En imp. negatiu, torna a ser proclític: No ho diguis.', example:'Fes-ho ara! / Porta\'l! / Vine-hi! // No ho facis (imp. neg. → davant el verb).' },

    { id:'b2-pfb5', type:'fill', level:'b2', category:'Pronoms febles B2',
      text:'Quan en una frase coincideixen un complement directe i un d\'indirecte, els pronoms febles es combinen seguint un ordre i unes formes concretes.',
      question:'Substitueix el CD (les notes) i el CI (a mi) pel pronom combinat correcte:',
      sentence:'El director m\'ha promès les notes. → El director ___ ha promès.',
      display:'CI de 1a persona + CD femení plural (forma i ordre correctes)',
      answers:['me les'],
      theory:'Quan es combinen CI i CD, l\'ordre és sempre CI + CD: me\'l, te\'ls, me les, li ho... «A mi» (CI) → me · «les notes» (CD fem. pl.) → les · Combinació: me les.', example:'M\'has donat el regal → Me l\'has donat. / T\'ha explicat la situació → Te l\'ha explicada.' },

    { id:'b2-pfb6', type:'reading', level:'b2', category:'Pronoms febles B2',
      text:'La Júlia havia comprat un regal especial per al seu nebot, però quan en va parlar a la mare del nen, li va dir que el nen ja en tenia un d\'igual. La Júlia ho va trobar molt divertit.',
      question:'A quin element fa referència «en» en la frase «quan en va parlar a la mare»?',
      options:['Al regal: substitueix «de + el regal» (parlar de → en va parlar)','A la mare del nen, que és el CI de la frase','Al fet de trobar-ho divertit (pronom neutre)','Al nebot, que és el CD de la frase'],
      correct:0, theory:'«En» substitueix un complement introduït per «de» (parlar de + cosa → en va parlar). «Li» → CI singular (a la mare). «Ho» → pronom neutre per a un fet o atribut. «En tenia un» → partitiu (quantitat de regal).', example:'Va parlar del problema → En va parlar. / Véns del treball? → En vinc.' },
  ],

  c1: [
    // SUBJUNTIU AVANÇAT
    { id:'c1-sa1', type:'choice', level:'c1', category:'Subjuntiu avançat',
      question:'Tria la forma correcta per a una condició hipotètica irreal en el present:',
      text:'Si jo ___ president, canviaria moltes coses urgentment.',
      options:['sóc','fos','sigui','havia estat'],
      correct:1, theory:'Condicionals hipotètiques irrels: si + imperfet de subjuntiu + condicional simple.', example:'Si tingués més temps, aprendria japonès.' },
    { id:'c1-sa2', type:'choice', level:'c1', category:'Subjuntiu avançat',
      question:'Tria la forma correcta per a una condicional irreal en el passat:',
      text:'Si ___ estudiat més, hauria aprovat l\'examen sense problemes.',
      options:['havia','hagués','hauria','hagi'],
      correct:1, theory:'Condicionals irreals en el passat: si + plusquamperfet de subjuntiu (hagués + participi) + condicional compost.', example:'Si hagués vingut a temps, hauria pogut saludar-te.' },
    { id:'c1-sa3', type:'fill', level:'c1', category:'Subjuntiu avançat',
      text:'En un context laboral formal, les oracions temporals que es projecten cap al futur tenen un comportament verbal particular en català.',
      question:'Completa la frase temporal de futur amb la forma verbal correcta:',
      sentence:'Enviarem la proposta definitiva quan ___ totes les esmenes incorporades.',
      display:'tenir (1a pers. pl. present subj.)', answers:['tinguem'],
      theory:'Les oracions temporals de futur porten sempre present de subjuntiu: «quan + subj.».', example:'Ho faré quan tingui temps. / Sortirem quan acabi la reunió.' },
    { id:'c1-sa4', type:'choice', level:'c1', category:'Subjuntiu avançat',
      question:'Quina frase usa el subjuntiu correctament en una oració relativa?',
      text:'En les oracions de relatiu, el subjuntiu indica que l\'antecedent és indefinit o inexistent (no se sap si existeix): «Busco algú que sàpiga...». L\'indicatiu indica que l\'antecedent és conegut: «Conec algú que sap...».',
      options:['Busco un col·laborador que sap moltes llengues.','Busco un col·laborador que sàpiga moltes llengues.','Busco un col·laborador que sabrà moltes llengues.'],
      correct:1, theory:'Quan l\'antecedent del relatiu és indefinit (no se sap si existeix), el verb de la subordinada va en subjuntiu.', example:'Busco algú que parli japonès. (subj.) / Conec algú que parla japonès. (ind.)' },
    { id:'c1-sa5', type:'fill', level:'c1', category:'Subjuntiu avançat',
      question:'Completa amb la forma de subjuntiu correcta per a un desig hipotètic:',
      text:'«Tant de bo» expressa un desig difícil o impossible de realitzar i exigeix imperfet de subjuntiu. Indica que la situació és hipotètica o molt improbable: «Tant de bo pogués volar!»',
      sentence:'Tant de bo ___ possible que tothom visqués en pau!',
      display:'ser (imperfet subj. 3a pers. sing.)', answers:['fos','sigui'],
      theory:'«Tant de bo» amb imperfet de subjuntiu: desig difícil o impossible. Amb present: desig possible.', example:'Tant de bo pugui venir! (possible) / Tant de bo pogués volar! (impossible)' },
    { id:'c1-sa6', type:'choice', level:'c1', category:'Subjuntiu avançat',
      question:'Quin connector concessiu completa correctament aquesta frase formal?',
      text:'___ els resultats siguin positius, cal continuar vigilant l\'evolució.',
      options:['Malgrat que','Per bé que','Ja que','Per tant'],
      correct:1, theory:'«Per bé que» és un connector concessiu formal que sempre va seguit de subjuntiu. Propi del registre escrit acurat.', example:'Per bé que els indicadors millorin, no hem de relaxar la vigilància.' },

    // CONNECTORS CONCESSIUS
    { id:'c1-cc1', type:'fill', level:'c1', category:'Connectors concessius',
      text:'Davant d\'un sintagma nominal sense verb conjugat, no tots els connectors concessius hi encaixen igual.',
      question:'Omple amb el connector concessiu adequat davant un sintagma nominal:',
      sentence:'___ les dificultats tècniques considerables, l\'equip va assolir tots els objectius.',
      display:'connector concessiu + sintagma nominal (sense verb conjugat)',
      answers:['malgrat','tot i'],
      theory:'«Malgrat» i «tot i» van seguits de nom, pronom o infinitiu. «Malgrat que» i «tot i que» van seguits de verb conjugat.', example:'Malgrat la pluja, vam sortir. / Tot i ploure, vam sortir.' },
    { id:'c1-cc2', type:'choice', level:'c1', category:'Connectors concessius',
      question:'Quin connector concessiu va obligatòriament amb subjuntiu?',
      text:'Els connectors concessius expressen un obstacle que no impedeix la conclusió principal. Alguns van sempre amb indicatiu (si bé), d\'altres sempre amb subjuntiu, i alguns admeten els dos modes.',
      options:['si bé','per bé que','tot i que','malgrat que'],
      correct:1, theory:'«Per bé que» és el connector concessiu formal que exigeix sempre subjuntiu. «Si bé» porta indicatiu.', example:'Per bé que els resultats siguin positius, cal prudència.' },
    { id:'c1-cc3', type:'fill', level:'c1', category:'Connectors concessius',
      question:'Omple amb el connector concessiu més formal per a registre acadèmic + indicatiu:',
      text:'En registre acadèmic, el connector concessiu de major formalitat que va amb indicatiu és «si bé». «Malgrat que» i «tot i que» són neutres; «però» és massa col·loquial.',
      sentence:'___ les mesures adoptades han estat insuficients, representen un primer pas en la bona direcció.',
      display:'connector concessiu formal + indicatiu',
      answers:['si bé','tot i que','malgrat que','encara que','per bé que'],
      theory:'«Si bé» és el connector concessiu més marcat com a formal i acadèmic. Va amb indicatiu.', example:'Si bé els resultats milloren, la situació continua sent preocupant.' },
    { id:'c1-cc4', type:'reorder', level:'c1', category:'Connectors concessius',
      text:'Una bona frase concessiva situa el contrast i el resultat en l\'ordre adequat perquè el missatge flueixi.',
      question:'Ordena per formar una frase concessiva ben construïda:',
      parts:['el projecte va ser un èxit notable','malgrat les nombroses dificultats inicials','i va superar totes les expectatives del comitè'],
      correct:[1,0,2], theory:'Estructura: connector concessiu + obstacle → acció principal + resultat positiu malgrat tot.', example:'Malgrat les dificultats → el projecte va ser un èxit → i va superar les expectatives.' },
    { id:'c1-cc5', type:'reading', level:'c1', category:'Connectors concessius',
      text:'Tot i que el cost inicial de les energies renovables era elevat, la seva implantació s\'ha accelerat. Per bé que alguns sectors continuïn resistint-se a la transició, les dades indiquen que el punt de no retorn ja s\'ha superat. Malgrat tot, la velocitat del canvi continua sent insuficient.',
      question:'Quina funció comparteixen «tot i que», «per bé que» i «malgrat tot» en el text?',
      options:['Introduir causes de la situació','Expressar obstacles que no impedeixen el resultat principal','Donar ordre cronològic als esdeveniments'],
      correct:1, theory:'Els tres connectors són concessius: introdueixen un obstacle que no impedeix la conclusió principal.', example:'Tot i que [obstacle]... [la situació continua].' },
    { id:'c1-cc6', type:'choice', level:'c1', category:'Connectors concessius',
      question:'En quina frase s\'usa incorrectament un connector concessiu?',
      text:'«Per bé que» exigeix sempre subjuntiu. Quan va seguit d\'indicatiu, l\'oració és incorrecta. «Malgrat» i «tot i» poden anar amb nom, infinitiu o verb conjugat.',
      options:['Malgrat la crisi, l\'empresa va créixer.','Tot i ploure molt, van sortir a caminar.','Per bé que és un bon professional, treballarà amb nosaltres.'],
      correct:2, theory:'«Per bé que» exigeix subjuntiu. «És» (indicatiu) és incorrecte. La forma correcta: «per bé que sigui un bon professional».', example:'Per bé que sigui difícil, cal intentar-ho.' },

    // LÈXIC FORMAL C1
    { id:'c1-lf1', type:'transform', level:'c1', category:'Lèxic formal',
      text:'El registre formal evita verbs genèrics com «fer» i quantificadors vagues com «moltes coses».',
      question:'Reformula en registre formal i precís:',
      original:'«Ell va fer moltes coses importants per al país»',
      hints:['fer → dur a terme / impulsar / executar','coses → iniciatives / reformes / mesures','importants → rellevants / significatives / d\'abast nacional'],
      sample:'Va dur a terme nombroses iniciatives rellevants per al conjunt del país.',
      theory:'Al C1 cal substituir verbs genèrics i noms buits per alternatives precises.', example:'Va impulsar reformes estructurals de llarg abast nacional.' },
    { id:'c1-lf2', type:'transform', level:'c1', category:'Lèxic formal',
      text:'En l\'escriptura acadèmica, expressions com «la gent diu» se substitueixen per fonts i verbs epistèmics precisos.',
      question:'Transforma al registre acadèmic formal:',
      original:'«La gent diu que el canvi climàtic és un problema molt gran»',
      hints:['la gent → diverses evidències científiques / estudis recents','dir → indicar / demostrar / constatar','molt gran → d\'una magnitud considerable / d\'escala global'],
      sample:'Diverses evidències científiques constaten que el canvi climàtic constitueix una problemàtica d\'escala global.',
      theory:'En registre acadèmic: elimina «la gent»; usa fonts específiques i verbs epistèmics.', example:'Els estudis disponibles indiquen que la situació és d\'una gravetat considerable.' },
    { id:'c1-lf3', type:'fill', level:'c1', category:'Lèxic formal',
      text:'El llenguatge formal sovint condensa accions verbals en substantius (nominalització).',
      question:'Omple amb la nominalització correcta del verb indicat:',
      sentence:'___ de les dades ha posat de manifest irregularitats significatives en la gestió.',
      display:'nominalització d\'«analitzar» (amb l\'article adequat)',
      answers:["L'anàlisi","La tasca d'anàlisi"],
      theory:'La nominalització (verb → nom) és una marca de registre acadèmic: analitzar → anàlisi. Atenció: «anàlisi» és masculí → l\'article és «l\'» (L\'anàlisi), no «la».', example:'L\'anàlisi de les dades ha evidenciat... / La implementació del projecte...' },
    { id:'c1-lf4', type:'choice', level:'c1', category:'Lèxic formal',
      question:'Quina paraula encaixa millor en el context acadèmic?',
      text:'L\'estudi ___ l\'existència d\'una correlació directa entre les dues variables.',
      options:['diu','constata','explica','comenta'],
      correct:1, theory:'«Constatar» és un verb epistèmic que expressa que quelcom ha quedat verificat empíricament. Molt freqüent en textos científics.', example:'L\'estudi constata / evidencia / posa de manifest / demostra...' },
    { id:'c1-lf5', type:'writing', level:'c1', category:'Lèxic formal',
      text:'Un informe d\'investigació social demana densitat nominal i veus impersonals en lloc del subjecte genèric «la gent».',
      question:'Reescriu la frase per incloure-la en un informe d\'investigació social. Usa nominalitzacions i verbs epistèmics precisos. Frase original: «La gent participa més en les decisions».',
      keywords:['nominalitzar: participar→participació / decidir→presa de decisions','eliminar «la gent»: la ciutadania / els agents socials / la població','verbs epistèmics: constatar / evidenciar / posar de manifest / reflectir','estructura: passiva reflexa o impersonal'],
      sample:'S\'ha observat un increment significatiu de la participació ciutadana en els processos de presa de decisions.',
      theory:'Nominalització + passiva reflexa + lèxic epistèmic precís = tríada del registre acadèmic al C1. Eliminar «la gent» com a subjecte és la primera decisió de registre; substituir el verb conjugat per una nominalització, la segona.', example:'«La gent participa més» → «S\'observa un increment de la participació ciutadana».' },
    { id:'c1-lf6', type:'transform', level:'c1', category:'Lèxic formal',
      text:'El to institucional impersonalitza l\'agent i eleva el lèxic per transmetre rigor.',
      question:'Reformula per a un informe institucional:',
      original:'«El govern ha de fer alguna cosa per resoldre aquest problema tan important»',
      hints:['ha de fer → ha d\'adoptar / cal que implementi / s\'imposa','alguna cosa → mesures concretes / una estratègia integral','tan important → d\'envergadura / de primer ordre / estructural'],
      sample:'S\'imposa que les administracions competents implementin mesures concretes per resoldre una problemàtica d\'envergadura estructural.',
      theory:'En informes institucionals: subjecte impersonal, verb d\'obligació formal, complement precís.', example:'Cal que les institucions adoptin una estratègia integral per fer front a un repte de primer ordre.' },

    // ARGUMENTACIÓ
    { id:'c1-arg1', type:'reorder', level:'c1', category:'Argumentació',
      text:'Un argument acadèmic segueix una progressió lògica: afirmació, matís, exemple i conclusió. Fixa\'t en els connectors per trobar l\'ordre.',
      question:'Ordena per construir un argument acadèmic ben estructurat:',
      parts:['Tot i això, alguns experts qüestionen l\'eficàcia real d\'aquestes polítiques.','Les mesures de reducció d\'emissions han demostrat resultats positius en diverses metròpolis.','Per consegüent, cal un enfocament holístic que combini diverses estratègies complementàries.','Concretament, argumenten que sense canvis en el model de consum, l\'impacte és limitat.'],
      correct:[1,0,3,2], theory:'Estructura: tesi → contraargument → matís → conclusió integradora.', example:'Afirmació → Objecció («tot i això») → Matís → Conclusió («per consegüent»).' },
    { id:'c1-arg2', type:'writing', level:'c1', category:'Argumentació',
      text:'Un bon paràgraf argumentatiu no només defensa una idea: també reconeix l\'objecció contrària i la integra en una conclusió matisada.',
      question:'Escriu un paràgraf argumentatiu de 4-5 frases (80-100 paraules) en registre formal sobre el treball en remot. Imagina que s\'inclourà en un article d\'opinió per a una publicació especialitzada en gestió d\'empreses. Ha de contenir: tesi, argument, contraargument i conclusió matisada.',
      keywords:['tesi en registre formal (evita «crec que»): El treball en remot ha demostrat...','fonamentació: en efecte / de fet / estudis recents evidencien...','contraargument: tot i això / ara bé / cal matisar que...','conclusió matisada: en definitiva / la qüestió no és... sinó...'],
      sample:'El treball en remot ha demostrat ser una modalitat eficient que millora la conciliació. En efecte, estudis recents evidencien increments de productivitat. Tot i això, no tots els perfils se\'n beneficien per igual. En definitiva, cal un model híbrid que combini els avantatges de les dues modalitats.',
      theory:'Estructura C1: tesi → fonamentació → contraargument → conclusió matisada. La conclusió ha d\'integrar la tensió entre la tesi i el contraargument, no repetir la tesi. En registre C1 cal evitar la 1a persona i els marcadors d\'opinió col·loquials.', example:'Tesi → En efecte... → Tot i això... → En definitiva...' },
    { id:'c1-arg3', type:'reading', level:'c1', category:'Argumentació',
      text:'Alguns defensors de la intel·ligència artificial sostenen que aquesta tecnologia resoldrà els grans problemes de la humanitat. Ara bé, cal matisar que les eines tecnològiques no actuen de manera autònoma: la seva eficàcia depèn de les decisions humanes. Per consegüent, el debat no hauria de centrar-se en la tecnologia, sinó en la responsabilitat dels seus creadors.',
      question:'Quina estratègia argumentativa usa l\'autor?',
      options:['Presenta una sola posició sense matissos','Presenta una afirmació, la matisa i redirigeix el debat cap a una conclusió diferent','Refuta completament la posició dels defensors de la IA'],
      correct:1, theory:'L\'autor usa l\'estratègia de «sí, però»: reconeix la posició contrària, la matisa i redirigeix la conclusió.', example:'Reconèixer → Matisar («Ara bé») → Concloure diferent («Per consegüent»).' },
    { id:'c1-arg4', type:'choice', level:'c1', category:'Argumentació',
      question:'Quina expressió serveix per introduir una tesi en un text acadèmic?',
      text:'En un text acadèmic, la tesi s\'introdueix amb expressions impersonals i objectives que eviten el «jo»: «es fa palès que», «cal tenir present que», «tot sembla indicar que».',
      options:['Crec que és important dir que...','Es fa palès que les mesures adoptades han estat insuficients.','Bueno, bàsicament el que vull dir és que...'],
      correct:1, theory:'En registre acadèmic, la tesi s\'introdueix amb expressions impersonals i objectives: «Es fa palès que», «Cal tenir present que», «Les evidències indiquen que».', example:'Es fa palès que les polítiques actuals no han assolit els objectius previstos.' },
    { id:'c1-arg5', type:'fill', level:'c1', category:'Argumentació',
      question:'Omple amb el connector argumentatiu que introdueix un matís a la posició anterior:',
      text:'Un connector de matís reconeix parcialment l\'afirmació anterior i hi introdueix una reserva o limitació, sense negar-la del tot. «Però» és massa col·loquial per a textos acadèmics.',
      sentence:'Els resultats han estat satisfactoris. ___, cal no perdre de vista les limitacions metodològiques.',
      display:'connector de matís (no «però»)',
      answers:['ara bé','dit això','cal matisar que','no obstant això','tanmateix','amb tot','tot i així'],
      theory:'«Ara bé» i «dit això» introdueixen un matís que relativitza sense contradir frontalment. Característics del registre formal C1.', example:'La mesura ha estat eficaç. Ara bé, cal avaluar els seus efectes a llarg termini.' },

    // COMPRENSIÓ CRÍTICA
    { id:'c1-crit1', type:'reading', level:'c1', category:'Comprensió crítica',
      text:'La globalització ha provocat una paradoxa singular: mentre s\'accelera la homogeneïtzació cultural, assistim a un renaixement de les identitats locals. Aquesta tensió dialèctica no és una anomalia, sinó el reflex d\'una necessitat humana fonamental: la cerca d\'arrels davant la desorientació del canvi vertiginós.',
      question:'Quina és la tesi implícita de l\'autor?',
      options:['La globalització és intrínsecament negativa per a les cultures locals','La revitalització de les identitats locals és una resposta natural i esperada','La homogeneïtzació cultural és inevitable i positiva'],
      correct:1, theory:'«No és una anomalia» i «necessitat fonamental» → l\'autor legitima i naturalitza el fenomen.', example:'Identifica les paraules valoratives de l\'autor i la seva posició real.' },
    { id:'c1-crit2', type:'reading', level:'c1', category:'Comprensió crítica',
      text:'La crisi de la biodiversitat sovint queda eclipsada pel debat sobre el canvi climàtic, com si tots dos fenòmens fossin compartiments estancs. En realitat, constitueixen dues cares d\'una mateixa crisi sistèmica. Separar-los no és tan sols una simplificació: és un error estratègic que permet tractar els símptomes ignorant la malaltia de fons.',
      question:'Quina posició defensa implícitament l\'autor?',
      options:['La crisi de biodiversitat és menys important que el canvi climàtic','Cal abordar biodiversitat i canvi climàtic com a fenòmens interconnectats, no separats','El debat sobre el canvi climàtic és innecessari'],
      correct:1, theory:'«Dues cares d\'una mateixa crisi» i «tractar els símptomes» argumenten la necessitat d\'un enfocament integrat.', example:'«Dues cares d\'una mateixa crisi» = interconnectats. «Tractar els símptomes» = abordar-los per separat és insuficient.' },
    { id:'c1-crit3', type:'choice', level:'c1', category:'Comprensió crítica',
      question:'Quin recurs argumentatiu usa l\'autor en: «Separar-los no és tan sols una simplificació: és un error estratègic»?',
      text:'Analitza l\'estructura de la frase: «no és tan sols X: és Y». Pensa en la relació entre les dues afirmacions i quin efecte retòric produeix la progressió de X cap a Y.',
      options:['Una contradicció interna entre les dues afirmacions','Una gradació ascendent: l\'error va més enllà d\'una mera simplificació','Una concessió que reconeix la validesa de la posició contrària'],
      correct:1, theory:'L\'estructura «no és tan sols X: és Y» on Y > X expressa una gradació ascendent que reforça la gravetat.', example:'«No és tan sols un error: és una irresponsabilitat.» → Y és pitjor que X.' },
    { id:'c1-crit4', type:'reading', level:'c1', category:'Comprensió crítica',
      text:'L\'anomenada «fatiga de compassió» afecta les professions d\'ajuda. Paradoxalment, les persones més empàtiques en són les primeres víctimes. Alguns experts proposen establir límits emocionals estrictes; d\'altres, en canvi, consideren que la solució no passa per la distància afectiva, sinó per una gestió emocional activa.',
      question:'Quina és la tensió central que planteja el text?',
      options:['Si la fatiga de compassió existeix realment','El debat entre distanciar-se emocionalment vs. gestionar activament les emocions','Si els professionals empàtics haurien de canviar de professió'],
      correct:1, theory:'«Alguns experts... d\'altres, en canvi» presenta dues solucions enfrontades. La tensió és entre les dues propostes.', example:'«Alguns... d\'altres, en canvi» → dos bàndols en tensió.' },
    { id:'c1-crit5', type:'choice', level:'c1', category:'Comprensió crítica',
      question:'Quin to predomina en: «Podria semblar que les dades parlen per si soles. Res més lluny de la realitat»?',
      text:'Per identificar el to, fixa\'t en l\'estructura: una primera frase que presenta una visió ingènua («podria semblar») seguida d\'una refutació contundent. Quin efecte produeix en el lector?',
      options:['Optimista i confirmatiu','Crític i correctiu: refuta una visió ingènua sobre les dades','Dubitatiu: no sap si les dades són fiables'],
      correct:1, theory:'«Res més lluny de la realitat» és una expressió correctiva molt forta. L\'autor primer presenta una posició i tot seguit la derriba completament.', example:'«Podria semblar X / Res més lluny» → refutació directa d\'una creença prèvia.' },

    // PRODUCCIÓ FORMAL
    { id:'c1-pro1', type:'writing', level:'c1', category:'Producció formal',
      text:'La introducció d\'un informe presenta el marc, delimita el problema i anuncia l\'objectiu, sempre amb to impersonal i sense opinions personals.',
      question:'Redacta la introducció d\'un informe destinat al Consell Interuniversitari sobre l\'ús del català a les universitats catalanes. Ha d\'incloure: context, problema i objectiu (80-120 paraules). Evita les opinions personals.',
      keywords:['context institucional (marc normatiu, dades actuals)','problema identificat (desequilibris, tendències)','objectiu de l\'informe: analitzar / examinar / avaluar...','registre acadèmic: passiva reflexa, impersonalitat, verbs epistèmics'],
      sample:'La present anàlisi té per objecte examinar la situació del català en l\'àmbit universitari. Malgrat els avenços legislatius, persisteixen desequilibris significatius en l\'ús de la llengua com a vehicle d\'ensenyament. L\'estudi pretén identificar els factors que condicionen aquesta situació i formular propostes per revertir-la.',
      theory:'Una introducció formal: marc contextual + problema + objectiu. Evita la 1a persona singular i les opinions. La impersonalitat i la precisió lèxica són marques de registre acadèmic C1.', example:'«La present anàlisi té per objecte...» / «El present informe examina...»' },
    { id:'c1-pro2', type:'writing', level:'c1', category:'Producció formal',
      text:'La conclusió d\'un informe sintetitza el que ja s\'ha dit i hi afegeix una recomanació, sense introduir dades noves.',
      question:'Redacta la conclusió d\'un informe tècnic sobre el mercat laboral juvenil, adreçat a una administració pública. Ha d\'incloure: síntesi, valoració global i una recomanació concreta (80-120 paraules). No introdueixis informació nova.',
      keywords:['síntesi: en definitiva / tot plegat / les dades posen de manifest','valoració objectiva (sense 1a persona ni judicis personals)','recomanació: es recomana / cal que / s\'imposa / es proposa'],
      sample:'En definitiva, les dades analitzades posen de manifest desequilibris estructurals que no es poden atribuir exclusivament a factors conjunturals. La precarietat i la sobrequalificació constitueixen els reptes més urgents. Es recomana, per consegüent, l\'adopció de mesures que combinin formació, incentius a la contractació i polítiques actives d\'ocupació.',
      theory:'Una conclusió formal: síntesi sense noves idees + valoració objectiva + recomanació accionable. Evita la 1a persona. No repeteixis textualment la introducció: reformula-la elevant el registre.', example:'En definitiva... / Les evidències indiquen... / Es recomana, per consegüent...' },
    { id:'c1-pro3', type:'choice', level:'c1', category:'Producció formal',
      question:'Quina expressió és la més adequada per referir-se a dades en un text acadèmic?',
      text:'En un text acadèmic, les referències a dades han de ser objectives i impersonals. S\'eviten les pressuposicions («com és obvi») i les valoracions en primera persona («jo crec»).',
      options:['Com és obvi per a tothom...','D\'acord amb les evidències disponibles, cal concloure que...','Jo crec que les dades demostren que...'],
      correct:1, theory:'Les dades s\'introdueixen amb expressions epistèmiques objectives: «D\'acord amb», «Segons», «Les evidències indiquen», «Les dades posen de manifest».', example:'D\'acord amb les evidències disponibles, es constata una millora significativa dels indicadors.' },
    { id:'c1-pro4', type:'writing', level:'c1', category:'Producció formal',
      text:'Passar al registre acadèmic vol dir substituir el lèxic vague i col·loquial per termes precisos i impersonals.',
      question:'Transforma al registre acadèmic: «El problema és que la gent no fa cas de les normes i les coses van malament».',
      keywords:['la gent → la ciutadania / els agents','fer cas → complir / acatar','van malament → es deterioren / presenten disfuncions'],
      sample:'La manca de compliment de la normativa per part de la ciutadania genera disfuncions que comprometen l\'eficàcia del sistema.',
      theory:'Eliminar «la gent», «fer cas», «anar malament»; incorporar nominalitzacions i vocabulari tècnic.', example:'La manca de compliment... genera disfuncions... compromet l\'eficàcia...' },
    { id:'c1-pro5', type:'fill', level:'c1', category:'Producció formal',
      text:'En els textos formals, les afirmacions s\'introdueixen amb fórmules impersonals que en remarquen l\'evidència sense esmentar qui ho diu.',
      question:'Omple amb l\'expressió impersonal formal adequada:',
      sentence:'___ que les polítiques actuals no han assolit els resultats esperats en matèria d\'habitatge.',
      display:'expressió impersonal epistèmica',
      answers:['es fa palès','és evident','cal constatar','s\'observa','es constata','es fa evident','queda palès','es posa de manifest'],
      theory:'En registre acadèmic, s\'evita la 1a persona. Expressions impersonals: «es fa palès», «es constata», «s\'observa», «es posa de manifest».', example:'Es fa palès que la situació requereix una intervenció urgent.' },

    // ORACIONS DE RELATIU
    { id:'c1-rel1', type:'choice', level:'c1', category:'Oracions de relatiu',
      question:'Tria la construcció de relatiu correcta en registre culte:',
      text:'La proposta ___ es va presentar ahir no compleix els requisits legals.',
      options:['que la qual','la qual','en la qual que','qui'],
      correct:1, theory:'En registre formal, «el qual / la qual» substitueix «que» quan pot crear ambigüitat o en prosa elaborada.', example:'El document al qual fas referència no és vàlid.' },
    { id:'c1-rel2', type:'fill', level:'c1', category:'Oracions de relatiu',
      text:'Quan el relatiu va precedit d\'una preposició, el registre formal demana una forma composta en lloc del simple «que».',
      question:'Completa amb el pronom relatiu formal correcte (amb preposició «en»):',
      sentence:'El projecte ___ hem treballat durant mesos ha estat finalment aprovat.',
      display:'relatiu compost (preposició + «qual»)', answers:['en el qual','al qual','en què'],
      theory:'Quan el relatiu va precedit de preposició, cal usar «el qual / la qual» en registre formal, no simplement «que».', example:'El comitè al qual pertanyo... / La reunió en la qual es va decidir...' },
    { id:'c1-rel3', type:'choice', level:'c1', category:'Oracions de relatiu',
      question:'Quina frase usa correctament les oracions de relatiu?',
      text:'Una oració de relatiu especificativa (sense comes) restringeix el significat de l\'antecedent: «Els participants que havien superat la prova» (no tots, només els que la van superar). El pronom «qui» per a persones és un castellanisme quan va sense preposició.',
      options:['Els participants que, tots ells, havien superat la prova van ser admesos.','Els participants que havien superat la prova van ser admesos.','Els participants, qui havien superat la prova, van ser admesos.'],
      correct:1, theory:'«Qui» s\'usa per a persones en funció de subjecte, preferentment en relativa sense antecedent. En relativa especificativa amb antecedent, s\'usa «que».', example:'Els qui vulguin participar que s\'apuntin. / Els estudiants que han aprovat...' },
    { id:'c1-rel4', type:'fill', level:'c1', category:'Oracions de relatiu',
      text:'Una relativa explicativa aporta informació addicional no essencial, i la puntuació la separa de la resta de la frase.',
      question:'Converteix la frase en relativa explicativa afegint comes:',
      sentence:'Escriu la versió correcta de: El director que va signar el document és el responsable.',
      display:'insereix comes per fer-la explicativa',
      answers:['El director, que va signar el document, és el responsable.'],
      theory:'Relativa especificativa (sense comes): identifica quin director. Relativa explicativa (amb comes): afegeix info sobre un director ja identificat.', example:'El professor, que sap japonès, és el millor. (explicativa)' },
    { id:'c1-rel5', type:'choice', level:'c1', category:'Oracions de relatiu',
      question:'Quina construcció de relatiu és la més formal i precisa per a un subjecte?',
      text:'La comissió ___ va elaborar l\'informe presentarà les seves conclusions dimecres.',
      options:['que','la qual','qui','on'],
      correct:1, theory:'En registre formal, «la qual» s\'usa per a subjectes de relativa quan l\'antecedent és un nom, especialment en prosa elaborada.', example:'La comissió la qual va elaborar l\'informe... (formal).' },

    // SUBJUNTIU IMPERFET
    { id:'c1-si1', type:'fill', level:'c1', category:'Subjuntiu imperfet',
      text:'Quan el verb principal va en passat, la subordinada que en depèn arrossega el verb cap a un temps de subjuntiu concordant.',
      question:'Usa el subjuntiu imperfet per completar la frase:',
      sentence:'El director va demanar que tots els membres ___ puntuals a la reunió.',
      display:'arribar (3a pers. pl. subj. imperfet)', answers:['arribessin'],
      theory:'Verb principal en passat → verb subordinat en imperfet de subjuntiu. 3a persona plural: -essin.', example:'Va demanar que tots portessin la documentació.' },
    { id:'c1-si2', type:'choice', level:'c1', category:'Subjuntiu imperfet',
      question:'Quina frase usa correctament la concordança temporal?',
      text:'La concordança temporal exigeix que el verb subordinat estigui en imperfet de subjuntiu quan el verb principal és en condicional o en passat: «voldria que vingués», «va demanar que vingués».',
      options:['Voldria que vingui aviat.','Voldria que vingués aviat.','Volia que vindrà aviat.'],
      correct:1, theory:'Condicional (voldria) → subjuntiu imperfet (vingués). El condicional actua com un «passat» per a la concordança temporal.', example:'Voldria que m\'expliqués la situació.' },
    { id:'c1-si3', type:'fill', level:'c1', category:'Subjuntiu imperfet',
      text:'En passar a estil indirecte en passat, els temps verbals de la frase original es desplacen cap enrere.',
      question:'Completa en estil indirecte al passat:',
      sentence:'Va dir: «Vull que tots facin l\'exercici». → Va dir que volia que tots ___ l\'exercici.',
      display:'fer (3a pers. pl. subj. imperfet)', answers:['fessin'],
      theory:'Estil indirecte al passat: el present de subj. «facin» es transforma en imperfet «fessin» quan el verb introductori és en passat.', example:'Va dir que volia que fessin silenci.' },
    { id:'c1-si4', type:'choice', level:'c1', category:'Subjuntiu imperfet',
      question:'Quina forma verbal d\'imperfet de subjuntiu és incorrecta?',
      text:'Les formes de l\'imperfet de subjuntiu es construeixen sobre el radical del passat: vaig ser → fos, vaig tenir → tingués, vaig poder → pogués. Una d\'aquestes formes és incorrecta.',
      options:['fos (ser)','tingués (tenir)','pugués (poder)'],
      correct:2, theory:'La forma correcta de «poder» en imperfet de subjuntiu és «pogués». «Pugués» és una confusió amb el present de subj. «pugui».', example:'Si pogués venir, ho faria. (subj. imperfet)' },
    { id:'c1-si5', type:'fill', level:'c1', category:'Subjuntiu imperfet',
      text:'«Tant de bo» expressa un desig; quan el desig és poc probable o irreal, el verb adopta un temps de subjuntiu particular.',
      question:'Usa «tant de bo» + imperfet de subjuntiu per a un desig difícil:',
      sentence:'Tant de bo ___ més temps per dedicar-me als projectes que m\'agraden!',
      display:'tenir (1a pers. sg. imperfet subj.)', answers:['tingués'],
      theory:'«Tant de bo» + imperfet de subjuntiu: desig poc probable o impossible en el present.', example:'Tant de bo tingués temps! (poc probable)' },
    { id:'c1-si6', type:'choice', level:'c1', category:'Subjuntiu imperfet',
      question:'Quina opció completa correctament la condicional irreal en el passat?',
      text:'Si hagués sabut la veritat, ___ d\'una altra manera.',
      options:['actuaria','hauria actuat','hagués actuat'],
      correct:1, theory:'Condicional irreal en el passat: si + plusquamperfet de subj. + condicional compost (hauria + participi).', example:'Si hagués estudiat més, hauria aprovat.' },

    // PRONOMS FEBLES
    { id:'c1-pf1', type:'choice', level:'c1', category:'Pronoms febles',
      question:'Quin pronom feble substitueix correctament «de política» en la resposta?',
      text:'«Parleu de política?» «Sí, ___ parleu sovint.»',
      options:['la','hi','en','ho'],
      correct:2, theory:'El pronom «en» substitueix complements introduïts per «de» (temes, matèries). «Parlar de X» → «en parlar».', example:'«Parles de la reunió?» «Sí, en parlo.»' },
    { id:'c1-pf2', type:'fill', level:'c1', category:'Pronoms febles',
      text:'Els complements de lloc tenen pronoms febles propis que els substitueixen sense repetir el sintagma.',
      question:'Substitueix el sintagma subratllat pel pronom feble adequat:',
      sentence:'Vaig al mercat demà. → ___ vaig demà.',
      display:'pronom de lloc de destinació', answers:['hi'],
      theory:'«Hi» substitueix complements de lloc on es va o on s\'és (complement introduït per «a» o «en»).', example:'«Vas a la reunió?» «Sí, hi vaig.»' },
    { id:'c1-pf3', type:'choice', level:'c1', category:'Pronoms febles',
      question:'Quina combinació de pronoms febles és correcta per a «Li explico el problema»?',
      text:'Quan el complement directe és un concepte abstracte o una frase (no un nom concret), s\'usa «ho» (neutre). L\'ordre és sempre CI + CD: «li ho». «Lo» no existeix en català normatiu.',
      options:['Lo li explico.','Li ho explico.','El li explico.'],
      correct:1, theory:'Quan el CD és una frase o concepte abstracte, s\'usa «ho» (neutre). Ordre: CI (li) + CD (ho) → li ho.', example:'«Li explico el que ha passat.» → «Li ho explico.»' },
    { id:'c1-pf4', type:'fill', level:'c1', category:'Pronoms febles',
      text:'Quan parlem d\'una quantitat indeterminada d\'alguna cosa, el català fa servir un pronom feble específic per no repetir el nom.',
      question:'Omple amb el pronom feble partitiu correcte:',
      sentence:'Vols formatge? Sí, ___ vull una mica, si us plau.',
      display:'pronom partitiu (quantitat indeterminada)', answers:['en'],
      theory:'«En» s\'usa com a pronom partitiu quan el CD no porta article determinat o porta un quantificador.', example:'«Tens germanes?» «Sí, en tinc dues.»' },
    { id:'c1-pf5', type:'choice', level:'c1', category:'Pronoms febles',
      question:'Quina frase conté un ús incorrecte d\'un pronom feble?',
      text:'«Haver-hi» és un verb impersonal: no té subjecte real i, per tant, el verb «haver» no concorda mai en plural. L\'error «hi han» és molt freqüent però incorrecte.',
      options:['Hi ha molts participants a la sala.','Hi han molts participants a la sala.','A la sala hi ha molts participants.'],
      correct:1, theory:'«Hi ha» és invariable en nombre: mai «hi han». El verb «haver-hi» d\'existència no concorda amb el sintagma que el segueix.', example:'✓ Hi ha moltes persones. ✗ Hi han moltes persones.' },
    { id:'c1-pf6', type:'fill', level:'c1', category:'Pronoms febles',
      text:'Quan combinem dos pronoms febles (complement indirecte i directe), l\'ordre i la forma canvien segons el verb.',
      question:'Pronominalitza CD i CI: «Dóna el llibre a la Maria» → «Dóna-___»:',
      sentence:'Escriu la combinació completa de pronoms amb guionet darrere el verb.',
      display:'CI (li) + CD masculí sing. (el → \'l)', answers:['li\'l','dóna-li\'l'],
      theory:'Ordre en imperatius: verb + CI + CD. «li» + «el» → «li\'l» (contracció). S\'uneix amb guionet al verb.', example:'Dóna-li\'l. / Porta-me\'l.' },

    // FRASES FETES
    { id:'c1-ff1', type:'choice', level:'c1', category:'Frases fetes',
      question:'Quina és la frase feta catalana equivalent a «estar muy ocupado»?',
      text:'Les frases fetes no es tradueixen literalment. Cal aprendre-les en context, associant-les al seu significat global i no a les paraules que les componen.',
      options:['Estar a les vores','Anar de bòlit','Tenir moltes mans'],
      correct:1, theory:'«Anar de bòlit» és la locució per expressar que s\'està molt ocupat. Pertany al registre col·loquial.', example:'Aquesta setmana anem de bòlit amb el tancament del projecte.' },
    { id:'c1-ff2', type:'fill', level:'c1', category:'Frases fetes',
      text:'Les frases fetes tenen un verb fix que no es pot canviar per un sinònim qualsevol: forma part de la locució.',
      question:'Omple la frase feta: «No és moment de ___ la tovallola; cal continuar lluitant».',
      sentence:'No és moment de ___ la tovallola; cal continuar lluitant.',
      display:'verb de la locució (abandonar la lluita)', answers:['tirar','llançar'],
      theory:'«Tirar la tovallola» significa rendir-se. Prové del món de la boxa, on es llança la tovallola per reconèixer la derrota.', example:'Malgrat les dificultats, no hem de tirar la tovallola ara.' },
    { id:'c1-ff3', type:'choice', level:'c1', category:'Frases fetes',
      question:'Quina col·locació lèxica és correcta en català?',
      text:'Les col·locacions lèxiques (verb + nom) sovint difereixen entre el català i el castellà. Molts errors provenen de traduir literalment la combinació castellana.',
      options:['agafar una decisió','prendre una decisió','fer una decisió'],
      correct:1, theory:'«Prendre una decisió» és la col·locació correcta en català. «Agafar» seria un calc incorrecte en aquest context.', example:'El consell va prendre la decisió d\'ajornar la reunió.' },
    { id:'c1-ff4', type:'choice', level:'c1', category:'Frases fetes',
      question:'Quina és la frase feta catalana per a «estar entre la espada y la pared»?',
      text:'Les frases fetes equivalents entre llengues utilitzen imatges metafòriques diferents. En català, la imatge de l\'ofici del ferrer substitueix la imatge bèl·lica del castellà.',
      options:['Estar entre martell i enclusa','Estar en la corda fluixa','Anar a poc a poc'],
      correct:0, theory:'«Estar entre el martell i l\'enclusa» expressa una situació difícil sense bona sortida. Ambdues variants s\'usen en català.', example:'Es trobava entre el martell i l\'enclusa: tant si acceptava com si refusava, sortia perdent.' },
    { id:'c1-ff5', type:'writing', level:'c1', category:'Frases fetes',
      text:'En un text professional, les locucions col·loquials se substitueixen pel seu significat expressat amb lèxic precís.',
      question:'Reformula les frases fetes col·loquials en registre formal per a un text professional.',
      keywords:['«anar de bòlit» → registre formal','«fer els ulls grossos» → registre formal','«perdre el fil» → registre formal'],
      sample:'"Anar de bòlit" → "trobar-se en una situació de càrrega de treball excepcional" / "Fer els ulls grossos" → "ignorar deliberadament les irregularitats" / "Perdre el fil" → "perdre el seguiment del raonament".',
      theory:'Les frases fetes pertanyen sovint al registre col·loquial. En textos formals cal substituir-les per expressions neutres o tècniques.', example:'Col·loquial: «anar de bòlit» → Formal: «tenir una càrrega de treball excepcional».' },
    { id:'c1-ff6', type:'choice', level:'c1', category:'Frases fetes',
      question:'Quina frase feta s\'usa per expressar que algú viu còmodament sense fer-hi gaire res?',
      text:'Algunes frases fetes fan referència a actituds vitals: viure sense esforç, estar a l\'aguait, o rendir-se. Associa cadascuna a la situació que descriu.',
      options:['Fer la viu-viu','Estar a l\'aguait','Tirar la tovallola'],
      correct:0, theory:'«Fer la viu-viu» significa viure sense gaire esforç, aprofitant-se de la situació.', example:'Mentre els companys treballaven, ell feia la viu-viu sense aportar res al grup.' },

    // DERIVACIÓ I FLEXIÓ
    { id:'c1-df1', type:'fill', level:'c1', category:'Derivació i flexió',
      text:'A partir d\'un verb es pot formar un substantiu que en designa l\'acció o el resultat (nominalització).',
      question:'Forma la nominalització (substantiu) del verb indicat:',
      sentence:'La ___ de les mesures ha requerit la col·laboració de totes les parts implicades.',
      display:'nominalització d\'«implementar»', answers:['implementació'],
      theory:'El sufix «-ció / -ió» forma noms d\'acció: implementar → implementació; aplicar → aplicació.', example:'avaluar → avaluació; decidir → decisió; organitzar → organització.' },
    { id:'c1-df2', type:'choice', level:'c1', category:'Derivació i flexió',
      question:'Quina paraula derivada amb el prefix «des-» és correcta?',
      text:'El prefix «des-» indica negació o inversió de l\'acció i s\'afegeix directament al radical sense canviar l\'ortografia: des + conèixer = desconèixer. Les formes castellanitzades no existeixen en català.',
      options:['desconèixer (ignorar completament)','desconexar (mala formació)','desconexió (forma castellana)'],
      correct:0, theory:'El prefix «des-» expressa negació o reversió: «desconèixer» (no conèixer), «desfer» (revertir «fer»). Cal usar les arrels catalanes.', example:'desfer / desconèixer / desaparèixer / desmuntar / desacord.' },
    { id:'c1-df3', type:'fill', level:'c1', category:'Derivació i flexió',
      text:'Alguns mots acabats en consonant formen el plural de manera que cal vigilar l\'accentuació i les regles ortogràfiques.',
      question:'Forma el plural correcte del mot indicat:',
      sentence:'Els ___ dels partits es reuniran dimecres per negociar l\'acord.',
      display:'plural de «règim»', answers:['règims'],
      theory:'Els mots plans acabats en consonant formen el plural afegint «-s»: «règim» → «règims». No «règimes».', example:'règim → règims; caràcter → caràcters; síntesi → síntesis.' },
    { id:'c1-df4', type:'choice', level:'c1', category:'Derivació i flexió',
      question:'Quin és el nom d\'agent correcte derivat del verb «traduir»?',
      text:'Els verbs en -uir formen el nom d\'agent en -uctor en català: traduir → traductor, conduir → conductor, produir → productor. La forma amb dièresi no s\'aplica al nom d\'agent.',
      options:['traduïdor','traductor','traduhidor'],
      correct:1,
      theory:'El nom d\'agent de «traduir» és «traductor» (forma culta d\'origen llatí), no «traduïdor». Molts verbs en -ir presenten noms d\'agent irregulars: «conduir» → «conductor», «produir» → «productor», «seduir» → «seductor». Cal evitar les formes analògiques en -ïdor.',
      example:'traduir → traductor / conduir → conductor / produir → productor / seduir → seductor.' },
    { id:'c1-df5', type:'fill', level:'c1', category:'Derivació i flexió',
      text:'El sufix «-ble» forma adjectius a partir de verbs i n\'expressa la possibilitat (allò que es pot fer).',
      question:'Forma l\'adjectiu derivat amb el sufix «-ble» a partir del verb indicat:',
      sentence:'L\'objectiu és ___, però requerirà un esforç considerable.',
      display:'adjectiu derivat d\'«assolir» (que es pot assolir)', answers:['assolible'],
      theory:'El sufix «-ble» forma adjectius de possibilitat passiva: assolir → assolible; sostenir → sostenible.', example:'resoldre → resoluble; comprendre → comprensible.' },
    { id:'c1-df6', type:'writing', level:'c1', category:'Derivació i flexió',
      text:'Dominar les nominalitzacions permet escriure amb la densitat conceptual pròpia del registre acadèmic.',
      question:'A partir dels verbs donats, forma les nominalitzacions i usa-les en una frase acadèmica per a cadascuna.',
      keywords:['avaluar → avaluació','implementar → implementació','analitzar → anàlisi'],
      sample:'L\'avaluació dels resultats ha permès identificar àrees de millora. La implementació de les mesures ha resultat satisfactòria. L\'anàlisi de les dades evidencia una tendència positiva.',
      theory:'Les nominalitzacions permeten condensar informació i elevar el registre. Són la marca principal del discurs acadèmic.', example:'avaluar → «l\'avaluació ha demostrat...» / implementar → «la implementació del projecte...»' },

    // ESTIL INDIRECTE
    { id:'c1-ei1', type:'transform', level:'c1', category:'Estil indirecte',
      text:'En passar del discurs directe a l\'indirecte amb verb introductor en passat, canvien els temps verbals i els marcadors de temps.',
      question:'Transforma en estil indirecte (verb introductor en passat):',
      original:'«La directora va dir: El projecte s\'entregarà demà.»',
      hints:['futur → condicional: s\'entregaria','demà → l\'endemà','La directora va dir que...'],
      sample:'La directora va dir que el projecte s\'entregaria l\'endemà.',
      theory:'Futur → condicional en estil indirecte passat. «Demà» → «l\'endemà» (adverbi de temps adaptat).', example:'«Vindré» → va dir que vindria. / «Ho faré» → va prometre que ho faria.' },
    { id:'c1-ei2', type:'fill', level:'c1', category:'Estil indirecte',
      text:'Quan reportem en passat el que algú deia, el present de la frase original es desplaça cap a un temps passat.',
      question:'Completa la transformació en estil indirecte:',
      sentence:'Va dir: «Estic cansat.» → Va dir que ___ cansat.',
      display:'estar (imperfet, 3a pers. sing.)', answers:['estava'],
      theory:'Present → imperfet en estil indirecte (verb introductor en passat). «Estic» → «estava».', example:'«Treballo molt» → va dir que treballava molt.' },
    { id:'c1-ei3', type:'choice', level:'c1', category:'Estil indirecte',
      question:'Quina transformació a estil indirecte és correcta?',
      text:'En l\'estil indirecte, les preguntes parcials (on, qui, com, quan...) es transformen en subordinades amb el mateix mot interrogatiu però sense «que» introductori. El temps verbal retrocedeix un pas al passat.',
      options:['Va preguntar: «On vius?» → Va preguntar on vivies.','Va preguntar: «On vius?» → Va preguntar que on vius.','Va preguntar: «On vius?» → Va preguntar on viuràs.'],
      correct:0, theory:'Interrogatives indirectes: «preguntar si/on/quan/com...» (sense «que»). El verb passa a imperfet si el verb introductor és en passat.', example:'«Quan arribes?» → Va preguntar quan arribava.' },
    { id:'c1-ei4', type:'transform', level:'c1', category:'Estil indirecte',
      text:'Un imperatiu en estil directe es transforma en una subordinada amb un verb de petició i un canvi de mode.',
      question:'Transforma l\'imperatiu en estil indirecte:',
      original:'«El cap va dir: Envieu l\'informe avui!»',
      hints:['Imperatiu → que + subjuntiu imperfet','«avui» → aquell dia','El cap va demanar/ordenar que...'],
      sample:'El cap va demanar que enviessin l\'informe aquell dia.',
      theory:'Imperatius → «demanar/ordenar que + subjuntiu imperfet» en estil indirecte (verb en passat).', example:'«Veniu!» → Va demanar que vinguessin. / «Escriu-me!» → Va demanar que li escrigués.' },
    { id:'c1-ei5', type:'choice', level:'c1', category:'Estil indirecte',
      question:'Quina transformació de l\'adverbi de temps és correcta?',
      text:'En l\'estil indirecte, els adverbis de temps canvien per adaptar-se al nou context enunciatiu: «avui» → «aquell dia», «ara» → «aleshores», «demà» → «l\'endemà». Mantenir l\'adverbi original és incorrecte quan el verb introductor és en passat.',
      options:['Va dir que vindria avui.','Va dir que vindria aquell dia.','Va dir que venia avui.'],
      correct:1, theory:'«Avui» en estil indirecte (passat) → «aquell dia». «Demà» → «l\'endemà». «Ahir» → «el dia anterior». «Aquí» → «allà».', example:'«Avui» → aquell dia. / «Demà» → l\'endemà. / «Aquí» → allà.' },
    { id:'c1-ei6', type:'fill', level:'c1', category:'Estil indirecte',
      text:'Quan reportem una pregunta de sí o no, cal un verb introductor adequat seguit del nexe corresponent.',
      question:'Tria el marcador introductori correcte:',
      sentence:'«Tens el document?» → Em ___ si tenia el document.',
      display:'marcador d\'interrogativa indirecta de sí/no', answers:['va preguntar','va demanar'],
      theory:'Interrogatives indirectes de sí/no → «preguntar si». Parcials → «preguntar on/quan/com». No s\'usa «dir que» per a preguntes.', example:'Va preguntar si havia acabat. / Va preguntar quan vindria.' },
    { id:'c1-ei7', type:'reading', level:'c1', category:'Estil indirecte',
      text:'En la roda de premsa, la ministra va afirmar que les mesures entrarien en vigor el mes següent. Va explicar que el govern havia treballat durant mesos en la proposta i que confiava que els resultats serien positius. Quan un periodista li va preguntar si hi hauria exempcions, va respondre que aquella decisió s\'estudiava encara.',
      question:'Quins canvis s\'han produït en passar de discurs directe a indirecte?',
      options:['Cap canvi: el text ja era en estil indirecte original','Futur → condicional, present/passat → imperfet/plusquamperfet, adverbis adaptats («el mes següent»)','Només han canviat els pronoms personals'],
      correct:1, theory:'«Entraran» → «entrarien» (cond.); «hem treballat» → «havia treballat» (plusq.); «el proper mes» → «el mes següent» (adverbi adaptat).', example:'Identifica cada canvi de temps verbal al text.' },

    // PASSIVA I IMPERSONAL
    { id:'c1-pi1', type:'choice', level:'c1', category:'Passiva i impersonal',
      question:'Quina és la construcció preferida en català per expressar passiva sense agent?',
      text:'En català, hi ha dues maneres d\'expressar la passiva. Una és més genuïna i preferida; l\'altra sona a traducció. Tria com traduiries al català formal: «El projecte fue aprobado».',
      options:['El projecte va ser aprovat.','Es va aprovar el projecte.','El projecte ha sigut aprovat.'],
      correct:1, theory:'El català prefereix la passiva reflexa (es + verb) quan l\'agent és irrellevant. «Va ser aprovat» és correcte però menys habitual; «ha sigut» és híbrid incorrecte.', example:'Es van prendre mesures. / Es va signar l\'acord. / Es va decidir ajornar.' },
    { id:'c1-pi2', type:'fill', level:'c1', category:'Passiva i impersonal',
      text:'La passiva reflexa amb «es» fa concordar el verb amb allò que rep l\'acció, sense esmentar qui la fa.',
      question:'Completa amb la forma de passiva reflexa correcta:',
      sentence:'___ moltes entrades per al concert en poques hores.',
      display:'vendre (passiva reflexa, plural)', answers:['Es van vendre','S\'han venut'],
      theory:'Passiva reflexa: «es + verb». Quan el CD és plural, el verb concorda: «Es van vendre moltes entrades» (plural).', example:'Es van vendre totes les entrades. / Es van aprovar les mesures.' },
    { id:'c1-pi3', type:'choice', level:'c1', category:'Passiva i impersonal',
      question:'Quina construcció és la més adequada per a una norma general en text institucional?',
      text:'En textos institucionals i normatius, la construcció impersonal amb «es» aporta objectivitat evitant designar un subjecte específic: és la marca d\'un text oficial i formal.',
      options:['Els estudiants han d\'entregar els treballs abans del dia 15.','S\'han d\'entregar els treballs abans del dia 15.','Tu has d\'entregar els treballs el dia 15.'],
      correct:1, theory:'Per a normes generals, la impersonal amb «es/se» evita mencionar l\'agent i dóna un to objectiu i institucional.', example:'S\'ha de presentar la documentació. / Es recomana llegir les instruccions.' },
    { id:'c1-pi4', type:'transform', level:'c1', category:'Passiva i impersonal',
      text:'La passiva perifràstica (ser + participi) permet posar el focus en l\'objecte tot mantenint l\'agent explícit.',
      question:'Reformula en passiva perifràstica formal amb l\'agent explícit:',
      original:'«El jurat va concedir el premi a la millor novel·la.»',
      hints:['el premi → subjecte de la passiva','va ser concedit pel jurat','participi concordat amb el subjecte femení'],
      sample:'El premi va ser concedit pel jurat a la millor novel·la.',
      theory:'Passiva perifràstica: subjecte pacient + ser conjugat + participi (concordat en gènere i nombre) + per + agent.', example:'El document va ser signat pel president.' },
    { id:'c1-pi5', type:'choice', level:'c1', category:'Passiva i impersonal',
      question:'Quina frase usa incorrectament la passiva?',
      text:'La passiva pronominal («es van publicar») no admet la combinació de dos auxiliars alhora. Identifica quina de les opcions barreja incorrectament dos elements passius.',
      options:['Es van publicar els resultats ahir.','Va ser decidit no fer canvis.','Es van ser aprovades les mesures.'],
      correct:2, theory:'«Es van ser aprovades» combina impropriament passiva reflexa i perifràstica. Cal usar-ne una sola: «Es van aprovar» O «Van ser aprovades».', example:'Correcte: Es van aprovar / Van ser aprovades. Incorrecte: *Es van ser aprovades.' },
    { id:'c1-pi6', type:'fill', level:'c1', category:'Passiva i impersonal',
      text:'Les construccions impersonals amb «es» expressen normes o prohibicions sense identificar un subjecte concret.',
      question:'Omple amb la forma impersonal correcta:',
      sentence:'En aquest museu no ___ fer fotografies amb flaix.',
      display:'impersonal amb «es» + infinitiu (no permetre)', answers:['es permet','es deixa','es pot'],
      theory:'Impersonal normativa: «no es + verb conjugat» o «no es pot + infinitiu». El verb va en singular quan no hi ha subjecte gramatical explícit.', example:'No es permet fumar. / Es recomana reservar. / No es pot aparcar aquí.' },
    { id:'c1-pi7', type:'reading', level:'c1', category:'Passiva i impersonal',
      text:'L\'acord va ser signat per tots els membres del consell. En la mateixa sessió, es van aprovar tres resolucions addicionals i es va decidir convocar una nova reunió. Cal destacar que no es va plantejar cap objecció formal per part dels assistents.',
      question:'Quines construccions passives i impersonals s\'usen al text i per a quina funció?',
      options:['Només passiva perifràstica','Passiva perifràstica per ressaltar l\'agent; passiva reflexa/impersonal per a accions generals sense agent','Només construccions impersonals'],
      correct:1, theory:'«Va ser signat pel consell» (perifràstica: agent rellevant) / «Es van aprovar», «es va decidir», «es va plantejar» (reflexa: agent irrellevant).', example:'Perifràstica quan l\'agent és important; reflexa quan no ho és.' },

    // +1 exercici per a categories existents amb 5 exercicis
    { id:'c1-arg6', type:'choice', level:'c1', category:'Argumentació',
      question:'Quina estratègia argumentativa s\'usa en: «Certament, hi ha arguments a favor. Tanmateix, les evidències apunten en la direcció contrària»?',
      text:'La concessió retòrica és una estratègia argumentativa que reconeix la validesa parcial de la posició contrària per reforçar la pròpia. Estructura habitual: «Certament/És cert que X. Tanmateix/Tot i això, Y».',
      options:['Refutació directa sense concessions','Concessió retòrica seguida de contraargument','Simple enumeració de dues posicions'],
      correct:1, theory:'La concessió retòrica («certament») reconeix la posició contrària sense abandonar la pròpia, i el contraargument («tanmateix») reorienta el discurs. És una marca de maduresa argumentativa.', example:'«És cert que X. No obstant, cal tenir present que Y.»' },
    { id:'c1-crit6', type:'choice', level:'c1', category:'Comprensió crítica',
      question:'Quin recurs usa l\'autor en: «Paradoxalment, com menys s\'hi pensa, millor es resol»?',
      text:'Una paradoxa aparent presenta dues afirmacions que semblen contradir-se però que, analitzades en profunditat, revelen una veritat no òbvia. L\'adverbi «paradoxalment» és un senyal que en avisa.',
      options:['Una contradicció lògica sense fonament','Una paradoxa aparent que suggereix que la reflexió excessiva és contraproduent','Una conclusió basada en dades empíriques'],
      correct:1, theory:'La paradoxa aparent («paradoxalment + afirmació contraintuïtiva») és un recurs que capta l\'atenció i suggereix una veritat no òbvia. Al C1 cal identificar la intenció darrere del recurs retòric.', example:'«Paradoxalment, la simplicitat és el concepte més complex d\'assolir.»' },
    { id:'c1-pro6', type:'choice', level:'c1', category:'Producció formal',
      question:'Quina fórmula de tancament és la més adequada per a un informe acadèmic?',
      text:'El tancament d\'un informe acadèmic recull la tesi principal sense afegir idees noves, usa un verb epistèmic impersonal i evita completament el registre col·loquial i les referències personals.',
      options:['Espero que us hagi agradat el que he explicat.','Les consideracions anteriors permeten concloure que cal adoptar un enfocament integral.','Bé, ja ho teniu. Espero que serveixi.'],
      correct:1, theory:'El tancament d\'un informe formal recull la tesi amb un verb epistèmic impersonal, sense referències personals ni registre col·loquial.', example:'«Les dades permeten afirmar que...» / «Es conclou, per tant, que...»' },
    { id:'c1-rel6', type:'fill', level:'c1', category:'Oracions de relatiu',
      question:'Completa amb el pronom relatiu adequat per a lloc en registre formal:',
      text:'Per a complements de lloc en registre formal s\'usa «en la qual» (o «al qual» si porta a + masculí), que és més precís que «on», tot i que «on» també és correcte.',
      sentence:'La sala ___ es va celebrar la cerimònia era d\'un luxe inusitat.',
      display:'relatiu de lloc', answers:['en la qual','on','a la qual','en què'],
      theory:'Relatius de lloc: «on» (estàndard i col·loquial), «en la qual / a la qual» (registre culte formal). En textos acadèmics es prefereix «en la qual».', example:'La ciutat on va néixer. / La sala en la qual es va celebrar.' },



    // +1 per categoria C1
    { id:'c1-sa7', type:'fill', level:'c1', category:'Subjuntiu avançat',
      text:'Les construccions concessives intensives com «per molt que» regeixen un mode verbal determinat.',
      question:'Completa amb la forma correcta del subjuntiu:',
      sentence:'Per molt que ho ___, no ho entendrà.',
      display:'explicar (3a pers. sing. subjuntiu present)', answers:['expliqui'],
      theory:'«Per molt que» + subjuntiu expressa una concessió hipotètica: sigui quin sigui el grau de l\'acció, el resultat no canvia.', example:'Per molt que corris, no arribaràs. / Per molt que estudii, suspendrà.' },
    { id:'c1-cc7', type:'choice', level:'c1', category:'Connectors concessius',
      text:'No tots els connectors concessius expressen el mateix grau de realitat: alguns plantegen un fet constatat i d\'altres una hipòtesi.',
      question:'Quin connector introdueix una concessió real (no hipotètica)?',
      options:['Encara que + subjuntiu','Tot i que + indicatiu','Per molt que + subjuntiu'],
      correct:1, theory:'«Tot i que» + indicatiu expressa una concessió de fet real. «Encara que» i «per molt que» + subjuntiu expressen concessions hipotètiques o subjectives.', example:'Tot i que plou, sortim. (fet real) / Encara que plogués, sortiríem. (hipotètic)' },
    { id:'c1-lf7', type:'transform', level:'c1', category:'Lèxic formal',
      text:'Les mostres col·loquials com «la cosa és que» no tenen cabuda en un text acadèmic.',
      question:'Reformula en registre acadèmic formal:',
      original:'«La cosa és que no tenim prous dades per dir res.»',
      hints:['cosa → qüestió / fet / circumstància','dir res → extreure conclusions / afirmar','no tenim prous dades → la insuficiència de dades'],
      sample:'La insuficiència de dades disponibles impedeix extreure conclusions definitives.',
      theory:'En registre acadèmic s\'eviten paraules buit (cosa, tema) i s\'usen substantius precisos. Els verbs també s\'han de formalitzar.', example:'La qüestió rau en... / El fet és que... / Cal destacar que...' },
    { id:'c1-ff7', type:'choice', level:'c1', category:'Frases fetes',
      text:'Les frases fetes tenen un significat figurat que no es dedueix del sentit literal de les paraules.',
      question:'Quina és la interpretació correcta de «posar-se les piles»?',
      options:['Comprar piles per a un dispositiu electrònic','Espavilar-se i posar-se a treballar amb energia','Preparar-se físicament per a una activitat esportiva'],
      correct:1, theory:'«Posar-se les piles» és una locució verbal que significa activar-se, espabilar-se, posar esforç en una tasca. El seu ús és col·loquial.', example:'«Posa\'t les piles o no acabaràs mai el projecte.»' },
    { id:'c1-df7', type:'fill', level:'c1', category:'Derivació i flexió',
      text:'Molts verbs generen un substantiu abstracte que designa el procés o la facultat associada a l\'acció.',
      question:'Forma el substantiu abstracte a partir del verb indicat:',
      sentence:'La ___ del text és imprescindible per comprendre\'l bé.',
      display:'comprendre → substantiu abstracte de procés', answers:['comprensió'],
      theory:'El sufix -ió/-sió/-ció forma substantius de procés o resultat a partir de verbs: comprendre→comprensió, decidir→decisió, actuar→actuació.', example:'comprendre→comprensió / percebre→percepció / definir→definició' },
    { id:'c1-pf7', type:'writing', level:'c1', category:'Producció formal',
      text:'Una conclusió formal recull el fil de l\'informe, hi posa un matís i apunta cap a una acció recomanada.',
      question:'Redacta una conclusió breu (3-4 frases) per a un informe sobre l\'ús del català en entorns laborals. El text ha de sintetitzar, valorar i apuntar cap a una recomanació. Utilitza expressions pròpies de les conclusions formals.',
      keywords:['expressions de síntesi: en definitiva / tot plegat / les dades permeten afirmar...','matís o contrast: cal destacar que / malgrat els avenços / no obstant això','recomanació: es recomana / cal que / s\'imposa una acció...'],
      sample:'En definitiva, els resultats indiquen que l\'ús del català en entorns laborals ha augmentat moderadament. Cal destacar, però, que calen polítiques de foment més efectives i una acció coordinada entre administracions i empreses.',
      theory:'La conclusió d\'un informe recull la tesi principal sense introduir idees noves, destaca els resultats clau i apunta cap a recomanacions. Al C1, ha de mostrar domini de les estructures impersonals i dels connectors de síntesi.', example:'En definitiva... / Els resultats permeten concloure que... / Cal destacar que...' },

    // ── FRASES FETES C1 — Dificultat augmentada ──────────────────────

    { id:'c1-ff8', type:'choice', level:'c1', category:'Frases fetes',
      question:'Quina frase feta expressa millor la idea que algú va ignorar deliberadament tots els advertiments?',
      text:'El responsable ___ a totes les advertències del comitè de seguretat. Les tres frases fetes de les opcions descriuen actituds diferentes: ignorar activament, perdre el seguiment, o tolerar una falta.',
      options:['va fer el sord','va perdre el fil','va fer els ulls grossos'],
      correct:0,
      theory:'«Fer el sord» significa ignorar deliberadament una petició o avís (negar-se a «escoltar»). «Fer els ulls grossos» és diferent: implica haver vist una falta però decidir no sancionar-la. «Perdre el fil» és perdre el seguiment d\'un raonament.',
      example:'Va fer el sord a totes les crítiques i va continuar endavant amb el seu pla original.' },

    { id:'c1-ff9', type:'choice', level:'c1', category:'Frases fetes',
      question:'Quina diferència de significat hi ha entre «fer el sord» i «fer els ulls grossos»?',
      text:'Dues frases fetes poden semblar sinònimes però tenir matisos de significat importants. Fixa\'t en el sentit concret de cada acció: ignorar una petició no és el mateix que tolerar una irregularitat.',
      options:[
        'Són sinònims perfectes: les dues expressen ignorar alguna cosa deliberadament.',
        '«Fer el sord» és ignorar un avís o petició; «fer els ulls grossos» és haver vist una falta però decidir no sancionar-la.',
        '«Fer els ulls grossos» és la forma col·loquial de «fer el sord», pròpia del registre oral.'
      ],
      correct:1,
      theory:'La distinció és semànticament rellevant: «fer el sord» → no vull rebre el missatge (negar-se a percebre). «Fer els ulls grossos» → he vist la irregularitat però la perdono o la deixo passar conscientemente.',
      example:'«Va fer el sord a les meves crides d\'ajuda.» / «El supervisor va fer els ulls grossos davant l\'error del becari.»' },

    { id:'c1-ff10', type:'choice', level:'c1', category:'Frases fetes',
      question:'Quina expressió indica que el model de gestió té greus problemes estructurals i és a punt de col·lapsar?',
      text:'«Fer aigua» s\'aplica a sistemes o organitzacions que presenten deficiències greus. La metàfora és d\'un vaixell que fa aigua pels forats i és a punt d\'enfonsar-se.',
      text:'Des que va canviar la direcció, el sistema intern ___.',
      options:['fa mans i mànigues','fa aigua','fa el sord'],
      correct:1,
      theory:'«Fer aigua» significa tenir fallades greus, estar a punt de fracassar o col·lapsar. «Fer mans i mànigues» és l\'esforç màxim per aconseguir alguna cosa (sentit positiu). «Fer el sord» és ignorar.',
      example:'El sistema de finançament fa aigua des de fa anys i cal una reforma urgent.' },

    { id:'c1-ff11', type:'fill', level:'c1', category:'Frases fetes',
      text:'El català té diverses locucions per dir que algú controla del tot una situació. Recorda-les senceres.',
      question:'Completa amb la locució correcta: «Amb aquell acord estratègic, la cooperativa ja ___ i ningú no li podia imposar res.»',
      sentence:'Amb aquell acord estratègic, la cooperativa ja ___ i ningú no li podia imposar res.',
      display:'locució que significa «tenir tot el control de la situació»',
      answers:['tenia la paella pel mànec','tallava el bacallà'],
      theory:'«Tenir la paella pel mànec» expressa que algú controla completament una situació. «Tallar el bacallà» és similar però emfatitza l\'autoritat de decisió dins un grup. Totes dues són vàlides aquí.',
      example:'Des que va assumir la presidència, ella tenia la paella pel mànec i ningú no gosava contradir-la.' },

    { id:'c1-ff12', type:'choice', level:'c1', category:'Frases fetes',
      question:'Quin refrany s\'aplica a una persona que vol gestionar deu projectes a la vegada i cap no li surt bé?',
      text:'Els refranys expressen saviesa popular de manera concisa. «De mica en mica» parla de la constància, «qui molt abarca» parla de la dispersió d\'esforços, i «qui dia passa» parla del pas del temps.',
      options:[
        'De mica en mica s\'omple la pica.',
        'Qui molt abarca, poc estreny.',
        'Qui dia passa, any empeny.'
      ],
      correct:1,
      theory:'«Qui molt abarca, poc estreny» critica la dispersió d\'esforços: voler fer massa coses alhora porta a no fer-ne cap bé. «De mica en mica» elogia la constància progressiva. «Qui dia passa, any empeny» parla de la rapidesa amb què passa el temps.',
      example:'Ha obert tres negocis alhora i tots van malament. Qui molt abarca, poc estreny.' },

    { id:'c1-ff13', type:'choice', level:'c1', category:'Frases fetes',
      question:'Quin refrany defensa que és millor tenir una cosa petita però segura que arriscar-se per una de gran i incerta?',
      text:'Identifica quin dels tres refranys expressa el principi de preferir la certesa petita a la possibilitat gran. Fixa\'t en la imatge que usa cada refrany per transmetre la seva idea.',
      options:[
        'Qui dia passa, any empeny.',
        'Més val un ocell a la mà que cent volant.',
        'El qui avisa no és traïdor.'
      ],
      correct:1,
      theory:'«Més val un ocell a la mà que cent volant» defensa la prudència: allò que tens assegurat val més que una promesa incerta, per gran que sigui. S\'usa per defensar opcions conservadores en negociació o presa de decisions.',
      example:'Podien arriscar-se per un contracte milionari incert, però van preferir renovar el client actual: més val un ocell a la mà que cent volant.' },

    { id:'c1-ff14', type:'reading', level:'c1', category:'Frases fetes',
      text:'La directora no té pèls a la llengua quan es tracta de dir el que pensa. Ahir, en plena reunió del consell, va declarar que el pla pressupostari feia aigua i que calia donar la volta a la truita abans no fos massa tard. Alguns membres no es van donar per al·ludits, però la majoria va entendre que el missatge anava directament per a ells.',
      question:'Quantes locucions idiomàtiques apareixen al text i quines són?',
      options:[
        'Dues: «no tenir pèls a la llengua» i «fer aigua».',
        'Quatre: «no tenir pèls a la llengua», «fer aigua», «donar la volta a la truita» i «no donar-se per al·ludit».',
        'Tres: «no tenir pèls a la llengua», «donar la volta a la truita» i «fer el sord».'
      ],
      correct:1,
      theory:'Les quatre locucions presents: 1) «no tenir pèls a la llengua» (parlar sense embuts); 2) «fer aigua» (tenir greus problemes); 3) «donar la volta a la truita» (capgirar la situació); 4) «no donar-se per al·ludit» (fer com si no anés amb tu). «Fer el sord» no apareix al text.',
      example:'Per identificar locucions: cerca grups de paraules amb significat figurat (no literal) que funcionen com una unitat.' },

    { id:'c1-ff15', type:'fill', level:'c1', category:'Frases fetes',
      text:'Algunes paraules demanen un verb concret per acompanyar-les (col·locació): no qualsevol sinònim hi encaixa.',
      question:'Tria la col·locació lèxica correcta: «La portaveu va ___ la paraula per respondre les acusacions en la roda de premsa.»',
      sentence:'La portaveu va ___ la paraula per respondre les acusacions en la roda de premsa.',
      display:'verb de la col·locació amb «la paraula»',
      answers:['prendre','agafar'],
      theory:'«Prendre la paraula» és la col·locació estàndard en contextos formals i periodístics. «Agafar la paraula» és admès en registre col·loquial. En textos formals es prefereix sempre «prendre».',
      example:'El president de la comissió va prendre la paraula per tancar el debat. / En el parlament, es demana la paraula abans de prendre-la.' },

    { id:'c1-ff16', type:'choice', level:'c1', category:'Frases fetes',
      question:'Quin és el significat precís de «ficar-se en camisa de onze vares»?',
      text:'«Ficar-se en camisa de onze vares» prové de la imatge d\'algú que intenta entrar en una camisa massa gran per a ell, generant-se dificultats innecessàries. Quin comportament descriu?',
      options:[
        'Fer un gran esforç per superar un obstacle molt difícil.',
        'Involucrar-se innecessàriament en una situació complicada que portarà problemes.',
        'Tenir molta experiència en un àmbit complex i especialitzat.'
      ],
      correct:1,
      theory:'«Ficar-se en camisa de onze vares» significa posar-se en dificultats per haver-se involucrat en alguna cosa que no calia. La imatge és d\'una camisa desproporcionadament gran i embolicada de dur. L\'accent és en la imprudència d\'involucrar-s\'hi.',
      example:'En publicar aquell comentari polèmic, es va ficar en camisa de onze vares i va haver de fer declaracions durant setmanes.' },

    { id:'c1-ff17', type:'transform', level:'c1', category:'Frases fetes',
      text:'Un informe institucional no admet locucions col·loquials: cal traduir-ne el sentit a un llenguatge objectiu i precís.',
      question:'Reformula el paràgraf substituint les locucions col·loquials per expressions formals adequades per a un informe institucional.',
      original:'«L\'empresa va fer mans i mànigues per tirar endavant el projecte, però el model feia aigua i la direcció va haver de donar la volta a la truita.»',
      hints:[
        '«fer mans i mànigues» → «mobilitzar tots els recursos disponibles / desplegar el màxim d\'esforços»',
        '«tirar endavant» → «implementar / dur a terme / fer avançar»',
        '«fer aigua» → «presentar disfuncions estructurals / mostrar un rendiment insuficient»',
        '«donar la volta a la truita» → «revertir la situació / reformular l\'estratègia de manera radical»'
      ],
      sample:'L\'empresa va mobilitzar tots els recursos disponibles per implementar el projecte; no obstant això, el model va presentar disfuncions estructurals que van obligar la direcció a reformular l\'estratègia de manera radical.',
      theory:'En textos formals i institucionals, les locucions col·loquials s\'han de substituir per expressions neutres o tècniques. La comunicació institucional prioritza la precisió i l\'objectivitat sobre la vivacitat expressiva.',
      example:'Col·loquial → Formal: «fer mans i mànigues» → «desplegar el màxim d\'esforços» / «fer aigua» → «presentar disfuncions estructurals» / «donar la volta a la truita» → «revertir la situació».' },

    { id:'c1-ff18', type:'reading', level:'c1', category:'Frases fetes',
      text:'En les negociacions laborals, la patronal va decidir anar pel dret: va posar les cartes sobre la taula i va deixar clar qui tallava el bacallà. Els sindicats, que no s\'esperaven tanta contundència, van fer mans i mànigues per contrarestar la proposta, però eren conscients que tenien poca tela per tallar. Finalment, com que no volien sortir perdent, van optar per acceptar una part de les condicions: al cap i a la fi, més val un ocell a la mà que cent volant.',
      question:'Quina locució del text indica que algú va ser molt directe i transparent en les seves intencions?',
      options:[
        'Únicament «tallar el bacallà».',
        '«Anar pel dret» i «posar les cartes sobre la taula».',
        '«Fer mans i mànigues» i «tenir poca tela per tallar».'
      ],
      correct:1,
      theory:'«Anar pel dret» (actuar sense rodeos) i «posar les cartes sobre la taula» (ser transparent sobre les intencions pròpies) expressen totes dues directesa i transparència. «Tallar el bacallà» indica poder de decisió, no transparència.',
      example:'«Anar pel dret» i «posar les cartes sobre la taula» s\'usen sovint juntes per emfatitzar una actitud franca i sense subterfugis.' },

    { id:'c1-ff19', type:'fill', level:'c1', category:'Frases fetes',
      text:'Cada locució col·loquial té un equivalent formal que en conserva el sentit però encaixa en un text acadèmic.',
      question:'La locució «no tenir pèls a la llengua» és col·loquial. Reformula-la per incloure-la en un informe acadèmic sobre comunicació corporativa.',
      sentence:'La cultura de la transparència requereix professionals que s\'expressin amb ___ i que no evadin les qüestions difícils.',
      display:'expressió formal equivalent a «no tenir pèls a la llengua»',
      answers:['total franquesa','plena franquesa','franquesa i claredat','claredat i franquesa','franquesa','sinceritat'],
      theory:'«No tenir pèls a la llengua» → en registre formal: «expressar-se amb total franquesa», «parlar sense eufemismes», «adoptar una comunicació directa». Mai s\'usa la locució literal en un text acadèmic o institucional.',
      example:'Formal: «Expressar-se amb total franquesa i sense eufemismes.» / Molt formal: «Adoptar una comunicació directa i transparent, sense ambigüitats.»' },

    { id:'c1-ff20', type:'writing', level:'c1', category:'Frases fetes',
      text:'El repte d\'aquest exercici és integrar el color expressiu de les locucions sense trencar el registre formal del text.',
      question:'Escriu un paràgraf argumentatiu de 4-5 frases en registre formal sobre la gestió d\'una crisi empresarial. Usa almenys dues locucions col·loquials però adapta-les al registre formal o substitueix-les per l\'equivalent precís.',
      keywords:[
        'registre acadèmic: locucions adaptades o substituïdes per equivalents formals',
        'estructura: argument + matís + conclusió',
        'almenys un connector de contrast i un de conclusió'
      ],
      sample:'Quan un projecte comença a presentar disfuncions estructurals, la temptació és desplegar el màxim d\'esforços per mantenir-lo sense qüestionar-ne les bases. No obstant això, sovint la solució no consisteix a apedaçar el model existent, sinó a reformular-lo de manera radical. Les organitzacions que han sabut revertir la seva estratègia en moments crítics han demostrat que la capacitat d\'adaptació és més valuosa que la persistència en l\'error. En definitiva, qui ostenta l\'autoritat decisòria ha de saber distingir entre l\'esforç necessari i la resistència inútil.',
      theory:'Al C1, la competència fraseològica plena implica saber quan activar una locució i quan transformar-la per al registre. Un text C1 demostra consciència metalingüística: l\'alumne tria conscientment entre la forma expressiva i la forma precisa.',
      example:'«Fer mans i mànigues» → text formal: «desplegar el màxim d\'esforços» / «Donar la volta a la truita» → «reformular l\'estratègia de manera radical» / «Tenir la paella pel mànec» → «ostenta l\'autoritat decisòria».' },

    // ── ALTRES CATEGORIES C1 — Dificultat augmentada ─────────────────

    { id:'c1-sa8', type:'choice', level:'c1', category:'Subjuntiu avançat',
      question:'Tria la forma verbal correcta. «Per molt que ___ l\'informe, no convencerà el consell sense dades sòlides.»',
      text:'«Per molt que» és una conjunció concessiva que sempre va seguida de subjuntiu, independentment del temps verbal del verb principal.',
      options:['presenti','presenta','presentarà'],
      correct:0,
      theory:'«Per molt que» expressa una concessió hipotètica graduada i exigeix sempre subjuntiu, a diferència de «tot i que» (que pot portar indicatiu si és un fet real). «Per molt que» + subjuntiu = malgrat qualsevol grau de l\'acció, el resultat no canvia.',
      example:'Per molt que ho expliqui, no l\'entendrà. / Per molt que treballin, no acabaran a temps.' },

    { id:'c1-sa9', type:'fill', level:'c1', category:'Subjuntiu avançat',
      text:'Quan plantegem una hipòtesi impossible referida al passat, la part introduïda per «si» demana un temps verbal compost concret.',
      question:'Completa amb la forma correcta per a una condicional irreal en el passat:',
      sentence:'Si el comitè ___ (revisar) l\'informe amb prou antelació, els errors s\'haurien detectat abans.',
      display:'revisar — plusquamperfet de subjuntiu (3a pers. sg.)',
      answers:['hagués revisat'],
      theory:'Condicional irreal en el passat: si + plusquamperfet de subjuntiu (hagués/haguessis/hagués/haguéssim/haguéssiu/haguessin + participi). L\'apòdosi porta el condicional compost: «haurien + participi».',
      example:'Si hagués sabut la veritat, hauria actuat d\'una altra manera. / Si haguéssiu avisat, ho hauríem evitat.' },

    { id:'c1-cc8', type:'choice', level:'c1', category:'Connectors concessius',
      question:'Quina diferència hi ha entre «si bé» i «tot i que» en els textos formals?',
      text:'No tots els connectors concessius són intercanviables. El mode verbal que regeixen i el grau de formalitat els diferencien, especialment en textos acadèmics i institucionals.',
      options:[
        'No hi ha diferència: s\'usen indistintament en tots els registres.',
        '«Si bé» porta indicatiu i és més marcat acadèmicament; «tot i que» és neutre i admet indicatiu o subjuntiu.',
        '«Si bé» porta sempre subjuntiu i «tot i que» porta sempre indicatiu.'
      ],
      correct:1,
      theory:'«Si bé» és el connector concessiu de registre més formal i analític; porta indicatiu i aporta un to distanciat i objectiu. «Tot i que» és neutre i vàlid en tots els registres; admet indicatiu (fet real) o subjuntiu (hipòtesi).',
      example:'«Si bé els resultats milloren, persisteix la incertesa.» (acadèmic) / «Tot i que els resultats milloren, cal prudència.» (neutre)' },

    { id:'c1-arg7', type:'reading', level:'c1', category:'Argumentació',
      text:'«Si permetem que els joves abandonin els estudis obligatoris, demà tindrem una societat analfabeta. Per tant, és imperatiu reforçar els mecanismes de control i sanció als centres educatius.»',
      question:'Quina fal·làcia argumentativa conté aquest raonament?',
      options:[
        'Argumentum ad hominem: ataca la persona en lloc de l\'argument.',
        'Pendent lliscant: pressuposa que una acció menor porta inevitablement a un resultat extrem sense justificar la cadena causal.',
        'Fal·làcia de la falsa dicotomia: presenta dues opcions com les úniques possibles.'
      ],
      correct:1,
      theory:'La fal·làcia del «pendent lliscant» pressuposa que un pas moderat portarà inevitablement a una conseqüència extrema (aquí: abandó escolar → analfabetisme total), sense justificar els passos intermedis. Al C1 cal identificar i evitar aquesta estructura en la pròpia argumentació.',
      example:'Estructura pendent lliscant: «Si X → inevitablement → Y extrem». La detecció requereix preguntar: on és la justificació de cada pas de la cadena causal?' },

    { id:'c1-lf8', type:'transform', level:'c1', category:'Lèxic formal',
      text:'L\'estil acadèmic comprimeix oracions verbals en estructures nominals més denses i objectives.',
      question:'Transforma la frase verbal senzilla en una oració nominal densa pròpia del registre acadèmic.',
      original:'«El govern va decidir incrementar els impostos perquè volia reduir el dèficit.»',
      hints:[
        '«va decidir incrementar» → «la decisió d\'increment»',
        '«volia reduir» → «amb l\'objectiu de reducció de»',
        'subjecte impersonal + passiva reflexa: «La decisió d\'increment fiscal va ser adoptada...»'
      ],
      sample:'La decisió d\'increment fiscal va ser adoptada amb l\'objectiu de reducció del dèficit públic.',
      theory:'La nominalització encadenada (verb → nom + nom complement) és la marca distintiva del registre acadèmic dens. Redueix el nombre de verbs conjugats i augmenta la densitat informativa per sintagma.',
      example:'«van decidir incrementar» → «la decisió d\'increment» / «volia reduir» → «amb l\'objectiu de reducció de».' },

    { id:'c1-pi8', type:'choice', level:'c1', category:'Passiva i impersonal',
      question:'Quina frase usa correctament la passiva reflexa amb concordança de nombre?',
      text:'En la passiva reflexa, el verb concorda en nombre amb el nom que el segueix (el subjecte pacient): «es van prendre mesures» (plural), «es va prendre una mesura» (singular).',
      options:[
        'Es va prendre mesures dràstiques per resoldre la situació.',
        'Es van prendre mesures dràstiques per resoldre la situació.',
        'Se van prendre mesures dràstiques per resoldre la situació.'
      ],
      correct:1,
      theory:'En la passiva reflexa (es + verb), el verb concorda en nombre amb el CD: «mesures» és plural → «es van prendre». La forma «es va prendre» seria correcta si el CD fos singular: «es va prendre una mesura». «Se» en lloc de «es» davant de verb conjugat és un castellanisme a evitar.',
      example:'Es va aprovar la mesura (CD sing.) / Es van aprovar les mesures (CD pl.) / *Se van prendre → forma incorrecta.' },

  ]
};
