
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
            children.concat([_c('path',{attrs:{"d":"M1.5 24.003a.75.75 0 01-.531-1.281l5.828-5.832a3.026 3.026 0 012.125-.878c.26 0 .52.034.771.101l5.713 1.528c.155.046.303.068.452.068.401 0 .778-.156 1.061-.438l3.77-3.772H18a.75.75 0 010-1.5h4.5c.087 0 .174.016.258.047l.016.006a.76.76 0 01.419.412l.01.026a.75.75 0 01.047.259v4.5a.75.75 0 01-1.5 0V14.56l-3.77 3.771a2.98 2.98 0 01-2.121.879 2.99 2.99 0 01-.861-.126l-5.692-1.522a1.504 1.504 0 00-1.448.389L2.03 23.783a.743.743 0 01-.53.22zM10.5 12.753a.75.75 0 01-.75-.75H9a.75.75 0 010-1.5h2.031a.589.589 0 00.551-.372.588.588 0 00-.329-.77l-2.064-.825a2.085 2.085 0 01-1.313-1.94c0-.559.217-1.084.612-1.48a2.078 2.078 0 011.262-.602v-.011a.75.75 0 011.5 0H12a.75.75 0 010 1.5H9.967a.587.587 0 00-.418.174.59.59 0 00.198.967l2.062.824a2.08 2.08 0 011.146 1.119c.22.514.227 1.082.019 1.601a2.08 2.08 0 01-1.725 1.304v.011a.75.75 0 01-.749.75z"}}),_c('path',{attrs:{"d":"M6 15.002a.747.747 0 01-.45-.15 8.29 8.29 0 01-3.136-8.234C3.189 2.784 6.589.001 10.498.001c.546 0 1.097.055 1.636.164 4.459.901 7.353 5.262 6.453 9.72a.753.753 0 01-.885.587.746.746 0 01-.476-.32c-.111-.167-.15-.367-.111-.563a6.758 6.758 0 00-6.618-8.088 6.77 6.77 0 00-6.614 5.414 6.78 6.78 0 002.566 6.736A.75.75 0 016 15.002z"}})])
          )
        }
      }
    