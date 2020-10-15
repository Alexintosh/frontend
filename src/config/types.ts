export type PoolId = string; // je celkem jedno, co konrétně to bude, ale mohla by to být např. adresa chytrého kontraktu. Stejně jako např. na Balanceru v url: např. https://pools.balancer.exchange/#/pool/0x59a19d8c652fa0284f44113d0ff9aba70bd46fb4/

export interface InputInterface {
    address: string; // '0x2bb665722a122dd8a80c9d8625430fa1bcc6c3fc'
    exchange: string;
}

export interface PoolItemInterface {
    exchange: string;
    hodlReturnUSD: number; // difference in HODL value now and at the beginning
    netReturnUSD: number; // difference in pool value now and at the beginning
    dexReturnUSD: number; // fees - impermanent_loss - tx_cost
    feesUSD: number; // total user's fee gains
    impLossRel: number | undefined; //  None in case of changes in lp balance
    impLossUSD: number; // impermanent loss
    txCostEth: number | undefined; // v ETH
    endBalanceUSD: number;
    userAddr: string;
    poolId: string; // pool smart contract address
    tokens: Array<{ [key: string]: {} }>;
    tokenWeights: Array<number>;
    endTokenBalance: Array<number>; // User token balances
    start: number;
    end: number;
}

export type PoolItemsInterface = Record<string, { [key: string]: PoolItemInterface }>;
export type PoolItemsDict = Record<string, PoolItemInterface>;

export interface PriceRatesInterface {
    [key: string]: { [key: string]: number }; // key je FIAT, value je objekt obsahující ceny pro jednotlivé tokeny
}