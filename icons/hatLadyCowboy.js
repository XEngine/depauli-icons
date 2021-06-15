
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
            children.concat([_c('path',{attrs:{"d":"M4.5 18.122A4.505 4.505 0 010 13.624c0-.207.167-.375.374-.375l.751-.002a.373.373 0 01.375.375 3.017 3.017 0 002.686 2.98c.928-2.144 1.267-4.325 1.542-6.09.332-2.138.572-3.682 1.659-4.331.3-.179.641-.27 1.015-.27.331 0 .684.068 1.08.209.331.118.619.223.872.315.826.302 1.24.453 1.609.453.368 0 .783-.151 1.609-.453.283-.103.591-.216.949-.342.405-.143.761-.213 1.089-.213.362 0 .686.088.965.262.934.583 1.081 1.859 1.284 3.624.214 1.859.505 4.387 1.901 6.841a2.981 2.981 0 001.863-.866c.566-.567.878-1.32.878-2.121a.75.75 0 111.499.002 4.467 4.467 0 01-1.317 3.181 4.471 4.471 0 01-3.181 1.319H4.5zm13.566-1.5a14.025 14.025 0 01-.632-1.5H15c0 .535-.14 1.049-.402 1.5h3.468zm-6.066-3c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm-2.598 3a2.974 2.974 0 01-.402-1.5H6.31a18.681 18.681 0 01-.508 1.5h3.6zm7.578-3c-.345-1.369-.491-2.64-.612-3.683-.125-1.089-.267-2.323-.588-2.524a.345.345 0 00-.175-.035c-.147 0-.344.043-.584.128-.322.114-.602.216-.851.307-.319.122-.677.594-1.057 1.095-.564.745-1.203 1.589-2.229 2.132a.754.754 0 01-1.014-.312.75.75 0 01.312-1.014c.586-.311 1.045-.824 1.446-1.336-.467-.059-.981-.241-1.789-.536l-.029-.01a68.325 68.325 0 00-.83-.3 1.782 1.782 0 00-.572-.122.487.487 0 00-.252.057c-.482.288-.707 1.738-.946 3.273-.136.872-.287 1.846-.516 2.88h2.712c.533-.918 1.527-1.5 2.594-1.5s2.061.582 2.594 1.5h2.386z"}})])
          )
        }
      }
    