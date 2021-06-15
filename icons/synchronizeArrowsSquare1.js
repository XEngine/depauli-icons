
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
            children.concat([_c('path',{attrs:{"d":"M7.501 21.25a3.754 3.754 0 01-3.75-3.75v-4.942l-2.47 2.47a.744.744 0 01-1.06 0 .752.752 0 010-1.061l3.75-3.75a.46.46 0 01.057-.047.7.7 0 01.212-.122.735.735 0 01.734.122.382.382 0 01.056.046l3.75 3.75a.752.752 0 01-.53 1.281.743.743 0 01-.53-.22l-2.47-2.47V17.5a2.252 2.252 0 002.25 2.25h8.25a.75.75 0 010 1.5H7.501zM19.501 14.5a.752.752 0 01-.559-.252l-3.721-3.721a.744.744 0 010-1.06.749.749 0 011.06 0l2.47 2.47V7a2.252 2.252 0 00-2.25-2.25h-8.25a.75.75 0 010-1.5h8.25A3.754 3.754 0 0120.251 7v4.936l2.47-2.47a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-3.736 3.736a.733.733 0 01-.544.238z"}})])
          )
        }
      }
    