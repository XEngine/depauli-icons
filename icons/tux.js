
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
            children.concat([_c('path',{attrs:{"d":"M12 24.002c-5.405 0-7.104-1.544-7.28-1.72a.755.755 0 01-.22-.53v-2.25H.75a.754.754 0 01-.75-.785l.571-12a6.752 6.752 0 011.962-4.432.412.412 0 01.094-.093A6.62 6.62 0 014.654.834l1.8-.771a.467.467 0 01.053-.018.712.712 0 01.404-.023.899.899 0 01.191.068l.035.02a9.642 9.642 0 004.872 1.392A9.61 9.61 0 0016.861.11l.03-.017a.368.368 0 01.057-.026c.026-.011.052-.022.079-.03a.742.742 0 01.517.026l1.799.771c.748.32 1.429.776 2.026 1.355a.415.415 0 01.093.093 6.751 6.751 0 011.965 4.435l.571 12a.751.751 0 01-.749.786h-3.75v2.25c0 .198-.08.391-.22.53-.175.175-1.875 1.719-7.279 1.719zm-6-2.631c.548.335 2.054 1.024 5.25 1.12V12.346C8.241 9.68 6.716 4.072 6.203 1.802l-.958.41a5.128 5.128 0 00-1.075.628c2.165 2.904 1.844 8.228 1.828 8.461L6 21.371zm6.75 1.12c3.195-.095 4.701-.785 5.25-1.12V11.265c-.024-.371-.319-5.55 1.83-8.425a5.087 5.087 0 00-1.076-.627l-.957-.41c-.513 2.27-2.039 7.877-5.047 10.544v10.144zm9.713-4.489l-.072-1.5h-2.892v1.5h2.964zm-17.963 0v-1.5H1.608l-.071 1.5H4.5zm17.82-3l-.39-8.214a5.26 5.26 0 00-1.03-2.866c-1.684 2.496-1.405 7.232-1.402 7.282l2.822 3.798zm-17.82 0v-3.75c.012-.229.254-4.875-1.401-7.33A5.266 5.266 0 002.07 6.788l-.391 8.214H4.5zM7.829 2.136C8.425 4.516 9.752 8.797 12 11c2.25-2.204 3.576-6.484 4.171-8.864a11.184 11.184 0 01-4.162.866 11.23 11.23 0 01-4.18-.866z"}}),_c('path',{attrs:{"d":"M11.25 6.002a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}})])
          )
        }
      }
    