
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
            children.concat([_c('path',{attrs:{"d":"M21 24a3.004 3.004 0 01-2.974-3.382l-2.111-.845A3.01 3.01 0 0113.5 21c-1.654 0-3-1.346-3-3s1.346-3 3-3c.794 0 1.544.311 2.104.863l2.52-1.512A3.004 3.004 0 0121 10.5c1.654 0 3 1.346 3 3s-1.346 3-3 3a2.988 2.988 0 01-2.104-.863l-2.52 1.512a2.935 2.935 0 01.098 1.233l2.111.845A3.01 3.01 0 0121 18c1.654 0 3 1.346 3 3s-1.346 3-3 3zm0-4.5a1.496 1.496 0 00-1.5 1.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm-7.5-3c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5a1.496 1.496 0 001.283-2.268.315.315 0 01-.021-.04A1.486 1.486 0 0013.5 16.5zm6.238-2.194c.268.429.743.694 1.262.694.827 0 1.5-.673 1.5-1.5S21.827 12 21 12s-1.5.673-1.5 1.5a1.485 1.485 0 00.221.774l.017.032zM3.75 7.5a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5H3.75zM3.75 12a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5H3.75zM3.75 16.5a.75.75 0 010-1.5H7.5a.75.75 0 010 1.5H3.75z"}}),_c('path',{attrs:{"d":"M2.25 21A2.252 2.252 0 010 18.75V2.25A2.252 2.252 0 012.25 0h10.629c.601 0 1.165.234 1.59.658l2.872 2.872c.425.425.659.99.659 1.591V7.5a.75.75 0 01-1.5 0V5.121c0-.197-.08-.39-.219-.53l-2.872-2.872a.748.748 0 00-.53-.219H2.25a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75H7.5a.75.75 0 010 1.5H2.25z"}})])
          )
        }
      }
    