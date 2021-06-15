
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
            children.concat([_c('path',{attrs:{"d":"M.75 20.25a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6z"}}),_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5H6c1.654 0 3-1.346 3-3s-1.346-3-3-3H.75a.75.75 0 010-1.5H19.5c2.481 0 4.5 2.019 4.5 4.5S21.981 24 19.5 24H.75zm18.75-1.5c1.654 0 3-1.346 3-3s-1.346-3-3-3H18v6h1.5zm-3 0v-6H15v6h1.5zm-3 0v-6H9.348c.734.818 1.152 1.885 1.152 3s-.419 2.182-1.152 3H13.5zM6.75 12a.75.75 0 010-1.5h3V8.185C7.621 7.823 6 5.938 6 3.75A2.252 2.252 0 003.75 1.5a.75.75 0 010-1.5A3.754 3.754 0 017.5 3.75c0 1.387.942 2.569 2.25 2.904V1.5H9A.75.75 0 019 0h3a.75.75 0 010 1.5h-.75v5.154A2.995 2.995 0 0013.5 3.75 3.754 3.754 0 0117.25 0a.75.75 0 010 1.5A2.252 2.252 0 0015 3.75c0 2.188-1.621 4.073-3.75 4.435V10.5h3a.75.75 0 010 1.5h-7.5z"}})])
          )
        }
      }
    