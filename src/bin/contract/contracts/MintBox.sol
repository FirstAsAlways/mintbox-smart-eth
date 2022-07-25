// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// ERC721A v4
import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MintBox is ERC721A, Ownable {
    string private _baseTokenURI;

    bool public isMintActive = false;
    uint256 public maxSupply = 10000;
    uint256 public maxMintPerWallet = 10;
    uint256 public maxMintPerTx = 5;

    constructor() ERC721A("MintBox", "MINTBOX") {}

    function freeMint(uint256 quantity) external payable {
        require(isMintActive, "Mint inactive");
        require(msg.sender == tx.origin, "The caller is another contract");
        require(quantity <= maxMintPerTx, "can not mint this mant at one tx");
        require(totalSupply() + quantity <= maxSupply, "reached max supply");
        require(
            _numberMinted(msg.sender) + quantity <= maxMintPerWallet,
            "can not mint this many for one wallet"
        );
        // msg.sender must be EOA, _safemint's unnecessary
        _mint(msg.sender, quantity);
    }

    // optional, for debug
    function numberMinted(address owner) public view returns (uint256) {
        return _numberMinted(owner);
    }

    // optional, for debug
    function setMaxMintPerWallet(uint256 _maxMint) external onlyOwner {
        maxMintPerWallet = _maxMint;
    }

    // optional, for debug
    function setMaxSupply(uint256 _maxSupply) external onlyOwner {
        require(totalSupply() <= _maxSupply, "reached _maxSupply");
        maxSupply = _maxSupply;
    }

    function setIsMintActive(bool _isActive) external onlyOwner {
        isMintActive = _isActive;
    }

    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }

    function setBaseURI(string calldata baseURI) external onlyOwner {
        _baseTokenURI = baseURI;
    }

    // no ReentrancyGuard needed for Ownable
    function withdraw() public payable onlyOwner {
        (bool success, ) = payable(msg.sender).call{
            value: address(this).balance
        }("");
        require(success, "Transfer failed.");
    }
}
