(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{507:function(s,a,t){"use strict";t.r(a);var e=t(17),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"venus的链服务搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#venus的链服务搭建"}},[s._v("#")]),s._v(" Venus的链服务搭建")]),s._v(" "),t("p",[s._v("便于集群的横向扩展是Venus的设计初衷，Venus团队致力于用户更加简单的运维自己的集群。")]),s._v(" "),t("p",[s._v("Venus系统的实现采用了微服务架构，将各部分重复的功能解耦出来，形成不同的组件。根据部署方式和功能的不同，划分为链服务组件和本地组件。\n在Veuus的实现中，一套链服务可以服务多个集群，链服务可以由服务商或多个存储提供者联合搭建，每个接入链服务的存储提供者仅需将精力放在本地组件上，即算力的增长与维持。")]),s._v(" "),t("p",[s._v("在Venus系统中，链服务层的正常运行显得尤为重要，一旦服务异常就可能导致多个集群故障。此文档就如何搭建链服务进行介绍。")]),s._v(" "),t("h2",{attrs:{id:"硬件要求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#硬件要求"}},[s._v("#")]),s._v(" 硬件要求")]),s._v(" "),t("p",[s._v("Venus系统的链服务负责链的区块同步、各集群消息打包、出块及链信息查询等功能，是各个集群正常运行的先决条件。venus的一套链服务至少包括：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("venus节点 * 1")]),s._v(": 32C/128g/40g+2T(essd)；")]),s._v(" "),t("li",[t("strong",[s._v("venus-auth、venus-messager * 1")]),s._v("：16C/32G/200G(essd)；")]),s._v(" "),t("li",[t("strong",[s._v("venus-gateway * 1")]),s._v("：16C/32G/200G(essd)；")]),s._v(" "),t("li",[t("strong",[s._v("venus-miner * 1")]),s._v("：16C/32G/200G(essd)；")])]),s._v(" "),t("p",[s._v("在通常情况下，一套链服务可服务于多个集群，因为需要预防单点故障，所以链服务的每个组件都至少有主备或负载均衡。")]),s._v(" "),t("h2",{attrs:{id:"软件环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软件环境"}},[s._v("#")]),s._v(" 软件环境")]),s._v(" "),t("p",[s._v("Ubuntu:")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mesa-opencl-icd ocl-icd-opencl-dev gcc "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" bzr jq pkg-config "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" clang build-essential hwloc libhwloc-dev "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -y "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" upgrade -y\n")])])]),t("p",[s._v("CentOS:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" gcc bzr jq pkgconfig clang llvm mesa-libGL-devel opencl-headers ocl-icd ocl-icd-devel hwloc-devel\n")])])]),t("ul",[t("li",[t("a",{attrs:{href:"https://golang.org/dl/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Go 1.16 或更高版本"),t("OutboundLink")],1)]),s._v(" "),t("li",[s._v("每个组件皆用相同分支: "),t("strong",[t("code",[s._v("incubation")])])])]),s._v(" "),t("br"),s._v(" "),t("h2",{attrs:{id:"部署流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署流程"}},[s._v("#")]),s._v(" 部署流程")]),s._v(" "),t("p",[s._v("根据组件的依赖关系，链服务层的部署顺序是: venus-auth --\x3e venus-gateway --\x3e venus --\x3e venus-messager --\x3e venus-miner。")]),s._v(" "),t("h3",{attrs:{id:"venus-auth"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#venus-auth"}},[s._v("#")]),s._v(" venus-auth")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./venus-auth run "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" auth.log "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])])]),t("blockquote",[t("p",[t("code",[s._v("venus-auth")]),s._v(" 的默认配置文件位于"),t("code",[s._v("~/.venus-auth/config.toml")])])]),s._v(" "),t("p",[s._v("支持MySQL 5.7及以上版本，可替代默认的"),t("code",[s._v("Badger")]),s._v("键值数据库。要使用 MySQL 数据库，请修改配置文件中的 "),t("code",[s._v("db")]),s._v(" 部分。")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Data source configuration item")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# support: badger (default), mysql ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# the mysql DDL is in the script package ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mysql"')]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# The following parameters apply to MySQL")]),s._v("\nDSN "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<USER>:<PASSWORD>@(127.0.0.1:3306)/venus_auth?parseTime=true&loc=Local&charset=utf8mb4&collation=utf8mb4_unicode_ci&readTimeout=10s&writeTimeout=10s"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# conns 1500 concurrent")]),s._v("\nmaxOpenConns "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("\nmaxIdleConns "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v("\nmaxLifeTime "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"120s"')]),s._v("\nmaxIdleTime "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"30s"')]),s._v("\n")])])]),t("h4",{attrs:{id:"生成token"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成token"}},[s._v("#")]),s._v(" 生成token")]),s._v(" "),t("p",[t("code",[s._v("venus-auth")]),s._v("管理着其他Venus组件使用的"),t("a",{attrs:{href:"https://jwt.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("jwt"),t("OutboundLink")],1),s._v("token，以便它们在网络上安全地相互通信。")]),s._v(" "),t("p",[s._v("为链服务组件生成token。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --perm specifies admin, sign, wirte or read permission of the token generated")]),s._v("\n$ ./venus-auth token gen --perm admin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("SHARED"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("SHARED_ADMIN_AUTH_TOKEN"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("p",[s._v("为独立组件生成token。token可以通过"),t("code",[s._v("<USER>")]),s._v(" 逻辑分组，作为加入分布式存储池的单个存储提供者。")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ ./venus-auth user "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" --name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --miner"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("minerID"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n$ ./venus-auth token gen --perm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("USER_WRITE_AUTH_TOKEN"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n$ ./venus-auth token gen --perm "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("USER_READ_AUTH_TOKEN"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("blockquote",[t("p",[t("code",[s._v("./venus-auth user add <USER>")]),s._v(" 对不同的token进行逻辑分组。如果已经有miner id，则带上--miner，如果没有，则需要在创建miner后更新：")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ ./venus-auth user update --name <USER> --miner=<minerID>\n\n# 查看 user 列表\n$ ./venus-auth user list\n\n# 查看 token 列表\n$ ./venus-auth token list\n")])])]),t("h3",{attrs:{id:"venus-gateway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#venus-gateway"}},[s._v("#")]),s._v(" venus-gateway")]),s._v(" "),t("p",[s._v("如果遇到以下编译错误,先执行"),t("code",[s._v("go get github.com/google/flatbuffers@v1.12.1")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("github.com/dgraph-io/badger/v3@v3.2011.1/fb/BlockOffset.go:6:2: missing go.sum entry "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" module providing package github.com/google/flatbuffers/go "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("imported by github.com/dgraph-io/badger/v3/table"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" to add:\n        go get github.com/dgraph-io/badger/v3/table@v3.2011.1\n")])])]),t("p",[s._v("启动"),t("code",[s._v("venus-gateway")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ ./venus-gateway --listen /ip4/0.0.0.0/tcp/45132 run "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Use either a http or https url")]),s._v("\n--auth-url "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("http://VENUS_AUTH_IP_ADDRESS:PORT"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" venus-gateway.log "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])])]),t("h4",{attrs:{id:"常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),t("ol",[t("li",[s._v("列出注册到venus-gateway的钱包，查询结果包含钱包名称、支持的账号和钱包地址等信息。")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('$ ./venus-gateway wallet list\n\n[\n       {\n                "Account": "li_sealer",\n                "SupportAccounts": [\n                        "li_sealer"\n                ],\n                "ConnectStates": [\n                        {\n                                "Addrs": [\n                                        "t3vlgp2tciovduiuvxls6t7tzasvdddv7cjkoo7z5f3nkjymrb2m73v2dkvulaiaprglihyqqbfrv3wcvtxcra"\n                                ],\n                                "ChannelId": "c9f69aee-dd5d-42c1-a6bc-9a642595f3aa",\n                                "Ip": "127.0.0.1:36376",\n                                "RequestCount": 0,\n                                "CreateTime": "2021-09-10T13:29:22.411062263+08:00"\n                        }\n                ]\n        }\n ]\n')])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("列出连接到gateway的矿工")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ ./venus-gateway miner list\n\nt01561\nt02608\nt02082\n")])])]),t("h3",{attrs:{id:"venus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#venus"}},[s._v("#")]),s._v(" venus")]),s._v(" "),t("p",[s._v("启动"),t("code",[s._v("venus")]),s._v("进程进行链同步。 使用 "),t("code",[s._v("--network")]),s._v(" 来指定"),t("code",[s._v("venus")]),s._v("连接的网络。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./venus daemon --network"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("cali --auth-url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("http://VENUS_AUTH_IP_ADDRESS:PORT"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" venus.log "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" \n")])])]),t("blockquote",[t("p",[s._v("使用"),t("code",[s._v("tail -f venus.log")]),s._v(" 或 "),t("code",[s._v("./venus sync status")]),s._v(" 检查同步过程中是否有任何错误。")])]),s._v(" "),t("h4",{attrs:{id:"允许其他ip的实例访问venus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#允许其他ip的实例访问venus"}},[s._v("#")]),s._v(" 允许其他IP的实例访问venus")]),s._v(" "),t("p",[s._v("默认情况下，"),t("code",[s._v("venus")]),s._v("进程只响应本地访问。更改以下配置(~/.venus/config.json)以允许从其他地址访问。")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"api"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"apiAddress"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/ip4/0.0.0.0/tcp/3453"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h3",{attrs:{id:"venus-messager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#venus-messager"}},[s._v("#")]),s._v(" venus-messager")]),s._v(" "),t("p",[s._v("启动"),t("code",[s._v("venus-messager")]),s._v(", "),t("code",[s._v("--auth-url")]),s._v("、"),t("code",[s._v("--node-url")]),s._v(" 和"),t("code",[s._v("--auth-token")]),s._v(" 是为了让 venus-messager 了解其他"),t("code",[s._v("venus")]),s._v("组件的存在并进行自身的身份验证。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./venus-messager run "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--auth-url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("http://VENUS_AUTH_IP_ADDRESS:PORT"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--node-url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/ip4/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("VENUS_DAEMON_IP_ADDRESS"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/tcp/3453 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--gateway-url"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/ip4/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("IP_ADDRESS_OF_VENUS_GATEWAY"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/tcp/45132 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--auth-token"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("SHARED_ADMIN_AUTH_TOKEN"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--db-type"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--mysql-dsn"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<USER>:<PASSWORD>@(127.0.0.1:3306)/venus_messager?parseTime=true&loc=Local&readTimeout=10s&writeTimeout=10s"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" msg.log "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])])]),t("blockquote",[t("p",[s._v("如果没有指定与数据库相关的参数，"),t("code",[s._v("venus-messager")]),s._v("将默认使用 sqlite.")])]),s._v(" "),t("p",[s._v("messager中消息总共分以下几种状态：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("UnKnown：    unkonwn\nUnFillMsg：  未填充，消息刚推送到messager\nFillMsg：    已填充，也就是已签名消息\nOnChainMsg： 已上链\nFailedMsg：  失败消息\nReplacedMsg：被替换\nNoWalletMsg：未找到钱包\n")])])]),t("h4",{attrs:{id:"常用命令-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用命令-2"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),t("ol",[t("li",[s._v("全局参数")])]),s._v(" "),t("p",[s._v("1.1 获取全局参数")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('$ ./venus-messager share-params get\n\n{\n        "id": 1,\n        "gasOverEstimation": 1.25,\n        "maxFee": "7000000000000000",\n        "maxFeeCap": "0",\n        "selMsgNum": 20\n}\n')])])]),t("p",[s._v("1.2 设置全局参数")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("OPTIONS:\n   --gas-over-estimation  预估gas时，gas的系数\n   --max-fee\n   --max-feecap\n   --sel-msg-num value    一轮推送选择的消息数\n$ ./venus-messager share-params set [options]\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("消息")])]),s._v(" "),t("p",[s._v("2.1 查询单个消息，支持用消息ID和消息cid查询")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ ./venus-messager msg search --id=<message id> or --cid=<message cid>\n")])])]),t("p",[s._v("2.2 列出消息，可以多个flag组合使用，也支持分页")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("options:\n   --page-index   当前页（默认 1）\n   --page-size    每页消息数（默认100）\n   --from         消息from地址\n   --state        消息状态\n$ ./venus-messager msg list [options]\n")])])]),t("p",[s._v("2.3 列出异常的消息，可能是消息签名失败或gas估算失败")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ ./venus-messager msg list-fail\n# Return 字段里包含粗略的错误\nID                                                                                                                 To       From          Nonce  Value                      GasLimit  GasFeeCap   GasPremium  Method  State      ExitCode  Return                                                                 Height  CreateAt\nbafk4bzacicqkukukk3jukpankepybvdaj2gpi3fuminxlakacaiukuj2yq53zhb3coapmbx7ozpe6v2bgp4hxphyyrbkhieszvqczwfub2i6bgf2  t016345  t3v5shsyt...  0      7.666985421223199696 FIL   0         3000000000  0           6       UnFillMsg  -1        gas estimate: estimating gas limit: message execution failed: exit 16  0       2021-09-05 21:35:53\nbafk4bzacicviuerbarkm45kjnam7j2tlfv2pdecu46uqiscwdh5eedvixihwwoqhkffwa4rx5rrbi7b66etz2devuoozl2qhkbpz2s7v5rbixnov  t016345  t3v5shsyt...  0      7.671490278328236907 FIL   0         3000000000  0           6       UnFillMsg  -1        gas estimate: estimating gas limit: message execution failed: exit 16  0       2021-09-05 21:50:16\nba\n")])])]),t("p",[s._v("2.4 标记异常消息，该消息被标记会被置为"),t("code",[s._v("FailedMsg")]),s._v("状态")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./venus-messager msg mark-bad "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("message id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("p",[s._v("2.5 替换消息")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# 根据消息ID替换\n$ ./venus-messager msg replace --gas-feecap=[gas-feecap] --gas-premium=[gas-premium] --gas-limit=[gas-limit] --auto=[auto] --max-fee=[max-fee] <message-id>\n# 或者根据消息的from和nonce替换\n$ ./venus-messager msg replace --gas-feecap=[gas-feecap] --gas-premium=[gas-premium] --gas-limit=[gas-limit] --auto=[auto] --max-fee=[max-fee] <from> <nonce>\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("地址")])]),s._v(" "),t("p",[s._v("3.1 查询单个地址信息")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('$ ./venus-messager address search t3weswpwlpkpbhozfety4ebmph3osweakrgqjmb74nwxt57hru73mx3ttp2abxrqqi45oebshxbenb4jtkmb2q\n{\n        "id": "bda9fbfd-2ccc-487a-aaa1-a7843b2af149",\n        "addr": "t3weswpwlpkpbhozfety4ebmph3osweakrgqjmb74nwxt57hru73mx3ttp2abxrqqi45oebshxbenb4jtkmb2q",\n        "nonce": 4,\n        "weight": 0,\n        "selMsgNum": 0,\n        "state": 1,\n        "gasOverEstimation": 0,\n        "maxFee": "0",\n        "maxFeeCap": "0",\n        "isDeleted": -1,\n        "createAt": "2021-08-30T14:18:24.92+08:00",\n        "updateAt": "2021-08-30T18:17:38.875+08:00"\n }\n')])])]),t("p",[s._v("3.2 列出所有地址")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ ./venus-messager address list\n")])])]),t("p",[s._v("3.3 设置地址一轮推送选择消息的最大数量")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ ./venus-messager address set-sel-msg-num --num=5 <address>\n")])])]),t("h3",{attrs:{id:"venus-miner"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#venus-miner"}},[s._v("#")]),s._v(" venus-miner")]),s._v(" "),t("p",[s._v("初始化"),t("code",[s._v("venus-miner")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ ./venus-miner init\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# For nettype, choose from mainnet, debug, 2k, calibnet")]),s._v("\n--nettype "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("NET_TYPE"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--auth-api "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("http://VENUS_AUTH_IP_ADDRESS:PORT"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--token "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("SHARED_ADMIN_AUTH_TOKEN"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--gateway-api /ip4/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("VENUS_GATEWAY_IP_ADDRESS"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/tcp/45132 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--api /ip4/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("VENUS_DAEMON_IP_ADDRESS"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/tcp/3453 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--slash-filter "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("\n")])])]),t("p",[s._v("启动"),t("code",[s._v("venus-miner")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./venus-miner run "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" miner.log "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])])]),t("h4",{attrs:{id:"miner管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#miner管理"}},[s._v("#")]),s._v(" miner管理")]),s._v(" "),t("p",[t("code",[s._v("venus-miner")]),s._v(" 启动时会从 "),t("code",[s._v("venus-auth")]),s._v(" 中拉取最新的"),t("code",[s._v("miner_id")]),s._v("列表，然后预执行一遍出块流程，如果失败会在state中体现出来，可以通过以下方式查询"),t("code",[s._v("miner_id")]),s._v("的状态。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ ./venus-miner address state\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Addr"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<MINER_ID>"')]),s._v(",\n\t\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IsMining"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true,\n\t\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Err"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" null\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("p",[s._v("如果某个"),t("code",[s._v("miner_id")]),s._v("的 Err 不是 "),t("code",[s._v("null")]),s._v(",则需要根据错误信息分析原因，并通知用户解决。")]),s._v(" "),t("p",[s._v("我们可以开始或暂停某个"),t("code",[s._v("miner_id")]),s._v("的出块逻辑，如启动"),t("code",[s._v("miner_id=f01008")]),s._v("的出块逻辑。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ ./venus-miner address start f01008\n")])])]),t("p",[s._v("列出所有已连接到链服务的"),t("code",[s._v("miner id")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ ./venus-miner address list\n")])])]),t("p",[s._v("在"),t("code",[s._v("venus-miner")]),s._v("运行期间有"),t("code",[s._v("miner_id")]),s._v("加入或退出矿池,或有"),t("code",[s._v("miner_id")]),s._v("保存在venus-auth的信息有改变,需要重新从"),t("code",[s._v("venus_auth")]),s._v("拉取数据.")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ ./venus-miner address update\n")])])]),t("p",[s._v("统计某个"),t("code",[s._v("miner_id")]),s._v("在特定链高度区间内获得的出块权")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("./venus-miner winner count --epoch-start"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("START_EPOCH"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --epoch-end"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("END_EPOCH"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("MINER_ID"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("blockquote",[t("ol",[t("li",[s._v("epoch-end>epoch-start; 2. epoch-end必须小于当前链高度，即这个命令是用来查询历史出块情况的，并非是预测未来出块权的。举例如下:")])])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v(" ./venus-miner winner count --epoch-start"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60300")]),s._v(" --epoch-end"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60345")]),s._v(" f01008\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"miner"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"f01008"')]),s._v(",\n                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"totalWinCount"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(",\n                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"msg"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(",\n                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"winEpochList"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"epoch"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60340")]),s._v(",\n                                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"winCount"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"epoch"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60329")]),s._v(",\n                                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"winCount"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"epoch"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60326")]),s._v(",\n                                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"winCount"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"epoch"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60339")]),s._v(",\n                                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"winCount"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"epoch"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60315")]),s._v(",\n                                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"winCount"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("h2",{attrs:{id:"使用链服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用链服务"}},[s._v("#")]),s._v(" 使用链服务")]),s._v(" "),t("p",[s._v("请学习参见"),t("RouterLink",{attrs:{to:"/zh/guide/Using-venus-Shared-Modules.html"}},[s._v("这个")]),s._v("文档。")],1),s._v(" "),t("h2",{attrs:{id:"使用venus-cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用venus-cluster"}},[s._v("#")]),s._v(" 使用venus-cluster")]),s._v(" "),t("p",[s._v("请学习参见"),t("RouterLink",{attrs:{to:"/zh/guide/Using-venus-cluster-alt.html"}},[s._v("这个")]),s._v("文档。")],1),s._v(" "),t("h2",{attrs:{id:"接收存储订单"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#接收存储订单"}},[s._v("#")]),s._v(" 接收存储订单")]),s._v(" "),t("p",[s._v("请学习参见"),t("a",{attrs:{href:"https://github.com/filecoin-project/venus/discussions/4735",target:"_blank",rel:"noopener noreferrer"}},[s._v("这个"),t("OutboundLink")],1),s._v("文档。")])])}),[],!1,null,null,null);a.default=n.exports}}]);