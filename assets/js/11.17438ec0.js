(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{430:function(a,t,s){"use strict";s.r(t);var r=s(65),v=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"重构之心"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重构之心"}},[a._v("#")]),a._v(" 重构之心")]),a._v(" "),s("blockquote",[s("p",[a._v("营地应该要比你来时，更干净。")])]),a._v(" "),s("p",[a._v("身处开发团队中，无论是新人还是老手，我认为重构之心应该一直保持。当然也不是呼吁大家天天重构。重构虽然是一种好习惯，但也是因地制宜。我们为什么需要重构代码？是提升技术能力？还是加快代码书写速度？又或者单纯只是因为这份代码不是出自你手，觉得别人的代码充斥着腐败不堪的味道？以上种种问题可能驱使着你重构现有代码，但是记住不要盲目给自己提供兴奋剂。通俗点说，不应该盲目的去重构，有时候太过于“勤劳”也是原罪！")]),a._v(" "),s("h2",{attrs:{id:"护林者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#护林者"}},[a._v("#")]),a._v(" 护林者")]),a._v(" "),s("p",[a._v("辛勤劳作的人当然是值得称赞和鼓励的，但并非任何时候你所做的都能被人称赞和嘉奖，有时可能都是徒劳。当你正在维护一个私有项目的时候，无论语种、无论大小、无论繁简，此时此刻你就是这片“领地”的“护林者”。换而言之，此时此刻应该没有人比你更懂这片“森林”，无论是直径小路、还是艰险泥泞，你都应该是了如指掌。当你需要肩负“护林者”职责的时候，就应该去这片林子里将那些图谋不轨的“人”赶出去，将那些阻挡了上山人去路的灌木移开，将那些容易伤人肌肤的荆棘劈断。提前预警“森林”中的黑暗境地，让前来这里冒险的人小心行事。")]),a._v(" "),s("h2",{attrs:{id:"安慰注释的陷阱"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安慰注释的陷阱"}},[a._v("#")]),a._v(" 安慰注释的陷阱")]),a._v(" "),s("p",[a._v("在《代码简洁之道》这本书中提到过注释也是一种让代码不干净的元素之一，但也说过必要的注释也是应该的。其实这并不矛盾，当你为你的代码书写注释时，我相信大部分情况肯定是为了将来自己读这一块时不迷路。“即便最后还是会迷路，但也总比光秃秃的要好吧”，你会在心里自我安慰。诚然我自己也是如此，但是这样就陷入了“安慰注释”的陷阱。你认为无论自己的代码如何书写都不重要，你认为一行注释在未来可以为你指路，甚至可以帮助到其他冒险家。但老兄你知道吗，铺平道路不放路牌和草草定钉拿几块破板子往哪一甩，然后假惺惺的在上面写到：“此处通往 xxx，我已经为您铺平了道路，祝您顺利”之类的提示语。我相信你作为软件工程师，一定是希望自己是前者。如果你不在意这些细节，可以无需往下去阅读。因为你的傲慢和不负责会让你未来尝尽苦头，并且被人在背后不断抱怨你留下来的烂摊子。")]),a._v(" "),s("h2",{attrs:{id:"请做好-指路牌"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请做好-指路牌"}},[a._v("#")]),a._v(" 请做好“指路牌”")]),a._v(" "),s("p",[a._v("试想一下，你在写下你业务代码第一行时，是不是等同于留下了“线索”。我将自己编写的代码大到类命名，小到变量命名，我都称之为“线索”，因为后面的冒险者会寻迹而来。如果你做好了整体的道路规划和良好的注释习惯，我相信冒险家们一定会感叹“真是不错的设计”！那么何为不错的设计？这个问题没有统一答案。但是能够确定的是，语义化和共鸣性无论用在变量名，还是方法名，他都是非常不错的做法，这能够让人阅读时不那么晕头转向。可以夸张的说，如果做好了以上工作，即使你不写一行注释，冒险家也能闻着“花香”到达终点。但为了能让整个阅读流程变得轻松愉悦，适当制作好指路牌，也是“可选”加分项。好的注释应该是简洁明了的，而不是罗里吧嗦像个唐僧不断念经。")]),a._v(" "),s("h2",{attrs:{id:"哦-天呐-上帝造的变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#哦-天呐-上帝造的变量"}},[a._v("#")]),a._v(" 哦，天呐！上帝造的变量！")]),a._v(" "),s("p",[a._v("我相信，在你日常书写代码的时候，经常能听到有开发抱怨说:“该死，又是魔法值。”这样的声音。对于一个软件开发工程师来说，是常有的事。那么什么是“魔法值”呢?简单的说，就是你正在拜读前任同事的代码，突然看到一个 if(flag=5)之类的代码行。这里的 5 就是魔法值，它需要你结合代码上下文去推断它的作用。如此，不仅加大了维护难度和时间成本，还容易让人感到愤怒与不适。那么，我们如何改造魔法值呢？其实可以用“枚举”或者将其定义为“常量”。无论前者、后者，他都能有效避免后来者一头雾水的局面。相信我，你不会喜欢有人在你面前施展魔法的，即便他的做法是那么华丽，但还是会出乱子。")]),a._v(" "),s("h2",{attrs:{id:"控制变量领土"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#控制变量领土"}},[a._v("#")]),a._v(" 控制变量领土")]),a._v(" "),s("p",[a._v("古代权臣当拥有了绝对权力后，他就敢凌驾皇权之上。换言之，在代码中有一个变量可以嚣张到，控制多个作用域的正常运行流程，那么相信我他绝对是 blacksheep(害群之马)。你应该早早端了他的老窝，让他横尸遍野，啊不对，应该是死无葬身之地。大部分的软件工程师对于全局变量都是嗤之以鼻的，甚至是恐惧。你试想一下，全局变量就好比多米诺骨牌，系统中某些方法对其可以任意“抽拉”，并且你还不知道是哪个混蛋方法开了第一枪。这时候你只能苦苦调试断点，美好的一天就这么过去了。女友的饭局你也去不了，美好的约会就此破碎。所以请你干掉这个轻浮的家伙（跟谁都搭讪，跟谁都随意）。")]),a._v(" "),s("h2",{attrs:{id:"短小精悍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#短小精悍"}},[a._v("#")]),a._v(" 短小精悍")]),a._v(" "),s("p",[a._v("我们天生不喜欢冗长的文字，我们喜欢背诵名言警句、七言绝句。短短的一句话可以包含丰富的哲理在其中，让人容易铭记并且能顺口提及。其实在软件开发工程中我们常常会写下相当冗长的“方法”，类似于小学生记流水账。你说它功能也能实现，并且也没有任何问题。看起来这种代码无伤大雅，实质上有伤风化。太过于冗长的代码就好像在对阅读它的人竖中指，并且说道“嘿，白痴，看我看我，你看我那么长怕了吧！”。如此粗鲁形式是相当不可取的，我们应该将冗长代码切分成若干个小函数，并且函数名能够干净利落的表达该方法是什么意思。例如 createEmpolyeeInspireAccount()，别人第一时间能够知道这是一个创建方法，再往后看就能知道原来是“创建员工激励账户”的方法，如果你的代码能够如此优化，就好比一个谦逊学者正在彬彬有礼的和别人讲述你代码的故事。避免冗长代码，及时提炼方法这样才能保证别人不会太抵触阅读你的“故事”。")]),a._v(" "),s("h2",{attrs:{id:"朋友-不要太让人在意你"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#朋友-不要太让人在意你"}},[a._v("#")]),a._v(" 朋友，不要太让人在意你")]),a._v(" "),s("p",[a._v("我们不太在意远方亲戚的孩子考上了那所名校，我们也不太想在意今天要怎么做老板才会开心。俗话说:“关心则乱”。在你的开发工作中经常会看到有很多方法，这些方法就像不同的人在你面前疯狂招呼。有的无需你传递任何参数，有的就如我学生时期接触到 windows 编程 api 文档一样陷入参数地狱。一个方法 4，5 个参数，甚至有的需要将参数折行才能看清楚他需要的参数。当然这也有历史原因就不过多赘述，那么我们需要什么的方法呢？换句话说我们怎么写出干净的方法呢？其实很简单，我的原则是:该方法的参数有且不超过三个参数，超过三个参数应该考虑将参数内联至方法里，或者将离散的参数合体变成一个对象。这样参数的“连环计”就不会得逞，你的方法也让人便于理解，岂不美哉！")]),a._v(" "),s("h2",{attrs:{id:"词不达意-句不表理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#词不达意-句不表理"}},[a._v("#")]),a._v(" 词不达意，句不表理")]),a._v(" "),s("p",[a._v('请停止胡乱命名的习惯，无论是类名、方法名、变量名你都应该严肃对待，别让人读你的代码感觉是在读小学生的作文日志，就好像全文都标记了不会写的字用拼音代替。应该避免废话变量，还有弱智变量。这两者一个是将一个既定事实重复提示，一个是胡乱用简写和莫名其妙的命名，来戳瞎你的双眼，考验你的耐心。变量名应该是能够直截了当的表明的来意，而不是一个结巴在那里支支吾吾搞你心态。我就见到用"eo"来直接取名的家伙，我见义勇为的将它更改为"employeeInspireAimEntity"(员工激励指标实体)，这样看起来就直白了当一些了。上面只是一则很小的插曲，相信我只要你的开发生涯超过一年以上，你绝对会碰到这样不负责任、懒惰的软件开发工程师。有人觉得变量而已，开发进度紧先简单应付一下得了，后面在优化。这就会陷入勒布朗效应:"稍后等于永不"，我们应该发现问题第一时间就将它解决，而不是拖延，那是很糟糕的做法，因为转头你就不记得这件事了。')]),a._v(" "),s("h2",{attrs:{id:"不要相信每一位-来客"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不要相信每一位-来客"}},[a._v("#")]),a._v(" 不要相信每一位“来客”")]),a._v(" "),s("p",[a._v("假定这个世界都是好人，那么就不存在欺诈和犯罪。理想是丰满的，现实总是残酷的。在整个软件设计里我们应当对自己地盘和以外的所有事物都保持警惕，那个变量是否合法？那个对象为空 null 会怎么样？用户随意输入一段文字又会怎么样？我相信你已经知道我想要表达什么东西了。没错就是关于“检查参数有效性”的警示，你无法断定这个变量不会在未来的某一天“叛变”，你所唯一需要做的就是无论何时何地，你需要检查它的合法性，才能进行下一步的程序进程。如果你的程序不做任何的安全校验，我相信那一定是地狱。当你做好了代码的参数有效性检查，你的代码质量一定和长城一样坚不可摧。")]),a._v(" "),s("h2",{attrs:{id:"请暂时放过混乱"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请暂时放过混乱"}},[a._v("#")]),a._v(" 请暂时放过混乱")]),a._v(" "),s("p",[a._v("我相信你有一颗完美解决问题的心，但有时候你需要学会妥协。当你正在维护一个祖传项目的时候，我相信更多的是添加一些无关紧要的小功能。在这个时候，你一定和我一样想要将里面不合理和杂糅逻辑全部重构一遍，让自己一眼望去皆是青青草地。但是当你看到一组几百行的函数，你犹豫了，你不知道它在干嘛，你只知道它就像一个臭气熏天的垃圾堆让你望而却步。相信我这种大家伙，我们走位上策。原因其实很简单，重构他的代价太大了如此庞大的函数体，势必有着千丝万缕的联系。相信我将它搁置一边，等你把其他小怪干掉后，项目的整体脉络你也会清晰。到时候再将这个大家伙一举歼灭也是明智之举。")]),a._v(" "),s("h2",{attrs:{id:"你不是章鱼"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#你不是章鱼"}},[a._v("#")]),a._v(" 你不是章鱼")]),a._v(" "),s("p",[a._v("有时候得承认，再厉害的开发者，都有百密一疏的时候。我总想求得完美，但是每次都会有点小瑕疵导致不那么完美。但这不是你放弃追求极致高标准的借口，接口是你负责的，文档是你撰写的，方案是你想出来的，代码是你实施的。这些东西都无法推脱给第三者，你就应该将这份任务完成漂亮，就应该按照高标准去实现。哪怕最后上线出了小问题，做好复盘工作一次次总结，一次次提升，我相信你是一个很棒的工程师。虽然你不能想章鱼那样触及那么广，但孰能无错？")]),a._v(" "),s("h2",{attrs:{id:"关于序列化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于序列化"}},[a._v("#")]),a._v(" 关于序列化")]),a._v(" "),s("p",[a._v("人生难免为序列化问题而绊倒磕牙，请不要烦躁，因为我的示例可以安慰你。我记得那是一次重构项目，任务是将原先某一块功能从一个大型项目里剥离出来放到另一个新项目里，当然这不是一件轻松的事情。你得细致的列出变化范围和接口文档，数据的迁移工作，还有你的重构想法。当我将迁移工作完成了八九成时，兴高采烈跑到测试姐姐那里提测。我相信自己肯定是一遍过，但是软件开发没有一次过的说法，26 个接口测试基本上 25 个都没问题，就只有那一个需要通过消息消费机制来完成业务的接口有问题。我彻底无语，明明消息体是两个一摸一样的类却始终无法 decode（解析），中途我尝试了加上序列化 id 的方式，直接在接收方引用发送方的类。但都无济于事，但在这期间我的同事提供了技术援助，暂且叫他小夏好了。他不愧是老法师，遇事相当沉着冷静。他在询问了我的几个关键点之后，与我反复 debug，最终他发现在我的接收方存在两个一摸一样的消息体类，他两分别是从两个版本的 jar 引进来的，这也是为什么一直解析失败的原因，因为消息发送方类序列化 uid=1，消息接收方并没有使用 uid=1 的这个类版本，导致序列化失败。问题解决后我请他吃了解暑冰球，也深深记住了这次问题排查。\n总结几点序列化问题:请检查类名是否一样、方法名是否一样、属性名是否一样、类版本是否一样、排查接收方类是否有相同名但又来自不同版本的类...")]),a._v(" "),s("h2",{attrs:{id:"横向整洁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#横向整洁"}},[a._v("#")]),a._v(" 横向整洁")]),a._v(" "),s("p",[a._v("当你翻开一本书的时候，你或许看到的第一眼时整齐的插画与排版。相应的行距和缩进让整体变得干净整洁，人的阅读习惯一般都是从左到右，从上到下。那么读书如此，读代码亦如此。如果希望别人在读你代码时能够像读文章一样舒适，我觉得适量的横向字符控制是很有必要的，我的建议是一行最多不要超过 120 字符，80 字符极佳。当你将横向代码段变得足够干净，我相信你离写出漂亮的代码指日可待了。")]),a._v(" "),s("h2",{attrs:{id:"不要上来就用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不要上来就用"}},[a._v("#")]),a._v(" 不要上来就用")]),a._v(" "),s("p",[a._v('对于一个完全模糊的组件，压根就没有用过的组件，请不要上来就用，可能你以为的组件功能效果是你脑海里完美的存在。但事实并非如此，我们有很多时候需要踩坑才会发现事情的微妙。在我重构项目的过程中有几块地方原先使用了分布式锁，然后又想着我们团队自己写了一个注解锁，可以很方便的实现锁业务。我二话不说上来就用，但造成的结果也是很明显的，在测试过程中发现了无法真正锁住业务的问题，并且这种问题是在特定场景下才会出现。因为注解锁的本质就是通过 AOP 切面编程去实现的，对于某种场景是不适用。所以希望就像大人常常告诉你的一样:"知己知彼，才能百战不殆"。')])])}),[],!1,null,null,null);t.default=v.exports}}]);