
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
            children.concat([_c('path',{attrs:{"d":"M7.38 7.07a.75.75 0 00-1 0L1 12a.75.75 0 00.5 1.3h2.18v10a.75.75 0 00.75.75h4.89a.75.75 0 00.75-.75v-10h1v10a.75.75 0 00.75.75h2.43a.74.74 0 00.25-.05.74.74 0 00.25.05h4.85a.75.75 0 00.75-.75v-4.19h2.15a.75.75 0 00.5-1.31l-5.35-4.89a.75.75 0 00-.75-.15V6.39h2.71a.75.75 0 00.48-1.32L14.3.18a.75.75 0 00-1 0l-5.46 4.9a.75.75 0 00.5 1.31H11v4zm1.94 4.7a.75.75 0 00-.75.75v10H5.18v-10a.75.75 0 00-.75-.75h-1l3.44-3.14 3.42 3.13zm3.21 7.35H14v3.38h-1.47zm8-1.5h-1a.75.75 0 00-.75.75v4.13h-3.32v-4.14a.75.75 0 00-.75-.75h-1l3.44-3.13zM11.78 4.89h-1.47l3.53-3.15 3.74 3.15h-1.41a.75.75 0 00-.75.75V14l-2.89 2.63v-3.44a.74.74 0 00.2-1.23l-.2-.19V5.64a.75.75 0 00-.75-.75z"}})])
          )
        }
      }
    