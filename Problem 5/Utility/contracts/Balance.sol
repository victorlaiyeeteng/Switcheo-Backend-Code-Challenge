// SPDX-License-Identifier: MIT

pragma solidity >= 0.7.3;

// Since we are checking for balance of ERC-20 tokens
interface IERC20 {
    function balanceOf(address account) external view returns (uint);
}

contract Balance {

    function getBalances(address wallet, address[] memory tokens) public view returns (uint256[] memory) {
        uint256[] memory balances = new uint256[](tokens.length);
        for (uint i = 0; i < tokens.length; i++) {
            IERC20 token = IERC20(tokens[i]);
            balances[i] = token.balanceOf(wallet);
        }
        return balances;
    }

}