
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
              attrs: Object.assign({"data-name":"Outline Version","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M23.25 2.45H.75A.75.75 0 000 3.2v17.6a.75.75 0 00.75.75h4.89a.75.75 0 00.75-.75v-11H8.8v11a.75.75 0 00.75.75h4.89a.75.75 0 00.75-.75v-11h2.41v11a.75.75 0 00.75.75h4.89a.75.75 0 00.76-.75V3.2a.75.75 0 00-.75-.75zm-.75 17.6h-3.39v-11a.75.75 0 00-.75-.75h-3.91a.75.75 0 00-.75.75v11h-3.4v-11a.75.75 0 00-.75-.75H5.64a.75.75 0 00-.75.75v11H1.5V3.95h21z"}})])
          )
        }
      }
    