
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
            children.concat([_c('path',{attrs:{"d":"M18 7.5c-2.068 0-3.75-1.682-3.75-3.75S15.932 0 18 0s3.75 1.682 3.75 3.75S20.068 7.5 18 7.5zm0-6c-1.241 0-2.25 1.009-2.25 2.25S16.76 6 18 6s2.25-1.009 2.25-2.25S19.241 1.5 18 1.5zM15.75 24a.748.748 0 01-.746-.676l-.682-6.824H12.75a.75.75 0 01-.75-.75V13.5c0-3.308 2.692-6 6-6s6 2.692 6 6v2.25a.75.75 0 01-.75.75h-1.571l-.683 6.825a.747.747 0 01-.746.675h-4.5zm3.822-1.5l.683-6.825A.746.746 0 0121 15h1.5v-1.5c0-2.481-2.019-4.5-4.5-4.5s-4.5 2.019-4.5 4.5V15H15c.387 0 .708.291.746.676l.683 6.824h3.143zM2.25 21a.748.748 0 01-.711-.513l-1.5-4.5A.751.751 0 01.75 15h8.292l.74-2.465a.745.745 0 01.933-.504.747.747 0 01.504.934l-2.25 7.5A.746.746 0 018.25 21h-6zm5.442-1.5l.9-3H1.791l1 3h4.901z"}}),_c('circle',{attrs:{"cx":"2.625","cy":"22.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"7.875","cy":"22.875","r":"1.125"}})])
          )
        }
      }
    