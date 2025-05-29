
## **⚡ CRITICAL INSTRUCTION FOR AI: GENERATE ALL CODE COMPLETELY**

**MANDATORY**: Generate EVERY SINGLE FILE with COMPLETE IMPLEMENTATION. No placeholders, no "// TODO", no incomplete functions. Every file must be 100% functional and production-ready.

**GENERATE STRUCTURE**: Follow the exact file structure provided. Create ALL files listed without exception.

---

## **📋 PROJECT OVERVIEW**

Create a **complete modular multi-chain platform** combining:
- **Backend**: Node.js TypeScript API with modular chain support
- **Frontend**: React TypeScript with modular API integration  
- **DEX Features**: PUMP.FUN-style token deployment and trading
- **Bridge System**: Cross-chain transactions with Sepolia as main test chain
- **Modular Architecture**: Easy chain addition (just add env + service)

## **⛓️ TARGET CHAINS CONFIGURATION (5 CHAINS TOTAL)**

### **Complete Chain Network Details:**
```typescript
const CHAIN_CONFIGS = {
  // MAIN TEST CHAIN
  sepolia: {
    chainId: 11155111,
    name: "Sepolia Testnet",
    rpc: "https://sepolia.infura.io/v3/YOUR_INFURA_KEY",
    websocket: "wss://sepolia.infura.io/ws/v3/YOUR_INFURA_KEY",
    explorer: "https://sepolia.etherscan.io",
    faucet: "https://sepoliafaucet.com",
    currency: "ETH",
    type: "ETHEREUM_TESTNET",
    specialization: "MAIN_BRIDGE_HUB", // Primary testing chain
    features: ["stable", "well_documented", "high_liquidity"],
    isMainTest: true
  },
  risechain: {
    chainId: 11155931,
    name: "RiseChain Testnet", 
    rpc: "https://testnet.riselabs.xyz",
    websocket: "wss://testnet.riselabs.xyz/ws",
    explorer: "https://explorer.testnet.riselabs.xyz",
    faucet: "https://faucet.testnet.riselabs.xyz",
    currency: "ETH",
    type: "L2_OPTIMIZED",
    specialization: "ULTRA_FAST_TRADING", // 10ms blocks, 50K TPS
    features: ["shreds", "parallel_execution", "gigagas"]
  },
  abstract: {
    chainId: 11124, // Testnet
    name: "Abstract Testnet",
    rpc: "https://api.testnet.abs.xyz", 
    websocket: "wss://api.testnet.abs.xyz/ws",
    explorer: "https://sepolia.abscan.org",
    currency: "ETH",
    type: "ZK_ROLLUP",
    specialization: "SOCIAL_CONSUMER_APPS", // AGW integration
    features: ["agw_wallet", "zk_stack", "social_primitives"]
  },
  zerog: {
    chainId: 16601, // Galileo testnet
    name: "0G Galileo Testnet",
    rpc: "https://evmrpc-testnet.0g.ai",
    explorer: "https://chainscan-galileo.0g.ai", 
    faucet: "https://faucet.0g.ai",
    currency: "A0GI",
    type: "AI_OPTIMIZED",
    specialization: "DATA_AI_LAYER", // 2GB/s storage, AI optimization
    features: ["data_availability", "ai_optimization", "decentralized_storage"]
  },
  somnia: {
    chainId: 50312, // Shannon testnet
    name: "Somnia Shannon Testnet",
    rpc: "https://vsf-rpc.somnia.network", 
    explorer: "https://shannon-explorer.somnia.network",
    faucet: "https://testnet.somnia.network",
    currency: "STT",
    type: "GAMING_OPTIMIZED",
    specialization: "GAMING_METAVERSE", // 1M+ TPS, gaming focus
    features: ["icedb", "multistream_consensus", "reactive_primitives"]
  }
};
```

---

## **🏗️ COMPLETE BACKEND ARCHITECTURE**

