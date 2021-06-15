
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
            children.concat([_c('path',{attrs:{"d":"M12.75 20.498a.75.75 0 010-1.5 9.76 9.76 0 008.626-5.212c-.793.461-1.7.712-2.626.712-2.895 0-5.25-2.355-5.25-5.25s2.355-5.25 5.25-5.25S24 6.353 24 9.248c0 6.203-5.047 11.25-11.25 11.25zm6-15c-2.068 0-3.75 1.682-3.75 3.75s1.682 3.75 3.75 3.75 3.75-1.682 3.75-3.75-1.682-3.75-3.75-3.75zM.75 20.498a.75.75 0 010-1.5 9.76 9.76 0 008.626-5.212c-.793.461-1.7.712-2.626.712-2.895 0-5.25-2.355-5.25-5.25s2.355-5.25 5.25-5.25S12 6.353 12 9.248c0 6.203-5.047 11.25-11.25 11.25zm6-15C4.682 5.498 3 7.18 3 9.248s1.682 3.75 3.75 3.75 3.75-1.682 3.75-3.75-1.682-3.75-3.75-3.75z"}})])
          )
        }
      }
    