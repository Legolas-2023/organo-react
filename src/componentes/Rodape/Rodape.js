import './Rodape.css'

const Rodape = () =>{
    return(
        <div className='footer'>
            <div className='icones'>
                <a href='https://www.facebook.com/'><img src='./imagens/fb.png' alt=''/></a>
                <a href='https://www.twitter.com/'><img src='./imagens/tw.png' alt=''/></a>
                <a href='https://www.instagram.com/'><img src='./imagens/ig.png' alt=''/></a>
            </div>
            <img src='./imagens/logo.png' alt='imagem organo'/>
            <p>
                Desenvolvido por Crystian Tasca.
            </p>
        </div>
    )
}


export default Rodape