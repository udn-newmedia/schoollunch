<template>
  <div id="app">
    <Indicator />
    <Head-Bar vision="true">
      <a href="https://udn.com/upf/newmedia/2018_data/schoollunch/rural.html" target="_blank" style="color:#e13a29">偏鄉篇</a>
    </Head-Bar>
    <Cover title="35元的營養午餐 你的孩子吃了什麼？" position="middle">
      <div class="video-contain">
        <video class="hidden-md hidden-lg" src="./assets/mobile_bg.mp4" poster="./assets/mobile_bg.jpg" muted autoplay loop playsinline></video>
        <video class="hidden-xs hidden-sm" src="./assets/web_bg.mp4" poster="./assets/web_bg.jpg" autoplay loop muted></video>
      </div>
    </Cover>
    <Content background-color="#FFFFFF">
      <Share href="https://udn.com/upf/newmedia/2018_data/schoollunch/index.html"></Share>
      <p><br/></p>
      <p>35元，是雲林縣一餐營養午餐的金額。已經夠低的價格，還不全然用在食材上，請廚工、維護設備、運送等各項成本扣完，孩子一餐實際吃到的食材費不到25元，在便利商店買不到一顆御飯糰。</p>
      <p><br/></p>
      <p>35元的營養午餐裡有什麼菜？咖哩雞、三杯雞、花瓜雞、麻油雞等重口味料理是常客。重口味往往是為了掩飾不夠好、不夠新鮮的食材，以及讓一早就煮好的飯菜，放到中午不至於太難吃。實際走訪學校問小朋友午餐最愛吃什麼，咖哩、炸魚排是最常聽到的答案。</p>
      <p><br/></p>
      <p>「聯合報系願景工程」盤點營養午餐的三大事實，反映台灣營養午餐現況的亂象與畸形。這一餐不到30元的飯菜，家長們聽到孩子異口同聲說「好吃」，心裡能不發毛嗎？</p>
      <p><br/></p>
      <h2>孩子的「沒問題」背後......</h2>
      <p><br/></p>
      <Youtube src="https://www.youtube.com/embed/-bNmnzXlCNo"></Youtube>
      <p><br/></p>
      <p>孩子說吃得OK，就真的「OK」嗎？根據衛福部統計，2017年校園內食物中毒事件高達90起、共逾2600名師生中毒。除此之外，台中市有孩子吃了衛生局認證的「合法回鍋油」腹瀉，屏東營養午餐出現炸得「炭黑」的炸雞。</p>
      <p><br/></p>
      <p>更不論廠商為了拿下學校開出的「最有利標」，預算不變的情況下卻能硬生生多加一菜，出現「主餐油麵、副餐炒麵」、「吃麵疙瘩、配麵疙瘩湯」等一菜變兩菜的奇怪菜單。</p>
      <p><br/></p>
      <p>想重新體檢孩子吃的營養午餐，先試想40元在自助餐能買到怎麼樣的菜色。全台校園營養午餐平均成本不到40元，下方是學生平常營養午餐的餐盤，實際夾菜看看，就知道孩子午餐到底能夠吃到什麼。</p>
    </Content>
    <Dish-Game></Dish-Game>
    <Section-Fixed-Bg menu-text="用在食材的錢少" bg="./static/pic1.jpg" bgweb="./static/web/pic1.jpg" text="事實一：繳的錢不全用在食材"></Section-Fixed-Bg>
    <Content background-color="#FFFFFF">
      <h3>成本結構圓餅圖</h3>
      <Column-One imgsay="資料來源／台北市餐盒食品商業同業公會" img1="./static/chart_mobile.svg" imgweb1="./static/web/chart_web.svg"></Column-One>
      <p><br/></p>
      <p>廠商透露，大量購買食材的價格約比一般家庭到菜場購買便宜3成，但廠商還有廚工、設備折舊、水電等開銷，家長繳的錢能有65％用在食材上「已經很高了」。</p>
      <p><br/></p>
      <p>就算學校自設廚房，也一樣有經費困窘的問題。</p>
      <p><br/></p>
      <p>3年多前，高雄市杉林區集來國小校長潘淑琦剛到任，第一次升旗就被「震撼教育」，目睹學生在她面前癱軟倒地，成為她日後積極爭取午餐經費的動力。她估算，每個學生一餐繳40元，包含老師與行政人員在內，全校每月餐費共6萬元，扣除廚工薪水，每人每餐大約剩25元，只能買一顆肉包。</p>
      <p><br/></p>
      <p>台灣小小一塊土地，學校營養午餐22縣市都有自己的規定和做法，價格從一餐最少的34、35元，到最多的60元，差距極大；「營養午餐免費」則時常被候選人當成爭取選票的政治籌碼，逢選舉年就喊出免費口號，但當地方預算拮据時，孩子通常優先被犧牲掉。</p>
      <p><br/></p>
      <p>家長的錢沒有全用在食材刀口上、便宜的價格和政策支票，讓台灣營養午餐的結構愈來愈扭曲，不論是外訂團膳或學校自設廚房，都面臨困境。</p>
      <p><br/></p>
      <a href="https://udn.com/upf/newmedia/2018_data/schoollunch/rural.html" target="_blank">
        <div class="more">
          <img src="./assets/more1.jpg" alt="">
          <div class="more-text">挑剩的菜、聘不到廚工<br/>偏鄉童靠營養午餐撐一天</div>
        </div>
      </a>
    </Content>
    <Section-Fixed-Bg menu-text="畸形的團膳產業" bg="./static/pic2.jpg" bgweb="./static/web/pic2.jpg" text="事實二：廠商衝量求生 孩子的午餐被犧牲"></Section-Fixed-Bg>
    <Content background-color="#FFFFFF">
      <h3>營養午餐三種供餐模式</h3>
      <p><br/></p>
      <ul>
        <li>公辦公營：學校內自設廚房，僅供自己學校，學校負管理責任</li>
        <li>公辦民營：在校內設中央廚房委外（廠商）管理，供應鄰近多所學校</li>
        <li>委外：學校招標，向團膳業者訂購桶餐</li>
      </ul>
      <p><br/></p>
      <p>以台北市為例，國小多為公辦公營或公辦民營，但國中有近7成學校都仰賴團膳業者的桶餐。團膳業者現卻出現「以量制價」的畸形現象，在營養午餐價格便宜的情況下，廠商得接大量才能損益兩平。</p>
      <p><br/></p>
      <p>但烹調量一大，通常不到早上7點就得開始料理甚至分裝，營養午餐到孩子手上時，已經煮完好幾小時了。</p>
      <p><br/></p>
      <p>自稱龜毛校長的龍山國中校長洪國峰，專挑清晨突擊訪廠，堅持5點起床、6點出門，他發現廠商不到7點，廚房早已燈火通明，第一批炸物都已炸好。</p>
      <p><br/></p>
      <Quote color="#720101" text="會想提早去看，是因為孩子常會反應菜冷，以自己當爸媽的心態，也會希望回到家能吃到熱騰騰的菜。" refer="－龍山國中校長洪國峰" />
      <p><br/></p>
      <p>不同時段訪廠，都能目睹不同畫面。上午7點到，白麵條都已煮好，正在分裝打麵；7點25分，已有餐點配打好正送進保溫室；8點，有些廠商已忙著將第一批配打好的餐點送進車中。</p>
      <p><br/></p>
      <p>法規雖規定桶餐送到學校、提供一份樣品做檢測時，中心溫度要達60度，但業者也有取巧方式。為了符合規定，廠商會調整製程，較慢降溫的炸物先下鍋，配菜則添加湯湯水水，就能保持熱度。</p>
      <p><br/></p>
      <Youtube src="https://www.youtube.com/embed/cpA7yAPu3ko"></Youtube>
      <div class="img-say">部分學校採「公辦民營」方式，學校在校內設中央廚房委外（廠商）管理，供應鄰近多所學校。因供應量大、需運送各校，早上7點就得開始料理。</div>
      <p><br/></p>
      <h3>畸形的團膳產業</h3>
      <p><br/></p>
      <p>「價格便宜，廠商只能接大量才能損益兩平。」台北市餐盒食品公會理事長陳明信指出，營養午餐價格長年凍漲，沒有賺頭業者紛紛退場，2000年時，公會有72家的會員廠商承攬學校營養午餐，三年前剩11家，到今年4月又更少了，只剩8家；新北市也只剩20多家。</p>
      <p><br/></p>
      <p>陳明信說，中央特許專營營養午餐的廠商營業稅僅需負擔1％營業稅，但「專營」代表廠商選擇只做學校生意，學校有活動日、畢旅、校外教學、寒暑假等，算下來國小一年約只供應160天、國中197天，但沒供餐還是要發給正職員工薪水，都是成本的一環。</p>
      <p><br/></p>
      <p>要負擔成本、損益兩平，對廠商而言唯一的方式就是提高供應量。以陳明信自己的工廠為例，每天做不到1萬5千份餐點就會虧錢。</p>
      <p><br/></p>
      <p>3年前南部供應多所學校午餐米飯的甫洲實業，被週刊爆出白米中有添加物「鮮保利」，引起軒然大波。陳明信說，甫州就是血淋淋的案例，供應量增加、薄利多銷，業者才能生存，要炊煮大量餐點就得拉長製作時間，廠商為了避免久放吃壞肚子，就添加「鮮保利」；有些縣市廠商可能前一天晚上11點就做好隔日要吃的飯。</p>
    </Content>
    <Section-Fixed-Bg menu-text="自設廚房的困境" bg="./static/pic3.jpg" bgweb="./static/web/pic3.jpg" text="事實三：學校自設廚房 誰來後援？"></Section-Fixed-Bg>
    <Content background-color="#FFFFFF">
      <p>團膳問題多，學校自己設置廚房就能解決問題嗎？實際走訪各地設有廚房的學校，每個學校幾乎都喊辛苦，沒有廠商願意投標、老師得兼當廚工、修繕費用需東湊西補、沒有營養師把關及開菜單等，都是困境。</p>
      <p><br/></p>
      <p>教育部「推動學校午餐專案辦公室」主持人、中興大學教授盛中德直言，越大型的學校，越不願意公辦，校方責任較低，加上沒有獎勵制度，沒有誘因。</p>
      <p><br/></p>
      <p>位於新竹縣新豐鄉的埔和國小，是一間全校人數僅250人的小校，學校自設廚房，每天早上7點，廚工、工友開始在廚房中洗米、洗菜，接下來切菜、烹煮，11點30分前料理出三菜一湯，準備配送各班。</p>
      <p><br/></p>
      <Column-One imgsay="新竹縣埔和國小校內自設廚房，每天早上7點開始作業。" img1="./static/pic4.jpg" imgweb1="./static/web/pic4.jpg"></Column-One>
      <p><br/></p>
      <p>對小校而言，料理份數較少，料理方式可以更多元，學校自辦廚房也可以縮短運送時間，學生到中午時都可以吃到熱騰騰飯菜。但小校遇到的第一個困境，是食材商招標困難，沒有廠商願意承包經濟規模這麼小的營養午餐。</p>
      <p><br/></p>
      <p>埔和國小校長吳柚說，學校經濟規模小，加上對食材的要求高，廠商無利潤可圖，「大廠不願意接、小廠做不了」，去年招標食材商就流標了9次，好不容易才標到一家小廠商。</p>
      <p><br/></p>
      <p>今年廠商抱怨虧本、不願再承包，靠學校動之以情、校友自發性捐助補貼廠商成本，才讓已流標7次的營養午餐順利包出去。</p>
      <p><br/></p>
      <h3>阿姨請假 老師就得進廚房</h3>
      <p><br/></p>
      <p>人事費用、設備維修費用等也都非額外編列的經費，學校需從辦公費裡支出，財務緊繃。廚房人力的不足，讓廚工阿姨吃不消。當阿姨請假或人力困窘時，學校教師、保健室阿姨甚至校長都需進廚房幫忙。</p>
      <p><br/></p>
      <p>吳柚指出，學校自設廚房現規定250名學生可以編列一個廚師，但實務運作根本不夠用，「一個廚師要在幾小時內煮出200多人份太困難。」學校因有幼兒園，總共可有兩名廚師，但還是遠遠不足。</p>
      <p><br/></p>
      <Quote color="#720101" text="阿姨都做到職業傷害，說想辭職了。" refer="－埔和國小校長吳柚" />
      <p><br/></p>
      <p>此外，目前廚房內的人力、設備折舊與維修費用等都非額外補助的經費，學校需要從整體經費內撥，對學校而言是不小負擔。吳柚說，像今年廚房內有設備壞掉，換新的就花了幾萬塊，都得從整體經費裡東拼西湊才能有足夠經費更新。</p>
      <p><br/></p>
      <Column-One imgsay="學校自設廚房被專家、教師認為是較能確保品質的供餐方式，但品質的背後，學校獲得的資源是否足夠？" img1="./static/pic5.jpg" imgweb1="./static/web/pic5.jpg"></Column-One>
      <p><br/></p>
      <h3>1個營養師顧5900學生</h3>
      <p><br/></p>
      <p>營養師在學校扮演開菜單、把關營養午餐品質及衛生等重要工作，但台灣與鄰近亞洲國家相比，營養師人數遠遠不足。</p>
      <p><br/></p>
      <p>鄰近的日本至少每兩間學校就有1位營養教師，韓國則是每一間學校都有，1名營養師僅需顧校內的幾百名學生。但在台灣，現雖規定40班以上的學校可以設營養師，但全台負責學校午餐的營養師大約只有300多位，且各縣市分布嚴重不均。</p>
      <p><br/></p>
      <p>以台北市為例，從國小到高中有將近22萬名學生在學，雖然有些學生會帶便當上學，或由家長外送午飯，但北市僅有國小37位營養師，等同1名營養師得替近5900名學生的健康把關。</p>
      <p><br/></p>
      <p>營養師除要負責國小菜單審核、食農教育等工作，還要負責認養國高中輔導訪視用餐環境、流程、菜單，並抽驗食材，頻率從原本一年一次，改為一學期一次，工作繁重。</p>
      <p><br/></p>
      <p>自設廚房的學校，需要營養師協助幫忙開菜單、把關料理；公辦民營或外訂團膳的學校，也需要營養師協助監督廠商的菜單與料理過程。台北市西松國小公職營養師孫文中就說，最好能先做到有自設廚房的學校就有營養師。</p>
      <p><br/></p>
      <p>有經驗的營養師訪視工廠，可以看到許多細節。有營養師透露，走進廠房不看乾淨的地板改看天花板。「咦？那排盆子是什麼？」廠商說，這個等一下要打飯，營養師質疑怎麼沒上蓋？一看，竟然還有昨天的飯粒沒有洗。</p>
      <p><br/></p>
      <p>也有營養師曾直擊廚師品嚐，未依照規定使用品嚐杯，直接以湯匙就口；甚至廠商用塑膠袋承裝食材蒸煮，推說是耐熱袋可耐高溫。</p>
      <p><br/></p>
      <Column-One imgsay="學生午餐吃到的每一道菜都仰賴營養師把關品質及營養是否足夠，最重要的把關者現在台灣學校內的編制卻遠遠不足。" img1="./static/pic6.jpg" imgweb1="./static/web/pic6.jpg"></Column-One>
      <p><br/></p>
      <h3>四章一Q 好意變噩夢</h3>
      <p><br/></p>
      <p>預計今年9月全面試辦、編列經費達12億的學校午餐<span class="exp" @click="expClick">四章一Q</span>政策，本意希望以在地食材保障學童的營養午餐安全及品質，但在有補助、配套卻不足的情況下，衍生出不少亂象，縣市多面有難色、偏遠學校更是抱怨連連。</p>
      <p><br/></p>
      <div v-if="expShow" class="exp-contain">
        「四章」指的是「CAS有機農產品」、「CAS台灣優良農產品」、「產銷履歷認證」、「吉園圃安全蔬果」標章；「一Q」則為「台灣農產品生產追溯QR code」。
      </div>
      <p v-if="expShow"><br/></p>
      <p>新竹縣某國小校長透露，有些菜得靠菜商從山下送來，運費算在菜費中，負擔就會增加。以往菜費到12月才不夠，今年11月就不足，幸好山上學校有許多企業補助，不山不市的學校問題恐更嚴重。</p>
      <p><br/></p>
      <p>也有校長透露，在現有制度下，恐有廠商將本求利，為追求利潤，拿CAS肉品混合，透過差價賺取補助款，政府現在沒有防範措施。</p>
      <p><br/></p>
      <p>為了配合政策和防弊，每個學校午餐秘書都忙得要命，一條絲瓜要貼一張QRcode，老師一餐要查幾十條絲瓜，連出差都必須請學校廚工用Line把條碼傳送過來，再上網登錄，場面荒謬。</p>
    </Content>
    <Section-Fixed-Bg menu-text="怎麼讓孩子吃得好" bg="./static/pic7.jpg" bgweb="./static/web/pic7.jpg" text="三解方 讓孩子吃好吃飽"></Section-Fixed-Bg>
    <Content background-color="#FFFFFF">
      <h3>1. 營養午餐成本結構透明化</h3>
      <p><br/></p>
      <p>「價格當然是問題，但誰給我們透明的價格？」民間團體「校園午餐搞非基行動」共同發起人黃嘉琳指出，到現在為止，各縣市沒有人要求廠商、學校公開真實的食材價格以及成本結構，政府從頭到尾都說不清楚購買食材究竟需要多少成本、付多少錢。</p>
      <p><br/></p>
      <Quote color="#720101" text="這是學校午餐開辦成功與否的關鍵，若價錢一直無法算清楚，是國家政策、制度上的問題。" refer="－黃嘉琳" />
      <p><br/></p>
      <h3>2. 訂定統一規格、價格制訂標準</h3>
      <p><br/></p>
      <p>營養午餐目前在22個縣市，可能有22種不同的規格。有些縣市、學校要求4菜1湯，有些學校僅要求2菜1湯；有些要廠商附水果、牛奶，沒有統一規範、卻又是「最有利標」的情況下，讓廠商有太多空間漫天亂喊。</p>
      <p><br/></p>
      <p>「我們的小朋友到底需要吃幾種菜，沒人討論過。」黃嘉琳以日本為例，日本的營養午餐是「2菜1汁（湯）」，種類不多但裡面已涵蓋所有孩子需要的營養，也可以藉此教育孩子不要偏食。她也曾隨機去學校班級詢問學生，有1/3孩子舉手認為4菜1湯太多，造成大量廚餘。</p>
      <p><br/></p>
      <p>陳明信也認為，目前中央政府沒有太多營養午餐的明確規範，建議政府應統一規格；午餐價格則可透過產官學各界定期依物價等指標檢視，訂定出合理範圍。</p>
      <p><br/></p>
      <p>教育部國教署長邱乾國坦承，目前營養午餐大多由地方政府自訂，中央欠缺角色，未來將全面改革，引入專業意見，以免各校定價淪為喊價式，也盼能跳脫一貫「凍漲」的思維。</p>
      <p><br/></p>
      <h3>3. 借鏡日韓：國家提供經費照顧孩子午餐</h3>
      <p><br/></p>
      <p>不論學校、廠商，台灣談到營養午餐的重要問題癥結都是「價格過低、經費不足」，提高經費是改善第一步。借鏡鄰近的日韓，日本由地方政府全額補助廚房設備、人事成本等費用，家長繳的錢只需用於食材，家長能更清楚掌握午餐品質。</p>
      <p><br/></p>
      <p>南韓近年則由民間組織發起「免費營養午餐」運動，截至去年，全國已有79％的學校免費供應營養午餐，經費由地方與中央政府共同分擔。</p>
      <p><br/></p>
      <p>教育部「推動學校午餐專案辦公室」主持人、中興大學教授盛中德表示，目前國教署考慮參考日本的作法，學生繳交的午餐費用，全部用在食材上，行政費都由政府負擔，今年9月預計先從偏鄉50人以下的學校開始試辦。</p>
      <p><br/></p>
      <a href="https://vision.udn.com/vision/story/12124" target="_blank">
        <div class="more">
          <img src="./assets/more2.jpg" alt="">
          <div class="more-text">看更多報導</div>
        </div>
      </a>
      <p><br/></p>
      <p><br/></p>
      <Share href="https://udn.com/upf/newmedia/2018_data/schoollunch/index.html" />
      <Logo vision="true" />
      <p><br/></p>
      <Editor>
        <div>文字：洪欣慈、連珮宇</div>
        <div>採訪團隊：何振忠、彭宣雅、魏莨伊、陳雅玲、郭宣彣、徐白櫻、胡蓬生、喻文玟、李京昇、吳佩旻、李樹人、章凱閎、洪欣慈、連珮宇</div>
        <div>攝影：林伯東、劉學聖</div>
        <div>視覺設計、影音後製：許瑋琳</div>
        <div>網頁製作：鄭偉廷</div>
        <div>監製：何振忠、李曜丞、陳惠惠、王彩鸝、董谷音、潘如瑩、蔡幸怡</div>
        <div>2018.06.04</div>
      </Editor>
      <p><br/></p>
      <Relate title="延伸閱讀" color="#363434" 
          href1="https://vision.udn.com/vision/story/12124/3159692" img1="./static/s1.jpg" text1="營養午餐三部曲：吃得到、吃得好與吃得讚" 
          href2="https://vision.udn.com/vision/story/12124/3159693" img2="./static/s2.jpg" text2="營養午餐幕後...早起分秒搶時間 自設廚房把關品質" 
          href3="https://vision.udn.com/vision/story/12124/3159718" img3="./static/s3.jpg" text3="午餐現場／小校自設廚房 校長也充當廚工" 
          href4="https://ubrand.udn.com/ubrand/story/11815/3127630" img4="./static/s4.jpg" text4="愛吃甜不愛吃飯 營養午餐禁甜湯引論戰" > 
      </Relate>
      <p><br/></p>
      <Fb-Comment href="https://udn.com/upf/newmedia/2018_data/schoollunch/index.html" />
    </Content>
    <Foot background-color="#FFFFFF" />
  </div>
