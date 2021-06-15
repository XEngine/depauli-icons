
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
            children.concat([_c('path',{attrs:{"d":"M14.401 13.5a2.252 2.252 0 01-2.25-2.25v-4.5c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v4.5c0 1.241-1.01 2.25-2.25 2.25zm0-7.5a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75zM8.401 13.5a2.252 2.252 0 01-2.25-2.25v-4.5a2.252 2.252 0 012.25-2.25h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0v-.75A.75.75 0 019.155 9h.746a.75.75 0 01.75.75v1.5c0 1.241-1.01 2.25-2.25 2.25z"}}),_c('path',{attrs:{"d":"M.905 24a.75.75 0 01-.75-.75v-7.433c-.002-.021-.004-.041-.004-.062 0-.021.001-.042.004-.062V2.312a.43.43 0 010-.124V.75a.75.75 0 011.5 0v.75h20.596c.401 0 .778.157 1.061.44a1.493 1.493 0 01.312 1.66l-2.397 5.403 2.4 5.391c.163.365.173.773.03 1.148a1.492 1.492 0 01-1.4.963h-20.6v6.745a.754.754 0 01-.752.75zm21.35-8.995l-2.4-5.391a1.502 1.502 0 010-1.218l2.396-5.4L1.655 3v12.005h20.6z"}})])
          )
        }
      }
    