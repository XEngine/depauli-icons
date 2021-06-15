
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
            children.concat([_c('path',{attrs:{"d":"M13.5 23.25a.75.75 0 01-.75-.75c-.026-.057-.292-.25-.75-.25s-.724.193-.753.27c.003.394-.334.73-.747.73s-.75-.336-.75-.75c0-.77.602-1.418 1.5-1.655V18.75H1.5a.75.75 0 010-1.5h.75v-12c-.827 0-1.5-.673-1.5-1.5v-1.5c0-.827.673-1.5 1.5-1.5h19.5c.827 0 1.5.673 1.5 1.5v1.5c0 .827-.673 1.5-1.5 1.5v12h.75a.75.75 0 010 1.5h-9.75v2.095c.898.237 1.5.885 1.5 1.655a.75.75 0 01-.75.75zm6.75-6v-12H3.75v12h16.5zm-18-13.5h19.5v-1.5H2.25v1.5z"}}),_c('path',{attrs:{"d":"M15 9.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM15 12.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM9 14.25a3.754 3.754 0 01-3.75-3.75c0-2.068 1.682-3.75 3.75-3.75s3.75 1.682 3.75 3.75A3.754 3.754 0 019 14.25zm0-6c-1.241 0-2.25 1.009-2.25 2.25S7.759 12.75 9 12.75s2.25-1.009 2.25-2.25S10.241 8.25 9 8.25z"}})])
          )
        }
      }
    