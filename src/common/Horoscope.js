// 天干
const HeavenlyStems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸']
// 地支
const GroundBranches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']
// 十二生肖
const ChineseZodiac = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']
// const ChineseZodiac = ['\u9f20', '\u725b', '\u864e', '\u5154', '\u9f99', '\u86c7', '\u9a6c', '\u7f8a', '\u7334', '\u9e21', '\u72d7', '\u732a']
// 二十四节气
const SolarTerms = ['小寒', '大寒', '立春', '雨水', '惊蛰', '春分', '清明', '谷雨', '立夏', '小满', '芒种', '夏至', '小暑', '大暑', '立秋', '处暑', '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪', '冬至']
// 五行
const FiveElements = ['木', '火', '土', '金', '水']
// 方位
const Position = ['东', '南', '中', '西', '北']
// 公历月份天数
const SolarMonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
// 十二星座
const Constellation = ['魔羯', '水瓶', '双鱼', '白羊', '金牛', '双子', '巨蟹', '狮子', '处女', '天秤', '天蝎', '射手']
//const Constellation = ['\u9b54\u7faf', '\u6c34\u74f6', '\u53cc\u9c7c', '\u767d\u7f8a', '\u91d1\u725b', '\u53cc\u5b50', '\u5de8\u87f9', '\u72ee\u5b50', '\u5904\u5973', '\u5929\u79e4', '\u5929\u874e', '\u5c04\u624b']
// 十二星座截止时间
const ConstellationDay = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22]
// 输入出生年月日时（阳历或者农历）
// 获得 公历、农历、八字、五行、方位
class Horoscope {

  // 公历
  static gregorianCalendar () {

  }

  // 农历
  static lunarCalendar () {
    
  }

  // 农历转天干地支
  static lunar2hsgb () {

  }

  /**
   * [solar2lunar 公历转农历]
   * @param  {Date} date [公历时间]
   * @param  {Date} y [公历时间]
   * @param  {Date} m [公历时间]
   * @param  {Date} d [公历时间]
   * @return {Date}      [农历时间]
   */
  static solar2lunar () {
    let y,m,d,h
    if (arguments.length < 2) {
      let date
      if (arguments[0] && isDate(arguments[0])) {
        date = arguments[0]
      } else {
        date = new Date(date)
      }
      y = date.getFullYear()
      m = date.getMonth() + 1
      d = date.getDate()
      h = date.getHours()
    } else if (arguments.length > 2) {
      y = arguments[0]
      m = arguments[1]
      d = arguments[2]
      h = arguments[3]
    }
  }

  /**
   * [lunar2solar 农历转公历]
   * @param  {String} y [年]
   * @param  {String} m [月]
   * @param  {String} d [日]
   * @param  {String} h [时辰]
   * @return {Date}   [公历]
   */
  static lunar2solar (y, m, d, h) {
    
  }

  /**
   * [getChineseDate 时间对象转中国格式]
   * @param  {Date} date [description]
   * @return {String}      [description]
   */
  static getChineseDate (date) {

  }

  /**
   * [setChineseDate 中国时间格式转时间对象]
   * @param  {Date} date [description]
   * @return {String}      [description]
   */
  static setChineseDate (date) {

  }

  /**
   * [chineseZodiac 根据年份转生肖]
   * @param  {Number} y [年]
   * @return {String}   [description]
   */
  static chineseZodiac (y) {
    return ChineseZodiac[(y - 4) % 12]
  }

  /**
   * [constellation 根据日期转星座]
   * @param  {Number} m [description]
   * @param  {Number} d [description]
   * @return {String}   [description]
   */
  static constellation (m, d) {
    return Constellation.join('').substr(m * 2 - (d < ConstellationDay[m-1] ? 2 : 0) , 2) + '\u5ea7' //座
  }

  /**
   * [getDays 获取公历对应月份的天数]
   * @param  {Number} y [年份]
   * @param  {Number} m [月份]
   * @return {Number}   [天数]
   */
  static getDays (y, m) {
    if (m === 1) {
      return isLeapYear(y) ? 29 : 28;
    } else {
      return SolarMonthDays[m];
    }
  }

  /**
   * [isLeapYear 是否闰年]
   * @param  {Number}  y [年份]
   * @return {Boolean}   [description]
   */
  static isLeapYear (y) {
    return (y % 4 === 0) && (y % 100 !== 0) || (y % 400 === 0)
  }

  /**
   * [getChineseHours 小时转时辰]
   * @param  {Number} h [description]
   * @return {String}      [description]
   */
  static getChineseHours (h) {
    return GroundBranches[Math.ceil(h / 2) % 12]
  }