### **Exact File Structure (Generate ALL Files):**
```
scryptex-backend/
├── src/
│   ├── chains/                    # Modular chain implementations
│   │   ├── base/
│   │   │   ├── ChainService.ts           # ✅ Abstract base class
│   │   │   ├── EVMChainService.ts        # ✅ EVM-specific base
│   │   │   ├── TransactionHandler.ts     # ✅ Transaction management
│   │   │   ├── BridgeHandler.ts          # ✅ Bridge operations
│   │   │   ├── TokenHandler.ts           # ✅ Token operations
│   │   │   └── ChainRegistry.ts          # ✅ Chain registration system
│   │   ├── sepolia/
│   │   │   ├── SepoliaService.ts         # ✅ Main test chain
│   │   │   ├── SepoliaContracts.ts       # ✅ Contract interfaces
│   │   │   └── SepoliaBridge.ts          # ✅ Bridge implementation
│   │   ├── risechain/
│   │   │   ├── RiseChainService.ts       # ✅ Fast trading chain
│   │   │   ├── ShredsMonitor.ts          # ✅ 10ms block monitoring
│   │   │   └── GigagasOptimizer.ts       # ✅ Gas optimization
│   │   ├── abstract/
│   │   │   ├── AbstractService.ts        # ✅ Social consumer chain
│   │   │   ├── AGWIntegration.ts         # ✅ Abstract Global Wallet
│   │   │   └── SocialPrimitives.ts       # ✅ Social features
│   │   ├── zerog/
│   │   │   ├── ZeroGService.ts           # ✅ AI data chain
│   │   │   ├── DataAvailability.ts       # ✅ DA layer integration
│   │   │   └── AIOptimization.ts         # ✅ AI model handling
│   │   └── somnia/
│   │       ├── SomniaService.ts          # ✅ Gaming chain
│   │       ├── IceDBConnector.ts         # ✅ Ultra-fast database
│   │       └── GamingOptimizer.ts        # ✅ Gaming mechanics
│   ├── controllers/               # API Controllers
│   │   ├── BridgeController.ts           # ✅ Cross-chain bridge
│   │   ├── SwapController.ts             # ✅ DEX operations
│   │   ├── TokenController.ts            # ✅ Token deployment (PUMP.FUN style)
│   │   ├── QuestController.ts            # ✅ Gaming quests
│   │   ├── LiquidityController.ts        # ✅ PUMP.FUN liquidity
│   │   ├── TradingController.ts          # ✅ Trading operations
│   │   └── ChainController.ts            # ✅ Chain management
│   ├── services/                  # Business Logic
│   │   ├── BridgeService.ts              # ✅ Bridge orchestration
│   │   ├── SwapService.ts                # ✅ Multi-chain swaps
│   │   ├── TokenService.ts               # ✅ Token lifecycle
│   │   ├── PumpFunService.ts             # ✅ PUMP.FUN implementation
│   │   ├── LiquidityService.ts           # ✅ Liquidity management
│   │   ├── QuestService.ts               # ✅ Quest system
│   │   ├── GameService.ts                # ✅ Gaming mechanics
│   │   ├── TransactionService.ts         # ✅ Transaction management
│   │   └── ChainRegistryService.ts       # ✅ Dynamic chain addition
│   ├── models/                    # Data Models
│   │   ├── Chain.ts                      # ✅ Chain entity
│   │   ├── Transaction.ts                # ✅ Transaction entity
│   │   ├── Bridge.ts                     # ✅ Bridge entity
│   │   ├── Token.ts                      # ✅ Token entity
│   │   ├── PumpToken.ts                  # ✅ PUMP.FUN token entity
│   │   ├── Liquidity.ts                  # ✅ Liquidity entity
│   │   ├── Quest.ts                      # ✅ Quest entity
│   │   ├── User.ts                       # ✅ User entity
│   │   └── Trading.ts                    # ✅ Trading entity
│   ├── routes/                    # API Routes
│   │   ├── bridge.ts                     # ✅ Bridge endpoints
│   │   ├── swap.ts                       # ✅ Swap endpoints
│   │   ├── token.ts                      # ✅ Token endpoints
│   │   ├── pump.ts                       # ✅ PUMP.FUN endpoints
│   │   ├── quest.ts                      # ✅ Quest endpoints
│   │   ├── trading.ts                    # ✅ Trading endpoints
│   │   ├── liquidity.ts                  # ✅ Liquidity endpoints
│   │   └── chains.ts                     # ✅ Chain management
│   ├── middleware/                # Middleware
│   │   ├── auth.ts                       # ✅ Authentication
│   │   ├── validation.ts                 # ✅ Input validation
│   │   ├── rateLimiting.ts               # ✅ Rate limiting
│   │   ├── errorHandler.ts               # ✅ Error handling
│   │   └── logging.ts                    # ✅ Request logging
│   ├── utils/                     # Utilities
│   │   ├── web3Utils.ts                  # ✅ Web3 helpers
│   │   ├── chainUtils.ts                 # ✅ Chain utilities
│   │   ├── cryptoUtils.ts                # ✅ Crypto utilities
│   │   ├── pumpUtils.ts                  # ✅ PUMP.FUN utilities
│   │   ├── priceUtils.ts                 # ✅ Price calculations
│   │   └── validationUtils.ts            # ✅ Validation helpers
│   ├── config/                    # Configuration
│   │   ├── chains.ts                     # ✅ Chain configurations
│   │   ├── database.ts                   # ✅ Database config
│   │   ├── environment.ts                # ✅ Environment config
│   │   ├── contracts.ts                  # ✅ Contract addresses
│   │   └── pumpConfig.ts                 # ✅ PUMP.FUN config
│   ├── contracts/                 # Contract Interfaces
│   │   ├── interfaces/
│   │   │   ├── IERC20.ts                # ✅ ERC20 interface
│   │   │   ├── IBridge.ts               # ✅ Bridge interface
│   │   │   ├── IPumpToken.ts            # ✅ PUMP token interface
│   │   │   └── ILiquidity.ts            # ✅ Liquidity interface
│   │   └── abis/
│   │       ├── BridgeABI.ts             # ✅ Bridge ABI
│   │       ├── TokenABI.ts              # ✅ Token ABI
│   │       ├── PumpABI.ts               # ✅ PUMP contract ABI
│   │       └── LiquidityABI.ts          # ✅ Liquidity ABI
│   ├── types/                     # TypeScript Types
│   │   ├── chain.types.ts               # ✅ Chain types
│   │   ├── bridge.types.ts              # ✅ Bridge types
│   │   ├── token.types.ts               # ✅ Token types
│   │   ├── pump.types.ts                # ✅ PUMP.FUN types
│   │   ├── quest.types.ts               # ✅ Quest types
│   │   └── api.types.ts                 # ✅ API types
│   ├── database/                  # Database
│   │   ├── migrations/
│   │   │   ├── 001_create_chains.sql    # ✅ Chain table
│   │   │   ├── 002_create_tokens.sql    # ✅ Token table
│   │   │   ├── 003_create_bridges.sql   # ✅ Bridge table
│   │   │   ├── 004_create_pump.sql      # ✅ PUMP table
│   │   │   └── 005_create_quests.sql    # ✅ Quest table
│   │   └── seeds/
│   │       ├── chains.seed.ts           # ✅ Chain data
│   │       ├── tokens.seed.ts           # ✅ Initial tokens
│   │       └── quests.seed.ts           # ✅ Default quests
│   └── app.ts                           # ✅ Main application
├── contracts/                     # Smart Contracts
│   ├── Bridge.sol                       # ✅ Cross-chain bridge
│   ├── PumpToken.sol                    # ✅ PUMP.FUN token
│   ├── LiquidityManager.sol             # ✅ Liquidity management
│   ├── QuestNFT.sol                     # ✅ Quest rewards
│   └── TokenFactory.sol                 # ✅ Token deployment
├── deploy/                        # Deployment Scripts
│   ├── deployBridge.ts                  # ✅ Bridge deployment
│   ├── deployPump.ts                    # ✅ PUMP contracts
│   ├── deployTokens.ts                  # ✅ Token deployment
│   ├── setupChains.ts                   # ✅ Chain setup
│   └── verifyContracts.ts               # ✅ Contract verification
├── tests/                         # Tests
│   ├── chains/                          # ✅ Chain tests
│   ├── services/                        # ✅ Service tests
│   ├── controllers/                     # ✅ Controller tests
│   └── integration/                     # ✅ Integration tests
├── docker/                        # Docker Configuration
│   ├── Dockerfile                       # ✅ Backend container
│   ├── docker-compose.yml               # ✅ Multi-service setup
│   └── nginx.conf                       # ✅ Load balancer
├── package.json                         # ✅ Dependencies
├── tsconfig.json                        # ✅ TypeScript config
├── .env.example                         # ✅ Environment template
├── .gitignore                           # ✅ Git ignore
├── README.md                            # ✅ Documentation
└── ecosystem.config.js                  # ✅ PM2 config
```

