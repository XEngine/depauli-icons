
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
            children.concat([_c('path',{attrs:{"d":"M2.575 23.5a.75.75 0 01-.75-.75v-9a.75.75 0 011.5 0v.75h4.5c1.8 0 3.324 1.268 3.675 3h3.075a3.754 3.754 0 013.75 3.75.75.75 0 01-.75.75H3.325v.75a.75.75 0 01-.75.75zm14.122-3a2.264 2.264 0 00-2.121-1.5h-6.75a.75.75 0 010-1.5h2.118A2.264 2.264 0 007.825 16h-4.5v4.5h13.372zM16.825 14.5a5.256 5.256 0 01-5.25-5.25c0-2.021 1.454-4.618 2.079-5.641C14.421 2.354 15.853.25 16.825.25c1.483 0 5.25 6 5.25 9a5.256 5.256 0 01-5.25 5.25zm0-12.651c-.913.821-3.75 4.953-3.75 7.401 0 2.068 1.682 3.75 3.75 3.75s3.75-1.682 3.75-3.75c0-2.448-2.837-6.58-3.75-7.401z"}}),_c('path',{attrs:{"d":"M16.825 11.5a2.252 2.252 0 01-2.25-2.25.75.75 0 011.5 0c0 .414.337.75.75.75a.75.75 0 010 1.5z"}})])
          )
        }
      }
    