
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
            children.concat([_c('path',{attrs:{"d":"M6 23.25c-3.308 0-6-2.692-6-6s2.692-6 6-6h.099l-2-3H2.25a.75.75 0 010-1.5h6a.75.75 0 010 1.5H5.901l2 3H9c1.174 0 2.296.561 3 1.5l1.117 1.489 1.515-5.491A2.719 2.719 0 0117.25 6.75h3c1.241 0 2.25-1.009 2.25-2.25s-1.009-2.25-2.25-2.25h-6a.75.75 0 010-1.5h6C22.318.75 24 2.432 24 4.5s-1.682 3.75-3.75 3.75h-3c-.546 0-1.028.368-1.171.894l-1.824 6.611.445.595a2.26 2.26 0 001.8.9H21c1.654 0 3 1.346 3 3s-1.346 3-3 3H6zm0-10.5c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5h15c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5h-4.5a3.768 3.768 0 01-3-1.5l-2.7-3.6a2.26 2.26 0 00-1.8-.9H6z"}}),_c('path',{attrs:{"d":"M9 20.25a.753.753 0 01-.6-.3l-2.25-3a.75.75 0 011.2-.9l2.25 3a.75.75 0 01-.6 1.2z"}})])
          )
        }
      }
    