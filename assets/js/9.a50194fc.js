(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{379:function(e,s,a){e.exports=a.p+"assets/img/min_hardware_requirements.8d60560b.png"},380:function(e,s,a){e.exports=a.p+"assets/img/task_resource_table.d8cae9ad.png"},521:function(e,s,a){"use strict";a.r(s);var t=a(17),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"算力增长与维持"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#算力增长与维持"}},[e._v("#")]),e._v(" 算力增长与维持")]),e._v(" "),t("h2",{attrs:{id:"源码编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#源码编译"}},[e._v("#")]),e._v(" 源码编译")]),e._v(" "),t("p",[e._v("   一些较新的CPU架构,如AMD的Zen和Intel的lce Lake,支持SHA扩展.启用这些扩展会明显加快扇区封装速度,这时请用源码编译filecoin-ffi:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('export RUSTFLAGS="-C target-cpu=native -g"\nexport FFI_BUILD_FROM_SOURCE=1\n')])])]),t("p",[e._v("   官方提供的是可移植的静态链接库,虽可以在多种CPU上运行,但封装扇区速度特别慢,会引起ticket过期.")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/filecoin-project/lotus/discussions/6071",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考配置"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://docs.filecoin.io/mine/hardware-requirements/#general-hardware-requirements",target:"_blank",rel:"noopener noreferrer"}},[e._v("最低硬件要求"),t("OutboundLink")],1),e._v(" "),t("img",{attrs:{src:a(379),alt:"min_hardware_requirements"}})]),e._v(" "),t("h2",{attrs:{id:"扇区封装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扇区封装"}},[e._v("#")]),e._v(" 扇区封装")]),e._v(" "),t("h3",{attrs:{id:"加速设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加速设置"}},[e._v("#")]),e._v(" 加速设置")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# See https://github.com/filecoin-project/bellman\nexport BELLMAN_CPU_UTILIZATION=0.2\n")])])]),t("p",[e._v("   BELLMAN_CPU_UTILIZATION是一个可选的可变来指定所述多幂计算的比例要被移动到一个CPU在平行于GPU。这是为了保持所有硬件都被占用。间隔必须是0和之间的数字1。该值0.2是一个很好的起点，但如果您想要最佳设置，您应该尝试使用它。不同的硬件设置将导致不同的最佳值。省略此环境变量也可能是最佳选择。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# See https://github.com/filecoin-project/rust-fil-proofs/\nexport FIL_PROOFS_MAXIMIZE_CACHING=1 # More speed at RAM cost (1x sector-size of RAM - 32 GB).\nexport FIL_PROOFS_USE_GPU_COLUMN_BUILDER=1 # precommit2 GPU acceleration\nexport FIL_PROOFS_USE_GPU_TREE_BUILDER=1\n\n# The following increases speed of PreCommit1 at the cost of using a full\n# CPU Core-Complex rather than a single core. Should be used with CPU affinities set!\n# See https://github.com/filecoin-project/rust-fil-proofs/ and the seal workers guide.\nexport FIL_PROOFS_USE_MULTICORE_SDR=1\n")])])]),t("p",[e._v("   如果您只有 128 GiB 的 RAM，则需要确保您的系统提供至少 256 GiB 的超快速交换（最好是 NVMe SSD），否则您将无法密封扇区：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo fallocate -l 256G /swapfile\nsudo chmod 600 /swapfile\nsudo mkswap /swapfile\nsudo swapon /swapfile\n# show current swap spaces and take note of the current highest priority\nswapon --show\n# append the following line to /etc/fstab (ensure highest priority) and then reboot\n# /swapfile swap swap pri=50 0 0\nsudo reboot\n# check a 256GB swap file is automatically mounted and has the highest priority\nswapon --show\n\n")])])]),t("p",[t("a",{attrs:{href:"https://docs.filecoin.io/mine/lotus/miner-setup",target:"_blank",rel:"noopener noreferrer"}},[e._v("矿工设置"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"sealer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sealer"}},[e._v("#")]),e._v(" sealer")]),e._v(" "),t("ul",[t("li",[e._v("sealer需要准备好来自worker的API连接,如果worker不在同一机器上,则需要将其设置为0.0.0.0允许所有IP访问,RemoteListenAddress为该miner对外的ip地址,即worker访问sealer的ip地址,通常是矿工的ip地址和API端口:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[API]\n  # Binding address for the miner API\n  ListenAddress = "/ip4/127.0.0.1/tcp/2345/http"\n  # This should be set to the miner API address as seen externally\n  RemoteListenAddress = "127.0.0.1:2345"\n  # General network timeout value\n  Timeout = "30s"\n\n')])])]),t("ul",[t("li",[e._v("存储扇区控制矿工是否可以执行某些密封操作。根据设置和其他密封工人的使用，您可能需要修改一些选项")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[Storage]\n  # Upper bound on how many sectors can be fetched in parallel by the storage system at a time(存储系统一次可并行获取扇区的上限)\n  ParallelFetchLimit = 10\n  # Sealing steps that the miner can perform itself. Sometimes we have a dedicated seal worker to do them and do not want the sealer to commit any resources for this.\n  AllowAddPiece = true\n  AllowPreCommit1 = true\n  AllowPreCommit2 = true\n  AllowCommit = true\n  AllowUnseal = true\n\n")])])]),t("ul",[t("li",[e._v("质押一个Sector")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("venus-sealer sectors pledge\n")])])]),t("p",[e._v("默认情况下这将保证约 538 天的空间")]),e._v(" "),t("ul",[t("li",[e._v("检查密封作业是否已经开始及进度")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("venus-sealer sealing jobs\nvenus-sealer sectors list\nvenus-sealer sealing workers # 当新的密封完成时,pSet: No将变成 pSet:YES\n")])])]),t("ul",[t("li",[e._v("自定义存储布局")])]),e._v(" "),t("p",[e._v("自定义密封位置")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("venus-sealer storage attach --init --seal <PATH_FOR_SEALING_STORAGE>\n")])])]),t("p",[e._v("自定义存储位置")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("venus-sealer storage attach --init --store <PATH_FOR_LONG_TERM_STORAGE>\n")])])]),t("p",[e._v("列出存储位置")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("venus-sealer storage list\n")])])]),t("p",[e._v("要将数据从一个位置移动到另一个位置，请按照"),t("a",{attrs:{href:"https://docs.filecoin.io/mine/lotus/miner-lifecycle",target:"_blank",rel:"noopener noreferrer"}},[e._v("Miner 生命周期指南"),t("OutboundLink")],1),e._v("中的说明进行操作。要完全删除一个位置，请storage.json手动编辑并重新启动您的矿工。")]),e._v(" "),t("h3",{attrs:{id:"worker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#worker"}},[e._v("#")]),e._v(" worker")]),e._v(" "),t("h4",{attrs:{id:"任务资源表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#任务资源表"}},[e._v("#")]),e._v(" 任务资源表")]),e._v(" "),t("p",[e._v("默认资源表:\n"),t("img",{attrs:{src:a(380),alt:"task_resource_table"}})]),e._v(" "),t("blockquote",[t("p",[e._v("在密封期间,大量数据在worker之间移动/复制,因此worker之间必须有良好的网络连接.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("* AddPiece 可以使用多个线程，这个值很可能在不久的将来会发生变化\n** 当与FIL_PROOFS_USE_MULTICORE_SDR=1env var 一起使用时，PreCommit1 可以使用多个内核（最多共享 L3 缓存的内核数）\n*** 取决于数量可用线程，该值表示：\n\n 12  * 0.92 = 11\n 16  * 0.92 = 14\n 24  * 0.92 = 22\n 32  * 0.92 = 29\n 64  * 0.92 = 58\n 128 * 0.92 = 117\n    \n**** Commit1 步骤在 CPU 时间方面非常便宜，并且会阻塞 Commit2 步骤。将其分配给零个线程使其更有可能以更高的优先级进行调度。\n\nUnseal 任务与 PreCommit1 任务具有相同的资源使用。\n")])])]),t("ul",[t("li",[e._v("环境变量")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('# MINER_API_INFO as obtained before\nexport TMPDIR=/fast/disk/folder3                    # used when sealing\nexport MINER_API_INFO:<TOKEN>:/ip4/<miner_api_address>/tcp/<port>/http`\nexport BELLMAN_CPU_UTILIZATION=0.2      # optimal value depends on exact hardware\nexport FIL_PROOFS_MAXIMIZE_CACHING=1\nexport FIL_PROOFS_USE_GPU_COLUMN_BUILDER=1 # when GPU is available\nexport FIL_PROOFS_USE_GPU_TREE_BUILDER=1   # when GPU is available\nexport FIL_PROOFS_PARAMETER_CACHE=/fast/disk/folder # > 100GiB!\nexport FIL_PROOFS_PARENT_CACHE=/fast/disk/folder2   # > 50GiB!\n\n# The following increases speed of PreCommit1 at the cost of using a full\n# CPU core-complex rather than a single core.\n# See https://github.com/filecoin-project/rust-fil-proofs/ and the\n# "Worker co-location" section below.\nexport FIL_PROOFS_USE_MULTICORE_SDR=1\n\n')])])]),t("ul",[t("li",[e._v("运行worker")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ ./venus-worker run --miner-addr=</ip4/sealer-ip/tcp/2345> --miner-token=<token>  --listen=<0.0.0.0:3458> <flags>\n\n   --addpiece                    enable addpiece (default: true)\n   --precommit1                  enable precommit1 (32G sectors: 1 core, 128GiB RAM) (default: true)\n   --unseal                      enable unsealing (32G sectors: 1 core, 128GiB RAM) (default: true)\n   --precommit2                  enable precommit2 (32G sectors: multiple cores, 96GiB RAM) (default: true)\n   --commit                      enable commit (32G sectors: multiple cores or GPUs, 128GiB RAM + 64GiB swap) (default: true)\n\n")])])]),t("p",[e._v("-- 设置本地存储")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# 默认会在.venusworker目录下,可以通过attach命令自己添加一个目录\n$  ./venus-worker storage attach --init --seal --store <local_path>\n$ ./venus-worker info\nWorker version:  1.0.0\nCLI version: lotus-worker version 1.2.1\n\nSession: b1f47ebd-d5e8-485f-8df9-c70773f2c644\nEnabled: true\nHostname: 200-17\nCPUs: 128; GPUs: []\nRAM: 503.5 GiB; Swap: 0 B\nReserved memory: 163.7 GiB\nTask types: FIN GET UNS C1 C2 PC2 PC1 AP \n\ne918d62b-a2bd-4674-8c8f-53e5aab913ae:\n        Weight: 10; Use: Seal \n        Local: /home/test/.venusworker\naafdb8ec-eb76-4127-b046-36e6ae97797f:\n        Weight: 10; Use: Seal Store\n        Local: /home/test/data\n")])])]),t("p",[e._v("-- 验证是否连接到sealer")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ ./venus-sealer sealing workers\nWorker 0, host computer\n        CPU:  [                                                                ] 0 core(s) in use\n        RAM:  [||||||||||||||||||                                              ] 28% 18.1 GiB/62.7 GiB\n        VMEM: [||||||||||||||||||                                              ] 28% 18.1 GiB/62.7 GiB\n        GPU: GeForce RTX 2080, not used\n\nWorker 1, host othercomputer\n        CPU:  [                                                                ] 0 core(s) in use\n        RAM:  [||||||||||||||                                                  ] 23% 14 GiB/62.7 GiB\n        VMEM: [||||||||||||||                                                  ] 23% 14 GiB/62.7 GiB\n        GPU: GeForce RTX 2080, not used\n\n")])])]),t("blockquote",[t("p",[e._v("这个时候在venus-sealer产生一个新的pledge，在sealer做完addPiece后会下发到worker去做")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('2021-07-13T16:28:21.005+0800    DEBUG   advmgr  sector-storage/sched.go:354     SCHED 1 queued; 4 open windows\n2021-07-13T16:28:21.008+0800    DEBUG   advmgr  sector-storage/sched.go:449     SCHED windows: [{allocated:{memUsedMin:0 memUsedMax:0 gpuUsed:false cpuUse:0 cond:<nil>} todo:[]} {allocated:{memUsedMin:0 memUsedMax:0 gpuUsed:false cpuUse:0 cond:<nil>} todo:[]} {allocated:{memUsedMin:0 memUsedMax:0 gpuUsed:false cpuUse:0 cond:<nil>} todo:[]} {allocated:{memUsedMin:0 memUsedMax:0 gpuUsed:false cpuUse:0 cond:<nil>} todo:[]}]\n2021-07-13T16:28:21.008+0800    DEBUG   advmgr  sector-storage/sched.go:450     SCHED Acceptable win: [[2 3]]\n2021-07-13T16:28:21.008+0800    DEBUG   advmgr  sector-storage/sched.go:465     SCHED try assign sqi:0 sector 7 to window 2\n2021-07-13T16:28:21.008+0800    DEBUG   advmgr  sector-storage/sched.go:472     SCHED ASSIGNED sqi:0 sector 7 task seal/v0/precommit/1 to window 2\n2021-07-13T16:28:21.008+0800    DEBUG   advmgr  sector-storage/sched.go:354     SCHED 2 queued; 3 open windows\n2021-07-13T16:28:21.008+0800    DEBUG   advmgr  sector-storage/sched_worker.go:368      assign worker sector 7\n2021-07-13T16:28:21.010+0800    DEBUG   advmgr  sector-storage/sched.go:449     SCHED windows: [{allocated:{memUsedMin:0 memUsedMax:0 gpuUsed:false cpuUse:0 cond:<nil>} todo:[]} {allocated:{memUsedMin:0 memUsedMax:0 gpuUsed:false cpuUse:0 cond:<nil>} todo:[]} {allocated:{memUsedMin:0 memUsedMax:0 gpuUsed:false cpuUse:0 cond:<nil>} todo:[]}]\n2021-07-13T16:28:21.010+0800    DEBUG   advmgr  sector-storage/sched.go:450     SCHED Acceptable win: [[2] [2]]\n2021-07-13T16:28:21.010+0800    DEBUG   advmgr  sector-storage/sched.go:465     SCHED try assign sqi:0 sector 5 to window 2\n2021-07-13T16:28:21.010+0800    DEBUG   advmgr  sector-storage/sched.go:472     SCHED ASSIGNED sqi:0 sector 5 task seal/v0/precommit/1 to window 2\n2021-07-13T16:28:21.010+0800    DEBUG   advmgr  sector-storage/sched.go:465     SCHED try assign sqi:1 sector 6 to window 2\n2021-07-13T16:28:21.010+0800    DEBUG   advmgr  sector-storage/sched.go:472     SCHED ASSIGNED sqi:1 sector 6 task seal/v0/precommit/1 to window 2\n2021-07-13T16:28:21.010+0800    DEBUG   advmgr  sector-storage/sched.go:354     SCHED 0 queued; 3 open windows\n2021-07-13T16:28:21.010+0800    DEBUG   advmgr  sector-storage/sched_worker.go:278      task done       {"workerid": "3b594f87-afc3-4d16-b905-eabe288fb50b"}\n2021-07-13T16:28:21.010+0800    DEBUG   advmgr  sector-storage/sched.go:354     SCHED 0 queued; 3 open windows\n2021-07-13T16:28:21.011+0800    DEBUG   advmgr  sector-storage/sched_worker.go:368      assign worker sector 5\n2021-07-13T16:28:21.011+0800    DEBUG   advmgr  sector-storage/sched_worker.go:368      assign worker sector 6\n2021-07-13T16:28:21.011+0800    DEBUG   advmgr  sector-storage/sched.go:354     SCHED 0 queued; 4 open windows\n2021-07-13T16:28:21.013+0800    DEBUG   advmgr  sector-storage/sched_worker.go:278      task done       {"workerid": "3b594f87-afc3-4d16-b905-eabe288fb50b"}\n2021-07-13T16:28:21.013+0800    DEBUG   advmgr  sector-storage/sched.go:354     SCHED 0 queued; 4 open windows\n2021-07-13T16:28:21.013+0800    DEBUG   advmgr  sector-storage/sched_worker.go:278      task done       {"workerid": "3b594f87-afc3-4d16-b905-eabe288fb50b"}\n')])])]),t("ul",[t("li",[e._v("如果worker的硬件资源不足，sealer会取消分配的任务,这时需要及时整理空间，分配更多的资源给worker。")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# worker: 提示仍无被DELETE，并且清理了本地文件\n2021-07-14T16:12:52.217+0800    INFO    main    venus-worker/main.go:515        Worker registered successfully, waiting for tasks\n2021-07-14T16:18:51.835+0800    DEBUG   advmgr  sector-storage/worker_local.go:129      acquired sector {{1921 9} 8} (e:0; a:1): {{0 0} /home/litao/.venusworker/unsealed/s-t01921-9  }\n2021-07-14T16:21:02.814+0800    INFO    stores  stores/http_handler.go:58       SERVE GET /remote/unsealed/s-t01921-9\n2021-07-14T16:21:34.400+0800    INFO    stores  stores/http_handler.go:135      SERVE DELETE /remote/unsealed/s-t01921-9\n2021-07-14T16:21:34.401+0800    INFO    stores  stores/local.go:608     remove /home/test/.venusworker/unsealed/s-t01921-9\n\n# sealer: 提示磁盘空间不足\n2021-07-14T16:21:02.802+0800    DEBUG   advmgr  sector-storage/sched.go:354     SCHED 1 queued; 6 open windows\n2021-07-14T16:21:02.805+0800    DEBUG   stores  stores/index.go:400     not allocating on e918d62b-a2bd-4674-8c8f-53e5aab913ae, out of space (available: 68799750144, need: 518832049356)\n2021-07-14T16:21:02.805+0800    DEBUG   stores  stores/index.go:400     not allocating on aafdb8ec-eb76-4127-b046-36e6ae97797f, out of space (available: 103159488512, need: 518832049356)\n2021-07-14T16:21:02.806+0800    DEBUG   stores  stores/index.go:400     not allocating on e918d62b-a2bd-4674-8c8f-53e5aab913ae, out of space (available: 68799750144, need: 518832049356)\n2021-07-14T16:21:02.806+0800    DEBUG   stores  stores/index.go:400     not allocating on aafdb8ec-eb76-4127-b046-36e6ae97797f, out of space (available: 103159488512, need: 518832049356)\n2021-07-14T16:21:02.808+0800    DEBUG   stores  stores/index.go:400     not allocating on e918d62b-a2bd-4674-8c8f-53e5aab913ae, out of space (available: 68799750144, need: 518832049356)\n2021-07-14T16:21:02.808+0800    DEBUG   stores  stores/index.go:400     not allocating on aafdb8ec-eb76-4127-b046-36e6ae97797f, out of space (available: 103159488512, need: 518832049356)\n2021-07-14T16:21:02.809+0800    DEBUG   stores  stores/index.go:400     not allocating on e918d62b-a2bd-4674-8c8f-53e5aab913ae, out of space (available: 68799750144, need: 518832049356)\n2021-07-14T16:21:02.809+0800    DEBUG   stores  stores/index.go:400     not allocating on aafdb8ec-eb76-4127-b046-36e6ae97797f, out of space (available: 103159488512, need: 518832049356)\n")])])]),t("ul",[t("li",[e._v("启用自定义GPU")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('# 测试未明确支持的 GPU，请设置以下环境变量:\nexport BELLMAN_CUSTOM_GPU="<NAME>:<NUMBER_OF_CORES>"\n# 尝试具有 1536 个内核的 GeForce GTX 1660 Ti 的示例：\nexport BELLMAN_CUSTOM_GPU="GeForce GTX 1660 Ti:1536"\n')])])])])}),[],!1,null,null,null);s.default=r.exports}}]);