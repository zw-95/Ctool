(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d210684"],{b880:function(n,t,e){"use strict";e.r(t);var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("option-block",{staticStyle:{"text-align":"center"}},[e("FormItem",[e("ButtonGroup",n._l(n.unitLists,(function(t){return e("Button",{key:t.key,staticStyle:{padding:"5px 10px 6px"},attrs:{type:n.current.type===t.key?"info":"primary"},on:{click:function(e){return n.handle(t.key)}}},[n._v(n._s(t.name)+"\n                ")])})),1)],1)],1),e("option-block",{staticStyle:{"text-align":"center"}},[e("FormItem",[e("Input",{attrs:{type:"number"},model:{value:n.current.input,callback:function(t){n.$set(n.current,"input",t)},expression:"current.input"}})],1),e("FormItem",[e("Select",{staticStyle:{width:"200px"},model:{value:n.current.from,callback:function(t){n.$set(n.current,"from",t)},expression:"current.from"}},[n.unitGroup.length>1?n._l(n.unitGroup,(function(t,r){return e("OptionGroup",{key:r,attrs:{label:t.name}},n._l(t.list,(function(t,r){return e("Option",{key:r,attrs:{value:t.name}},[n._v(n._s(t.unit))])})),1)})):n._l(n.unitGroup[0].list,(function(t,r){return e("Option",{key:r,attrs:{value:t.name}},[n._v(n._s(t.unit)+"\n                    ")])}))],2)],1),e("FormItem",[e("Button",{attrs:{icon:"md-code-working"},on:{click:function(t){return n.exchange()}}})],1),e("FormItem",[e("Select",{staticStyle:{width:"200px"},model:{value:n.current.to,callback:function(t){n.$set(n.current,"to",t)},expression:"current.to"}},[e("Option",{attrs:{value:"all"}},[n._v("全部")]),n.unitGroup.length>1?n._l(n.unitGroup,(function(t,r){return e("OptionGroup",{key:r,attrs:{label:t.name}},n._l(t.list,(function(t,r){return e("Option",{key:r,attrs:{value:t.name}},[n._v(n._s(t.unit))])})),1)})):n._l(n.unitGroup[0].list,(function(t,r){return e("Option",{key:r,attrs:{value:t.name}},[n._v(n._s(t.unit)+"\n                    ")])}))],2)],1)],1),n.isShowResult?e("div",{staticStyle:{padding:"0 30px"}},["all"!==n.current.to&&n.assignResult?[e("div",{staticStyle:{"text-align":"center","margin-top":"30px","font-size":"18px","font-weight":"bold"}},[e("span",{staticStyle:{color:"red"}},[n._v(n._s(n.current.input))]),n._v(" "+n._s(n.current.from)+" = "),e("span",{staticStyle:{color:"red"}},[n._v(n._s(n.assignResult.num))]),n._v("\n                "+n._s(n.current.to)+"\n            ")])]:n._e(),"all"===n.current.to?e("CellGroup",[e("Row",{attrs:{gutter:16}},n._l(n.result,(function(n,t){return e("Col",{key:t,attrs:{span:"12"}},[e("Cell",{attrs:{title:n.num,extra:n.unit}})],1)})),1)],1):n._e()],2):n._e()],1)},i=[],u=(e("7f7f"),e("ac6a"),e("456d"),e("3b2b"),e("28a5"),e("4917"),e("2ef0")),c=e.n(u),a=14,o=7,f=4,l={length:{name:"长度",main:"米",unit:[{name:"千米",zh:"千米",en:"km",calc:function(n){return 1*n/1e3},init:function(n){return 1e3*n}},{name:"米",zh:"米",en:"m",calc:function(n){return 1*n},init:function(n){return 1*n}},{name:"分米",zh:"分米",en:"dm",calc:function(n){return 1*n/.1},init:function(n){return.1*n}},{name:"厘米",zh:"厘米",en:"cm",calc:function(n){return 1*n/.01},init:function(n){return.01*n}},{name:"毫米",zh:"毫米",en:"mm",calc:function(n){return 1*n/.001},init:function(n){return.001*n}},{name:"微米",zh:"微米",en:"um",calc:function(n){return 1*n/1e-6},init:function(n){return 1e-6*n}},{name:"纳米",zh:"纳米",en:"nm",calc:function(n){return 1*n/1e-9},init:function(n){return 1e-9*n}},{name:"皮米",zh:"皮米",en:"pm",calc:function(n){return 1*n/1e-12},init:function(n){return 1e-12*n}},{name:"光年",zh:"光年",en:"ly",calc:function(n){return 1*n/9460730472580800},init:function(n){return 9460730472580800*n}},{name:"天文单位",zh:"天文单位",en:"AU",calc:function(n){return 1*n/149597870700},init:function(n){return 1496e8*n}},{name:"英寸",zh:"英寸",en:"in",calc:function(n){return 1*n/(.3048/12)},init:function(n){return n*(.3048/12)}},{name:"英尺",zh:"英尺",en:"ft",calc:function(n){return 1*n/.3048},init:function(n){return.3048*n}},{name:"码",zh:"码",en:"yd",calc:function(n){return 1*n/(.3048*3)},init:function(n){return n*(.3048*3)}},{name:"英里",zh:"英里",en:"mi",calc:function(n){return 1*n/(.3048*3*1760)},init:function(n){return n*(.3048*3*1760)}},{name:"海里",zh:"海里",en:"nmi",calc:function(n){return 1*n/1852},init:function(n){return 1852*n}},{name:"英寻",zh:"英寻",en:"fm",calc:function(n){return 1*n/1.8288},init:function(n){return 1.8288*n}},{name:"弗隆",zh:"弗隆",en:"fur",calc:function(n){return 1*n/201.168},init:function(n){return 201.168*n}},{name:"里",zh:"里",en:"",calc:function(n){return 1*n/500},init:function(n){return 500*n}},{name:"丈",zh:"丈",en:"",calc:function(n){return 1*n/(10/3)},init:function(n){return n*(10/3)}},{name:"尺",zh:"尺",en:"",calc:function(n){return 1*n/(1/3)},init:function(n){return n*(1/3)}},{name:"寸",zh:"寸",en:"",calc:function(n){return 1*n/(.1/3)},init:function(n){return n*(.1/3)}},{name:"分",zh:"分",en:"",calc:function(n){return 1*n/(.01/3)},init:function(n){return n*(.01/3)}},{name:"厘",zh:"厘",en:"",calc:function(n){return 1*n/(.001/3)},init:function(n){return n*(.001/3)}},{name:"毫",zh:"毫",en:"",calc:function(n){return 1*n/(1e-4/3)},init:function(n){return n*(1e-4/3)}}],special:[],group:[{name:"公制",list:["千米","米","分米","厘米","毫米","微米","纳米","皮米","光年","天文单位"]},{name:"英制",list:["英寸","英尺","码","英里","海里","英寻","弗隆"]},{name:"市制",list:["里","丈","尺","寸","分","厘","毫"]}]},area:{name:"面积",main:"平方米",unit:[{name:"平方千米",zh:"平方千米",en:"km²",calc:function(n){return 1*n/1e6},init:function(n){return 1e6*n}},{name:"公顷",zh:"公顷",en:"ha",calc:function(n){return 1*n/1e4},init:function(n){return 1e4*n}},{name:"公亩",zh:"公亩",en:"are",calc:function(n){return 1*n/100},init:function(n){return 100*n}},{name:"平方米",zh:"平方米",en:"㎡",calc:function(n){return 1*n},init:function(n){return 1*n}},{name:"平方分米",zh:"平方分米",en:"dm²",calc:function(n){return 1*n/.01},init:function(n){return.01*n}},{name:"平方厘米",zh:"平方厘米",en:"cm²",calc:function(n){return 1*n/1e-4},init:function(n){return 1e-4*n}},{name:"平方毫米",zh:"平方毫米",en:"mm²",calc:function(n){return 1*n/1e-6},init:function(n){return 1e-6*n}},{name:"英亩",zh:"英亩",en:"acre",calc:function(n){return 1*n/(Math.pow(.3048,2)*Math.pow(16.5,2)*160)},init:function(n){return n*(Math.pow(.3048,2)*Math.pow(16.5,2)*160)}},{name:"平方英里",zh:"平方英里",en:"sq.mi",calc:function(n){return 1*n/Math.pow(.3048*3*1760,2)},init:function(n){return n*Math.pow(.3048*3*1760,2)}},{name:"平方码",zh:"平方码",en:"sq.yd",calc:function(n){return 1*n/(9*Math.pow(.3048,2))},init:function(n){return n*(9*Math.pow(.3048,2))}},{name:"平方英尺",zh:"平方英尺",en:"sq.ft",calc:function(n){return 1*n/Math.pow(.3048,2)},init:function(n){return n*Math.pow(.3048,2)}},{name:"平方英寸",zh:"平方英寸",en:"sq.in",calc:function(n){return 1*n/(Math.pow(.3048,2)/144)},init:function(n){return n*(Math.pow(.3048,2)/144)}},{name:"平方竿",zh:"平方竿",en:"sq.rd",calc:function(n){return 1*n/(Math.pow(.3048,2)*Math.pow(16.5,2))},init:function(n){return n*(Math.pow(.3048,2)*Math.pow(16.5,2))}},{name:"顷",zh:"顷",en:"",calc:function(n){return 1*n/(100/.0015)},init:function(n){return n*(100/.0015)}},{name:"亩",zh:"亩",en:"",calc:function(n){return 1*n/(1/.0015)},init:function(n){return n*(1/.0015)}},{name:"分",zh:"分",en:"",calc:function(n){return 1*n/(1/.015)},init:function(n){return n*(1/.015)}},{name:"平方尺",zh:"平方尺",en:"",calc:function(n){return 1*n/(1/9)},init:function(n){return n*(1/9)}},{name:"平方寸",zh:"平方寸",en:"",calc:function(n){return 1*n/(.01/9)},init:function(n){return n*(.01/9)}}],special:[],group:[{name:"公制",list:["平方千米","公顷","公亩","平方米","平方分米","平方厘米","平方毫米"]},{name:"英制",list:["英亩","平方英里","平方码","平方英尺","平方英寸","平方竿"]},{name:"市制",list:["顷","亩","分","平方尺","平方寸"]}]},volume:{name:"体积",main:"立方米",unit:[{name:"立方米",zh:"立方米",en:"m³",calc:function(n){return 1*n},init:function(n){return 1*n}},{name:"立方分米",zh:"立方分米",en:"dm³",calc:function(n){return 1*n/.001},init:function(n){return.001*n}},{name:"立方厘米",zh:"立方厘米",en:"cm³",calc:function(n){return 1*n/1e-6},init:function(n){return 1e-6*n}},{name:"立方毫米",zh:"立方毫米",en:"mm³",calc:function(n){return 1*n/1e-9},init:function(n){return 1e-9*n}},{name:"升",zh:"升",en:"l",calc:function(n){return 1*n/.001},init:function(n){return.001*n}},{name:"分升",zh:"分升",en:"dl",calc:function(n){return 1*n/1e-4},init:function(n){return 1e-4*n}},{name:"毫升",zh:"毫升",en:"ml",calc:function(n){return 1*n/1e-6},init:function(n){return 1e-6*n}},{name:"厘升",zh:"厘升",en:"cl",calc:function(n){return 1*n/1e-5},init:function(n){return 1e-5*n}},{name:"公石",zh:"公石",en:"hl",calc:function(n){return 1*n/.1},init:function(n){return.1*n}},{name:"立方英尺",zh:"立方英尺",en:"cu ft",calc:function(n){return 1*n/.0283168},init:function(n){return.0283168*n}},{name:"立方英寸",zh:"立方英寸",en:"cu in",calc:function(n){return 1*n/(.0283168/1728)},init:function(n){return n*(.0283168/1728)}},{name:"立方码",zh:"立方码",en:"cu yd",calc:function(n){return 1*n/(.0283168*27)},init:function(n){return n*(.0283168*27)}},{name:"亩英尺",zh:"亩英尺",en:"",calc:function(n){return 1*n/1233.48183754752},init:function(n){return 1233.48183754752*n}},{name:"英制加仑",zh:"英制加仑",en:"uk gal",calc:function(n){return 1*n/.00454609188},init:function(n){return.00454609188*n}},{name:"美制加仑",zh:"美制加仑",en:"us gal",calc:function(n){return 1*n/(3.785411784/1e3)},init:function(n){return n*(3.785411784/1e3)}},{name:"微升",zh:"微升",en:"ul",calc:function(n){return 1*n/1e-9},init:function(n){return 1e-9*n}},{name:"英制液体盎司",zh:"英制液体盎司",en:"oz",calc:function(n){return 1*n/(1e-6*28.41)},init:function(n){return 1e-6*n*28.41}},{name:"美制液体盎司",zh:"美制液体盎司",en:"oz",calc:function(n){return 1*n/2957e-8},init:function(n){return 1e-6*n*29.57}}],special:[],group:[{name:"公制",list:["立方米","立方分米","立方厘米","立方毫米","升","分升","毫升","厘升","公石","微升"]},{name:"英制",list:["立方英尺","立方英寸","立方码","亩英尺","英制加仑","美制加仑","英制液体盎司","美制液体盎司"]}]},weight:{name:"质量",main:"千克",unit:[{name:"千克",zh:"千克",en:"kg",calc:function(n){return 1*n},init:function(n){return 1*n}},{name:"克",zh:"克",en:"g",calc:function(n){return 1*n/.001},init:function(n){return.001*n}},{name:"毫克",zh:"毫克",en:"mg",calc:function(n){return 1*n/1e-6},init:function(n){return 1e-6*n}},{name:"微克",zh:"微克",en:"μg",calc:function(n){return 1*n/1e-9},init:function(n){return 1e-9*n}},{name:"吨",zh:"吨",en:"t",calc:function(n){return 1*n/1e3},init:function(n){return 1e3*n}},{name:"公担",zh:"公担",en:"q",calc:function(n){return 1*n/100},init:function(n){return 100*n}},{name:"磅",zh:"磅",en:"lb",calc:function(n){return 1*n/.45359237},init:function(n){return.45359237*n}},{name:"盎司",zh:"盎司",en:"oz",calc:function(n){return 1*n/(.45359237/16)},init:function(n){return n*(.45359237/16)}},{name:"克拉",zh:"克拉",en:"ct",calc:function(n){return 1*n/2e-4},init:function(n){return 2e-4*n}},{name:"格令",zh:"格令",en:"gr",calc:function(n){return 1*n/(.45359237/7e3)},init:function(n){return n*(.45359237/7e3)}},{name:"长吨",zh:"长吨",en:"lt",calc:function(n){return 1*n/(.45359237*2240)},init:function(n){return n*(.45359237*2240)}},{name:"短吨",zh:"短吨",en:"st",calc:function(n){return 1*n/907.18474},init:function(n){return 907.18474*n}},{name:"英担",zh:"英担",en:"",calc:function(n){return 1*n/50.80234544},init:function(n){return 50.80234544*n}},{name:"美担",zh:"美担",en:"",calc:function(n){return 1*n/45.359237},init:function(n){return 45.359237*n}},{name:"英石",zh:"英石",en:"st",calc:function(n){return 1*n/6.35029318},init:function(n){return 6.35029318*n}},{name:"打兰",zh:"打兰",en:"dr",calc:function(n){return 1*n/(.45359237/256)},init:function(n){return n*(.45359237/256)}},{name:"担",zh:"担",en:"",calc:function(n){return 1*n/50},init:function(n){return 50*n}},{name:"斤",zh:"斤",en:"",calc:function(n){return 1*n/.5},init:function(n){return.5*n}},{name:"两",zh:"两",en:"",calc:function(n){return 1*n/.05},init:function(n){return.05*n}},{name:"钱",zh:"钱",en:"",calc:function(n){return 1*n/.005},init:function(n){return.005*n}},{name:"分",zh:"分",en:"point",calc:function(n){return 1*n/2e-6},init:function(n){return 2e-6*n}}],special:[],group:[{name:"公制",list:["千克","克","毫克","微克","吨","公担","克拉","分"]},{name:"英制",list:["磅","盎司","克拉","格令","长吨","短吨","英担","美担","英石","打兰"]},{name:"市制",list:["担","斤","两","钱"]}]},temperature:{name:"温度",main:"开氏度",unit:[{name:"摄氏度",zh:"摄氏度",en:"℃",calc:function(n){return n-273.15},init:function(n){return 1*n+273.15}},{name:"华氏度",zh:"华氏度",en:"℉",calc:function(n){return 32+9*(n-273.15)/5},init:function(n){return 5*(n-32)/9+273.15}},{name:"开氏度",zh:"开氏度",en:"K",calc:function(n){return n-273.15+273.15},init:function(n){return n-273.15+273.15}},{name:"兰氏度",zh:"兰氏度",en:"°R",calc:function(n){return 1.8*(n-273.15+273.15)},init:function(n){return n/1.8-273.15+273.15}},{name:"列氏度",zh:"列氏度",en:"°Re",calc:function(n){return(n-273.15)/1.25},init:function(n){return 1.25*n+273.15}}],special:[],group:[{name:"",list:["摄氏度","华氏度","开氏度","兰氏度","列氏度"]}]},pressure:{name:"压力",main:"帕斯卡",unit:[{name:"帕斯卡",zh:"帕斯卡",en:"Pa",calc:function(n){return 1*n},init:function(n){return 1*n}},{name:"千帕",zh:"千帕",en:"kpa",calc:function(n){return 1*n/1e3},init:function(n){return 1e3*n}},{name:"百帕",zh:"百帕",en:"hpa",calc:function(n){return 1*n/100},init:function(n){return 100*n}},{name:"标准大气压",zh:"标准大气压",en:"atm",calc:function(n){return 1*n/101325},init:function(n){return 101325*n}},{name:"毫米汞柱",zh:"毫米汞柱",en:"mmHg",calc:function(n){return 1*n/(101325/760)},init:function(n){return n*(101325/760)}},{name:"英寸汞柱",zh:"英寸汞柱",en:"in Hg",calc:function(n){return 1*n/(101325/760*25.4)},init:function(n){return n*(101325/760*25.4)}},{name:"巴",zh:"巴",en:"bar",calc:function(n){return 1*n/1e5},init:function(n){return 1e5*n}},{name:"毫巴",zh:"毫巴",en:"mbar",calc:function(n){return 1*n/100},init:function(n){return 100*n}},{name:"磅力/平方英尺",zh:"磅力/平方英尺",en:"psf",calc:function(n){return 1*n/(6894.757/144)},init:function(n){return n*(6894.757/144)}},{name:"磅力/平方英寸",zh:"磅力/平方英寸",en:"psi",calc:function(n){return 1*n/6894.757},init:function(n){return 6894.757*n}},{name:"毫米水柱",zh:"毫米水柱",en:"",calc:function(n){return 1*n/(1/.101972)},init:function(n){return n*(1/.101972)}},{name:"公斤力/平方厘米",zh:"公斤力/平方厘米",en:"kgf/cm²",calc:function(n){return 1*n/98066.5},init:function(n){return 98066.5*n}},{name:"公斤力/平方米",zh:"公斤力/平方米",en:"kgf/㎡",calc:function(n){return 1*n/9.80665},init:function(n){return 9.80665*n}},{name:"兆帕",zh:"兆帕",en:"MPa",calc:function(n){return 1*n/1e6},init:function(n){return 1e6*n}}],special:[],group:[{name:"",list:["帕斯卡","兆帕","千帕","百帕","标准大气压","毫米汞柱","英寸汞柱","巴","毫巴","磅力/平方英尺","磅力/平方英寸","毫米水柱","公斤力/平方厘米","公斤力/平方米"]}]},power:{name:"功率",main:"瓦",unit:[{name:"瓦",zh:"瓦",en:"W",calc:function(n){return 1*n},init:function(n){return 1*n}},{name:"千瓦",zh:"千瓦",en:"kW",calc:function(n){return 1*n/1e3},init:function(n){return 1e3*n}},{name:"英制马力",zh:"英制马力",en:"hp",calc:function(n){return 1*n/745.699872},init:function(n){return 745.699872*n}},{name:"米制马力",zh:"米制马力",en:"ps",calc:function(n){return 1*n/735.49875},init:function(n){return 735.49875*n}},{name:"公斤·米/秒",zh:"公斤·米/秒",en:"kg·m/s",calc:function(n){return 1*n/9.80665},init:function(n){return 9.80665*n}},{name:"千卡/秒",zh:"千卡/秒",en:"kcal/s",calc:function(n){return 1*n/4184.1004},init:function(n){return 4184.1004*n}},{name:"英热单位/秒",zh:"英热单位/秒",en:"Btu/s",calc:function(n){return 1*n/1055.05585},init:function(n){return 1055.05585*n}},{name:"英尺·磅/秒",zh:"英尺·磅/秒",en:"ft·lb/s",calc:function(n){return 1*n/(745.699872/550)},init:function(n){return n*(745.699872/550)}},{name:"焦耳/秒",zh:"焦耳/秒",en:"J/s",calc:function(n){return 1*n},init:function(n){return 1*n}},{name:"牛顿·米/秒",zh:"牛顿·米/秒",en:"N·m/s",calc:function(n){return 1*n},init:function(n){return 1*n}}],special:[],group:[{name:"",list:["瓦","千瓦","英制马力","米制马力","公斤·米/秒","千卡/秒","英热单位/秒","英尺·磅/秒","焦耳/秒","牛顿·米/秒"]}]},work:{name:"功/能/热",main:"焦耳",unit:[{name:"焦耳",zh:"焦耳",en:"J",calc:function(n){return 1*n},init:function(n){return 1*n}},{name:"公斤·米",zh:"公斤·米",en:"kg·m",calc:function(n){return 1*n/9.80392157},init:function(n){return 9.80392157*n}},{name:"米制马力·时",zh:"米制马力·时",en:"ps·h",calc:function(n){return 1*n/2647795.5},init:function(n){return 2647795.5*n}},{name:"英制马力·时",zh:"英制马力·时",en:"hp·h",calc:function(n){return 1*n/2684519.5392},init:function(n){return 2684519.5392*n}},{name:"千瓦·时",zh:"千瓦·时",en:"kW·h",calc:function(n){return 1*n/36e5},init:function(n){return 36e5*n}},{name:"度",zh:"度",en:"kW·h",calc:function(n){return 1*n/36e5},init:function(n){return 36e5*n}},{name:"卡",zh:"卡",en:"cal",calc:function(n){return 1*n/4.185851820846},init:function(n){return 4.185851820846*n}},{name:"千卡",zh:"千卡",en:"kcal",calc:function(n){return 1*n/4185.851820846},init:function(n){return 4185.851820846*n}},{name:"英热单位",zh:"英热单位",en:"btu",calc:function(n){return 1*n/1055.05585262},init:function(n){return 1055.05585262*n}},{name:"英尺·磅",zh:"英尺·磅",en:"ft·lb",calc:function(n){return 1*n/1.3557483731},init:function(n){return 1.3557483731*n}},{name:"千焦",zh:"千焦",en:"kJ",calc:function(n){return 1*n/1e3},init:function(n){return 1e3*n}}],special:[],group:[{name:"焦耳(J)",list:["焦耳","公斤·米","米制马力·时","英制马力·时","千瓦·时","度","卡","千卡","英热单位","英尺·磅","千焦"]}]},density:{name:"密度",main:"千克/立方米",unit:[{name:"千克/立方厘米",zh:"千克/立方厘米",en:"kg/cm³",calc:function(n){return 1*n/Math.pow(10,6)},init:function(n){return 1e6*n}},{name:"千克/立方分米",zh:"千克/立方分米",en:"kg/dm³",calc:function(n){return 1*n/1e3},init:function(n){return 1e3*n}},{name:"千克/立方米",zh:"千克/立方米",en:"kg/m³",calc:function(n){return 1*n},init:function(n){return 1*n}},{name:"克/立方厘米",zh:"克/立方厘米",en:"g/cm³",calc:function(n){return 1*n/1e3},init:function(n){return 1e3*n}},{name:"克/立方分米",zh:"克/立方分米",en:"g/dm³",calc:function(n){return 1*n},init:function(n){return 1*n}},{name:"克/立方米",zh:"克/立方米",en:"g/m³",calc:function(n){return 1e3*n},init:function(n){return 1*n/1e3}}],special:[],group:[{name:"",list:["千克/立方厘米","千克/立方分米","千克/立方米","克/立方厘米","克/立方分米","克/立方米"]}]},strength:{name:"力",main:"牛",unit:[{name:"牛",zh:"牛",en:"N",calc:function(n){return 1*n},init:function(n){return 1*n}},{name:"千牛",zh:"千牛",en:"kN",calc:function(n){return 1*n/1e3},init:function(n){return 1e3*n}},{name:"千克力",zh:"千克力",en:"kgf",calc:function(n){return 101.971621*n/1e3},init:function(n){return 9.80665*n}},{name:"克力",zh:"克力",en:"gf",calc:function(n){return 101.971621*n},init:function(n){return 9.80665*n/1e3}},{name:"公吨力",zh:"公吨力",en:"tf",calc:function(n){return 101.971621*n/Math.pow(10,6)},init:function(n){return 9806.65*n}},{name:"磅力",zh:"磅力",en:"lbf",calc:function(n){return 224.808943*n/1e3},init:function(n){return 4.448222*n}},{name:"千磅力",zh:"千磅力",en:"kip",calc:function(n){return 224.808943*n/Math.pow(10,6)},init:function(n){return 4448.221615*n}},{name:"达因",zh:"达因",en:"dyn",calc:function(n){return 1e5*n},init:function(n){return 1*n/1e5}}],special:[],group:[{name:"",list:["牛","千牛","千克力","克力","公吨力","磅力","千磅力","达因"]}]},time:{name:"时间",main:"秒",unit:[{name:"年",zh:"年",en:"yr",calc:function(n){return 31.709792*n/Math.pow(10,9)},init:function(n){return 31536e3*n}},{name:"周",zh:"周",en:"week",calc:function(n){return 1.653439*n/Math.pow(10,6)},init:function(n){return 604800*n}},{name:"天",zh:"天",en:"d",calc:function(n){return 11.574074*n/Math.pow(10,6)},init:function(n){return 86400*n}},{name:"时",zh:"时",en:"h",calc:function(n){return 277.777778*n/Math.pow(10,6)},init:function(n){return 3600*n}},{name:"分",zh:"分",en:"min",calc:function(n){return 16.6666667*n/1e3},init:function(n){return 60*n}},{name:"秒",zh:"秒",en:"s",calc:function(n){return 1*n},init:function(n){return 1*n}},{name:"毫秒",zh:"毫秒",en:"ms",calc:function(n){return 1e3*n},init:function(n){return 1*n/1e3}},{name:"微秒",zh:"微秒",en:"μs",calc:function(n){return 1e6*n},init:function(n){return 1*n/1e6}},{name:"纳秒",zh:"纳秒",en:"ns",calc:function(n){return 1e9*n},init:function(n){return 1*n/1e9}}],special:[{from:"时",to:"分",func:function(n){return 60*n}}],group:[{name:"",list:["年","周","天","时","分","秒","毫秒","微秒","纳秒"]}]},speed:{name:"速度",main:"米/秒",unit:[{name:"米/秒",zh:"米/秒",en:"m/s",calc:function(n){return 1*n},init:function(n){return 1*n}},{name:"千米/秒",zh:"千米/秒",en:"km/s",calc:function(n){return 1*n/1e3},init:function(n){return 1e3*n}},{name:"千米/时",zh:"千米/时",en:"km/h",calc:function(n){return 3.6*n},init:function(n){return 277.777778*n/1e3}},{name:"光速",zh:"光速",en:"c",calc:function(n){return 3.335641*n/Math.pow(10,9)},init:function(n){return 299792458*n}},{name:"马赫",zh:"马赫",en:"mach",calc:function(n){return 2.938584*n/1e3},init:function(n){return 340.3*n}},{name:"英里/时",zh:"英里/时",en:"mile/h",calc:function(n){return 2.236936*n},init:function(n){return 447.04*n/1e3}},{name:"英寸/秒",zh:"英寸/秒",en:"in/s",calc:function(n){return 39.370079*n},init:function(n){return 25.4*n/1e3}}],special:[],group:[{name:"",list:["米/秒","千米/秒","千米/时","光速","马赫","英里/时","英寸/秒"]}]},byte:{name:"数据存储",main:"字节",unit:[{name:"比特",zh:"比特",en:"bit",calc:function(n){return 8*n},init:function(n){return 1*n/8}},{name:"字节",zh:"字节",en:"b",calc:function(n){return 1*n},init:function(n){return 1*n}},{name:"千字节",zh:"千字节",en:"kb",calc:function(n){return 1*n/Math.pow(2,10)},init:function(n){return 1024*n}},{name:"兆字节",zh:"兆字节",en:"mb",calc:function(n){return 1*n/Math.pow(2,20)},init:function(n){return n*Math.pow(2,20)}},{name:"千兆字节",zh:"千兆字节",en:"gb",calc:function(n){return 1*n/Math.pow(2,30)},init:function(n){return n*Math.pow(2,30)}},{name:"太字节",zh:"太字节",en:"tb",calc:function(n){return 1*n/Math.pow(2,40)},init:function(n){return n*Math.pow(2,40)}},{name:"拍字节",zh:"拍字节",en:"pb",calc:function(n){return 1*n/Math.pow(2,50)},init:function(n){return n*Math.pow(2,50)}},{name:"艾字节",zh:"艾字节",en:"eb",calc:function(n){return 1*n/Math.pow(2,60)},init:function(n){return n*Math.pow(2,60)}}],special:[],group:[{name:"",list:["比特","字节","千字节","兆字节","千兆字节","太字节","拍字节","艾字节"]}]},angle:{name:"角度",main:"度",unit:[{name:"圆周",zh:"圆周",en:"",calc:function(n){return 2.777778*n/1e3},init:function(n){return 360*n}},{name:"直角",zh:"直角",en:"",calc:function(n){return 11.111111*n/1e3},init:function(n){return 90*n}},{name:"百分度",zh:"百分度",en:"gon",calc:function(n){return 1.111111*n},init:function(n){return 900*n/1e3}},{name:"度",zh:"度",en:"°",calc:function(n){return 1*n},init:function(n){return 1*n}},{name:"分",zh:"分",en:" ′",calc:function(n){return 60*n},init:function(n){return 16.6666667*n/1e3}},{name:"秒",zh:"秒",en:"'",calc:function(n){return 3600*n},init:function(n){return.2777778*n/1e3}},{name:"弧度",zh:"弧度",en:"rad",calc:function(n){return 17.453293*n/1e3},init:function(n){return 57.29578*n}},{name:"毫弧度",zh:"毫弧度",en:"mrad",calc:function(n){return 17.453293*n},init:function(n){return 57.29578*n/1e3}}],special:[],group:[{name:"角度制",list:["圆周","直角","百分度","度","分","秒"]},{name:"弧度制",list:["弧度","毫弧度"]}]}},m=function(n,t,e,r){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],u=s(n,e);if(e===r)return{num:i?t:p(t),unitFirst:u.zh,unitSecond:u.en};var c=s(n,r),a=z(n,e,r);return t=null!==a?a(t):c.calc(u.init(t)),{num:i?t:p(t),unitFirst:c.zh,unitSecond:c.en}},h=function(n){return l[n]},s=function(n,t){for(var e=h(n),r=0;r<e.unit.length;r++)if(t===e.unit[r].name)return e.unit[r]},z=function(n,t,e){var r=h(n);if(r.special.length>0)for(var i=0;i<r.special.length;i++)if(t===r.special[i].from&&e===r.special[i].to)return r.special[i].func;return null},p=function(n){var t,e,r,i=n+"",u=!1;if(i.indexOf(".")>-1){var c=i.match(/\.\d+e[+-](\d+)$/);u=!c||!c[1]||1*c[1]<a-1}return u?n>-1&&n<1&&0!=n?n=Math.abs(n)<1e-5?g(n,f):1*n.toFixed(o):(t=i.split("."),e=t[0],r=t[1],i.length>a?n=e.length>=a?g(n,f):e.length<o-1?1*n.toFixed(o):1*n.toFixed(a-e.length-1):r.length>o&&(n=1*n.toFixed(o))):i.length>a&&(n=g(n,f)),n+""},g=function(n,t){var e=n.toExponential(t);return(e+"").match(new RegExp(".0{"+t+"}e"))?n.toExponential(0):e},d={getData:function(n){return c.a.cloneDeep(h(n).group).map((function(t){return t.list=t.list.map((function(t){var e=s(n,t);return{name:t,unit:e.zh+(e.en?" (".concat(e.en,")"):"")}})),t}))},getMain:function(n){return h(n).main},calc:function(n,t,e,r){return m(n,t,e,r)},calcOrigin:function(n,t,e,r){return m(n,t,e,r,!0)},format:function(n){return p(n)},list:function(){return Object.keys(l).map((function(n){return{key:n,name:l[n].name}}))}},w={created:function(){var n=this.$getToolData();this.current.type=n["type"]?n["type"]:"temperature",this.getToolData()},computed:{unitGroup:function(){return d.getData(this.current.type)},isShowResult:function(){return this.current.from&&this.current.type&&this.current.input},result:function(){var n=this,t=[];return this.isShowResult&&(this.saveToolData(),this.unitGroup.forEach((function(e){e.list.forEach((function(e){var r=d.calc(n.current.type,n.current.input,n.current.from,e.name);t.push({unit:e.name,num:r.num})}))}))),t},assignResult:function(){if("all"===this.current.to)return{};for(var n=this.current.to,t=0;t<this.result.length;t++)if(this.result[t].unit===n)return this.result[t];return null}},methods:{handle:function(n){this.current.type=n,this.getToolData()},saveToolData:function(){var n=this.$getToolData();n.type=this.current.type,n.data=n.data?n.data:{},n.data[n.type]={from:this.current.from,to:this.current.to,input:this.current.input},this.$saveToolData(n)},getToolData:function(){var n=this.current.type,t=this.$getToolData(),e=t["data"]&&t["data"][n]?t["data"][n]:null;this.current.from=e?e.from:d.getMain(this.current.type),this.current.to=e?e.to:"all",this.current.input=e?e.input:""},exchange:function(){if("all"!==this.current.to&&this.current.from&&this.current.to){var n=this.current.from;this.current.from=this.current.to,this.current.to=n}}},data:function(){return{current:{type:"",from:"",to:"",input:""},unitLists:d.list()}}},k=w,y=e("2877"),v=Object(y["a"])(k,r,i,!1,null,null,null);t["default"]=v.exports}}]);