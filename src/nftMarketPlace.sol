// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract nftMarketPlace is ERC721URIStorage, Ownable {
    uint256 public nextTokenId;
    address public marketplaceToken;

    constructor() ERC721("nftMarketPlace", "NMP") Ownable(msg.sender) {
        marketplaceToken = 0x6B2Dbd50b57c0b3D4324734076248A3A81A92270; // The specified token address
    }

    function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns (uint256) {
        uint256 tokenId = nextTokenId;
        _mint(recipient, tokenId);
        _setTokenURI(tokenId, tokenURI);
        nextTokenId++;
        return tokenId;
    }

    function burnNFT(uint256 tokenId) public onlyOwner {
        _burn(tokenId);
    }
}
