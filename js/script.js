const app = new Vue({
  el: '#app',
  data: {
    header: {
      openIndex: null,
      searchBtnClass: false,
      searchTxtClass: false,
      links: [
        {
          dropdown: true,
          summary: 'Home',
          items: [
            {
              txt: 'Presentation',
              href: '#presentation'
            },
            {
              txt: 'Schedule',
              href: '#schedule'
            },
            {
              txt: 'Features',
              href: '#latest'
            },
          ]
        },
        {
          dropdown: true,
          summary: 'Courses',
          items: [
            {
              txt: 'Law',
              href: '#'
            },
            {
              txt: 'Economy',
              href: '#'
            },
            {
              txt: 'Medicine',
              href: '#'
            },
            {
              txt: 'Computer science',
              href: '#'
            },
            {
              txt: 'Graphic design',
              href: '#'
            },
          ]
        },
        {
          dropdown: false,
          txt: 'About Us',
          href: '#'
        },
        {
          dropdown: true,
          summary: 'News',
          items: [
            {
              txt: 'Law',
              href: '#'
            },
            {
              txt: 'Economy',
              href: '#'
            },
            {
              txt: 'Medicine',
              href: '#'
            },
          ]
        },
        {
          dropdown: true,
          summary: 'Pages',
          items: [
            {
              txt: 'Law',
              href: '#'
            },
            {
              txt: 'Economy',
              href: '#'
            },
            {
              txt: 'Medicine',
              href: '#'
            },
          ]
        },
        {
          dropdown: false,
          txt: 'Contact',
          href: '#'
        },
        {
          dropdown: false,
          txt: 'Purchase',
          href: '#'
        },
      ]
    },
    footer: {
      search: '',
      socialLinks: [
        {
          icon: 'fa-facebook-f',
          link: '#',
        },
        {
          icon: 'fa-twitter',
          link: '#',
        },
        {
          icon: 'fa-instagram',
          link: '#',
        },
      ],
      links: [
        {
          title: 'Get EduPrime',
          links: [
            {
              text: 'Request a website',
              href: '#',
            },
            {
              text: 'Browse Themes',
              href: '#',
            },
            {
              text: 'Payment options',
              href: '#',
            },
            {
              text: 'Support System',
              href: '#',
            },
            {
              text: 'Checkout',
              href: '#',
            },
            {
              text: 'Purchase Theme',
              href: '#',
            },
          ]
        },
        {
          title: 'Networking',
          links: [
            {
              text: 'Purchase Theme',
              href: '#',
            },
            {
              text: 'Our Benefits',
              href: '#',
            },
            {
              text: 'Our team',
              href: '#',
            },
            {
              text: 'Our Services',
              href: '#',
            },
            {
              text: 'Other products',
              href: '#',
            },
            {
              text: 'My account',
              href: '#',
            },
          ]
        },
      ],
      searchCategories: [
        'economy', 'design', 'coaching', 'business', 'medicine', 'law', 'fitness'
      ],
    }
  },
  methods: {
    inputQuery (query) {
      this.footer.search = query;
    },
    setActive() {
      if ( this.header.searchBtnClass == false ) {
        this.header.searchBtnClass = true;
        this.header.searchTxtClass = true;
      } else {
        //Funzione search qui
        //Reset del bottone
        if ( this.footer.search == '' ) {
          this.header.searchBtnClass = false;
          window.setTimeout( () => {
            this.header.searchTxtClass = false;
            this.$forceUpdate();
          }, 500);
        }
      }
    },
    setOpen(i) {
      window.setTimeout( () => {
        this.header.openIndex = i;
      }, 1)
    }
  }
})
