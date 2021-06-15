
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
            children.concat([_c('path',{attrs:{"d":"M12 10.499c-2.895 0-5.25-2.355-5.25-5.25S9.105-.001 12-.001s5.25 2.355 5.25 5.25-2.355 5.25-5.25 5.25zm0-9c-2.068 0-3.75 1.682-3.75 3.75s1.682 3.75 3.75 3.75 3.75-1.682 3.75-3.75-1.682-3.75-3.75-3.75z"}}),_c('path',{attrs:{"d":"M12 5.999a.75.75 0 01-.671-1.085l.75-1.5a.745.745 0 011.005-.335.75.75 0 01.336 1.006l-.75 1.5a.744.744 0 01-.67.414zM.75 23.999a.75.75 0 010-1.5h3.879a2.231 2.231 0 01-.129-.75v-4.5a2.252 2.252 0 012.25-2.25H9v-.75a2.252 2.252 0 012.25-2.25h1.5a2.252 2.252 0 012.25 2.25v.75h2.25a2.252 2.252 0 012.25 2.25v4.5c0 .259-.044.511-.129.75h3.879a.75.75 0 010 1.5H.75zm6-7.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75H6.75zm6.75-1.5v-.75a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75l3 .75z"}}),_c('path',{attrs:{"d":"M9.75 20.999a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM14.25 20.999a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    