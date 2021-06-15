
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 01-.75-.75v-9a.75.75 0 011.5 0V15H6c1.8 0 3.324 1.268 3.675 3h3.075a3.754 3.754 0 013.75 3.75.75.75 0 01-.75.75H1.5v.75a.75.75 0 01-.75.75zm14.121-3a2.264 2.264 0 00-2.121-1.5H6A.75.75 0 016 18h2.118A2.262 2.262 0 006 16.5H1.5V21h13.371zM19.5 21a.75.75 0 010-1.5h2.25a.75.75 0 00.75-.75V5.121c0-.197-.08-.39-.219-.53l-2.872-2.872a.748.748 0 00-.53-.219H8.25a.75.75 0 00-.75.75V12A.75.75 0 016 12V2.25A2.252 2.252 0 018.25 0h10.629c.601 0 1.165.234 1.59.658l2.872 2.872c.425.425.659.99.659 1.591V18.75A2.252 2.252 0 0121.75 21H19.5z"}})])
          )
        }
      }
    