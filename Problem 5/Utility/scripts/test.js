// Search for SWTH Token from holder from Problem 4
const ADDRESS = "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430"
const TOKENS = [
    // SWTH Token
    "0xc0ecb8499d8da2771abcbf4091db7f65158f1468"
]

const test = async() => {
    const Balance = await ethers.getContractFactory("Balance");
 
    // Start deployment, returning a promise that resolves to my Balance contract object
    const balanceContract = await Balance.deploy(); 

    const balances = await balanceContract.getBalances(ADDRESS, TOKENS);

    return balances;
}
 
test()
    .then(console.log)
    .catch(error => {
        console.error(error);
        process.exit(1);
    });