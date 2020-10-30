// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731
export interface Network {
  messagePrefix: string;
  bech32: string;
  bip32: Bip32;
  pubKeyHash: number;
  scriptHash: number;
  wif: number;
}

interface Bip32 {
  public: number;
  private: number;
}

export const wagerr: Network = {
  messagePrefix: '\x18Wagerr Signed Message:\n',
  bech32: 'bc', // not available
  bip32: {
    public: 0x0221312b,
    private: 0x022d2533,
  },
  pubKeyHash: 0x49,
  scriptHash: 0x3f,
  wif: 0xc7,
};
export const regtest: Network = {
  messagePrefix: '\x18Wagerr Signed Message:\n',
  bech32: 'bcrt', // not available
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};
export const testnet: Network = {
  messagePrefix: '\x18Wagerr Signed Message:\n',
  bech32: 'tb', // not available
  bip32: {
    public: 0x3a8061a0,
    private: 0x3a805837,
  },
  pubKeyHash: 0x41,
  scriptHash: 0x7d,
  wif: 0xb1,
};
