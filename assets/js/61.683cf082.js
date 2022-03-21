(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{435:function(t,e,r){"use strict";r.r(e);var a=r(17),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"frontmatter-title"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),r("p",[t._v(t._s(t.$frontmatter.description))]),t._v(" "),r("p",[t._v("This section provides examples for Filecoin Storage mining setups in the hope that they can help and guide other miners to plan and make the right choices when acquiring and setting up their mining infrastructure. Note that any storage mining setup must meet the "),r("RouterLink",{attrs:{to:"/mine/hardware-requirements.html"}},[t._v("minimal hardware requirements")]),t._v(".")],1),t._v(" "),r("p",[t._v("::: callout\nWe are working to improve this section. If you would like to share your mining setup, please use the link at the bottom to edit the page!\n:::")]),t._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#protocol-labs-example-architecture"}},[t._v("Protocol Labs example architecture")])])])]),r("p"),t._v(" "),r("h2",{attrs:{id:"protocol-labs-example-architecture"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#protocol-labs-example-architecture"}},[t._v("#")]),t._v(" Protocol Labs example architecture")]),t._v(" "),r("p",[t._v("A PDF is available for download "),r("a",{attrs:{href:"https://filecoin.io/vintage/mining-hardware-config-testnet-v3.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),r("OutboundLink")],1),t._v(":")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Hardware unit")]),t._v(" "),r("th",[t._v("CPU model")]),t._v(" "),r("th",[t._v("GPU")]),t._v(" "),r("th",[t._v("RAM")]),t._v(" "),r("th",[t._v("Disk")]),t._v(" "),r("th",[t._v("Processes")]),t._v(" "),r("th",[t._v("Notes")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Storage miner + Node")]),t._v(" "),r("td",[t._v("AMD Epyc 7402 (24 cores)")]),t._v(" "),r("td",[t._v("Nvidia Quadro RTX 6000")]),t._v(" "),r("td",[t._v("128-256GB")]),t._v(" "),r("td",[t._v("Unspecified")]),t._v(" "),r("td",[t._v("1x venus "),r("br"),r("br"),t._v("1x venus-miner")]),t._v(" "),r("td",[t._v("The miner delegates sealing functions to the workers below.")])]),t._v(" "),r("tr",[r("td",[t._v("PC1 workers")]),t._v(" "),r("td",[t._v("AMD Epyc 7F32 DP/UP (8 cores)")]),t._v(" "),r("td",[t._v("-")]),t._v(" "),r("td",[t._v("128-256GiB")]),t._v(" "),r("td",[t._v("6 x 1-2TiB SSD scratch disk")]),t._v(" "),r("td",[t._v("6x venus-worker")]),t._v(" "),r("td",[t._v("Runs 6 Venus seal workers in parallel for PreCommit1 phase only.")])]),t._v(" "),r("tr",[r("td",[t._v("PC2, Commit workers")]),t._v(" "),r("td",[t._v("AMD Epyc 7402 (24 cores)")]),t._v(" "),r("td",[t._v("2 x Nvidia Quadro RTX 6000")]),t._v(" "),r("td",[t._v("256GiB")]),t._v(" "),r("td",[t._v("2-4TiB SSD scratch disk(s)")]),t._v(" "),r("td",[t._v("1x venus-worker (PC2) "),r("br"),r("br"),t._v(" 1x venus-worker (Commit)")]),t._v(" "),r("td",[t._v("One worker dedicated to PreCommit2 and another to the Commit phase")])])])])])}),[],!1,null,null,null);e.default=o.exports}}]);