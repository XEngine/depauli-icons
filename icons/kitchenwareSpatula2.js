
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
            children.concat([_c('path',{attrs:{"d":"M2.719 23.541c-.596 0-1.157-.23-1.581-.649-.435-.435-.669-1-.669-1.601s.233-1.167.658-1.591l9.56-9.534-.263-.263a2.257 2.257 0 01-.364-2.701l3.418-5.985a1.503 1.503 0 011.568-.732c4.466.518 7.965 4.027 8.486 8.53.106.585-.189 1.206-.738 1.521l-5.982 3.418c-.337.191-.72.292-1.109.292a2.24 2.24 0 01-1.591-.655l-.264-.264-9.538 9.555c-.425.425-.99.659-1.591.659zm-.532-2.78a.752.752 0 00.531 1.28c.2 0 .389-.078.53-.22l2.649-2.655-1.055-1.055-2.655 2.65zm4.771-2.655l5.829-5.84-1.039-1.039-5.842 5.826 1.052 1.053zm7.829-16.143a.055.055 0 00-.012.001l-3.412 5.98a.753.753 0 00.122.899l3.687 3.685c.14.14.329.217.53.217.13 0 .258-.033.37-.097l5.977-3.415c-.447-3.845-3.415-6.823-7.222-7.266l-.04-.004z"}}),_c('path',{attrs:{"d":"M15.446 10.374a.743.743 0 01-.53-.22l-1.061-1.061a.744.744 0 010-1.06.749.749 0 011.06 0l1.061 1.061a.744.744 0 010 1.06.741.741 0 01-.53.22z"}})])
          )
        }
      }
    