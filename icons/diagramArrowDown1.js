
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
            children.concat([_c('path',{attrs:{"d":"M.75 1.5a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.75zM11.992 24.005a1.5 1.5 0 01-1.111-.49L4.946 17.38c-.448-.489-.296-.948-.239-1.078.057-.129.292-.552.934-.552H8.25V6H.75a.75.75 0 010-1.5H9a.75.75 0 01.75.75V16.5a.75.75 0 01-.75.75H6.908l5.067 5.238 4.917-5.238H15a.75.75 0 01-.75-.75V5.25A.75.75 0 0115 4.5h8.25a.75.75 0 010 1.5h-7.5v9.75h2.381c.642 0 .877.425.934.555.057.131.208.592-.229 1.063L13.1 23.512c-.272.31-.679.493-1.108.493z"}})])
          )
        }
      }
    