---

## **🎨 COMPLETE FRONTEND ARCHITECTURE**

### **Exact Frontend Structure (Generate ALL Files):**
```
scryptex-frontend/
├── src/
│   ├── api/                       # Modular API Layer
│   │   ├── base/
│   │   │   ├── ApiClient.ts              # ✅ Base API client
│   │   │   ├── ApiTypes.ts               # ✅ API type definitions
│   │   │   └── ApiUtils.ts               # ✅ API utilities
│   │   ├── chains/
│   │   │   ├── ChainApi.ts               # ✅ Chain operations
│   │   │   ├── SepoliaApi.ts             # ✅ Sepolia specific
│   │   │   ├── RiseChainApi.ts           # ✅ RiseChain specific
│   │   │   ├── AbstractApi.ts            # ✅ Abstract specific
│   │   │   ├── ZeroGApi.ts               # ✅ 0G specific
│   │   │   └── SomniaApi.ts              # ✅ Somnia specific
│   │   ├── services/
│   │   │   ├── BridgeApi.ts              # ✅ Bridge operations
│   │   │   ├── SwapApi.ts                # ✅ Swap operations
│   │   │   ├── TokenApi.ts               # ✅ Token operations
│   │   │   ├── PumpApi.ts                # ✅ PUMP.FUN operations
│   │   │   ├── LiquidityApi.ts           # ✅ Liquidity operations
│   │   │   ├── QuestApi.ts               # ✅ Quest operations
│   │   │   └── TradingApi.ts             # ✅ Trading operations
│   │   └── index.ts                      # ✅ API exports
│   ├── components/                # React Components
│   │   ├── common/
│   │   │   ├── Layout.tsx                # ✅ Main layout
│   │   │   ├── Header.tsx                # ✅ Navigation
│   │   │   ├── Footer.tsx                # ✅ Footer
│   │   │   ├── Sidebar.tsx               # ✅ Sidebar
│   │   │   ├── Loading.tsx               # ✅ Loading states
│   │   │   ├── ErrorBoundary.tsx         # ✅ Error handling
│   │   │   └── Modal.tsx                 # ✅ Modal component
│   │   ├── wallet/
│   │   │   ├── WalletConnect.tsx         # ✅ Wallet connection
│   │   │   ├── WalletInfo.tsx            # ✅ Wallet information
│   │   │   ├── ChainSelector.tsx         # ✅ Chain selection
│   │   │   └── BalanceDisplay.tsx        # ✅ Balance display
│   │   ├── bridge/
│   │   │   ├── BridgeForm.tsx            # ✅ Bridge interface
│   │   │   ├── BridgeHistory.tsx         # ✅ Transaction history
│   │   │   ├── BridgeStatus.tsx          # ✅ Status tracking
│   │   │   └── BridgeQuote.tsx           # ✅ Quote display
│   │   ├── swap/
│   │   │   ├── SwapForm.tsx              # ✅ Swap interface
│   │   │   ├── TokenSelector.tsx         # ✅ Token selection
│   │   │   ├── PriceChart.tsx            # ✅ Price charts
│   │   │   └── SwapHistory.tsx           # ✅ Swap history
│   │   ├── pump/
│   │   │   ├── TokenLaunch.tsx           # ✅ PUMP token launch
│   │   │   ├── TokenList.tsx             # ✅ Token listing
│   │   │   ├── TokenDetails.tsx          # ✅ Token information
│   │   │   ├── BondingCurve.tsx          # ✅ PUMP curve display
│   │   │   └── TokenTrade.tsx            # ✅ Token trading
│   │   ├── trading/
│   │   │   ├── TradingView.tsx           # ✅ Trading interface
│   │   │   ├── OrderBook.tsx             # ✅ Order book
│   │   │   ├── TradingChart.tsx          # ✅ Trading charts
│   │   │   └── PortfolioView.tsx         # ✅ Portfolio
│   │   ├── quest/
│   │   │   ├── QuestList.tsx             # ✅ Available quests
│   │   │   ├── QuestProgress.tsx         # ✅ Progress tracking
│   │   │   ├── QuestRewards.tsx          # ✅ Reward display
│   │   │   └── Leaderboard.tsx           # ✅ User rankings
│   │   └── admin/
│   │       ├── ChainManager.tsx          # ✅ Chain management
│   │       ├── TokenManager.tsx          # ✅ Token management
│   │       └── QuestManager.tsx          # ✅ Quest management
│   ├── hooks/                     # React Hooks
│   │   ├── useApi.ts                     # ✅ API hook
│   │   ├── useWallet.ts                  # ✅ Wallet hook
│   │   ├── useChain.ts                   # ✅ Chain hook
│   │   ├── useBridge.ts                  # ✅ Bridge hook
│   │   ├── useSwap.ts                    # ✅ Swap hook
│   │   ├── usePump.ts                    # ✅ PUMP hook
│   │   ├── useQuest.ts                   # ✅ Quest hook
│   │   └── useTrading.ts                 # ✅ Trading hook
│   ├── pages/                     # Page Components
│   │   ├── Home.tsx                      # ✅ Landing page
│   │   ├── Bridge.tsx                    # ✅ Bridge page
│   │   ├── Swap.tsx                      # ✅ Swap page
│   │   ├── Pump.tsx                      # ✅ PUMP.FUN page
│   │   ├── Trading.tsx                   # ✅ Trading page
│   │   ├── Quest.tsx                     # ✅ Quest page
│   │   ├── Portfolio.tsx                 # ✅ Portfolio page
│   │   └── Admin.tsx                     # ✅ Admin page
│   ├── store/                     # State Management
│   │   ├── index.ts                      # ✅ Store setup
│   │   ├── slices/
│   │   │   ├── walletSlice.ts           # ✅ Wallet state
│   │   │   ├── chainSlice.ts            # ✅ Chain state
│   │   │   ├── bridgeSlice.ts           # ✅ Bridge state
│   │   │   ├── swapSlice.ts             # ✅ Swap state
│   │   │   ├── pumpSlice.ts             # ✅ PUMP state
│   │   │   ├── questSlice.ts            # ✅ Quest state
│   │   │   └── tradingSlice.ts          # ✅ Trading state
│   │   └── middleware/
│   │       ├── apiMiddleware.ts          # ✅ API middleware
│   │       └── persistMiddleware.ts      # ✅ Persistence
│   ├── utils/                     # Utilities
│   │   ├── web3.ts                       # ✅ Web3 utilities
│   │   ├── format.ts                     # ✅ Formatting
│   │   ├── validation.ts                 # ✅ Validation
│   │   ├── constants.ts                  # ✅ Constants
│   │   └── helpers.ts                    # ✅ Helper functions
│   ├── styles/                    # Styling
│   │   ├── globals.css                   # ✅ Global styles
│   │   ├── components.css                # ✅ Component styles
│   │   └── themes.css                    # ✅ Theme styles
│   ├── types/                     # TypeScript Types
│   │   ├── api.types.ts                  # ✅ API types
│   │   ├── wallet.types.ts               # ✅ Wallet types
│   │   ├── chain.types.ts                # ✅ Chain types
│   │   ├── bridge.types.ts               # ✅ Bridge types
│   │   ├── swap.types.ts                 # ✅ Swap types
│   │   ├── pump.types.ts                 # ✅ PUMP types
│   │   └── quest.types.ts                # ✅ Quest types
│   ├── config/                    # Configuration
│   │   ├── chains.ts                     # ✅ Chain configs
│   │   ├── contracts.ts                  # ✅ Contract addresses
│   │   ├── api.ts                        # ✅ API endpoints
│   │   └── wallet.ts                     # ✅ Wallet config
│   ├── App.tsx                           # ✅ Main app
│   ├── index.tsx                         # ✅ Entry point
│   └── vite-env.d.ts                     # ✅ Vite types
├── public/                        # Static Assets
│   ├── index.html                        # ✅ HTML template
│   ├── favicon.ico                       # ✅ Favicon
│   └── assets/                           # ✅ Images/icons
├── package.json                          # ✅ Dependencies
├── tsconfig.json                         # ✅ TypeScript config
├── vite.config.ts                        # ✅ Vite config
├── tailwind.config.js                    # ✅ Tailwind config
├── .env.example                          # ✅ Environment template
└── README.md                             # ✅ Documentation
```

