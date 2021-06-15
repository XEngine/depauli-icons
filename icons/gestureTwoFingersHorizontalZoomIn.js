
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
            children.concat([_c('path',{attrs:{"d":"M17.247 23.75a.745.745 0 01-.656-.386.746.746 0 01-.065-.57l.816-2.856a2.251 2.251 0 00-1.156-2.63l-.774-.387a.746.746 0 01-.415-.671V12.5a.75.75 0 00-1.5 0v4.498a.75.75 0 01-1.5 0V11a.75.75 0 00-1.5 0v6.75a.745.745 0 01-.75.75.753.753 0 01-.335-.079l-1.175-.587a.874.874 0 00-.677-.046.883.883 0 00-.513.446.893.893 0 00.239 1.088l3.794 3.097a.751.751 0 01-.474 1.331.753.753 0 01-.474-.169l-3.789-3.093a2.399 2.399 0 01-.638-2.923 2.373 2.373 0 011.379-1.2 2.385 2.385 0 011.823.126l.09.045V11a2.252 2.252 0 012.25-2.25c1.036 0 1.91.703 2.171 1.658a2.252 2.252 0 013.079 2.092v3.287l.359.179a3.754 3.754 0 011.928 4.384l-.816 2.856a.753.753 0 01-.721.544z"}}),_c('path',{attrs:{"d":"M19.498 9.498a.743.743 0 01-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l2.47-2.47H2.559l2.47 2.47c.142.141.22.33.22.53s-.078.389-.22.53c-.141.142-.33.22-.53.22s-.389-.078-.53-.22l-3.75-3.75a.74.74 0 01-.163-.245l-.01-.026a.737.737 0 01.001-.521l.006-.02a.74.74 0 01.166-.249L3.968.718a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-2.47 2.47h18.879l-2.47-2.47c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.749.749 0 011.06 0l3.75 3.75a.74.74 0 01.163.245l.01.026a.73.73 0 010 .518l-.006.016a.764.764 0 01-.168.257l-3.749 3.749a.742.742 0 01-.529.219z"}})])
          )
        }
      }
    