
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM6.75 24a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5H6.75zM20.251 24a.75.75 0 010-1.5h2.999a.75.75 0 010 1.5h-2.999zM20.25 19.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM15 19.5a.75.75 0 01-.75-.75V7.505a.75.75 0 01.75-.75h2.092l-5.088-5.256L7.105 6.75H9a.75.75 0 01.75.75v11.25a.75.75 0 01-.75.75H6.75a.75.75 0 010-1.5h1.5V8.25H5.87c-.643 0-.879-.425-.936-.556-.056-.131-.207-.592.23-1.063L10.899.488A1.473 1.473 0 0112.011 0a1.489 1.489 0 011.109.496l5.934 6.129c.448.489.296.949.239 1.078-.057.129-.292.551-.934.551H15.75V18h1.5a.75.75 0 010 1.5H15zM.75 19.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    