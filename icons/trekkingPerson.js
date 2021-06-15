
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
            children.concat([_c('path',{attrs:{"d":"M18.5 23.999a.747.747 0 01-.725-.941l3.75-14.25a.749.749 0 111.449.382l-3.75 14.25a.747.747 0 01-.724.559zM4.279 14.197c-.139 0-.28-.016-.417-.046l-1.142-.262a1.886 1.886 0 01-1.425-2.248l1.211-4.833a1.878 1.878 0 012.238-1.382l1.142.254c.491.11.91.406 1.179.831.269.426.357.93.247 1.421l-.463 1.85a.69.69 0 01-.071.284l-.677 2.702a1.88 1.88 0 01-1.822 1.429zm-.086-1.51a.383.383 0 00.453-.283l.525-2.095-1.89-.422-.519 2.071a.405.405 0 00.051.299.379.379 0 00.238.169l.004.001 1.138.26zm1.343-3.833l.31-1.236a.41.41 0 00-.05-.304.37.37 0 00-.238-.17l-1.14-.255a.381.381 0 00-.456.282l-.316 1.26 1.89.423zM14.006 24c-.97 0-1.828-.618-2.135-1.537l-1.01-3.031-.67 2.835A2.244 2.244 0 018 23.999a2.331 2.331 0 01-.526-.067 2.251 2.251 0 01-1.665-2.698l3-12.752a2.258 2.258 0 012.186-1.733 2.232 2.232 0 011.805.901 5.9 5.9 0 004.229 2.1c1.217.006 2.221 1.015 2.221 2.25A2.252 2.252 0 0117 14.25a9.64 9.64 0 01-4.639-1.224l-.083.35 1.307 1.635a8.205 8.205 0 011.391 2.542l1.162 3.485A2.253 2.253 0 0114.006 24zM10.6 16.52c.229 0 .442.102.585.28l.066.082c.389.486.686 1.031.881 1.621l1.161 3.484a.749.749 0 00.949.474.751.751 0 00.474-.949l-1.162-3.484a6.687 6.687 0 00-1.139-2.079l-1.537-1.922a.741.741 0 01-.144-.64l.408-1.732a.749.749 0 011.167-.438c1.377.99 3 1.519 4.695 1.532a.75.75 0 00-.006-1.5l-.041-.001a7.425 7.425 0 01-5.336-2.67.782.782 0 00-.629-.328.745.745 0 00-.724.576l-3 12.75a.75.75 0 00.559.898.81.81 0 00.182.025.742.742 0 00.719-.578l1.14-4.823a.754.754 0 01.732-.578zM12.5 5.999c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    