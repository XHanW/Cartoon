import imgUrl from '../static/product.json';

export const navs = ["首页", "热播动漫", "经典动漫", "动漫相关", "会员业务", "关于"];
export const menus = {
  首页: "",
  热播动漫: {
    first: [
      "犬夜叉第56集",
      "《海贼王》下周休刊",
      "全职猎人最终集",
      "火影忍者番外篇",
      "赢者第516集",
      "赢者第516集"
    ],
    second: [
      "《女子落语》今夏将有新动向",
      "四格漫画《琴浦小姐》完结",
      "全职猎人最终集",
      "《可塑性记忆》前传漫画4",
      "漫画《小小起司猫》6"
    ],
    third: [
      "海贼王第2345集",
      "《魔法使的新娘》作者新作",
      "火影忍者番外篇",
      "赢者第516集"
    ]
  },
  经典动漫: {
    first: [
      "《PUPA》短篇新作即将开载",
      "海贼王第2345集",
      "《海贼王》784话图透",
      "火影忍者番外篇",
      "《不可思议少女》续作连载再开",
      "《海贼王》784话图透"
    ],
    second: [
      "犬夜叉第56集",
      "《海贼王》下周休刊",
      "全职猎人最终集",
      "火影忍者番外篇",
      "赢者第516集"
    ],
    third: [
      "《一周的朋友》新连载预告",
      "《xxxHOLiC?戻》时隔九月将继续连载",
      "四格漫画《琴浦小姐》完结",
      "赢者第516集",
      "赢者第516集"
    ]
  },
  动漫相关: {
    first: [
      "绪方波子氏新漫画「卟嘶卟嘶」已发售",
      "《bleach》作者生病休刊一期",
      "赢者第516集",
      "久住昌之新作秋叶原热销中"
    ],
    second: [
      "犬夜叉第56集",
      "《早安、荆棘公主》1卷 “既有悬疑又有恐怖还有恋爱”",
      "全职猎人最终集"],
    third: [

    ]
  },
  会员业务: {
    first: [
      "犬夜叉第56集",
      "《早安、荆棘公主》1卷 “既有悬疑又有恐怖还有恋爱”",
      "全职猎人最终集"],
    second: [
      "绪方波子氏新漫画「卟嘶卟嘶」已发售",
      "《bleach》作者生病休刊一期",
      "赢者第516集",
      "久住昌之新作秋叶原热销中"
    ],
    third: [

    ]
  },
  关于: {}
};

export const contents = [["犬夜叉", "海贼王", "火影忍者", "宫崎骏"], ["经典动漫", "热播动漫", "完结漫画", "温馨治愈"]];
export const imgs = [imgUrl.s1, imgUrl.s2, imgUrl.s3, imgUrl.s4];
export const title = { news: ["公告", "动态"], server: ["头像", "资料", "会员功能"] }
