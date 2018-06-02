<template>
    <div id="dish">
        <div class="container content">
            <p>請<span class="red">點選菜色</span>，夾錯想改就按<span class="red">清除</span>，夾完請點<span class="red">開動</span>（小提醒：孩子的午餐有飯有菜有肉，所有菜色都要選滿唷！）</p>
            <div class="seperator"></div>
            <div id="main-dish">
                <img id="main" src="../assets/game/main-dish.png">
                <div id="clear-dish" @click="clearDish">清除</div>
                <transition name="fade">
                    <div id="float-number" class="temp" v-if="floatShow">+ {{currentCost}}</div>
                </transition>
                <transition name="fade2">
                    <img src="../assets/game/a0.png" class="main-selected" v-if="dishTip[0] == true">
                </transition>
                <transition name="fade2">
                    <img src="../assets/game/b0.png" class="meat-selected" v-if="dishTip[1] == true">
                </transition>
                <transition name="fade2">
                    <img src="../assets/game/c0.png" class="side1-selected" v-if="dishTip[2] == true">
                </transition>
                <transition name="fade2">
                    <img src="../assets/game/d0.png" class="side2-selected" v-if="dishTip[3] == true">
                </transition>
                <transition name="fade2">
                    <img src="../assets/game/e0.png" class="soup-selected" v-if="dishTip[4] == true">
                </transition>
                <transition name="fade2">
                    <img src="../assets/game/f0.png" class="fruit-selected" v-if="dishTip[5] == true">
                </transition>
                <img src="../assets/game/a1.png" class="main-selected" :class="{hidden: mainSelected[0] != 1}">
                <img src="../assets/game/a2.png" class="main-selected" :class="{hidden: mainSelected[0] != 2}">
                <img src="../assets/game/a3.png" class="main-selected" :class="{hidden: mainSelected[0] != 3}">
                <img src="../assets/game/a4.png" class="main-selected" :class="{hidden: mainSelected[0] != 4}">
                <img src="../assets/game/a5.png" class="main-selected" :class="{hidden: mainSelected[0] != 5}">
                <img src="../assets/game/a6.png" class="main-selected" :class="{hidden: mainSelected[0] != 6}">
                <img src="../assets/game/b1.png" class="meat-selected" :class="{hidden: mainSelected[1] != 1}">
                <img src="../assets/game/b2.png" class="meat-selected" :class="{hidden: mainSelected[1] != 2}">
                <img src="../assets/game/b3.png" class="meat-selected" :class="{hidden: mainSelected[1] != 3}">
                <img src="../assets/game/b4.png" class="meat-selected" :class="{hidden: mainSelected[1] != 4}">
                <img src="../assets/game/b5.png" class="meat-selected" :class="{hidden: mainSelected[1] != 5}">
                <img src="../assets/game/b6.png" class="meat-selected" :class="{hidden: mainSelected[1] != 6}">
                <img src="../assets/game/c1.png" class="side1-selected" :class="{hidden: mainSelected[2] != 1}">
                <img src="../assets/game/c2.png" class="side1-selected" :class="{hidden: mainSelected[2] != 2}">
                <img src="../assets/game/c3.png" class="side1-selected" :class="{hidden: mainSelected[2] != 3}">
                <img src="../assets/game/c4.png" class="side1-selected" :class="{hidden: mainSelected[2] != 4}">
                <img src="../assets/game/c5.png" class="side1-selected" :class="{hidden: mainSelected[2] != 5}">
                <img src="../assets/game/c6.png" class="side1-selected" :class="{hidden: mainSelected[2] != 6}">
                <img src="../assets/game/d1.png" class="side2-selected" :class="{hidden: mainSelected[3] != 1}">
                <img src="../assets/game/d2.png" class="side2-selected" :class="{hidden: mainSelected[3] != 2}">
                <img src="../assets/game/d3.png" class="side2-selected" :class="{hidden: mainSelected[3] != 3}">
                <img src="../assets/game/d4.png" class="side2-selected" :class="{hidden: mainSelected[3] != 4}">
                <img src="../assets/game/d5.png" class="side2-selected" :class="{hidden: mainSelected[3] != 5}">
                <img src="../assets/game/d6.png" class="side2-selected" :class="{hidden: mainSelected[3] != 6}">
                <img src="../assets/game/e1.png" class="soup-selected" :class="{hidden: mainSelected[4] != 1}">
                <img src="../assets/game/e2.png" class="soup-selected" :class="{hidden: mainSelected[4] != 2}">
                <img src="../assets/game/e3.png" class="soup-selected" :class="{hidden: mainSelected[4] != 3}">
                <img src="../assets/game/e4.png" class="soup-selected" :class="{hidden: mainSelected[4] != 4}">
                <img src="../assets/game/e5.png" class="soup-selected" :class="{hidden: mainSelected[4] != 5}">
                <img src="../assets/game/e6.png" class="soup-selected" :class="{hidden: mainSelected[4] != 6}">
                <img src="../assets/game/f1.png" class="fruit-selected" :class="{hidden: mainSelected[5] != 1}">
                <img src="../assets/game/f2.png" class="fruit-selected" :class="{hidden: mainSelected[5] != 2}">
                <img src="../assets/game/f3.png" class="fruit-selected" :class="{hidden: mainSelected[5] != 3}">
            </div>
            <div id="select-bar">
                <div class="item" :class="{active: currentDish == 0}" @click="barClick(0)">主食</div>
                <div class="item" :class="{active: currentDish == 1}" @click="barClick(1)">主菜</div>
                <div class="item" :class="{active: currentDish == 2}" @click="barClick(2)">配菜一</div>
                <div class="item" :class="{active: currentDish == 3}" @click="barClick(3)">配菜二</div>
                <div class="item" :class="{active: currentDish == 4}" @click="barClick(4)">湯品</div>
                <div class="item" :class="{active: currentDish == 5}" @click="barClick(5)">水果</div>
            </div>
            <div id="dish-bar">
                <div class="dish-box" v-for="(dish, index) in dishes[currentDish]" @click="dishClick(index)" :key="index">
                    <img :src="'./static/game/' + dish.img + '.png'" :class="{'dish-active' : mainSelected[currentDish] == index + 1}">
                    <div class="select-circle">
                        <img :src="'./static/game/y.png'" v-if="dish.selected">
                        <img :src="'./static/game/n.png'" v-else>
                    </div>
                    <div class="dish-text">{{dish.text}}</div>
                </div>
            </div>
            <div id="warning" v-if="warningShow">
                你選的菜還不夠喔
                <img id="warning-close" :src="'./static/game/close.png'" @click="warningClose">
            </div>
            <div id="eat" @click="startEat" :class="{active: eatActive}">開動</div>
            <div id="cost-report" v-if="costReport">
                <div id="main-dish-2">
                    <img id="main2" src="../assets/game/main-dish.png">
                    <img :src="'./static/game/dish/a' + mainSelected[0] + '.png'" class="main-selected" v-if="this.mainSelected[0] != 0">
                    <img :src="'./static/game/dish/b' + mainSelected[1] + '.png'" class="meat-selected" v-if="this.mainSelected[1] != 0">
                    <img :src="'./static/game/dish/c' + mainSelected[2] + '.png'" class="side1-selected" v-if="this.mainSelected[2] != 0">
                    <img :src="'./static/game/dish/d' + mainSelected[3] + '.png'" class="side2-selected" v-if="this.mainSelected[3] != 0">
                    <img :src="'./static/game/dish/e' + mainSelected[4] + '.png'" class="soup-selected" v-if="this.mainSelected[4] != 0">
                    <img :src="'./static/game/dish/f' + mainSelected[5] + '.png'" class="fruit-selected" v-if="this.mainSelected[5] != 0">
                </div>
                <div class="cost-title">成本計算</div>
                <div class="cost-text">
                    {{this.dishes[0][this.mainSelected[0]-1]['text']}}
                    <span class="cost">{{costSelected[0]}}</span>
                </div>
                <div class="cost-text">
                    {{this.dishes[1][this.mainSelected[1]-1]['text']}}
                    <span class="cost">{{costSelected[1]}}</span>
                </div>
                <div class="cost-text">
                    {{this.dishes[2][this.mainSelected[2]-1]['text']}}
                    <span class="cost">{{costSelected[2]}}</span>
                </div>
                <div class="cost-text">
                    {{this.dishes[3][this.mainSelected[3]-1]['text']}}
                    <span class="cost">{{costSelected[3]}}</span>
                </div>
                <div class="cost-text">
                    {{this.dishes[4][this.mainSelected[4]-1]['text']}}
                    <span class="cost">{{costSelected[4]}}</span>
                </div>
                <div class="cost-text">
                    {{this.dishes[5][this.mainSelected[5]-1]['text']}}
                    <span class="cost">{{costSelected[5]}}</span>
                </div>
                <div class="cost-text">
                    人事+運送成本
                    <span class="cost">15</span>
                </div>
                <div class="cost-text">
                    水電
                    <span class="cost">7.2</span>
                </div>
                <div class="cost-text">
                    設備攤提
                    <span class="cost">1.2</span>
                </div>
                <div class="cost-text">
                    稅金
                    <span class="cost">0.6</span>
                </div>
                <div class="cost-text" style="margin-top: 10px;border: none;">
                    總計
                    <span class="cost" id="total">{{totalCost}}</span>
                </div>
            </div>
            <h2>各縣市營養午餐預算</h2>
            <p><br/></p>
            <div class="lunchmark"></div><span class="chart-text">午餐價格（每人／每餐／元）</span>
            <br/>
            <div class="circle"></div><span class="chart-text">提供免費營養午餐</span>
            <p><br/></p>
            <p><br/></p>
            <div id="chart">
                <div id="location">
                    <div class="location" v-for="(cost, index) in costs" :class="{gray: cost.gray}">{{cost.text}}<span class="exp-circle" v-if="index == 9 || index == 16 || index == 17 || index == 21" :class="{gray: cost.gray}"></span></div>
                </div>
                <div id="cost-contain">
                    <div class="h-bar" v-if="isWeb" v-for="index in 22" :style="{top: 23 + (index-1)*27 + 'px'}" :key="index"></div>
                    <div class="cost-bar" id="bar1" :style="{left: left + 'px'}"></div>
                    <div class="cost-bar" id="bar2" :style="{left: left + grid*10 + 'px'}"></div>
                    <div class="cost-bar" id="bar3" :style="{left: left + grid*20 + 'px'}"></div>
                    <div class="cost-bar" id="bar4" :style="{left: left + grid*30 + 'px'}"></div>
                    <div class="cost-bar" id="bar5" :style="{left: left + grid*40 + 'px'}"></div>
                    <div class="cost-bar" id="bar6" :style="{left: left + grid*50 + 'px'}"></div>
                    <div class="cost-bar" id="bar7" :style="{left: left + grid*60 + 'px'}"></div>
                    <div class="cost-bar" id="bar8" :style="{left: left + grid*70 + 'px'}"></div>
                    <div class="cost-bar" id="bar9" :style="{left: left + grid*80 + 'px'}"></div>
                    <div class="cost-bar" id="bar10" :style="{left: left + grid*90 + 'px'}"></div>
                    <div class="mask" :style="{left: left+(grid*((totalCost-25)*2)) + 'px', width: (70-totalCost)*2*grid+'px'}" v-if="totalCost > 0 && totalCost <= 70"></div>
                    <div class="mask-point" :style="{left: left+(grid*((totalCost-25)*2)) + 'px'}" v-if="totalCost > 0 && totalCost <= 70"></div>
                    <div class="mask-number" :style="{left: left+(grid*((totalCost-25)*2)) + 'px'}" v-if="totalCost > 0 && totalCost <= 70">{{totalCost}}</div>
                    <div class="cost-number" :style="{left: ((width - 94) / 10) * 2 + 50 + 'px'}">30</div>
                    <div class="cost-number" :style="{left: ((width - 94) / 10) * 4 + 50 + 'px'}">40</div>
                    <div class="cost-number" :style="{left: ((width - 94) / 10) * 6 + 50 + 'px'}">50</div>
                    <div class="cost-number" :style="{left: ((width - 94) / 10) * 8 + 50 + 'px'}">60</div>
                    <div class="cost-number" :style="{left: ((width - 94) / 10) * 10 + 50 + 'px'}">70</div>
                    <div class="cost-amount" v-for="(cost, index) in costs" :style="{left: left+(grid*((cost.min-25)*2)) + 'px', width: (cost.max-cost.min)*2*grid+'px', top: 6 + index*27 + 'px'}" :class="{gray: cost.gray}"></div>
                </div>
                <div id="lunch-report" v-if="totalCost > 0">
                    <div v-if="totalCost <= 70">{{canEat}}午餐費有達<span class="red" style="font-size:20px;font-weight:bold;">{{totalCost}}元</span></div>
                    <div v-if="totalCost > 70" id="lunch-report-text">{{totalCost}}元</div>
                    <div v-if="totalCost > 70">你在台灣吃不到營養午餐 !</div>
                </div>
            </div>
            <p><br/></p>
            <div class="img-say">註：雲林縣僅麥寮鄉有免費營養午餐，澎湖縣9月起全免。食材價格以台北市外訂盒餐業者「食家安」菜單及實際運作成本估算。資料提供／台北市餐盒公會</div>
        </div>
    </div>
