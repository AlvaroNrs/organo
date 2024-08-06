import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <section className='areas-footer'>
                <section className='area-icones-footer'>
                    <img src='/imagens/fb.png' alt='Logo do Facebook'/>
                    <img src='/imagens/tw.png' alt='Logo do Twitter'/>
                    <img src='/imagens/ig.png' alt='Logo do Instagram'/>
                </section>
                <img className='logo-footer' src='/imagens/logo.png' alt='Logo Organo'/>
                <section>
                    <p>Desenvolvido por Alura</p>
                </section>
            </section>
        </footer>
    )
}

export default Footer