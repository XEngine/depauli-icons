
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M8.873 18.318c-.226 0-.45-.061-.648-.176-.447-.261-.725-.768-.725-1.324V7.182c0-.555.277-1.062.723-1.323a1.287 1.287 0 011.281-.014l8.504 4.823.053.033a1.571 1.571 0 01-.057 2.632l-8.496 4.816a1.287 1.287 0 01-.635.169zM9 16.713l8.226-4.663a.07.07 0 00.019-.037.068.068 0 00-.011-.054L9 7.284v9.429z"}})])
          )
        }
      }
    