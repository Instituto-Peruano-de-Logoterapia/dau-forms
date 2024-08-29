export const categories = [
    {
        id: '91cbed5f-2c5b-44cd-b8ee-69975dd7544b',
        isActive: true,
        name: 'Clases Síncronas y Asíncronas',
        constantName: 'SYNC_ASYNC_PRODUCTS',
        type: 'CATEGORY',
        description: 'Disfruta de la flexibilidad total con nuestro pack de clases síncronas y asincrónicas. Participa en sesiones en tiempo real o accede a los materiales a tu propio ritmo, según tu conveniencia.',
        tags: ['Diplomados'],
        isNew: true
    },
    {
        id: 'd7d05a02-6e39-4610-b759-f61f6b94e143',
        name: 'Clases en vivo',
        isActive: true,
        constantName: 'LIVE_STREAM_PRODUCTOS',
        type: 'CATEGORY',
        description: 'Únete a nuestras clases en vivo y aprende en tiempo real con nuestros expertos. Interactúa, pregunta y participa activamente para aprovechar al máximo cada sesión.',
        tags: ['Formaciones', 'Diplomados', 'Talleres', 'Cursos'],
        isNew: true
    },
    {
        id: 'd6c070ad-5dd7-493b-b316-7251ff95b91c',
        name: 'Cursos en diferido',
        isActive: true,
        constantName: 'DEFER_PRODUCTS',
        type: 'CATEGORY',
        description: 'Accede a nuestros cursos en diferido y aprende a tu propio ritmo. Disfruta de contenidos de alta calidad y vuelve a revisar las lecciones cuando lo necesites.',
        tags: ['Cursos'],
        isNew: true
    },
]

