
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
            children.concat([_c('path',{attrs:{"d":"M8.247 24a2.252 2.252 0 01-2.25-2.25v-6a.75.75 0 011.5 0v6c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-15a.75.75 0 00-.75-.75h-7.5a.75.75 0 010-1.5h7.5a2.252 2.252 0 012.25 2.25v15a2.252 2.252 0 01-2.25 2.25h-13.5z"}}),_c('path',{attrs:{"d":"M12.747 10.5a.75.75 0 010-1.5h7.503a.75.75 0 010 1.5h-7.503zM10.497 15a.75.75 0 010-1.5h9.753a.75.75 0 010 1.5h-9.753zM10.5 19.5a.75.75 0 010-1.5h9.75a.75.75 0 010 1.5H10.5zM5.25 13.5a.75.75 0 01-.75-.75V7.061L.531 3.091A1.812 1.812 0 011.811 0h9.878c.484 0 .938.188 1.28.53a1.8 1.8 0 01.531 1.281c0 .483-.188.938-.53 1.281L9 7.061V9.75c0 .2-.078.389-.22.53l-3 3a.741.741 0 01-.53.22zm-3.439-12a.312.312 0 00-.22.531l4.19 4.189c.141.141.219.33.219.53v4.189l1.5-1.5V6.75c0-.2.078-.389.22-.53l4.189-4.189a.309.309 0 00.091-.22.309.309 0 00-.311-.311H1.811z"}})])
          )
        }
      }
    