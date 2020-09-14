export {};

type Platform = 'XBOX' | 'PC' | 'PLAYSTATION';

type RecordItem = {
  gameTitle: string;
  gamePlatform: Platform;
  genreName: string;
};

type Game = {
  id: number;
  title: string;
  platform: Platform;
};

const gameList: Game[] = [
  {
    id: 1,
    title: 'The Witcher 3',
    platform: 'XBOX',
  },
  {
    id: 2,
    title: 'The Witcher 3',
    platform: 'PLAYSTATION',
  },
  {
    id: 3,
    title: 'Overwatch',
    platform: 'PC',
  },
];

const recordItemList: RecordItem[] = [
  {
    gameTitle: 'The Witcher 3',
    gamePlatform: 'PLAYSTATION',
    genreName: 'RPG',
  },
  {
    gameTitle: 'The Witcher 3',
    gamePlatform: 'XBOX',
    genreName: 'RPG',
  },
  {
    gameTitle: 'Overwatch',
    gamePlatform: 'PC',
    genreName: 'Shooter',
  },
  {
    gameTitle: 'Overwatch',
    gamePlatform: 'PC',
    genreName: 'Shooter',
  },
  {
    gameTitle: 'The Witcher 3',
    gamePlatform: 'PLAYSTATION',
    genreName: 'RPG',
  },
];

const buildBarSeries = (games: Game[], records: RecordItem[]) => {
  //percorre a lista de games
  const mappedGames = games.map((game) => {
    //Filtra na lista de record os games iguais aos percorridos pelo MAP
    const filteredGames = records.filter((record) => {
      //Retorna os games com o mesmo título e plataforma
      return (
        record.gameTitle === game.title && record.gamePlatform === game.platform
      );
    });

    return {
      x: `${game.title} | ${game.platform}`,
      y: filteredGames.length,
    };
  });

  //Ordenação do maior para o menor do "y: filteredGames.length"
  const sortedGames = mappedGames.sort((a, b) => b.y - a.y);

  return sortedGames.slice(0, 8); //Somente os oito primeiros
};

//Implementação do gráfico de rosca de plataforma
const getPlatformChartData = (records: RecordItem[]) => {
  const platf = ['PC', 'PLAYSTATION', 'XBOX'];

  const seriesMap = platf.map((platfor) => {
    const filteredGames = records.filter((record) => {
      return record.gamePlatform === platfor;
    });
    return filteredGames.length; //Retorna a quantidade da list do elemento filtrado no MAP
  });

  return {
    labels: platf,
    series: seriesMap,
  };
};

//Implementação do gráfico de rosca de gêneros
const getGenreChartData = (records: RecordItem[]) => {
  //Função de acumulação
  const computeRecordItem = (obj, record) => {
    //Incrementa se o objto já existir caso contrário inicia com 1
    if (obj[record.genreName] !== undefined) {
      obj[record.genreName] += 1;
    } else {
      obj[record.genreName] = 1;
    }
    return obj;
  };

  //Realiza a contagem acumulando os resultados
  const genreByAmount = records.reduce(computeRecordItem, {});

  const labels = Object.keys(genreByAmount);
  const series = labels.map((x) => genreByAmount[x]);

  return {
    labels,
    series,
  };
};

console.log();
console.log('GRÁFICO DE BARRAS ---------------------------------');
console.log();
console.log(buildBarSeries(gameList, recordItemList));
console.log();
console.log();
console.log('GRÁFICO DE ROSCA (Plataformas) ---------------------');
console.log(getPlatformChartData(recordItemList));
console.log();
console.log();
console.log('GRÁFICO DE ROSCA (Gêneros) -------------------------');
console.log(getGenreChartData(recordItemList));