export const products = [
    // Clases Síncronas y Asíncronas
    {
        id: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
        name: 'CIV Diplomado Internacional de Logoterapia y Sentido de Vida - Online',
        isActive: true,
        type: 'PRODUCT',
        categoryId: '91cbed5f-2c5b-44cd-b8ee-69975dd7544b',
        description: 'Inscríbete en el Diplomado en Logoterapia y aprende a transformar situaciones difíciles en crecimiento personal. Dirigido a profesionales, estudiantes y público en general.',
        dateIni: '26 de Agosto',
        hour: '7:30 pm Hora Perú',
        duration: '7 Meses',
        constantName: 'CIV_DIPLO_LOGOTERAPIA',
        pdfLink: 'https://drive.google.com/file/d/1GagbFPMr389WzMrHRBBla_OWSIGYQaDy/view?usp=sharing',
        isNew: true
    },
    {
        id: '2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q',
        name: 'XXVIII Diplomado Internacional de Tanatología y Cuidados Paliativos - Online',
        isActive: true,
        type: 'PRODUCT',
        categoryId: '91cbed5f-2c5b-44cd-b8ee-69975dd7544b',
        description: 'Inscríbete en el Diplomado en Tanatología y descubre cómo brindar acompañamiento en procesos de duelo, ayudando a transformar la pérdida en crecimiento personal. Dirigido a profesionales, estudiantes y público en general.',
        dateIni: '19 de Junio',
        hour: '7:30 pm Hora Perú',
        duration: '7 Meses',
        pdfLink: 'https://drive.google.com/file/d/1-RTDXgMmB_wHYwY4eak6mS7Tl5bvdmu8/view?usp=sharing',
        constantName: 'XXVIII_DIPLO_TANATOLOGIA',
        isNew: false
    },
    // Clases en Vivo
    {
        id: '3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r',
        name: 'I Diplomado en Constelaciones Familiares - Online',
        isActive: true,
        type: 'PRODUCT',
        categoryId: 'd7d05a02-6e39-4610-b759-f61f6b94e143',
        description: 'Inscríbete en el Diplomado en Constelaciones Familiares y comprende cómo las dinámicas de tu sistema familiar influyen en tus relaciones. Aprende a transformar patrones y sanar heridas para tu crecimiento personal y profesional.',
        dateIni: '25 de Septiembre',
        hour: '7:00 pm a 9:00 pm Hora Perú',
        duration: '5 Meses',
        pdfLink: 'https://drive.google.com/file/d/1_eAc64UK14uNYMG67edQfW0kTL7gtx4A/view?usp=sharing',
        constantName: 'I_DIPLO_CONSTELACIONES',
        isNew: false
    },
    {
        id: '4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s',
        name: 'XXVII Formación en Logoterapia',
        isActive: true,
        type: 'PRODUCT',
        categoryId: 'd7d05a02-6e39-4610-b759-f61f6b94e143',
        description: 'Inscríbete en la Formación Internacional en Logoterapia y adquiere herramientas para acompañar procesos de sentido, salud y transformación personal desde una visión antropológica.',
        dateIni: '13 de Septiembre',
        hour: '7:00 pm a 9:00 pm Hora Perú',
        duration: '2 Años',
        pdfLink: 'https://drive.google.com/file/d/1AU4U5SZYIruN-dUaOmmD2m0mbPBKcg-Q/view?usp=sharing',
        constantName: 'XXVII_FORMACION_LOGOTERAPIA',
        isNew: false
    },
    {
        id: '5e6f7g8h-9i0j-1k2l-3m4n-5o6p7q8r9s0t',
        name: 'XVI Formación en Tanatología',
        isActive: true,
        type: 'PRODUCT',
        categoryId: 'd7d05a02-6e39-4610-b759-f61f6b94e143',
        description: 'Inscríbete en la Formación de Tanatología y Cuidado al Final de la Vida y adquiere herramientas para acompañar el proceso de duelo, integrando el concepto de la muerte desde distintas creencias.',
        dateIni: '17 de Agosto',
        pdfLink: 'https://drive.google.com/file/d/1YwW407xMbgkQ58MaD2njar0zgvT--yRH/view?usp=sharing',
        duration: '18 Meses',
        constantName: 'XVI_FORMACION_TANATOLOGIA',
        isNew: false
    },
    {
        id: '6f7g8h9i-0j1k-2l3m-4n5o-6p7q8r9s0t1u',
        name: 'Taller Vivencial Sanar por Dentro',
        isActive: false,
        type: 'PRODUCT',
        categoryId: 'd7d05a02-6e39-4610-b759-f61f6b94e143',
        description: 'Fecha: sábado 13 JUL 24. Horario: 3pm a 6pm – Hora Perú. Modalidad: Online.',
        constantName: 'TALLER_VIVENCIAL_SANAR',
        dateIni: '16 de Septiembre',
        hour: 'TBD',
        duration: '5 días',
        isNew: true
    },
    {
        id: '7g8h9i0j-1k2l-3m4n-5o6p-7q8r9s0t1u2v',
        name: 'II - Curso de Tanatología en Roma',
        isActive: true,
        type: 'PRODUCT',
        categoryId: 'd7d05a02-6e39-4610-b759-f61f6b94e143',
        description: 'Inscríbete en el Curso Intensivo de Tanatología en Roma y desarrolla las habilidades necesarias para acompañar a otros en situaciones límite, mientras profundizas en el cuidado de los demás y de ti mismo.',
        dateIni: '16 de Septiembre',
        duration: '5 Días',
        pdfLink: 'https://drive.google.com/file/d/13JOQ_2AbkCV38316cRaBM24C4imzwsnf/view?usp=sharing',
        constantName: 'II_CURSO_TANATOLOGIA_ROMA',
        isNew: true
    },
    // Cursos en diferido
    {
        id: '8h9i0j1k-2l3m-4n5o-6p7q-8r9s0t1u2v3w',
        name: 'Curso Online Diario Íntimo',
        isActive: true,
        type: 'PRODUCT',
        categoryId: 'd6c070ad-5dd7-493b-b316-7251ff95b91c',
        description: 'Inscríbete en el Curso Diario Íntimo basado en la Logoterapia y el Diario Intensivo de Ira Progoff. Descubre cómo fortalecer y potenciar tu interior en tiempos de incertidumbre y crecimiento personal.',
        constantName: 'CURSO_ONLINE_DIARIO_INTIMO',
        content: 'Grabado y 14 audios',
        available: '24 horas',
        duration: 'Duración: 2 Talleres',
        isNew: false
    },
    {
        id: '9i0j1k2l-3m4n-5o6p-7q8r-9s0t1u2v3w4x',
        name: 'Curso Intensivo Arquetipos',
        isActive: true,
        type: 'PRODUCT',
        categoryId: 'd6c070ad-5dd7-493b-b316-7251ff95b91c',
        description: 'Inscríbete en el Curso Intensivo de Arquetipos y aprende a transformar patrones reactivos, recuperar energía y conectar con tu poder creativo y espiritual.',
        constantName: 'CURSO_INTENSIVO_ARQUETIPOS',
        content: 'Grabado',
        available: '24 horas',
        duration: '12 Sesiones',
        isNew: true
    },
    {
        id: '0j1k2l3m-4n5o-6p7q-8r9s-0t1u2v3w4x5y',
        name: 'Curso Online Hijos Rebeldes',
        isActive: true,
        type: 'PRODUCT',
        categoryId: 'd6c070ad-5dd7-493b-b316-7251ff95b91c',
        description: 'Inscríbete en el Curso Online Hijos Rebeldes y aprende a conectar con tu hijo, entender su conducta desafiante, evitar conflictos de poder y promover un ambiente positivo en casa.',
        constantName: 'CURSO_ONLINE_HIJOS_REBELDES',
        content: 'Grabado',
        pdfLink: 'https://drive.google.com/file/d/1TiUB1lj6Q7waWGrhdYQ3HcK2_J_7XvQ7/view?usp=sharing',
        available: '24 horas',
        duration: '4 Sesiones',
        isNew: false
    },
    {
        id: '1k2l3m4n-5o6p-7q8r-9s0t-1u2v3w4x5y6z',
        name: 'Curso Online Superando el Estrés',
        isActive: true,
        type: 'PRODUCT',
        categoryId: 'd6c070ad-5dd7-493b-b316-7251ff95b91c',
        description: 'Inscríbete en el Curso Online Superando el Estrés y aprende estrategias para manejar el estrés, liberar tensiones y afrontar situaciones límite.',
        constantName: 'CURSO_ONLINE_SUPERANDO_ESTRES',
        pdfLink: 'https://drive.google.com/file/d/1JjVDnxlMIERR2cJSxVMqXV9Tf6Fg__py/view?usp=sharing',
        content: 'Grabado',
        available: '24 horas',
        duration: '4 Sesiones',
        isNew: true
    },
    {
        id: '2l3m4n5o-6p7q-8r9s-0t1u-2v3w4x5y6z7a',
        name: 'Curso Online Empezar de Nuevo',
        isActive: true,
        type: 'PRODUCT',
        categoryId: 'd6c070ad-5dd7-493b-b316-7251ff95b91c',
        description: 'Inscríbete en el Curso Online Empezar de Nuevo y transforma tu vida. Sal de tu zona de confort, cambia tu mentalidad y conviértete en tu mejor versión.',
        constantName: 'CURSO_ONLINE_EMPEZAR_NUEVO',
        content: 'Grabado',
        pdfLink: 'https://drive.google.com/file/d/19XLqI9dQ32CuCrYrmizoi0HMuRpjmFgn/view?usp=sharing',
        available: '24 horas',
        duration: '4 Sesiones',
        isNew: false
    }
];



