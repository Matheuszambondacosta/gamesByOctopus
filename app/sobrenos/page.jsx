import React from 'react'
import Styles from './sobrenos.module.css'
import Image from 'next/image';
import Header from '../components/header/header';


function SobreNos() {
    return (
        <main className={Styles.main1}>

   <Header />
            <h1 className={Styles.titulo}>Sobre Nós</h1>

            <div className={Styles.container}>

                <div className={Styles.divisao}>

                    <div className={Styles.card}>
                        
                       <a href="https://www.instagram.com/borgesrth" target='_blank'><Image className={Styles.img} src="/pictureprofile.octopus01.png" width={180} height={180} /></a>
                        <p className={Styles.text1}><strong>Nome: </strong>Arthur Borges</p>
                        <p className={Styles.text1}><strong>Idade:</strong> 16 anos</p>
                        <p className={Styles.text1}><strong>Descrição:</strong> Conheça Arthur, um estudante dedicado que está trilhando seu caminho no mundo da tecnologia. Ele é aluno do colégio Sesi, onde absorve conhecimento além das disciplinas convencionais. Nos intervalos, você o encontrará imerso no mundo do Senai, aprimorando suas habilidades no curso de Desenvolvimento de Sistemas.</p>
                    </div>
                    <div className={Styles.card}>
                        <a href="https://www.instagram.com/nicolyval_" target='_blank'> <Image className={Styles.img} src="/pictureprofile.octopus02.jfif" width={180} height={180} /></a>
                        <p className={Styles.text1}><strong>Nome: </strong> Nicoly Val</p>
                        <p className={Styles.text1}><strong>Idade:</strong> 16 anos</p>
                        <p className={Styles.text1}><strong>Descrição:</strong>  Conheça Nicoly, um estudante dedicado que está trilhando seu caminho no mundo da tecnologia. Ele é aluno do colégio Sesi, onde absorve conhecimento além das disciplinas convencionais. Nos intervalos, você o encontrará imerso no mundo do Senai, aprimorando suas habilidades no curso de Desenvolvimento de Sistemas.</p>
                    </div>
                    <div className={Styles.card}>
                        <a href="https://www.instagram.com/mathh_costa" target='_blank'><Image className={Styles.img} src="/pictureprofile.octopus03.jfif" width={180} height={180} /></a>
                        <p className={Styles.text1}><strong>Nome: </strong> Matheus Zambom</p>
                        <p className={Styles.text1}><strong>Idade:</strong> 17 anos</p>
                        <p className={Styles.text1}><strong>Descrição:</strong>Conheça Matheus, um estudante dedicado que está trilhando seu caminho no mundo da tecnologia. Ele é aluno do colégio Sesi, onde absorve conhecimento além das disciplinas convencionais. Nos intervalos, você o encontrará imerso no mundo do Senai, aprimorando suas habilidades no curso de Desenvolvimento de Sistemas.</p>
                    </div>

                </div>

                <div className={Styles.divisao}>
                    <div className={Styles.card}>
                    <a href="https://www.instagram.com/bela.osouza" target='_blank'><Image className={Styles.img} src="/pictureprofile.octopus04.jfif" width={180} height={180} /></a>
                        <p className={Styles.text1}><strong>Nome: </strong> Isabela Souza</p>
                        <p className={Styles.text1}><strong>Idade:</strong>16 anos</p>
                        <p className={Styles.text1}><strong>Descrição:</strong>  Conheça Isa, um estudante dedicado que está trilhando seu caminho no mundo da tecnologia. Ele é aluno do colégio Sesi, onde absorve conhecimento além das disciplinas convencionais. Nos intervalos, você o encontrará imerso no mundo do Senai, aprimorando suas habilidades no curso de Desenvolvimento de Sistemas.</p>
                    </div>
                    <div className={Styles.card}>
                    <a href="https://www.instagram.com/joaoo.sntx" target='_blank'><Image className={Styles.img} src="/pictureprofile.octopusme.jfif" width={180} height={180} /></a>
                        <p className={Styles.text1}><strong>Nome: </strong>João Oliveira</p>
                        <p className={Styles.text1}><strong>Idade:</strong>16 anos</p>
                        <p className={Styles.text1}><strong>Descrição:</strong>  Conheça João, um estudante dedicado que está trilhando seu caminho no mundo da tecnologia. Ele é aluno do colégio Sesi, onde absorve conhecimento além das disciplinas convencionais. Nos intervalos, você o encontrará imerso no mundo do Senai, aprimorando suas habilidades no curso de Desenvolvimento de Sistemas.</p>
                    </div>

                </div>

            </div>
        </main>
    )
}

export default SobreNos