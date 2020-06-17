export function idToName(field, subField) {
  const response = {
    field: optionsPicker[field].name,
    subField: optionsPicker[field].subField[subField].name,
  };
  return response;
}

const optionsPicker = [
  {
    id: 0,
    name: 'Doméstico',
    subField: [
      {
        id: 0,
        name: 'Limpeza',
        specific: [
          {
            id: 0,
            name: 'Limpeza de telhado',
          },
          {
            id: 1,
            name: 'Limpeza de piso',
          },
        ],
      },
      {
        id: 1,
        name: 'Culinária',
        specific: [
          {
            id: 0,
            name: 'Festas',
          },
          {
            id: 1,
            name: 'Casual',
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: 'Elétricos',
    subField: [
      {
        id: 0,
        name: 'Segurança',
        specific: [
          {
            id: 0,
            name: 'Instalação de cerca elétrica',
          },
          {
            id: 1,
            name: 'Instalação de alarmes',
          },
        ],
      },
      {
        id: 1,
        name: 'Imóveis',
        specific: [
          {
            id: 0,
            name: 'Instalação de circuitos',
          },
          {
            id: 1,
            name: 'Manutenção ',
          },
        ],
      },
    ],
  },
];
