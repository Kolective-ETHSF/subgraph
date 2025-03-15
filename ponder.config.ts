import { createConfig } from "ponder";
import { http } from "viem";
import { CoreABI } from "./abis/CoreABI";
import { TokenABI } from "./abis/TokenABI";

export default createConfig({
  // database: {
  //   kind: "postgres",
  //   connectionString: process.env.PONDER_DATABASE_URL,
  // },
  networks: {
    baseSepolia: {
      chainId: 84532,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
  },
  contracts: {
    Core: {
      network: "baseSepolia",
      abi: CoreABI,
      address: "0x0b2a6A4404332D720Ac09C96701976fd1df32CDa",
      startBlock: 23149829,
    },
    USDC: {
      network: "baseSepolia",
      abi: TokenABI,
      address: "0xdC5365fa140b187408f730B09C9E4eedEd821410",
      startBlock: 23149829,
    },
    ETH: {
      network: "baseSepolia",
      abi: TokenABI,
      address: "0xb9d8963158292beE31aF6F5adb86923699844EC5",
      startBlock: 23149829,
    },
    BTC: {
      network: "baseSepolia",
      abi: TokenABI,
      address: "0xdDA5Ce3266a4D996df2Cc0f8B8F5a1265CB08dbA",
      startBlock: 23149829,
    },
    WETH: {
      network: "baseSepolia",
      abi: TokenABI,
      address: "0xaf7c25364340FFE723D1cbb5F97B0a85371D629d",
      startBlock: 23149829,
    },
    PEPE: {
      network: "baseSepolia",
      abi: TokenABI,
      address: "0xdaaF857E8CE014A6297fe9EF7773A07C8c3f7249",
      startBlock: 23149829,
    },
    TRUMP: {
      network: "baseSepolia",
      abi: TokenABI,
      address: "0x416228aC9aA0c4fbe25B85F45cb27833A92aF2a6",
      startBlock: 23149829,
    },
    DOGEAI: {
      network: "baseSepolia",
      abi: TokenABI,
      address: "0x059b916F86793376c3805830A56939d26712cCa5",
      startBlock: 23149829,
    },
    WIF: {
      network: "baseSepolia",
      abi: TokenABI,
      address: "0x7873537380B3C5978629F8fF618a0451B4bf6f7D",
      startBlock: 23149829,
    },
    STONKS: {
      network: "baseSepolia",
      abi: TokenABI,
      address: "0xd8e76e3D5367688131d716a3156A40ddE55DAeA2",
      startBlock: 23149829,
    },
  },
});