</template>

<script>

import Utils from 'udn-newmedia-utils'

export default {
    methods: {
        dishScroll: function(e) {
            if(this.scrollLock) {
                return
            }
            var scroll = e.target.scrollLeft
            console.log(scroll)
            if(window.innerWidth <= 768) {
                if(scroll < 600) {
                    this.currentDish = 0
                }
                else if (scroll >= 600 && scroll < 600*2) {
                    this.currentDish = 1
                }
                else if (scroll >= 600*2 && scroll < 600*3) {
                    this.currentDish = 2
                }
                else if (scroll >= 600*3 && scroll < 600*4) {
                    this.currentDish = 3
                }
                else if (scroll >= 600*4 && scroll < 600*4.6) {
                    this.currentDish = 4
                }
                else {
                    this.currentDish = 5
                }
            }
            else {
                if(scroll < 850) {
                    this.currentDish = 0
                }
                else if (scroll >= 850 && scroll < 850*2) {
                    this.currentDish = 1
                }
                else if (scroll >= 850*2 && scroll < 850*3) {
                    this.currentDish = 2
                }
                else if (scroll >= 850*3 && scroll < 850*4) {
                    this.currentDish = 3
                }
                else if (scroll >= 850*4 && scroll < 850*4.6) {
                    this.currentDish = 4
                }
                else {
                    this.currentDish = 5
                }
            }
            
        },
        warningClose: function() {
            this.warningShow = false
            for(var x in this.dishTip) {
                this.dishTip[x] = false;
            } 
            ga("send", {
                "hitType": "event",
                "eventCategory": "餐盤遊戲",
                "eventAction": "click",
                "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [關閉警告]"
            });
        },
        startEat: function() {
            ga("send", {
                "hitType": "event",
                "eventCategory": "餐盤遊戲",
                "eventAction": "click",
                "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [開動]"
            });
            this.totalCost = 0
            if(this.costSelected.includes(0)) {
                for(var x in this.costSelected) { 
                    if(this.costSelected[x] == 0) {
                        this.dishTip[x] = true;
                    }
                }
                this.warningShow = true
                return
            }
            for(var x in this.costSelected) {
                this.totalCost += this.costSelected[x]
            }
            this.totalCost += 15
            this.totalCost += 7.2
            this.totalCost += 1.2
            this.totalCost += 0.6
            this.totalCost = this.totalCost.toFixed(0)
            this.costReport = true
            this.canEat = ""
            for(var x in this.costs) {
                if(this.costs[x].min <= this.totalCost && this.costs[x].max >= this.totalCost) {
                    if(this.canEat !== "") {
                        this.canEat += "、"
                    }
                    this.canEat += this.costs[x].text
                }
                if(this.costs[x].max < this.totalCost) {
                    this.costs[x].gray = true
                }
            }
            console.log(this.canEat)
            setTimeout(() => {
                $('html, body').animate({scrollTop : $('#cost-report').offset().top - 75}, 1000, function(){});
            }, 100)
            
        },
        clearDish: function() {
            ga("send", {
                "hitType": "event",
                "eventCategory": "餐盤遊戲",
                "eventAction": "click",
                "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [清除]"
            });
            this.costReport = false
            this.eatActive = false
            this.totalCost = 0
            this.currentDish = 0
            for(var x in this.dishes) {
                for(var y in this.dishes[x]) {
                    this.dishes[x][y]['selected'] = false
                }
            }
            for(var x in this.mainSelected) {
                this.mainSelected[x] = 0
            }
            for(var x in this.costSelected) {
                this.costSelected[x] = 0
            }
            for(var x in this.costs) {
                this.costs[x].gray = false
            }
            this.currentDish = 0
            this.scrollLock = true
            $('#dish-bar').animate({scrollLeft : 0}, 1000, () => {this.scrollLock = false});
        },
        barClick: function(index) {
            ga("send", {
                "hitType": "event",
                "eventCategory": "餐盤遊戲",
                "eventAction": "click",
                "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [類別點選]"
            });
            this.scrollLock = true
            this.currentDish = index
            if(window.innerWidth <= 768) {
                $('#dish-bar').animate({scrollLeft : index*635}, 1000, () => {this.scrollLock = false});
            }
            else{
                $('#dish-bar').animate({scrollLeft : index*880}, 1000, () => {this.scrollLock = false});
            }
            
        },
        dishClick: function(index) {
            if(this.clickLock) {
                return
            }
            ga("send", {
                "hitType": "event",
                "eventCategory": "餐盤遊戲",
                "eventAction": "click",
                "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [菜色點擊] [" +  this.dishes[this.currentDish][index]['text'] + "]"
            });
            this.clickLock = true
            setTimeout(() => {
                this.clickLock = false
                this.floatShow = false
            }, 400)
            for(var x in this.dishes[this.currentDish]) {
                this.dishes[this.currentDish][x]['selected'] = false
            }
            this.dishes[this.currentDish][index]['selected'] = true            
            this.mainSelected[this.currentDish] = index + 1
            this.costSelected[this.currentDish] = this.dishes[this.currentDish][index]['cost']
            this.currentCost = this.dishes[this.currentDish][index]['cost']
            this.floatShow = true

            if(this.currentDish != 5) {
                this.currentDish += 1;
            }

            if(this.mainSelected.includes(0) == false) {
                this.eatActive = true
                $('html, body').animate({scrollTop : window.pageYOffset + 100}, 1000, function(){});
            }
            $('#dish-bar').animate({scrollLeft : 0}, 1000, function(){});

            // if(group < 5){
            //     if(window.innerWidth <= 768){
            //         $('#dish-bar').animate({scrollLeft : (group+1)*635}, 1000, function(){});
            //     }
            //     else{
            //         $('#dish-bar').animate({scrollLeft : (group+1)*880}, 1000, function(){});
            //     }
            // }
            
        }
    },
    mounted: function() {
        if(window.innerWidth >= 880) {
            this.width = 880
            this.isWeb = true
        }
        else{
            this.width = window.innerWidth
        }
        this.left = (this.width - 94) / 10 + 50
        this.right = ((this.width - 94) / 10) * 10 + 50
        this.grid = (this.right - this.left) / 90
    },
    data: function() {
        return {
            dishTip: [false, false, false, false, false, false],
            isWeb: false,
            canEatShow : false,
            canEat: "",
            eatActive: false,
            floatShow: false,
            scrollLock: false,
            clickLock: false,
            costReport: false,
            totalCost: 0,
            warningShow: false,
            width: 0,
            left: 0,
            right: 0,
            grid: 0,
            currentDish : 0,
            currentCost : 0,
            mainSelected: [0, 0, 0, 0, 0, 0],
            costSelected: [0, 0, 0, 0, 0, 0],
            costs: [
                {
                    min: 27,
                    max: 45,
                    text: '桃園市',
                    gray: false
                },
                {
                    min: 35,
                    max: 36,
                    text: '雲林縣',
                    gray: false
                },
                {
                    min: 42,
                    max: 45,
                    text: '嘉義縣',
                    gray: false
                },
                {
                    min: 36,
                    max: 39,
                    text: '台南市',
                    gray: false
                },
                {
                    min: 37,
                    max: 45,
                    text: '屏東縣',
                    gray: false
                },
                {
                    min: 37,
                    max: 40,
                    text: '新竹縣',
                    gray: false
                },
                {
                    min: 38,
                    max: 40,
                    text: '宜蘭縣',
                    gray: false
                },
                {
                    min: 40,
                    max: 45,
                    text: '台中市',
                    gray: false
                },
                {
                    min: 42,
                    max: 45,
                    text: '嘉義市',
                    gray: false
                },
                {
                    min: 42,
                    max: 47,
                    text: '南投縣',
                    gray: false
                },
                {
                    min: 43,
                    max: 46,
                    text: '新竹市',
                    gray: false
                },
                {
                    min: 45,
                    max: 46,
                    text: '澎湖縣',
                    gray: false
                },
                {
                    min: 40,
                    max: 47,
                    text: '金門縣',
                    gray: false
                },
                {
                    min: 39,
                    max: 50,
                    text: '基隆市',
                    gray: false
                },
                {
                    min: 40,
                    max: 45,
                    text: '高雄市',
                    gray: false
                },
                {
                    min: 40,
                    max: 45,
                    text: '苗栗縣',
                    gray: false
                },
                {
                    min: 40,
                    max: 50,
                    text: '花蓮縣',
                    gray: false
                },
                {
                    min: 41,
                    max: 46,
                    text: '彰化縣',
                    gray: false
                },
                {
                    min: 48,
                    max: 49,
                    text: '新北市',
                    gray: false
                },
                {
                    min: 50,
                    max: 55,
                    text: '台東縣',
                    gray: false
                },
                {
                    min: 50,
                    max: 60,
                    text: '台北市',
                    gray: false
                },
                {
                    min: 60,
                    max: 70,
                    text: '連江縣',
                    gray: false
                }
            ],
            dishes: [
                [
                    {
                        img: 'a1',
                        text: '小米飯',
                        selected: false,
                        cost: 2.1
                    },
                    {
                        img: 'a2',
                        text: '日式親子丼',
                        selected: false,
                        cost: 11.66
                    },
                    {
                        img: 'a3',
                        text: '五穀飯',
                        selected: false,
                        cost: 2
                    },
                    {
                        img: 'a4',
                        text: '奶油焗烤燉飯',
                        selected: false,
                        cost: 11.89
                    },
                    {
                        img: 'a5',
                        text: '海苔鮭魚炒飯',
                        selected: false,
                        cost: 7.74
                    },
                    {
                        img: 'a6',
                        text: '番茄肉醬麵',
                        selected: false,
                        cost: 12.82
                    }
                ],
                [
                    {
                        img: 'b1',
                        text: '日式起司豬排',
                        selected: false,
                        cost: 19.2
                    },
                    {
                        img: 'b2',
                        text: '打拋豬肉',
                        selected: false,
                        cost: 9.42
                    },
                    {
                        img: 'b3',
                        text: '炙烤雞腿',
                        selected: false,
                        cost: 26.88
                    },
                    {
                        img: 'b4',
                        text: '椒香鹽水雞',
                        selected: false,
                        cost: 18.77
                    },
                    {
                        img: 'b5',
                        text: '筍絲燒肉',
                        selected: false,
                        cost: 15.25
                    },
                    {
                        img: 'b6',
                        text: '煙燻烤鴨',
                        selected: false,
                        cost: 43
                    }
                ],
                [
                    {
                        img: 'c1',
                        text: '什錦花椰菜',
                        selected: false,
                        cost: 5.54
                    },
                    {
                        img: 'c2',
                        text: '水蓮炒肉絲',
                        selected: false,
                        cost: 17.04
                    },
                    {
                        img: 'c3',
                        text: '蛋酥白菜',
                        selected: false,
                        cost: 3.42
                    },
                    {
                        img: 'c4',
                        text: '蚵白菜',
                        selected: false,
                        cost: 3.36
                    },
                    {
                        img: 'c5',
                        text: '小白菜',
                        selected: false,
                        cost: 3.36
                    },
                    {
                        img: 'c6',
                        text: '蠔油芥蘭菜',
                        selected: false,
                        cost: 4.24
                    }
                ],
                [
                    {
                        img: 'd1',
                        text: '美式脆薯',
                        selected: false,
                        cost: 4.05
                    },
                    {
                        img: 'd2',
                        text: '月亮蝦餅',
                        selected: false,
                        cost: 43.2
                    },
                    {
                        img: 'd3',
                        text: '蝦仁烘蛋',
                        selected: false,
                        cost: 10.67
                    },
                    {
                        img: 'd4',
                        text: '古早味肉燥',
                        selected: false,
                        cost: 7.78
                    },
                    {
                        img: 'd5',
                        text: '珍珠玉米鮭魚',
                        selected: false,
                        cost: 9.39
                    },
                    {
                        img: 'd6',
                        text: '香滷蘿蔔',
                        selected: false,
                        cost: 3.36
                    }
                ],
                [
                    {
                        img: 'e1',
                        text: '巧達濃湯',
                        selected: false,
                        cost: 2.7
                    },
                    {
                        img: 'e2',
                        text: '墩香菇雞湯',
                        selected: false,
                        cost: 10.67
                    },
                    {
                        img: 'e3',
                        text: '蛤蜊海鮮濃湯',
                        selected: false,
                        cost: 8.32
                    },
                    {
                        img: 'e4',
                        text: '金菇排骨湯',
                        selected: false,
                        cost: 4.53
                    },
                    {
                        img: 'e5',
                        text: '香筍雞湯',
                        selected: false,
                        cost: 10.64
                    },
                    {
                        img: 'e6',
                        text: '麵線羹',
                        selected: false,
                        cost: 2.51
                    }
                ],
                [
                    {
                        img: 'f1',
                        text: '棗子',
                        selected: false,
                        cost: 8.8
                    },
                    {
                        img: 'f2',
                        text: '蓮霧',
                        selected: false,
                        cost: 8
                    },
                    {
                        img: 'f3',
                        text: '橘子',
                        selected: false,
                        cost: 7.2
                    }
                ]
            ]
        }
    }
}
</script>

