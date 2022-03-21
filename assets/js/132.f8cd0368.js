(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{513:function(e,t,i){"use strict";i.r(t);var a=i(17),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"frontmatter-title"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),i("p",[e._v('In most blockchain protocols, "miners" are the participants on the network that do the work necessary to advance the blockchain and maintain its validity. For providing these services, miners are compensated in the native cryptocurrency. The term "miner" emerged in the initial Proof-of-Work era, comparing the work done by hardware miners using computational power to secure blockchains with that of gold miners who expended vast physical resources for a chance at a large payout.')]),e._v(" "),i("p",[e._v("Mining in Filecoin works quite differently however -- instead of contributing computational power, miners contribute storage capacity to be used in deals with clients looking to store data.")]),e._v(" "),i("h2",{attrs:{id:"types-of-miners"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#types-of-miners"}},[e._v("#")]),e._v(" Types of miners")]),e._v(" "),i("p",[e._v("The Filecoin network will have multiple types of miners:")]),e._v(" "),i("ul",[i("li",[i("em",[e._v("Storage miners")]),e._v(", responsible for storing files and data on the network.")]),e._v(" "),i("li",[i("em",[e._v("Retrieval miners")]),e._v(", responsible for providing quick pipes to retrieve files.")]),e._v(" "),i("li",[i("em",[e._v("Repair miners")]),e._v(", to be implemented.")])]),e._v(" "),i("p",[i("strong",[e._v("Storage miners")]),e._v(" are the heart of the network. They earn Filecoin by storing data for clients, and computing cryptographic proofs to verify storage across time. The probability of earning the block reward and transaction fees is proportional to the amount of storage the miner contributes to the Filecoin network, and not hashing power.")]),e._v(" "),i("p",[i("strong",[e._v("Retrieval miners")]),e._v(" are the veins of the network. They earn Filecoin by winning bids and mining fees for a particular file, which are determined by the market value of said file's size. A retrieval miner’s bandwidth and bid/initial response time for deals (i.e., latency and proximity to clients) will determine its ability to close retrieval deals on the network. The maximum bandwidth of a retrieval miner will set the total quantity of deals it can make.")]),e._v(" "),i("h2",{attrs:{id:"deals"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#deals"}},[e._v("#")]),e._v(" Deals")]),e._v(" "),i("p",[e._v("Deals are the core function of the Filecoin network, and represent an agreement made between a client and a miner for a storage 'contract'.")]),e._v(" "),i("p",[e._v("Once a client has decided on a miner to store with based on their available capacity, duration, and desired price, they lock up sufficient funds in an associated wallet to cover the total cost of the deal. The deal is then published once the miner has accepted the storage agreement.")]),e._v(" "),i("p",[e._v("After the deal is published, the client then prepares the data for storage and then transfers it to the miner. Upon receiving all of the data, the miner packs the data into a sector, seals it, and begins submitting proofs to the chain. Once the first confirmation has been hit, the client can be certain the data is being stored properly, and the deal has officially begun.")]),e._v(" "),i("p",[e._v("Throughout the lifetime of the deal, the miner submits ongoing proofs to the chain. Clients pay incrementally using the funds they previously locked up. If a proof is missing or delayed, the miner is penalized. More information on this can be found in the "),i("RouterLink",{attrs:{to:"/zh/mine/slashing.html"}},[e._v("slashing")]),e._v(" section.")],1),e._v(" "),i("h2",{attrs:{id:"power-and-rewards"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#power-and-rewards"}},[e._v("#")]),e._v(" Power and rewards")]),e._v(" "),i("p",[e._v("Each Filecoin miner has an associated "),i("em",[e._v("power")]),e._v(" value in the network that is proportional to the amount of space contributed and determines the chances to win the right to mine a block in every epoch. By mining blocks, miners obtain "),i("em",[e._v("block rewards")]),e._v(" and collect fees for the messages included in that block.")]),e._v(" "),i("p",[e._v("Additionally, miners submit storage proofs regularly to the chain. This enables them to obtain "),i("em",[e._v("storage fees")]),e._v(" from the clients that have made deals with them.")]),e._v(" "),i("p",[e._v("Additional details about this can be found in the "),i("RouterLink",{attrs:{to:"/zh/mine/mining-rewards.html"}},[e._v("mining rewards")]),e._v(" section.")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);