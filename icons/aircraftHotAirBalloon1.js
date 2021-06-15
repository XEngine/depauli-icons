
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
            children.concat([_c('path',{attrs:{"d":"M14.25 22.5A2.252 2.252 0 0112 20.25v-.77a14.61 14.61 0 01-3.673-.645l-2.891 1.732A3.053 3.053 0 013.87 21H1.54a1.542 1.542 0 01-1.249-2.437l2.491-3.49c-.68-.95-1.102-2.002-1.235-3.073H.75a.75.75 0 010-1.5h.797c.132-1.082.546-2.113 1.234-3.074L.29 3.936a1.53 1.53 0 01-.267-1.147 1.53 1.53 0 01.622-1.001c.263-.188.571-.287.893-.288H3.87c.552 0 1.093.15 1.566.434l2.891 1.731A14.735 14.735 0 0112.75 3C18.953 3 24 6.701 24 11.25c0 2.591-1.677 5.043-4.5 6.598v2.402a2.252 2.252 0 01-2.25 2.25h-3zm-.75-2.25c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-1.702a14.526 14.526 0 01-4.5.932v.77zm-11.99-.814a.041.041 0 00.009.057l2.351.007c.28 0 .554-.076.794-.22l1.903-1.14c-1.062-.514-2.007-1.16-2.776-1.9L1.51 19.436zM3.06 12c.543 3.396 4.692 6 9.69 6 5.376 0 9.75-3.028 9.75-6.75S18.126 4.5 12.75 4.5c-4.998 0-9.147 2.604-9.69 6h3.69a.75.75 0 010 1.5H3.06zM1.541 3a.036.036 0 00-.022.007.04.04 0 00-.016.026c-.002.011 0 .02.007.03L3.791 6.26c.769-.74 1.714-1.386 2.776-1.9L4.665 3.221A1.54 1.54 0 003.87 3H1.541z"}})])
          )
        }
      }
    