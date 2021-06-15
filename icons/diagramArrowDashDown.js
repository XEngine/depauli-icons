
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
            children.concat([_c('path',{attrs:{"d":"M20.25 1.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM6.75 1.5a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5H6.75zM.75 1.5a.75.75 0 010-1.5h2.999a.75.75 0 010 1.5H.75zM.75 6a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM11.992 24.005a1.505 1.505 0 01-1.108-.487l-5.938-6.137c-.447-.488-.296-.949-.239-1.078.057-.13.293-.553.934-.553H8.25V6h-1.5a.75.75 0 010-1.5H9a.75.75 0 01.75.75V16.5a.75.75 0 01-.75.75H6.907l5.068 5.239 4.917-5.239H15a.75.75 0 01-.75-.75V5.25A.75.75 0 0115 4.5h2.25a.75.75 0 010 1.5h-1.5v9.75h2.381c.641 0 .877.424.934.554.057.13.209.591-.227 1.063l-5.737 6.144c-.273.311-.68.494-1.109.494zM20.25 6a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    