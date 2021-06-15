
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
            children.concat([_c('path',{attrs:{"d":"M3.01 22.503a2.252 2.252 0 01-2.25-2.25v-16.5a2.252 2.252 0 012.25-2.25h18a2.252 2.252 0 012.25 2.25v16.5a2.252 2.252 0 01-2.25 2.25h-18zm-.75-2.25c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V7.503H2.26v12.75zm19.5-14.25v-2.25a.75.75 0 00-.75-.75h-18a.75.75 0 00-.75.75v2.25h19.5z"}}),_c('path',{attrs:{"d":"M12.01 19.503a5.256 5.256 0 01-5.25-5.25 5.256 5.256 0 015.25-5.25 5.256 5.256 0 015.25 5.25v1.5a2.252 2.252 0 01-2.25 2.25 2.254 2.254 0 01-2.171-1.659 2.252 2.252 0 01-3.079-2.091 2.252 2.252 0 012.25-2.25 2.252 2.252 0 012.25 2.25v1.5a.75.75 0 001.5 0v-1.5a3.754 3.754 0 00-3.75-3.75 3.754 3.754 0 00-3.75 3.75 3.754 3.754 0 003.75 3.75.75.75 0 010 1.5zm0-6a.75.75 0 100 1.5.75.75 0 000-1.5z"}})])
          )
        }
      }
    