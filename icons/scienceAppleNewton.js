
      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M11.57 19c-2.068 0-3.75-1.682-3.75-3.75s1.682-3.75 3.75-3.75 3.75 1.682 3.75 3.75S13.638 19 11.57 19zm0-6c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25 2.25-1.009 2.25-2.25S12.811 13 11.57 13zM17.394 24.019a.747.747 0 01-.583-.278 6.766 6.766 0 00-.983-.983 6.66 6.66 0 00-4.243-1.511c-.235 0-.473.012-.708.037a6.71 6.71 0 00-4.544 2.458.749.749 0 01-1.056.109.75.75 0 01-.109-1.054 8.196 8.196 0 015.554-3.005c.287-.03.579-.045.867-.045 1.904 0 3.697.639 5.185 1.847.44.357.844.762 1.202 1.202a.749.749 0 01-.582 1.223zM12.818 9.567a1.698 1.698 0 01-.509-.079 2.285 2.285 0 00-.692-.135 4.718 4.718 0 00-.798.151.764.764 0 01-.091.02c-.095.014-.19.021-.284.021-1.232 0-2.312-1.169-2.568-2.78-.156-.984.043-1.971.532-2.642.346-.474.808-.768 1.336-.849a2.01 2.01 0 011.365.298.91.91 0 00.479.136.936.936 0 00.491-.141 1.99 1.99 0 011.341-.295c.541.083 1.006.378 1.353.854.489.671.688 1.658.53 2.638-.171 1.065-.731 2.017-1.462 2.485a1.874 1.874 0 01-1.023.318zm-.039-1.505a.222.222 0 00.037.003.437.437 0 00.215-.079c.371-.237.688-.824.79-1.46.094-.586-.006-1.167-.261-1.518-.074-.102-.196-.228-.354-.252a.512.512 0 00-.327.078 2.421 2.421 0 01-2.572.005.524.524 0 00-.351-.082c-.151.026-.276.168-.336.251-.256.35-.356.932-.263 1.521.142.893.686 1.516 1.086 1.516l.027-.001a6.167 6.167 0 011.053-.189.675.675 0 01.095-.002c.39.007.784.078 1.161.209zM12.202 2.951a.743.743 0 01-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53L12.873.47a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-1.201 1.201a.744.744 0 01-.53.22z"}})])
          )
        }
      }
    