---

## **🎯 PUMP.FUN IMPLEMENTATION STRATEGY**

### **Core PUMP.FUN Features:**
```typescript
interface PumpToken {
  address: string;
  name: string;
  symbol: string;
  description: string;
  image: string;
  creator: string;
  chainId: number;
  
  // PUMP.FUN Specific
  bondingCurve: {
    currentPrice: string;
    marketCap: string;
    progress: number; // 0-100%
    graduationThreshold: string; // Usually $69K
  };
  
  // Trading Data
  volume24h: string;
  holders: number;
  transactions: number;
  liquidity: string;
  
  // Status
  isGraduated: boolean; // Moved to DEX
  launchTime: number;
  graduationTime?: number;
}

interface PumpTradeInfo {
  type: 'buy' | 'sell';
  tokenAmount: string;
  ethAmount: string;
  priceImpact: number;
  newPrice: string;
  newMarketCap: string;
}
```

### **PUMP.FUN Trading Mechanism:**
1. **Token Launch**: Anyone can deploy token with bonding curve
2. **Bonding Curve Trading**: Price increases with each buy, decreases with sell
3. **No LP Creation**: Direct bonding curve trading (not traditional AMM)
4. **Graduation**: At $69K market cap, moves to DEX with liquidity
5. **Auto-Listing**: Graduated tokens automatically tradeable on swap

