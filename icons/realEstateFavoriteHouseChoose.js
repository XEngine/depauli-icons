
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
            children.concat([_c('path',{attrs:{"d":"M23.016 23.998a.75.75 0 01-.75-.75v-.743a3.707 3.707 0 00-3.703-3.703h-1.485a.75.75 0 01-.75-.75V11.37a.736.736 0 00-1.471.001v8.908a.754.754 0 01-.75.75.751.751 0 01-.561-.252l-1.917-2.157a.798.798 0 00-1.052-.04.788.788 0 00-.109 1.113l2.719 3.056a.751.751 0 01-.56 1.248.752.752 0 01-.56-.251L9.33 20.668a2.3 2.3 0 01-.53-1.699 2.276 2.276 0 01.824-1.547 2.295 2.295 0 013.106.18l.627.705V11.37c0-.597.233-1.158.656-1.58a2.221 2.221 0 011.579-.654 2.24 2.24 0 012.235 2.234v5.932h.735a5.209 5.209 0 015.203 5.203v.743a.749.749 0 01-.749.75z"}}),_c('path',{attrs:{"d":"M5.2 15.09a2.239 2.239 0 01-2.231-2.24V8.398a.75.75 0 011.5 0v4.454a.736.736 0 00.733.738h5.937a.75.75 0 010 1.5H5.2z"}}),_c('path',{attrs:{"d":"M.75 7.666a.752.752 0 01-.749-.789c.01-.2.098-.384.247-.518L6.678.572a2.231 2.231 0 012.99-.001l3.693 3.323V1.72a.75.75 0 011.5 0v3.523l1.24 1.115a.75.75 0 01-1.004 1.115l-1.476-1.328a.748.748 0 01-.04-.036L8.665 1.687a.732.732 0 00-.983 0l-6.43 5.787a.75.75 0 01-.502.192z"}})])
          )
        }
      }
    