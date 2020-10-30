'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.wagerr = {
  messagePrefix: '\x18Wagerr Signed Message:\n',
  bech32: 'bc',
  bip32: {
    public: 0x0221312b,
    private: 0x022d2533,
  },
  pubKeyHash: 0x49,
  scriptHash: 0x3f,
  wif: 0xc7,
};
exports.regtest = {
  messagePrefix: '\x18Wagerr Signed Message:\n',
  bech32: 'bcrt',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};
exports.testnet = {
  messagePrefix: '\x18Wagerr Signed Message:\n',
  bech32: 'tb',
  bip32: {
    public: 0x3a8061a0,
    private: 0x3a805837,
  },
  pubKeyHash: 0x41,
  scriptHash: 0x7d,
  wif: 0xb1,
};
