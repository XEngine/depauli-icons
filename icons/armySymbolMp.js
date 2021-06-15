
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
            children.concat([_c('path',{attrs:{"d":"M2.25 20A2.252 2.252 0 010 17.75v-12A2.252 2.252 0 012.25 3.5h19.5A2.252 2.252 0 0124 5.75v12A2.252 2.252 0 0121.75 20H2.25zm0-15a.75.75 0 00-.75.75v12c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-12a.75.75 0 00-.75-.75H2.25z"}}),_c('path',{attrs:{"d":"M14.25 16.25a.75.75 0 01-.75-.75V8a.75.75 0 01.75-.75H15c1.654 0 3 1.346 3 3s-1.346 3-3 3v2.25a.75.75 0 01-.75.75zm.75-4.5c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5v3zM11.25 16.25a.75.75 0 01-.75-.75v-4.792l-.857 1.428c-.135.225-.381.364-.643.364s-.508-.139-.643-.364L7.5 10.708V15.5a.75.75 0 01-1.5 0V8a.752.752 0 01.75-.75c.262 0 .509.14.643.364L9 10.292l1.607-2.678a.755.755 0 01.842-.337c.325.09.551.387.551.723v7.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    