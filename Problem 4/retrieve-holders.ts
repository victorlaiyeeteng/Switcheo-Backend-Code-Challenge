import { ethers } from "ethers";

const SWTHAddress = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";

const SWTHAbi = [
    "function balanceOf(address) view returns (uint)",
];

const provider = new ethers.JsonRpcProvider("https://bsc-dataseed1.binance.org/");

const SWTHContract = new ethers.Contract(SWTHAddress, SWTHAbi, provider);

const addresses = [
    "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430", 
    "0x0020c5222a24e4a96b720c06b803fb8d34adc0af", 
    "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392",
];

async function getBalances() {
    const balances : { [address: string]: ethers.BigNumberish } = {};
    for (const address of addresses) {
        const balance = await SWTHContract.balanceOf(address);
        balances[address] = balance;
    }
    return balances;
}

getBalances().then((balances) => {
    for (const address of addresses) {
        console.log(`${address} ${ethers.formatUnits(balances[address], 8)}`);
    }
})
