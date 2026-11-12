// La teoria de l'A1 en castellà i en anglès, per a qui ha triat les explicacions en una
// d'aquestes llengües (abast B, decisió de l'usuari del 10/11/2026). Aquí només hi ha el que
// es tradueix: la resta la posa el català de THEORY (data.js) en pintar-la (teoriaCosHTML,
// a index.html). Surt només amb IDIOMES_ACTIU; si aquest fitxer no arriba, tot en català.
// · nom: la traducció del nom del tema, que surt entre parèntesis al costat del català.
// · sections: les mateixes que a THEORY i en el mateix ordre, amb title, body i table.
// · A les taules, null vol dir «la cel·la de l'original»: el català que s'aprèn no es copia
//   i així no es pot desajustar. Una taula sense rows té totes les files en català.
// · Els exemples no hi són: sempre en català.
// · El català citat a les explicacions, tal qual: entre «» en castellà i entre ‘’ en anglès.
// Cada tema, revisat per l'usuari abans d'entrar-hi (12/11: «Salutacions»).
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
          title: 'A request and a thank-you',
          body: "<p>Ask for things with ‘si us plau’ or ‘per favor’. Say thank you with ‘gràcies’, and reply to thanks with ‘de res’. To get someone's attention or to apologise, you can say ‘perdona’.</p>",
        },
        {
          title: 'A sample conversation',
        },
      ],
    },
  },
};
