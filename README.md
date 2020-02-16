### SimplEE State Provider (simplEE-sp)
SimplEE-sp is an express.js api designed to allow the retrieval of block and transaction data from a mock state provider. This project aims to provide a fundamental extensible format for implementation of a more robust state provider.



#### Block data object format
```
{
  pre:{
    state_root: string,
    ee_state: []
  },
  post:{
    state_root: string,
    ee_state: []
  },
  transactions: [] //transaction is 3 int values sender, receiver, amount

}
```

#### Transaction Format
```
//transaction is 3 int values sender, receiver, amount
[sender, receiver, amount]
```

#### State Format
```
{
  state_root: string,
  ee_state: []
}
```
