// import Intro from './components/intro.vue'
import Home from './components/home.vue'
import Experiences from './components/experiences.vue'
import About from './components/about.vue'
import Manifest from './components/manifest.vue'
import Event from './components/event.vue'

const routes = [
    { path: '/', component: Home, name: 'home' },
    // { path: '/home', component: Home, name: 'home' },
    { path: '/experiences', component: Experiences, name: 'experiences' },
    { path: '/about', component: About, name: 'about' },
    { path: '/manifest', component: Manifest, name: 'manifest' },
    { path: '/event/:slug', component: Event, name: 'event' }
]

export default routes