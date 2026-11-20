export type Status = 'Новая' | 'В работе' | 'Готово'

export type Category = 'Сантехника' | 'Электрика' | 'Мебель' | 'Интернет'

export type RequestItem = {
  id: number
  title: string
  room: string
  category: Category
  details: string
  status: Status
}

export type NewRequest = {
  title: string
  room: string
  category: Category
  details: string
}

export const initialRequests: RequestItem[] = [
  {
    id: 1,
    title: 'Протекает кран в душевой',
    room: '214',
    category: 'Сантехника',
    details: 'Вода капает на пол, образовалась лужа.',
    status: 'Новая',
  },
  {
    id: 2,
    title: 'Не работает розетка',
    room: '308',
    category: 'Электрика',
    details: 'Искрит при включении чайника.',
    status: 'В работе',
  },
  {
    id: 3,
    title: 'Сломалась дверца шкафа',
    room: '112',
    category: 'Мебель',
    details: 'Оторвалась петля, дверца висит на одном креплении.',
    status: 'Готово',
  },
  {
    id: 4,
    title: 'Нет интернета в комнате',
    room: '405',
    category: 'Интернет',
    details: 'Wi-Fi ловит, но страницы не грузятся.',
    status: 'Новая',
  },
  {
    id: 5,
    title: 'Перегорела лампа в коридоре',
    room: 'Коридор 3 этажа',
    category: 'Электрика',
    details: 'Темно, нужно заменить лампочку.',
    status: 'Новая',
  },
]

export function nextStatus(status: Status): Status {
  if (status === 'Новая') {
    return 'В работе'
  }
  return 'Готово'
}