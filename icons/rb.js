
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
            children.concat([_c('path',{attrs:{"d":"M1.502 4.503a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM1.502 21.003a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM10.502 16.503a.754.754 0 01-.643-.364l-1.607-2.678v2.292a.75.75 0 01-1.5 0v-3.712a.608.608 0 01-.002-.038l.002-.04V8.291l-.002-.038a.75.75 0 01.75-.75h1.127a2.629 2.629 0 012.625 2.625 2.627 2.627 0 01-1.763 2.478l1.656 2.761c.103.172.133.373.084.568s-.17.358-.342.461a.742.742 0 01-.385.107zm-1.875-5.25c.62 0 1.125-.505 1.125-1.125s-.505-1.125-1.125-1.125h-.375v2.25h.375zM13.502 16.503a.75.75 0 01-.75-.794v-3.671a.608.608 0 010-.081V8.29a.75.75 0 01.748-.788H15a2.252 2.252 0 012.25 2.25v.75a2.225 2.225 0 01-.576 1.497c.37.409.576.937.576 1.5v.75a2.252 2.252 0 01-2.25 2.25h-1.448a.326.326 0 01-.05.004zM15 15a.75.75 0 00.75-.75v-.75a.75.75 0 00-.75-.75h-.748L15 15zm0-3.75a.751.751 0 00.75-.749v-.748a.75.75 0 00-.75-.75h-.748v2.247H15z"}})])
          )
        }
      }
    