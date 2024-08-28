const web3 = new Web3(window.ethereum);

const contractABI = [
    {
      "inputs": [
        
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "approvalTime",
          "type": "uint256"
        }
      ],
      "name": "FormApproved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "forumUsername",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "imgurLink",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "dreamStory",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "submissionTime",
          "type": "uint256"
        }
      ],
      "name": "FormSubmitted",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_userAddress",
          "type": "address"
        }
      ],
      "name": "approveForm",
      "outputs": [
        
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        
      ],
      "name": "fee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "formDataMap",
      "outputs": [
        {
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "forumUsername",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "imgurLink",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "dreamStory",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "submissionTime",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "isApproved",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "approvalTime",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getUserByIndex",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        
      ],
      "name": "getUserCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        
      ],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_forumUsername",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_imgurLink",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_dreamStory",
          "type": "string"
        }
      ],
      "name": "submitForm",
      "outputs": [
        
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "submittedUsers",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        
      ],
      "name": "withdraw",
      "outputs": [
        
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ] ;

const contractAddress = '0x9936596b67d92eb9eac5b6983dad5246002711a3';

const contract = new web3.eth.Contract(contractABI, contractAddress);

function sendDataToContract(name, forum, link, message) {
    const functionABI = contract.methods.submitForm(forumUsername, imgurLink, dreamStory).encodeABI();

  
  contract.methods.yourContractMethod(/* Pass encoded data */)
    .send({ from: accounts[0], value: web3.utils.toWei('1000', 'BTT'), gas: 300000 })
    .on('transactionHash', function(hash) {
    })
    .on('receipt', function(receipt) {
    })
    .on('error', function(error) {
    });
}

function sendMail() {
  const name = document.getElementById("name").value;
  const forum = document.getElementById("forum").value;
  const link = document.getElementById("link").value;
  const message = document.getElementById("message").value;

  sendDataToContract(name, forum, link, message);
}