  /**
   * [hsgb2FiveElements 天干地支转五行]
   * 金：天干的庚、辛 地支金：申、酉
   * 木：天干的甲、乙 地支木：寅、卯
   * 水：天干的壬、癸 地支水：子、亥
   * 火：天干的丙、丁 地支火：巳、午
   * 土：天干的戊、己 地支土：丑、辰、未、戌
   * @param  {String} hsgb [description]
   * @return {String}      [description]
   */
  static hsgb2FiveElements (hsgb) {
    let hs = hsgb.substr(0, 1)
    let hsIndex = HeavenlyStems.indexOf(hs)
    let fe = FiveElements[((hsIndex/2) | 0) % 5]
    let gb = hsgb.substr(1, 1)
    let result
    switch (gb) {
      case '申':
      case '酉':
        result = '金'
        break
      case '寅':
      case '卯':
        result = '木'
        break
      case '子':
      case '亥':
        result = '水'
        break
      case '巳':
      case '午':
        result ='火'
        break
      default:
        result ='土'
        break
    }
    return result
  }

  /**
   * [hsgb2Position 天干地支转方位]
   * @param  {[type]} hsgb [description]
   * @return {[type]}      [description]
   */
  static hsgb2Position (hsgb) {
    let hs = hsgb.substr(0, 1)
    let hsIndex = HeavenlyStems.indexOf(hs)
    let fe = Position[((hsIndex/2) | 0) % 5]
    let gb = hsgb.substr(1, 1)
    let result
    switch (gb) {
      case '申':
      case '酉':
        result = '西'
        break
      case '寅':
      case '卯':
        result = '东'
        break
      case '子':
      case '亥':
        result = '北'
        break
      case '巳':
      case '午':
        result = '南'
        break
      default:
        result = '中'
        break
    }
    return result
  }

}

/**
 * [isDate 判断是否是时间]
 * @param  {*}  v [description]
 * @return {Boolean}   [description]
 */
function isDate (v) {
  return isObjectLike(v) && getType(v) === 'date'.toLowerCase()
}

/**
 * [isObjectLike 是否是对象]
 * @param  {*}  v [description]
 * @return {Boolean}   [description]
 */
function isObjectLike (v) {
  return typeof v === 'object' && v !== null
}

/**
 * [getType 获取状态值]
 * @param  {*} v [description]
 * @return {String}   [description]
 */
function getType (v) {
  const s = Object.prototype.toString.call(v)
  return s.match(/\[object (.*?)\]/)[1].toLowerCase()
}

// console.log(Horoscope.constellation(12,19))

// export default Horoscope


