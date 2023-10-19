'use client'
import Image from 'next/image'
import styles from './page.module.css'
import React, { useState } from 'react';
import Star from './components/star/star';
import ListaJogo from '@/models/JogoLista';

const listaJogo = new ListaJogo();

function Home() {

  // Inputs
  const [imageURL, setImageURL] = useState('');
  const [usuario, setUsuario] = useState('');
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [nota, setNota] = useState('');
  const [lancamento, setLancamento] = useState('');
  const [plataformas, setPlataformas] = useState('');

  // Dados da Classe
  const [comment, setComment] = useState(listaJogo.getHistorico());

  // Edição
  const [flag, setFlag] = useState(0);
  const [editButton, setEditButton] = useState(false);

  // Adicionar Comentário
  const addComentario = () => {
    listaJogo.addComentario(imageURL, usuario, nome, descricao, nota, lancamento, plataformas);
    atualizarValores();
  };

  const exclude = (id) => {
    listaJogo.excluirComment(id);
    atualizarValores();
  };
  const edit = (id) => {
    const comentario = listaJogo.getComentarioPorId(id);

    setImageURL(comentario.imageURL);
    setUsuario(comentario.usuario);
    setNome(comentario.nome);
    setDescricao(comentario.descricao);
    setNota(comentario.nota);
    setLancamento(comentario.dataLancamento);
    setPlataformas(comentario.plataformas);

    setEditButton(true);
    setFlag(id);
  };
  const update = () => {
    listaJogo.atualizarComentario(flag, imageURL, usuario, nome, descricao, nota, lancamento, plataformas);
    atualizarValores();
    setEditButton(false);
    setFlag(0);
  };

  const atualizarValores = () => {
    setImageURL('');
    setUsuario('');
    setNome('');
    setDescricao('');
    setNota('');
    setLancamento('');
    setPlataformas('');

    const historico = listaJogo.getHistorico();
    setComment(historico);
  };
  return (
    <main className={styles.main}>
      <h1>Hello World</h1>
      <div className={styles.fundo}>
        <div>

          {[1, 2, 3, 4, 5].map((starIndex) => (
            <Star
              key={starIndex}
              isActive={starIndex <= nota} // Marca as estrelas até a nota atual
              onClick={() => setNota(starIndex)} // Atualiza a nota quando a estrela é clicada
            />
          ))}


        </div>
        <input className={styles.input}
          type="text"
          placeholder="URL da imagem"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        <input className={styles.input}
          value={usuario}
          type="text"
          name="usuario"
          placeholder="Usuário"
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input className={styles.input}
          value={nome}
          type="text"
          name="nome"
          placeholder="Nome do Jogo"
          onChange={(e) => setNome(e.target.value)}
        />
        <input className={styles.input}
          value={descricao}
          type="text"
          name="descricao"
          placeholder="Descrição do Jogo"
          onChange={(e) => setDescricao(e.target.value)}
        />
        <input className={styles.input}
          value={nota}
          type="text"
          name="nota"
          placeholder="Nota do Jogo"
          onChange={(e) => setNota(e.target.value)}


        />
        <input className={styles.input}
          value={lancamento}
          type="date"
          name="lancamento"
          placeholder="Data de Lançamento"
          onChange={(e) => setLancamento(e.target.value)}
        />
        <input className={styles.input}
          value={plataformas}
          type="text"
          name="plataformas"
          placeholder="Plataformas"
          onChange={(e) => setPlataformas(e.target.value)}
        />
        {editButton ? (
          <button onClick={update}>Editar</button>
        ) : (
          <button className={styles.botao} onClick={addComentario}>Adicionar Comentário</button>
        )}

        {comment.map((comentario) => (
          <div key={comentario.id}>
            <p> {comentario.usuario}</p>
            <p>Nome: {comentario.nome}</p>
            <p>Descrição: {comentario.descricao}</p>
            <p>Nota: {comentario.nota}</p>
            <p>Data de Lançamento: {comentario.formatedData(comentario.dataLancamento)}</p>
            <p>Plataformas: {comentario.plataformas}</p>
            <img src={imageURL} alt="Imagem do usuário" />

            <button onClick={() => exclude(comentario.id)}>Excluir</button>
            <button onClick={() => edit(comentario.id)}>Editar</button>
          </div>
        ))}
      </div>

    </main>
  )
}
export default Home;
