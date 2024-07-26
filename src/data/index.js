export const categories = [
    {
        id: '91cbed5f-2c5b-44cd-b8ee-69975dd7544b',
        name: 'Clases Síncronas y Asíncronas',
        constantName: 'SYNC_ASYNC_PRODUCTS',
        description: 'Las clases Síncronas se refieren a que estarás interactuando con el tutor correspondiente en el mismo momento, mientras que en las clases Asíncronas la interacción es en un espacio y momentos distintos.'
    },
    {
        id: 'd7d05a02-6e39-4610-b759-f61f6b94e143',
        name: 'Clases en vivo',
        constantName: 'LIVE_STREAM_PRODUCTOS',
        description: 'Las clases en vivo son clases que se van a transmitir en vivo para ti y todos los alumnos inscritos.'
    },
    {
        id: 'd6c070ad-5dd7-493b-b316-7251ff95b91c',
        name: 'Cursos en diferido',
        constantName: 'DEFER_PRODUCTS',
        description: 'Las clases en diferido son clases grabadas que podrás ver en cualquier momento.'
    }
]

export const products = [
    // Clases Síncronas y Asíncronas
    {
        id: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
        name: 'CIV Diplomado Internacional de Logoterapia y Sentido de Vida - Online',
        isActive: true,
        categoryId: '91cbed5f-2c5b-44cd-b8ee-69975dd7544b',
        description: 'Últimas inscripciones: 19 AGO 24. Acceso a Clase en vivo: Lunes 26 AGO 24 a las 7:30pm - Hora de Perú.',
        constantName: 'CIV_DIPLO_LOGOTERAPIA'
    },
    {
        id: '2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q',
        name: 'XXVIII Diplomado Internacional de Tanatología y Cuidados Paliativos - Online',
        isActive: true,
        categoryId: '91cbed5f-2c5b-44cd-b8ee-69975dd7544b',
        description: 'Cierre de inscripciones: 10 JUN 24. Inicio de Clases regulares: miércoles 19 JUN 24 a las 7:30pm - Hora de Perú. Clases en vivo serán los miércoles a las 7:30pm a 9:30pm - Hora de Perú.',
        constantName: 'XXVIII_DIPLO_TANATOLOGIA'
    },
    // Clases en Vivo
    {
        id: '3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r',
        name: 'I Diplomado en Constelaciones Familiares - Online',
        isActive: true,
        categoryId: 'd7d05a02-6e39-4610-b759-f61f6b94e143',
        description: 'Cierre de inscripciones: 15 JUN 24. Inicio de Clases regulares: viernes 05 JUL 24 de 7:00 pm Hora de Perú. Clases en vivo serán los viernes a las 7:00pm a 9:00pm - Hora de Perú.',
        constantName: 'I_DIPLO_CONSTELACIONES'
    },
    {
        id: '4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s',
        name: 'XXVII Formación en Logoterapia',
        isActive: true,
        categoryId: 'd7d05a02-6e39-4610-b759-f61f6b94e143',
        description: 'Clases Magistral: viernes 09 AGOSTO 24 de 7:00 pm a 9:00pm – Hora de Perú - Modalidad online. Seminario Internacional: sábado 10 AGOSTO 24 de 9:00am a 1:00pm – Hora de Perú - Modalidad online. Clases regulares: martes 13 AGOSTO 24 de 7:00 pm a 9:00pm – Hora de Perú - Modalidad online.',
        constantName: 'XXVII_FORMACION_LOGOTERAPIA'
    },
    {
        id: '5e6f7g8h-9i0j-1k2l-3m4n-5o6p7q8r9s0t',
        name: 'XVI Formación en Tanatología',
        isActive: true,
        categoryId: 'd7d05a02-6e39-4610-b759-f61f6b94e143',
        description: 'Clases Magistral: viernes 09 AGOSTO 24 de 7:00 pm a 9:00pm – Hora de Perú - Modalidad online. Seminario Internacional: sábado 10 AGOSTO 24 de 9:00am a 1:00pm – Hora de Perú - Modalidad online. Clases regulares: sábado 17 AGOSTO 24 de 10:00am a 12:00 pm – Hora de Perú - Modalidad online.',
        constantName: 'XVI_FORMACION_TANATOLOGIA'
    },
    {
        id: '6f7g8h9i-0j1k-2l3m-4n5o-6p7q8r9s0t1u',
        name: 'Taller Vivencial Sanar por Dentro',
        isActive: true,
        categoryId: 'd7d05a02-6e39-4610-b759-f61f6b94e143',
        description: 'Fecha: sábado 13 JUL 24. Horario: 3pm a 6pm – Hora Perú. Modalidad: Online.',
        constantName: 'TALLER_VIVENCIAL_SANAR'
    },
    {
        id: '7g8h9i0j-1k2l-3m4n-5o6p-7q8r9s0t1u2v',
        name: 'II - Curso de Tanatología en Roma',
        isActive: true,
        categoryId: 'd7d05a02-6e39-4610-b759-f61f6b94e143',
        description: 'Días centrales: 16 al 20 de Septiembre del 2024. Cierre de inscripciones: 28 Agosto 24.',
        constantName: 'II_CURSO_TANATOLOGIA_ROMA'
    },
    // Cursos en diferido
    {
        id: '8h9i0j1k-2l3m-4n5o-6p7q-8r9s0t1u2v3w',
        name: 'Curso Online Diario Íntimo',
        isActive: true,
        categoryId: 'd6c070ad-5dd7-493b-b316-7251ff95b91c',
        description: 'Disponible las 24 horas, no hay horarios. Inicia cuando el alumno notifique su pago y se le activa en 72 horas en sistema.',
        constantName: 'CURSO_ONLINE_DIARIO_INTIMO'
    },
    {
        id: '9i0j1k2l-3m4n-5o6p-7q8r-9s0t1u2v3w4x',
        name: 'Curso Intensivo Arquetipos',
        isActive: true,
        categoryId: 'd6c070ad-5dd7-493b-b316-7251ff95b91c',
        description: 'Disponible las 24 horas, no hay horarios. Inicia cuando el alumno notifique su pago y se le activa en 72 horas en sistema. Acceso a clases en video de manera semanal.',
        constantName: 'CURSO_INTENSIVO_ARQUETIPOS'
    },
    {
        id: '0j1k2l3m-4n5o-6p7q-8r9s-0t1u2v3w4x5y',
        name: 'Curso Online Hijos Rebeldes',
        isActive: true,
        categoryId: 'd6c070ad-5dd7-493b-b316-7251ff95b91c',
        description: 'Disponible las 24 horas, no hay horarios. Inicia cuando el alumno notifique su pago y se le activa en 72 horas en sistema.',
        constantName: 'CURSO_ONLINE_HIJOS_REBELDES'
    },
    {
        id: '1k2l3m4n-5o6p-7q8r-9s0t-1u2v3w4x5y6z',
        name: 'Curso Online Superando el Estrés',
        isActive: true,
        categoryId: 'd6c070ad-5dd7-493b-b316-7251ff95b91c',
        description: 'Disponible las 24 horas, no hay horarios. Inicia cuando el alumno notifique su pago y se le activa en 72 horas en sistema.',
        constantName: 'CURSO_ONLINE_SUPERANDO_ESTRES'
    },
    {
        id: '2l3m4n5o-6p7q-8r9s-0t1u-2v3w4x5y6z7a',
        name: 'Curso Online Empezar de Nuevo',
        isActive: true,
        categoryId: 'd6c070ad-5dd7-493b-b316-7251ff95b91c',
        description: 'Disponible las 24 horas, no hay horarios. Inicia cuando el alumno notifique su pago y se le activa en 72 horas en sistema.',
        constantName: 'CURSO_ONLINE_EMPEZAR_NUEVO'
    }
];



