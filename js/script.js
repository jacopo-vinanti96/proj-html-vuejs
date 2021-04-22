const app = new Vue({
  el: '#app',
  data: {
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
  }
})