---

## **📦 COMPLETE DEPENDENCIES**

### **Backend Dependencies:**
```json
{
  "name": "scryptex-backend",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5", 
    "helmet": "^7.1.0",
    "morgan": "^1.10.0",
    "dotenv": "^16.3.1",
    "ethers": "^6.8.1",
    "web3": "^4.2.2",
    "@abstract-foundation/agw-client": "latest",
    "@abstract-foundation/agw-react": "latest",
    "redis": "^4.6.10",
    "pg": "^8.11.3",
    "typeorm": "^0.3.17",
    "winston": "^3.11.0",
    "joi": "^17.11.0",
    "jsonwebtoken": "^9.0.2",
    "bcryptjs": "^2.4.3",
    "axios": "^1.6.0",
    "ws": "^8.14.2",
    "socket.io": "^4.7.5",
    "express-rate-limit": "^7.1.5",
    "compression": "^1.7.4",
    "node-cron": "^3.0.3"
  },
  "devDependencies": {
    "@types/node": "^20.8.9",
    "@types/express": "^4.17.20",
    "typescript": "^5.2.2", 
    "ts-node": "^10.9.1",
    "nodemon": "^3.0.1",
    "jest": "^29.7.0",
    "@types/jest": "^29.5.6",
    "hardhat": "^2.19.0",
    "@nomiclabs/hardhat-ethers": "^2.2.3"
  }
}
```

