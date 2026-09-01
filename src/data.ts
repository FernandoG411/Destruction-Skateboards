import { FeedPost, NewsItem, Comment } from './types';

export const initialNews: NewsItem[] = [
  {
    id: "n1",
    title: "Nova Pista de Skate Inaugurada na Zona Leste",
    date: "17 Jun 2026",
    category: "PARKS",
    imageUrl: "https://images.unsplash.com/photo-1549460599-f2ca6dc850eb?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "n2",
    title: "Campeonato Amador Regional: Inscrições Abertas",
    date: "15 Jun 2026",
    category: "EVENTOS",
    imageUrl: "https://images.unsplash.com/photo-1510006733945-814bf847b744?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "n3",
    title: "A Ascensão do Street Skate Feminino no Brasil",
    date: "12 Jun 2026",
    category: "CULTURA",
    imageUrl: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=600"
  }
];

export const initialPosts: FeedPost[] = [
  {
    id: "p1",
    author: "Lucas Ferreira",
    authorHandle: "@lucassk8",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=150&h=150&q=80",
    content: "Acabei de mandar um tre flip perfeito na escadaria do centro. Alguém mais colando pra lá hoje?",
    timeAgo: "2 horas atrás",
    likes: 34
  },
  {
    id: "p2",
    author: "Marina Dias",
    authorHandle: "@ma_dias",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=150&h=150&q=80",
    content: "O corrimão do parque novo já tá todo encerado! Só chegar e dropar 🛹🔥",
    timeAgo: "5 horas atrás",
    likes: 89
  },
  {
    id: "p3",
    author: "Guilherme Santos",
    authorHandle: "@guigui_santos",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=facearea&facepad=2&w=150&h=150&q=80",
    content: "Shape quebrou no meio da sessão... Alguém tem um usado pra vender baratinho?",
    timeAgo: "1 dia atrás",
    likes: 12
  }
];

export const initialComments: Comment[] = [
  {
    id: "c1",
    author: "Pedro Ramos",
    text: "Mano, essa reportagem tá irada! As fotos capturaram muito bem a essência da rua.",
    date: "Hoje, 14:30"
  },
  {
    id: "c2",
    author: "Bia Skate",
    text: "O vídeo no final é surreal. Que estilo de manobra!",
    date: "Hoje, 11:15"
  }
];
