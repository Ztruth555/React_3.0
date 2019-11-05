const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = employers
    .filter(item => item.length)
    .map(item => item.toLowerCase().trim());

    console.log(employersNames);

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {cash, eu, rus} = sponsors;

const cashSum = cash.reduce((acc, el) => acc + el);

const calcCash = (everyCash = []) => {
    return everyCash.reduce((a, b) => a + b);
}

const money = calcCash(cash);



const makeBusiness = ({owner = 'default', director = 'Victor', cash = 0, emp = []} = {}, ...args) => {
    
    const [[euAdd]] = args;

    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log('And we have a sponsors: ');
    console.log(...[...eu, ...rus, 'unexpected sponsor']);
    console.log(`Note. Be careful with ${euAdd}. It's a huge risk.`);
}

makeBusiness({owner: 'Sam', cash: money, emp: employersNames}, eu);