
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
            children.concat([_c('circle',{attrs:{"cx":"12","cy":"16.873","r":"1.125"}}),_c('path',{attrs:{"d":"M12 14.248a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M12 23.997a2.546 2.546 0 01-1.81-.748L.75 13.81a2.564 2.564 0 010-3.621L10.19.75a2.542 2.542 0 011.807-.751c.685 0 1.327.265 1.81.747l9.444 9.443a2.566 2.566 0 010 3.621l-9.44 9.439a2.55 2.55 0 01-1.811.748zm-.75-1.809c.2.199.466.309.75.309s.55-.11.75-.31l9.44-9.439a1.064 1.064 0 000-1.501L12.749 1.81c-.01-.009-.024-.025-.033-.035a1.034 1.034 0 00-.713-.276c-.288 0-.553.111-.753.311l-9.441 9.44a1.063 1.063 0 000 1.5l9.441 9.438z"}})])
          )
        }
      }
    