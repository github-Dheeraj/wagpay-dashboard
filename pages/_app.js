import "../styles/globals.css";
import Bundlr from "@bundlr-network/client";
import { useEffect, useState, useRef } from "react";
import { constants, providers, utils } from "ethers";
import { MainContext } from "./context";

function MyApp({ Component, pageProps }) {
  const [bundlrInstance, setBundlrInstance] = useState();
  const [bundlrBalance, setBundlrBalance] = useState();
  const refBundlr = useRef();

  const initialize = async () => {
    //const jwk = JSON.parse(fs.readFileSync("wallet.json").toString());
    await window.ethereum.enable();
    const provider = new providers.Web3Provider(window.ethereum);
    await provider._ready();

    const jwk = process.env.AR_KEY;

    const bundlr = new Bundlr(
      "http://devnet.bundlr.network",
      "ethereum",
      "5207e1b3aa113e900b809b8327859d226d56b98868b3a64fc74da754fe7123a2",
      {
        providerUrl: provider
        //contractAddress: "0x326C977E6efc84E512bB9C30f76E30c160eD06FB"
      }


    );
    //await bundlr.ready();
    setBundlrInstance(bundlr);
    refBundlr.current = bundlr;
    fetchBalance();
  };

  const fetchBalance = async () => {
    const balance = await refBundlr.current.getLoadedBalance();
    console.log("balance: ", utils.formatEther(balance.toString()));
    setBundlrBalance(utils.formatEther(balance.toString()));
  };
  return (
    <div style={styleContainer}>
      <MainContext.Provider
        value={{
          initialize,
          fetchBalance,
          bundlrBalance,
          bundlrInstance
        }}
      >
        <Component {...pageProps} />
      </MainContext.Provider>
    </div >
  )
}

const styleContainer = {
  width: '900px',
  margin: '0 auto',
  padding: '40px',
}
export default MyApp;

