"use strict";
exports.__esModule = true;
var gameList = [
    {
        id: 1,
        title: 'The Witcher 3',
        platform: 'XBOX'
    },
    {
        id: 2,
        title: 'The Witcher 3',
        platform: 'PLAYSTATION'
    },
    {
        id: 3,
        title: 'Overwatch',
        platform: 'PC'
    },
];
var recordItemList = [
    {
        gameTitle: 'The Witcher 3',
        gamePlatform: 'PLAYSTATION',
        genreName: 'RPG'
    },
    {
        gameTitle: 'The Witcher 3',
        gamePlatform: 'XBOX',
        genreName: 'RPG'
    },
    {
        gameTitle: 'Overwatch',
        gamePlatform: 'PC',
        genreName: 'Shooter'
    },
    {
        gameTitle: 'Overwatch',
        gamePlatform: 'PC',
        genreName: 'Shooter'
    },
    {
        gameTitle: 'The Witcher 3',
        gamePlatform: 'PLAYSTATION',
        genreName: 'RPG'
    },
];
var buildBarSeries = function (games, records) {
    //percorre a lista de games
    var mappedGames = games.map(function (game) {
        //Filtra na lista de record os games iguais aos percorridos pelo MAP
        var filteredGames = records.filter(function (record) {
            //Retorna os games com o mesmo título e plataforma
            return (record.gameTitle === game.title && record.gamePlatform === game.platform);
        });
        return {
            x: game.title + " | " + game.platform,
            y: filteredGames.length
        };
    });
    //Ordenação do maior para o menor do "y: filteredGames.length"
    var sortedGames = mappedGames.sort(function (a, b) { return b.y - a.y; });
    return sortedGames.slice(0, 8); //Somente os oito primeiros
};
//Implementação do gráfico de rosca de plataforma
var getPlatformChartData = function (records) {
    var platf = ['PC', 'PLAYSTATION', 'XBOX'];
    var seriesMap = platf.map(function (platfor) {
        var filteredGames = records.filter(function (record) {
            return record.gamePlatform === platfor;
        });
        return filteredGames.length; //Retorna a quantidade da list do elemento filtrado no MAP
    });
    return {
        labels: platf,
        series: seriesMap
    };
};
//Implementação do gráfico de rosca de gêneros
var getGenreChartData = function (records) {
    //Função de acumulação
    var computeRecordItem = function (obj, record) {
        //Incrementa se o objto já existir caso contrário inicia com 1
        if (obj[record.genreName] !== undefined) {
            obj[record.genreName] += 1;
        }
        else {
            obj[record.genreName] = 1;
        }
        return obj;
    };
    //Realiza a contagem acumulando os resultados
    var genreByAmount = records.reduce(computeRecordItem, {});
    var labels = Object.keys(genreByAmount);
    var series = labels.map(function (x) { return genreByAmount[x]; });
    return {
        labels: labels,
        series: series
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
