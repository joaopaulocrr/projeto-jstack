import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '6383dcc56789b7d9d4058523',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1669438152115 - quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '6383dcc56789b7d9d4058524'
      },
      {
        'product': {
          'name': 'Amstel',
          'imagePath': '1669583609345 - cerveja.png',
          'price': 5,
        },
        'quantity': 2,
        '_id': '6383dcc56789b7d9d4058525'
      }
    ],
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕐"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={[]}

      />
    </Container>
  );
}
