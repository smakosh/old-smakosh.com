---
id: 27
path: '/how-to-make-an-nft'
thumbnail: './nft.jpg'
date: 2021-11-23T15:10:01.889Z
edited: 2021-11-23T15:10:01.889Z
next: '/2020-in-year-review'
title: 'How to make an NFT'
tags:
  - dev
  - tech
  - react
popular: false
draft: false
---

> You can collect this article as an NFT [Here](https://mirror.xyz/smakosh.eth/eLXmQJ0Rb1Ahd1Pi3TpnSOzpVytCJB1kxcO2WXnF4uI)

As there is a new trend these days and as I’ve been working on this area recently, I thought of writing this article to explain what an NFT is and how can you make one.

NFT stands for Non fungible token which basically means that this kind of token is unique and cannot be split unlike a fungible token. You can think of this as an Art piece like the Monalisa that is unique and loses its value once it gets split. While money for example can be split and exchanged as it’s not something unique.

![How to make an NFT](nft.jpg 'How to make an NFT')

> Photo by [Atahan Guc](https://unsplash.com/@ataguan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/monalisa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

This trend started earlier in 2017 when a project known as Crypto kitties launched, which lets you connect your Crypto wallet and create an NFT in the form of a cute kitten which has some associated attributes like what the kitten is wearing, color etc...

And correct if I'm wrong, but I think the folks behind that project are the ones who pioneered the ERC-721 smart contract which lets you mint NFTs, as it acts like an API or a link between the owner of the NFT and the NFT itself.

So with this out of the way, let us explore how to make one, what do you need to do that and how?

Before you get to this point, you do need to have a basic understanding of the blockchain, especially Ethereum’s blockchain and smart contracts, I’m not going to explain that here but you can let me know if you’re interested in a deep dive explanation.

An NFT can be any digital asset, whether it’s an image, audio or 3D model file, as long it carries with it an object with the right attributes which we call “metadata”.

Once your digital asset has been created, you need an ERC-721 (or ERC-1155) smart contract’s address to use it to mint that NFT.

```solidity
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract NFTFactory is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address contractAddress;

    constructor(string memory name, string memory symbol)
        ERC721(name, symbol)
    {}

    function createToken(string memory tokenURI) public returns (uint256) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        setApprovalForAll(contractAddress, true);
        return newItemId;
    }
}
```

Once your contract is ready, you have to compile and deploy it, there are tools that help with that like Hardhat which I do recommend.

Once the contract is deployed, you can take its address, use the mint function to create a non fungible token.

You may be wondering where the digital asset and the metadata object will be hosted at? That’s indeed a good question, the answer might be different, as each of us has their own opinion, but that gets hosted off-chain or on-chain.

Off-chain, meaning on a centralized database or service like AWS S3, while on-chain means directly on the blockchain using decentralized file system services like IPFS or other alternatives, keep in mind files on IPFS are not permanent and might be deleted if not needed later on automatically.

In this article, I will go with the on-chain approach and use Infura (a premium service) to host the files using IPFS but never loose them. You get up to 5Gb for free.

```ts
import { create as ipfsHttpClient } from 'ipfs-http-client';

// You can grab those keys from Infura.io
const auth = 'Basic ' + Buffer.from(`${INFURA_IPFS_PROJECT_ID}:${INFURA_IPFS_PROJECT_SECRET}`).toString('base64');

const client = ipfsHttpClient({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: res.data.auth,
  },
});

// Upload image to IPFS (getting blob from url, might not needed if you already have the blob)
const blob = await fetch(values.image).then((r) => r.blob());

const image = await client.add(blob);


const data = JSON.stringify({
  attributes: [],
  description: 'description'
  external_url: 'external_url'
  name: 'name'
  image: `https://ipfs.infura.io/ipfs/${image.path}`,
});

// Upload the rest to IPFS
const added = await client.add(data);
const metadataUrl = `https://ipfs.infura.io/ipfs/${added.path}`;
```

Once the files are uploaded, you get an url as response from IPFS and that’s the url we will pass when creating an NFT.

```ts
import { ethers } from 'ethers';
import NFTFactory from '../../../artifacts/contracts/NFTFactory.sol/NFTFactory.json';

const provider = new ethers.providers.Web3Provider(window.ethereum);

// Ask for user signature
const signer = provider.getSigner();

// Mint the NFT using the deployed smart contract
const contract = new ethers.Contract(<YOUR ERC-721 deployed contract address>, NFTFactory.abi, signer);

// Token gets created
// metadataUrl is the url returend by IPFS above
const transaction = await contract.createToken(metadataUrl);
await transaction.wait();
```

Now that your NFT has be minted, you can list it for sale on different marketplaces like OpenSea or Foundation or directly trade via your wallet which is not recommended.

That’s all. Comment down below if you have any questions!

Forgot to plug an open source minting platform I'm currently working on called [Mintify](https://github.com/smakosh/nft-mint-app)

### Credits

Thanks a lot to [Nader Dabit](https://www.youtube.com/c/naderdabit)'s videos and articles that helped me a lot to quickly grasp and understand this and of course dozen of other online content from amazing creators.

Also thanks for Greg for minting an NFT for me to join [Developer DAO](https://www.developerdao.com/) where I'm more active these days.
