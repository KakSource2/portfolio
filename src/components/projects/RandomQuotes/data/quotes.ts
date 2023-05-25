type TypeQuotes = {
    id: number,
    quote_es: string,
    quote_en: string,
    author?: string
}[]

//The things you think about determine the quality of your mind.
// You soul takes on the color of your thoughts - Marcus Aurelius
// “The price good men pay for indifference to public affairs is to be ruled by evil men.” Plato
//Lo que no se ve es mas grande que lo que si se ve.
//Great minds discuss ideas, average minds discuss events,s mall minds discuss people.
//"If I am often seen at the theater, people will cease to notice me." - Napoleon

const Quotes: TypeQuotes = [
    {
      id: 1,
      quote_es: "No permitas que el internet te apure, nadie postea sus fracasos",
      quote_en:
        "Don't let the internet rush you, no one is posting their failures.",
    },
    {
      id: 2,
      quote_es: "¿Por qué dejar para mañana lo que puedes hacer hoy?",
      quote_en: "Why whould you leave for tomorrow that what you can do today",
    },
    {
      id: 3,
      quote_es:
        "Cuando la vida parece que apesta para ti, recuerda que hay alguien sentado del otro lado sacándole todo el jugo.",
      quote_en:
        "When life seems to suck for you, remember there's another person sitting at the other end of the stick sucking all the juice.",
    },
    {
      id: 4,
      quote_es:
        "Tiempos difíciles crean hombres fuertes, hombres fuertes crean buenos tiempos, buenos tiempos crean hombres débiles y finalmente hombres débiles crean tiempos difíciles.",
      quote_en:
        "Hard times makes men strong, strong men create good times, good times create weak men and finnally weak men create hard times.",
    },
    {
      id: 5,
      quote_es:
        "Tu peor enemigo siempre será tu mente sino la controlas, no solo porque es quien conoce tus debilidades, sino porque es quien las crea. – Buda",
      quote_en:
        "Your worst enemy will always be your mind if you don't control it, not only because he knows your weaknesess, but because it is whom creates it",
    },
    {
      id: 6,
      quote_es: "El silencio es sabio. Observa, escucha y luego actúa.",
      quote_en: "The silence is wise.",
    },
    {
      id: 7,
      quote_es: "Perseguir el amor y la aprobación es una manera segura de perder ambos",
      quote_en:
        "Seeking love and approval is a sure way to lose the awareness of both.",
    },
    {
      id: 8,
      quote_es: "La tuerca que chilla es la que consigue la grasa",
      quote_en: "The squeaky wheel gets the grease.",
      author: 'Dan Pena'
    },
    {
      id: 9,
      quote_es: "Las almas se reconocen por su vibración, no por su apariencia.",
      quote_en: "The souls are recognized by their vibration, not by their appearence",
    },
    {
      id: 10,
      quote_es: "Aquellos que no recuerdan el pasado estan condenados a repetirlo",
      quote_en:
        "Those who do not remember the past are condemned to repeat it",
        author: 'Santayana'
    },
    {
      id: 11,
      quote_es:
        "Cuando una flor no florece, arreglas el ambiente en el cual crece, no a la flor.",
      quote_en: "",
    },
    {
      id: 12,
      quote_es:
        "Dicen que es más oscuro antes del anochecer, y que las estrellas brillan más en las noches más oscuras.",
      quote_en: "",
    },
    {
      id: 13,
      quote_es: "",
      quote_en:
        "No one wins in the end. We all age and die so fast, we only salvage what we can in our short time here -TechLead",
    },
    {
      id: 14,
      quote_es: "",
      quote_en:
        "Sometimes you have to take one step back to take two step forwards.",
    },
    {
      id: 15,
      quote_es: "",
      quote_en:
        "Great minds discuss ideas, average minds discuss events, small minds discuss people",
    },
    {
      id: 16,
      quote_es: "",
      quote_en: "If you're not failing, you're not trying hard enough",
    },
    {
      id: 17,
      quote_es: "",
      quote_en:
        "Sucking at something, is the first step to being sort of good at something",
    },
    {
      id: 18,
      quote_es:
        "Si estás pasando por un infierno, sigue adelante. ¿Por qué pararías en el infierno?",
      quote_en: "",
    },
    {
      id: 19,
      quote_es: "Siempre que reprimes algo, volverá a brotar una y otra vez.",
      quote_en: "",
    },
    {
      id: 20,
      quote_es:
        "Una vez rota la inocencia no se puede volver atrás, solo se puede ir hasta la iluminación...",
      quote_en: "",
    },
    {
      id: 21,
      quote_es:
        "El conocimiento es como una balsa, se usa para cruzar el rio, pero no te lo podés llevar encima, llevártelo encima te va a hacer sufrir y no vas a poder hacer nada mas.",
      quote_en: "",
    },
    {
        id: 22,
        quote_es:
        "Vive como si fueras a morir mañana. Aprende como si fueras a vivir por siempre. Mahatma Gandhi",
      quote_en: "",
    },
    {
      id: 23,
      quote_es:
        "¿Sabes por qué el mundo está así? Por gente que se cree que sabe lo que hay que decir y se esfuerzan para mentir, mientras otros enfrentan lo que es vivir, y yo siento que no tengo ni que hablar, porque cada palabra puede usarse para el mal por gente estupida mental",
      quote_en: "",
      author: 'Eminem'
    },
    {
      id: 24,
      quote_es: "",
      quote_en: "An army march on its stomach - Napoleon",
    },
    {
      id: 25,
      quote_es: "Aquel que compite es como si estuviera muerto -Buda",
      quote_en: "",
    },
    {
      id: 26,
      quote_es:
        "Cómo no ser una persona ruin, si el sistema me está forjando ruinmente... Si haces eso arrastrarás un karma que desde luego impedirá que obtengas los resultados adecuados. Estarás creando una serie de facturas y deudas que tarde o temprano acabarás pagando. El universo funciona con el equilibrio y si tu das mal y recibes mal, el universo te va a devolver eso -JL",
      quote_en: "",
    },
    {
      id: 27,
      quote_es:
        "Hay preguntas para las que no tendrás respuesta ni dedicándoles 10 vidas. No te pierdas entre todo lo que pasa en tu mente",
      quote_en: "",
    },
    {
      id: 28,
      quote_es: "",
      quote_en:
        "The loneliest people are the kindest, the saddest people smile the brightest, and the most damaged people are the wisest, all because they don't wish to see others suffer like they do",
    },
    {
      id: 29,
      quote_es: "",
      quote_en: "When ships were made of wood, men were made of steel.",
    },
    {
      id: 30,
      quote_es:
        "Amor de puta y vino de frasco, a la noche gustosos y en el día dan asco.",
      quote_en: "",
    },
    {
      id: 31,
      quote_es: "No hay hierba mala para una vaca hambrienta.",
      quote_en: "",
    },
    {
      id: 32,
      quote_es:
        "Cuando la pobreza entra por la puerta, el amor sale por la ventana.",
      quote_en: "",
    },
    {
      id: 33,
      quote_es: "Al pobre y al feo todo se le va en deseo.",
      quote_en: "",
    },
    {
      id: 34,
      quote_es: "En tierra de ciegos el tuerto es rey.",
      quote_en: "",
    },
    {
      id: 35,
      quote_es: "",
      quote_en: "Be careful with who you trust, salt and sugar look the same",
    },
    {
      id: 36,
      quote_es: "",
      quote_en:
        "If I had an hour to solve the problem and my life depended on the solution. I would spend the first 55 minutes determining the proper question to ask... for once I know the proper question, I could solve the problem in less than five minutes.",
    },
    {
      id: 37,
      quote_es:
        "El fracaso es una gran oportunidad para empezar otra vez con más inteligencia.",
      quote_en: "",
    },
    {
      id: 38,
      quote_es: "",
      quote_en: "Ships cannot remain where the water is too shallow",
    },
    {
      id: 39,
      quote_es:
        "Lo que piensas, te conviertes. Lo que sientes, lo atraes. Lo que imaginas, lo creas - Buda",
      quote_en: "",
    },
    {
      id: 40,
      quote_es: "",
      quote_en:
        "One of the really tough things is figuring out what question to ask, once you figure it out the question the answer is relatively easy – Elon Musk",
    },
    {
      id: 41,
      quote_es: "Como te trata la gente es su karma, como reaccionas es el tuyo.",
      quote_en: "",
    },
    {
      id: 42,
      quote_es:
        "Aquel que blande su espada con pura fuerza no es fuerte de verdad.",
      quote_en: "",
    },
    {
      id: 43,
      quote_es:
        "Rana del pozo que no conoce el mar. Aprende lo grande que es el mundo. Conócete a ti mismo, conoce al mundo y vuélvete más fuerte.",
      quote_en: "",
    },
    {
      id: 44,
      quote_es:
        "Es de tontos tenerle miedo a lo que aún estar por ver y conocerse -Itachi",
      quote_en: "",
    },
    {
      id: 45,
      quote_es:
        "Las personas viven atadas a lo que ven como 'correcto' o 'verdadero', a eso es lo que llaman 'realidad', sin embargo, 'correcto' y 'verdadero' no son más que términos imprecisos, su realidad podría ser una ilusión. Todos viven por sus propias suposiciones. -Itachi",
      quote_en: "",
    },
    {
      id: 46,
      quote_es:
        "Si nunca rendirme significa ser un tonto, entonces prefiero ser un tonto toda la vida. -Naruto Uzumaki",
      quote_en: "",
    },
    {
      id: 47,
      quote_es:
        "Perdón por el retraso, me perdí por el sendero de la vida. -Kakashi Hatake",
      quote_en: "",
    },
    {
      id: 48,
      quote_es:
        "El poder de creer en ti mismo puede ser el poder para cambiar el destino. -Rock Lee",
      quote_en: "",
    },
    {
      id: 49,
      quote_es:
        "Si uno quiere saber quién es en realidad, tiene que mirarse a sí mismo y aceptarse... Los que no son capaces de aceptarse tal como son, terminarán fracasando. -Itachi",
      quote_en: "",
    },
    {
      id: 50,
      quote_es:
        "El fin de una persona no es cuando muere. Si no cuando pierde la fe. -Hanzo",
      quote_en: "",
    },
    {
      id: 51,
      quote_es:
        "Hasta un diminuto insecto tiene un alma, no destruyas la vida innecesariamente.",
      quote_en: "",
      author: 'Shino Aburame (From Naruto).'
    },
    {
      id: 52,
      quote_es:
        "Entrenar solo tiene sus límites, solo un rival es capaz de hacer que superemos esos límites. -Neji Hyuga.",
      quote_en: "",
    },
    {
      id: 53,
      quote_es: "No hay mayor dolor que el causado por la soledad -Sasuke",
      quote_en: "",
    },
    {
      id: 54,
      quote_es: "",
      quote_en:
        "When a man learns to love, he must bear the risk of hatred -Madara",
    },
    {
      id: 55,
      quote_es: "Todas las verdades que son calladas se vuelven venenosas.",
      quote_en: "",
    },
    {
      id: 56,
      quote_es: "",
      quote_en: "We suffer more often in imagination than in reality. -Seneca",
    },
    {
      id: 57,
      quote_es: "",
      quote_en:
        "Most people are other people. Their thoughts are someone else's opinions, their lives a mimicry, their passions a quotation. -Oscar Wilde",
    },
    {
      id: 58,
      quote_es: "",
      quote_en:
        "In ancient times, having power meant having access to information, today having power means knowing what to ignore.",
    },
    {
      id: 59,
      quote_es:
        "El carácter está más determinado por la falta de experiencia que por aquellas que uno ha obtenido",
      quote_en: "",
    },
    {
      id: 60,
      quote_es: "",
      quote_en:
        "If what you have seems insufficient to you, then though you possess the world, you will yet be miserable.",
    },
    {
      id: 61,
      quote_es: "",
      quote_en:
        "Humankind has not woven the web of life. We are but one thread within it. Whatever we do to the web, we do to ourselves. All things are bound together. All things connect. ~ Chief Seattle",
    },
    {
      id: 62,
      quote_es: "",
      quote_en:
        "The journey is about being more deeply involved in life and yet less attached to it.",
    },
    {
      id: 63,
      quote_es: "",
      quote_en:
        "Every man must decide whether he will walk in the light of creative altruism or in the darkness of destructive selfishness.",
    },
    {
      id: 64,
      quote_es: "",
      quote_en:
        "I can accept failure; everyone fails at something. But I can't accept not trying.",
    },
    {
      id: 65,
      quote_es: "",
      quote_en:
        "The most common way people give up their power is by thinking they don’t have any.”",
    },
    {
      id: 66,
      quote_es: "",
      quote_en: "This is your life and it's ending one minute at a time.”",
    },
    {
      id: 67,
      quote_es: "",
      quote_en:
        "There’s a myth that time is money. In fact, time is more precious than money. It’s a nonrenewable resource. Once you’ve spent it, and if you’ve spent it badly, it’s gone forever.",
    },
    {
      id: 68,
      quote_es: "",
      quote_en:
        "Procrastination is like a credit card: it's a lot of fun until you get the bill.",
    },
    {
      id: 69,
      quote_es: "",
      quote_en:
        "Albert Einstein once said, 'Insanity is doing the same thing over and over and expecting a different result.",
    },
    {
      id: 70,
      quote_es: "",
      quote_en:
        "Sometimes life is like a dark tunnel, you can’t always see the light at the end of the tunnel, but if you just keep moving, you will come to a better place.",
    },
    {
      id: 71,
      quote_es: "",
      quote_en:
        "The monks used to say that the revenge is like a 2-headed rapt viper, while you watch your enemy go down, you are being poisoned yourself. You do have a choice. Forgiveness. It’s easy to do nothing, but is hard to forgive.",
    },
    {
      id: 72,
      quote_es: "",
      quote_en:
        "The true mind can weather all the lies and illusions without being lost, the true heart can tough the poison of hatred without being hard. Since beginning less time darkness thrived in the void, but always need to purify light.",
    },
    {
      id: 73,
      quote_es: "",
      quote_en: "Stop learning, die young",
      author: 'James Clear'
    },
    {
      id: 74,
      quote_es: "",
      quote_en:
        "One of the great gift of sports is learning how to fail in public. - James Clear",
    },
    {
      id: 75,
      quote_es: "",
      quote_en:
        "Someone with half your IQ is making 10x more as you because they aren't smart enough to doubt themselves.",
    },
    {
      id: 76,
      quote_es: "",
      quote_en:
        "Any knowledge that doesn't lead to new questions quickly dies out: it fails to maintain the temperature required for sustaining life.",
    },
    {
      id: 77,
      quote_es: "",
      quote_en: "The observant person finds many teachers. - James Clear",
    },
    {
      id: 78,
      quote_es: "",
      quote_en:
        "The ultimate form of preparation is not planning for a specific scenario, but a mindset that can handle uncertainty. -James Clear",
    },
    {
      id: 79,
      quote_es: "",
      quote_en:
        "It's not the load that breaks you down, it's the way you carry it. -Lena Horne",
    },
    {
      id: 80,
      quote_es: "",
      quote_en:
        "Understanding a person's hunger and responding to it is one of the most potent tools you'll ever discover for getting through to anyone you meet in business or your personal life. -Mark Goulston",
    },
  ];
  
  export default Quotes;