</template>

<script>
import { Indicator, Content, Share, SectionFixedBg, ColumnOne, HeadBar, Quote, Editor, Logo, FbComment, Youtube, Foot, Relate } from 'udn-newmedia-vue-components';
import Cover from './components/Cover';
import DishGame from './components/DishGame';
import _ from 'lodash';

export default {
  name: 'App',
  data: function() {
    return {
      expShow: false,
      fix: false,
      lock: false
    }
  },
  methods: {
    expClick: function() {
      this.expShow = !this.expShow
    },
    handleScroll: function(e) {
      var currentH = window.pageYOffset;
      var interactiveH = $('#dish').offset().top
    }
  },
  mounted: function() {
    $('.linkOut a').hover(function() {
      $(this).css('color', '#fff');
    }, function() {
      $(this).css('color', '#e13a29')
    })
  },
  components: {
    Indicator, Cover, Content, Share, SectionFixedBg, ColumnOne, DishGame, HeadBar, Quote, Editor, Logo, FbComment, Youtube, Foot, Relate
  }
}
</script>

<style scoped>
  .linkOut:hover {
    background: #000;
    color: #fff;
  }
  .exp {
    text-decoration: underline;
    color: #e13a29;
    cursor: pointer;
  }

  .exp-contain {
    padding: 15px;
    background-color: #EDEDEE;
    font-size: 18px;
  }

  .more-text {
    font-size: 18px;
    font-weight: bold;
    color: #585757;
    line-height: 1.78;
    text-decoration: underline;
  }
  
  ul {
    font-size: 18px;
    -webkit-padding-start: 20px;
  }
  
  #cover video{
    width: 100%;
  }
  #cover .video-contain{
    position: absolute;
    left: 0;
    top: 50px;
    z-index: -1;
    width: 100%;
  }
  h3{
    color: #585757;
  }
  .more{
    background: #f7f3ea;
    padding: 20px 15px;
  }

  .red{
    color: red;
  }

  @media screen and (min-width: 951px) {
      .more-text {
        display: inline-block;
        margin-left: 50px;
      }
  }

  @media screen and (max-width: 768px){
    .more img{
      width: 100%;
      margin-bottom: 10px;
    }
  }
  
</style>
