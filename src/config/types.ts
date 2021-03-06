export type PoolId = string; // je celkem jedno, co konrétně to bude, ale mohla by to být např. adresa chytrého kontraktu. Stejně jako např. na Balanceru v url: např. https://pools.balancer.exchange/#/pool/0x59a19d8c652fa0284f44113d0ff9aba70bd46fb4/

export interface InputInterface {
    address: string; // '0x2bb665722a122dd8a80c9d8625430fa1bcc6c3fc'
    exchange: string;
}

export interface PoolItemInterface {
    exchange: string;
    hodlReturnUsd: number; // difference in HODL value now and at the beginning
    netReturnUsd: number; // difference in pool value now and at the beginning
    dexReturnUsd: number; // fees - impermanent_loss - tx_cost
    feesUsd: number; // total user's fee gains
    impLossRel: number | undefined; //  None in case of changes in lp balance
    impLossUsd: number; // impermanent loss
    txCostEth: number | undefined; // v ETH
    endBalanceUsd: number;
    userAddr: string;
    poolId: string; // pool smart contract address
    tokens: Array<{ [key: string]: {} }>;
    tokenWeights: Array<number>;
    endTokenBalance: Array<number>; // User token balances
    endTokenPricesUsd: Array<number>;
    start: number;
    end: number;
    tokenPriceUsd: Array<number>;
    tokenBalanceDiffNoFees: Array<number>;
    hodlReturnEth: number;
    netReturnEth: number;
    feesEth: number;
    endBalanceEth: number;
}

export type PoolItemsInterface = Record<string, { [key: string]: PoolItemInterface }>;
export type PoolItemsDict = Record<string, PoolItemInterface>;

export interface PriceRatesInterface {
    [key: string]: { [key: string]: number }; // key je FIAT, value je objekt obsahující ceny pro jednotlivé tokeny
}
