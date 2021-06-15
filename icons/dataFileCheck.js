
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
            children.concat([_c('path',{attrs:{"d":"M17.25 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75S24 13.528 24 17.25 20.972 24 17.25 24zm0-12C14.355 12 12 14.355 12 17.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25S20.145 12 17.25 12z"}}),_c('path',{attrs:{"d":"M16.416 20.429a1.483 1.483 0 01-1.059-.44l-1.5-1.5a.744.744 0 010-1.06.749.749 0 011.06 0l1.5 1.5 2.906-3.874a.753.753 0 011.049-.151c.332.249.399.72.151 1.051l-2.905 3.874a1.493 1.493 0 01-1.202.6zM3.75 16.5a.75.75 0 01-.75-.75v-9a.75.75 0 011.5 0v4.189L5.909 9.53A2.235 2.235 0 017.5 8.872c.601 0 1.166.234 1.59.658l.582.582a.748.748 0 001.174-.144l.357-.598a.752.752 0 011.371.2.744.744 0 01-.083.568l-.358.6a2.236 2.236 0 01-1.93 1.092 2.233 2.233 0 01-1.59-.657l-.581-.581a.748.748 0 00-1.061 0L4.5 13.061V15h3.75a.75.75 0 010 1.5h-4.5z"}}),_c('path',{attrs:{"d":"M2.25 21A2.252 2.252 0 010 18.75V2.25A2.252 2.252 0 012.25 0h10.629c.601 0 1.165.234 1.59.658l2.872 2.872c.425.425.659.99.659 1.591V7.5a.75.75 0 01-1.5 0V5.121c0-.197-.08-.39-.219-.53l-2.872-2.872a.748.748 0 00-.53-.219H2.25a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75H7.5a.75.75 0 010 1.5H2.25z"}})])
          )
        }
      }
    