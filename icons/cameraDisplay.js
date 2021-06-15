
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
            children.concat([_c('path',{attrs:{"d":"M2.25 21.75A2.252 2.252 0 010 19.5v-12a2.252 2.252 0 012.25-2.25H4.5V4.5a.75.75 0 011.5 0v.75h2.536l.878-1.756a2.24 2.24 0 012.013-1.244h5.646c.858 0 1.629.476 2.013 1.244l.878 1.756h1.786A2.252 2.252 0 0124 7.5v12a2.252 2.252 0 01-2.25 2.25H2.25zm0-15a.75.75 0 00-.75.75v12c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-12a.75.75 0 00-.75-.75H19.5a.746.746 0 01-.671-.415l-1.085-2.171a.747.747 0 00-.671-.414h-5.646a.746.746 0 00-.671.415l-1.085 2.17A.746.746 0 019 6.75H2.25z"}}),_c('path',{attrs:{"d":"M4.5 18.75c-.827 0-1.5-.673-1.5-1.5v-6c0-.827.673-1.5 1.5-1.5H12c.827 0 1.5.673 1.5 1.5v6c0 .827-.673 1.5-1.5 1.5H4.5zm0-1.5H12v-6H4.5v6zM18 12.75a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5H18zM18 17.25a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5H18z"}})])
          )
        }
      }
    