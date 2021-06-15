
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V18a11.93 11.93 0 013.392-8.351 11.933 11.933 0 017.858-3.622V.75a.752.752 0 01.987-.712l4.5 1.5a.753.753 0 01.493.539.747.747 0 01-.2.703l-1.5 1.5c-.141.142-.33.22-.53.22s-.389-.078-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l.642-.642-2.362-.787v4.236a11.935 11.935 0 017.858 3.622A11.932 11.932 0 0124 18v3.75A2.252 2.252 0 0121.75 24H2.25zm19.5-1.5a.75.75 0 00.75-.75V18c0-5.79-4.71-10.5-10.5-10.5S1.5 12.211 1.5 18v3.75c0 .414.336.75.75.75H7.5V18c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5v4.5h5.25zm-6.75 0V18c0-1.654-1.346-3-3-3s-3 1.346-3 3v4.5h6z"}})])
          )
        }
      }
    