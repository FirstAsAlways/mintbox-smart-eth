import React, { useRef, useState } from "react";
import { provider } from "../../providers/ethers.provider";
import MessageBox from "./MessageBox";

function HomePage() {
  const [messageBoxMessage, setMessageBoxMessage] = useState("Message Box");
  const [isShowMessageBox, setIsShowMessageBox] = useState(false);

  const [account, setAccount] = useState(null); // wallet address

  const [totalSupply, setTotalSupply] = useState(0); // whole collection minted count
  const [collectionSize, setCollectionSize] = useState(0); // collection size

  const mintMax = 10;
  const [mintNum, setMintNum] = useState(1); // number of NFTs to be minted , 1 or 2 for pre-sale, <=5 for public sale

  const requestConnect = async () => {
    await provider.send("eth_requestAccounts", []);
    const providerAddress = await provider.getSigner().getAddress();
    setAccount(providerAddress);
  };

  const connectMetaMaskButtonOnClick = async (e) => {
    try {
      await requestConnect();
      // get the minted count
      // const mintedCount = await dollIslandContract.totalSupply();
      // setMintedCount(mintedCount);
    } catch (err) {
      setMessageBoxMessage("Error connecting to MetaMask");
      setIsShowMessageBox(true);
    }
  };

  const mintButtonOnClick = async (e) => {
    if (account && mintNum >= 1 && mintNum <= mintMax) {
      try {
        // await dollIslandContract.presaleMint(mintNum, data.nonce, data.signature, { value: ethers.BigNumber.from("60000000000000000").mul(mintNum) });
        // await dollIslandContract.publicMint(mintNum, {
        //   value: ethers.BigNumber.from("45000000000000000").mul(mintNum),
        // });
        throw "Todo";
      } catch (error) {
        setMessageBoxMessage("Error Minting");
        setIsShowMessageBox(true);
      }
    }
  };

  return (
    <main className="h-full">
      {/* Message Overlay */}
      <MessageBox
        show={isShowMessageBox}
        onOkClick={(e) => {
          setIsShowMessageBox((isShow) => {
            !isShow;
          });
        }}
      >
        {messageBoxMessage}
      </MessageBox>

      <div className="container h-full flex flex-col justify-center items-center">
        {/* Main Component */}
        <div className="w-fit flex flex-col justify-center items-center text-center border-4 border-black rounded-lg p-10">
          {account ? (
            // Wallet connected
            <React.Fragment>
              <div className="text-6xl font-bold pb-6">{`${totalSupply} / ${collectionSize}`}</div>

              <div className="text-3xl font-bold pb-3">0.01 ETH / Mint</div>

              <div className="text-3xl font-bold pb-10">
                {`Wallet : ${account.substring(0, 6)}...${account.substring(
                  account.length - 2
                )}`}
              </div>

              {/* Number of NFTs to be minted  */}
              <div className="text-lg font-bold">
                Number of NFT(s) to be Minted:
              </div>

              <div className="my-3 flex flex-row justify-center items-center">
                <button
                  className="shadow-text w-10 hover:text-4xl text-3xl"
                  onClick={(e) => {
                    if (mintNum > 1) {
                      setMintNum(mintNum - 1);
                    }
                  }}
                >
                  ◀
                </button>

                <p className="shadow-text text-6xl px-4">{mintNum}</p>

                <button
                  className="shadow-text w-10 hover:text-4xl text-3xl"
                  onClick={(e) => {
                    if (mintNum < mintMax) {
                      setMintNum(mintNum + 1);
                    }
                  }}
                >
                  ▶
                </button>
              </div>

              {/* Mint Button */}
              <button
                className="mt-3 w-fit border-4 border-black rounded-lg px-5 py-3 text-xl font-bold"
                onClick={mintButtonOnClick}
              >
                Mint
              </button>
            </React.Fragment>
          ) : (
            // Before connecting to the wallet
            <React.Fragment>
              <div className="text-3xl font-bold pb-10">0.01 ETH / Mint</div>

              <button
                className="w-fit border-4 border-black rounded-lg px-5 py-3 text-xl font-bold"
                onClick={connectMetaMaskButtonOnClick}
              >
                Connect MetaMask
              </button>
            </React.Fragment>
          )}
        </div>
      </div>
    </main>
  );
}
export default HomePage;
