import redisClient from './utils/redisdb';

(async () => {
    // console.log(redisClient.isAlive());
    console.log(await redisClient.getCache('myKey'));
    await redisClient.setCache('myKey', 12, 5);
    console.log(await redisClient.getCache('myKey'));

    setTimeout(async () => {
        console.log(await redisClient.getCache('myKey'));
    }, 1000*10)
})();
