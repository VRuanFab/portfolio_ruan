import Habilidades from '../../pages/habilidades/habilidades'
import Projetos from '../../pages/projetos/projetos'
import SobreMim from '../../pages/sobre_mim/sobre_mim'
import HomePage from '../../pages/homepage'


export const mainPage_routes = [
                    {
                        name: 'HomePage',
                        element: <HomePage/>
                    },
                    {
                        name: 'SobreMim',
                        element: <SobreMim/>
                    },
                    {
                        name: 'Habilidades',
                        element: <Habilidades/>
                    },
                    {
                        name: 'Projetos',
                        element: <Projetos/>
                    },
                ]