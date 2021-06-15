
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V12a.748.748 0 01.177-.483l.025-.03L10.36.71a2.244 2.244 0 011.593-.707A.454.454 0 0112 0l.041.002h.032a2.232 2.232 0 011.568.71l10.155 10.775.026.031a.72.72 0 01.123.203l.012.034c.03.086.043.166.043.245v9.75A2.252 2.252 0 0121.75 24H2.25zm19.5-1.5a.75.75 0 00.75-.75V18h-5.25v4.5h4.5zm-6 0v-9.75h-7.5v9.75h7.5zM1.5 21.75c0 .414.336.75.75.75h4.5V18H1.5v3.75zm21-5.25v-3.75h-5.25v3.75h5.25zm-15.75 0v-3.75H1.5v3.75h5.25zm14.763-5.25L17.25 6.727v4.523h4.263zm-5.763 0V5.136l-3-3.183v9.297h3zm-4.5 0V1.953l-3 3.183v6.114h3zm-4.5 0V6.727L2.488 11.25H6.75z"}})])
          )
        }
      }
    