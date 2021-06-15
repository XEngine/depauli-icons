
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V5.25A2.252 2.252 0 012.25 3H6V.75a.75.75 0 011.5 0V3h9V.75a.75.75 0 011.5 0V3h3.75A2.252 2.252 0 0124 5.25v16.5A2.252 2.252 0 0121.75 24H2.25zm-.75-2.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V10.5h-21v11.25zM22.5 9V5.25a.75.75 0 00-.75-.75H18V6a.75.75 0 01-1.5 0V4.5h-9V6A.75.75 0 016 6V4.5H2.25a.75.75 0 00-.75.75V9h21z"}}),_c('path',{attrs:{"d":"M12 21a.75.75 0 01-.75-.75h-.75a.75.75 0 010-1.5h2.031a.589.589 0 00.543-.824.586.586 0 00-.324-.317l-2.062-.825a2.081 2.081 0 01-1.315-1.945 2.082 2.082 0 01.614-1.478 2.075 2.075 0 011.262-.6v-.011a.75.75 0 011.5 0h.75a.75.75 0 010 1.5h-2.033a.593.593 0 00-.222 1.142l2.064.825c.52.209.926.607 1.145 1.121s.225 1.083.016 1.601a2.08 2.08 0 01-1.721 1.3v.011A.747.747 0 0112 21z"}})])
          )
        }
      }
    