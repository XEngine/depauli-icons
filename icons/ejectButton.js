
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
            children.concat([_c('path',{attrs:{"d":"M9.059 13.399a1.72 1.72 0 01-1.217-.515 1.216 1.216 0 01-.108-1.569l2.891-4.022c.017-.024.036-.046.055-.068a1.774 1.774 0 011.314-.581l.085.002c.476.021.916.227 1.238.579a.67.67 0 01.056.069l2.894 4.027c.35.47.307 1.127-.106 1.557a1.719 1.719 0 01-1.236.521l-.059-.001H9.104l-.045.001zm.104-1.5l5.674-.001-2.647-3.683a.28.28 0 00-.177-.071l-.02-.001a.272.272 0 00-.183.072l-2.647 3.684z"}}),_c('path',{attrs:{"d":"M12 23.998c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm0-22.5c-5.79 0-10.5 4.71-10.5 10.5s4.71 10.5 10.5 10.5 10.5-4.71 10.5-10.5-4.71-10.5-10.5-10.5z"}}),_c('path',{attrs:{"d":"M8.313 16.393a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5z"}})])
          )
        }
      }
    