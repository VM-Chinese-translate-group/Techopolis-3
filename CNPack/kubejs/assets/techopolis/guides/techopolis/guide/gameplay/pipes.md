---
navigation:
    title: 管道
    icon: 'immersiveengineering:sorter'
    parent: gameplay.md
item_ids:
    - 'immersiveengineering:sorter'
    - 'immersiveengineering:fluid_sorter'
    - 'mekanism:basic_logistical_transporter'
    - 'mekanism:elite_logistical_transporter'
    - 'mekanism:advanced_logistical_transporter'
    - 'mekanism:ultimate_logistical_transporter'
    - 'mekanism:basic_mechanical_pipe'
    - 'mekanism:advanced_mechanical_pipe'
    - 'mekanism:elite_mechanical_pipe'
    - 'mekanism:ultimate_mechanical_pipe'
---

# 物品传输

通用机械的物流管道是首选的物品管道。物品分配器可以过滤输入的物品并选择输出的方向。物品分配器的各面有不同的颜色，与其GUI所显示的一致。只需在GUI中将物品加入相应的颜色处即可设置这种物品的输出面。

为物品分配器输入物品的管道须将连接类型改为输入，否则可能会出现问题。
<GameScene zoom="3" interactive={true}>
  <ImportStructure src="../assets/structures/scenes/item_router.nbt" />
</GameScene>

# 流体传输

通用机械的机械管道是最佳的流体传输解决方案。与物品管道一样，通过流体分配器可以将不同流体分发到不同位置。

为流体分配器输入物品的管道须将连接类型改为输入，否则可能会出现问题。
<GameScene zoom="3" interactive={true}>
  <ImportStructure src="../assets/structures/scenes/fluid_router.nbt" />
</GameScene>
