const colors = [
    "red", "green", "blue", "yellow", "purple", "cyan", "white",
    "orange", "magenta", "light_blue", "lime", "pink", "gray",
    "light_gray", "black", "brown"
];

const woodRoots = [
    "plank", "log", "wood", "stripped_log", "stripped_wood"
];

const bambooRoots = [
    "bamboo", "stripped_bamboo"
];

const stoneRoots = [
    "stone", "braid", "polished", "tile", "prismarine", "dark_prismarine",
    "cracked_stone", "brick", "cobblestone", "marble", "chaotic", "mosaic",
    "triple", "encased", "road", "asteroid"
];

const typeGroups = {
    "dirt": "泥土",
    "grass_block": "草方块",
    "crafting_table": "工作台",
    "tall_grass": "高草丛",
    "short_grass": "矮草丛",
    "poppy": "虞美人",
    "dandelion": "蒲公英",
    "leaves": "树叶",
    "sapling": "树苗",
    "apple": "苹果",
    "spray_can": "喷漆罐"
};

const colorTranslations = {
    "red": "红色",
    "green": "绿色",
    "blue": "蓝色",
    "yellow": "黄色",
    "purple": "紫色",
    "cyan": "青色",
    "white": "白色",
    "orange": "橙色",
    "magenta": "品红色",
    "light_blue": "淡蓝色",
    "lime": "黄绿色",
    "pink": "粉红色",
    "gray": "灰色",
    "light_gray": "淡灰色",
    "black": "黑色",
    "brown": "棕色"
};

RecipeViewerEvents.groupEntries('item', event => {

    // 1. 按颜色分组
    colors.forEach(color => {
        let cnColor = colorTranslations[color] || color;

        let woodFilters = woodRoots.map(root => {
            return { itemNamespace: 'colors', itemPathStartsWith: `${color}_${root}` };
        });
        event.group(woodFilters, `contained:colors_${color}_wood`, `颜色：${cnColor}木`);

        let bambooFilters = bambooRoots.map(root => {
            return { itemNamespace: 'colors', itemPathStartsWith: `${color}_${root}` };
        });
        event.group(bambooFilters, `contained:colors_${color}_bamboo`, `颜色：${cnColor}竹`);

        let stoneFilters = stoneRoots.map(root => {
            return { itemNamespace: 'colors', itemPathStartsWith: `${color}_${root}` };
        });
        event.group(stoneFilters, `contained:colors_${color}_stone`, `颜色：${cnColor}石头`);

    });

    // 2. 按类型分组
    Object.keys(typeGroups).forEach(typeSuffix => {
        event.group(
            { itemNamespace: 'colors', itemPathEndsWith: typeSuffix },

            `contained:colors_type_${typeSuffix}`,

            `颜色：${typeGroups[typeSuffix]}`
        );
    });

});