# Documentation

All YokaiSwap pairs consist of two different tokens. CKB is not a native currency in YokaiSwap, and is represented only by WCKB in the pairs.

The canonical WCKB address used by the YokaiSwap interface is `0xe934f463d026d97f6ce0a10215d0ac4224f0a930`.

Results are cached for 5 minutes (or 300 seconds).

## [`/summary`](https://info.yokaiswap.com/api/summary)

Returns data for the top ~1000 YokaiSwap pairs, sorted by reserves.

### Request

`GET https://info.yokaiswap.com/api/summary`

### Response

```json5
{
  updated_at: 1234567, // UNIX timestamp
  data: {
    "0x..._0x...": {
      // ERC20 token addresses, joined by an underscore
      price: "...", // price denominated in token1/token0
      base_volume: "...", // last 24h volume denominated in token0
      quote_volume: "...", // last 24h volume denominated in token1
      liquidity: "...", // liquidity denominated in USD
      liquidity_BNB: "...", // liquidity denominated in CKB
    },
    // ...
  },
}
```

## [`/tokens`](https://info.yokaiswap.com/api/tokens)

Returns the tokens in the top ~1000 pairs on YokaiSwap, sorted by reserves.

### Request

`GET https://info.yokaiswap.com/api/tokens`

### Response

```json5
{
  updated_at: 1234567, // UNIX timestamp
  data: {
    "0x...": {
      // the address of the ERC20 token
      name: "...", // not necessarily included for ERC20 tokens
      symbol: "...", // not necessarily included for ERC20 tokens
      price: "...", // price denominated in USD
      price_BNB: "...", // price denominated in CKB
    },
    // ...
  },
}
```

## [`/tokens/0x...`](https://info.yokaiswap.com/api/tokens/0xb02c930c2825a960a50ba4ab005e8264498b64a0)

Returns the token information, based on address.

### Request

`GET https://info.yokaiswap.com/api/tokens/0xb02c930c2825a960a50ba4ab005e8264498b64a0`

### Response

```json5
{
  updated_at: 1234567, // UNIX timestamp
  data: {
    name: "...", // not necessarily included for ERC20 tokens
    symbol: "...", // not necessarily included for ERC20 tokens
    price: "...", // price denominated in USD
    price_BNB: "...", // price denominated in CKB
  },
}
```

## [`/pairs`](https://info.yokaiswap.com/api/pairs)

Returns data for the top ~1000 YokaiSwap pairs, sorted by reserves.

### Request

`GET https://info.yokaiswap.com/api/pairs`

### Response

```json5
{
  updated_at: 1234567, // UNIX timestamp
  data: {
    "0x..._0x...": {
      // the asset ids of CKB and ERC20 tokens, joined by an underscore
      pair_address: "0x...", // pair address
      base_name: "...", // token0 name
      base_symbol: "...", // token0 symbol
      base_address: "0x...", // token0 address
      quote_name: "...", // token1 name
      quote_symbol: "...", // token1 symbol
      quote_address: "0x...", // token1 address
      price: "...", // price denominated in token1/token0
      base_volume: "...", // volume denominated in token0
      quote_volume: "...", // volume denominated in token1
      liquidity: "...", // liquidity denominated in USD
      liquidity_BNB: "...", // liquidity denominated in CKB
    },
    // ...
  },
}
```
