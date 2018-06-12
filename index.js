const Logger = require('./Logger') ;
const Shopper = require('./Shopper') ;
const Store = require('./Store') ;

const logger = new Logger().getInstance();

logger.log('Start app...');

let alex = new Shopper('Alex', 500);
let ski_shop = new Store('Sleep and Deep', [
  {
    item: 'Leffe',
    qty: 5,
    price: 532
  },
  {
    item: 'Porter',
    qty: 1,
    price: 132
  }
])

logger.log('finished fonfig ....');
console.log(`${logger.count} logs total`);
logger.logs.map(log => console.log(`   ${log.message}`));