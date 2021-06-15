
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
            children.concat([_c('path',{attrs:{"d":"M19.496 11.248a.743.743 0 01-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l2.47-2.47h-4.189a.75.75 0 010-1.5h4.189l-2.47-2.47c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.749.749 0 011.06 0l3.75 3.75a.74.74 0 01.163.245l.01.026a.73.73 0 010 .517l-.006.016a.764.764 0 01-.168.257l-3.749 3.749a.743.743 0 01-.53.22zM6.746 13.498a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}}),_c('path',{attrs:{"d":"M11.246 24a.75.75 0 01-.75-.75V12c0-1.654-1.346-3-3-3s-3 1.346-3 3v11.248a.75.75 0 01-1.5 0V12c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5v11.25a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M1.449 14.25a.746.746 0 01-.673-.418 7.453 7.453 0 01-.383-5.727 7.453 7.453 0 013.779-4.321 7.418 7.418 0 013.319-.781c.815 0 1.626.134 2.408.399a7.453 7.453 0 014.321 3.779 7.546 7.546 0 010 6.652.744.744 0 01-.673.417.749.749 0 01-.672-1.082 6.038 6.038 0 000-5.322 5.962 5.962 0 00-3.456-3.023 5.939 5.939 0 00-4.581.305c-1.437.712-2.511 1.939-3.024 3.457s-.404 3.146.306 4.582a.74.74 0 01.038.573.743.743 0 01-.709.51z"}})])
          )
        }
      }
    