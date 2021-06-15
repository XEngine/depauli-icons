
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V7.243a3.72 3.72 0 011.099-2.651L4.59 1.099A3.727 3.727 0 017.243 0H21.75A2.252 2.252 0 0124 2.25v19.5A2.252 2.252 0 0121.75 24H2.25zm19.5-1.5a.75.75 0 00.75-.75V2.25a.75.75 0 00-.75-.75H19.5v5.25A2.252 2.252 0 0117.25 9h-7.5A2.252 2.252 0 017.5 6.75V1.5h-.257c-.601 0-1.167.234-1.592.659L2.16 5.652c-.426.425-.66.99-.66 1.591V21.75c0 .414.336.75.75.75H4.5v-8.25A2.252 2.252 0 016.75 12h10.5a2.252 2.252 0 012.25 2.25v8.25h2.25zm-3.75 0v-8.25a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v8.25h12zM9 6.75c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75V1.5H9v5.25z"}}),_c('path',{attrs:{"d":"M15.75 6a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM8.25 16.5a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM8.25 19.5a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5z"}})])
          )
        }
      }
    