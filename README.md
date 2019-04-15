# Project 6: Architect a Blockchain Supply Chain

## UML

* Activity

![image1](https://github.com/kazpot/UDACITY_Blockchain_SupplyChain/blob/master/images/Activitydiagram.png?raw=true)

* Sequence

![image2](https://github.com/kazpot/UDACITY_Blockchain_SupplyChain/blob/master/images/SequenceDiagram.png?raw=true)

* State

![image3](https://github.com/kazpot/UDACITY_Blockchain_SupplyChain/blob/master/images/StateDiagram.png?raw=true)

* Class (Data Model)

![image4](https://github.com/kazpot/UDACITY_Blockchain_SupplyChain/blob/master/images/ClassDiagram.png?raw=true)

## Versions
* node `11.8.0`
* Truffle `4.1.15`
* web3 `1.0.0`

## Libraries
Necessary for connecting to rinkeby network
```
npm install truffle-hdwallet-provider
```

## Contract
`0x12b948f85dd45ad22568d06e23cf2f9e963de59abc3b70a65ec3d0358bee446d`

## Test
```
$ ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
$ truffle test
```

## Run application locally

1. Deploy contract
```
$ truffle compile
$ truffle migrate
```

2. Log in to metamask and switch to rinkeby network

3. Run node
```
$ npm run dev
```