### **Frontend Dependencies:**
```json
{
  "name": "scryptex-frontend",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.1",
    "@reduxjs/toolkit": "^1.9.7",
    "react-redux": "^8.1.3",
    "ethers": "^6.8.1",
    "wagmi": "^1.4.13",
    "@wagmi/connectors": "^3.1.11",
    "@wagmi/core": "^1.4.13",
    "viem": "^1.19.9",
    "@abstract-foundation/agw-react": "latest",
    "axios": "^1.6.0",
    "react-query": "^3.39.3",
    "react-hook-form": "^7.48.2",
    "recharts": "^2.8.0",
    "lightweight-charts": "^4.1.3",
    "framer-motion": "^10.16.4",
    "lucide-react": "^0.294.0",
    "react-hot-toast": "^2.4.1",
    "socket.io-client": "^4.7.5"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "typescript": "^5.2.2",
    "vite": "^5.0.8",
    "tailwindcss": "^3.3.6",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32"
  }
}
```

---

## **🔐 COMPLETE ENVIRONMENT CONFIGURATION**

### **Backend .env.example:**
```env
# ===== SERVER CONFIGURATION =====
NODE_ENV=development
PORT=3000
API_VERSION=v1
CORS_ORIGIN=http://localhost:5173

# ===== DATABASE CONFIGURATION =====
DATABASE_URL=postgresql://username:password@localhost:5432/scryptex
REDIS_URL=redis://localhost:6379

# ===== SEPOLIA CONFIGURATION (MAIN TEST) =====
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
SEPOLIA_WS_URL=wss://sepolia.infura.io/ws/v3/YOUR_INFURA_KEY
SEPOLIA_PRIVATE_KEY=your_sepolia_private_key
SEPOLIA_BRIDGE_CONTRACT=0x...
SEPOLIA_PUMP_CONTRACT=0x...
SEPOLIA_TOKEN_FACTORY=0x...

# ===== RISECHAIN CONFIGURATION =====
RISECHAIN_RPC_URL=https://testnet.riselabs.xyz
RISECHAIN_WS_URL=wss://testnet.riselabs.xyz/ws
RISECHAIN_PRIVATE_KEY=your_risechain_private_key
RISECHAIN_BRIDGE_CONTRACT=0x...
RISECHAIN_PUMP_CONTRACT=0x...

# ===== ABSTRACT CONFIGURATION =====
ABSTRACT_RPC_URL=https://api.testnet.abs.xyz
ABSTRACT_WS_URL=wss://api.testnet.abs.xyz/ws
ABSTRACT_PRIVATE_KEY=your_abstract_private_key
ABSTRACT_AGW_CONFIG=your_agw_config
ABSTRACT_BRIDGE_CONTRACT=0x...
ABSTRACT_PUMP_CONTRACT=0x...

# ===== 0G CONFIGURATION =====
ZEROG_RPC_URL=https://evmrpc-testnet.0g.ai
ZEROG_PRIVATE_KEY=your_0g_private_key
ZEROG_STORAGE_API=your_0g_storage_api
ZEROG_BRIDGE_CONTRACT=0x...
ZEROG_PUMP_CONTRACT=0x...

# ===== SOMNIA CONFIGURATION =====
SOMNIA_RPC_URL=https://vsf-rpc.somnia.network
SOMNIA_PRIVATE_KEY=your_somnia_private_key
SOMNIA_ICEDB_CONFIG=your_icedb_config
SOMNIA_BRIDGE_CONTRACT=0x...
SOMNIA_PUMP_CONTRACT=0x...

# ===== SECURITY =====
JWT_SECRET=your_super_secret_jwt_key_minimum_32_characters
ENCRYPTION_KEY=your_encryption_key_32_chars
BRIDGE_FEE_PERCENTAGE=0.1
PUMP_FEE_PERCENTAGE=1.0

# ===== EXTERNAL APIS =====
INFURA_PROJECT_ID=your_infura_project_id
ALCHEMY_API_KEY=your_alchemy_api_key
COINGECKO_API_KEY=your_coingecko_api_key
DEFILLAMA_API_KEY=your_defillama_api_key

# ===== MONITORING =====
SENTRY_DSN=your_sentry_dsn
LOG_LEVEL=info
METRICS_PORT=9090

# ===== WEBSOCKET =====
WS_PORT=3001
WS_CORS_ORIGIN=http://localhost:5173
```

