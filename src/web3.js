import Web3 from "web3";

let web3;

function main() {
  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    // We are in the browser and metamask is running.
    window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new Web3(window.ethereum);
  }
  // } else {
  //   // We are on the server *OR* the user is not running metamask
  //   const provider = new Web3.providers.HttpProvider(
  //     "https://rinkeby.infura.io/v3/7b3c38ebdc7c42f589edd9672188abd9"
  //   );
  //   web3 = new Web3(provider);
  // }

  return web3;
}

export default main;
