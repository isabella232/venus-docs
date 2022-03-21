(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{506:function(s,t,a){"use strict";a.r(t);var e=a(17),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"孵化中心节点迁出指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#孵化中心节点迁出指南"}},[s._v("#")]),s._v(" 孵化中心节点迁出指南")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://venus.filecoin.io/zh/incubation/Rules.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("孵化中心"),a("OutboundLink")],1),s._v("的存储提供者在其参与的阶段结束后，节点面临迁出的问题。目前主网运行中的Filecoin实现有Lotus和Venus，所以相关节点可选择的方案有：")]),s._v(" "),a("ul",[a("li",[s._v("加入第三方搭建的Venus链服务；")]),s._v(" "),a("li",[s._v("自行搭建Venus链服务；")]),s._v(" "),a("li",[s._v("切换为Lotus；")])]),s._v(" "),a("p",[s._v("以上是当前阶段存储提供者可选的方案，这里我们对”如何接入自己搭建的Venus链服务“以及“如何切换为Lotus“的方案进行说明。")]),s._v(" "),a("br"),s._v(" "),a("h2",{attrs:{id:"自行搭建venus链服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自行搭建venus链服务"}},[s._v("#")]),s._v(" 自行搭建Venus链服务")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("搭建链服务层，可参考文档 "),a("RouterLink",{attrs:{to:"/zh/master/Chain_service_construction.html"}},[s._v("Chain service construction")])],1)]),s._v(" "),a("li",[a("p",[s._v("修改 venus-wallet 的配置 "),a("code",[s._v("~/.venus_wallet/config.toml")]),s._v("，指向本地链服务。")])])]),s._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("APIRegisterHub")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("RegisterAPI")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/ip4/<IP_ADDRESS_OF_VENUS_GATEWAY>/tcp/45132"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("Token")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<AUTH_TOKEN_FOR_ACCOUNT_NAME>"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("SupportAccounts")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<ACCOUNT_NAME>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("ul",[a("li",[s._v("修改venus-sealer的配置 "),a("code",[s._v("~/.venussealer/config.toml")]),s._v("，指向本地链服务。")])]),s._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("Node")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("Url")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/ip4/<IP_ADDRESS_OF_VENUS>/tcp/3453"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("Token")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" <AUTH_TOKEN_FOR_ACCOUNT_NAME>\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("JWT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("Secret")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8e5e90ad4c6ce64e16f4bd20622ad60b9b236caefb97081f09b53acfa75e6a44"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("Messager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("Url")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" /ip4/<IP_ADDRESS_OF_VENUS_MESSAGER>/tcp/<PORT_OF_VENUS_MESSAGER>\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("Token")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" <AUTH_TOKEN_FOR_ACCOUNT_NAME>\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("RegisterProof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("Urls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/ip4/<IP_ADDRESS_OF_VENUS_GATEWAY>/tcp/<PORT_OF_VENUS_GATEWAY>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("Token")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" <AUTH_TOKEN_FOR_ACCOUNT_NAME>\n")])])]),a("ul",[a("li",[s._v("重启venus-wallet--\x3evenus-sealer即可，可"),a("RouterLink",{attrs:{to:"/zh/guide/Using-venus-Shared-Modules.html"}},[s._v("参考文档")]),s._v("。")],1)]),s._v(" "),a("br"),s._v(" "),a("h2",{attrs:{id:"切换为lotus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#切换为lotus"}},[s._v("#")]),s._v(" 切换为Lotus")]),s._v(" "),a("ul",[a("li",[s._v("搭建lotus作为同步节点，目前链数据已经非常庞大，建议从snapshot导入数据。")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./lotus daemon --import-snapshot"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://fil-chain-snapshots-fallback.s3.amazonaws.com/mainnet/minimal_finality_stateroots_latest.car "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" lotus.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])])]),a("p",[s._v("也可以先将snapshot下载到本地,然后用"),a("code",[s._v("--import-snapshot")]),s._v("指向本地路径.")]),s._v(" "),a("ul",[a("li",[s._v("将miner_id相关的钱包地址(eg.Owner,Worker,Controller等)导入lotus;")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从venus-wallet导出私钥")]),s._v("\n$ ./venus-wallet "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("WALLET_ADDRESS"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入密码")]),s._v("\nPassword:\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导入lotus")]),s._v("\n$  ./lotus wallet "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入密钥")]),s._v("\nEnter private key: \n")])])]),a("ul",[a("li",[a("p",[s._v("等待目前正在密封的扇区完成(ProveCommitSector类型的消息上链);")])]),s._v(" "),a("li",[a("p",[s._v("停止venus-sealer,用lotus-miner初始化一个新的repo,目录不要和venus-sealer的repo相同.")])])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TRUST_PARAMS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" ./lotus-miner init --no-local-storage --actor"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("minerID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --sector-size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("32G --nosync\n")])])]),a("ul",[a("li",[s._v("设置扇区nextid,导入venus-sealer做的扇区.")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译ffi,如果已经编译则跳过")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" submodule update --init --recursive\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" deps\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译lotus-fix")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" lotus-fix\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改nextid或导入扇区列表")]),s._v("\n$ ./lotus-fix -lotus-miner-repo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/.lotusminer/ -venus-sealer-repo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/.venussealer -taskType"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" -sid"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n")])])]),a("blockquote",[a("p",[a("code",[s._v("taskType")]),s._v(": 0-只修改nextid,1-只导入扇区,2-都做; "),a("code",[s._v("sid")]),s._v(": 默认是0,这时会从源仓库中查找最大扇区的ID写入nextid,其他值-以指定的值修改nextid.")])]),s._v(" "),a("blockquote",[a("p",[s._v("这一步需要暂时停止lotus-miner的运行，所以建议在init后进行操作。另外，如果是root用户执行的操作，且lotus-miner是子用户（eg. test）执行，则需要授权。")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" test:test /home/test/ -R\n")])])]),a("ul",[a("li",[s._v("创建lotus-miner的store路径,和venus-sealer的store路径相同,这样就不需要挪动永久存储文件了。")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不加`--init`标志，因为venus-sealer已经创建")]),s._v("\n./lotus-miner storage attach --store "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("VENUS_SEALER_STORE_PATH"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("ul",[a("li",[s._v("封装新的Sector")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定lotus-miner的seal目录,这个可以指定和之前venus-sealer相同的目录,也可以不同")]),s._v("\n$ ./lotus-miner storage attach --init --seal "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动lotus-miner，发送新的任务")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./lotus-miner run "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" miner.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n$ ./lotus-miner sectors pledge\n")])])]),a("p",[s._v("至此集群已经切换为Lotus运行，后续操作请参考Lotus集群的相关文档。之前创建的venus-sealer repo也可以删除了。")])])}),[],!1,null,null,null);t.default=n.exports}}]);