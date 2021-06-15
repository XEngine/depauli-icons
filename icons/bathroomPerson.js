
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
            children.concat([_c('path',{attrs:{"d":"M12.004 17.82c-2.068 0-3.75-1.682-3.75-3.75s1.682-3.75 3.75-3.75 3.75 1.682 3.75 3.75-1.682 3.75-3.75 3.75zm0-6c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25 2.25-1.009 2.25-2.25-1.009-2.25-2.25-2.25z"}}),_c('path',{attrs:{"d":"M6.807 23.82a.749.749 0 01-.743-.857 6.031 6.031 0 015.084-5.084 6.06 6.06 0 01.861-.062c2.96 0 5.51 2.212 5.932 5.146a.752.752 0 01-.742.857H6.807zm9.44-1.5c-.627-1.765-2.34-3.003-4.241-3.003-.214 0-.43.016-.643.046a4.543 4.543 0 00-3.601 2.957h8.485z"}}),_c('circle',{attrs:{"cx":"12","cy":"7.32","r":"1.125"}}),_c('circle',{attrs:{"cx":"9","cy":"4.32","r":"1.125"}}),_c('circle',{attrs:{"cx":"6","cy":"7.32","r":"1.125"}}),_c('circle',{attrs:{"cx":"3","cy":"10.32","r":"1.125"}}),_c('circle',{attrs:{"cx":"12","cy":"1.32","r":"1.125"}}),_c('circle',{attrs:{"cx":"15","cy":"4.32","r":"1.125"}}),_c('circle',{attrs:{"cx":"18","cy":"7.32","r":"1.125"}}),_c('circle',{attrs:{"cx":"21","cy":"10.32","r":"1.125"}})])
          )
        }
      }
    