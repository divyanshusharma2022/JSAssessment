// create a variable to hold your NFT's
      const NFTcollection = [];
// this function will take in some values as parameters, create an
      // NFT object using the parameters passed to it for its metadata, 
      // and store it in the variable above.
      function mintNFT (_name,_eyecolour,_background,_rarity,_bling) {
        const NFT = {
            "name": _name,
            "eyecolour": _eyecolour,
            "background": _background,
            "rarity": _rarity,
            "bling": _bling
        }
        NFTcollection.push(NFT);
        console.log("Minted: " + _name,"\n");

      }
 // create a "loop" that will go through an "array" of NFT's
      // and print their metadata with console.log()
      function listNFTs () {
        for(let i = 0; i < NFTcollection.length; i++){
            console.log("name: \t\t" + NFTcollection[i].name);
            console.log("eyecolour: \t" + NFTcollection[i].eyecolour);
            console.log("background: " + NFTcollection[i].background);
            console.log("rarity: \t" + NFTcollection[i].rarity);
            console.log("bling: \t\t" + NFTcollection[i].bling,"\n");
        }

      }
// print the total number of NFTs we have minted to the console
      function getTotalSupply() {
        console.log(NFTcollection.length);

      }
 // call your functions below this line
      mintNFT("Jack","Yellow","Golden","Legedary","Broken compass");
      mintNFT("Black beard","Purple","Voilet","Epic","Hook and peg leg");
      listNFTs();
      getTotalSupply();
