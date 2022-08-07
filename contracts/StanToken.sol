// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Stan is ERC20 {
    constructor() ERC20("StanToken", "STN") {
        _mint(msg.sender, 10000 * 10 ** decimals());
    }
}
