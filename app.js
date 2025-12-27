new Vue({
    el: '#app',
    components: {
        // local nav component
        'site-nav': {
            template: `
                <nav class="nav-links">
                    <a href="#">Home</a>
                    <a href="#">Recipes</a>
                    <a href="#">Lifestyles</a>
                    <a href="#">Videos</a>
                    <a href="#">About</a>
                </nav>
            `
        }
    },
    data: {
        blog: {
            title: 'Food Blog',
            sectionTitle: 'Comments',
            footer: 'Copyright FOOD BLOG',
            profileImage: 'images/profile-placeholder.png',
            activeProfile: null,
            image: {
                src: 'images/chili.jpg',
                alt: 'White Chicken Chili'
            },
            authors: {
                Brianna: {
                    level: 'Novice',
                    bio: 'Food is my passion. I love experimenting with new recipes and sharing them with family.'
                },
                LINH: {
                    level: 'Intermediate',
                    bio: 'Cooking is my therapy. I enjoy adapting recipes to fit dietary needs.'
                },
                'CATHERINE LEONARDO': {
                    level: 'Advanced',
                    bio: 'I love comfort food with a healthy twist. Meal prep is my superpower.'
                },
                KALI: {
                    level: 'Expert',
                    bio: 'Crowd-pleasing recipes are my specialty. Always cooking for others.'
                }
            },
            posts: [
                {
                    author: 'Brianna',
                    date: 'February 18, 2021 @ 3:30 pm',
                    content: 'Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!'
                },
                {
                    author: 'LINH',
                    date: 'February 15, 2021 @ 9:46 am',
                    content: 'I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good. It’s a winner! I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him. Thank you Lisa!'
                },
                {
                    author: 'CATHERINE LEONARDO',
                    date: 'February 13, 2021 @ 12:58 pm',
                    content: 'I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.'
                },
                {
                    author: 'KALI',
                    date: 'February 13, 2021 @ 11:31 am',
                    content: 'This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!'
                }
            ]
        }
    },
    methods: {
        toggleProfile(author) {
            this.blog.activeProfile = author;
        }
    }
});
