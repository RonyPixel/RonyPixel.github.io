'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "af37444ed28568b64cd0011d984257d9",
"version.json": "a8c15b77697ac6d740e001aa5df7aded",
"index.html": "d8b4c0e89d0b27f394e55678a5cd876f",
"/": "d8b4c0e89d0b27f394e55678a5cd876f",
"main.dart.js": "f9b30d6e5bcad62a262b1345a27466a2",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4efc4c044b13a2e3a8828ecc15cafd53",
".git/config": "46dc0200a15b784486dbcc4fc63a8b9a",
".git/objects/0d/f5bb867ca3efd438d048c1d50d5b1e9209bb99": "cdfe734a488a9c304d12243bd8d60b53",
".git/objects/59/aa0a27cf00430efa53f45ecf52c6b75889a7f0": "e06fdd0dea429d8097c30e77ddddbab1",
".git/objects/3e/5e0402a5f6c421633d6bbe33dd9a268805e275": "2f243234004a54e902d00b978e9fc552",
".git/objects/50/4e6cd676547344986c85a9e40462705c96e417": "5cd4be9806fe815c42242546994a597c",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/3b/dff9fe37ea25413888fc610fd85103f391878e": "63f5973b8ae16c2c0510a77235a5dfb9",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/96730bdab4093fe40284111b9ae0bdfacfebff": "fce02074519ae1dc9a806fe79253258e",
".git/objects/03/1b57b7b6067d7d62105ce2ea2857fef3a1dbbc": "fa72fd6ec0990c56126334b6a8960202",
".git/objects/04/f608a783c68dae6aacc1a2a0d76d7ff0ecfc9f": "b84a4278941b63b51cf9b89c51c3e721",
".git/objects/6a/7b3af8aade0a84bad59394e284cc18a59ad32c": "c9ca77821b4a09979f747fd13d3c0202",
".git/objects/6a/5f86a0ddaa5d0c21fa255816c0161583ece658": "4c2ea28de96f4e2c76e8abb37c2d79df",
".git/objects/32/0070de394cac37f29c870fb1aa22ed483468c3": "dafe26f8c0e73bf8d7622f8cb3bec664",
".git/objects/35/89e96e6f5f87a5b1af9c5581ca3a58e47263d2": "277af991b802c0f50342f27ee51532af",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/69/129c9914a57929f795f55a3d4d51fbdb85ff21": "e9e5a60ddb0fa5deaa2a80718609c183",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/56/71951a6860de2486112dcb79fc536c3d36158d": "985421822223eaa97857c5e638cf6e59",
".git/objects/51/a46648fa32a65f810dd4313640d8fb219a1827": "168e08e09aa26b0a8fe261d88341cc89",
".git/objects/67/bccc80b13fa5d1b8d4fddd9dff022e6c7a5c78": "c26d2f5ca4d824924fe1935f31891347",
".git/objects/0b/f80c874e6b09bdb31a25e02e7a136a71ddbc2b": "43e3cbcfd5d39640e1866b8841336c30",
".git/objects/93/7b1e9b4971410e09c5b8e0a5d7be760a11212d": "8d08e988fd9b8de3d8ce8a3d694a8ce3",
".git/objects/5a/928de15694fdc3955348fe3590c49901ec3833": "4764ffa654c9f69b93fce9d8be5fac73",
".git/objects/5f/2101167c6e8f64155c5e28456e020d76100a0b": "849f5313df450808c9251a196bcc4232",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/33/3d367cb40e5dcf940bc88ea77d8508b2c07a72": "1f5e95153e211d7a3a82e152193c5ef4",
".git/objects/02/3745a23a5ac349d37f0a2619f3ffe786c5ff89": "d820950d8e063edda660ebc8bd044d03",
".git/objects/a4/94e1b69830dd97299d53d382aef8661749a5c6": "a262cd737cb279d5bb90034976fd90e0",
".git/objects/a3/70383aa2f61949952acef36facc47fb21eb841": "2957ed34f0131d35140f8179eb527749",
".git/objects/b5/1db6895b860877ff9c699bb769bd88edcc0cec": "dd65a350d39c3ffc308838dc66489107",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/e2d244cf1ce092403bd5f0a56c64dc2f78b944": "df45e804f1087c12844310e1a75f1ff5",
".git/objects/ac/19228d9a4946eb22cfb7d12cc344744d3a730b": "a939320860d1cdaafdb71fb4e1793da1",
".git/objects/d7/e451315f2d183d01d503df600f3db3a6d85ab8": "d02368f25f4492df540e20f22bf3f039",
".git/objects/d7/972d54fc7deef50ae0c3208f7ecddfaeffdfb1": "e84df605b25458808719f06a010fe70c",
".git/objects/d0/7b7d8998f57c63e2fde7945023cc89d457faa0": "2e234fae27f580206e3b7ae955bac864",
".git/objects/df/7e738507902494fde9a1017a979f13a6ec7970": "c0e92ba171926d629358b98a96e24d49",
".git/objects/df/ba08f8791c5cff2b96191b197a520aa972d2b8": "3f3d4db652f89afeda37b04456bd361d",
".git/objects/da/33d12009f0b594a8eb8a6554914fa8f3d04229": "a5bae8ca32618a09da59c886f6f10f56",
".git/objects/a5/c21eb9612bd7db89ada8ef5235a31d70d8afa1": "8042b42671426911f909c168258706fd",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/35d358a985abb9e830a445c8c44bfb6f4adc86": "b9db43f32c48db19f14d0eea2d57cca8",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/bd/9d4a9dab86d39faa0bf19225d54ae75cf26200": "dc75e7a98ee5210da8e3c9754339737c",
".git/objects/d1/0874a61e5e9f698778a2c2e450419a49c4a22e": "2d929e802f46a9d1b2b9cdef041caf1d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/2e22dd790fb33a9ebb783a1b9a4c82b9c09dac": "fb4ac178941b5a7a03faf87fe08f98ce",
".git/objects/ab/5ac0c0844a3343aa4eeb4bc29ec530730abfe1": "056e971380b038a95472e29c9405a5a6",
".git/objects/e5/613315860ed0619da1edbd3aa99aeaed790e3d": "cedd6cb6a0750157ea395a1555baa040",
".git/objects/e5/34994480411e7a1f70265252346cfe12620641": "3b7d7411971a3810d7a485cd8dde56be",
".git/objects/f4/a95a0dc1a822ef4759c3d657b55afe7555b674": "3b920cf78dde07198811149658b84325",
".git/objects/f3/5df94e1b12af853437fa0f27e0bf081c638d07": "64af3c8de10045c572b0dc51548808cd",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a88248eceed22f3a605e33b9d9a50e5ee7b73c": "ad840342172be1200a9510a67203f83f",
".git/objects/c0/1e16e3e62b24e4bf95082745f36ce3c71ee4b4": "9a2d6bf9513744ddf101d7b568ff2a2e",
".git/objects/fc/060bcc7050118c7994f856437ef8ce4ffc2a8f": "aee5f39ac63ee6c9bc2bb73751431a2a",
".git/objects/fd/08513ba45ebc8ccea9cdbf7cad87820a67d37a": "60c9e319b5bbfb1e2f02a2bb073e7597",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/1832e7bd63e06f1416c51afb36b4db9b4619b4": "49ac9b3300b7521f11ff0bb192933456",
".git/objects/cf/00b0e56b6ebac867233f2bfed351de378c4ef9": "631988e5e80cbb73dc9578bd5e40d152",
".git/objects/cf/4c7bd7bb340167880da56d4b88bdfce5bb9548": "bc7bd8cdaf179f7eb051e0208e9d523f",
".git/objects/e4/8144efaf4f3e8d2b3899c0127f26640bcc8e9b": "e5b1aa35a0a0ca7bd7935fe5a29f0e34",
".git/objects/fe/8b2919c8901dfe46166dc6a28010266b9426f1": "f08fdba79bba7ae84980fc2700aba784",
".git/objects/fe/23a646c2ae650082a4ec67f1be84701a9c999c": "d2f6125b1ba1d74b68537f07f0ade5bc",
".git/objects/fb/abce4533b43a4283c73c4f83c36097069ec8e5": "7b1bc378c0168f3f5013f40ba43b1b08",
".git/objects/ed/2d3760fa766485d086cc80930e1d0399e27039": "bb804b3f5bcb123f5d7649d023dc863d",
".git/objects/c6/229f278384961a34fbd2b50d69d32c35b833c6": "93e579661281aa07bdb355210bb00ec0",
".git/objects/ec/f4828055053ecdfa06fafbb25e8ad252f229db": "590b3e506be3b966d5658a8ec146042a",
".git/objects/ec/939577b933da492a1945013e74d1d44a2d512e": "734d2a605d818da1694934363525e62f",
".git/objects/4b/6e690bd16be4a4adddf3c8d611fe650097635e": "ffc7805de0c5f0fc06ae2038d9fc69fa",
".git/objects/pack/pack-3b20c96161e9ab5d53666f8a8f9549954927f468.rev": "076d8f429008ed000bc83ad6ed6ef73b",
".git/objects/pack/pack-3b20c96161e9ab5d53666f8a8f9549954927f468.pack": "8decfa2d83770191354658ea3d08b3ef",
".git/objects/pack/pack-3b20c96161e9ab5d53666f8a8f9549954927f468.idx": "efd3badab85e812666644a03b952a86a",
".git/objects/7c/6f2e979fef9bdd382daa49ea8437a81b0d24eb": "8297f6556c3be5c5f7eb7fcb1de725f3",
".git/objects/7c/06a1c7b7b92e12c15ef73f697c813a5c098b90": "9b302b0b753c2581b8aea6925a38061f",
".git/objects/16/6d5ee0d440e3e9210604b2779a26248e5dca03": "008b8967785164511cf5631dae49653b",
".git/objects/89/b46e7b8d40b8eedb4363aede515c64929c8f2d": "e7baf8e814370c0964d9b9b16355704b",
".git/objects/89/26b8ff4a489f91ae5e71c30d9496f7930166b7": "0245d1d35c8e4410648e15401514338a",
".git/objects/45/1c65440dfbcae74a21cc6a97bcecabb24b5637": "68ae8144aed1a792306fbb5506f45635",
".git/objects/74/9e4fddc0333204783002fbd33752789094370d": "249f65360f9cfcf5265a8a93ed67a595",
".git/objects/74/ae597351ed9398af66f51374a49217def75812": "642c7c4da94cd8bc9cc16885e5eebc77",
".git/objects/74/24fff6c5faa9253b8cb28d185b45dd3206336c": "480f5734c739b77664dc60531d907406",
".git/objects/1a/c7fed18a58963392314028c4140cf1d5677b5c": "863298d7e1301ab81f956fb0ea29798a",
".git/objects/17/ff681c6d069999c22121c34bc303cc6873d19b": "a6712b391b45b4db2d4bf70f678ac8d1",
".git/objects/7b/01bf2ce22881216729066f0dabf85c5fb1bd1e": "2c9c14545e10344a7aeb477727b210f2",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/3f59e62607c07614a0eda5a9f7e6c2fc37de55": "37c1b4b793860d2151051c6237e3f9b1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/83b6bae6c0dacb6499f350088bd77f0d90484d": "57666903e3574fe47f13b428b3b5b7f3",
".git/objects/26/0e138a03c5efea037b970f2b5aa10d4951a661": "a9846c8c58566ecac23eed0259856bd2",
".git/objects/21/f40b0b3af526112791f88e65a035c284482cec": "bd5f2665ab60d4ad8417c095b5f78cd0",
".git/objects/4d/dcba2763c1f29e92ae6e3de28d6d920b883650": "e57fc74f19881adfb29b8355ae23a5ff",
".git/objects/75/b19797d142e0d9c29894580e6310bb2f78fb96": "a73e6f8ccbe99d21e5276271b8956609",
".git/objects/75/ab8bd31be2f455edc80549e947056e48060bb4": "e3bf967311a5aa0c8fbc2134b2643d3d",
".git/objects/72/87faafee31fa183594f070191b261899797ec2": "807f1062d9a30dfbb839fe9b56bb6632",
".git/objects/72/ba9db5b15939fd620aa47b9e364f1b97da4a8e": "8e7bef349fc03cc8d1014d771ed362bd",
".git/objects/72/5bdd4254d975647078bc1b8e2fd712641d1fe2": "afcb66d57fbd9cfc214d7ffb76b95e5e",
".git/objects/44/abe5c5379c877b3c12238d384dfdbe0da78273": "d5b481863a3103ec77f1e3755cac2f7b",
".git/objects/2f/c7d3e3cd72c05d1112135215a47858e60eee4e": "d62a0e5d257ba244754fe014794a5c28",
".git/objects/43/477b3e6005c949edda6f57cfb2cde56f9c3b2c": "4076408b74259379a43965156a291021",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/48bebb887f5e908530a409676a3f83244a5cca": "464dee7f8c31219b7f1d81eb1160f906",
".git/objects/6b/1c69975fa22e9d06afc5c2305bd33c99c81542": "41795ffb50ef00559f17da7c8a3be8db",
".git/objects/07/f965a6769f0618c2a166e57b9197d9633e4ae4": "62b1d20e4db36a16a907b7d4b6d8b441",
".git/objects/00/1954ef59b466a8db7d1e2f1c887ad09065c879": "da6d0f561e414f45c9612a01a81c18d9",
".git/objects/00/846f8fd5a505c514e6b0f83bc264aeaf408299": "1334b91cd264bb0b456b8dd0e283bb2f",
".git/objects/6e/f8938680d5062db004352499cc95dc35337ae1": "3a9d3e73cd70b938a550a82dfafbc0d1",
".git/objects/9a/d4a7a2f2878e075d382f4b766d1685db772640": "4259b512ca84a172bec79ebf0f286e13",
".git/objects/5d/f78d8906a4b36f0d0702c2a969697deb69cf52": "681652b023fcc7010d83cb9858e454c7",
".git/objects/5d/6d766c523c1e2e7a82bffe65108037e258a265": "32647d9652e3c76ed8beef5dac620f81",
".git/objects/31/064317d16438cc796b83c4febd711152131d3e": "d9d38cbd299455078ff49e6300c1427f",
".git/objects/31/dceec44d45ce1d35b38657d00265061963e41e": "beffbd0f72896b7e756360a725986632",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/65/e2284be95d888e74da6eda27e7e3aebe9732ab": "44817f0034083a7b408aecc8e71922c3",
".git/objects/65/1c2429c552dbe9c730e12f9c95ddab62f1a388": "fc1725fe10913bb3311c9affd8a65151",
".git/objects/96/f5946471642fe3f485859558b22f8478ae9845": "023b0f7525c9e947f1951fac694ddeca",
".git/objects/3a/2cc74cb3cfd208ac830b23086745e0afe15ed4": "456757ab5e49e1e0c88251227fa409a2",
".git/objects/53/325ca79663d3e676f69dd917b44ca6e3ba3ab2": "7493d2d6311733441274df28041c4b75",
".git/objects/30/2066a42ef6d3ab66d3196e6f22ce685074da9a": "9772c8ede531433fc48cdce07453d153",
".git/objects/5b/2c242d3c7ff508d01b704bce1bcda55197c3eb": "98da71ddc80ffbcdc1b58e8732341f74",
".git/objects/08/e25a15531a3fb36c2b667082292201ed836bb2": "8d2ebee37e093a0e8cce444f264c7013",
".git/objects/6d/18934edf10663ca859ba4ceb398ce5fb732fd7": "c37e1ea5a9019db50f7e180d4398dfea",
".git/objects/06/60fd20d4c525975e4a0b7b43d6fd16a93e0695": "e3d3f542190de74189f971a5b7460154",
".git/objects/6c/28a84d4b5f0cf382c0a13949d0de1b64ee7c50": "5d980f00e1bdee1705cd1486710426fb",
".git/objects/6c/46a139312ab7a8b3de20aea6d38cdcf0077831": "cf90a205960aebb5c6cb8bc73b392084",
".git/objects/39/39ee3a49b30a9d23487a7964353486724675cb": "9f193a5984925a5d0688aa4f359595e1",
".git/objects/63/ccdd4f1df84de2232dc528f0da5dee7eac96c1": "a2249e88d382736ef0910508d91bea3c",
".git/objects/0f/87145bd4f6c805ce7d5771471213950cd572ce": "18a2def3ebd31dcb9809fe2fdfc8127b",
".git/objects/90/ab6024e302e30fe09a1550dd2b4206718e8acd": "ad7f52639788cfb1566debca3287c893",
".git/objects/bf/e4527fe25a0773b4875ee7d8be6ba8e4d9d595": "65a2fd31fc84044f071ac5150403fd65",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/6fbd3f49f393846e8066b419c9b12427ea2993": "54a12efc761b10c44835d72cac257883",
".git/objects/a0/dbb3c52de45974a99d87a3e16c35d270bf0f7c": "4575ee7f08a56387d00809aec8c4fc73",
".git/objects/a0/c8ec8ad17d5292f2e8dbff759a9a54c05103fc": "b15047f5087963187ad51066363e4138",
".git/objects/a0/e7bd9fd066f02914cd6ea43cd2a2f430b2b579": "197c3780f044cd03a59ef5b9c1dc7ac4",
".git/objects/a7/ac7d5021e8f0486d80aeaf2c169250c537b4ad": "6d3d5ad667c30f60534fed9dc3bcd296",
".git/objects/b8/f5b061fff300636ad483ba976fb07cce91904a": "70ea3f1c91e9ef23b75d4b582a928b5f",
".git/objects/dd/de9d95f2cb79bc1f4b09ce6f616d38865fa37d": "dc72a58d7c66785f8e0693a82e0197e9",
".git/objects/dd/ad82ef8079ca38e74ea87e1ab5f57452219a6b": "5080d1c3a2fd3dee219e871072794d25",
".git/objects/dd/213ac1cc1a03f4175f0a8671f438230a8ef199": "89e6f75e5ae421a81fa4cf22eb882805",
".git/objects/dc/525d0592369eb5f6e1d3db567b3d1b854cb674": "4c5445bcee34984446eb45c36f710aef",
".git/objects/dc/b15c7afadac0968daef3bab69fda188e59dc99": "b9cb5aaba49e921bb7a53cacfe9d23db",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/a9/c92731b2b85c4c977034a74d5c6bccb06580cc": "f378d3144a7fa61850bf126440cf8435",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/dc99b0190df6c25d87d940a2dfe14a8930e0ca": "a9666c3eab5238a691d51de44f53ef76",
".git/objects/db/533b664f113ea12dc03a1078ecf167d13bfa14": "af166793e94992b9f3e903fa55ee39b3",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/ad894d5563fcfcdf3da1fecfd098e62492bcd7": "427de8b23ccfdd0e5cbae9ae2d6e1975",
".git/objects/b9/9421b51aabf77131647eae9b40f89143dd7645": "47bee90c738caa3766fdd37433607cb2",
".git/objects/a1/139629c2ea4bcd0652f143512574f85a205fb9": "41ee0a33ed9628a0ae57f455cae58784",
".git/objects/ef/21006c6c0b378d97e29648dd5f7c84f7507514": "b41a32ce00b0e3f9c43de0772cac1b3e",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c3/6502b6bf90d044bb53bae785e84a34e5ef836e": "2b22fcd13ec1cb7874ac5f5f5ccb6dd8",
".git/objects/c3/631c30135a9ee493dce3c4e38f85bb88299d05": "2dfe9acd775187817c49a541906eb6ba",
".git/objects/e1/8212ddade35f71419a47daa9b912c8b5f77208": "7bc283ce82ea7fd538a6527980c068f6",
".git/objects/cd/531eac746f0b19616b13fe9c4a750ad574c7aa": "5f783cf15435c221bda29d223d51ac12",
".git/objects/e6/5c55a5b595e20e25bd59a1c8bd161d5b13e8a3": "a790fab1222de456f3faf3ebd3e8b99d",
".git/objects/f0/fe2262eba55bc1734a986451959e7e8c9f2e43": "8c95309cc0497f458588e4ffe867ef7a",
".git/objects/fa/f6dcbf33ce599a41fafdc6bcd4818bbd30db4f": "15b36d47247ad831ef73503858fff23d",
".git/objects/fa/b47a5ed314d5ef1fd8a2109f95bb907e46f675": "048d7427ca493010770a9e00e05d6774",
".git/objects/ff/e6a5541eb942c877f134992cccffe7c8fd7ef1": "c3fb328e9b30b0ddf628f882ccb90fb4",
".git/objects/ff/cb7f915534cc81378b5f96e99c58ef06e4135d": "1a652918412d2d77a5239186ed8eb577",
".git/objects/c5/5f2a5001cda1c8c5c3c381892ff716dfd503fd": "46199b933482c974474c7275135cdc3d",
".git/objects/c5/fb3aca40848e738f145659ed537d916c450bfa": "f296b54380ca936c018175418d4b5f73",
".git/objects/e9/5761e36ffb44fe59c6a8f7870cd2073d88be4a": "21680107e7740416890a51264c415188",
".git/objects/e7/efa04cd52475d76c3d9385ae767fc002b15863": "25f18de2f34f9101bd6ad8d48d626a5a",
".git/objects/e7/a3005acd1ca47ef847b33847ddb15f68886af9": "34c7c145dac17e2bc2d8dbe83fc98fea",
".git/objects/f8/b995b2369c9eeff90a31c0dd55bf6e2b023d30": "a688b4d528a9dcc3b4303e981d46ccbc",
".git/objects/ce/df53dd70358840cdf74407aecba080ab4c11a2": "46f0da13e8c3c8b4289f0c18a4006430",
".git/objects/e0/9236866101d571232b48f5b5643747aa46c4c9": "bbdcbf3fc56ad0a44946c20260f138f6",
".git/objects/2c/5f143226cb7c3817fe00f95bbd31baeeabdf36": "0bfba148b11a8496a99902dbb47b57e7",
".git/objects/79/9c9b8f77c9b656a9cd096d5d1d1ff38a943b3f": "50f2f552c4939613e2e66b1d9fd1ba93",
".git/objects/41/0466f42a9d290b2ce499f31ae14937ad7125da": "d47265643de5e4ab5d3f753439d16ebf",
".git/objects/83/0ab1889348430d47d2036137bc56476feed020": "6431a28c8f81dafa104ecbb6281c9a5e",
".git/objects/83/88116efb7e198ecd5feace2a0d97e26bf22a52": "059efc459b35b653da2f5fa95c5d0ea8",
".git/objects/84/8801b46bdf549d9552f754a14fc2d274a1cf8d": "3d3c3523e9e4f9c52e2e6ce4be67a37d",
".git/objects/84/21552499a7efa1a504ac6c8fb04710b0ae01b2": "27a30e3e7ae62017bb6be83d826804ac",
".git/objects/4a/0a1dcc85bc5f0a9434e61053fcfe02ecd5678c": "8199243f98639fcec8063a6abeb24dbe",
".git/objects/24/cfd5e05fc9d27c687ffd5524d60885260eb918": "182b95cd3fccd1e89fc94fc60756d73a",
".git/objects/24/e69b31c1291022fc204a02f19b825ffc58ac3e": "6f63e2851c19baf6cc494de380866df9",
".git/objects/23/301d3b1f684a93eaf015455296432580b531f4": "458291c4e7110c66a6bee2bfed93d2b7",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/85be5f1d29372c994edb35c7caa307358c6360": "b469c6124d0a91f46d8d56d68e9a4563",
".git/objects/8d/3ffed32e9969d6ec9efe7f559d9cbfbace6ab4": "65df77129f1d386f36cd97025ba95b73",
".git/objects/8c/49fe3054598172a3be0b7d9ce1b98ca04fb1a0": "570dd906e1a33eefaca3b3d65588b782",
".git/objects/85/0862026154464d812f9efece33ea8de46254e8": "01019f580ace41c8232833eaaefd9637",
".git/objects/1d/e1b4bba431e811bebac52324844e7b9532160e": "add6a64ac441586f47ca1e1d63dcfc4f",
".git/objects/76/6c40e7a7ddf81fca8121ce2fe2909dcbdb1bae": "1f3a6d85dd2dbb1fac5646e7c7b33d58",
".git/objects/49/5e01acabba6052a23575da53b73ae696efac10": "7e32c74dd33b5b7be4c44f000c47d8eb",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2b/694ea034397aea11e5126896be52653865966a": "2bf2fe9bd2e2745753e5f813b664ae5b",
".git/objects/7a/8075a49649223e1d1200ff8373f693eb961090": "38ee5a2570d833198ab0218e95b12212",
".git/objects/7a/ad430c105a8027572145fa83925a26772b2ee8": "fe55840e352ecff394b4e3556fb040ca",
".git/objects/14/7af61242d93cd6a85900c3946702bf33f99b62": "bb68c1bf4aa27eb7d5e0859d0600afe6",
".git/objects/8e/f5e2f92e07096a2f89bf186316421e28512e05": "bb4e2e79b8d00c41cfaacfd1a700550d",
".git/objects/25/df8268f796e11f47274288f57ec04453ba0381": "d38a0b061112ead5034b19a7247d2e86",
".git/objects/25/f65692cb9347d3b2c794cf40a4e02c05a6a199": "5950dc66436bc33f4bc6c7559f21daa2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5a4e1995475b4cf2545bd2e0e5a6a447",
".git/logs/refs/heads/main": "3f0290f9b14f9df7adeb370aa4956590",
".git/logs/refs/remotes/origin/main": "360ff4862c2a2686d459dfc81aef3309",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "55522b1dea67f47184759d4fdbd9dd59",
".git/refs/remotes/origin/main": "55522b1dea67f47184759d4fdbd9dd59",
".git/index": "b752543d93fade42e658f43444800de9",
".git/COMMIT_EDITMSG": "6d2fd4056babc68a3df3615c6361a522",
".git/FETCH_HEAD": "d7d4c687fd853067fc64077052545e90",
"assets/AssetManifest.json": "0bd026d670e12ded6849407887a2a5ba",
"assets/NOTICES": "1d4de33f3f322fdff1127017d4605479",
"assets/FontManifest.json": "0f73c5a79ef8f2f6d2f42497c59ed9cb",
"assets/AssetManifest.bin.json": "2a3564239fbacf6beba8590ea61c7be9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5f72d664707e4d711a1c0c240912cd50",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/atlas_icons/lib/fonts/hotel-service/hotel-service.ttf": "50c923469385bd7b44dcb324fe548559",
"assets/packages/atlas_icons/lib/fonts/food-beverage/food-beverage.ttf": "3bd6a218528261210afd0fecba202a31",
"assets/packages/atlas_icons/lib/fonts/transportation/transportation.ttf": "7fe16a999c74f8d1d1c5b380eef01d81",
"assets/packages/atlas_icons/lib/fonts/yoga/yoga.ttf": "66b3143038a6ac7a5b3f98ff41ef1002",
"assets/packages/atlas_icons/lib/fonts/achievement/achievement.ttf": "b4aaadf0bf250f17427edc2bf8d6fffa",
"assets/packages/atlas_icons/lib/fonts/web-design/web-design.ttf": "63e6ea1eeede5eb6d7d1b7e7ea5c5797",
"assets/packages/atlas_icons/lib/fonts/cinema/cinema.ttf": "2c4d6cff8e18f0d725ff07aa98ef5951",
"assets/packages/atlas_icons/lib/fonts/goals/goals.ttf": "0f4c7d9e8c7493ce5c97ed3a6900f454",
"assets/packages/atlas_icons/lib/fonts/love/love.ttf": "d1bb0864325a76ac12868703585dca7e",
"assets/packages/atlas_icons/lib/fonts/arrow/arrow.ttf": "b1de896027e8f8bce86ecb62033361bb",
"assets/packages/atlas_icons/lib/fonts/laboratory/laboratory.ttf": "2ac143285c91dfeaa7bd76b1b9531503",
"assets/packages/atlas_icons/lib/fonts/business-finance/business-finance.ttf": "f2acea65ddcc3cc9f4f603eeda551ef0",
"assets/packages/atlas_icons/lib/fonts/virtual-reality/virtual-reality.ttf": "4f154c6974c3ca6c64e6eabdac9aca8b",
"assets/packages/atlas_icons/lib/fonts/real-estate/real-estate.ttf": "6a12f5fce5044802569cafaa0468851d",
"assets/packages/atlas_icons/lib/fonts/hand-gesture/hand-gesture.ttf": "23cf587d654b727258bdd2e539cbf3ef",
"assets/packages/atlas_icons/lib/fonts/sport/sport.ttf": "35b11c59b869732d524129e81095ee7f",
"assets/packages/atlas_icons/lib/fonts/internet-security/internet-security.ttf": "1a54b082a574356bf84cc740303ed2a2",
"assets/packages/atlas_icons/lib/fonts/working-together/working-together.ttf": "0bb881a4d35082e410776be5e1207d49",
"assets/packages/atlas_icons/lib/fonts/furniture/furniture.ttf": "a3ec0d78085d4bd960a42ad5690c74c9",
"assets/packages/atlas_icons/lib/fonts/social/social.ttf": "14e2653eb89f982208a1c844d145ec0b",
"assets/packages/atlas_icons/lib/fonts/christmas/christmas.ttf": "0d5b397bbefbc79ec6962cab78cdfa7a",
"assets/packages/atlas_icons/lib/fonts/winter/winter.ttf": "498547350c07410d7d2b5ef388786d85",
"assets/packages/atlas_icons/lib/fonts/audio/audio.ttf": "3f1061077885938f7d7950997d204c5d",
"assets/packages/atlas_icons/lib/fonts/world-monuments/world-monuments.ttf": "b4838b4465611323a6f32f6085fb6629",
"assets/packages/atlas_icons/lib/fonts/medical/medical.ttf": "1870469962656e437fe59fbdc1d41f57",
"assets/packages/atlas_icons/lib/fonts/personal-development/personal-development.ttf": "cc1fffe7122f1837e50149b9469cb537",
"assets/packages/atlas_icons/lib/fonts/construction/construction.ttf": "cd4e1da1de050086fca243af5904e782",
"assets/packages/atlas_icons/lib/fonts/marketing/marketing.ttf": "a3c9127874bdf909d03f23340ca680e2",
"assets/packages/atlas_icons/lib/fonts/thanksgiving/thanksgiving.ttf": "3361220d1c358b8e5b9705250af2031f",
"assets/packages/atlas_icons/lib/fonts/basic-ui/basic-ui.ttf": "66ce98cbb527bcc6ebe7ee107c5b4c7b",
"assets/packages/atlas_icons/lib/fonts/weather/weather.ttf": "bf22ee4acf5483d84fcd4fb215f949e7",
"assets/packages/atlas_icons/lib/fonts/ecology/ecology.ttf": "b83e0c5a4760275984251b83c4ae8288",
"assets/packages/atlas_icons/lib/fonts/communication/communication.ttf": "98765079271bc5f10b094f70ec20ef35",
"assets/packages/atlas_icons/lib/fonts/content-box/content-box.ttf": "bdac94c1cf513f6765423de96650ca97",
"assets/packages/atlas_icons/lib/fonts/leadership/leadership.ttf": "027bd6ee2dd9c7eb2fd83ce8c3112024",
"assets/packages/atlas_icons/lib/fonts/partnership/partnership.ttf": "153e3d7bf92828c0b6f344462c96b3a1",
"assets/packages/atlas_icons/lib/fonts/electronic-gadget/electronic-gadget.ttf": "e24858c0b60a69c5646b1547210fff28",
"assets/packages/atlas_icons/lib/fonts/school/school.ttf": "df386f18a52a9184d05a34e44611fc29",
"assets/packages/atlas_icons/lib/fonts/fitness-gym/fitness-gym.ttf": "4271c3a0c2c52db8714961e022c43119",
"assets/packages/atlas_icons/lib/fonts/data-document/data-document.ttf": "a9a08ede494be44999414f064b76e564",
"assets/packages/atlas_icons/lib/fonts/travel/travel.ttf": "ad2106403b4f3178091e5b9b65fbc636",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "582ac3fd980c1c26f74bfa6c7f3dd41d",
"assets/fonts/MaterialIcons-Regular.otf": "5d1e2cc45553890e8625cbc5a8de8e6f",
"assets/assets/images/personal/me.jpg": "cbd2058e1bf9b08ea8bff4d00c3b3abd",
"assets/assets/images/personal/earth.svg": "ba131e34c9d2b74dff88e028fb2fbfd6",
"assets/assets/images/personal/galaxy.svg": "d0c49e57159dea3c38a655b3ba6126b5",
"assets/assets/images/personal/mess.svg": "9f6dc326fadfbdeb31c284abb91c9e3e",
"assets/assets/images/personal/coffee.svg": "de27833429e0102727e17caa82d7ea9b",
"assets/assets/images/personal/complexity.svg": "684f184354ed5c2a9c145869e7192b46",
"assets/assets/images/personal/message.svg": "807b4e8375f8c0948531908d4c1c965f",
"assets/assets/images/personal/my_showcase_style.png": "cbd2058e1bf9b08ea8bff4d00c3b3abd",
"assets/assets/images/personal/work_stump.svg": "0bb6c81971fa97d047ec102a8ac529af",
"assets/assets/images/personal/logo.svg": "22244fc4b3bf5f514737b592eabd6f6b",
"assets/assets/images/tools/flutter.svg": "749737f954a8acaae1b3d389b3fc857f",
"assets/assets/images/tools/python.svg": "a1872cef0fb917ddf4d387e298d9f160",
"assets/assets/images/tools/html5.svg": "4447440d22b307c33a57c729e7d7c599",
"assets/assets/images/tools/dart.svg": "77736b70355db3b992d712891749acd5",
"assets/assets/images/tools/graphql.svg": "fa9917f65a8a054a150ed6cc318b163d",
"assets/assets/images/van_gogh/blossom.jpg": "edd66f35236f9c40230f1661b6f591ba",
"assets/assets/images/van_gogh/the-harvest.jpg": "728eeed80696e11c7aa2bd300a5c91e3",
"assets/assets/images/van_gogh/the-starry-night.jpg": "e6510bbbc3323389a97301589c1d23f1",
"assets/assets/images/van_gogh/irises.jpg": "635508d65ecf46f0d10fe99c3a7e0633",
"assets/assets/images/van_gogh/wheat-field-with-cypresses.jpg": "840970e2bd83dc59ffdf05e29f9ed5e4",
"assets/assets/images/van_gogh/the-potato-eaters.jpg": "6b3d9a5439c71c19f48d5c212af731cc",
"assets/assets/images/projects/design_patterns.png": "0274f5986b14139edd72021ccbd1326c",
"assets/assets/images/projects/animated_buttons.png": "6adf04371ccfdb14959e97d8eee42250",
"assets/assets/images/projects/graphql_notes.png": "45eda8f8a37c58819a6100631b8c7465",
"assets/assets/images/projects/the_golden_land.png": "c862492f15f121d0f849779928c76f74",
"assets/assets/images/projects/notee.png": "264a912225cccd84854bd8ffe39658b3",
"assets/assets/images/projects/ggone.jpg": "4212f1730f81119ff06eb14a10a8d36a",
"assets/assets/images/projects/pulse_x.png": "4583c5c8f45338f72f4ac6001faff5ca",
"assets/assets/images/projects/ai_chat_bot.png": "9d41e8eb12bb98afd6007d8a788839df",
"assets/assets/images/projects/thread.png": "23c161c332c9518d5a6910b17d70d814",
"assets/assets/images/projects/iron_man.png": "8708dc927d907d844431378307225a16",
"assets/assets/images/certificates/tmesek.jpg": "ecb7b17281f8b8e4d9d85e201bbb51df",
"assets/assets/images/certificates/jst_japan_asia.jpg": "41b3fbad48bb6d344a8774702ad86da9",
"assets/assets/images/certificates/graphql.jpg": "c72c6d77c28c4ac2d4735dec13ba91dd",
"assets/assets/images/certificates/deep_learning.jpg": "21bbe4249dbcf1856d5864f64d160786",
"assets/assets/images/certificates/intermediate_python.jpg": "b6464ffce448b572932192c728075fdd",
"assets/assets/fonts/shantell_sans/ShantellSans-Regular.ttf": "eea56a073c0622f7157892918d1c336b",
"assets/assets/fonts/shantell_sans/ShantellSans-Medium.ttf": "e7e23424662df693e295dbce4e29ab57",
"assets/assets/fonts/shantell_sans/ShantellSans-ExtraBold.ttf": "7f33160b6a6ff926451c11fa753659cd",
"assets/assets/fonts/shantell_sans/ShantellSans-SemiBold.ttf": "70f404c91428f6427571f1684a62ba56",
"assets/assets/fonts/shantell_sans/ShantellSans-Light.ttf": "4c7abd86e9797d0c26f93f5fb34ce938",
"assets/assets/fonts/shantell_sans/ShantellSans-Italic.ttf": "dd649de8940523775efcace606541e62",
"assets/assets/fonts/shantell_sans/ShantellSans-Bold.ttf": "3f27bd4b2d3b52e2a070784ccc0bb6f2",
"assets/assets/fonts/poppins/Poppins-ExtraLight.ttf": "a0f2eadb0002101ea5da28381ce16cde",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "1bb10326b972c92be6c59c048a4327e4",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "614a91afc751f09d049231f828801c20",
"assets/assets/fonts/poppins/Poppins-ExtraBold.ttf": "4252dae8574e434c7bb0127b8ffd06df",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "cd6b896a19b4babd1a2fa07498e9fc47",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "124cd57d8f41f6db22a724f882dca3f4",
"assets/assets/fonts/poppins/Poppins-Black.ttf": "9a3a3c0803219892727ed9d85ad5caea",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "0fc985df77c6b59d37e79b97ed7fb744",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "07502c4fe46025097dd8b1e331182ee0",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
