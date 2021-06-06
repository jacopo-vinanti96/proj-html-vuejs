const app = new Vue({
  el: '#app',
  data: {
    //------------ Header data ------------
    header: {
      openIndex: null,
      searchBtnClass: false,
      searchTxtClass: false,
      // Nav links and dropdown lists
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
    //---------- Main Data ------------
    main: {
      facultyIndex: 0,
      fadeInIndex: 0,
      // Faculty boxes data
      faculties: [
        {
          src: 'Gavel-v2.png',
          alt: 'law faculty icon',
          title: 'Law faculty',
        },
        {
          src: 'Coins-tabs-v2.png',
          alt: 'economy icon',
          title: 'Economy',
        },
        {
          src: 'Medicine-tabs-v2.png',
          alt: 'medicine icon',
          title: 'Medicine',
        },
        {
          src: 'Computer-tabs-v2.png',
          alt: 'computer icon',
          title: 'Computer Science',
        },
        {
          src: 'Palette-tabs-v2.png',
          alt: 'Graphic Design icon',
          title: 'Graphic Design',
        },
      ],
      // Faculty overviw data
      overviews: [
        {
          title: 'Law faculty',
          p: 'law',
          src: 'Gavel-Illustration-e1556884768193.png',
          href: '#',
        },
        {
          title: 'Economy',
          p: 'economics',
          src: 'Economy.png',
          href: '#',
        },
        {
          title: 'Medicine',
          p: 'medicine',
          src: 'Medicine.png',
          href: '#',
        },
        {
          title: 'Comupter Science',
          p: 'informatics',
          src: 'Computer-Science.png',
          href: '#',
        },
        {
          title: 'Graphic Design',
          p: 'graphics',
          src: 'Graphic-Design.png',
          href: '#',
        },
      ]
    },
    // ------------ Footer Data ------------
    footer: {
      search: '',
      // Social links
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
      // Footer columns containing links
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
      // Top searched categories for query btns
      searchCategories: [
        'economy', 'design', 'coaching', 'business', 'medicine', 'law', 'fitness'
      ],
    }
  },
  methods: {
    //Insert selected query in input
    inputQuery (query) {
      this.footer.search = query;
    },
    //Reduces search btn size to show input
    expandInput() {
      if ( this.header.searchBtnClass == false ) {
        this.header.searchBtnClass = true;
        this.header.searchTxtClass = true;
      } else {
        //Search function here...
        //Btn reset
        if ( this.footer.search == '' ) {
          this.header.searchBtnClass = false;
          window.setTimeout( () => {
            this.header.searchTxtClass = false;
            this.$forceUpdate();
          }, 500);
        }
      }
    },
    //Fade in faculty overviews
    fadeIn (i) {
      window.setTimeout( () => {
        this.main.fadeInIndex = i;
      }, 1);
    },
    //Faculty carousel setActive
    setActive(i) {
      this.main.facultyIndex = i;
    },
    //Nav setOpen dropdown list
    setOpen(i) {
      window.setTimeout( () => {
        this.header.openIndex = i;
      }, 1)
    }
  }
})
