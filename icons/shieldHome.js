
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
            children.concat([_c('path',{attrs:{"d":"M12 24.001a3.74 3.74 0 01-1.346-.25l-1.041-.4C4.76 21.484 1.5 16.737 1.5 11.538V3.924A2.239 2.239 0 012.806 1.88 22.305 22.305 0 0111.788 0l.219.001.186-.001c3.115 0 6.14.631 8.989 1.875A2.246 2.246 0 0122.5 3.929v7.609c0 5.199-3.26 9.946-8.113 11.813l-1.041.4a3.74 3.74 0 01-1.346.25zM11.8 1.5a20.84 20.84 0 00-8.382 1.749.732.732 0 00-.418.67v7.619c0 4.583 2.874 8.768 7.151 10.413l1.041.4a2.24 2.24 0 001.616.001l1.041-.4C18.126 20.305 21 16.121 21 11.538V3.924a.742.742 0 00-.43-.68A20.807 20.807 0 0012.194 1.5l-.187.001L11.8 1.5z"}}),_c('path',{attrs:{"d":"M9 16.5a2.234 2.234 0 01-1.593-.661 2.237 2.237 0 01-.657-1.592V10.1l-.256.224a.752.752 0 01-.989-1.128l4.518-3.953c.545-.477 1.247-.74 1.976-.74s1.431.263 1.976.741l4.518 3.953A.748.748 0 0118 10.511a.749.749 0 01-.494-.186l-.256-.224v4.15a2.252 2.252 0 01-2.25 2.25H9zm6-1.5a.75.75 0 00.75-.75V8.788l-2.762-2.416a1.495 1.495 0 00-.988-.37c-.365 0-.716.131-.988.37L8.25 8.789v5.46a.746.746 0 00.749.751h.751v-2.25A2.252 2.252 0 0112 10.5a2.252 2.252 0 012.25 2.25L15 15zm-2.25 0v-2.25a.75.75 0 00-1.5 0l1.5 2.25z"}})])
          )
        }
      }
    