### **Frontend .env.example:**
```env
# ===== API CONFIGURATION =====
VITE_API_BASE_URL=http://localhost:3000/api/v1
VITE_WS_URL=ws://localhost:3001

# ===== WALLET CONFIGURATION =====
VITE_WALLET_CONNECT_PROJECT_ID=your_walletconnect_project_id

# ===== CHAIN RPCS =====
VITE_SEPOLIA_RPC=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
VITE_RISECHAIN_RPC=https://testnet.riselabs.xyz
VITE_ABSTRACT_RPC=https://api.testnet.abs.xyz
VITE_ZEROG_RPC=https://evmrpc-testnet.0g.ai
VITE_SOMNIA_RPC=https://vsf-rpc.somnia.network

# ===== CONTRACT ADDRESSES =====
VITE_SEPOLIA_BRIDGE=0x...
VITE_SEPOLIA_PUMP=0x...
VITE_RISECHAIN_BRIDGE=0x...
VITE_ABSTRACT_BRIDGE=0x...
VITE_ZEROG_BRIDGE=0x...
VITE_SOMNIA_BRIDGE=0x...

# ===== FEATURES =====
VITE_ENABLE_DEV_TOOLS=true
VITE_ENABLE_ANALYTICS=false
```

---

## **🎯 MODULAR CHAIN ADDITION SYSTEM**

### **How to Add New Chain (5-Step Process):**

1. **Add Chain Config:**
```typescript
// src/config/chains.ts - Backend
// src/config/chains.ts - Frontend
newchain: {
  chainId: 12345,
  name: "New Chain",
  rpc: "https://rpc.newchain.com",
  // ... other config
}
```

2. **Add Environment Variables:**
```env
# .env
NEWCHAIN_RPC_URL=https://rpc.newchain.com
NEWCHAIN_PRIVATE_KEY=your_private_key
NEWCHAIN_BRIDGE_CONTRACT=0x...
```

