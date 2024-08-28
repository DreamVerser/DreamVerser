// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/nftMarketPlace.sol";

contract nftMarketPlaceTest is Test {
    nftMarketPlace public marketplace;

    function setUp() public {
        marketplace = new nftMarketPlace();
    }

    function testMintNFT() public {
        uint256 tokenId = marketplace.mintNFT(address(this), "https://example.com/metadata.json");
        assertEq(marketplace.ownerOf(tokenId), address(this));
    }

    function testBurnNFT() public {
        uint256 tokenId = marketplace.mintNFT(address(this), "https://example.com/metadata.json");
        marketplace.burnNFT(tokenId);
        try marketplace.ownerOf(tokenId) {
            fail("Token should be burned");
        } catch Error(string memory) {
            // Expected revert as the token should be burned
        }
    }
}
