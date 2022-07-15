import CollectionConfigInterface from "../lib/CollectionConfigInterface";
import * as Networks from "../lib/Networks";
import * as Marketplaces from "../lib/Marketplaces";
import whitelistAddresses from "./whitelist.json";
import NetworkConfigInterface from "../lib/NetworkConfigInterface";

export const ethereumTestnet: NetworkConfigInterface = {
  chainId: 5,
  symbol: "ETH (test)",
  blockExplorer: {
    name: "Etherscan (Goerli)",
    generateContractUrl: (contractAddress: string) =>
      `https://goerli.etherscan.io/address/${contractAddress}`,
    generateTransactionUrl: (transactionAddress: string) =>
      `https://goerli.etherscan.io/tx/${transactionAddress}`,
  },
};

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: "MiniMetisNFT",
  tokenName: "MiniMetis NFT Token",
  tokenSymbol: "MMT",
  hiddenMetadataUri: "ipfs://__CID__/hidden.json",
  maxSupply: 1000,
  whitelistSale: {
    price: 0,
    maxMintAmountPerTx: 5,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.09,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x50E42A21d93998Ee2F9140E738614a44F6BD079b",
  marketplaceIdentifier: "minimetis-nft-token",
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
