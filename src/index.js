// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    const currencyValues = {
        H : 50,
        Q : 25,
        D : 10,
        N : 5,
        P : 1
    };

    let moneyAmount = currency;
    let result = {};

    if( moneyAmount > 10000 ) {
        result.error = "You are rich, my friend! We don't have so much coins for exchange";
        return result;        
    };
    
    if ( moneyAmount <= 0 ) {
        return result;
    };

    while ( moneyAmount > 0 ) {
        if ( moneyAmount >= currencyValues.H ) {
            (result["H"] === undefined) ? result["H"] = 1 : result["H"] += 1;
            moneyAmount -= currencyValues.H;
            continue;
        };
        if ( moneyAmount >= currencyValues.Q ) {
            (result["Q"] === undefined) ? result["Q"] = 1 : result["Q"] += 1;
            moneyAmount -= currencyValues.Q;
            continue;
        };
        if ( moneyAmount >= currencyValues.D ) {
            (result["D"] === undefined) ? result["D"] = 1 : result["D"] += 1;
            moneyAmount -= currencyValues.D;
            continue;
        };
        if ( moneyAmount >= currencyValues.N ) {
            (result["N"] === undefined) ? result["N"] = 1 : result["N"] += 1;
            moneyAmount -= currencyValues.N;
            continue;
        };
        if ( moneyAmount >= currencyValues.P ) {
            (result["P"] === undefined) ? result["P"] = 1 : result["P"] += 1;
            moneyAmount -= currencyValues.P;
            continue;
        };
    };

    return result;
}
