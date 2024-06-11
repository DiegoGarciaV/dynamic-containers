import React from 'react';
import AbstractPage from '../AbstractPage/AbstractPage';

const AcademicServices = () => {

    const menuTree = [
        {
            id: 0,
            itemLabel: "Servicios Escolares",
            itemContent: [
                {
                    id: 0,
                    itemLabel: "Presentación",
                    itemResource: "/alumnado"
                },
                {
                    id: 1,
                    itemLabel: "Proceso de Admisión",
                    itemResource: "/alumnado/escolares/admision"
                },
                {
                    id: 2,
                    itemLabel: "Proceso de Inscripción",
                    itemResource: "/alumnado/escolares/inscripcion"
                },
                {
                    id: 3,
                    itemLabel: "Proceso de Reinscripción",
                    itemResource: "/alumnado/escolares/reinscripcion"
                },
                {
                    id: 4,
                    itemLabel: "Emisión de Constancias y Trámites Escolares",
                    itemResource: "/alumnado/escolares/constancias"
                },
                {
                    id: 5,
                    itemLabel: "Suspensión Temporal de Estudios",
                    itemResource: "/alumnado/escolares/suspension"
                },
                {
                    id: 6,
                    itemLabel: "Seguro IMSS",
                    itemResource: "/alumnado/escolares/imss"
                },
                {
                    id: 7,
                    itemLabel: "Titulación",
                    itemResource: "/alumnado/escolares/titulacion"
                },
                {
                    id: 8,
                    itemLabel: "Preguntas Frecuentes",
                    itemResource: "/alumnado/escolares/preguntas"
                }
            ]
        },
        {
            id: 1,
            itemLabel: "Movilidad",
            itemContent: [
                {
                    id: 0,
                    itemLabel: "Presentación",
                    itemResource: "/alumnado/movilidad"
                },
                {
                    id: 1,
                    itemLabel: "Términos y Consideraciones Generales",
                    itemResource: "/alumnado/movilidad/terminos"
                }
            ]
        },
        {
            id: 2,
            itemLabel: "Becas",
            itemResource: "/alumnado/becas"
        },
        {
            id: 3,
            itemLabel: "Servicio Social",
            itemResource: "/alumnado/social"
        },
        {
            id: 4,
            itemLabel: "Prácticas Profesionales",
            itemResource: "/alumnado/profesionales"
        },
        {
            id: 5,
            itemLabel: "Tutorias",
            itemResource: "/alumnado/tutorias"
        },
        {
            id: 6,
            itemLabel: "Orientación Psicológica y Desarrollo Humano",
            itemResource: "/alumnado/orientacion-psicologica"
        },
        {
            id: 7,
            itemLabel: "Bolsa de Trabajo",
            itemResource: "/alumnado/bolsa-trabajo"
        }
    ]

    return <AbstractPage menuTree={menuTree} />
};


export default AcademicServices;