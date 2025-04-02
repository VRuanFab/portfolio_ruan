import Habilidades from '../../pages/habilidades/habilidades'
import Projetos from '../../pages/projetos/projetos'
import SobreMim from '../../pages/sobre_mim/sobre_mim'
import HomePage from '../../pages/homepage'


export const mainPage_routes = [
                    {
                        name: 'HomePage',
                        element: <HomePage/>,
                        name_drop_list: 'Página inicial'
                    },
                    {
                        name: 'SobreMim',
                        element: <SobreMim/>,
                        name_drop_list: 'Sobre mim'
                    },
                    {
                        name: 'Habilidades',
                        element: <Habilidades/>,
                        name_drop_list: 'Habilidades'
                    },
                    {
                        name: 'Projetos',
                        element: <Projetos/>,
                        name_drop_list: 'Projetos'
                    },
                ]