<style scoped>
    .location.gray {
        color: #ccc;
    }
    .h-bar {
        width: 782px;
        left: 55px;
        position: absolute;
        height: 1px;
        background: #dcdcdc;
    }
    #lunch-report {
        background: #fff;
        text-align: center;
        padding: 20px;
        border-radius: 30px;
        margin-top: 40px;
        font-weight: 17px;
        color: #000;
        max-width: 450px;
        margin-left: auto;
        margin-right: auto;
    }

    #lunch-report-text {
        font-size: 20px;
        font-weight: bold;
        color: #e13a29;
    }

    .dish-box .dish-active {
        animation: mymove 0.5s ease-in-out;
        animation-fill-mode: backwards;
    }

    #total {
        color: #e13a29;
        font-size: 35px;
    }

    #cost-report {
        background-color: #fff;
        padding: 40px 20px;
        border-radius: 30px;
        margin-top: 40px;
        margin-bottom: 40px;
        max-width: 450px;
        margin-left: auto;
        margin-right: auto;
    }

    .cost-text {
        font-size: 17px;
        height: 40px;
        line-height: 40px;
        color: #000;
        border-bottom: 1px solid #bfbfbf;
        margin-bottom: 5px;
    }

    .cost {
        float: right;
    }

    .cost-title {
        font-size: 20px;
        font-weight: bold;
        color: #e13a29;
    }

    #warning-close {
        position: absolute;
        width: 40px;
        top: 11px;
        right: 20px;
    }

    #warning {
        background-color: #fff;
        width: 100%;
        height: 230px;
        position: absolute;
        z-index: 8;
        margin-top: -230px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: #231815;
    }

    #bar2, #bar4, #bar6, #bar8, #bar10 {
        background-color: #626262;
    }

    .cost-amount {
        top: 0;
        left: 0;
        width: 46px;
        height: 10px;
        background-color: #e13a29;
        position: absolute;
    }

    .cost-amount.gray {
        background-color: #ccc;
    }

    .cost-number {
        top: -21px;
        left: 0;
        margin-left: -8px;
        font-size: 14.5px;
        color: #000;
        position: absolute;
    }

    .cost-bar {
        top: 0;
        left: 0;
        height: 594px;
        width: 1px;
        background-color: #a0a0a0;
        position: absolute;
    }

    #chart {
        position: relative;
    }

    .fruit-selected {
        position: absolute;
        top: 24px;
        left: 221px;
        width: 85px;
    }

    .soup-selected {
        position: absolute;
        top: 24px;
        left: 126px;
        width: 90px;
    }

    .side2-selected {
        position: absolute;
        top: 119px;
        left: 268px;
        width: 50px;
    }

    .side1-selected {
        position: absolute;
        top: 116px;
        left: 19px;
        width: 50px;
    }

    .meat-selected {
        position: absolute;
        top: 16px;
        left: 26px;
        width: 90px;
    }

    .main-selected {
        position: absolute;
        top: 132px;
        left: 82px;
        width: 175px;
    }

    .select-circle {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 8;
    }

    .select-circle img{
        width: 30px;
    }

    .location {
        font-size: 18px;
        color: #231815;
        position: relative;
    }

    #location {
        position: relative;
    }

    .mask {
        position: absolute;
        width: 100%;
        height: 594px;
        top: 0;
        left: 0;
        background: #e13a29;
        opacity: 0.3;
    }

    .mask-point {
        width: 10px;
        height: 10px;
        position: absolute;
        border-radius: 5px;
        background: #e13a29;
        margin-top: -4px;
        margin-left: -4px;
        top: 0;
    }

    .mask-number {
        font-size: 14.5px;
        color: #e13a29;
        position: absolute;
        top: 0;
        margin-top: -40px;
        margin-left: -10px;
        font-weight: bold;
    }

    .exp-circle {
        width: 8px;
        height: 8px;
        background: #f19149;
        border-radius: 4px;
        position: absolute;
        top: 8px;
        margin-left: 5px;
    }

    .exp-circle.gray {
        background: #ccc;
    }

    .chart-text {
        font-size: 14.5px;
        color: #989898;
    }

    .lunchmark {
        margin-right: 10px;
        width: 15px;
        height: 10px;
        background-color: #e13a29;
        display: inline-block;
    }

    .circle {
        margin-right: 15px;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        display: inline-block;
        background-color: #f19149;
    }

    #eat {
        width: 200px;
        height: 50px;
        margin: 25px auto 40px auto;
        border-radius: 25px;
        border: solid 1px #838080;
        color: #838080;
        box-shadow: 0px 3px 7px 0 rgba(0, 0, 0, 0.14);
        text-align: center;
        font-size: 20px;
        line-height: 50px;
        cursor: pointer;
        transition: all 0.7s ease;
    }

    #eat.active {
        color: #fff;
        background: #e13a29;
        border: solid 1px #e13a29;
    }

    .dish-text {
        width: 100px;
        height: 56px;
        line-height: 56px;
        background-color: #fff;
        border-radius: 20px;
        margin-top: 10px;
        font-size: 16px;
    }

    .dish-box {
        position: relative;
        width: 100px;
        text-align: center;
        display: inline-block;
        margin-right: 5px;
        transition: all 0.7s ease;
    }

    #dish-bar {
        width: 100%;
        height: 216px;
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        padding: 30px 0;
        cursor: pointer;
    }

    #clear-dish {
        position: absolute;
        top: -35px;
        right: 0px;
        width: 60px;
        height: 30px;
        line-height: 30px;
        font-size: 17px;
        color: #838080;
        border: 1px solid #838080;
        border-radius: 15px;
        text-align: center;
        cursor: pointer;
    }

    .item {
        font-size: 14.5px;
        color: #bcbbbb;
        float: left;
        width: 16.66%;
        text-align: center;
        padding: 4px 0;
        line-height: 40px;
        height: 40px;
        cursor: pointer;
    }

    .item.active {
        color: #000;
        border-bottom: 5px solid #000;
    }

    #select-bar {
        margin-top: 24px;
        height: 40px;
        border-bottom: 1px solid #bfbfbf;
    }

    #dish {
        /* height: 300vh; */
        background-color: #f8f5f5;
    }

    #main-dish{
        /* padding: 0 20px; */
        position: relative;
    }

    #main-dish-2{
        position: relative;
        transform: scale(0.9, 0.9)translate(-6%, 0);
    }

    #main{
        width: 335px;
    }

    #main2{
        width: 335px;
        margin-bottom: 30px;
    }

    .seperator{
        height: 1px;
        background: #bfbfbf;
        margin: 20px 0 50px 0;
    }

    h2{
        text-align: left;
        font-size: 40px;
        font-weight: bold;
        line-height: 1.5;
        margin: 0;
    }
    h3{
        font-size: 34px;
    }
    .chart-title{
        font-size: 28px;
    }
    p{
        font-size: 21px;
        margin: 0;
    }
    .img-say{
        font-size: 17px;
        color: gray;
        margin-top: 5px;
    }
    .row{
        margin: 0;
    }
    .col-sm-12, .col-sm-6{
        padding: 0;
    }

    #float-number {
        font-size: 20px;
        font-weight: bold;
        color: #e13a29;
        position: absolute;
        left: 10px;
        transition: all 0.7s ease;
    }

    .temp {
        top: -30px;
    }

    .red {
        color: #e13a29;
    }

    @media screen and (max-width: 767px){
        h2{
            font-size: 30px;
        }
        h3{
            font-size: 24px;
        }
        .chart-title{
            font-size: 26px;
        }
        p{
            font-size: 18px;
            line-height: 32px;
        }
        .content{
            padding: 64px 20px;
        }
        .img-say{
            font-size: 15px;
        }
        #warning {
            width: calc(100% - 40px);
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        .container{
            width: 100%;
        }
        .content{
            padding: 64px 100px;
        }
        h2{
            font-size: 40px;
        }
        h3{
            font-size: 34px;
        }
        p{
            font-size: 20px;
            line-height: 32px;
        }
    }
    @media screen and (min-width: 1025px){
        #main-dish-2 {
            transform: scale(0.9, 0.9)translate(10%, 0);
        }
        .container{
            width: 880px;
        }
        .content{
            padding: 100px 0px;
        }
        p>br{
            line-height: 50px;
        }
        #main, #main-dish .main-selected, #main-dish .meat-selected, #main-dish .side1-selected, #main-dish .side2-selected, #main-dish .soup-selected, #main-dish .fruit-selected, #float-number {
            margin-left: 30%;
        }
        #warning {
            width: 880px;
        }
        .dish-box {
            margin-right: 50px;
        }
    }
    @keyframes mymove
    {
        from {
            opacity: 1;
            transform: scale(1, 1);
        }
        to {
            transform: scale(1.3, 1.3);
            opacity: 0.5;
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: all .5s;
        top: -40px;
    }
    .fade-enter /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
        top: -20px;
    }
    .fade-enter-to {
        opacity: 1;
        top: -40px;
    }
    .fade-leave {
        opacity: 1;
        top: -40px;
    }
    .fade-leave-to {
        opacity: 0;
        top: -40px;
    }

    .dish-tip {
        opacity: 0;
    }

    .fade2-enter-active, .fade2-leave-active {
        transition: all .7s;
    }
    .fade2-enter /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    .fade2-enter-to {
        opacity: 1;
    }
    .fade2-leave {
        opacity: 1;
    }
    .fade2-leave-to {
        opacity: 0;
    }
</style>


