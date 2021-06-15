
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
            children.concat([_c('path',{attrs:{"d":"M4.5 16.917a.754.754 0 01-.742-.856l.53-3.712a.754.754 0 01.212-.424l9.546-9.546c.567-.567 1.32-.879 2.121-.879s1.555.312 2.121.879a3.003 3.003 0 010 4.243l-9.546 9.546a.757.757 0 01-.424.212l-3.712.53a.775.775 0 01-.106.007zm.884-1.634l2.475-.353 9.369-9.369a1.501 1.501 0 00-2.122-2.122l-9.369 9.369-.353 2.475z"}}),_c('path',{attrs:{"d":"M2.25 22.5A2.252 2.252 0 010 20.25V9.75A2.252 2.252 0 012.25 7.5h3a.75.75 0 010 1.5h-3a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-1.5a.75.75 0 010-1.5h1.5A2.252 2.252 0 0124 9.75v10.5a2.252 2.252 0 01-2.25 2.25H2.25z"}}),_c('path',{attrs:{"d":"M12.75 18.75a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5zM15.75 15a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5z"}})])
          )
        }
      }
    