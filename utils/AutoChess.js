class CheceItem {
  constructor(x, y) {
    this.location = [x, y]
    //被选中状态
    this.status = false
    this.hero = null;
  }
  xuanzhong() {
    this.status = true
  }
  likai() {
    this.status = false
  }
  addHero(hero) {
    this.hero = hero
  }
  delHero() {
    this.hero = null
  }
}
class Chess {
  constructor(npc_dota_hero) {
    this.npc = npc_dota_hero
    //棋子状态 0-等待 1-战斗
    this.status=0
    //棋子相对位置
    this.row=null;
    this.col=null;
  }
  move(row,col){
    this.row=row;
    this.col=col
  }
  
}

//1费
//斧王
function npc_dota_hero_axe() {
  this.id = 2;
  this.cid = 1;
  this.name = "斧王";
  this.chess_spec = ["兽人"];
  this.chess_class = ["战士"];
  this.rare = 1;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//魅惑魔女
function npc_dota_hero_enchantress() {
  this.id = 58;
  this.cid = 2;
  this.name = "魅惑魔女";
  this.chess_spec = ["野兽"];
  this.chess_class = ["德鲁伊"];
  this.rare = 1;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//食人魔法师
function npc_dota_hero_ogre_magi() {
  this.id = 84;
  this.cid = 3;
  this.name = "食人魔法师";
  this.chess_spec = ["食人魔"];
  this.chess_class = ["法师"];
  this.rare = 1;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//巨牙海民
function npc_dota_hero_tusk() {
  this.id = 100;
  this.cid = 4;
  this.name = "巨牙海民";
  this.chess_spec = ["野兽"];
  this.chess_class = ["战士"];
  this.rare = 1;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//卓尔游侠
function npc_dota_hero_drow_ranger() {
  this.id = 6;
  this.cid = 5;
  this.name = "卓尔游侠";
  this.chess_spec = ["亡灵"];
  this.chess_class = ["猎人"];
  this.rare = 1;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//赏金猎人
function npc_dota_hero_bounty_hunter() {
  this.id = 62;
  this.cid = 6;
  this.name = "赏金猎人";
  this.chess_spec = ["地精"];
  this.chess_class = ["刺客"];
  this.rare = 1;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//发条技师
function npc_dota_hero_rattletrap() {
  this.id = 51;
  this.cid = 7;
  this.name = "发条技师";
  this.chess_spec = ["地精"];
  this.chess_class = ["工匠"];
  this.rare = 1;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//暗影萨满
function npc_dota_hero_shadow_shaman() {
  this.id = 27;
  this.cid = 8;
  this.name = "暗影萨满";
  this.chess_spec = ["巨魔"];
  this.chess_class = ["萨满祭司"];
  this.rare = 1;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//蝙蝠骑士
function npc_dota_hero_batrider() {
  this.id = 65;
  this.cid = 9;
  this.name = "蝙蝠骑士";
  this.chess_spec = ["巨魔"];
  this.chess_class = ["骑士"];
  this.rare = 1;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//修补匠
function npc_dota_hero_tinker() {
  this.id = 34;
  this.cid = 10;
  this.name = "修补匠";
  this.chess_spec = ["地精"];
  this.chess_class = ["工匠"];
  this.rare = 1;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//敌法师
function npc_dota_hero_antimage() {
  this.id = 1
  this.cid = 11;
  this.name = "敌法师";
  this.chess_spec = ["精灵"];
  this.chess_class = ["恶魔猎手"];
  this.rare = 1;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//小小
function npc_dota_hero_tiny() {
  this.id = 19;
  this.cid = 12;
  this.name = "小小";
  this.chess_spec = ["元素"];
  this.chess_class = ["战士"];
  this.rare = 1;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//2费
//水晶室女
function npc_dota_hero_crystal_maiden() {
  this.id = 5;
  this.cid = 13;
  this.name = "水晶室女";
  this.chess_spec = ["人类"];
  this.chess_class = ["法师"];
  this.rare = 2;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//兽王
function npc_dota_hero_beastmaster() {
  this.id = 38;
  this.cid = 14;
  this.name = "兽王";
  this.chess_spec = ["兽人"];
  this.chess_class = ["猎人"];
  this.rare = 2;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//剑圣
function npc_dota_hero_juggernaut() {
  this.id = 8;
  this.cid = 15;
  this.name = "剑圣";
  this.chess_spec = ["兽人"];
  this.chess_class = ["战士"];
  this.rare = 2;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//伐木机
function npc_dota_hero_shredder() {
  this.id = 98;
  this.cid = 16;
  this.name = "伐木机";
  this.chess_spec = ["地精"];
  this.chess_class = ["工匠"];
  this.rare = 2;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//痛苦女王
function npc_dota_hero_queenofpain() {
  this.id = 39;
  this.cid = 17;
  this.name = "痛苦女王";
  this.chess_spec = ["恶魔"];
  this.chess_class = ["刺客"];
  this.rare = 2;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//精灵龙
function npc_dota_hero_puck() {
  this.id = 13;
  this.cid = 18;
  this.name = "精灵龙";
  this.chess_spec = ["精灵", "龙"];
  this.chess_class = ["法师"];
  this.rare = 2;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//巫医
function npc_dota_hero_witch_doctor() {
  this.id = 30;
  this.cid = 19;
  this.name = "巫医";
  this.chess_spec = ["巨魔"];
  this.chess_class = ["术士"];
  this.rare = 2;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//鱼人守卫
function npc_dota_hero_slardar() {
  this.id = 28;
  this.cid = 20;
  this.name = "鱼人守卫";
  this.chess_spec = ["娜迦"];
  this.chess_class = ["战士"];
  this.rare = 2;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//混沌骑士
function npc_dota_hero_chaos_knight() {
  this.id = 81;
  this.cid = 21;
  this.name = "混沌骑士";
  this.chess_spec = ["恶魔"];
  this.chess_class = ["骑士"];
  this.rare = 2;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//树精卫士
function npc_dota_hero_treant() {
  this.id = 83;
  this.cid = 22;
  this.name = "树精卫士";
  this.chess_spec = ["精灵"];
  this.chess_class = ["德鲁伊"];
  this.rare = 2;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//月之骑士
function npc_dota_hero_luna() {
  this.id = 48;
  this.cid = 23;
  this.name = "月之骑士";
  this.chess_spec = ["精灵"];
  this.chess_class = ["骑士"];
  this.rare = 2;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//先知
function npc_dota_hero_furion() {
  this.id = 53;
  this.cid = 24;
  this.name = "先知";
  this.chess_spec = ["精灵"];
  this.chess_class = ["德鲁伊"];
  this.rare = 2;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//变体精灵
function npc_dota_hero_morphling() {
  this.id = 10;
  this.cid = 25;
  this.name = "变体精灵";
  this.chess_spec = ["元素"];
  this.chess_class = ["刺客"];
  this.rare = 2;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//3费
//狼人
function npc_dota_hero_lycan() {
  this.id = 77;
  this.cid = 26;
  this.name = "狼人";
  this.chess_spec = ["人类", "野兽"];
  this.chess_class = ["战士"];
  this.rare = 3;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//剧毒术士
function npc_dota_hero_venomancer() {
  this.id = 40;
  this.cid = 27;
  this.name = "剧毒术士";
  this.chess_spec = ["野兽"];
  this.chess_class = ["术士"];
  this.rare = 3;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//全能骑士
function npc_dota_hero_omniknight() {
  this.id = 57;
  this.cid = 28;
  this.name = "全能骑士";
  this.chess_spec = ["人类"];
  this.chess_class = ["骑士"];
  this.rare = 3;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//闪电幽魂
function npc_dota_hero_razor() {
  this.id = 15;
  this.cid = 29;
  this.name = "闪电幽魂";
  this.chess_spec = ["元素"];
  this.chess_class = ["法师"];
  this.rare = 3;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//风行者
function npc_dota_hero_windrunner() {
  this.id = 21;
  this.cid = 30;
  this.name = "风行者";
  this.chess_spec = ["精灵"];
  this.chess_class = ["猎人"];
  this.rare = 3;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//幻影刺客
function npc_dota_hero_phantom_assassin() {
  this.id = 44;
  this.cid = 31;
  this.name = "幻影刺客";
  this.chess_spec = ["精灵"];
  this.chess_class = ["刺客"];
  this.rare = 3;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//死亡骑士
function npc_dota_hero_abaddon() {
  this.id = 102;
  this.cid = 32;
  this.name = "死亡骑士";
  this.chess_spec = ["亡灵"];
  this.chess_class = ["骑士"];
  this.rare = 3;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//沙王
function npc_dota_hero_sand_king() {
  this.id = 16;
  this.cid = 33;
  this.name = "沙王";
  this.chess_spec = ["野兽"];
  this.chess_class = ["刺客"];
  this.rare = 3;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//鱼人夜行者
function npc_dota_hero_slark() {
  this.id = 93;
  this.cid = 34;
  this.name = "鱼人夜行者";
  this.chess_spec = ["娜迦"];
  this.chess_class = ["刺客"];
  this.rare = 3;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//狙击手
function npc_dota_hero_sniper() {
  this.id = 35;
  this.cid = 35;
  this.name = "狙击手";
  this.chess_spec = ["矮人"];
  this.chess_class = ["猎人"];
  this.rare = 3;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//冥界亚龙
function npc_dota_hero_viper() {
  this.id = 47;
  this.cid = 36;
  this.name = "冥界亚龙";
  this.chess_spec = ["龙"];
  this.chess_class = ["刺客"];
  this.rare = 3;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//影魔
function npc_dota_hero_nevermore() {
  this.id = 11;
  this.cid = 37;
  this.name = "影魔";
  this.chess_spec = ["恶魔"];
  this.chess_class = ["术士"];
  this.rare = 3;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//秀逗魔导士
function npc_dota_hero_lina() {
  this.id = 25;
  this.cid = 38;
  this.name = "秀逗魔导士";
  this.chess_spec = ["人类"];
  this.chess_class = ["法师"];
  this.rare = 3;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//灵魂守卫
function npc_dota_hero_terrorblade() {
  this.id = 109;
  this.cid = 39;
  this.name = "灵魂守卫";
  this.chess_spec = ["恶魔"];
  this.chess_class = ["恶魔猎手"];
  this.rare = 3;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//4费
//末日使者
function npc_dota_hero_doom_bringer() {
  this.id = 69;
  this.cid = 40;
  this.name = "末日使者";
  this.chess_spec = ["恶魔"];
  this.chess_class = ["战士"];
  this.rare = 4;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//海军上将
function npc_dota_hero_kunkka() {
  this.id = 23;
  this.cid = 41;
  this.name = "海军上将";
  this.chess_spec = ["人类"];
  this.chess_class = ["战士"];
  this.rare = 4;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//巨魔战将
function npc_dota_hero_troll_warlord() {
  this.id = 95;
  this.cid = 42;
  this.name = "巨魔战将";
  this.chess_spec = ["巨魔"];
  this.chess_class = ["战士"];
  this.rare = 4;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//光之守卫
function npc_dota_hero_keeper_of_the_light() {
  this.id = 90;
  this.cid = 43;
  this.name = "光之守卫";
  this.chess_spec = ["人类"];
  this.chess_class = ["法师"];
  this.rare = 4;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//死灵法师
function npc_dota_hero_necrolyte() {
  this.id = 36;
  this.cid = 44;
  this.name = "死灵法师";
  this.chess_spec = ["亡灵"];
  this.chess_class = ["术士"];
  this.rare = 4;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//圣堂刺客
function npc_dota_hero_templar_assassin() {
  this.id = 46;
  this.cid = 45;
  this.name = "圣堂刺客";
  this.chess_spec = ["精灵"];
  this.chess_class = ["刺客"];
  this.rare = 4;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//炼金术士
function npc_dota_hero_alchemist() {
  this.id = 73;
  this.cid = 46;
  this.name = "炼金术士";
  this.chess_spec = ["地精"];
  this.chess_class = ["术士"];
  this.rare = 4;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//干扰者
function npc_dota_hero_disruptor() {
  this.id = 87;
  this.cid = 47;
  this.name = "干扰者";
  this.chess_spec = ["兽人"];
  this.chess_class = ["萨满祭司"];
  this.rare = 4;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//蛇发女妖
function npc_dota_hero_medusa() {
  this.id = 94;
  this.cid = 48;
  this.name = "蛇发女妖";
  this.chess_spec = ["娜迦"];
  this.chess_class = ["猎人"];
  this.rare = 4;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//龙骑士
function npc_dota_hero_dragon_knight() {
  this.id = 49;
  this.cid = 49;
  this.name = "龙骑士";
  this.chess_spec = ["人类", "龙"];
  this.chess_class = ["骑士"];
  this.rare = 4;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//利爪德鲁伊
function npc_dota_hero_lone_druid() {
  this.id = 80;
  this.cid = 50;
  this.name = "利爪德鲁伊";
  this.chess_spec = ["野兽"];
  this.chess_class = ["德鲁伊"];
  this.rare = 4;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//5费
//矮人直升机
function npc_dota_hero_gyrocopter() {
  this.id = 72;
  this.cid = 51;
  this.name = "矮人直升机";
  this.chess_spec = ["矮人"];
  this.chess_class = ["工匠"];
  this.rare = 5;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//巫妖
function npc_dota_hero_lich() {
  this.id = 31;
  this.cid = 52;
  this.name = "巫妖";
  this.chess_spec = ["亡灵"];
  this.chess_class = ["法师"];
  this.rare = 5;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//潮汐猎人
function npc_dota_hero_tidehunter() {
  this.id = 29;
  this.cid = 53;
  this.name = "潮汐猎人";
  this.chess_spec = ["娜迦"];
  this.chess_class = ["猎人"];
  this.rare = 5;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//谜团
function npc_dota_hero_enigma() {
  this.id = 33;
  this.cid = 54;
  this.name = "谜团";
  this.chess_spec = ["元素"];
  this.chess_class = ["术士"];
  this.rare = 5;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}
//地精工程师
function npc_dota_hero_techies() {
  this.id = 105;
  this.cid = 55;
  this.name = "地精工程师";
  this.chess_spec = ["地精"];
  this.chess_class = ["工匠"];
  this.rare = 5;
  this.skill = [];
  this.lvl = 1;
  var herodata = {
    lvl1: {

    },
    lvl2: {

    },
    lvl3: {

    }
  }
}

var ChessList = [
  // 0费到5费
  [],//没有0费
  [npc_dota_hero_axe, npc_dota_hero_enchantress, npc_dota_hero_ogre_magi, npc_dota_hero_tusk, npc_dota_hero_drow_ranger, npc_dota_hero_bounty_hunter, npc_dota_hero_rattletrap, npc_dota_hero_shadow_shaman, npc_dota_hero_batrider, npc_dota_hero_tinker, npc_dota_hero_antimage, npc_dota_hero_tiny],
  [npc_dota_hero_crystal_maiden, npc_dota_hero_beastmaster, npc_dota_hero_juggernaut, npc_dota_hero_shredder, npc_dota_hero_queenofpain, npc_dota_hero_puck, npc_dota_hero_witch_doctor, npc_dota_hero_slardar, npc_dota_hero_chaos_knight, npc_dota_hero_treant, npc_dota_hero_luna, npc_dota_hero_furion, npc_dota_hero_morphling],
  [npc_dota_hero_lycan, npc_dota_hero_venomancer, npc_dota_hero_omniknight, npc_dota_hero_razor, npc_dota_hero_windrunner, npc_dota_hero_phantom_assassin, npc_dota_hero_abaddon, npc_dota_hero_sand_king, npc_dota_hero_slark, npc_dota_hero_sniper, npc_dota_hero_viper, npc_dota_hero_nevermore, npc_dota_hero_lina, npc_dota_hero_terrorblade],
  [npc_dota_hero_doom_bringer, npc_dota_hero_kunkka, npc_dota_hero_troll_warlord, npc_dota_hero_keeper_of_the_light, npc_dota_hero_necrolyte, npc_dota_hero_templar_assassin, npc_dota_hero_alchemist, npc_dota_hero_disruptor, npc_dota_hero_medusa, npc_dota_hero_dragon_knight, npc_dota_hero_lone_druid],
  [npc_dota_hero_gyrocopter, npc_dota_hero_lich, npc_dota_hero_tidehunter, npc_dota_hero_enigma, npc_dota_hero_techies]
]
var cooperate = {
  "兽人": {
    "2": "(2) 兽人：所有友方兽人的最大生命值+250",
    "4": "(4) 兽人：所有友方兽人的最大生命值+250"
  },
  "野兽": {
    "2": "(2) 野兽：所有友方攻击力+10%，召唤物继承此效果",
    "4": "(4) 野兽：所有友方攻击力+15%，召唤物继承此效果",
    "6": "(6) 野兽：所有友方攻击力+20%，召唤物继承此效果"
  },
  "亡灵": {
    "2": "(2) 亡灵：所有地方的护甲-5",
    "4": "(4) 亡灵：所有地方的护甲-7",
  },
  "地精": {
    "3": "(3) 地精：使一个随机友方的护甲+15，生命恢复+10",
    "6": "(6) 地精：使所有友方地精的护甲+15，生命恢复+10",
  },
  "食人魔": {
    "1": "食人魔：自身最大生命值+10%"
  },
  "巨魔": {
    "2": "(2) 巨魔：所有友方巨魔的攻击速度+35%",
    "4": "(4) 巨魔：所有友方巨魔的攻击速度+30%",
  },
  "精灵": {
    "3": "(3) 精灵：所有友方精灵获得25%闪避",
    "6": "(6) 精灵：所有友方精灵获得25%闪避",
  },
  "元素": {
    "2": "(2) 元素：",
    "4": "(4) 元素：",
  },
  "人类": {
    "2": "(2) 人类：所有友方人类攻击20%概率使敌人沉默4秒",
    "4": "(4) 人类：所有友方人类攻击25%概率使敌人沉默4秒",
    "6": "(6) 人类：所有友方人类攻击30%概率使敌人沉默4秒",
  },
  "龙": {
    "3": "(3) 龙：所有友方龙的初始魔法值为100"
  },
  "娜迦": {
    "2": "(2) 娜迦：所有友方的魔法抗性+20",
    "4": "(4) 娜迦：所有友方的魔法抗性+40",
  },
  "矮人": {
    "1": "矮人：自身攻击距离+30%"
  },
  "恶魔": {
    "1": "恶魔：己方场上有唯一一种恶魔时触发此效果，攻击时对敌人额外造成50%的纯粹伤害",
  },
  "战士": {
    "3": "(3) 战士：所有友方战士的护甲+7",
    "6": "(6) 战士：所有友方战士的护甲+8",
    "9": "(9) 战士：所有友方战士的护甲+9",
  },
  "刺客": {
    "3": "(3) 刺客：所有友方刺客的攻击有10%概率造成3.5倍伤害",
    "6": "(6) 刺客：所有友方刺客的攻击有20%概率造成4.5倍伤害",
  },
  "法师": {
    "3": "(3) 法师：所有敌方的魔法抗性-40",
    "6": "(6) 法师：所有敌方的魔法抗性-60",
  },
  "猎人": {
    "3": "(3) 猎人：所有友方猎人的攻击力+30%",
    "6": "(6) 猎人：所有友方猎人的攻击力+30%",
  },
  "骑士": {
    "2": "(2) 骑士：所有友方骑士有25%时间减伤护盾保护",
    "4": "(4) 骑士：所有友方骑士有35%时间减伤护盾保护",
    "6": "(6) 骑士：所有友方骑士有45%时间减伤护盾保护"
  },
  "术士": {
    "3": "(3) 术士：所有友方获得20%吸血",
    "6": "(6) 术士：所有友方获得30%吸血"
  },
  "工匠": {
    "2": "(2) 工匠：所有友方工匠的生命恢复速度+25",
    "4": "(4) 工匠：所有友方工匠的生命恢复速度+25",
  },
  "德鲁伊": {
    "2": "(2) 德鲁伊：场上有2个相同的⭐德鲁伊可以升级为⭐⭐德鲁伊",
    "4": "(4) 德鲁伊：场上有4个相同的⭐⭐德鲁伊可以升级为⭐⭐⭐德鲁伊"
  },
  "恶魔猎手": {
    "1": "(1) 恶魔猎手：此棋子视为敌方的一个恶魔",
    "2": "(2) 恶魔猎手：所有友方恶魔视为一个种类",
  },
  "萨满祭司": {
    "2": "(2) 萨满祭司：战斗前将一名随机敌方棋子变成青蛙，持续6秒"
  }
}

module.exports = {
  CheceItem,
  ChessList,
  Chess,
  chessClass: {
    npc_dota_hero_axe, npc_dota_hero_enchantress, npc_dota_hero_ogre_magi, npc_dota_hero_tusk, npc_dota_hero_drow_ranger, npc_dota_hero_bounty_hunter, npc_dota_hero_rattletrap, npc_dota_hero_shadow_shaman, npc_dota_hero_batrider, npc_dota_hero_tinker, npc_dota_hero_antimage, npc_dota_hero_tiny, npc_dota_hero_crystal_maiden, npc_dota_hero_beastmaster, npc_dota_hero_juggernaut, npc_dota_hero_shredder, npc_dota_hero_queenofpain, npc_dota_hero_puck, npc_dota_hero_witch_doctor, npc_dota_hero_slardar, npc_dota_hero_chaos_knight, npc_dota_hero_treant, npc_dota_hero_luna, npc_dota_hero_furion, npc_dota_hero_morphling, npc_dota_hero_lycan, npc_dota_hero_venomancer, npc_dota_hero_omniknight, npc_dota_hero_razor, npc_dota_hero_windrunner, npc_dota_hero_phantom_assassin, npc_dota_hero_abaddon, npc_dota_hero_sand_king, npc_dota_hero_slark, npc_dota_hero_sniper, npc_dota_hero_viper, npc_dota_hero_nevermore, npc_dota_hero_lina, npc_dota_hero_terrorblade, npc_dota_hero_doom_bringer, npc_dota_hero_kunkka, npc_dota_hero_troll_warlord, npc_dota_hero_keeper_of_the_light, npc_dota_hero_necrolyte, npc_dota_hero_templar_assassin, npc_dota_hero_alchemist, npc_dota_hero_disruptor, npc_dota_hero_medusa, npc_dota_hero_dragon_knight, npc_dota_hero_lone_druid, npc_dota_hero_gyrocopter, npc_dota_hero_lich, npc_dota_hero_tidehunter, npc_dota_hero_enigma, npc_dota_hero_techies
  },
  cooperate,
  getPrototype(heroStats) {
    console.log(heroStats)
    for (var i = 0; i < ChessList.length; i++) {
      for (var j = 0; j < ChessList[i].length; j++) {
        var test = new ChessList[i][j]();
        var id = test.id;
        ChessList[i][j].prototype = heroStats[id];
      }
    }
  }
}