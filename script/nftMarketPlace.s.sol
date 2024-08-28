// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/nftMarketPlace.sol";

contract nftMarketPlaceScript is Script {
    nftMarketPlace public marketplace;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        marketplace = new nftMarketPlace();
        marketplace.mintNFT(msg.sender, "https://example.com/metadata.json");

        vm.stopBroadcast();
    }
}
