
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
            children.concat([_c('path',{attrs:{"d":"M2.26 15.003a2.252 2.252 0 01-2.25-2.25v-10.5A2.252 2.252 0 012.26.003h13.5a2.252 2.252 0 012.25 2.25v10.5a.75.75 0 01-1.5 0v-6.75h-15v6.75c0 .414.336.75.75.75h4.5c.414 0 .75.336.75.75s-5.25.75-5.25.75zm14.25-10.5v-2.25a.75.75 0 00-.75-.75H2.26a.75.75 0 00-.75.75v2.25h15zM15.01 24.003c-.827 0-1.5-.673-1.5-1.5v-1.5c0-.827.673-1.5 1.5-1.5h7.5c.827 0 1.5.673 1.5 1.5v1.5c0 .827-.673 1.5-1.5 1.5h-7.5zm0-1.5h7.5v-1.5h-7.5v1.5z"}}),_c('path',{attrs:{"d":"M9.76 18.003a.75.75 0 010-1.5h2.689l-5.845-5.845c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l5.845 5.845v-2.689a.75.75 0 011.5 0v4.5a.744.744 0 01-.047.258l-.006.017a.763.763 0 01-.412.419l-.026.01a.733.733 0 01-.259.047H9.76z"}})])
          )
        }
      }
    