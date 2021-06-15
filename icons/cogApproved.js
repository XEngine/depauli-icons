
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
            children.concat([_c('path',{attrs:{"d":"M14.839 23.756a2.58 2.58 0 01-1.914-.853l-.877-.971a1.08 1.08 0 00-1.601 0l-.878.972a2.583 2.583 0 01-3.641.188 2.57 2.57 0 01-.848-2.052l.07-1.308c.015-.286-.083-.562-.276-.776a1.068 1.068 0 00-.801-.356l-.056.001-1.307.068a2.576 2.576 0 01-2.708-2.441A2.57 2.57 0 01.85 14.18l.972-.878a1.08 1.08 0 00.001-1.601l-.973-.878a2.56 2.56 0 01-.847-1.782 2.577 2.577 0 012.704-2.707l1.308.067a1.08 1.08 0 001.135-1.13l-.07-1.307a2.581 2.581 0 012.577-2.718c.727 0 1.424.31 1.912.852l.878.971a1.077 1.077 0 001.599.001l.879-.973a2.59 2.59 0 012.901-.65.747.747 0 01.404.98.746.746 0 01-.981.404 1.08 1.08 0 00-1.213.272l-.877.971a2.57 2.57 0 01-1.913.85c-.73 0-1.428-.31-1.915-.852l-.876-.969a1.068 1.068 0 00-.804-.356l-.057.001a1.08 1.08 0 00-1.016 1.135l.07 1.308a2.577 2.577 0 01-2.71 2.708l-1.307-.067-.057-.001c-.307 0-.59.126-.797.356a1.076 1.076 0 00.078 1.523l.972.878a2.581 2.581 0 010 3.827l-.972.878a1.072 1.072 0 00-.355.856c.015.288.141.552.355.745.202.182.448.278.714.278l.062-.002 1.311-.067a2.83 2.83 0 01.263 0c.687.035 1.32.336 1.782.847.462.511.696 1.171.661 1.859l-.07 1.309a1.074 1.074 0 001.075 1.134c.306 0 .598-.13.802-.356l.878-.972a2.575 2.575 0 011.913-.849c.729 0 1.427.31 1.915.85l.878.971a1.074 1.074 0 00.858.356 1.08 1.08 0 001.02-1.135l-.067-1.307a2.575 2.575 0 012.706-2.707l1.308.067.052.001a1.08 1.08 0 00.727-1.879l-.972-.878a2.565 2.565 0 01-.848-2.045 2.56 2.56 0 01.847-1.782l.972-.878c.154-.139.263-.317.318-.517a.751.751 0 011.448.395c-.13.477-.393.904-.76 1.236l-.972.878a1.074 1.074 0 00-.354.745 1.07 1.07 0 00.354.856l.972.878a2.582 2.582 0 01.188 3.641 2.582 2.582 0 01-1.914.851c-.045 0-.089-.001-.134-.003l-1.307-.067-.053-.001a1.077 1.077 0 00-1.077 1.133l.067 1.307a2.58 2.58 0 01-2.437 2.711c-.049.002-.095.004-.142.004z"}}),_c('path',{attrs:{"d":"M11.316 15.343a2.23 2.23 0 01-1.803-.9L7 11.092a.743.743 0 01-.142-.556.745.745 0 01.742-.644c.235 0 .459.112.6.3l2.513 3.351a.742.742 0 00.602.3.741.741 0 00.571-.267L22.673.768a.748.748 0 011.056-.091.751.751 0 01.091 1.057L13.033 14.542c-.11.131-.235.249-.371.35a2.226 2.226 0 01-1.346.451z"}})])
          )
        }
      }
    