3. **Create Chain Service:**
```typescript
// src/chains/newchain/NewChainService.ts
export class NewChainService extends EVMChainService {
  // Chain-specific implementation
}
```

4. **Register in Chain Registry:**
```typescript
// src/chains/base/ChainRegistry.ts
registerChain('newchain', NewChainService);
```

5. **Deploy Contracts:**
```bash
npm run deploy:newchain
```

---

## **🚀 CRITICAL GENERATION INSTRUCTIONS**

### **MANDATORY REQUIREMENTS FOR AI:**

1. **GENERATE ALL FILES**: Every single file in the structure must be created with complete implementation
2. **NO PLACEHOLDERS**: No "// TODO", no "// Implementation needed", no incomplete functions
3. **WORKING CODE**: All code must be functional and production-ready
4. **PROPER IMPORTS**: All imports must be correct and properly typed
5. **ERROR HANDLING**: Comprehensive error handling in every function
6. **TYPE SAFETY**: Full TypeScript typing throughout
7. **MODULAR DESIGN**: Easy to add new chains following the pattern
8. **REAL LOGIC**: Implement actual PUMP.FUN bonding curve calculations
9. **COMPLETE APIS**: All endpoints must be fully functional
10. **FRONTEND INTEGRATION**: Frontend must connect to backend APIs

### **SPECIFIC IMPLEMENTATION REQUIREMENTS:**

#### **Backend Must Include:**
- Complete EVMChainService base class with all methods
- All 5 chain services (Sepolia, RiseChain, Abstract, 0G, Somnia)
- Full PUMP.FUN implementation with bonding curve calculations
- Complete bridge system with cross-chain coordination
- Quest system with gaming mechanics
- WebSocket real-time updates
- Database models with TypeORM
- All API endpoints with validation
- Authentication and authorization
- Rate limiting and security
- Deployment scripts for all contracts
- Complete test suites

#### **Frontend Must Include:**
- Modular API client with all endpoints
- Complete wallet integration (MetaMask, WalletConnect, AGW)
- Bridge interface with real-time status
- PUMP.FUN token launch and trading interface
- Quest system with progress tracking
- Portfolio and trading views
- Responsive design with Tailwind CSS
- State management with Redux Toolkit
- WebSocket integration for real-time updates
- Error handling and loading states
- Form validation and user feedback

#### **PUMP.FUN Specific Requirements:**
- Bonding curve price calculation: `price = basePrice * (1 + supply/maxSupply)^2`
- Graduation threshold: $69,000 market cap
- Automatic DEX listing after graduation
- Real-time price updates via WebSocket
- Token metadata and image upload
- Creator fees and platform fees
- Volume and holder tracking
- Social features (comments, likes)

---

## **📋 STEP-BY-STEP GENERATION PLAN**

### **Generate in This Exact Order:**

1. **Backend Core (Files 1-20)**
   - package.json, tsconfig.json, .env.example
   - Base classes: ChainService, EVMChainService, ChainRegistry
   - All 5 chain services with complete implementation
   - Database models and migrations

2. **Backend Services (Files 21-40)**
   - Bridge service with cross-chain logic
   - PUMP.FUN service with bonding curves
   - Quest service with gaming mechanics
   - All controllers with complete endpoints
   - Middleware and utilities

3. **Backend Infrastructure (Files 41-60)**
   - API routes with validation
   - WebSocket implementation
   - Database configuration
   - Smart contract interfaces
   - Deployment scripts

4. **Frontend Core (Files 61-80)**
   - package.json, vite.config.ts, .env.example
   - API client with all endpoints
   - Base components and hooks
   - Wallet integration

5. **Frontend Features (Files 81-100)**
   - Bridge interface
   - PUMP.FUN trading interface
   - Quest system UI
   - Portfolio and trading views
   - State management

6. **Smart Contracts (Files 101-110)**
   - Bridge contracts
   - PUMP.FUN contracts
   - Token factory
   - Quest NFT contracts

7. **Deployment & Tests (Files 111-120)**
   - Docker configuration
   - Test suites
   - Deployment scripts
   - Documentation

---

**GENERATE EVERY SINGLE FILE WITH COMPLETE, WORKING, PRODUCTION-READY CODE. NO EXCEPTIONS.**