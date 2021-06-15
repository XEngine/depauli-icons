
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
            children.concat([_c('path',{attrs:{"d":"M18.75 10.25A3.754 3.754 0 0115 6.5v-.75a.75.75 0 010-1.5h.135l.629-3.147a.75.75 0 01.974-.564l2.012.671 2.013-.671a.74.74 0 01.613.062.749.749 0 01.36.502l.629 3.147h.135a.75.75 0 010 1.5v.75a3.754 3.754 0 01-3.75 3.75zM16.5 6.5c0 1.241 1.009 2.25 2.25 2.25S21 7.74 21 6.5v-.75h-4.5v.75zm4.335-2.25l-.404-2.02-1.444.481a.74.74 0 01-.474.001l-1.444-.482-.404 2.02h4.17zM21 23.75a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h.75a.75.75 0 00.75-.75V14a2.252 2.252 0 00-2.25-2.25h-3A2.252 2.252 0 0015 14v4.5c0 .414.336.75.75.75h.75a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-2.25a2.252 2.252 0 01-2.25-2.25V14a3.754 3.754 0 013.75-3.75h3A3.754 3.754 0 0124 14v4.5a2.252 2.252 0 01-2.25 2.25V23c0 .413-.337.75-.75.75zM1.964 20.75a1.502 1.502 0 01-1.342-2.17L6 7.823V3.5a.75.75 0 01.986-.712l3.051 1.015c.381.128.689.396.868.755.179.359.207.766.08 1.146a1.507 1.507 0 01-.588.77l-.982.651a.749.749 0 01-1.15-.774.743.743 0 01.321-.476l.979-.649L7.5 4.54v3.283l2.921 5.842a.751.751 0 01-.67 1.085.747.747 0 01-.671-.414L6.75 9.677 1.964 19.25h2.073l2.043-4.085c.128-.256.385-.415.671-.415s.543.159.671.414l.9 1.8a.75.75 0 01-1.342.671l-.23-.458-1.036 2.073h5.536a.75.75 0 010 1.5H1.964z"}})])
          )
        }
      }
    