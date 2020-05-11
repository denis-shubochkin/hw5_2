import getSpecial from '../basic';

test('pers has one special without description', () => {
  const pers = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special:
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
    },
  };

  const result = getSpecial(pers);
  const exp = [{
    id: 8,
    name: 'Двойной выстрел',
    icon: 'http://...',
    description: 'Описание не указано',
  }];
  expect(result).toEqual(exp);
});


test('pers has two specials and one of them without description', () => {
  const pers = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ],
  };

  const result = getSpecial(pers);
  const exp = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание не указано',
    },
  ];
  expect(result).toEqual(exp);
});
