
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.75zM15 19.5a.75.75 0 01-.75-.75V7.505a.75.75 0 01.75-.75h2.092l-5.088-5.256L7.105 6.75H9a.75.75 0 01.75.75v11.25a.75.75 0 01-.75.75H.75a.75.75 0 010-1.5h7.5V8.25H5.869c-.643 0-.878-.426-.935-.556-.057-.13-.208-.592.229-1.063L10.898.488A1.473 1.473 0 0112.011 0a1.489 1.489 0 011.109.496l5.934 6.129c.448.489.296.949.239 1.078-.057.129-.292.551-.934.551H15.75V18h7.5a.75.75 0 010 1.5H15z"}})])
          )
        }
      }
    