(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{475:function(a,s,t){"use strict";t.r(s);var e=t(17),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"frontmatter-title"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[a._v("#")]),a._v(" "+a._s(a.$frontmatter.title))]),a._v(" "),t("p",[a._v(a._s(a.$frontmatter.description))]),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#同步"}},[a._v("同步")]),t("ul",[t("li",[t("a",{attrs:{href:"#从受信任状态快照-主网-进行同步"}},[a._v("从受信任状态快照（主网）进行同步")])]),t("li",[t("a",{attrs:{href:"#检查同步状态"}},[a._v("检查同步状态")])])])]),t("li",[t("a",{attrs:{href:"#压缩链数据"}},[a._v("压缩链数据")])])])]),t("p"),a._v(" "),t("h2",{attrs:{id:"同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#同步"}},[a._v("#")]),a._v(" 同步")]),a._v(" "),t("p",[a._v("Venus 将通过以下方式自动同步到最新的 "),t("em",[a._v("chain head")]),a._v(" :")]),a._v(" "),t("ul",[t("li",[a._v("获取从当前区块头到最后一个同步高度的区块头。")]),a._v(" "),t("li",[a._v("检索并验证从上一次同步的高度到当前块头的所有区块。")])]),a._v(" "),t("p",[a._v("一旦Venus同步后，它将通过Pubsub在每个高度出新块时进行相应的验证。请注意，在Venus上，每个高度可能会看到不同数量的区块。")]),a._v(" "),t("p",[a._v("Filecoin的区块链增长相对较快，因此完全同步将需要很长时间。因此，Venus提供了一种通过受信任状态快照进行同步的更快方法。")]),a._v(" "),t("h3",{attrs:{id:"从受信任状态快照-主网-进行同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从受信任状态快照-主网-进行同步"}},[a._v("#")]),a._v(" 从受信任状态快照（主网）进行同步")]),a._v(" "),t("p",[a._v("我们建议大多数用户从最小的轻量级快照执行初始节点同步。受信任状态快照不包含完整的链，并且可能不适合需要对历史状态信息执行查询的节点（例如区块浏览器），但对于大多数用户而言，它们是可行的。")]),a._v(" "),t("p",[a._v("最近的最小受信任状态链快照在 "),t("a",{attrs:{href:"https://fil-chain-snapshots-fallback.s3.amazonaws.com/mainnet/minimal_finality_stateroots_latest.car",target:"_blank",rel:"noopener noreferrer"}},[a._v("这里"),t("OutboundLink")],1),a._v(". 我们可以用venus启动守护程序并直接从URL导入：")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 快照大小约为7GiB。这适用于mainnet。")]),a._v("\nvenus daemon --import-snapshot https://fil-chain-snapshots-fallback.s3.amazonaws.com/mainnet/minimal_finality_stateroots_latest.car\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 另一种方法是先下载并使用该文件")]),a._v("\nvenus daemon --import-snapshot "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("filename.car"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# sha256sum 与临时快照一起存储，可以通过以下方式获取")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -sI https://fil-chain-snapshots-fallback.s3.amazonaws.com/mainnet/minimal_finality_stateroots_latest.car "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" perl -ne "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/^x-amz-website-redirect-location:(.+)\\.car\\s*$/ && print \""),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$1")]),a._v(".sha256sum\"'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("xargs")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -s\n")])])]),t("p",[a._v("::: 如果您不信任快照的来源，或者只是想让Venus验证链，则需要按照下一节中的步骤进行操作。完整验证链的速度要慢一个数量级，预计需要几天的时间。:::")]),a._v(" "),t("h3",{attrs:{id:"检查同步状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查同步状态"}},[a._v("#")]),a._v(" 检查同步状态")]),a._v(" "),t("p",[a._v("有两种方法可以跟踪Venus守护程序是否正确同步了链，以及还需要多久才能完成同步：")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 检查当前同步状态，同步works程序等：")]),a._v("\nvenus "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sync")]),a._v(" status\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看链头与当前时间的时间戳：")]),a._v("\nvenus chain "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("head")]),a._v("\n")])])]),t("h2",{attrs:{id:"压缩链数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#压缩链数据"}},[a._v("#")]),a._v(" 压缩链数据")]),a._v(" "),t("p",[a._v("通过从最小快照重新同步，可以精简Venus使用的当前链数据以减少Venus节点的磁盘占用量。")]),a._v(" "),t("ol",[t("li",[a._v("停止 Venus daemon:")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("venus daemon stop\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("在Venus的路径中删除 "),t("code",[a._v("badger/")]),a._v(" 文件夹的内容：")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf ~/.venus/badger/*\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("如上所述，使用最小快照启动daemon:")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("venus daemon --import-snapshot https://fil-chain-snapshots-fallback.s3.amazonaws.com/mainnet/minimal_finality_stateroots_latest.car\n")])])]),t("p",[a._v("在GitHub上"),t("a",{attrs:{href:"https://github.com/filecoin-project/venus-docs/issues",target:"_blank",rel:"noopener noreferrer"}},[a._v("创建一个问题"),t("OutboundLink")],1),a._v("。")])])}),[],!1,null,null,null);s.default=n.exports}}]);