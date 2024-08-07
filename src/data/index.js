export const categories = [
    {
        id: '91cbed5f-2c5b-44cd-b8ee-69975dd7544b',
        name: 'Clases Síncronas y Asíncronas',
        constantName: 'SYNC_ASYNC_PRODUCTS',
        type: 'CATEGORY',
        description: 'Disfruta de la flexibilidad total con nuestro pack de clases síncronas y asincrónicas. Participa en sesiones en tiempo real o accede a los materiales a tu propio ritmo, según tu conveniencia.',
        tags: [{ text: 'Nuevos productos' }, { text: 'Descuento' }, { text: 'Certificación' }]
    },
    {
        id: 'd7d05a02-6e39-4610-b759-f61f6b94e143',
        name: 'Clases en vivo',
        constantName: 'LIVE_STREAM_PRODUCTOS',
        type: 'CATEGORY',
        description: 'Únete a nuestras clases en vivo y aprende en tiempo real con nuestros expertos. Interactúa, pregunta y participa activamente para aprovechar al máximo cada sesión.',
        tags: [{ text: 'Nuevos productos' }, { text: 'Descuento' }, { text: 'Certificación' }]
    },
    {
        id: 'd6c070ad-5dd7-493b-b316-7251ff95b91c',
        name: 'Cursos en diferido',
        constantName: 'DEFER_PRODUCTS',
        type: 'CATEGORY',
        description: 'Accede a nuestros cursos en diferido y aprende a tu propio ritmo. Disfruta de contenidos de alta calidad y vuelve a revisar las lecciones cuando lo necesites.',
        tags: [{ text: 'Nuevos productos' }, { text: 'Descuento' }, { text: 'Certificación' }]
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
        description: 'Últimas inscripciones: 19 AGO 24. Acceso a Clase en vivo: Lunes 26 AGO 24 a las 7:30pm - Hora de Perú.',
        constantName: 'CIV_DIPLO_LOGOTERAPIA'
    },
    {
        id: '2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q',
        name: 'XXVIII Diplomado Internacional de Tanatología y Cuidados Paliativos - Online',
        isActive: true,
        type: 'PRODUCT',
        categoryId: '91cbed5f-2c5b-44cd-b8ee-69975dd7544b',
        description: 'Cierre de inscripciones: 10 JUN 24. Inicio de Clases regulares: miércoles 19 JUN 24 a las 7:30pm - Hora de Perú. Clases en vivo serán los miércoles a las 7:30pm a 9:30pm - Hora de Perú.',
        constantName: 'XXVIII_DIPLO_TANATOLOGIA'
    },
    // Clases en Vivo
    {
        id: '3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r',
        name: 'I Diplomado en Constelaciones Familiares - Online',
        isActive: true,
        type: 'PRODUCT',
        categoryId: 'd7d05a02-6e39-4610-b759-f61f6b94e143',
        description: 'Cierre de inscripciones: 15 JUN 24. Inicio de Clases regulares: viernes 05 JUL 24 de 7:00 pm Hora de Perú. Clases en vivo serán los viernes a las 7:00pm a 9:00pm - Hora de Perú.',
        constantName: 'I_DIPLO_CONSTELACIONES'
    },
    {
        id: '4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s',
        name: 'XXVII Formación en Logoterapia',
        isActive: true,
        type: 'PRODUCT',
        categoryId: 'd7d05a02-6e39-4610-b759-f61f6b94e143',
        description: 'Clases Magistral: viernes 09 AGOSTO 24 de 7:00 pm a 9:00pm – Hora de Perú - Modalidad online. Seminario Internacional: sábado 10 AGOSTO 24 de 9:00am a 1:00pm – Hora de Perú - Modalidad online. Clases regulares: martes 13 AGOSTO 24 de 7:00 pm a 9:00pm – Hora de Perú - Modalidad online.',
        constantName: 'XXVII_FORMACION_LOGOTERAPIA'
    },
    {
        id: '5e6f7g8h-9i0j-1k2l-3m4n-5o6p7q8r9s0t',
        name: 'XVI Formación en Tanatología',
        isActive: true,
        type: 'PRODUCT',
        categoryId: 'd7d05a02-6e39-4610-b759-f61f6b94e143',
        description: 'Clases Magistral: viernes 09 AGOSTO 24 de 7:00 pm a 9:00pm – Hora de Perú - Modalidad online. Seminario Internacional: sábado 10 AGOSTO 24 de 9:00am a 1:00pm – Hora de Perú - Modalidad online. Clases regulares: sábado 17 AGOSTO 24 de 10:00am a 12:00 pm – Hora de Perú - Modalidad online.',
        constantName: 'XVI_FORMACION_TANATOLOGIA'
    },
    {
        id: '6f7g8h9i-0j1k-2l3m-4n5o-6p7q8r9s0t1u',
        name: 'Taller Vivencial Sanar por Dentro',
        isActive: true,
        type: 'PRODUCT',
        categoryId: 'd7d05a02-6e39-4610-b759-f61f6b94e143',
        description: 'Fecha: sábado 13 JUL 24. Horario: 3pm a 6pm – Hora Perú. Modalidad: Online.',
        constantName: 'TALLER_VIVENCIAL_SANAR'
    },
    {
        id: '7g8h9i0j-1k2l-3m4n-5o6p-7q8r9s0t1u2v',
        name: 'II - Curso de Tanatología en Roma',
        isActive: true,
        type: 'PRODUCT',
        categoryId: 'd7d05a02-6e39-4610-b759-f61f6b94e143',
        description: 'Días centrales: 16 al 20 de Septiembre del 2024. Cierre de inscripciones: 28 Agosto 24.',
        constantName: 'II_CURSO_TANATOLOGIA_ROMA'
    },
    // Cursos en diferido
    {
        id: '8h9i0j1k-2l3m-4n5o-6p7q-8r9s0t1u2v3w',
        name: 'Curso Online Diario Íntimo',
        isActive: true,
        type: 'PRODUCT',
        categoryId: 'd6c070ad-5dd7-493b-b316-7251ff95b91c',
        description: 'Disponible las 24 horas, no hay horarios. Inicia cuando el alumno notifique su pago y se le activa en 72 horas en sistema.',
        constantName: 'CURSO_ONLINE_DIARIO_INTIMO'
    },
    {
        id: '9i0j1k2l-3m4n-5o6p-7q8r-9s0t1u2v3w4x',
        name: 'Curso Intensivo Arquetipos',
        isActive: true,
        type: 'PRODUCT',
        categoryId: 'd6c070ad-5dd7-493b-b316-7251ff95b91c',
        description: 'Disponible las 24 horas, no hay horarios. Inicia cuando el alumno notifique su pago y se le activa en 72 horas en sistema. Acceso a clases en video de manera semanal.',
        constantName: 'CURSO_INTENSIVO_ARQUETIPOS'
    },
    {
        id: '0j1k2l3m-4n5o-6p7q-8r9s-0t1u2v3w4x5y',
        name: 'Curso Online Hijos Rebeldes',
        isActive: true,
        type: 'PRODUCT',
        categoryId: 'd6c070ad-5dd7-493b-b316-7251ff95b91c',
        description: 'Disponible las 24 horas, no hay horarios. Inicia cuando el alumno notifique su pago y se le activa en 72 horas en sistema.',
        constantName: 'CURSO_ONLINE_HIJOS_REBELDES'
    },
    {
        id: '1k2l3m4n-5o6p-7q8r-9s0t-1u2v3w4x5y6z',
        name: 'Curso Online Superando el Estrés',
        isActive: true,
        type: 'PRODUCT',
        categoryId: 'd6c070ad-5dd7-493b-b316-7251ff95b91c',
        description: 'Disponible las 24 horas, no hay horarios. Inicia cuando el alumno notifique su pago y se le activa en 72 horas en sistema.',
        constantName: 'CURSO_ONLINE_SUPERANDO_ESTRES'
    },
    {
        id: '2l3m4n5o-6p7q-8r9s-0t1u-2v3w4x5y6z7a',
        name: 'Curso Online Empezar de Nuevo',
        isActive: true,
        type: 'PRODUCT',
        categoryId: 'd6c070ad-5dd7-493b-b316-7251ff95b91c',
        description: 'Disponible las 24 horas, no hay horarios. Inicia cuando el alumno notifique su pago y se le activa en 72 horas en sistema.',
        constantName: 'CURSO_ONLINE_EMPEZAR_NUEVO'
    }
];



