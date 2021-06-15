
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
            children.concat([_c('path',{attrs:{"d":"M13.61 24a.756.756 0 01-.638-.355.745.745 0 01-.033-.73c.086-.172.875-1.7 2.224-2.723 1.774-2.143 1.39-3.42-.617-5.835H9.461c-2.442 2.963-2.044 4.123-.62 5.834 1.347 1.02 2.138 2.551 2.225 2.723a.745.745 0 01-.033.73.744.744 0 01-.637.356H3.164a.75.75 0 01-.75-.75 3.968 3.968 0 014.099-3.961c-.634-1.542-.316-3.016 1.053-4.932H3.897c-1.983 0-3.689-1.548-3.884-3.525a4.435 4.435 0 012.502-4.309.754.754 0 011.001.352c.087.18.098.384.032.573a.746.746 0 01-.382.428 2.925 2.925 0 00-1.658 2.835c.119 1.198 1.171 2.146 2.396 2.146h16.191a2.432 2.432 0 002.402-2.172 2.918 2.918 0 00-1.705-2.837.744.744 0 01-.389-.422.75.75 0 011.019-.938 4.422 4.422 0 012.569 4.319c-.196 1.997-1.915 3.551-3.914 3.551h-3.639c1.369 1.916 1.688 3.39 1.053 4.932a3.968 3.968 0 014.099 3.961.75.75 0 01-.75.75h-7.23zm6.365-1.5a2.473 2.473 0 00-2.348-1.714c-1.106 0-2.062.961-2.643 1.714h4.991zm-10.954 0c-.58-.753-1.537-1.714-2.643-1.714A2.474 2.474 0 004.03 22.5h4.991zM12.003 5.518c-1.059 0-1.866-.907-2.8-1.957C8.343 2.595 7.369 1.5 6.378 1.5c-1.102 0-1.661.829-1.661 2.464a.75.75 0 01-1.5 0C3.217 1.482 4.398 0 6.378 0c.72 0 1.425.262 2.149.801a8.04 8.04 0 016.952 0C16.203.262 16.908 0 17.628 0c1.979 0 3.161 1.482 3.161 3.964a.75.75 0 01-1.5 0c0-1.635-.559-2.464-1.661-2.464-.99 0-1.965 1.095-2.824 2.061-.936 1.05-1.743 1.957-2.801 1.957zM9.734 1.913c.208.222.406.445.589.651.576.648 1.294 1.454 1.68 1.454s1.103-.806 1.68-1.454c.183-.206.381-.428.589-.651a6.563 6.563 0 00-4.538 0z"}}),_c('path',{attrs:{"d":"M8.789 9.536a.75.75 0 01-.75-.75V7.179a.75.75 0 011.5 0v1.607a.75.75 0 01-.75.75zM15.217 9.536a.75.75 0 01-.75-.75V7.179a.75.75 0 011.5 0v1.607a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    