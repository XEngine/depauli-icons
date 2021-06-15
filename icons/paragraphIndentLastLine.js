
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
            children.concat([_c('path',{attrs:{"d":"M.75 2.248a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.75zM.75 6.748a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.75zM.75 11.248a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.75zM15.75 23.248a.743.743 0 01-.53-.22l-2.989-2.989A.742.742 0 0112 19.5l.001-.029a.743.743 0 01.183-.462.358.358 0 01.035-.041l3-3a.744.744 0 011.06 0 .752.752 0 010 1.061l-1.722 1.722H21c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5h-2.25a.75.75 0 010-1.501H21c1.654 0 3 1.346 3 3s-1.346 3-3 3h-6.438l1.718 1.718a.752.752 0 010 1.061.746.746 0 01-.53.219zM.75 15.748a.75.75 0 010-1.5H12a.75.75 0 010 1.5H.75zM.75 20.248a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5H.75z"}})])
          )
        }
      }
    