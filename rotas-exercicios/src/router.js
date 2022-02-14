import Vue from 'vue'
import Router from 'vue-router'
import Menu from './components/template/Menu'
import MenuAlt from './components/template/MenuAlt'
import Inicio from './components/Inicio'
import Usuario from './components/usuario/Usuario'
import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioEditar from './components/usuario/UsuarioEditar'

Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return { selector: to.hash }
        } else {
            return { x: 0, y: 0}
        }
        
    },
    routes: [{
        path: '/',
        // component: Inicio,
        name: 'inicio',
        components: {
            default: Inicio,
            menu: Menu
        }
    }, {
        path: '/usuario',
        // component: Usuario,
        components: {
            default: Usuario,
            menu: MenuAlt,
            menuInferior: MenuAlt
        },
        props: true,
        children: [
            { path : '', component: UsuarioLista },
            { path : ':id', component: UsuarioDetalhe, props: true },
            { path : ':id/editar', component: UsuarioEditar, props: true ,
                name: 'editarUsuario'}
        ]
    }, {
        path: '/redicionar',
        redirect: '/usuario'
    }, {
        path: '*',
        redirect: '/'
    } ]
})