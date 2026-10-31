import TransgateConnect from "@zkpass/transgate-js-sdk"

const verify = async () => {
  try {
    // The appid of the project created in dev center
    const appid = "6c7176ce-acac-4c51-b587-603fe19426ce"

    // Create the connector instance
    const connector = new TransgateConnect(appid)
    // The schema id of the project
    const schemaId = ""

    // Launch the process of verification
    // When running the TransGate SDK on a PC, if the user has not installed TransGate,
    // a QR code will pop up. The user can scan it using the TransGate App on their 
    // phone to complete verification (iOS users can directly use the system scanner)
    // or install TransGate from the Google Play Store. On mobile DApps, 
    // TransGate will automatically invoke the TransGate App.
    // If it is not installed, the user will be prompted to install it.
    const res = await connector.launch(schemaId)
    
    //If you want to bind the user's address with the proof, the `launch` function
    //also accepts a second parameter, which is the user's wallet address.
    const address = "0xD038048D1AE4c04dF2759F33BFda969999999641"
    const responseWithAddress = await connector.launch(schemaId, address)

    // verifiy the res onchain/offchain based on the requirement  
    } catch (error) {
    console.log('transgate error', error)
  }
}