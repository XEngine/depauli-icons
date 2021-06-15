
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
            children.concat([_c('path',{attrs:{"d":"M1.086 24.014a4.8 4.8 0 01-.396-.016.747.747 0 01-.688-.806.755.755 0 01.75-.691l.054.002a3.466 3.466 0 003.224-1.611.755.755 0 01.577-.347l.057-.002c.217 0 .424.094.566.258a4.94 4.94 0 003.372 1.698 3.268 3.268 0 002.754-1.59.753.753 0 01.583-.364l.058-.002c.223 0 .433.097.576.265a4.812 4.812 0 003.384 1.693h.026a3.12 3.12 0 002.703-1.58.751.751 0 01.591-.376l.057-.002a.75.75 0 01.586.278 4.53 4.53 0 003.357 1.679c.2.007.386.092.522.239a.744.744 0 01.2.538.746.746 0 01-.745.723l-.038-.001a5.995 5.995 0 01-3.803-1.539A4.664 4.664 0 0115.955 24h-.052a6.332 6.332 0 01-3.825-1.56A4.79 4.79 0 018.579 24h-.006c-.025 0-.044 0-.062-.002a6.46 6.46 0 01-3.777-1.573 4.95 4.95 0 01-3.648 1.589zM1.088 19.22c-.132 0-.264-.005-.397-.016a.75.75 0 01-.688-.807.756.756 0 01.752-.69l.05.001a3.467 3.467 0 003.225-1.61.755.755 0 011.007-.25l-2.116-3.596a1.136 1.136 0 01.052-1.237 1.253 1.253 0 011.028-.522h3.273l3.801-4.096c.256-.259.581-.397.924-.398h.027c.327 0 .64.133.882.373l3.821 4.121h3.273c.41 0 .785.191 1.021.511.265.374.287.86.061 1.245l-2.07 3.573a.766.766 0 01.264-.071l.056-.002a.75.75 0 01.588.278 4.53 4.53 0 003.357 1.678c.2.007.385.092.522.239s.208.338.2.538a.753.753 0 01-.742.723l-.043-.001a5.995 5.995 0 01-3.8-1.537 4.642 4.642 0 01-3.439 1.539h-.074a6.325 6.325 0 01-3.823-1.559 4.79 4.79 0 01-3.559 1.557 6.51 6.51 0 01-1.165-.193h-.029a.75.75 0 01-.435-.139 6.36 6.36 0 01-2.157-1.24 4.955 4.955 0 01-3.647 1.588zm10.91-3.469a.75.75 0 01.575.266 4.815 4.815 0 003.384 1.691h.026c.069 0 .139-.002.21-.008l3.305-5.705H4.512l3.281 5.583a5.1 5.1 0 00.807.129 3.264 3.264 0 002.754-1.589.753.753 0 01.583-.364c.023-.003.042-.003.061-.003zm-2.679-5.256h5.363l-2.68-2.892-2.683 2.892zM20.498 6.753l-.141-.003h-3.564l-.085.002c-1.295 0-2.397-1.058-2.457-2.358a2.466 2.466 0 012.467-2.428l.107.002c.089 0 .181.006.275.017a3.597 3.597 0 013.199-1.987l.088.002.104-.002a3.505 3.505 0 013.508 3.342.985.985 0 010 .077 3.5 3.5 0 01-3.501 3.336zm-.003-1.5c1.06 0 1.936-.823 2.003-1.877a2.006 2.006 0 00-2.002-1.877l-.118.002-.093-.002a2.08 2.08 0 00-1.992 1.566.749.749 0 01-1.035.504 1.163 1.163 0 00-.469-.101l-.058-.001a.979.979 0 00-.98.892.977.977 0 00.977.892l3.652-.001.115.003z"}})])
          )
        }
      }
    