// 计算农历
var solarToLunar = (function() {
    // 找到农历
    function findLunar(solar, index, minMonth, maxMonth, isPreYear) {
        //取得映射的数据
        var mapping = MAPPING[index];
        if (!mapping) return false;

        var year = solar.getFullYear(),
            month = solar.getMonth() + 1,
            date = solar.getDate();
        var lunarYear = year;
        var lunarMonth, find, solarMonth;

        //查找农历
        for (var i = mapping.length - 1; i > 0; i--) {
            lunarMonth = i;
            //取对应的农历月与天
            var segMonth = Number(mapping[i].substring(0, 2));
            var segDay = Number(mapping[i].substring(2, 4));

            solarMonth = isPreYear && segMonth > 12 ? segMonth - 12 : segMonth;
            find = solarMonth < month || (solarMonth == month && segDay <= date) ||
                ((segMonth <= minMonth || segMonth >= maxMonth) && isPreYear);
            if ((solarMonth == 12 && solarMonth > month && i == 1)) {
                find = true;
                year--;
            };
            if (find) break;
        }

        //如果找到，则赋值
        if (!find) return false;
        //取前一年
        if (isPreYear && segMonth == 12) year = year - 1;
        lunarYear = isPreYear ? lunarYear - 1 : lunarYear;

        return {
            year: year,
            month: solarMonth,
            day: segDay,
            lunarYear: lunarYear,
            lunarMonth: lunarMonth,
            leapMonth: mapping[0] //闰月
        };
    };

    //计算公历两个日期之差
    function solarDayDiff(left, right) {
        return parseInt(parseInt(left.getTime() - right.getTime()) / (1000 * 60 * 60 * 24));
    }

    /*
        农历每一年，对应公历的数据
        此数据来源于互联网，原作者不详细，在此感谢
        MAPPING[0][0]：每年闰月的月份，0表示不闰
        MAPPING[0][1, 13]：表示每月初一对应的阳历时间，前两个字符表示月，后两个字符表示月
    */
    var MAPPING = [
        [8, "0131", "0301", "0331", "0429", "0528", "0627", "0726", "0825", "0924", "1023", "1122", "1222", "1320"], //1900
        [0, "0219", "0320", "0419", "0518", "0616", "0716", "0814", "0913", "1012", "1111", "1211", "1310"], //1901
        [0, "0208", "0310", "0408", "0508", "0606", "0705", "0804", "0902", "1002", "1031", "1130", "1230"], //1902
        [5, "0129", "0227", "0329", "0427", "0527", "0625", "0724", "0823", "0921", "1020", "1119", "1219", "1317"], //1903
        [0, "0216", "0317", "0416", "0515", "0614", "0713", "0811", "0910", "1009", "1107", "1207", "1306"], //1904
        [0, "0204", "0306", "0405", "0504", "0603", "0703", "0801", "0830", "0929", "1028", "1127", "1226"], //1905
        [4, "0125", "0223", "0325", "0424", "0523", "0622", "0721", "0820", "0918", "1018", "1116", "1216", "1314"], //1906
        [0, "0213", "0314", "0413", "0512", "0611", "0710", "0809", "0908", "1007", "1106", "1205", "1304"], //1907
        [0, "0202", "0303", "0401", "0430", "0530", "0629", "0728", "0827", "0925", "1025", "1124", "1223"], //1908
        [2, "0122", "0220", "0322", "0420", "0519", "0618", "0717", "0816", "0914", "1014", "1113", "1213", "1311"], //1909
        [0, "0210", "0311", "0410", "0509", "0607", "0707", "0805", "0904", "1003", "1102", "1202", "1301"], //1910
        [6, "0130", "0301", "0330", "0429", "0528", "0626", "0726", "0824", "0922", "1022", "1121", "1220", "1319"], //1911
        [0, "0218", "0319", "0417", "0517", "0615", "0714", "0813", "0911", "1010", "1109", "1209", "1307"], //1912
        [0, "0206", "0308", "0407", "0506", "0605", "0704", "0802", "0901", "0930", "1029", "1128", "1227"], //1913
        [5, "0126", "0225", "0327", "0425", "0525", "0623", "0723", "0821", "0920", "1019", "1117", "1217", "1315"], //1914
        [0, "0214", "0316", "0414", "0514", "0613", "0712", "0811", "0909", "1009", "1107", "1207", "1305"], //1915
        [0, "0203", "0304", "0403", "0502", "0601", "0630", "0730", "0829", "0927", "1027", "1125", "1225"], //1916
        [2, "0123", "0222", "0323", "0421", "0521", "0619", "0719", "0818", "0916", "1016", "1115", "1214", "1313"], //1917
        [0, "0211", "0313", "0411", "0510", "0609", "0708", "0807", "0905", "1005", "1104", "1203", "1302"], //1918
        [7, "0201", "0302", "0401", "0430", "0529", "0628", "0727", "0825", "0924", "1024", "1122", "1222", "1321"], //1919
        [0, "0220", "0320", "0419", "0518", "0616", "0716", "0814", "0912", "1012", "1110", "1210", "1309"], //1920
        [0, "0208", "0310", "0408", "0508", "0606", "0705", "0804", "0902", "1001", "1031", "1129", "1229"], //1921
        [5, "0128", "0227", "0328", "0427", "0527", "0625", "0724", "0823", "0921", "1020", "1119", "1218", "1317"], //1922
        [0, "0216", "0317", "0416", "0516", "0614", "0714", "0812", "0911", "1010", "1108", "1208", "1306"], //1923
        [0, "0205", "0305", "0404", "0504", "0602", "0702", "0801", "0830", "0929", "1028", "1127", "1226"], //1924
        [4, "0124", "0223", "0324", "0423", "0522", "0621", "0721", "0819", "0918", "1018", "1116", "1216", "1314"], //1925
        [0, "0213", "0314", "0412", "0512", "0610", "0710", "0808", "0907", "1007", "1105", "1205", "1304"], //1926
        [0, "0202", "0304", "0402", "0501", "0531", "0629", "0729", "0827", "0926", "1025", "1124", "1224"], //1927
        [2, "0123", "0221", "0322", "0420", "0519", "0618", "0717", "0815", "0914", "1013", "1112", "1212", "1311"], //1928
        [0, "0210", "0311", "0410", "0509", "0607", "0707", "0805", "0903", "1003", "1101", "1201", "1231"], //1929
        [6, "0130", "0228", "0330", "0429", "0528", "0626", "0726", "0824", "0922", "1022", "1120", "1220", "1319"], //1930
        [0, "0217", "0319", "0418", "0517", "0616", "0715", "0814", "0912", "1011", "1110", "1209", "1308"], //1931
        [0, "0206", "0307", "0406", "0506", "0604", "0704", "0802", "0901", "0930", "1029", "1128", "1227"], //1932
        [5, "0126", "0224", "0326", "0425", "0524", "0623", "0722", "0821", "0920", "1019", "1118", "1217", "1315"], //1933
        [0, "0214", "0315", "0414", "0513", "0612", "0712", "0810", "0909", "1008", "1107", "1207", "1305"], //1934
        [0, "0204", "0305", "0403", "0503", "0601", "0701", "0730", "0829", "0928", "1027", "1126", "1226"], //1935
        [3, "0124", "0223", "0323", "0421", "0521", "0619", "0718", "0817", "0916", "1015", "1114", "1214", "1313"], //1936
        [0, "0211", "0313", "0411", "0510", "0609", "0708", "0806", "0905", "1004", "1103", "1203", "1302"], //1937
        [7, "0131", "0302", "0401", "0430", "0529", "0628", "0727", "0825", "0924", "1023", "1122", "1222", "1320"], //1938
        [0, "0219", "0321", "0420", "0519", "0617", "0717", "0815", "0913", "1013", "1111", "1211", "1309"], //1939
        [0, "0208", "0309", "0408", "0507", "0606", "0705", "0804", "0902", "1001", "1031", "1129", "1229"], //1940
        [6, "0127", "0226", "0328", "0426", "0526", "0625", "0724", "0823", "0921", "1020", "1119", "1218", "1317"], //1941
        [0, "0215", "0317", "0415", "0515", "0614", "0713", "0812", "0910", "1010", "1108", "1208", "1306"], //1942
        [0, "0205", "0306", "0405", "0504", "0603", "0702", "0801", "0831", "0929", "1029", "1127", "1227"], //1943
        [4, "0125", "0224", "0324", "0423", "0522", "0621", "0720", "0819", "0917", "1017", "1116", "1215", "1314"], //1944
        [0, "0213", "0314", "0412", "0512", "0610", "0709", "0808", "0906", "1006", "1105", "1205", "1303"], //1945
        [0, "0202", "0304", "0402", "0501", "0531", "0629", "0728", "0827", "0925", "1025", "1124", "1223"], //1946
        [2, "0122", "0221", "0323", "0421", "0520", "0619", "0718", "0816", "0915", "1014", "1113", "1212", "1311"], //1947
        [0, "0210", "0311", "0409", "0509", "0607", "0707", "0805", "0903", "1003", "1101", "1201", "1230"], //1948
        [7, "0129", "0228", "0329", "0428", "0528", "0626", "0726", "0824", "0922", "1022", "1120", "1220", "1318"], //1949
        [0, "0217", "0318", "0417", "0517", "0615", "0715", "0814", "0912", "1011", "1110", "1209", "1308"], //1950
        [0, "0206", "0308", "0406", "0506", "0605", "0704", "0803", "0901", "1001", "1030", "1129", "1228"], //1951
        [5, "0127", "0225", "0326", "0424", "0524", "0622", "0722", "0820", "0919", "1019", "1117", "1217", "1315"], //1952
        [0, "0214", "0315", "0414", "0513", "0611", "0711", "0810", "0908", "1008", "1107", "1206", "1305"], //1953
        [0, "0203", "0305", "0403", "0503", "0601", "0630", "0730", "0828", "0927", "1027", "1126", "1225"], //1954
        [3, "0124", "0222", "0324", "0422", "0522", "0620", "0719", "0818", "0916", "1016", "1114", "1214", "1313"], //1955
        [0, "0212", "0312", "0411", "0510", "0609", "0708", "0806", "0905", "1004", "1103", "1203", "1301"], //1956
        [8, "0131", "0302", "0331", "0430", "0529", "0628", "0727", "0825", "0924", "1023", "1122", "1221", "1320"], //1957
        [0, "0218", "0320", "0419", "0519", "0617", "0717", "0815", "0913", "1013", "1111", "1211", "1309"], //1958
        [0, "0208", "0309", "0408", "0508", "0606", "0706", "0804", "0903", "1002", "1101", "1130", "1230"], //1959
        [6, "0128", "0227", "0327", "0426", "0525", "0624", "0724", "0822", "0921", "1020", "1119", "1218", "1317"], //1960
        [0, "0215", "0317", "0415", "0515", "0613", "0713", "0811", "0910", "1010", "1108", "1208", "1306"], //1961
        [0, "0205", "0306", "0405", "0504", "0602", "0702", "0731", "0830", "0929", "1028", "1127", "1227"], //1962
        [4, "0125", "0224", "0325", "0424", "0523", "0621", "0721", "0819", "0918", "1017", "1116", "1216", "1315"], //1963
        [0, "0213", "0314", "0412", "0512", "0610", "0709", "0808", "0906", "1006", "1104", "1204", "1303"], //1964
        [0, "0202", "0303", "0402", "0501", "0531", "0629", "0728", "0827", "0925", "1024", "1123", "1223"], //1965
        [3, "0121", "0220", "0322", "0421", "0520", "0619", "0718", "0816", "0915", "1014", "1112", "1212", "1311"], //1966
        [0, "0209", "0311", "0410", "0509", "0608", "0708", "0806", "0904", "1004", "1102", "1202", "1231"], //1967
        [7, "0130", "0228", "0329", "0427", "0527", "0626", "0725", "0824", "0922", "1022", "1120", "1220", "1318"], //1968
        [0, "0217", "0318", "0417", "0516", "0615", "0714", "0813", "0912", "1011", "1110", "1209", "1308"], //1969
        [0, "0206", "0308", "0406", "0505", "0604", "0703", "0802", "0901", "0930", "1030", "1129", "1228"], //1970
        [5, "0127", "0225", "0327", "0425", "0524", "0623", "0722", "0821", "0919", "1019", "1118", "1218", "1316"], //1971
        [0, "0215", "0315", "0414", "0513", "0611", "0711", "0809", "0908", "1007", "1106", "1206", "1304"], //1972
        [0, "0203", "0305", "0403", "0503", "0601", "0630", "0730", "0828", "0926", "1026", "1125", "1224"], //1973
        [4, "0123", "0222", "0324", "0422", "0522", "0620", "0719", "0818", "0916", "1015", "1114", "1214", "1312"], //1974
        [0, "0211", "0313", "0412", "0511", "0610", "0709", "0807", "0906", "1005", "1103", "1203", "1301"], //1975
        [8, "0131", "0301", "0331", "0429", "0529", "0627", "0727", "0825", "0924", "1023", "1121", "1221", "1319"], //1976
        [0, "0218", "0320", "0418", "0518", "0617", "0716", "0815", "0913", "1013", "1111", "1211", "1309"], //1977
        [0, "0207", "0309", "0407", "0507", "0606", "0705", "0804", "0902", "1002", "1101", "1130", "1230"], //1978
        [6, "0128", "0227", "0328", "0426", "0526", "0624", "0724", "0823", "0921", "1021", "1120", "1219", "1318"], //1979
        [0, "0216", "0317", "0415", "0514", "0613", "0712", "0811", "0909", "1009", "1108", "1207", "1306"], //1980
        [0, "0205", "0306", "0405", "0504", "0602", "0702", "0731", "0829", "0928", "1028", "1126", "1226"], //1981
        [4, "0125", "0224", "0325", "0424", "0523", "0621", "0721", "0819", "0917", "1017", "1115", "1215", "1314"], //1982
        [0, "0213", "0315", "0413", "0513", "0611", "0710", "0809", "0907", "1006", "1105", "1204", "1303"], //1983
        [10, "0202", "0303", "0401", "0501", "0531", "0629", "0728", "0827", "0925", "1024", "1123", "1222", "1321"], //1984
        [0, "0220", "0321", "0420", "0520", "0618", "0718", "0816", "0915", "1014", "1112", "1212", "1310"], //1985
        [0, "0209", "0310", "0409", "0509", "0607", "0707", "0806", "0904", "1004", "1102", "1202", "1231"], //1986
        [6, "0129", "0228", "0329", "0428", "0527", "0626", "0726", "0824", "0923", "1023", "1121", "1221", "1319"], //1987
        [0, "0217", "0318", "0416", "0516", "0614", "0714", "0812", "0911", "1011", "1109", "1209", "1308"], //1988
        [0, "0206", "0308", "0406", "0505", "0604", "0703", "0802", "0831", "0930", "1029", "1128", "1228"], //1989
        [5, "0127", "0225", "0327", "0425", "0524", "0623", "0722", "0820", "0919", "1018", "1117", "1217", "1316"], //1990
        [0, "0215", "0316", "0415", "0514", "0612", "0712", "0810", "0908", "1008", "1106", "1206", "1305"], //1991
        [0, "0204", "0304", "0403", "0503", "0601", "0630", "0730", "0828", "0926", "1026", "1124", "1224"], //1992
        [3, "0123", "0221", "0323", "0422", "0521", "0620", "0719", "0818", "0916", "1015", "1114", "1213", "1312"], //1993
        [0, "0210", "0312", "0411", "0511", "0609", "0709", "0807", "0906", "1005", "1103", "1203", "1301"], //1994
        [8, "0131", "0301", "0331", "0430", "0529", "0628", "0727", "0826", "0925", "1024", "1122", "1222", "1320"], //1995
        [0, "0219", "0319", "0418", "0517", "0616", "0715", "0814", "0912", "1012", "1111", "1211", "1309"], //1996
        [0, "0207", "0309", "0407", "0507", "0605", "0705", "0803", "0902", "1002", "1031", "1130", "1230"], //1997
        [5, "0128", "0227", "0328", "0426", "0526", "0624", "0723", "0822", "0921", "1020", "1119", "1219", "1317"], //1998
        [0, "0216", "0318", "0416", "0515", "0614", "0713", "0811", "0910", "1009", "1108", "1208", "1307"], //1999
        [0, "0205", "0306", "0405", "0504", "0602", "0702", "0731", "0829", "0928", "1027", "1126", "1226"], //2000
        [4, "0124", "0223", "0325", "0423", "0523", "0621", "0721", "0819", "0917", "1017", "1115", "1215", "1313"], //2001
        [0, "0212", "0314", "0413", "0512", "0611", "0710", "0809", "0907", "1006", "1105", "1204", "1303"], //2002
        [0, "0201", "0303", "0402", "0501", "0531", "0630", "0729", "0828", "0926", "1025", "1124", "1223"], //2003
        [2, "0122", "0220", "0321", "0419", "0519", "0618", "0717", "0816", "0914", "1014", "1112", "1212", "1310"], //2004
        [0, "0209", "0310", "0409", "0508", "0607", "0706", "0805", "0904", "1003", "1102", "1201", "1231"], //2005
        [7, "0129", "0228", "0329", "0428", "0527", "0626", "0725", "0824", "0922", "1022", "1121", "1220", "1319"], //2006
        [0, "0218", "0319", "0417", "0517", "0615", "0714", "0813", "0911", "1011", "1110", "1210", "1308"], //2007
        [0, "0207", "0308", "0406", "0505", "0604", "0703", "0801", "0831", "0929", "1029", "1128", "1227"], //2008
        [5, "0126", "0225", "0327", "0425", "0524", "0623", "0722", "0820", "0919", "1018", "1117", "1216", "1315"], //2009
        [0, "0214", "0316", "0414", "0514", "0612", "0712", "0810", "0908", "1008", "1106", "1206", "1304"], //2010
        [0, "0203", "0305", "0403", "0503", "0602", "0701", "0731", "0829", "0927", "1027", "1125", "1225"], //2011
        [4, "0123", "0222", "0322", "0421", "0521", "0619", "0719", "0817", "0916", "1015", "1114", "1213", "1312"], //2012
        [0, "0210", "0312", "0410", "0510", "0608", "0708", "0807", "0905", "1005", "1103", "1203", "1301"], //2013
        [9, "0131", "0301", "0331", "0429", "0529", "0627", "0727", "0825", "0924", "1024", "1122", "1222", "1320"], //2014
        [0, "0219", "0320", "0419", "0518", "0616", "0716", "0814", "0913", "1013", "1112", "1211", "1310"], //2015
        [0, "0208", "0309", "0407", "0507", "0605", "0704", "0803", "0901", "1001", "1031", "1129", "1229"], //2016
        [6, "0128", "0226", "0328", "0426", "0526", "0624", "0723", "0822", "0920", "1020", "1118", "1218", "1317"], //2017
        [0, "0216", "0317", "0416", "0515", "0614", "0713", "0811", "0910", "1009", "1108", "1207", "1306"], //2018
        [0, "0205", "0307", "0405", "0505", "0603", "0703", "0801", "0830", "0929", "1028", "1126", "1226"], //2019
        [4, "0125", "0223", "0324", "0423", "0523", "0621", "0721", "0819", "0917", "1017", "1115", "1215", "1313"], //2020
        [0, "0212", "0313", "0412", "0512", "0610", "0710", "0808", "0907", "1006", "1105", "1204", "1303"], //2021
        [0, "0201", "0303", "0401", "0501", "0530", "0629", "0729", "0827", "0926", "1025", "1124", "1223"], //2022
        [2, "0122", "0220", "0322", "0420", "0519", "0618", "0718", "0816", "0915", "1015", "1113", "1213", "1311"], //2023
        [0, "0210", "0310", "0409", "0508", "0606", "0706", "0804", "0903", "1003", "1101", "1201", "1231"], //2024
        [6, "0129", "0228", "0329", "0428", "0527", "0625", "0725", "0823", "0922", "1021", "1120", "1220", "1319"], //2025
        [0, "0217", "0319", "0417", "0517", "0615", "0714", "0813", "0911", "1010", "1109", "1209", "1308"], //2026
        [0, "0206", "0308", "0407", "0506", "0605", "0704", "0802", "0901", "0930", "1029", "1128", "1228"], //2027
        [5, "0126", "0225", "0326", "0425", "0524", "0623", "0722", "0820", "0919", "1018", "1116", "1216", "1315"], //2028
        [0, "0213", "0315", "0414", "0513", "0612", "0711", "0810", "0908", "1008", "1106", "1205", "1304"], //2029
        [0, "0203", "0304", "0403", "0502", "0601", "0701", "0730", "0829", "0927", "1027", "1125", "1225"], //2030
        [3, "0123", "0221", "0323", "0422", "0521", "0620", "0719", "0818", "0917", "1016", "1115", "1214", "1313"], //2031
        [0, "0211", "0312", "0410", "0509", "0608", "0707", "0806", "0905", "1004", "1103", "1203", "1301"], //2032
        [7, "0131", "0301", "0331", "0429", "0528", "0627", "0726", "0825", "0923", "1023", "1122", "1222", "1320"], //2033
        [0, "0219", "0320", "0419", "0518", "0616", "0716", "0814", "0913", "1012", "1111", "1211", "1309"], //2034
        [0, "0208", "0310", "0408", "0508", "0606", "0705", "0804", "0902", "1001", "1031", "1130", "1229"], //2035
        [6, "0128", "0227", "0328", "0426", "0526", "0624", "0723", "0822", "0920", "1019", "1118", "1217", "1316"], //2036
        [0, "0215", "0317", "0416", "0515", "0614", "0713", "0811", "0910", "1009", "1107", "1207", "1305"], //2037
        [0, "0204", "0306", "0405", "0504", "0603", "0702", "0801", "0830", "0929", "1028", "1126", "1226"], //2038
        [5, "0124", "0223", "0325", "0423", "0523", "0622", "0721", "0820", "0918", "1018", "1116", "1216", "1314"], //2039
        [0, "0212", "0313", "0411", "0511", "0610", "0709", "0808", "0906", "1006", "1105", "1204", "1303"], //2040
        [0, "0201", "0302", "0401", "0430", "0530", "0628", "0728", "0827", "0925", "1025", "1124", "1223"], //2041
        [2, "0122", "0220", "0322", "0420", "0519", "0618", "0717", "0816", "0914", "1014", "1113", "1212", "1311"], //2042
        [0, "0210", "0311", "0410", "0509", "0607", "0707", "0805", "0903", "1003", "1102", "1201", "1231"], //2043
        [7, "0130", "0229", "0329", "0428", "0527", "0625", "0725", "0823", "0921", "1021", "1119", "1219", "1318"], //2044
        [0, "0217", "0319", "0417", "0517", "0615", "0714", "0813", "0911", "1010", "1109", "1208", "1307"], //2045
        [0, "0206", "0308", "0406", "0506", "0604", "0704", "0802", "0901", "0930", "1029", "1128", "1227"], //2046
        [5, "0126", "0225", "0326", "0425", "0525", "0623", "0723", "0821", "0920", "1019", "1117", "1217", "1315"], //2047
        [0, "0214", "0314", "0413", "0513", "0611", "0711", "0810", "0908", "1008", "1106", "1205", "1304"], //2048
        [0, "0202", "0304", "0402", "0502", "0531", "0630", "0730", "0828", "0927", "1027", "1125", "1225"], //2049
        [3, "0123", "0221", "0323", "0421", "0521", "0619", "0719", "0817", "0916", "1016", "1114", "1214", "1313"], //2050
        [0, "0211", "0313", "0411", "0510", "0609", "0708", "0806", "0905", "1005", "1103", "1203", "1302"], //2051
        [8, "0201", "0301", "0331", "0429", "0528", "0627", "0726", "0824", "0923", "1022", "1121", "1221", "1320"], //2052
        [0, "0219", "0320", "0419", "0518", "0616", "0716", "0814", "0912", "1012", "1110", "1210", "1309"], //2053
        [0, "0208", "0309", "0408", "0508", "0606", "0705", "0804", "0902", "1001", "1031", "1129", "1229"], //2054
        [6, "0128", "0226", "0328", "0427", "0526", "0625", "0724", "0823", "0921", "1020", "1119", "1218", "1317"], //2055
        [0, "0215", "0316", "0415", "0515", "0613", "0713", "0811", "0910", "1009", "1107", "1207", "1305"], //2056
        [0, "0204", "0305", "0404", "0504", "0602", "0702", "0731", "0830", "0929", "1028", "1126", "1226"], //2057
        [4, "0124", "0223", "0324", "0423", "0522", "0621", "0720", "0819", "0918", "1017", "1116", "1216", "1314"], //2058
        [0, "0212", "0314", "0412", "0512", "0610", "0710", "0808", "0907", "1006", "1105", "1205", "1304"], //2059
        [0, "0202", "0303", "0401", "0501", "0530", "0628", "0727", "0826", "0924", "1024", "1123", "1223"], //2060
        [3, "0121", "0220", "0322", "0420", "0519", "0618", "0717", "0815", "0914", "1013", "1112", "1212", "1311"], //2061
        [0, "0209", "0311", "0410", "0509", "0607", "0707", "0805", "0903", "1003", "1101", "1201", "1231"], //2062
        [7, "0129", "0228", "0330", "0428", "0528", "0626", "0726", "0824", "0922", "1022", "1120", "1220", "1318"], //2063
        [0, "0217", "0318", "0417", "0516", "0615", "0714", "0813", "0911", "1010", "1109", "1208", "1307"], //2064
        [0, "0205", "0307", "0406", "0505", "0604", "0704", "0802", "0901", "0930", "1029", "1128", "1227"], //2065
        [5, "0126", "0224", "0326", "0424", "0524", "0623", "0722", "0821", "0919", "1019", "1117", "1217", "1315"], //2066
        [0, "0214", "0315", "0414", "0513", "0612", "0711", "0810", "0909", "1008", "1107", "1206", "1305"], //2067
        [0, "0203", "0304", "0402", "0502", "0531", "0629", "0729", "0828", "0926", "1026", "1125", "1224"], //2068
        [4, "0123", "0221", "0323", "0421", "0521", "0619", "0718", "0817", "0915", "1015", "1114", "1214", "1312"], //2069
        [0, "0211", "0312", "0411", "0510", "0609", "0708", "0806", "0905", "1004", "1103", "1203", "1301"], //2070
        [8, "0131", "0302", "0331", "0430", "0529", "0628", "0727", "0825", "0924", "1023", "1122", "1221", "1320"], //2071
        [0, "0219", "0320", "0418", "0518", "0616", "0716", "0814", "0912", "1012", "1110", "1210", "1308"], //2072
        [0, "0207", "0309", "0407", "0507", "0605", "0704", "0803", "0901", "0930", "1030", "1128", "1228"], //2073
        [6, "0126", "0225", "0326", "0425", "0525", "0623", "0723", "0821", "0920", "1019", "1118", "1217", "1316"], //2074
        [0, "0214", "0316", "0414", "0514", "0612", "0712", "0811", "0909", "1009", "1107", "1207", "1305"], //2075
        [0, "0204", "0304", "0403", "0502", "0601", "0630", "0730", "0828", "0927", "1027", "1125", "1225"], //2076
        [0, "0123", "0222", "0323", "0422", "0521", "0620", "0719", "0818", "0917", "1017", "1115", "1215"], //2077
        [0, "0113", "0212", "0313", "0412", "0511", "0609", "0709", "0807", "0906", "1006", "1104", "1204"], //2078
        [0, "0103", "0201", "0303", "0401", "0501", "0530", "0628", "0728", "0826", "0925", "1024", "1123"], //2079
        [3, "1223", "0122", "0220", "0321", "0419", "0519", "0617", "0716", "0815", "0913", "1012", "1111", "1211"], //2080
        [0, "0110", "0208", "0310", "0409", "0508", "0607", "0706", "0804", "0903", "1002", "1031", "1130"], //2081
        [7, "1230", "0128", "0227", "0329", "0428", "0527", "0625", "0725", "0823", "0922", "1021", "1119", "1219"], //2082
        [0, "0118", "0216", "0318", "0417", "0516", "0615", "0714", "0813", "0911", "1011", "1109", "1209"], //2083
        [0, "0107", "0206", "0306", "0405", "0504", "0603", "0703", "0801", "0831", "0929", "1029", "1127"], //2084
        [5, "1227", "0125", "0224", "0325", "0423", "0523", "0622", "0721", "0820", "0919", "1018", "1117", "1216"], //2085
        [0, "0115", "0213", "0315", "0413", "0512", "0611", "0710", "0809", "0908", "1007", "1106", "1206"], //2086
        [0, "0104", "0203", "0304", "0403", "0502", "0531", "0630", "0729", "0828", "0926", "1026", "1125"], //2087
        [4, "1225", "0123", "0222", "0322", "0421", "0520", "0618", "0718", "0816", "0914", "1014", "1113", "1213"], //2088
        [0, "0111", "0210", "0312", "0410", "0510", "0608", "0707", "0806", "0904", "1003", "1102", "1202"], //2089
        [8, "1231", "0130", "0301", "0331", "0429", "0529", "0627", "0726", "0825", "0923", "1022", "1121", "1221"], //2090
        [0, "0119", "0218", "0320", "0418", "0518", "0616", "0716", "0814", "0913", "1012", "1110", "1210"], //2091
        [0, "0108", "0207", "0308", "0406", "0506", "0605", "0704", "0803", "0901", "1001", "1030", "1129"], //2092
        [6, "1228", "0126", "0225", "0327", "0425", "0525", "0623", "0723", "0822", "0920", "1020", "1118", "1218"], //2093
        [0, "0116", "0214", "0316", "0414", "0514", "0612", "0712", "0811", "0909", "1009", "1108", "1207"], //2094
        [0, "0106", "0204", "0306", "0404", "0503", "0602", "0701", "0731", "0829", "0928", "1028", "1127"], //2095
        [4, "1226", "0125", "0223", "0324", "0422", "0521", "0620", "0719", "0817", "0916", "1016", "1115", "1214"], //2096
        [0, "0113", "0212", "0313", "0412", "0511", "0609", "0709", "0807", "0905", "1005", "1104", "1203"], //2097
        [0, "0102", "0201", "0303", "0401", "0501", "0530", "0628", "0727", "0826", "0924", "1024", "1122"], //2098
        [2, "1222", "0121", "0220", "0321", "0420", "0520", "0618", "0717", "0816", "0914", "1013", "1112", "1211"] //2099
    ];
    var MINYEAR = 1900;

    // 公历转农历        
    return function(solar = new Date()) {
        var offset = solar.getFullYear() - MINYEAR;
        // 超出范围
        if (offset <= 0 || offset >= MAPPING.length) {
            throw new Error('Specified date range is invalid.');
        };

        //查找范围内的农历数据
        var data = findLunar(solar, offset, 0, 13, false);
        //如果没有找到，则找前一年的，因为农历在公历之前，并且不会超过一年，查一年就可以了
        data = data || findLunar(solar, offset - 1, 12, 99, true);

        //还是没有找到，表示超出范围
        if (!data) return false;

        //农历初一对应公历的哪一天
        var firstDay = new Date(data.year, data.month - 1, data.day);
        var day = solarDayDiff(solar, firstDay) + 1;

        //返回的农历结果
        var result = {
            leap: data.leapMonth > 0 && data.leapMonth + 1 == data.lunarMonth,
            year: data.lunarYear,
            month: data.leapMonth > 0 && data.lunarMonth > data.leapMonth ? data.lunarMonth - 1 : data.lunarMonth,
            day: day,
            leapMonth: data.leapMonth
        };

        return result;
    };

})()

console.log(solarToLunar())
