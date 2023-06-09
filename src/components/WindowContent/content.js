import { MainContext } from '@/contexts/MainContext/mainContext';
import React, { useContext } from 'react'

const Content = ({ index }) => {

    const { openURL } = useContext(MainContext);

    if(index == 'content-one'){
        return (
        <div id={index}>
            Content 1
        </div>
        );
    } else if(index == 'content-two'){
        return (
        <div id={index}>
            <div className='social-card'>
                <img src='../vitor.jpg' alt='Caricatura do dev.' />
                <div className='social-card-content'>
                    <h1>Vítor Hugo Tavares Pereira</h1>
                    <div>
                        <p className='portfolio'>Meu portfólio</p>
                        <button onClick={() => openURL('https://github.com/yondv')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                        </button>
                        <button onClick={() => openURL('https://www.linkedin.com/in/v%C3%ADtor-hugo-tavares-pereira-a99435232/')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className='text-area'>
                <img src='../logo-white.png' />
                <div>
                    <p>Este projeto tem objetivo acadêmico e também a idéia de ajudar pessoas do meio cristão a chegar nos seus devidos lugares de filhos de Deus!</p>
                    <p>Caso queira me contatar para fins profissionais, segue meus dados. O link para o projeto está aqui.</p>
                </div>
            </div>
        </div>
        );
    } else if(index == 'content-three'){
        return (
        <div id={index}>
            Content 3
        </div>
        );
    }
};

export default Content;